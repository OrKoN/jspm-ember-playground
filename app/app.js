import Ember from 'ember';
import tmpl from 'templates/application.hbs!';

// loaded into Ember.TEMPLATES as 'application'
Ember.TEMPLATES.application = tmpl;

import './components/my-component';
var Demo = Ember.Application.create({
  IndexRoute: Ember.Route.extend({
    afterModel: function(resolvedModel, transition) {
      var _this = this;

      // keep a reference for usage in then()
      transition.then(function() {
        console.log(_this.get('router.url'));
      });
    }
  })
});
