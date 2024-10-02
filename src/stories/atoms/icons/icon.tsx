import { type SVGProps } from 'react';
import { type ArrayValue } from '~/types';
import { cn } from '../../../js/utils/style';

export const IconNames: ArrayValue<string> = [
	'add',
	'arrow-right',
	'arrow-up',
	'arrow-down',
	'calendar',
	'chevron-left',
	'chevron-right',
	'chevron-up',
	'chevron-down',
	'company',
	'clear',
	'close',
	'delete',
	'download',
	'error',
	'filter',
	'info',
	'menu',
	'facebook',
	'twitter',
	'instagram',
	'user',
	'external',
];

export type IconName = (typeof IconNames)[];
export type IconSize = 'sm' | 'md' | 'lg' | 'xl';

export type IconProps = Omit<SVGProps<SVGSVGElement>, 'children'> & { name: IconName; size: IconSize };

export default function Icon({ name, size = 'md', className, ...props }: IconProps) {
	const iconClassName = cn('icon', className, {
		'icon--sm': size === 'sm',
		'icon--lg': size === 'lg',
		'icon--xl': size === 'xl',
	});

	return (
		<svg className={iconClassName} {...props}>
			<use xlinkHref={`#${name}`} />
		</svg>
	);
}
