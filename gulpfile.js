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
  ], function(file){
    browserSync.reload(file.path);
  });
});

gulp.task('jspm', function() {
  return jspm.bundleSFX('main', 'dist/app.js', { sourceMaps: false });
});

gulp.task('build', [
  'jspm'
]);