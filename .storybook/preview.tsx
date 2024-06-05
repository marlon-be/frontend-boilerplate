import type { Preview } from "@storybook/react";

import "./css/overrides.css";
// import '../storybook-static/css/main.css';
import '../dist/storybook/css/main.css';

const preview: Preview = {
	parameters: {
		storySort: {
			order: ['Global', 'Atoms', 'Molecules', 'Organisms'],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
