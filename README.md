Basic Ember App example using JSPM
==========

Includes plugins to compile and bundle Handlebars templates. For example:

```
  import tmpl from './templates/template.hbs!';
  var Component = Ember.Component.extend({
    layout: tmpl
  });
```

Ember version: 1.11.0-beta.5

Build system: gulp

Live reload: browser-sync

Transpiler: babel (6to5)


Usage
=====

1. Clone
2. `npm install`
3. `jspm init`
4. `jspm install`
5. `jspm install ember=github:components/ember@1.11.0-beta.5 -o overrides/ember.json`
6. `gulp watch`
