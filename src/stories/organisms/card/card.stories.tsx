import { type StoryObj, type Meta } from "@storybook/react";
import Component from "./card";

type Story = StoryObj<typeof Component>;

export const Card: Story = {};

const meta = {
	title: "Organisms/Card/Card (default)",
	component: Component,
	parameters: {},
  } satisfies Meta<typeof Component>;
  
  export default meta;
