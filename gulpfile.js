var gulp = require('gulp');
var jekyll = require('gulp-jekyll');
var ghPages = require('gulp-gh-pages');

gulp.task('default', function () {
    console.log('oli');
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});