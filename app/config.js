System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime",
      "es7.decorators"
    ]
  },
  "paths": {
    "*": "*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "depCache": {
    "templates/application.hbs": [
      "github:components/ember@1.13.0-beta.1"
    ],
    "components/templates/my-component.hbs!github:n-fuse/plugin-ember-hbs@1.13.0-beta.1": [
      "github:components/ember@1.13.0-beta.1"
    ],
    "github:rwjblue/ember-new-computed@master/addon/utils/can-use-new-syntax": [
      "github:components/ember@1.13.0-beta.1"
    ],
    "npm:core-js@0.9.10/library/modules/$.string-at": [
      "npm:core-js@0.9.10/library/modules/$"
    ],
    "npm:core-js@0.9.10/library/modules/$.uid": [
      "npm:core-js@0.9.10/library/modules/$"
    ],
    "npm:core-js@0.9.10/library/modules/$.wks": [
      "npm:core-js@0.9.10/library/modules/$",
      "npm:core-js@0.9.10/library/modules/$.uid"
    ],
    "npm:core-js@0.9.10/library/modules/$.assert": [
      "npm:core-js@0.9.10/library/modules/$"
    ],
    "npm:core-js@0.9.10/library/modules/$.def": [
      "npm:core-js@0.9.10/library/modules/$"
    ],
    "npm:core-js@0.9.10/library/modules/$.redef": [
      "npm:core-js@0.9.10/library/modules/$"
    ],
    "npm:core-js@0.9.10/library/modules/$.ctx": [
      "npm:core-js@0.9.10/library/modules/$.assert"
    ],
    "npm:core-js@0.9.10/library/modules/$.iter-call": [
      "npm:core-js@0.9.10/library/modules/$.assert"
    ],
    "npm:core-js@0.9.10/library/modules/$.iter-detect": [
      "npm:core-js@0.9.10/library/modules/$.wks"
    ],
    "github:components/jquery@2.1.4": [
      "github:components/jquery@2.1.4/jquery"
    ],
    "github:jamesarosen/ember-i18n@3.1.1": [
      "github:jamesarosen/ember-i18n@3.1.1/lib/i18n"
    ],
    "npm:core-js@0.9.10/library/modules/$": [
      "npm:core-js@0.9.10/library/modules/$.fw"
    ],
    "github:rwjblue/ember-new-computed@master/addon/index": [
      "github:components/ember@1.13.0-beta.1",
      "github:rwjblue/ember-new-computed@master/addon/utils/can-use-new-syntax"
    ],
    "npm:core-js@0.9.10/library/modules/$.cof": [
      "npm:core-js@0.9.10/library/modules/$",
      "npm:core-js@0.9.10/library/modules/$.wks"
    ],
    "npm:core-js@0.9.10/library/modules/$.iter-define": [
      "npm:core-js@0.9.10/library/modules/$.def",
      "npm:core-js@0.9.10/library/modules/$.redef",
      "npm:core-js@0.9.10/library/modules/$",
      "npm:core-js@0.9.10/library/modules/$.cof",
      "npm:core-js@0.9.10/library/modules/$.iter",
      "npm:core-js@0.9.10/library/modules/$.wks"
    ],
    "npm:core-js@0.9.10/library/modules/es6.array.from": [
      "npm:core-js@0.9.10/library/modules/$",
      "npm:core-js@0.9.10/library/modules/$.ctx",
      "npm:core-js@0.9.10/library/modules/$.def",
      "npm:core-js@0.9.10/library/modules/$.iter",
      "npm:core-js@0.9.10/library/modules/$.iter-call",
      "npm:core-js@0.9.10/library/modules/$.iter-detect"
    ],
    "github:components/ember@1.13.0-beta.1/ember.debug": [
      "github:components/jquery@2.1.4"
    ],
    "npm:core-js@0.9.10/library/fn/object/define-property": [
      "npm:core-js@0.9.10/library/modules/$"
    ],
    "github:rwjblue/ember-new-computed@master": [
      "github:rwjblue/ember-new-computed@master/addon/index"
    ],
    "npm:core-js@0.9.10/library/modules/$.iter": [
      "npm:core-js@0.9.10/library/modules/$",
      "npm:core-js@0.9.10/library/modules/$.cof",
      "npm:core-js@0.9.10/library/modules/$.assert",
      "npm:core-js@0.9.10/library/modules/$.wks"
    ],
    "github:components/ember@1.13.0-beta.1": [
      "github:components/ember@1.13.0-beta.1/ember.debug"
    ],
    "npm:babel-runtime@5.4.3/core-js/object/define-property": [
      "npm:core-js@0.9.10/library/fn/object/define-property"
    ],
    "github:rwjblue/ember-computed-decorators@master/addon/utils/handle-descriptor": [
      "github:components/ember@1.13.0-beta.1",
      "github:rwjblue/ember-new-computed@master"
    ],
    "npm:core-js@0.9.10/library/modules/es6.string.iterator": [
      "npm:core-js@0.9.10/library/modules/$",
      "npm:core-js@0.9.10/library/modules/$.string-at",
      "npm:core-js@0.9.10/library/modules/$.uid",
      "npm:core-js@0.9.10/library/modules/$.iter",
      "npm:core-js@0.9.10/library/modules/$.iter-define"
    ],
    "npm:babel-runtime@5.4.3/helpers/create-decorated-object": [
      "npm:babel-runtime@5.4.3/core-js/object/define-property"
    ],
    "npm:core-js@0.9.10/library/fn/array/from": [
      "npm:core-js@0.9.10/library/modules/es6.string.iterator",
      "npm:core-js@0.9.10/library/modules/es6.array.from",
      "npm:core-js@0.9.10/library/modules/$"
    ],
    "npm:babel-runtime@5.4.3/core-js/array/from": [
      "npm:core-js@0.9.10/library/fn/array/from"
    ],
    "npm:babel-runtime@5.4.3/helpers/to-consumable-array": [
      "npm:babel-runtime@5.4.3/core-js/array/from"
    ],
    "github:rwjblue/ember-computed-decorators@master/addon/macro-alias": [
      "npm:babel-runtime@5.4.3/helpers/to-consumable-array",
      "github:rwjblue/ember-computed-decorators@master/addon/utils/is-descriptor"
    ],
    "github:rwjblue/ember-computed-decorators@master/addon/index": [
      "npm:babel-runtime@5.4.3/helpers/slice",
      "github:components/ember@1.13.0-beta.1",
      "github:rwjblue/ember-computed-decorators@master/addon/utils/handle-descriptor",
      "github:rwjblue/ember-computed-decorators@master/addon/utils/is-descriptor",
      "github:rwjblue/ember-computed-decorators@master/addon/decorator-alias",
      "github:rwjblue/ember-computed-decorators@master/addon/macro-alias"
    ],
    "github:rwjblue/ember-computed-decorators@master": [
      "github:rwjblue/ember-computed-decorators@master/addon/index"
    ],
    "components/my-component": [
      "npm:babel-runtime@5.4.3/helpers/create-decorated-object",
      "components/templates/my-component.hbs!github:n-fuse/plugin-ember-hbs@1.13.0-beta.1",
      "github:components/ember@1.13.0-beta.1",
      "github:rwjblue/ember-computed-decorators@master"
    ],
    "app": [
      "github:components/ember@1.13.0-beta.1",
      "github:jamesarosen/ember-i18n@3.1.1",
      "templates/application.hbs",
      "components/my-component"
    ],
    "github:jamesarosen/ember-i18n@3.1.1/lib/i18n": [
      "github:components/ember@1.13.0-beta.1"
    ]
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.4.3",
    "babel-runtime": "npm:babel-runtime@5.4.3",
    "chbs": "github:n-fuse/plugin-ember-chbs@master",
    "core-js": "npm:core-js@0.9.10",
    "ember": "github:components/ember@1.13.0-beta.1",
    "ember-computed-decorators": "github:rwjblue/ember-computed-decorators@master",
    "ember-i18n": "github:jamesarosen/ember-i18n@3.1.1",
    "hbs": "github:n-fuse/plugin-ember-hbs@1.13.0-beta.1",
    "ihbs": "github:n-fuse/plugin-ember-ihbs@1.13.0-beta.1",
    "jquery": "github:components/jquery@2.1.4",
    "n-fuse/pajax": "github:n-fuse/pajax@0.1.7",
    "n-fuse/plugin-ember-chbs": "github:n-fuse/plugin-ember-chbs@master",
    "pajax": "github:n-fuse/pajax@0.1.7",
    "github:components/ember@1.12.0": {
      "handlebars.js": "github:components/handlebars.js@1.3.0",
      "jquery": "github:components/jquery@2.1.4"
    },
    "github:components/ember@1.13.0-beta.1": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "github:jamesarosen/ember-i18n@3.1.1": {
      "ember": "github:components/ember@1.13.0-beta.1"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:n-fuse/plugin-ember-hbs@1.13.0-beta.1": {
      "ember-template-compiler": "github:n-fuse/ember-template-compiler@1.13.0-beta.1"
    },
    "github:n-fuse/plugin-ember-ihbs@1.13.0-beta.1": {
      "ember-template-compiler": "github:n-fuse/ember-template-compiler@1.13.0-beta.1"
    },
    "github:rwjblue/ember-computed-decorators@master": {
      "ember": "github:components/ember@1.13.0-beta.1",
      "ember-new-computed": "github:rwjblue/ember-new-computed@master"
    },
    "github:rwjblue/ember-new-computed@master": {
      "ember": "github:components/ember@1.13.0-beta.1"
    },
    "npm:core-js@0.9.10": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

