var gulp = require('gulp');
var ngConfig = require('gulp-ng-config');
var config = require('./config.js');

gulp.task('ng-config', function() {
  gulp.src('./config.json')
  .pipe(ngConfig('jobTracker.config', {
      createModule: true
    })
  )
  .pipe(gulp.dest('./client/app'))
}); 