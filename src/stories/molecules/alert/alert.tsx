import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes, type PropsWithChildren, ReactNode } from "react";
import Icon from "../../atoms/icons/icon";
import Button from "../button/button";
import { cn } from "../../../js/utils/style";
import styles from "./alert.module.css";

export interface AlertProps {
	dismissable?: boolean;
}

const alertVariants = cva(styles.alert, {
	variants: {
		variant: {
			success: styles["alert--success"],
			danger: styles["alert--error"],
			warning: styles["alert--warning"],
			info: styles["alert--info"],
		},
		defaultVariants: {
			variant: "info",
		},
	},
});

type AlertVariants = VariantProps<typeof alertVariants>;

export type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement> & AlertVariants & AlertProps>;

export default function Alert({ variant, children, dismissable, className }: Props) {
	return (
		<div className={alertVariants({ variant, className })}>
			{children}
			{dismissable && (
				<Button className={styles["alert__close"]} variant="clean" aria-label="Close">
					<Icon variant="close" size="sm" />
				</Button>
			)}
		</div>
	);
}
