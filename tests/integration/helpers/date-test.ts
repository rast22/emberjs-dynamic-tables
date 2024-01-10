import { module, test } from 'qunit';
import { setupRenderingTest } from 'emberjs-dynamic-tables/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | date', function (hooks) {
  setupRenderingTest(hooks);

  test('it formats a date string correctly', async function (assert) {
    this.set('inputValue', '2021-04-10T00:00:00Z');

    await render(hbs`{{date this.inputValue}}`);

    assert.dom().hasText('10. 04. 2021', 'The date is formatted correctly');
  });

  test('it handles invalid date strings', async function (assert) {
    this.set('inputValue', 'invalid-date-string');

    await render(hbs`{{date this.inputValue}}`);

    assert.dom().hasText('', 'Invalid date string returns empty string');
  });

  test('it handles empty input', async function (assert) {
    this.set('inputValue', '');

    await render(hbs`{{date this.inputValue}}`);

    assert.dom().hasText('', 'Empty input returns empty string');
  });

});
