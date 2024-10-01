import { Meta, StoryFn } from '@storybook/react';
import Alert, { AlertProps } from './alert';

export default {
	component: Alert,
	title: 'Molecules/Alert',
	argTypes: {
		type: {
			control: 'select',
			options: ['base', 'success', 'danger', 'warning', 'info'],
		},
		hasClose: {
			control: 'boolean',
		},
	},
} as Meta;

const Template: StoryFn<AlertProps> = (args) => <Alert {...args} />;

export const DefaultAlert = Template.bind({});
DefaultAlert.args = {
	type: 'base',
	hasClose: false,
	children: 'This is an alert, change option to bottom to view all.',
};
