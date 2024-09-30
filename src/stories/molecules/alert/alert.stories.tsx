import { Meta, Story } from '@storybook/react';
import Alert, { AlertProps } from './alert';

export default {
	component: Alert,
	title: 'Molecules/Alert',
	argTypes: {
		type: {
			control: 'select',
			options: ['success', 'danger', 'warning', 'info'],
		},
	},
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const DefaultAlert = Template.bind({});
DefaultAlert.args = {
	type: 'default',
	children: 'This is an alert, change option to bottom to view all.',
};
