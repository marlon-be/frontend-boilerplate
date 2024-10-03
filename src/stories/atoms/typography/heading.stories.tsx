import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Heading, { HeadingProps } from './heading';
import Icon from '../icons/icon';

type Story = StoryObj<HeadingProps>;

export const Default: Story = {
	render: (args) => {
		return <Heading {...args} />;
	},
	args: {
		level: 1,
		className: 'h1',
		children: 'This is the example of a header',
	},
};

export const IconHeading: Story = {
	render: (args) => {
		return <Heading {...args} />;
	},
	args: {
		level: 1,
		children: (
			<>
				<Icon name="info" />
				This is the example of a header with an icon
			</>
		),
	},
};

export default {
	title: 'Atoms/Heading',
	component: Heading,
	argTypes: {
		level: {
			control: 'select',
		},
		className: {
			control: 'select',
			options: ['', 'h1', 'h2', 'h3', 'h4'],
		},
	},
	parameters: {
		layout: 'centered',
	},
} satisfies Meta;
