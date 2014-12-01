var gulp    = require('gulp'),
  less      = require('gulp-less'),
  usemin    = require('gulp-usemin'),
  wrap      = require('gulp-wrap'),
  connect   = require('gulp-connect'),
  watch     = require('gulp-watch'),
  clean     = require('gulp-clean'),
  ngmin     = require('gulp-ngmin'),
  uglify    = require('gulp-uglify'),
  concat    = require('gulp-concat'),
  rename    = require('gulp-rename');


var paths = {
  js: 'js/*.js',
  lib: 'lib/*.js',
  fonts: 'fonts/**.*',
  images: 'img/**/*.*',
  styles: 'less/*.less',
  index: 'index.html',
  views: 'templates/*.html',
  bower_fonts: 'bower_components/**/*.{ttf,woff,eof,svg}',
  bower_components: 'bower_components/**/*.*',
};


 // Concatenate JS
gulp.task('scripts', function() {
    return gulp.src(paths.js)
      // .pipe(concat('main.js'))
      // .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
    });


gulp.task('usemin', function() {
  return gulp.src(paths.index)
    .pipe(usemin({
      less: ['concat', less()],
    }))
    .pipe(gulp.dest('dist/'))
});

/**
 * Copy assets
 */
gulp.task('copy-assets', ['copy-images', 'copy-fonts', 'copy-bower_fonts', 'copy-html', 'copy-lib']);

gulp.task('copy-images', function(){
  return gulp.src(paths.images)
    .pipe(gulp.dest('dist/img'));
});

gulp.task('copy-fonts', function(){
  return gulp.src(paths.fonts)
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('copy-bower_fonts', function(){
  return gulp.src(paths.bower_fonts)
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('copy-lib', function(){
  return gulp.src(paths.lib)
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('copy-html', function(){
  return gulp.src(paths.views)
    .pipe(gulp.dest('dist/templates'))
    //.pipe(connect.reload());
});

/**
 * Watch src
 */
gulp.task('watch', function () {
  gulp.watch([paths.styles, paths.index, paths.js], ['usemin']);
  gulp.watch([paths.js], ['scripts']);
  gulp.watch([paths.images], ['copy-images']);
  gulp.watch([paths.views], ['copy-html']);
  gulp.watch([paths.fonts], ['copy-fonts']);
  gulp.watch([paths.bower_fonts], ['copy-bower_fonts']);
});

gulp.task('webserver', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('livereload', function() {
  gulp.src(['dist/**/*.*'])
    .pipe(watch())
    .pipe(connect.reload());
});

/**
 * Compile less
 */
gulp.task('compile-less', function(){
  return gulp.src('less/*.less')
      .pipe(less())
      .pipe(gulp.dest('dist/css'));
});

gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('build', ['usemin', 'copy-assets']);
gulp.task('default', ['scripts', 'compile-less','build', 'webserver', 'livereload', 'watch']);