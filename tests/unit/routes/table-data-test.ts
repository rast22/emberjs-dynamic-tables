import { module, test } from 'qunit';
import { setupTest } from 'emberjs-dynamic-tables/tests/helpers';

module('Unit | Route | table-data', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:table-data');
    assert.ok(route);
  });
});
