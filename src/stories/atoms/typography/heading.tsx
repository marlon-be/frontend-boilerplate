import { FC, ReactNode } from 'react';

export type HeadingProps = {
	tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	className?: string;
	children: ReactNode;
};

const Heading: FC<HeadingProps> = ({ tag, className, children }) => {
	const Tag = `${tag}` as keyof HTMLElementTagNameMap;
	return <Tag className={className}>{children}</Tag>;
};

export default Heading;
