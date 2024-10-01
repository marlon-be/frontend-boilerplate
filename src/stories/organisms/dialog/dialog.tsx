// NativeDialog.tsx
import React, { useRef, useEffect, ReactNode, useCallback } from 'react';
import { cn } from '../../../js/utils/style';
export type DialogType = 'default' | 'sidepanel-start' | 'sidepanel-end';

export type DialogProps = {
	type?: DialogType;
	dialogTitle?: string;
	isOpen: boolean;
	onClose: () => void;
	className?: string;
	children: ReactNode;
};

const Dialog: React.FC<DialogProps> = ({ type, isOpen, onClose, dialogTitle, children, className }) => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		const dialogElement = dialogRef.current;
		if (!dialogElement) return;

		if (isOpen) {
			dialogElement.showModal();
		} else {
			dialogElement.close();
		}

		const handleBackdropClick = (event: MouseEvent) => {
			const rect = dialogElement?.getBoundingClientRect();
			if (rect) {
				const isInDialog =
					rect.top <= event.clientY &&
					event.clientY <= rect.top + rect.height &&
					rect.left <= event.clientX &&
					event.clientX <= rect.left + rect.width;
				if (!isInDialog) {
					dialogElement.close();
					onClose(); // Call the onClose callback when the backdrop is clicked
				}
			}
		};

		dialogElement.addEventListener('click', handleBackdropClick);
		return () => {
			dialogElement.removeEventListener('click', handleBackdropClick);
		};
	}, [isOpen, onClose]);

	const dialogClassName = cn('dialog', className, {
		'dialog--sidepanel': type === 'sidepanel-start',
		'dialog--sidepanel end': type === 'sidepanel-end',
	});

	return (
		<dialog ref={dialogRef} className={dialogClassName}>
			<header className="dialog__header">
				{dialogTitle && <h2 className="h4">{dialogTitle}</h2>}
				<button className="close button--clean" onClick={onClose}>
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
					<span className={'sr-only'}>Close dialog</span>
				</button>
			</header>
			{children}
		</dialog>
	);
};

export default Dialog;
