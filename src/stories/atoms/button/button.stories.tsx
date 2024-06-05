import { type StoryObj, type Meta } from "@storybook/react";
import Button from "./button";

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => <Button type="button">I&apos;m a button</Button>,
  name: "Button",
};

export const Link: Story = {
  render: () => (
    <Button as="link" href="#">
      I&apos;m a link
    </Button>
  ),
};

export default {
  component: Button,
  title: "Atoms/Button",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;
