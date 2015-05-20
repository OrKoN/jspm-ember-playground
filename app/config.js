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
  "map": {
    "babel": "npm:babel-core@5.4.3",
    "babel-runtime": "npm:babel-runtime@5.4.3",
    "core-js": "npm:core-js@0.9.11",
    "ember": "github:components/ember@1.13.0-beta.1",
    "ember-computed-decorators": "github:rwjblue/ember-computed-decorators@master",
    "ember-i18n": "github:jamesarosen/ember-i18n@3.1.1",
    "hbs": "github:n-fuse/plugin-ember-hbs@1.13.0-beta.1",
    "ihbs": "github:n-fuse/plugin-ember-ihbs@1.13.0-beta.1",
    "jquery": "github:components/jquery@2.1.4",
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
    "npm:core-js@0.9.11": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

