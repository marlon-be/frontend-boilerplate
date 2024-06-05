import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, memo, type PropsWithChildren } from "react";
import { cn } from "../../../js/utils/style";
import { type WithRequired } from "../../../js/types";

export type ButtonProps = WithRequired<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & { as?: "button" };
export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; as: "link" };

export type Props = PropsWithChildren<ButtonProps | AnchorProps>;


function Button({ children, className, ...props }: Props) {
	if (props.as === "link") {
		return (
			<a className={cn("button button--link", className)} {...props}>
				{children}
			</a>
		);
	}
	return (
		<button className={cn("button", className)} {...props}>
			{children}
		</button>
	);
}

export default memo(Button);
