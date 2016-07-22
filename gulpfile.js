// 引入 gulp
var gulp = require('gulp'); 

// 引入组件
var sass = require('gulp-ruby-sass');
var cleanCss = require('gulp-clean-css');

 
gulp.task('sass', function () {
    return sass('stylesheets/*.scss')
        // .on('error', function (err) {
        //     console.error('Error!', err.message);
        // })
        .pipe(gulp.dest('stylesheets'));
});

gulp.task('cleanCss',function(){
	return gulp.src('css/*.css')
	.pipe(cleanCss({compatibility:'ie8'}))
	.pipe(gulp.dest('minifyCss'));

});
 
// 默认任务
gulp.task('default', function(){
    gulp.run('sass');
    gulp.run('cleanCss');

    // 监听文件变化
    gulp.watch('scss/*.scss', function(){
        gulp.run('sass');
        
    });
    gulp.watch('css/*.css', function(){
        gulp.run('cleanCss');
        
    });
});