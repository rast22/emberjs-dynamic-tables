import { module, test } from 'qunit';
import { setupRenderingTest } from 'emberjs-dynamic-tables/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | notification-display', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<NotificationDisplay />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <NotificationDisplay>
        template block text
      </NotificationDisplay>
    `);

    assert.dom().hasText('template block text');
  });
});
