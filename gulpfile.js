var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var sourcemaps = require("gulp-sourcemaps");

gulp.task('sass', function () {
	gulp.src('./node_modules/bootstrap/scss/bootstrap.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
//	.pipe(concat('style.css'))
	.pipe(cssmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('dist/css'));
	});

gulp.task('less', function () {
	gulp.src(['./node_modules/open-iconic/font/css/open-iconic-bootstrap.less', './src/less/style.less'])
	.pipe(less({
		plugins: [autoprefix]
		}))
	.pipe(cssmin())
	.pipe(concat('style.css'))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./dist/css'));
	});

gulp.task('js', function () {
	gulp.src(['./node_modules/jquery/dist/jquery.min.js', './node_modules/popper.js/dist/popper.min.js', './node_modules/bootstrap/dist/js/bootstrap.min.js','./src/js/*.js'])
	.pipe(babel({
            presets: ['env', 'es2015']
        }))
	.pipe(jsmin())
	.pipe(concat('bundle.js'))
	.pipe(gulp.dest('./dist/js'));
	});

gulp.task('fonts', function(){
	return gulp.src(['./node_modules/open-iconic/font/fonts/**.*', './src/fonts/**/*.*'])
	.pipe(gulp.dest('./dist/fonts'));
	});

gulp.task('img', function(){
	return gulp.src('./src/img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./dist/img'))
	});

gulp.task('browser-sync', function () {
	browserSync.init({
		server: "./dist"
		});
	});

gulp.task('watch', ['less', 'js'], function () {
	gulp.watch('./src/less/*.less', ['less']);
	gulp.watch('./src/js/*.js');
	});
gulp.task('build', function () {
	gulp.start('sass', 'less', 'js', 'img', 'fonts');
	});
gulp.task('default', ['watch'], function() {
	gulp.start('less', 'js');
	});