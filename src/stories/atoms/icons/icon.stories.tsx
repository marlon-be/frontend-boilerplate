import { Meta, StoryFn } from '@storybook/react';
import Icon, { IconProps, IconNames } from './icon';

export default {
	component: Icon,
	title: 'Atoms/Icon',
	argTypes: {
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg', 'xl'],
		},
		name: {
			control: 'select',
			options: IconNames,
		},
	},
	parameters: {
		layout: 'centered',
	},
} as Meta;

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

export const DefaultAlert = Template.bind({});
DefaultAlert.args = {
	size: 'md',
	name: IconNames[1],
};
