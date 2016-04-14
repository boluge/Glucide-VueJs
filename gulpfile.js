/**
 * Created by stephane on 13/04/16.
 */
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var webpack     = require('webpack-stream');
var uglify      = require('gulp-uglify');
var batch       = require('gulp-batch');
var connect     = require('gulp-connect');
var copy        = require('gulp-copy');

// Run webpack
gulp.task('webpack', function(){
  return gulp.src('js/main.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(uglify())
    .pipe(gulp.dest('js/dist'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(['js/*.js', '!js/dist/*.js'], ['webpack']);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('js/dist/app.js').on('change', browserSync.reload);
});

gulp.task('default', ['webpack','watch'],function(){});
