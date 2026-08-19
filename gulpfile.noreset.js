"use strict"
import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
	isBuild: true,
	isDev: false,
	path: path,
	gulp: gulp,
	plugins: plugins
}

import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { files } from "./gulp/tasks/files.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, js, images, files));

gulp.task('buildNoReset', mainTasks);
