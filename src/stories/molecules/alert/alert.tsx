import { FC, memo, ReactNode } from 'react';
import { cn } from '../../../js/utils/style';
import Icon from '../../atoms/icons/icon';

export type AlertType = 'base' | 'success' | 'danger' | 'warning' | 'info';

export interface AlertProps {
	type?: AlertType;
	children: ReactNode;
	hasClose?: boolean;
	className?: string;
}

const Alert: FC<AlertProps> = memo(({ type = 'base', children, hasClose, className }) => {
	const alertClassName = cn('alert', className, {
		'alert--success': type === 'success',
		'alert--error': type === 'danger',
		'alert--warning': type === 'warning',
		'alert--info': type === 'info',
	});

	return (
		<div className={alertClassName}>
			{children}
			{hasClose && (
				<button className="close button--clean">
					<Icon name="close" />
					<span className={'sr-only'}>Close</span>
				</button>
			)}
		</div>
	);
});

export default Alert;
