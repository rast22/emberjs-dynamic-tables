import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type Owner from '@ember/owner';
import { action } from '@ember/object';
import Store from '@ember-data/store';
import { inject as service } from '@ember/service';
import type KeywordModel from "emberjs-dynamic-tables/models/keyword";

export default class MainTableComponent extends Component {

  // data variables
  @tracked tableData: any = [];
  @service store: Store;
  @tracked competitors = new Map<string, { rank: number | null; rank_type: string | null } >();
  @tracked isLoading = false;

  // pagination variables
  @tracked currentPage = 1;
  @tracked totalItems = 0;
  @tracked itemsPerPage = 10;
  @tracked totalPages = 0;
  @tracked currentRows = 0;

  constructor(owner: Owner, args: any) {
    super(owner, args);
    this.loadKeywordsResults();
  }

  @action
  async loadKeywordsResults() {
    this.isLoading = true;
    try {
      const response = await this.store.findAll('keyword');
      this.tableData = response;
      this.innitPagination();
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }

  @action
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentRows = this.tableData.slice(this.itemsPerPage * this.currentPage, this.itemsPerPage * (this.currentPage + 1))
      this.changePage(this.currentPage + 1);
    }
  }

  @action
  previousPage() {
    if (this.currentPage > 1) {
      this.currentRows = this.tableData.slice(this.itemsPerPage * (this.currentPage - 2), this.itemsPerPage * (this.currentPage - 1))
      this.changePage(this.currentPage - 1);
    }
  }

  @action
  changePage(newPage:number) {
    this.currentPage = newPage;
  }

  /**
   *  Select and get a  competitor for a given keyword.
   * @returns {Promise<void>}
   * @param event
   */
  @action
  async selectCompetitor(event: Event): Promise<void> {
    const target = event.target as HTMLSelectElement;
    const keyword_id = target.id;
    const competitor_id = target.value;

    // Use a composite key for each competitor data
    const compositeKey = `${keyword_id}_${competitor_id}`;

    try {
      // Check if we already have the competitor data
      if(!this.competitors.has(compositeKey)) {
        let competitorData = await this.store.queryRecord('competitor', { keyword_id: keyword_id, competitor: competitor_id });

        // Find keyword to update selected competitor state
        let keywordToUpdate = this.tableData.find((keyword: KeywordModel) => keyword.id === keyword_id);
        if (keywordToUpdate) {
          keywordToUpdate.selected_competitor = competitor_id;

          // Add competitors to map
          this.competitors.set(compositeKey, { rank: competitorData.rank, rank_type: competitorData.rank_type });

        }
      } else {
        let keywordToUpdate = this.tableData.find((keyword: KeywordModel) => keyword.id === keyword_id);
        if (keywordToUpdate) {
          keywordToUpdate.selected_competitor = competitor_id;
        }
      }
      console.log('competitors', this.competitors)
    } catch (e) {
      console.error('Error fetching competitor data:', e);
    }
  }

  /**
   * Get the competitor rank for a given keyword.
   * @param keyword
   * @returns {number | string}
   */
  @action
  getCompetitorRank(keyword: KeywordModel): number | string {
    const compositeKey = `${keyword.id}_${keyword.selected_competitor}`;

    const competitorData = this.competitors.get(compositeKey);
    if (competitorData) {
      // Access the rank property
      const rank = competitorData.rank;
      return rank ?? 'No data for this competitor';
    }

    return 'No data for this competitor';
  }

  /**
   * Get the competitor rank type for a given keyword.
   * @param keyword
   * @returns {string}
   */
  @action
  getCompetitorRankType(keyword: KeywordModel): string {
    const compositeKey = `${keyword.id}_${keyword.selected_competitor}`;

    const competitorData = this.competitors.get(compositeKey);
    if (competitorData) {
      // Access the rank property
      const rank = competitorData.rank_type;
      return rank ?? 'No data for this competitor';
    }

    return 'No data for this competitor';
  }

  innitPagination() {
    this.totalItems = this.tableData.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.currentRows = this.tableData.slice(0, this.itemsPerPage)
  }

}
