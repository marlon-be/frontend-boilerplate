import React, { memo } from 'react';
import { cn } from '../../../js/utils/style';

export type AlertType = 'base' | 'success' | 'danger' | 'warning' | 'info';

export interface AlertProps {
	type?: AlertType;
	children: React.ReactNode;
	hasClose?: boolean;
	className?: string;
}

const Alert: React.FC<AlertProps> = memo(({ type = 'base', children, hasClose, className }) => {
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="icon"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
						/>
					</svg>
					<span className={'sr-only'}>Close</span>
				</button>
			)}
		</div>
	);
});

export default Alert;
