import { cn } from "../../../js/utils/style";
import Button from "../../atoms/button/button";

export interface PropsType {
	title?: string;
	image?: string;
	description?: string;
	href?: string;
	link?: string;
}

export default function CardProduct({ title, image, description, href, link }: PropsType) {
	const className = ``;

	return (
		<article className={cn("card card--product", className)}>
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
