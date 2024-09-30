import React, { memo } from 'react';
import { cn } from '../../../js/utils/style';

export type AlertType = 'success' | 'danger' | 'warning' | 'info';

export interface AlertProps {
	type?: AlertType;
	children: React.ReactNode;
	className?: string;
}

const Alert: React.FC<AlertProps> = memo(({ type = 'info', children, className }) => {
	const alertClassName = cn('alert', className, {
		'alert--success': type === 'success',
		'alert--error': type === 'danger',
		'alert--warning': type === 'warning',
		'alert--info': type === 'info',
	});

	return <div className={alertClassName}>{children}</div>;
});

export default Alert;
