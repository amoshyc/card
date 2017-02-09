var gulp = require('gulp'),
    gulpSass = require('gulp-sass'),
    uglify = require('gulp-uglify');

gulp.task('styles', function () {
    gulp.src('scss/all.scss')
        .pipe(gulpSass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./static'));
});

gulp.task('scripts', function() {
    gulp.src('js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('./static'));
});

gulp.task('watch', function () {
    gulp.watch('src/*', ['styles', 'scripts']);
});

gulp.task('default', ['styles', 'scripts']);
