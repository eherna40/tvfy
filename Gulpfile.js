var gulp = require('gulp');
var rename = require("gulp-rename");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var preset =  require('babel-preset-es2015');



gulp.task('scripts', function () {
  browserify('./src/index.js')
    .transform(babelify, {presets: ["es2015"]})
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public'))
});

gulp.task('assets', function(){
  gulp
    .src('src/app.css')
    .pipe(gulp.dest('public'));
  gulp
    .src('src/index.html')
    .pipe(gulp.dest('public'))
})

gulp.task('default', ['assets','scripts']);