/**
 * Created by wmy on 2017/3/18.
 */
var gulp = require('gulp');
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
