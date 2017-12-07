// 引入 gulp 包
var gulp = require('gulp')

// 引入 gulp-webserver 包
var webserver = require('gulp-webserver')
var proxy = require('http-proxy-middleware')

// 引入 gulp-webpack 包
var webpack = require('gulp-webpack')
// 引入 文件名提取 包
var named = require('vinyl-named')

// 版本号控制相关 包
var rev = require('gulp-rev')
var revCollector = require('gulp-rev-collector')
var del = require('del')
var gulpSequence = require('gulp-sequence')

// gulp load 包
var $ = require('gulp-load-plugins')()

// 引入 gulp-sass 包
var sass = require('gulp-sass')

// 环境切换配置
var minimist = require('minimist')
var gulpif = require('gulp-if')
var knownOptions = {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'production'}
}
var options = minimist(process.argv.slice(2), knownOptions)

// 启动一个webserver服务
gulp.task('webserver', function () {
  gulp.src('./dev/')
    .pipe(
      webserver({
        host: 'localhost',
        port: 8000,
        directoryListing: {
          enable: true,
          path: './dev'
        },
        livereload: true,

        middleware: [
          // 反向代理
          proxy('/mock', {
            target: 'http://localhost:9000/',
            changeOrigin: true,
            pathRewrite: {
              '^/mock': ''
            }
          }),
          proxy('/api', {
            target: 'https://m.lagou.com/',
            // target: 'http://localhost:3000/',
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          })
        ]
      })
    )
})

// 打包js
gulp.task('packjs', function () {
  return gulp.src([
    './src/script/app.js',
    './src/script/app-search.js',
    './src/script/weapp.js'
  ])
    .pipe(named())
    .pipe(webpack({
      output: {
        filename: '[name].js'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'imports-loader',
            exclude: './node_modules'
          },
          {
            test: /\.string$/,
            loader: 'string-loader'
          }
        ]
      }
    }))
    .pipe(gulpif(options.env === 'production', $.uglify()))
    .pipe(gulpif(options.env === 'production', rev()))
    .pipe(gulpif(options.env === 'production', gulp.dest('./build/script')))
    .pipe(gulpif(options.env !== 'production', gulp.dest('./dev/script')))
    .pipe(gulpif(options.env === 'production', rev.manifest()))
    .pipe(gulpif(options.env === 'production', gulp.dest('./build/rev/script')))
})

// 打包 scss
gulp.task('packscss', function () {
  return gulp.src([
    './src/style/usage/app.scss',
    './src/style/usage/app-search.scss',
    './src/style/usage/weapp.scss'
  ])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(options.env === 'production', $.minifyCss()))
    .pipe(gulpif(options.env === 'production', rev()))
    .pipe(gulpif(options.env === 'production', gulp.dest('./build/style')))
    .pipe(gulpif(options.env !== 'production', gulp.dest('./dev/style')))
    .pipe(gulpif(options.env === 'production', rev.manifest()))
    .pipe(gulpif(options.env === 'production', gulp.dest('./build/rev/style')))
})

gulp.task('copycss', function () {
  return gulp.src([
    './src/style/libs/**/*.css'
  ])
    .pipe(gulpif(options.env === 'production', gulp.dest('./build/style/libs')))
    .pipe(gulpif(options.env !== 'production', gulp.dest('./dev/style/libs')))
})

// copy images
gulp.task('copyimage', function () {
  gulp.src('./src/images/**/*')
    .pipe(gulpif(options.env === 'production', gulp.dest('./build/images')))
    .pipe(gulpif(options.env !== 'production', gulp.dest('./dev/images')))
})

// copy libs
gulp.task('copylibs', function () {
  gulp.src('./src/script/libs/*.*')
    .pipe(gulpif(options.env === 'production', gulp.dest('./build/libs')))
    .pipe(gulpif(options.env !== 'production', gulp.dest('./dev/libs')))
})

// 拷贝src下的html到build下
gulp.task('copyhtml', function () {
  gulp.src('./src/*.html')
    .pipe(gulpif(options.env === 'production', gulp.dest('./build/')))
    .pipe(gulpif(options.env !== 'production', gulp.dest('./dev/')))
})

// HTML 增加版本号
gulp.task('packhtml', function () {
  return gulp.src(['./build/rev/**/*.json', './build/*.html'])
    .pipe(revCollector())
    .pipe($.minifyHtml())
    .pipe(gulp.dest('./build'))
})

// 删除 build 里的文件
gulp.task('clean', del.bind(null, ['./build/**/*'], {
  force: true
}))

// pack
gulp.task('pack', function (callback) {
  if(options.env === 'production') {
    gulpSequence('clean', ['packjs', 'packscss', 'copyhtml', 'copylibs', 'copycss', 'copyimage'], 'packhtml')(callback)
  } else {
    gulpSequence(['packjs', 'packscss', 'copyhtml', 'copylibs', 'copycss', 'copyimage'])(callback)
  }
})

// 监测文件变化
gulp.task('watch', function () {
  gulp.watch('./src/*.html', ['copyhtml'])
  gulp.watch('./src/script/**/*.js', ['packjs'])
  gulp.watch('./src/script/**/*.string', ['packjs'])
  gulp.watch('./src/style/usage/**/*.scss', ['packscss'])
  gulp.watch('./src/style/libs/**/*.scss', ['copycss'])
  gulp.watch('./src/images/**/*', ['copyimage'])
  gulp.watch('./src/libs/**/*', ['copylibs'])
})

// 定义默认任务
gulp.task('default', ['pack', 'watch', 'webserver'], function () {
  console.log('done.')
})
