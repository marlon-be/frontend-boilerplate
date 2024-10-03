const postcssPresetEnv = require('postcss-preset-env');
// postcss.config.js
module.exports = {
	plugins: [

		require("postcss-import"),
		require("postcss-custom-media"),
		require('@lehoczky/postcss-fluid'),
		postcssPresetEnv({
			browsers: "cover 85% in alt-EU",
		}),
		require('postcss-combine-duplicated-selectors'),
		require('postcss-merge-rules'),
		// require('cssnano'),
	],
};
