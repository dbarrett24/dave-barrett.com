

var gulp = require('gulp')
,   sourcemaps = require('gulp-sourcemaps')
,   sass = require('gulp-sass')
,   concat = require('gulp-concat')
,   CacheBuster = require('gulp-cachebust') //capitalized because it is a constructor function
,   print = require('gulp-print')
,   babel = require('gulp-babel')

var cachebust = new CacheBuster();  //need this constructor function


gulp.task('build-css', function(){
    return gulp.src('./styles/*') //tell gulp to get EVERYTHING inside the styles folder.
        .pipe(sourcemaps.init()) //pipe (take the results from the previous thing and do something). PIPE results to sourcemaps.init() function.
        .pipe(sass()) //process SASS. Turn sass into CSS.
        .pipe(cachebust.resources()) //Keep a copy of something and don't get the new thing. Blow up the old stuff, put in the new stuff!
        .pipe(concat('styles.css')) //put all the sass files into ONE long file. Makes things faster
        .pipe(sourcemaps.write('./maps')) //write out sourcemaps
        .pipe(gulp.dest('./dist')); //stick the sourcemaps into the dist folder.
})

//Make sure to install all the tools listed above.
// npm install --save gulp-sourcemaps gulp-sass gulp-concat -gulp-cachebust



gulp.task('build-js', function() {
   return gulp.src('js/**/*.js')               
      .pipe(sourcemaps.init())
      .pipe(print())                        
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js'));
    });
    
    //npm install --save gulp-babel gulp-print babel-preset-es2015
gulp.task('build-views', function(){
    return gulp.src('views/**/*.html')
        .pipe(gulp.dest('./dist/views'));
})
gulp.task('build-images', function(){
    return gulp.src('images/**/*')
        .pipe(gulp.dest('./dist/images'));
})
gulp.task('build-JSON', function(){
    return gulp.src('JSON/*.json')
        .pipe(gulp.dest('./dist/JSON'));
})
gulp.task('build-download', function(){
    return gulp.src('download/**/*')
        .pipe(gulp.dest('./dist/download'));
})

gulp.task('build', ['build-css', 'build-js', 'build-views', 'build-images', 'build-JSON', 'build-download'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./index.html','./views/**/*.html', './styles/*.*css', './js/**/*.js', './images/**/*', './JSON/*.json'], ['build']);
});

gulp.task('start', ['build', 'watch']);