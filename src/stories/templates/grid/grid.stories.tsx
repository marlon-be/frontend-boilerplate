import type { Meta, StoryObj } from '@storybook/react';
import { type HTMLAttributes } from 'react';
import Component from './grid';
import Card from '../../organisms/card/card';

type Story = StoryObj<typeof Component>;

export type PropsType = HTMLAttributes<HTMLElement>;

export const BaseGrid: Story = {
	render: (props: PropsType) => (
		<div className="grid">
			<div>
				<Card
					title="Enim amet velit laboris"
					description="Aliquip occaecat do Lorem labore veniam proident veniam. Amet nostrud incididunt in cupidatat consectetur veniam ullamco ullamco mollit officia excepteur id quis."
					href=""
					link="Learn more about us"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Laboris eiusmod labore"
					description="Ad aliqua dolor irure cupidatat. Ullamco voluptate consequat consectetur ut id tempor ut officia magna."
					href=""
					link="Download our whitepaper"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Veniam consectetur eiusmod ad id"
					description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
					href=""
					link="Visit our showroom"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Veniam consectetur eiusmod ad id"
					description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
					href=""
					link="Visit our showroom"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Veniam consectetur eiusmod ad id"
					description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
					href=""
					link="Visit our showroom"
					type="image"
				/>
			</div>
		</div>
	),
};

export const GridFluid: Story = {
	render: (props: PropsType) => (
		<div className="grid-fluid">
			<div>
				<Card
					title="Enim amet velit laboris"
					description="Aliquip occaecat do Lorem labore veniam proident veniam. Amet nostrud incididunt in cupidatat consectetur veniam ullamco ullamco mollit officia excepteur id quis."
					href=""
					link="Learn more about us"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Laboris eiusmod labore"
					description="Ad aliqua dolor irure cupidatat. Ullamco voluptate consequat consectetur ut id tempor ut officia magna."
					href=""
					link="Download our whitepaper"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Veniam consectetur eiusmod ad id"
					description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
					href=""
					link="Visit our showroom"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Veniam consectetur eiusmod ad id"
					description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
					href=""
					link="Visit our showroom"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Veniam consectetur eiusmod ad id"
					description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
					href=""
					link="Visit our showroom"
					type="image"
				/>
			</div>
		</div>
	),
};

export const FlexFluid: Story = {
	render: (props: PropsType) => (
		<div className="flex-fluid">
			<div>
				<Card
					title="Enim amet velit laboris"
					description="Aliquip occaecat do Lorem labore veniam proident veniam. Amet nostrud incididunt in cupidatat consectetur veniam ullamco ullamco mollit officia excepteur id quis."
					href=""
					link="Learn more about us"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Laboris eiusmod labore"
					description="Ad aliqua dolor irure cupidatat. Ullamco voluptate consequat consectetur ut id tempor ut officia magna."
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Veniam consectetur eiusmod ad id"
					description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
					href=""
					link="Visit our showroom"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Veniam consectetur eiusmod ad id"
					description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
					href=""
					link="Visit our showroom"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Veniam consectetur eiusmod ad id"
					description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
					href=""
					link="Visit our showroom"
					type="image"
				/>
			</div>
		</div>
	),
};

export const GridRepeat: Story = {
	render: (props: PropsType) => (
		<div className="grid-repeat">
			<div>
				<Card
					title="Enim amet velit laboris"
					description="Aliquip occaecat do Lorem labore veniam proident veniam. Amet nostrud incididunt in cupidatat consectetur veniam ullamco ullamco mollit officia excepteur id quis."
					href=""
					link="Learn more about us"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Laboris eiusmod labore"
					description="Ad aliqua dolor irure cupidatat. Ullamco voluptate consequat consectetur ut id tempor ut officia magna."
					href=""
					link="Download our whitepaper"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Veniam consectetur eiusmod ad id"
					description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
					href=""
					link="Visit our showroom"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Veniam consectetur eiusmod ad id"
					description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
					href=""
					link="Visit our showroom"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Veniam consectetur eiusmod ad id"
					description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
					href=""
					link="Visit our showroom"
					type="image"
				/>
			</div>
		</div>
	),
};

export const FlexRepeat: Story = {
	render: (props: PropsType) => (
		<div className="flex-repeat">
			<div>
				<Card
					title="Enim amet velit laboris"
					description="Aliquip occaecat do Lorem labore veniam proident veniam. Amet nostrud incididunt in cupidatat consectetur veniam ullamco ullamco mollit officia excepteur id quis."
					href=""
					link="Learn more about us"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Laboris eiusmod labore"
					description="Ad aliqua dolor irure cupidatat. Ullamco voluptate consequat consectetur ut id tempor ut officia magna."
					href=""
					link="Download our whitepaper"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Veniam consectetur eiusmod ad id"
					description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
					href=""
					link="Visit our showroom"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Veniam consectetur eiusmod ad id"
					description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
					href=""
					link="Visit our showroom"
					type="image"
				/>
			</div>
			<div>
				<Card
					title="Veniam consectetur eiusmod ad id"
					description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
					href=""
					link="Visit our showroom"
					type="image"
				/>
			</div>
		</div>
	),
};

export const SubGridRows: Story = {
	render: (props: PropsType) => (
		<div className="grid-repeat subgrid-rows">
			<Card
				title="Enim amet velit laboris"
				description="Aliquip occaecat do Lorem labore veniam proident veniam. Amet nostrud incididunt in cupidatat consectetur veniam ullamco ullamco mollit officia excepteur id quis."
				href=""
				link="Learn more about us"
				type="image"
			/>
			<Card
				title="Laboris eiusmod labore"
				description="Ad aliqua dolor irure cupidatat. Ullamco voluptate consequat consectetur ut id tempor ut officia magna."
				href=""
				link="Download our whitepaper"
				type="image"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="image"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="image"
			/>
			<Card
				title="Veniam consectetur eiusmod ad id"
				description="In cupidatat reprehenderit proident quis eiusmod cillum sint dolore ut duis. Voluptate qui Lorem voluptate proident."
				href=""
				link="Visit our showroom"
				type="image"
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
