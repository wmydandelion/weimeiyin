/**
 * Created by wmy on 2017/3/18.
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('lint',function(){
    gulp.rc('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('sass',function(){
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});
gulp.task('scripts',function(){
    gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dest'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dest'));
});
gulp.task('default',function(){
    gulp.run('lint','sass','scripts');
    gulp.watch('./js/*.js',function(){
       gulp.run('lint','sass','scripts');
    });
});

gulp.task('test',function(){
   console.log('aaa');
});
gulp.task("test2",function(){
    console.log("bbb");
});
gulp.task('test3',['test2','test']);
gulp.task("test4",function(){
    gulp.src('index.html').pipe(gulp.dest('dist'));
});
gulp.task('copy-img',function(){
    gulp.src(['src/images/**/*.{jpg,png}','!src/image/prev.png']).pipe(gulp.dest('dist/img'));
});
gulp.task('copy-html',function(){
    gulp.src('index.html').pipe(gulp.dest('dist'));
});
gulp.task('watch-html',function(){
    gulp.watch('index.html',['copy-html']).pipe(gulp.dest('dist'));
});
var exec = require('child_process').exec;
gulp.task('jekyll',function(cb){
    exec('jekyll build', function (err) {
        if(err)
        return cb(err);
        cb();
    })
});
gulp.task('somename1',function(){
    var stream = gulp.src('client/**/*.js')
        .pipe(minify()).pipe(gulp.dest('build'));
    return stream;
});
var Q = require('q');
gulp.task('somename2',function(){
    var deferred = Q.defer();
    setTimeout(function () {
        deferred.resolve();
    },1);
    return deferred.promise;
});
gulp.task('one', function (cb) {
    cb(err);
});
gulp.task('two',['one'],function(cb){
});
gulp.task("default",['one','two']);
var watcher = gulp.watch('js/**/*.js',['uglify','reload']);
watcher.on('change',function(event){
   console.log("File"+event.path+"was"+event.type+",running task......");
});
gulp.src('client/templates/*.jade').pipe(jade())
.pipe(minify()).pipe(gulp.dest('build/minified_templates'));