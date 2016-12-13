import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('main-menu', 'Integration | Component | main menu', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{main-menu}}`);

  assert.equal(this.$().text().trim().replace(/\s+/g,' '),
               '1 Beaches 2 Surfing 3 Apparel 4 Eating & drinking 5 Places to stay 6 Other activities About Shop Contribute on Github © 2016 Marine Boudeau LLC');

  // Template block usage:
  this.render(hbs`
    {{#main-menu}}
      template block text
    {{/main-menu}}
  `);

  assert.equal(this.$().text().trim().replace(/\s+/g,' '),
               'template block text 1 Beaches 2 Surfing 3 Apparel 4 Eating & drinking 5 Places to stay 6 Other activities About Shop Contribute on Github © 2016 Marine Boudeau LLC');
});
