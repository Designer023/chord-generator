/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");

const gulp = require("gulp");
const babel = require("gulp-babel");
const gulpClean = require("gulp-clean");
const rename = require("gulp-rename");

const root = path.relative(__dirname, process.env.INIT_CWD);

const paths = {
    transpile: [path.join(root, "src/**/*.{js,jsx}")],
    copy: [
        path.join(root, "**/*.*"),
        `!{node_modules,dist}/**`,
        `!gulpfile.js`,
        `!src/**/*.{js,jsx}`,
        `!coverage/**`,
        "!yarn.lock"
    ],
    output: path.join(root, "dist")
};

const clean = () => gulp.src(paths.output, { allowEmpty: true, read: false }).pipe(gulpClean());
const transpile = () => {
    return gulp.src(paths.transpile).pipe(babel()).pipe(gulp.dest(paths.output));
};
const copy = () =>
    gulp
        .src(paths.copy)
        .pipe(
            rename((filepath) => {
                filepath.dirname = filepath.dirname.replace(/^src\//, "");
            })
        )
        .pipe(gulp.dest(paths.output));

exports.build = gulp.series(clean, gulp.parallel(transpile, copy));
exports.watch = () => {
    const watchOptions = { ignoreInitial: false };

    gulp.watch(paths.transpile, watchOptions, transpile);
    gulp.watch(paths.copy, watchOptions, copy);
};

exports.clean = clean;
exports.copy = copy;
exports.transpile = transpile;
