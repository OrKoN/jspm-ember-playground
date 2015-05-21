System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime",
      "es7.decorators",
      "es7.asyncFunctions"
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
    "babel": "npm:babel-core@5.4.5",
    "babel-runtime": "npm:babel-runtime@5.4.5",
    "core-js": "npm:core-js@0.9.11",
    "ember": "github:components/ember@1.13.0-beta.1",
    "ember-computed-decorators": "github:rwjblue/ember-computed-decorators@master",
    "ember-i18n": "github:jamesarosen/ember-i18n@3.1.1",
    "ember-vcl-busy-indicator": "github:ember-vcl/busy-indicator@0.1.0",
    "ember-vcl-button": "github:ember-vcl/button@0.1.2",
    "ember-vcl-button-group": "github:ember-vcl/button-group@0.1.3",
    "ember-vcl-calendar": "github:ember-vcl/calendar@0.2.0",
    "ember-vcl-checkbox": "github:ember-vcl/checkbox@0.1.0",
    "ember-vcl-data-list": "github:ember-vcl/data-list@master",
    "ember-vcl-date-input": "github:ember-vcl/date-input@0.2.0",
    "ember-vcl-dropdown": "github:ember-vcl/dropdown@0.1.2",
    "ember-vcl-dropdown-menu": "github:ember-vcl/dropdown-menu@0.1.3",
    "ember-vcl-form-control-label": "github:ember-vcl/form-control-label@0.1.0",
    "ember-vcl-gesture-event-support": "github:ember-vcl/gesture-event-support@0.1.0",
    "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@0.1.0",
    "ember-vcl-go-to-top": "github:ember-vcl/go-to-top@0.1.0",
    "ember-vcl-hint": "github:ember-vcl/hint@0.1.2",
    "ember-vcl-img": "github:ember-vcl/img@0.1.7",
    "ember-vcl-input": "github:ember-vcl/input@0.1.0",
    "ember-vcl-jss-form": "github:ember-vcl/jss-form@0.2.6",
    "ember-vcl-layer": "github:ember-vcl/layer@0.1.2",
    "ember-vcl-media-query": "github:ember-vcl/media-query@0.1.0",
    "ember-vcl-media-query-support": "github:ember-vcl/media-query-support@0.1.2",
    "ember-vcl-navigation": "github:ember-vcl/navigation@0.2.0",
    "ember-vcl-notification": "github:ember-vcl/notification@0.1.1",
    "ember-vcl-notification-modal": "github:ember-vcl/notification-modal@0.1.6",
    "ember-vcl-pager": "github:ember-vcl/pager@master",
    "ember-vcl-process-nav": "github:ember-vcl/process-nav@0.2.0",
    "ember-vcl-spinner": "github:ember-vcl/spinner@0.1.3",
    "ember-vcl-transition-monitoring-support": "github:ember-vcl/transition-monitoring-support@0.1.4",
    "hbs": "github:n-fuse/plugin-ember-hbs@1.13.0-beta.1",
    "ihbs": "github:n-fuse/plugin-ember-ihbs@1.13.0-beta.1",
    "jquery": "github:components/jquery@2.1.4",
    "moment": "github:moment/moment@2.10.3",
    "moment-range": "github:gf3/moment-range@1.0.9",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "github:components/ember@1.13.0-beta.1": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "github:ember-vcl/body-tap-handler-support@0.1.1": {
      "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@0.1.0",
      "jquery": "github:components/jquery@2.1.4",
      "polymer-gestures": "github:n-fuse/polymer-gestures@0.5.5"
    },
    "github:ember-vcl/busy-indicator@0.1.0": {
      "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@0.1.0",
      "ember-vcl-l10n-props-support": "github:ember-vcl/l10n-props-support@0.1.0"
    },
    "github:ember-vcl/button-group@0.1.3": {
      "ember-vcl-button": "github:ember-vcl/button@0.1.2",
      "ember-vcl-layout-attributes-support": "github:ember-vcl/layout-attributes-support@0.1.2"
    },
    "github:ember-vcl/button@0.1.2": {
      "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@0.1.0",
      "ember-vcl-icogram": "github:ember-vcl/icogram@0.1.2",
      "ember-vcl-l10n-props-support": "github:ember-vcl/l10n-props-support@0.1.0",
      "ember-vcl-layout-attributes-support": "github:ember-vcl/layout-attributes-support@0.1.2"
    },
    "github:ember-vcl/calendar@0.2.0": {
      "ember-vcl-button": "github:ember-vcl/button@0.1.2",
      "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@0.1.0",
      "ember-vcl-l10n-props-support": "github:ember-vcl/l10n-props-support@0.1.0",
      "ember-vcl-layout-attributes-support": "github:ember-vcl/layout-attributes-support@0.1.2",
      "ember-vcl-pager": "github:ember-vcl/pager@master",
      "moment": "github:moment/moment@2.10.3",
      "moment-range": "github:gf3/moment-range@1.0.9"
    },
    "github:ember-vcl/checkbox@0.1.0": {
      "ember-vcl-form-control-event-support": "github:ember-vcl/form-control-event-support@0.1.0",
      "ember-vcl-form-control-validation-state-support": "github:ember-vcl/form-control-validation-state-support@0.1.0",
      "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@0.1.0"
    },
    "github:ember-vcl/data-list@master": {
      "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@0.1.0",
      "ember-vcl-layout-attributes-support": "github:ember-vcl/layout-attributes-support@0.1.2"
    },
    "github:ember-vcl/date-input@0.2.0": {
      "ember-vcl-button": "github:ember-vcl/button@0.1.2",
      "ember-vcl-date-picker": "github:ember-vcl/date-picker@0.2.0",
      "ember-vcl-form-control-event-support": "github:ember-vcl/form-control-event-support@0.1.0",
      "ember-vcl-input": "github:ember-vcl/input@0.1.0",
      "moment": "github:moment/moment@2.10.3"
    },
    "github:ember-vcl/date-picker@0.2.0": {
      "ember-vcl-body-tap-handler-support": "github:ember-vcl/body-tap-handler-support@0.1.1",
      "ember-vcl-calendar": "github:ember-vcl/calendar@0.2.0",
      "ember-vcl-popover": "github:ember-vcl/popover@0.1.0",
      "moment": "github:moment/moment@2.10.3"
    },
    "github:ember-vcl/dropdown-menu@0.1.3": {
      "ember-vcl-body-tap-handler-support": "github:ember-vcl/body-tap-handler-support@0.1.1",
      "ember-vcl-button": "github:ember-vcl/button@0.1.2",
      "ember-vcl-dropdown": "github:ember-vcl/dropdown@0.1.2"
    },
    "github:ember-vcl/dropdown@0.1.2": {
      "ember": "github:components/ember@1.13.0-beta.1",
      "jquery": "github:components/jquery@2.1.4",
      "polymer-gestures": "github:n-fuse/polymer-gestures@0.5.5"
    },
    "github:ember-vcl/extended-select-box@0.1.1": {
      "ember-vcl-body-tap-handler-support": "github:ember-vcl/body-tap-handler-support@0.1.1",
      "ember-vcl-dropdown": "github:ember-vcl/dropdown@0.1.2",
      "ember-vcl-form-control-event-support": "github:ember-vcl/form-control-event-support@0.1.0",
      "ember-vcl-form-control-validation-state-support": "github:ember-vcl/form-control-validation-state-support@0.1.0",
      "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@0.1.0",
      "ember-vcl-input": "github:ember-vcl/input@0.1.0",
      "ember-vcl-keyboard-highlight-support": "github:ember-vcl/keyboard-highlight-support@0.1.0",
      "ember-vcl-resize-support": "github:ember-vcl/resize-support@0.1.0",
      "sifter": "github:brianreavis/sifter.js@0.4.1"
    },
    "github:ember-vcl/form-control-label@0.1.0": {
      "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@0.1.0",
      "ember-vcl-l10n-props-support": "github:ember-vcl/l10n-props-support@0.1.0"
    },
    "github:ember-vcl/gesture-support@0.1.0": {
      "polymer-gestures": "github:n-fuse/polymer-gestures@0.5.5"
    },
    "github:ember-vcl/go-to-top@0.1.0": {
      "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@0.1.0",
      "ember-vcl-l10n-props-support": "github:ember-vcl/l10n-props-support@0.1.0",
      "ember-vcl-resize-support": "github:ember-vcl/resize-support@0.1.0",
      "jquery": "github:components/jquery@2.1.4"
    },
    "github:ember-vcl/hint@0.1.2": {
      "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@0.1.0",
      "ember-vcl-l10n-props-support": "github:ember-vcl/l10n-props-support@0.1.0",
      "ember-vcl-layout-attributes-support": "github:ember-vcl/layout-attributes-support@0.1.2",
      "store": "npm:store@1.3.17"
    },
    "github:ember-vcl/icogram@0.1.2": {
      "ember-vcl-icon": "github:ember-vcl/icon@0.1.3",
      "ember-vcl-l10n-props-support": "github:ember-vcl/l10n-props-support@0.1.0",
      "ember-vcl-layout-attributes-support": "github:ember-vcl/layout-attributes-support@0.1.2"
    },
    "github:ember-vcl/icon@0.1.3": {
      "ember-vcl-l10n-props-support": "github:ember-vcl/l10n-props-support@0.1.0"
    },
    "github:ember-vcl/img@0.1.7": {
      "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@0.1.0",
      "ember-vcl-l10n-props-support": "github:ember-vcl/l10n-props-support@0.1.0"
    },
    "github:ember-vcl/input@0.1.0": {
      "ember-vcl-form-control-event-support": "github:ember-vcl/form-control-event-support@0.1.0",
      "ember-vcl-form-control-validation-state-support": "github:ember-vcl/form-control-validation-state-support@0.1.0",
      "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@0.1.0",
      "ember-vcl-l10n-props-support": "github:ember-vcl/l10n-props-support@0.1.0"
    },
    "github:ember-vcl/jss-form@0.2.6": {
      "ember-hbs-equal-help": "github:n-fuse/ember-hbs-equal-helper@0.1.2",
      "ember-vcl-button": "github:ember-vcl/button@0.1.2",
      "ember-vcl-checkbox": "github:ember-vcl/checkbox@0.1.0",
      "ember-vcl-date-input": "github:ember-vcl/date-input@0.2.0",
      "ember-vcl-extended-select-box": "github:ember-vcl/extended-select-box@0.1.1",
      "ember-vcl-form-control-label": "github:ember-vcl/form-control-label@0.1.0",
      "ember-vcl-icogram": "github:ember-vcl/icogram@0.1.2",
      "ember-vcl-input": "github:ember-vcl/input@0.1.0",
      "ember-vcl-textarea": "github:ember-vcl/textarea@0.1.1",
      "handlebars": "github:components/handlebars.js@3.0.3",
      "i18n": "github:n-fuse/ember-i18n@0.1.1",
      "lodash": "npm:lodash@3.9.1",
      "tv4": "npm:tv4@1.1.9"
    },
    "github:ember-vcl/layer@0.1.2": {
      "ember-vcl-transition-monitoring-support": "github:ember-vcl/transition-monitoring-support@0.1.4",
      "jquery": "github:components/jquery@2.1.4"
    },
    "github:ember-vcl/media-query@0.1.0": {
      "ember-vcl-media-query-support": "github:ember-vcl/media-query-support@0.1.2"
    },
    "github:ember-vcl/navigation@0.2.0": {
      "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@0.1.0",
      "ember-vcl-icogram": "github:ember-vcl/icogram@0.1.2",
      "ember-vcl-transition-monitoring-support": "github:ember-vcl/transition-monitoring-support@0.1.4"
    },
    "github:ember-vcl/notification-modal@0.1.6": {
      "ember-vcl-layer": "github:ember-vcl/layer@0.1.2",
      "lodash": "npm:lodash@3.9.1"
    },
    "github:ember-vcl/notification@0.1.1": {
      "ember-vcl-l10n-props-support": "github:ember-vcl/l10n-props-support@0.1.0"
    },
    "github:ember-vcl/pager@master": {
      "ember-vcl-button": "github:ember-vcl/button@0.1.2",
      "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@0.1.0",
      "ember-vcl-l10n-props-support": "github:ember-vcl/l10n-props-support@0.1.0",
      "ember-vcl-toolbar": "github:ember-vcl/toolbar@master"
    },
    "github:ember-vcl/popover@0.1.0": {
      "ember-vcl-layout-attributes-support": "github:ember-vcl/layout-attributes-support@0.1.2"
    },
    "github:ember-vcl/process-nav@0.2.0": {
      "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@0.1.0",
      "ember-vcl-layout-attributes-support": "github:ember-vcl/layout-attributes-support@0.1.2",
      "ember-vcl-transition-monitoring-support": "github:ember-vcl/transition-monitoring-support@0.1.4",
      "jquery": "github:components/jquery@2.1.4",
      "polymer-gestures": "github:n-fuse/polymer-gestures@0.5.5"
    },
    "github:ember-vcl/spinner@0.1.3": {
      "ember-vcl-button-group": "github:ember-vcl/button-group@0.1.3",
      "ember-vcl-form-control-event-support": "github:ember-vcl/form-control-event-support@0.1.0",
      "ember-vcl-input": "github:ember-vcl/input@0.1.0",
      "ember-vcl-layout-attributes-support": "github:ember-vcl/layout-attributes-support@0.1.2"
    },
    "github:ember-vcl/textarea@0.1.1": {
      "ember-vcl-form-control-event-support": "github:ember-vcl/form-control-event-support@0.1.0",
      "ember-vcl-form-control-validation-state-support": "github:ember-vcl/form-control-validation-state-support@0.1.0",
      "polymer-gestures": "github:n-fuse/polymer-gestures@0.5.5"
    },
    "github:ember-vcl/toolbar@master": {
      "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@0.1.0",
      "ember-vcl-layout-attributes-support": "github:ember-vcl/layout-attributes-support@0.1.2"
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
    },
    "npm:lodash@3.9.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:store@1.3.17": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:tv4@1.1.9": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    }
  }
});

