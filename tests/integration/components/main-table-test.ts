import { module, test } from 'qunit';
import { setupRenderingTest } from 'emberjs-dynamic-tables/tests/helpers';
import { render, click, settled, findAll, waitFor, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | main-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders and handles user interactions', async function (assert) {
    await render(hbs`<MainTable />`);

    await settled(); // Wait for all promises and rendering to complete

    // Check if the table is rendered
    assert.dom('table').exists('The table is rendered');

    // Check for the number of rows rendered
    const rows = findAll('table tbody tr');
    assert.ok(rows.length > 0, 'Table renders rows of data');

    // Test pagination functionality
    const nextPageButton = document.querySelector('[data-test-next-page]');
    if (nextPageButton && !nextPageButton.disabled) {
      await click(nextPageButton);
    }

    const previousPageButton = document.querySelector('[data-test-previous-page]');
    if (previousPageButton && !previousPageButton.disabled) {
      await click(previousPageButton);
    }

    // Test competitor selection
    const select = document.querySelector('select[data-test-select-competitor]');
    if (select) {
      await click(select.options[1]);
    }
  });
});
