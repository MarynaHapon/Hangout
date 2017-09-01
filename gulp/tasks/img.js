module.exports = function() {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,jpeg,gif}')
            .pipe($.gulp.dest('./build/static/img/'));
    });

    var imagemin = require('gulp-imagemin');
    $.gulp.task('img:build', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,jpeg,gif}')
            .pipe(imagemin())
            .pipe($.gulp.dest('./build/static/img/'));
    });
};
