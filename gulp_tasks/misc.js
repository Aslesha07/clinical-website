const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');
var imagemin = require('gulp-imagemin');

const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('other', other);
gulp.task('images', images);

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function other() {
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join(`!${conf.paths.src}`, '/**/*.{scss,js,html}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.dist));
}

function images() {
  return gulp.src(conf.path.src('**/*/*.+(png|jpg|gif|svg|jpeg)'))
    .pipe(imagemin())
    .pipe(gulp.dest(conf.path.tmp()));
}
