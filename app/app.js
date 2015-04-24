import Ember from 'ember';
import tmpl from 'templates/application.hbs!';

// loaded into Ember.TEMPLATES as 'application'
Ember.TEMPLATES.application = tmpl;

import Pajax from 'pajax';

import './components/my-component';
var Demo = Ember.Application.create({
});
