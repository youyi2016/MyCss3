var gulp = require('gulp'); 
var fileinclude = require('gulp-file-include');
 gulp.task('fileinclude', function() { gulp.src('src/**.html') .pipe(fileinclude({ prefix: '@@', basepath: '@file' })) .pipe(gulp.dest('dist')); });