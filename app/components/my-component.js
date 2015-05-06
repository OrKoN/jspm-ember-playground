import layout from './templates/my-component.hbs!'; // loaded into variable/not present in Ember.TEMPLATES
import Ember from 'ember';
import computed from 'ember-computed-decorators';

var MyComponent = Ember.Component.extend({
  layout: layout,
  tagName: 'h4',

  key: 'my-key',

  // @computed('key')
  // test(key) {
  //   return `${key} + computed`;
  // }

  test: Ember.computed('key', function() {
    return `${this.get('key')} + computed`;
  })
});

Ember.Handlebars.helper('my-component', MyComponent);
