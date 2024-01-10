// import { module, test } from 'qunit';
// import { setupRenderingTest } from 'emberjs-dynamic-tables/tests/helpers';
// import { render, settled, waitFor, waitUntil } from '@ember/test-helpers';
// import { hbs } from 'ember-cli-htmlbars';
// import Service from '@ember/service';
// import { A } from '@ember/array';
// import KeywordModel from "../../../app/models/keyword";
//
// // Mock service for store
// class MockStoreService extends Service {
//   async findAll() {
//     // Return mock data
//     return A([{ id: '1', query: 'test', last_processed_at: new Date().toISOString(), position: 1, results_count: 100, competitors: ['competitor1', 'competitor2'], selected_competitor: null }]);
//   }
// }
//
// module('Integration | Component | main-table', function (hooks) {
//   setupRenderingTest(hooks);
//
//   hooks.beforeEach(function () {
//     this.owner.register('service:store', MockStoreService);
//   });
//
//   test('it renders', async function (assert) {
//     await render(hbs`<MainTable />`);
//
//     // Check if table is rendered
//     assert.dom('table').exists('The table is rendered');
//
//     // Check if loading indicator is shown initially
//     assert.dom('LoadingIndicator').exists('Loading indicator is shown while loading');
//
//     // Wait for settled to ensure all promises and rendering has completed
//     await settled();
//
//     // Check for table content after data is loaded
//     assert.dom('table tbody tr').exists({ count: 2 }, 'Table renders two rows of data');
//
//     // Template block usage:
//     await render(hbs`
//       <MainTable>
//         template block text
//       </MainTable>
//     `);
//
//     assert.dom(this.element).hasText('template block text', 'Block text is rendered');
//   });
//
// });
