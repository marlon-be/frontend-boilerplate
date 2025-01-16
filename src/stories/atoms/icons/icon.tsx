import { cva, type VariantProps } from "class-variance-authority";
import { memo, type ComponentPropsWithRef } from "react";
import { type ArrayValue } from "../../../js/types";
import styles from "./icon.module.css";

export const ICON_NAMES = [
	"add",
	"arrow-right",
	"arrow-up",
	"arrow-down",
	"calendar",
	"chevron-left",
	"chevron-right",
	"chevron-up",
	"chevron-down",
	"company",
	"clear",
	"close",
	"delete",
	"download",
	"error",
	"filter",
	"info",
	"menu",
	"facebook",
	"twitter",
	"instagram",
	"user",
	"external",
] as const;

const iconVariants = cva(styles.icon, {
	variants: {
		size: {
			sm: styles["icon--sm"],
			md: styles["icon--md"],
			lg: styles["icon--lg"],
			xl: styles["icon--xl"],
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type IconName = ArrayValue<typeof ICON_NAMES>;
export type IconProps = ComponentPropsWithRef<"svg">;
export type IconVariants = VariantProps<typeof iconVariants>;

export type Props = IconProps & IconVariants & { variant: IconName };

function Icon({ variant, size, className, ...props }: Props) {
	return (
		<svg className={iconVariants({ size, className })} {...props}>
			<use xlinkHref={`#${variant}`} />
		</svg>
	);
}

export default memo(Icon);
