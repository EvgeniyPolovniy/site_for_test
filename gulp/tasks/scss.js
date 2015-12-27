var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config');

gulp.task('scss', function () {
  return gulp.src(config.files.scss.base)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.files.scss.buildFolder));
});
