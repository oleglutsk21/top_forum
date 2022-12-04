
let path = {
    build: {
        css: "./css/",
    },
    src: {
        css: "./scss/styles.scss",

    },
    watch: {
        css: "./scss/**/*.scss",
    },
    clean: "./css"
}

let {src, dest} = require('gulp'),
    gulp = require('gulp'),
    del = require("del"),
    scss = require('gulp-sass')(require('node-sass')),
    autoprefixer = require("gulp-autoprefixer"),
    group_media  = require("gulp-group-css-media-queries");
    


function css(params) {
    return src(path.src.css)
        .pipe(scss({ outputStyle: 'expanded' }).on('error', scss.logError))
        .pipe(
            group_media()
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 5 versions"],
                cascade: true
            })
        )
        .pipe(dest(path.build.css))
}


function watchFiles(params) {
    gulp.watch([path.watch.css], css);
}

function clean(params) {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(css));
let watch = gulp.parallel(build, watchFiles);

exports.css = css;
exports.build = build;
exports.watch = watch;
exports.default = watch;