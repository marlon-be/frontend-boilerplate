import type { Meta, StoryObj } from '@storybook/react';
import { type HTMLAttributes } from 'react';
import Component from './grid';
import Card from '../../organisms/card/card';
import CardProduct from '../../organisms/card/card-product';

type Story = StoryObj<typeof Component>;

export type PropsType = HTMLAttributes<HTMLElement>;

export const BaseGrid: Story = {
	render: (props: PropsType) => (
		<div className="grid">
			<Card
				title="Enim amet velit laboris"
				description="Aliquip occaecat do Lorem labore veniam proident veniam. Amet nostrud incididunt in cupidatat consectetur veniam ullamco ullamco mollit officia excepteur id quis."
				href=""
				link="Learn more about us"
				type="default"
			/>
			<Card
				title="Laboris eiusmod labore"
				description="Ad aliqua dolor irure cupidatat. Ullamco voluptate consequat consectetur ut id tempor ut officia magna."
				href=""
				link="Download our whitepaper"
				type="default"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="outline"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="outline"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="outline"
			/>
		</div>
	),
};

export const FluidGrid: Story = {
	render: (props: PropsType) => (
		<div className="fluid-grid">
			<Card
				title="Enim amet velit laboris"
				description="Aliquip occaecat do Lorem labore veniam proident veniam. Amet nostrud incididunt in cupidatat consectetur veniam ullamco ullamco mollit officia excepteur id quis."
				href=""
				link="Learn more about us"
				type="default"
			/>
			<Card
				title="Laboris eiusmod labore"
				description="Ad aliqua dolor irure cupidatat. Ullamco voluptate consequat consectetur ut id tempor ut officia magna."
				href=""
				link="Download our whitepaper"
				type="default"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="outline"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="outline"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="outline"
			/>
		</div>
	),
};

export const FluidFlex: Story = {
	render: (props: PropsType) => (
		<div className="fluid-flex">
			<Card
				title="Enim amet velit laboris"
				description="Aliquip occaecat do Lorem labore veniam proident veniam. Amet nostrud incididunt in cupidatat consectetur veniam ullamco ullamco mollit officia excepteur id quis."
				href=""
				link="Learn more about us"
				type="default"
			/>
			<Card
				title="Laboris eiusmod labore"
				description="Ad aliqua dolor irure cupidatat. Ullamco voluptate consequat consectetur ut id tempor ut officia magna."
				href=""
				link="Download our whitepaper"
				type="default"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="outline"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="outline"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="outline"
			/>
		</div>
	),
};

export const RepeatingGrid: Story = {
	render: (props: PropsType) => (
		<div className="repeating-grid">
			<Card
				title="Enim amet velit laboris"
				description="Aliquip occaecat do Lorem labore veniam proident veniam. Amet nostrud incididunt in cupidatat consectetur veniam ullamco ullamco mollit officia excepteur id quis."
				href=""
				link="Learn more about us"
				type="default"
			/>
			<Card
				title="Laboris eiusmod labore"
				description="Ad aliqua dolor irure cupidatat. Ullamco voluptate consequat consectetur ut id tempor ut officia magna."
				href=""
				link="Download our whitepaper"
				type="default"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="outline"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="outline"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="outline"
			/>
		</div>
	),
};

export const RepeatingFlex: Story = {
	render: (props: PropsType) => (
		<div className="repeating-flex">
			<Card
				title="Enim amet velit laboris"
				description="Aliquip occaecat do Lorem labore veniam proident veniam. Amet nostrud incididunt in cupidatat consectetur veniam ullamco ullamco mollit officia excepteur id quis."
				href=""
				link="Learn more about us"
				type="default"
			/>
			<Card
				title="Laboris eiusmod labore"
				description="Ad aliqua dolor irure cupidatat. Ullamco voluptate consequat consectetur ut id tempor ut officia magna."
				href=""
				link="Download our whitepaper"
				type="default"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="outline"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="outline"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="outline"
			/>
		</div>
	),
};

export const SubGrid: Story = {
	render: (props: PropsType) => (
		<div className="repeating-grid subgrid-rows">
			<Card
				title="Enim amet velit laboris"
				description="Aliquip occaecat do Lorem labore veniam proident veniam. Amet nostrud incididunt in cupidatat consectetur veniam ullamco ullamco mollit officia excepteur id quis."
				href=""
				link="Learn more about us"
				type="default"
			/>
			<Card
				title="Laboris eiusmod labore"
				description="Ad aliqua dolor irure cupidatat. Ullamco voluptate consequat consectetur ut id tempor ut officia magna."
				href=""
				link="Download our whitepaper"
				type="default"
			/>
			<Card
				title="Veniam consectetur eiusmod ad smod ad id Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="outline"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="outline"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="outline"
			/>
		</div>
	),
};

const meta = {
	title: 'Templates/Grid',
	component: Component,
	parameters: {},
} satisfies Meta<typeof Component>;

export default meta;
