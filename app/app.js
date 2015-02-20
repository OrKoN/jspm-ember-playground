
import Ember from 'ember';

import layout from 'templates/component-layout.hbs!';

var MyComponent = Ember.Component.extend({
  layout: layout
});

Ember.Handlebars.helper('my-component', MyComponent);

import tmpl from 'templates/application.hbs!ehbs';

import SimpleAuth from 'ember-simple-auth';

debugger;

var Demo = Ember.Application.create();