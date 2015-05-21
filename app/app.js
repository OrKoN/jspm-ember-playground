import Ember from 'ember';
import 'ember-i18n'
import './components/my-component';
import tmpl from 'templates/application';
import './async-functions';
import 'ember-vcl-button';

import dataListInit from 'ember-vcl-data-list';

import ApplicationController from './controllers/application';

Ember.TEMPLATES.application = tmpl;
Ember.Application.extend({
  ApplicationController
});

var initializers = []
  .concat(dataListInit);

initializers.forEach(i => Ember.Application.initializer(i));

var Demo = Ember.Application.create();
