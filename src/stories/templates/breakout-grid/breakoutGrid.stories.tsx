import type { Meta, StoryObj } from '@storybook/react';
import { type HTMLAttributes } from 'react';
import Component from './breakoutGrid';
import Card from '../../organisms/card/card';

type Story = StoryObj<typeof Component>;

export type PropsType = HTMLAttributes<HTMLElement>;

export const Grid: Story = {
	render: (props: PropsType) => (
		<div className="page-layout">
			<div className="full" style={{ backgroundColor: '#ddd', padding: '10px' }}>
				<strong>FULL TRACK</strong>
				<span> (1fr)</span>
			</div>
			<div className="content" style={{ backgroundColor: '#ddd', padding: '10px' }}>
				<strong>CONTENT TRACK</strong>
				<span> (uses container max width)</span>
			</div>
		</div>
	),
};

const meta = {
	title: 'Templates/BreakoutGrid',
	component: Component,
	parameters: {},
} satisfies Meta<typeof Component>;

export default meta;
