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
  return jspm.bundleSFX('app', 'dist/app.js', { sourceMaps: false, minify: true, mangle: false });
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
