import { type StoryObj, type Meta } from "@storybook/react";
import Button, { type Props } from "./button";

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	render: () => <Button type="button">Default button</Button>,
	name: "Button",
};

export const Primary: Story = {
	render: () => (
		<Button variant="primary" type="button">
			Primary button
		</Button>
	),
	name: "Primary",
};

export const Link: Story = {
	render: (args: Props) => (
		<Button {...args}>
			<a href="/">Plain link</a>
		</Button>
	),
	args: {
		asChild: true,
		variant: "link",
	},
};


export default {
  component: Button,
  title: "Molecules/Button",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;
