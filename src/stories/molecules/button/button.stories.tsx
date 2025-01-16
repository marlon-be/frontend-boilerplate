import { type StoryObj, type Meta } from "@storybook/react";
import Button, { type Props } from "./button";

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	render: () => <Button type="button">I&apos;m a button</Button>,
	name: "Button",
};

export const Link: Story = {
	render: (args: Props) => (
		<Button {...args}>
			<a href="/">I'm a link</a>
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
