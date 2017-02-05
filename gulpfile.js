var gulp = require('gulp'),
    gulpSass = require('gulp-sass'),
    uglify = require('gulp-uglify');

gulp.task('styles', function () {
    gulp.src('scss/style.scss')
        .pipe(gulpSass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./static'));
});

gulp.task('scripts', function() {
    gulp.src('src/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('./static'));
});

gulp.task('watch', function () {
    gulp.watch('src/*', ['styles', 'scripts']);
});

gulp.task('default', ['styles', 'scripts']);
