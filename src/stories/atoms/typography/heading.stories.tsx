import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Heading, { HeadingProps } from './heading';
import Icon from '../icons/icon';

type Story = StoryObj<HeadingProps>;

export const H1: Story = {
	name: "H1 (Default)",
	args: {
		tag: "h1",
		children: "This is an example of a h1 heading",
	},
};

export const H2: Story = {
	name: "H2",
	args: {
		tag: "h2",
		children: "This is an example of a h2 heading",
	},
};

export const H3: Story = {
	name: "H3",
	args: {
		tag: "h3",
		children: "This is an example of a h3 heading",
	},
};

export const H4: Story = {
	name: "H4",
	args: {
		tag: "h4",
		children: "This is an example of a h4 heading",
	},
};

export const H5: Story = {
	name: "H5",
	args: {
		tag: "h5",
		children: "This is an example of a h5 heading",
	},
};

export const H6: Story = {
	name: "H6",
	args: {
		tag: "h6",
		children: "This is an example of a h6 heading",
	},
};

export const H1AsClass: Story = {
	name: ".h1",
	args: {
		tag: "h2",
		className: "h1",
		children: "This is an example of a .h1 heading rendered as h2-tag",
	},
};

export const H2AsClass: Story = {
	name: ".h2",
	args: {
		tag: "h3",
		className: "h2",
		children: "This is an example of a .h2 heading rendered as a h3-tag",
	},
};

export const H3AsClass: Story = {
	name: ".h3",
	args: {
		tag: "h4",
		className: "h3",
		children: "This is an example of a .h3 heading rendered as a h4-tag",
	},
};

export const IconHeading: Story = {
	args: {
		tag: "h1",
		children: (
			<>
				<Icon variant="info" />
				This is the example of a header with an icon
			</>
		),
	},
};

export default {
	title: "Atoms/Heading",
	component: Heading,
	argTypes: {
		level: {
			control: "select",
		},
		className: {
			control: "select",
			options: ["", "h1", "h2", "h3", "h4", "h5", "h6"],
		},
	},
	parameters: {
		layout: "centered",
	},
} satisfies Meta;
