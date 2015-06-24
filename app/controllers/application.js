import Ember from 'ember';

export default Ember.Controller.extend({
  test: 'aaaa',
  items: Ember.A([{
    title: 'Write a blog post about JSPM dev workflow',
    date: new Date()
  }]),
  actions: {
    add: function() {
      this.get('items').addObject({
        title: this.get('value'),
        date: new Date()
      });
      this.set('value', null);
    }
  }
});
