import Ember from 'ember';
import itemTemplate from './vcl-data-list-item';
import headerTemplate from './vcl-data-list-header';
import footerTemplate from './vcl-data-list-footer';

Ember.TEMPLATES['data-list-item'] = itemTemplate;
Ember.TEMPLATES['data-list-header'] = headerTemplate;
Ember.TEMPLATES['data-list-footer'] = footerTemplate;

export default Ember.Controller.extend({
  items: [{
    key: 'key1',
    value: 'value1'
  }, {
    key: 'key2',
    value: 'value2'
  }],
  actions: {
    itemSelected: function(item){
      alert('Item clicked: '+item.value);
    }
  }
});