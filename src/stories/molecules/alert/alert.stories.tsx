import { Meta, StoryObj } from '@storybook/react';
import Alert, { AlertProps } from './alert';

type Story = StoryObj<AlertProps>;

export const Default: Story = {
	render: (args) => {
		return <Alert {...args} />;
	},
	args: {
		type: 'base',
		hasClose: false,
		children: 'This is an alert, change option to bottom to view all.',
	},
};

export default {
	component: Alert,
	title: 'Molecules/Alert',
	argTypes: {
		type: {
			control: 'select',
		},
		hasClose: {
			control: 'boolean',
		},
	},
} satisfies Meta;
