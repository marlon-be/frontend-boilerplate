const postcssPresetEnv = require('postcss-preset-env');
// postcss.config.js
module.exports = {
	plugins: [
		require('@lehoczky/postcss-fluid'),
		require("postcss-custom-media"),
		postcssPresetEnv({
			browsers: "cover 85% in alt-EU",
		}),
		// require("postcss-easy-import")({
		// 	prefix: "_",
		// }),
		require("postcss-import"),
		require('postcss-combine-duplicated-selectors'),
		// require('cssnano'),
	],
};
