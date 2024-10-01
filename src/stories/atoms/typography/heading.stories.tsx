import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Heading, { HeadingProps } from './heading';

export default {
	title: 'Atoms/Heading',
	component: Heading,
	argTypes: {
		level: {
			control: 'select',
			options: [1, 2, 3, 4],
		},
		className: {
			control: 'select',
			options: ['', 'h1', 'h2', 'h3', 'h4'],
		},
	},
	parameters: {
		layout: 'centered',
	},
} as Meta;

const Template: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

export const DefaultHeading = Template.bind({});

DefaultHeading.args = {
	level: 1,
	className: '',
	children: 'This is the example of a header',
};

export const IconHeading = Template.bind({});

IconHeading.args = {
	level: 1,
	className: '',
	children: (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				className="icon icon--cap"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
				/>
			</svg>
			This is the example of a header with an icon
		</>
	),
};
