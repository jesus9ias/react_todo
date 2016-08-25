var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var minify = require('gulp-minify-css');

gulp.task('sass', function() {
  gulp.src(['./src/style.scss'])
    .pipe(sass({
      'include css': true,
    }))
    .pipe(minify())
    .pipe(gulp.dest('./dist/dev/css/'));
})


gulp.task('build', function() {
  browserify({
    entries: './src/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./dist/dev/js/'));
});

gulp.task('serve', function() {
  gulp.watch('./src/**/*.js', ['build']);
  gulp.watch('./src/**/*.jsx', ['build']);
  gulp.watch(['./src/**/*.scss'], ['sass']);
})

gulp.task('default', ['serve', 'build', 'sass'])
