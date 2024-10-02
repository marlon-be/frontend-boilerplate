import { Meta, StoryObj } from '@storybook/react';
import Icon, { IconProps, ICON_NAMES } from './icon';

type Story = StoryObj<IconProps>;

export const Default: Story = {
	render: (args) => {
		return <Icon {...args} />;
	},
	args: {
		size: 'medium',
		name: ICON_NAMES[0],
	},
};

export default {
	component: Icon,
	title: 'Atoms/Icon',
	argTypes: {
		size: {
			control: 'select',
		},
		name: {
			control: 'select',
			options: ICON_NAMES,
		},
	},
	parameters: {
		layout: 'centered',
	},
} satisfies Meta;
