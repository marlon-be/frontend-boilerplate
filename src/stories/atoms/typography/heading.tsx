import { FC, ReactNode } from 'react';

export type HeadingProps = {
	level: 1 | 2 | 3 | 4;
	className?: string;
	children: ReactNode;
};

const Heading: FC<HeadingProps> = ({ level, className, children }) => {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements;
	return <Tag className={className}>{children}</Tag>;
};

export default Heading;
