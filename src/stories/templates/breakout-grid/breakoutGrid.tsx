import { type HTMLAttributes } from 'react';
import Card from '../../organisms/card/card';

export type PropsType = HTMLAttributes<HTMLElement>;

export default function BreakoutGrid(props: PropsType) {
	return (
		<>
			<section className="section" {...props}>
				<h2 className="section__title">Two column grid</h2>

				<div className="grid grid--2">
					<Card />
					<Card />
					<Card />
				</div>
			</section>

			<section className="section" {...props}>
				<h2 className="section__title">Three column grid</h2>

				<div className="grid grid--3">
					<Card />
					<Card />
					<Card />
				</div>
			</section>

			<section className="section" {...props}>
				<h2 className="section__title">Fluid grid</h2>

				<div className="grid grid--fluid">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</section>
		</>
	);
}
