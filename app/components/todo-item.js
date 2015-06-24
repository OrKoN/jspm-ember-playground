import Ember from 'ember';

import layout from './templates/todo-item';

var TodoItem = Ember.Component.extend({
  tagName: 'li',
  layout: layout
});

Ember.Application.initializer({
  name: 'todo-item-initializer',
  initialize: function(app) {
    app.register('component:todo-item', TodoItem);
  }
});

export default TodoItem;
