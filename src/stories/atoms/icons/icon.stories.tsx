import { Meta, StoryObj } from '@storybook/react';
import Icon, { Props, ICON_NAMES } from './icon';

type Story = StoryObj<Props>;

export const Default: Story = {
	render: (args) => {
		return <Icon {...args} />;
	},
	args: {
		variant: 'add',
	},
};

export default {
	component: Icon,
	title: 'Atoms/Icon',
	argTypes: {
		variant: {
			control: 'select',
			options: ICON_NAMES,
		},
		size: {
			control: 'radio',
			options: ['sm', 'md', 'lg', 'xl'],
		},
	},
	parameters: {
		layout: 'centered',
	},
	args: {
		variant: 'add',
		size: 'md',
	},
} satisfies Meta;
