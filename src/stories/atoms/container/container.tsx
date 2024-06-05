import { type HTMLAttributes } from "react";
import Card from "../../organisms/card/card";

export type PropsType = HTMLAttributes<HTMLElement>;

export default function Container(props: PropsType) {
	return (
		<div className="container">
			<section className="section">
				<Card 
					title="Content"
				/>	
			</section>
			
			<section className="section full">
				<Card
					title="Full width"
				/>
			</section>

			<section className="section">
				<Card 
					title="Content"
				/>
			</section>

			<section className="section">
				<Card 
					title="Content"
				/>
			</section>
			
			<section className="section breakout">
				<Card
					title="Breakout"
				/>
			</section>

			<section className="section">
				<Card
					title="Content"
				/>
			</section>
		</div>
  	);
}
