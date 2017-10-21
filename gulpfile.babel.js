import gulp from 'gulp'
import ejs from 'gulp-ejs'
import htmlmin from 'gulp-htmlmin'
import less from 'gulp-less'
import plumber from 'gulp-plumber'
import postcss from 'gulp-postcss'
import gulpSequence from 'gulp-sequence'
import sourcemaps from 'gulp-sourcemaps'
import gulpWebpack from 'gulp-webpack'
import webpack from 'webpack'
import configDev from './webpack.dev'
import configProd from './webpack.prod'
import autoprefixer from 'autoprefixer'
import browserSync from 'browser-sync'
import cssnano from 'cssnano'
import del from 'del'

gulp.task('clean', () => {
  return del('build/**/*')
})

gulp.task('js:dev', () => {
  return gulp.src('src/*.js')
    .pipe(plumber())
    .pipe(gulpWebpack(configDev, webpack))
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream())
})

gulp.task('js:prod', () => {
  return gulp.src('src/*.js')
    .pipe(plumber())
    .pipe(gulpWebpack(configProd, webpack))
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream())
})

gulp.task('styles', () => {
  let processors = [
    autoprefixer(),
    cssnano()
  ]

  return gulp.src('styles/*.less')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream())
})

gulp.task('pages', () => {
  return gulp.src('pages/views/**/*.ejs')
    .pipe(plumber())
    .pipe(ejs({}, {}, {
      ext: '.html'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('build'))
    .pipe(browserSync.stream())
})

gulp.task('pwa', () => {
  return gulp.src('pwa/*')
    .pipe(gulp.dest('build'))
})

gulp.task('build', gulpSequence('clean', ['js:dev', 'styles', 'pages', 'pwa']))

gulp.task('build:prod', gulpSequence('clean', ['js:prod', 'styles', 'pages', 'pwa']))

gulp.task('watch', () => {
  browserSync.init({
    server: 'build'
  })

  gulp.watch('src/**/*.js', ['js:dev'])

  gulp.watch('styles/**/*.less', ['styles'])

  gulp.watch('pages/**/*.ejs', ['pages'])

  gulp.watch('build/**/*.html', browserSync.reload)
})

gulp.task('default', gulpSequence('build', 'watch'))
