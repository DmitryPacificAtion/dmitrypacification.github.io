const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const jsmin = require('gulp-jsmin');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const watch = require('gulp-watch');

gulp.task('sass', function () {
	return gulp.src('./node_modules/normalize.scss/normalize.scss')
	.pipe(rename({prefix: '_'}))
	.pipe(gulp.dest('./src/scss')) && gulp.src('./src/scss/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(cssmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('build/css'));
	});

gulp.task('js', function () {
	gulp.src('./src/js/*.js')
	.pipe(jsmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('build/js'));
	});

gulp.task('html', function() {
	return gulp.src('./*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./'));
	});

gulp.task('fonts', function(){
	return gulp.src('./src/fonts/**/*')
	.pipe(gulp.dest('build/fonts'));
	});

gulp.task('img', function(){
	return gulp.src('./src/img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('build/img'))
	});

gulp.task('watch', ['sass', 'js'], function () {
	gulp.watch('./src/scss/*.scss', ['sass']);
	gulp.watch('./src/js/*.js');
	});
gulp.task('build', function () {
	gulp.start('sass', 'js', 'html', 'img', 'fonts');
	});
gulp.task('default', ['watch'], function() {
   gulp.start('sass', 'js');
 });