import type { Meta, StoryObj } from "@storybook/react";
import { type HTMLAttributes } from "react";
import Component from "./container";
import Card from "../../organisms/card/card";

type Story = StoryObj<typeof Component>;

export type PropsType = HTMLAttributes<HTMLElement>;

export const Container: Story = {
	render: (props: PropsType) => (
		<Component />
	)
}

const meta = {
	title: "Atoms/Container",
	component: Component,
	parameters: {},
  } satisfies Meta<typeof Component>;
  
export default meta;
