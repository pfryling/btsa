var gulp    = require('gulp'),
  less      = require('gulp-less'),
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
  css: 'css/*.css',
  fonts: 'fonts/**.*',
  awesome_fonts: 'font-awesome-4.1.0/**/**.*',
  mail: 'mail/*.php',
  images: 'img/**/*.*',
  styles: 'less/*.less',
  index: 'index.html',
  angular: 'js/btsa/**/*.js',
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



/**
 * Copy assets
 */
gulp.task('copy-assets', ['copy-images', 'copy-fonts','copy-css', 'copy-bower_fonts','copy-awesome_fonts', 'copy-html', 'copy-lib', 'copy-mail']);

gulp.task('copy-images', function(){
  return gulp.src(paths.images)
    .pipe(gulp.dest('dist/img'));
});

gulp.task('copy-mail', function(){
  return gulp.src(paths.mail)
    .pipe(gulp.dest('dist/mail'));
});

gulp.task('copy-fonts', function(){
  return gulp.src(paths.fonts)
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('copy-css', function(){
  return gulp.src(paths.css)
    .pipe(gulp.dest('dist/css'));
});

gulp.task('copy-awesome_fonts', function(){
  return gulp.src(paths.awesome_fonts)
    .pipe(gulp.dest('dist/fonts/awesome-fonts'));
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
  gulp.watch([paths.styles], ['compile-less']);
  gulp.watch([paths.css], ['copy-css']);
  gulp.watch([paths.js], ['scripts']);
  gulp.watch([paths.angular], ['build']);
  gulp.watch([paths.images], ['copy-images']);
  gulp.watch([paths.views], ['copy-html']);
  gulp.watch([paths.fonts], ['copy-fonts']);
  gulp.watch([paths.bower_fonts], ['copy-bower_fonts']);
});

gulp.task('webserver', function() {
  connect.server({
    root: 'dist',
    livereload: false
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
  return gulp.src('less/freelancer.less')
      .pipe(less())
      .pipe(rename('freelancer.css'))
      .pipe(gulp.dest('./css/'));
});

gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('build', ['copy-assets', 'livereload']);
gulp.task('default', ['scripts', 'compile-less','build', 'webserver', 'livereload', 'watch']);