import type { Preview } from "@storybook/react";

import '../storybook-static/dist/css/main.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
