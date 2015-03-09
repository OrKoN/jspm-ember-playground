System.config({
  "transpiler": "babel",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
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

