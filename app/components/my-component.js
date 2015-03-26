import layout from './templates/my-component.hbs!'; // loaded into variable/not present in Ember.TEMPLATES
import Ember from 'ember';

var MyComponent = Ember.Component.extend({
  layout: layout,
  tagName: 'h4'
});

Ember.Handlebars.helper('my-component', MyComponent);
