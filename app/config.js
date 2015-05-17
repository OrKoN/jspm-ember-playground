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
    "chbs": "github:n-fuse/plugin-ember-chbs@master",
    "core-js": "npm:core-js@0.9.10",
    "ember": "github:components/ember@1.13.0-beta.1",
    "ember-computed-decorators": "github:rwjblue/ember-computed-decorators@master",
    "hbs": "github:n-fuse/plugin-ember-hbs@1.13.0-beta.1",
    "ihbs": "github:n-fuse/plugin-ember-ihbs@1.13.0-beta.1",
    "jquery": "github:components/jquery@2.1.4",
    "n-fuse/pajax": "github:n-fuse/pajax@0.1.7",
    "n-fuse/plugin-ember-chbs": "github:n-fuse/plugin-ember-chbs@master",
    "pajax": "github:n-fuse/pajax@0.1.7",
    "github:components/ember@1.13.0-beta.1": {
      "jquery": "github:components/jquery@2.1.4"
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

