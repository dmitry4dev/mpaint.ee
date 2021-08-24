var gulp = require('gulp');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var cleanCss = require('gulp-clean-css');
var watch = require('gulp-watch');

gulp.task('concat', function() {
  return gulp.src([
    'src/css/normalize.css',
    'src/css/style.css',
    'src/css/header.css',
    'src/css/main.css',
    'src/css/footer.css'
  ])

    .pipe(concat('styles-min.css'))
    .pipe(gulp.dest('dist/css'));

});

gulp.task('clean', function(){
  return gulp.src('dist/css/styles-min.css')
  .pipe(cleanCss())
  .pipe(gulp.dest('dist/css'));

});

gulp.task('imagemin', function(){
  return gulp.src('src/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'));

});

gulp.task('watch', function(){
  gulp.watch('src/css/*.css', gulp.series('concat', 'clean'));
});