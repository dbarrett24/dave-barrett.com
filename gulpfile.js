

var gulp = require('gulp')
,   sourcemaps = require('gulp-sourcemaps')
,   sass = require('gulp-sass')
,   babel = require('gulp-babel')
,   concat = require('gulp-concat')
,   CacheBuster = require('gulp-cachebust') //capitalized because it is a constructor function
,   print = require('gulp-print')
,   uglify = require('gulp-uglify')

var cachebust = new CacheBuster();  //need this constructor function


function buildCSS(){
    console.log("Gulp: Rebuilding CSS with your changes");
    return gulp.src('./styles/*') //tell gulp to get EVERYTHING inside the styles folder.
    .pipe(sourcemaps.init()) //pipe (take the results from the previous thing and do something). PIPE results to sourcemaps.init() function.
    .pipe(sass()) //process SASS. Turn sass into CSS.
    .pipe(cachebust.resources()) //Keep a copy of something and don't get the new thing. Blow up the old stuff, put in the new stuff!
    .pipe(concat('styles.css')) //put all the sass files into ONE long file. Makes things faster
    .pipe(sourcemaps.write('./maps')) //write out sourcemaps
    .pipe(gulp.dest('./dist')); //stick the sourcemaps into the dist folder.
}

//Make sure to install all the tools listed above.
// npm install --save gulp-sourcemaps gulp-sass gulp-concat -gulp-cachebust



function buildJS() {
    console.log("Gulp: Rebuilding JavaScript with your changes");
    return gulp.src('js/**/*.js')               
    .pipe(sourcemaps.init())
    .pipe(print())                        
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js'));
}

//npm install --save gulp-babel gulp-print babel-preset-es2015
function buildViews(){
    console.log("Gulp: Rebuilding HTML with your changes");
    return gulp.src('views/**/*.html')
    .pipe(gulp.dest('./dist/views'));
    
}
function buildImages(){
    console.log("Gulp: Rebuilding Images with your changes");
    return gulp.src('images/**/*')
    .pipe(gulp.dest('./dist/images'));
}
function buildJSON(){
    console.log("Gulp: Rebuilding JSON with your changes");
    return gulp.src('JSON/*.json')
    .pipe(gulp.dest('./dist/json'));
}
function buildDL(){
    console.log("Gulp: Rebuilding Downloads with your changes");
    return gulp.src('download/**/*')
    .pipe(gulp.dest('./dist/download'));
}

function build() {
    return gulp.src('index.html')
    .pipe(cachebust.references())
    .pipe(gulp.dest('dist'));
};

function watch() {
    gulp.watch(['./index.html','./views/**/*.html'], buildViews);
    gulp.watch('./styles/*.*css', buildCSS);
    gulp.watch('./js/**/*.js', buildJS);
    gulp.watch('./images/**/*', buildImages);
    gulp.watch('./JSON/*.json', buildJSON);
    gulp.watch('download/**/*', buildDL);
};

// gulp.task(series(build, watch));

gulp.task('default', gulp.series(buildCSS, buildJS, buildImages, buildJSON, buildDL, buildViews, build, watch));
