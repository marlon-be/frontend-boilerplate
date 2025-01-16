module.exports = {
	plugins: {
		"postcss-import": {},
		"postcss-custom-media": {},
		"postcss-preset-env": {
			browsers: "cover 85% in alt-EU",
		},
		"postcss-combine-duplicated-selectors": {},
		"postcss-merge-rules": {},
	},
};
