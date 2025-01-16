import { cn } from '../../../js/utils/style';
import 'container-query-polyfill';
import Button from '../../molecules/button/button';

export interface PropsType {
	title?: string;
	description?: string;
	href?: string;
	link?: string;
	type?: 'base' | 'outline' | 'highlight' | 'image';
}

export default function Card({ title, description, href, link, type }: PropsType) {
	const className = `card--${type}`;

	return (
		<article className={cn('card', className)}>
			{type === 'image' && <img src="https://picsum.photos/700" alt="dont forget your alt when needed" />}
			<h2 className="card__title card--icon-title">{title}</h2>
			<p>{description}</p>
			<div className="card__actions">
				<Button href={href || ''} as="link" className="card__action">
					{link}
				</Button>
			</div>
		</article>
	);
}
