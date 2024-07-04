// postcss.config.js
module.exports = {
	parser: "postcss-scss",
	plugins: [
		require("postcss-easy-import")({
			prefix: "_",
		}),
		require("postcss-import"),
		require("postcss-custom-media"),
		require("postcss-merge-rules"),
	],
};
