Basic Ember App example using JSPM
==========

Usage
=====

1. Clone
2. `npm install`

To run a development version (not-minified, files loaded in runtime):

	`gulp watch`

To run a production-ready version:

	`gulp watch-dist`

FEATURES
======

 - Includes plugins to compile and bundle Handlebars templates. For example:

  ```javascript
  import tmpl from './templates/template.hbs!';
  var Component = Ember.Component.extend({
    layout: tmpl
  });
  ```

 - Uses Ember Computed Generators

  ```javascript
  var MyComponent = Ember.Component.extend({
    layout: layout,
    tagName: 'h4',

    key: 'my-key',

    @computed('key')
    testComputed(key) {
      return key + '-computed';
    }
  });
  ```

 More details here: [https://github.com/rwjblue/ember-computed-decorators](https://github.com/rwjblue/ember-computed-decorators)

Packages Info
=============

Ember version: 1.12.0-beta.1

JSPM: 0.15.3

Build system: gulp

Live reload: browser-sync

Transpiler: babel





