import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type Owner from '@ember/owner';
import { action } from '@ember/object';
import Store from '@ember-data/store';
import { inject as service } from '@ember/service';

export default class MainTableComponent extends Component {
  @tracked tableData: any = [];
  @service store: Store;

  constructor(owner: Owner, args: any) {
    super(owner, args);
    this.store = owner.lookup('service:store');
  }

  @action
  async loadKeywordsResults() {
    console.log('store', this.store);
    this.store
      .findAll('keyword', {})
      .then((a) => {
        console.log(a);
      })
      .catch((e) => {
        console.log(e);
      });
    const a = await this.store.findAll('keyword', {});
    console.log(a);
    this.tableData = a;
  }
}
