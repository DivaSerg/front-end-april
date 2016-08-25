var gulp = require('gulp');
var debug = require('gulp-debug');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

gulp.task('clean', function() {
    return del('dist');
})

gulp.task('sass', function() {
    return gulp.src('source/assets/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(debug({ title: "sass" }))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(debug({ title: 'copy' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('js', function() {
    return gulp.src(['source/modules/module.js', 'source/app.js'])
        .pipe(sourcemaps.init())
        .pipe(debug({ title: 'uglify js' }))
        .pipe(uglify({ compress: true }))
        .pipe(debug({ title: 'concat js ' }))
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'))
})

gulp.task('html', function() {
    return gulp.src('./index.html')
        .pipe(debug({ title: "copy and compress html" }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
})

gulp.task('watch', function() {
    gulp.watch('source/**/*.js', gulp.series('js'));
})

gulp.task('build', gulp.series('clean', gulp.parallel('html', 'sass', 'js')));

gulp.task('default', gulp.series('build', 'watch'));
