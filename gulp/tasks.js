/*
  tasks.js
  ===========
  defaults wraps generate-assets, watch and server
*/

var gulp = require('gulp')
var mocha = require('gulp-mocha')
var runSequence = require('run-sequence')



gulp.task('generate-assets', function (done) {
  runSequence('clean',
                'sass',
<<<<<<< HEAD
=======
                'sass-documentation',
>>>>>>> 30fe31b0465eb2d7a8904dd704ac7de3515b8db9
                'copy-assets', done)
})


gulp.task('watch', function (done) {
  runSequence('watch-sass',
               'watch-assets', done)
})

gulp.task('test', function () {
  runSequence('generate-assets',
              'mocha')
})

gulp.task('mocha', function () {
  return gulp.src(['test/**/*.js'], { read: false })
        .pipe(mocha({ reporter: 'spec' }))
        .once('error', () => {
          process.exit(1)
        })
        .once('end', () => {
          process.exit()
        })
})
