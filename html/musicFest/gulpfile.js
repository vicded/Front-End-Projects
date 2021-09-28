const {series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//Compile sass
function css ( ) {
    return src('src/scss/app.scss',{allowEmpty:true})
        .pipe(sass() )
        .pipe(dest('./build/css') )
}

function  mincss ( ) {
    return src('src/scss/app.scss', {allowEmpty:true})
        .pipe(sass({
            outputStyle: 'compressed'
        }) )
        .pipe(dest('./build/css') )
}

// function watchFile() {
//     watch('src/scss/**/*.scss', {ignoreInitial: false}, css);
// }   

function watchFile() {
    watch('src/scss/**/*.scss', {ignoreInitial: false}, css);
}   


exports.css = css;
exports.mincss = mincss;
exports.watchFile = watchFile;


