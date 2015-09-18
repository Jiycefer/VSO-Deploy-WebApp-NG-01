'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var zip = require('gulp-zip');
var ignore = require('gulp-ignore');

gulp.task('zip-dist', function () {
  return gulp.src([path.join(conf.paths.dist, '/**'), '!./**/*.map'])
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest(conf.paths.dist));
});