const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const del = require('del');
const mode = require('gulp-mode')();

function cleanup() {
  return del('./css/*');
}

function buildScss() {
  return gulp.src('./scss/**/*.scss')
    .pipe(mode.development(sourcemaps.init()))
    .pipe(sass({ includePaths: ['node_modules'] }).on('error', sass.logError))
    .pipe(postcss())
    .pipe(mode.development(sourcemaps.write()))
    .pipe(gulp.dest('./css'));
}

function watch() {
  gulp.watch('./scss/**/*.scss', buildScss);
}

gulp.task('build', gulp.series(cleanup, buildScss));
gulp.task('default', gulp.series('build', watch));
