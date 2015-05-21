import layout from './templates/my-component'; // loaded into variable/not present in Ember.TEMPLATES
import Ember from 'ember';
import computed from 'ember-computed-decorators';
import { observes } from 'ember-computed-decorators';
import { on } from 'ember-computed-decorators';

var MyComponent = Ember.Component.extend({
  layout: layout,
  tagName: 'h4',

  key2: 'my-key2',
  key: 'my-key',

  @computed('key', 'key2')
  test(key, key2) {
    console.log('@computed');
    console.log(arguments);
    return `${key}:${key2} + computed`;
  },

  @observes('key', 'key2')
  onUpdate(targetObj, keyName) {
    console.log('@observes');
    console.log(arguments)
    console.log(`Observer fires - ${keyName} was updated`, targetObj.get(keyName));
  },

  @on('init')
  setup() {
    console.log('@on("init")');
    console.log('Doing some setup');
  }

});

Ember.Handlebars.helper('my-component', MyComponent);
