// postcss.config.js
module.exports = {
	plugins: [
		require("postcss-easy-import")({
			prefix: "_",
		}),
		require("postcss-import"),
		require("postcss-custom-media"),
		require("postcss-merge-rules"),
	],
};
