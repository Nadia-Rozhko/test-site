const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Шлях до вихідного SCSS
const scssPath = 'src/scss/**/*.scss';

function compileSCSS() {
  return gulp.src(scssPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
}

function watchFiles() {
  gulp.watch(scssPath, compileSCSS);
}

exports.default = gulp.series(compileSCSS, watchFiles);
