import { module, test } from 'qunit';
import { setupTest } from 'emberjs-dynamic-tables/tests/helpers';

module('Unit | Model | competitor', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('competitor', {});
    assert.ok(model);
  });

  test('it has correct attributes', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('competitor', {
      rank: 1,
      rank_type: 'organic',
    });

    assert.equal(model.rank, 1, 'rank attribute is correct');
    assert.equal(model.rank_type, 'organic', 'rank_type attribute is correct');
  });
});
