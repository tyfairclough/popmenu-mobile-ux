/*
  sass.js
  ===========

  includes sourcemaps
*/

var gulp = require('gulp')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')

var config = require('./config.json')

<<<<<<< HEAD
gulp.task('sass', function () {
  return gulp.src(config.paths.assets + '/sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'expanded',
    includePaths: ['node_modules/materialize-css/sass/']}).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(config.paths.public + '/stylesheets/'))
})
=======

>>>>>>> 30fe31b0465eb2d7a8904dd704ac7de3515b8db9
