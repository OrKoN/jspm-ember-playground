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
    "babel": "npm:babel-core@5.2.15",
    "babel-runtime": "npm:babel-runtime@5.2.15",
    "core-js": "npm:core-js@0.9.6",
    "ember": "github:components/ember@canary",
    "ember-computed-decorators": "github:rwjblue/ember-computed-decorators@master",
    "hbs": "github:n-fuse/plugin-ember-hbs@canary",
    "ihbs": "github:n-fuse/plugin-ember-ihbs@canary",
    "jquery": "github:components/jquery@2.1.3",
    "n-fuse/pajax": "github:n-fuse/pajax@0.1.7",
    "pajax": "github:n-fuse/pajax@0.1.7",
    "github:components/ember@canary": {
      "jquery": "github:components/jquery@2.1.3"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:n-fuse/plugin-ember-hbs@canary": {
      "ember-template-compiler": "github:n-fuse/ember-template-compiler@canary"
    },
    "github:n-fuse/plugin-ember-ihbs@canary": {
      "ember-template-compiler": "github:n-fuse/ember-template-compiler@canary"
    },
    "github:rwjblue/ember-computed-decorators@master": {
      "ember": "github:components/ember@canary",
      "ember-new-computed": "github:rwjblue/ember-new-computed@master"
    },
    "github:rwjblue/ember-new-computed@master": {
      "ember": "github:components/ember@canary"
    },
    "npm:core-js@0.9.6": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

