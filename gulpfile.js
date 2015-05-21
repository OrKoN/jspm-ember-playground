var gulp = require('gulp');
var jspm = require('jspm');
var compiler = require('gulp-ember-template-compiler');
var rename = require('gulp-rename');
var symlink = require('gulp-sym');
var rimraf = require('rimraf');
var shell = require('gulp-shell');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var vclPreprocessor = require('gulp-vcl-preprocessor');

gulp.task('default', function(cb) {
  runSequence('app:install', [
    'vcl:dev',
    'html:copy',
    'templates:compile',
    'config:copy',
    'app:copy',
    'fonts:copy:dev'
  ], cb);
});

gulp.task('app:build', ['html:build', 'vcl'], function() {
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

  return builder.loadConfig('jspm.config.js')
    .then(function() {
      builder.config({
        baseURL: 'dist'
      });
      return builder.buildSFX('app', 'build/app.js',
        {
          sourceMaps: false,
          minify: true,
          mangle: false
        });
    });
});

gulp.task('templates:compile', function() {
  return gulp.src('app/**/*.hbs')
    .pipe(compiler())
    .pipe(rename(function(path) {
      path.extname = '.js'
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('config:copy', function() {
  return gulp.src('jspm.config.js')
    .pipe(symlink('dist/jspm.config.js', { force: true }))
});

gulp.task('app:copy', function() {
  return gulp.src('app/**/*.js')
    .pipe(babel({
      modules: 'system',
      optional: [
        'runtime',
        'es7.decorators',
        'es7.asyncFunctions'
      ]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('app:bundle', function() {
  var pkg = require('./package.json');
  var deps = pkg.jspm.dependencies;
  var modules = Object.keys(deps);
  var moduleList = modules.join(' + ');
  console.log('\n' + moduleList + '\n');
  return jspm.bundle(moduleList, 'main-bundle.js', {
      mangle: false,
      sourceMaps: true,
      inject: true,
      minify: true
    }).then(function() {
    console.log('Bundled');
    return gulp.src('main-bundle.js')
      .pipe(gulp.dest('dist'));
  });
});

gulp.task('app:depcache', shell.task([
  'jspm depcache app - main-bundle'
]));

gulp.task('app:unbundle', shell.task([
  'jspm unbundle'
]));

gulp.task('app:install', shell.task([
  'jspm install'
]));

gulp.task('clean', function(cb) {
  rimraf('./dist', cb);
});

gulp.task('html:build', function() {
  return gulp.src('app/*-production.html')
    .pipe(rename(function(path) {
      // remove -production
      path.basename = path.basename.slice(0, -11);
    }))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('html:copy', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('fonts:copy:dev', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('fonts:copy', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('build/fonts'));
});

gulp.task('vcl', function() {
  return gulp.src('vcl/index.styl')
    .pipe(autoprefixer())
    .pipe(minifyCss({
      cache: true
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('build'));
});

gulp.task('vcl:dev', function() {
  return gulp.src('vcl/index.styl')
    .pipe(vclPreprocessor())
    .pipe(autoprefixer())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function() {
  gulp.watch('app/**/*.js', ['app:copy']);
  gulp.watch('app/**/*.hbs', ['templates:compile']);
  gulp.watch('app/**/*.html', ['html:copy']);
  gulp.watch('vcl/**/*.styl', ['vcl:dev']);
})
