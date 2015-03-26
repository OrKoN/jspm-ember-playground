System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel@4.7.16",
    "babel-runtime": "npm:babel-runtime@4.7.16",
    "components/ember": "github:components/ember@1.11.0-beta.5",
    "ember": "github:components/ember@1.11.0-beta.5",
    "hbs": "github:n-fuse/plugin-ember-hbs@1.11.0-beta.5",
    "ihbs": "github:n-fuse/plugin-ember-ihbs@1.11.0-beta.5",
    "jquery": "github:components/jquery@2.1.3",
    "github:components/ember@1.11.0-beta.5": {
      "jquery": "github:components/jquery@2.1.3"
    },
    "github:n-fuse/plugin-ember-hbs@1.11.0-beta.5": {
      "ember-template-compiler": "github:n-fuse/ember-template-compiler@1.11.0-beta.5"
    },
    "github:n-fuse/plugin-ember-ihbs@1.11.0-beta.5": {
      "ember-template-compiler": "github:n-fuse/ember-template-compiler@1.11.0-beta.5"
    }
  }
});

