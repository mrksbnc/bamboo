import type { BoSize } from '@/shared/bo-size.js';

export enum BoToastVariant {
	default = 'default',
	minimal = 'minimal',
}

export enum BoToastType {
	success = 'success',
	error = 'error',
	warning = 'warning',
	info = 'info',
}

export enum BoToastPosition {
	top_left = 'top-left',
	top_right = 'top-right',
	bottom_left = 'bottom-left',
	bottom_right = 'bottom-right',
}

export type ToastOptions = Omit<BoToastProps, 'id'>;

export interface BoToastProps {
	/** The id of the toast */
	id?: string;
	/** The message of the toast */
	message: string;
	/** The type of the toast */
	type?: BoToastType;
	/** The duration of the toast in milliseconds */
	duration?: number;
	/** Whether the toast is closable */
	closable?: boolean;
	/** The position of the toast */
	position?: BoToastPosition;
	/** The size of the toast */
	size?: BoSize;
	/** The variant of the toast */
	variant?: BoToastVariant;
}
