var gulp = require('gulp');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var ugly = require('gulp-uglify');
var html = require('gulp-minify-html');
var concat = require('gulp-concat');
var browserify = require('browserify');
var plumber = require('gulp-plumber');
var image = require('gulp-image');
var source = require('vinyl-source-stream');
var babelify = require('babelify');


// Path variables
var paths = {
  src: './public/src/',
  build: './public/build/',
  public: './public/',
  node: './node_modules/'
};

gulp.task('babel', function() {
  browserify({
    entries: paths.src + 'js/main.js',
    // extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest(paths.build + 'js'))
});

gulp.task('minhtml', function() {
  return gulp.src(paths.src + 'index.html')
    .pipe(html())
    .pipe(gulp.dest(paths.build));
});

gulp.task('icons', function() { 
  return gulp.src(paths.node + 'font-awesome/fonts/**.*') 
    .pipe(gulp.dest(paths.build + 'fonts')); 
});

gulp.task('sass', function() { 
  return gulp.src(paths.src + 'scss/**/*.scss')
    .pipe(plumber())
     .pipe(sass({ 
      style: 'compressed',
       loadPath: [
  paths.src + 'scss/',
  paths.node + 'font-awesome/scss' 
        ] 
    }) 
    .on("error", notify.onError(function(error) { 
      return "Error: " + error.message; 
    })))  
    .pipe(gulp.dest(paths.build + 'css'));
});

gulp.task('image', function () {
  gulp.src(paths.src + 'image/**.*')
    .pipe(image())
    .pipe(gulp.dest(paths.build + 'img'));
});


// Watchers
gulp.task('watch', function() {
  gulp.watch(paths.src + '/scss/**/*.scss', ['sass']); 
  gulp.watch(paths.src + '*.html', ['minhtml']);
  gulp.watch(paths.src + '/js/**/*.js', ['babel']);
});

  // Default Task
gulp.task('default', ['babel', 'icons', 'minhtml', 'sass', 'watch', 'image']);
