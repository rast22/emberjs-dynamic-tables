import { module, test } from 'qunit';
import { setupTest } from 'emberjs-dynamic-tables/tests/helpers';

module('Unit | Serializer | competitors', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('competitor');
    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('competitor', {
      rank: 1,
      rank_type: 'organic',
    });

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord, 'Record is serialized');
    assert.equal(
      serializedRecord.data.attributes.rank,
      1,
      'Rank is serialized correctly',
    );
    assert.equal(
      serializedRecord.data.attributes.rank_type,
      'organic',
      'Rank type is serialized correctly',
    );
  });
});
