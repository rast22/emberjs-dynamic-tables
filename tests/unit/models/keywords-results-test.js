import { module, test } from 'qunit';

import { setupTest } from 'emberjs-dynamic-tables/tests/helpers';

module('Unit | Model | keywords results', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('keywords-results.ts', {});
    assert.ok(model);
  });
});
