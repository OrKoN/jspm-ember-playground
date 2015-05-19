import Ember from 'ember';
import 'ember-i18n';

import tmpl from 'templates/application.hbs';

// loaded into Ember.TEMPLATES as 'application'
Ember.TEMPLATES.application = tmpl;

import './components/my-component';
var Demo = Ember.Application.create({
});
