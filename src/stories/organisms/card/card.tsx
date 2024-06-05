import { cn } from "../../../js/utils/style";
import Button from "../../atoms/button/button";

export interface PropsType {
	title?: string;
	description?: string;
	href?: string;
	link?: string;
	type?: string;
}

export default function Card({ title, description, href, link, type }: PropsType) {
	const className = `card--${type}`;

	return (
		<article className={cn("card", className)}>
			<h2 className="card__title card--icon-title">{title}</h2>
			<p>
				{description}
			</p>

			<div className="card__actions">
				<Button
					href={href || ""}
					as="link" 
					className="card__action"
				>
					{link}
				</Button>
				
			</div>
		</article>
	);
}
