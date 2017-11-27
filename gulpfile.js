var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('run', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("*.html").on('change', browserSync.reload);
});