var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: 'app'
    });

    gulp.watch("app/styles/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', reload);
});


gulp.task('sass', function() {
    return gulp.src("app/styles/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
