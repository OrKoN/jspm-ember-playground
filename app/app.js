import Ember from 'ember';

import './components/todo-item'

import tmpl from './templates/application';
Ember.TEMPLATES.application = tmpl;

import ApplicationController from './controllers/application';

var App = Ember.Application.extend({
  ApplicationController
});

var ToDo = App.create(
);
