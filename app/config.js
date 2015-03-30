System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
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
    "babel": "npm:babel@4.7.16",
    "babel-runtime": "npm:babel-runtime@4.7.16",
    "ember": "github:components/ember@1.12.0-beta.1",
    "hbs": "github:n-fuse/plugin-ember-hbs@1.12.0-beta.1",
    "ihbs": "github:n-fuse/plugin-ember-ihbs@1.12.0-beta.1",
    "jquery": "github:components/jquery@2.1.3",
    "github:components/ember@1.12.0-beta.1": {
      "jquery": "github:components/jquery@2.1.3"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:n-fuse/plugin-ember-hbs@1.12.0-beta.1": {
      "ember-template-compiler": "github:n-fuse/ember-template-compiler@1.12.0-beta.1"
    },
    "github:n-fuse/plugin-ember-ihbs@1.12.0-beta.1": {
      "ember-template-compiler": "github:n-fuse/ember-template-compiler@1.12.0-beta.1"
    },
    "npm:babel-runtime@4.7.16": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

