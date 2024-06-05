import type { Meta, StoryObj } from "@storybook/react";
import { type HTMLAttributes } from "react";
import Component from "./grid";
import Card from "../../organisms/card/card";
import CardProduct from "../../organisms/card/card-product";

type Story = StoryObj<typeof Component>;

export type PropsType = HTMLAttributes<HTMLElement>;

export const TwoColumn: Story = {
	render: (props: PropsType) => (
		<div className="container">
			<section className="section" {...props}>
				<h2 className="section__title">Two column grid</h2>

				<div className="grid grid--2">
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
				</div>
			</section>
		</div>
	)
};

export const ThreeColumn: Story = {
	render: (props: PropsType) => (
		<div className="container">
			<section className="section" {...props}>
				<h2 className="section__title">Three column grid</h2>

				<div className="grid grid--3">
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
				</div>
			</section>
		</div>
	)
};

export const Fluid: Story = {
	render: (props: PropsType) => (
		<div className="container">
			<section className="section" {...props}>
				<h2 className="section__title">Fluid grid</h2>

				<div className="grid grid--fluid">
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
						title="Eu reprehenderit cupidatat"
						description="Ullamco esse nisi elit proident culpa elit in officia amet voluptate ipsum ex ipsum ullamco do."
						href=""
						link="Book an appointment"
						type="highlight"
					/>
				</div>
			</section>
		</div>
	)
};

export const Content: Story = {
	render: (props: PropsType) => (
		<div className="container">
			<section className="section" {...props}>
				<h2 className="section__title">Custom grid example: content page</h2>

				<div className="grid grid--content">
					<div className="">
						<Card
							title="Subnavigation"
						/>
					</div>

					<div className="">
						<Card 
							title="Content"
						/>
					</div>
				</div>
			</section>
		</div>
	)
}

export const Browser: Story = {
	render: (props: PropsType) => (
		<div className="container">
			<section className="section" {...props}>
				<h2 className="section__title">Custom grid example: product browser</h2>

				<div className="grid grid--browser">
					<Card
						title="Product filters"
					/>

					<div className="grid grid--3">
						<CardProduct
							title="Product A"
						/>

						<CardProduct
							title="Product B"
						/>

						<CardProduct
							title="Product C"
						/>

						<CardProduct
							title="Product D"
						/>

						<CardProduct
							title="Product E"
						/>
					</div>
				</div>
			</section>
		</div>
	)
}

export const Support: Story = {
	render: (props: PropsType) => (
		<div className="container">
			<section className="section" {...props}>
				<h2 className="section__title">Custom grid example: support page</h2>

				<div className="grid grid--support">
					<div className="">
						<Card
							title="Support topics"
						/>
					</div>

					<div className="">
						<Card 
							title="Content"
						/>
					</div>

					<div className="">
						<Card
							title="CTA"
						/>
					</div>
				</div>
			</section>
		</div>
	)
}

const meta = {
  title: "Atoms/Grid",
  component: Component,
  parameters: {},
} satisfies Meta<typeof Component>;

export default meta;
