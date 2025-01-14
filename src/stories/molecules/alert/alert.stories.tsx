import { Meta, StoryObj } from '@storybook/react';
import Alert, { Props } from "./alert";

type Story = StoryObj<Props>;

export const Default: Story = {
	render: (args) => {
		return <Alert {...args} />;
	},
	args: {
		variant: "info",
		children: "This is an info alert (default).",
	},
};

export const Dismissable: Story = {
	render: (args) => {
		return <Alert {...args} />;
	},
	args: {
		variant: "info",
		dismissable: true,
		children: "This is an dismissible info alert.",
	},
};

export const Success: Story = {
	render: (args) => {
		return <Alert {...args} />;
	},
	args: {
		variant: "success",
		children: "This is a success alert.",
	},
};

export const Warning: Story = {
	render: (args) => {
		return <Alert {...args} />;
	},
	args: {
		variant: "warning",
		children: "This is an warning alert.",
	},
};

export const Danger: Story = {
	render: (args) => {
		return <Alert {...args} />;
	},
	args: {
		variant: "danger",
		children: "This is a danger alert.",
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
