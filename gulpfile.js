/**
 * Created by stephane on 13/04/16.
 */
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    //gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});