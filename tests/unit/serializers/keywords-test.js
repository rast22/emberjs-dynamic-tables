import { module, test } from 'qunit';
import { setupTest } from 'emberjs-dynamic-tables/tests/helpers';

module('Unit | Serializer | keywords', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('keyword');
    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('keyword', {
      query: 'test query',
      last_processed_at: '2021-01-01',
      position: 1,
      results_count: 100,
      competitors: ['competitor1', 'competitor2'],
      selected_competitor: 2,
    });

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord, 'Record is serialized');
    assert.equal(
      serializedRecord.data.attributes.query,
      'test query',
      'Query is serialized correctly',
    );
    assert.equal(
      serializedRecord.data.attributes.last_processed_at,
      '2021-01-01',
      'Last processed at is serialized correctly',
    );
    assert.equal(
      serializedRecord.data.attributes.position,
      1,
      'Position is serialized correctly',
    );
    assert.equal(
      serializedRecord.data.attributes.results_count,
      100,
      'Results count is serialized correctly',
    );
    assert.deepEqual(
      serializedRecord.data.attributes.competitors,
      ['competitor1', 'competitor2'],
      'Competitors are serialized correctly',
    );
    assert.equal(
      serializedRecord.data.attributes.selected_competitor,
      2,
      'Selected competitor is serialized correctly',
    );
  });
});
