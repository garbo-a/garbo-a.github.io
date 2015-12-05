//// Include gulp
//var gulp = require('gulp');
//
//// Include Our Plugins
//var jshint = require('gulp-jshint');
//var sass = require('gulp-sass');
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');
//var watchLess = require('gulp-watch-less');
//var less = require('gulp-less');
//
//// Lint Task
//gulp.task('lint', function() {
//    return gulp.src('*.js')
//        .pipe(jshint())
//        .pipe(jshint.reporter('default'));
//});
//
//// Compile Our Sass
//gulp.task('sass', function() {
//    return gulp.src('scss/*.scss')
//        .pipe(sass())
//        .pipe(gulp.dest('css'));
//});
//
//// Concatenate & Minify JS
//gulp.task('scripts', function() {
//    return gulp.src('*.js')
//        .pipe(concat('all.js'))
//        .pipe(gulp.dest('dist'))
//        .pipe(rename('all.min.js'))
//        .pipe(uglify())
//        .pipe(gulp.dest('dist'));
//});
//
//// Watch Files For Changes
//gulp.task('watch', function() {
//    gulp.watch('*.js', ['lint', 'scripts']);
//    gulp.watch('*.scss', ['sass']);
//});
//
//gulp.task('watch-less', function () {
//    return gulp.src('less/file.less')
//        .pipe(watchLess('less/file.less'))
//        .pipe(less())
//        .pipe(gulp.dest('dist'));
//});
//
//// Default Task
//gulp.task('default', ['lint', 'sass', 'scripts', 'watch', 'watch-less']);

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat');

gulp.task('scss', function () {
    gulp.src('*.scss')
        .pipe(sass({
            onError: function (err) {
                console.log(err.message);
                return false;
            }
        }))
        .pipe(concat('styles_shop.css'))
        .pipe(autoprefixer())
        .pipe(gulp.dest('../css'));
});

gulp.task('default', ['scss'], function() {
    gulp.start('watch');
});

gulp.task('watch', function() {
    gulp.watch('./**/*.scss', ['scss']);
});
///**
// * Created by Garbovskiy on 10.07.2015.
// */
//var http = require('http');
//var static = require('node-static');
//var file = new static.Server('.');
//
//http.createServer(function(req, res) {
//    file.serve(req, res);
//}).listen(8080);
//
//console.log('Server running on port 8080');
//
//var quarter = function (number) {
//    return number/4;
//};
//
//
//var condition = quarter (36);
//
//
//if (condition % 3 === 0 ) {
//    console.log("The statement is true");
//} else {
//    console.log("The statement is false");
//}

function fn (i) {
    console.log(i);
}

for (var i = 0; i < 10; i++) {
    setTimeout(fn.bind(null, i), 0);
}
