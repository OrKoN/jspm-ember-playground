var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var compiler = require('gulp-ember-template-compiler');
var concat = require('gulp-concat');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var jspm = require('jspm');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var rimraf = require('rimraf');
var runSequence = require('run-sequence');
var shell = require('gulp-shell');
var sourcemaps = require('gulp-sourcemaps');
var symlink = require('gulp-sym');
var vclPreprocessor = require('gulp-vcl-preprocessor');

function printError(error) {
  //If you want details of the error in the console
  console.log(error.toString());
  this.emit('end');
}

/**
* the default task does all setup including `jspm install`
*/
gulp.task('default', function(cb) {
  runSequence('clean', 'app:install', [
    'vcl:dev',
    'html:copy',
    'templates:compile',
    'config:copy',
    'app:copy',
    'fonts:copy:dev',
    'app:bundle'
  ], cb);
});

/**
* Build command used jspm.Builder to provide custom `normalize`
* hook which replaces the debug version of Ember with the production version
*/
gulp.task('build', ['html:build', 'vcl'], function() {
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
        baseURL: 'build'
      });
      return builder.buildSFX('app', 'dist/app.js',
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
    .on('error', printError)
    .pipe(babel({
      modules: 'system'
    }))
    .pipe(rename(function(path) {
      path.extname = '.js'
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('config:copy', function() {
  return gulp.src('jspm.config.js')
    .pipe(symlink('build/jspm.config.js', { force: true }))
});

gulp.task('app:copy', function() {
  return gulp.src('app/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      modules: 'system',
      optional: [
        'es7.decorators'
      ]
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'));
});

gulp.task('app:bundle', function() {
  var pkg = require('./package.json');
  var deps = pkg.jspm.dependencies;
  var modules = Object.keys(deps);
  var moduleList = modules.join(' + ');
  console.log('\n' + moduleList + '\n');
  return jspm.bundle(moduleList, 'main-bundle.js', {
      mangle: false,
      sourceMaps: false,
      inject: true,
      minify: true
    }).then(function() {
    console.log('Bundled');
    return gulp.src(['main-bundle.js'])
      .pipe(symlink(['build/main-bundle.js'], { force: true }));
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
  rimraf('./build', cb);
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
    .pipe(gulp.dest('dist'));
});

gulp.task('html:copy', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('build'));
});

gulp.task('fonts:copy:dev', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('build/fonts'));
});

gulp.task('fonts:copy', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('vcl', function() {
  return gulp.src('vcl/index.styl')
    .pipe(vclPreprocessor())
    .pipe(autoprefixer())
    .pipe(minifyCss({
      cache: true
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('vcl:dev', function() {
  return gulp.src('vcl/index.styl')
    .pipe(vclPreprocessor())
    .pipe(autoprefixer())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('build'))
});

gulp.task('watch', function() {
  gulp.watch('app/**/*.js', ['app:copy']);
  gulp.watch('app/**/*.hbs', ['templates:compile']);
  gulp.watch('app/**/*.html', ['html:copy']);
  gulp.watch('vcl/**/*.styl', ['vcl:dev']);
})
