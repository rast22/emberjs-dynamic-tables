import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type Owner from '@ember/owner';
import { action } from '@ember/object';
import Store from '@ember-data/store';
import { inject as service } from '@ember/service';

export default class MainTableComponent extends Component {
  @tracked tableData: any = [];
  @service store: Store;
  @tracked isLoading = false;
  @tracked currentPage = 1;
  @tracked totalItems = 0;
  @tracked itemsPerPage = 10;
  @tracked totalPages = 0;

  constructor(owner: Owner, args: any) {
    super(owner, args);
    this.store = owner.lookup('service:store');
    this.loadKeywordsResults();
  }

  @action
  async loadKeywordsResults() {
    this.isLoading = true;
    try {
      const queryParams = {
        page: this.currentPage,
        perPage: this.itemsPerPage,
      };

      const a = await this.store.query('keyword', queryParams);
      this.totalItems = a['meta']['totalItems'];
      this.totalPages = a['meta']['totalPages'];
      this.tableData = a;
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }

  @action
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }

  @action
  previousPage() {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }

  @action
  changePage(newPage:number) {
    this.currentPage = newPage;
    this.loadKeywordsResults();
  }
}
