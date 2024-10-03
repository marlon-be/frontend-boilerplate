// NativeDialog.tsx
import React, { useRef, useEffect, ReactNode, useCallback } from 'react';
import { cn } from '../../../js/utils/style';
import Icon from '../../atoms/icons/icon';
export type DialogType = 'default' | 'sidepanel-start' | 'sidepanel-end';

export type DialogProps = {
	type?: DialogType;
	dialogTitle?: string;
	isOpen: boolean;
	onClose: () => void;
	className?: string;
	children: ReactNode;
};

const Dialog: React.FC<DialogProps> = ({
	type,
	isOpen,
	onClose,
	dialogTitle = 'This is a dialog',
	children,
	className,
}) => {
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
				<button className={cn('close button--clean', !dialogTitle && 'end')} onClick={onClose}>
					<Icon name="close" />
					<span className={'sr-only'}>Close dialog</span>
				</button>
			</header>
			{children}
		</dialog>
	);
};

export default Dialog;
