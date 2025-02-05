import { type ButtonHTMLAttributes, forwardRef, memo, type PropsWithChildren, useMemo } from "react";
import { Slot } from "@radix-ui/react-slot";
import { type WithRequired } from "../../../js/types";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./button.module.css";

const buttonVariants = cva(styles.button, {
	variants: {
		variant: {
			default: styles["button--default"],
			primary: styles["button--primary"],
			secondary: styles["button--secondary"],
			link: styles["button--link"],
			clean: styles["button--clean"],
		},
		width: {
			default: "",
			block: styles["button--block"],
		},
		size: {
			small: styles["button--small"],
			medium: styles["button--medium"],
			large: styles["button--large"],
		},
	},
	defaultVariants: {
		variant: "default",
		width: "default",
		size: "medium",
	},
});

export type ButtonProps = WithRequired<ButtonHTMLAttributes<HTMLButtonElement>, "type">;
export type ButtonVariants = VariantProps<typeof buttonVariants>;

type AsButton = ButtonProps & { asChild?: false };
type AsChild = Omit<ButtonProps, "type"> & { asChild: true };

export type Props = PropsWithChildren<(AsButton | AsChild) & ButtonVariants>;

const Button = forwardRef<Props["asChild"] extends true ? HTMLElement : HTMLButtonElement, Props>(
	({ children, className, variant, size, width, asChild = false, ...props }, ref) => {
		const classNames = useMemo(
			() => buttonVariants({ size, variant, width, className }),
			[className, size, variant, width],
		);

		const Comp = asChild ? Slot : "button";

		return (
			<Comp ref={ref} className={classNames} {...props}>
				{children}
			</Comp>
		);
	},
);

Button.displayName = "Button";

export default memo(Button);
