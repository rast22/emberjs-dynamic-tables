import { module, test } from 'qunit';
import { setupTest } from 'emberjs-dynamic-tables/tests/helpers';

module('Unit | Model | keyword', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('keyword', {});
    assert.ok(model);
  });

  test('it has correct attributes', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('keyword', {
      query: 'test query',
      last_processed_at: '2021-01-01',
      position: 1,
      results_count: 100,
      competitors: ['competitor1', 'competitor2'],
      selected_competitor: 2,
    });

    assert.equal(model.query, 'test query', 'query attribute is correct');
    assert.equal(
      model.last_processed_at,
      '2021-01-01',
      'last_processed_at attribute is correct',
    );
    assert.equal(model.position, 1, 'position attribute is correct');
    assert.equal(
      model.results_count,
      100,
      'results_count attribute is correct',
    );
    assert.deepEqual(
      model.competitors,
      ['competitor1', 'competitor2'],
      'competitors attribute is correct',
    );
    assert.equal(
      model.selected_competitor,
      2,
      'selected_competitor attribute is correct',
    );
  });
});
