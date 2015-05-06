var gulp = require('gulp');
var jspm = require('jspm');

// watch files for changes and reload
gulp.task('watch', function() {
  var browserSync = require('browser-sync');
  browserSync({
    online: false,
    server: {
      baseDir: ['app']
    }
  });

  gulp.watch([
    'app/**/*.*'
  ], function(file) {
    browserSync.reload(file.path);
  });
});

gulp.task('jspm', function() {
  var builder = new jspm.Builder();
  var System = require('systemjs');

  function customExtensionName(System) {
    System._extensions.push(customExtensionName);
    var systemNormalize = System.normalize;

    System.normalize = function(name, parentName) {
      if (name === 'ember') {
        name = 'ember/ember.prod';
      }

      return systemNormalize.call(this, name, parentName);
    }
  }

  customExtensionName(System);

  builder.reset(System);

  return builder.loadConfig('./app/config.js')
    .then(function() {
      builder.config({
        baseURL: 'app',
        lib: 'app'
      });
      return builder.buildSFX('app', 'dist/app.js', { sourceMaps: false, minify: true, mangle: false});
    });
});

gulp.task('watch-dist', ['jspm'], function() {
  var browserSync = require('browser-sync');
  browserSync({
    online: false,
    server: {
      baseDir: ['dist']
    }
  });

  gulp.watch([
    'dist/**/*.*'
  ], function(file) {
    browserSync.reload(file.path);
  });
});

// gulp.task('jspm', function() {
//   return jspm.bundle('app - app/**/*.hbs', 'dist/app.js', { sourceMaps: false });
// });

// gulp.task('build', [
//   'jspm',
//   'jspm-templates'
// ]);

// gulp.task('jspm-templates', function() {
//   return jspm.bundle('app/**/*.hbs', 'dist/app-templates.js', { sourceMaps: false });
// });
