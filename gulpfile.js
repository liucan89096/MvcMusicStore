var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('auto', function () {
	browserSync.init({
		proxy: "localhost:10000", // makes a proxy for localhost:8080
		port: "20000",
    });
	
	gulp.watch([
	'./MvcMusicStore/Views/**/*.cshtml',
	'./MvcMusicStore/Content/**/*.css',
	'./MvcMusicStore/Scripts/**/*.css'
	]).on('change', browserSync.reload);
})