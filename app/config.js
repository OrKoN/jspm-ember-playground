System.config({
  "transpiler": "babel",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    ehbs: "github:n-fuse/plugin-ember-hbs/ember"
  }
});

