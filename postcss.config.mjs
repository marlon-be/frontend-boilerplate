import presetEnv from "postcss-preset-env";
import customMedia from "postcss-custom-media";
import AtImport from "postcss-import";
import combineSelectors from "postcss-combine-duplicated-selectors";
import mergeRules from "postcss-merge-rules";

// postcss.config.js
module.exports = {
	plugins: [
		AtImport,
		customMedia,
		presetEnv({
			browsers: "cover 85% in alt-EU",
		}),
		combineSelectors,
		mergeRules,
	],
};
