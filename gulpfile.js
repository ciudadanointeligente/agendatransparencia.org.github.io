var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var browserSync  = require('browser-sync');
var cp           = require('child_process');

var messages = {
	jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['serve', '--watch', '--baseurl'],
    	{stdio: 'inherit'}).on('close', done);
});


gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['jekyll-build']);