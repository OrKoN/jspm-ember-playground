System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "components/ember": "github:components/ember@1.11.0-beta.2",
    "ehbs": "github:n-fuse/ember-ehbs@master",
    "ember": "github:components/ember@1.11.0-beta.2",
    "hbs": "github:n-fuse/ember-hbs@master",
    "jquery": "github:components/jquery@2.1.3",
    "github:components/ember@1.11.0-beta.2": {
      "jquery": "github:components/jquery@2.1.3"
    }
  }
});

