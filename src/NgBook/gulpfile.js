﻿/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

/// <binding AfterBuild='moveToLibs' />

var gulp = require("gulp");

var paths = {
    npmSrc: "./node_modules/",
    libTarget: "./wwwroot/Scripts/Libs/"
};

var libsToMove = [
    paths.npmSrc + "es6-shim/es6-shim.js",
    paths.npmSrc + "angular2/bundles/angular2-polyfills.js",
    paths.npmSrc + "systemjs/dist/system.src.js",
    paths.npmSrc + "rxjs/bundles/Rx.js",
    paths.npmSrc + "angular2/bundles/angular2.dev.js"
];
gulp.task("moveToLibs", function () {
    return gulp.src(libsToMove).pipe(gulp.dest(paths.libTarget));
});