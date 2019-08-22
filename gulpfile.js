const { dest, parallel, series, src, task, watch } 	= require('gulp'),
      colors    = require('ansi-colors'),
      eslint    = require('gulp-eslint'),
      fancyLog  = require('fancy-log')
;

task('default', () => {
    return src(['src/**/*.js','!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError())
        // https://symfonycasts.com/screencast/gulp/on-end-async-and-listeners
        .on('end', notifyJsIsOk );
});

function notifyJsIsOk() {
  fancyLog(colors.green('JS is clean :)'))
}
