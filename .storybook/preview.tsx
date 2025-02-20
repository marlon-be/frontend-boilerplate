import React, { FC } from "react";
import type { Preview } from "@storybook/react";
import SpriteSheet from "../src/stories/atoms/icons/sprite-sheet"; // Import the SpriteSheet component

import "./css/overrides.css";
import "../src/styles/main.css";

const preview: Preview = {
	parameters: {
		storySort: {
			order: ["Global", "Atoms", "Molecules", "Organisms"],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story: FC) => (
			<div>
				<SpriteSheet /> {/* Icons */}
				<Story />
			</div>
		),
	],
};

export default preview;
