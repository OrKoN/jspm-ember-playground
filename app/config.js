System.config({
  "transpiler": "babel",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "ehbs": "github:n-fuse/plugin-ember-hbs/ember",
    "ember": "github:components/ember@1.11.0-beta.2",
    "hbs": "github:n-fuse/plugin-ember-hbs@1.11.0-beta.2",
    "jquery": "github:components/jquery@2.1.3",
    "github:components/ember@1.11.0-beta.2": {
      "jquery": "github:components/jquery@2.1.3"
    },
    "github:n-fuse/plugin-ember-hbs@1.11.0-beta.2": {
      "ember-template-compiler": "github:n-fuse/ember-template-compiler@1.11.0-beta.2"
    }
  }
});

