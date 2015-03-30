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

Details
======

Includes plugins to compile and bundle Handlebars templates. For example:

```
  import tmpl from './templates/template.hbs!';
  var Component = Ember.Component.extend({
    layout: tmpl
  });
```

Ember version: 1.12.0-beta.1

Build system: gulp

Live reload: browser-sync

Transpiler: babel (6to5)

JSPM: 0.15.1



