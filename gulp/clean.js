/*
  clean.js
  ===========
  removes folders:
    - public
    - govuk_modules
*/
var config = require('./config.json')

var gulp = require('gulp')
var clean = require('gulp-clean')

gulp.task('clean', function () {
  return gulp.src([
    '.port.tmp'], {read: false})
  .pipe(clean())
})
