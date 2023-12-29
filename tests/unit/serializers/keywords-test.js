import { module, test } from 'qunit';

import { setupTest } from 'emberjs-dynamic-tables/tests/helpers';

module('Unit | Serializer | keywords', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('keywords');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('keyword.ts', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
