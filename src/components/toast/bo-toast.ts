import type { BoSize } from '@/shared';

export type BoToastProps = {
	/**
	 * The message to display in the toast
	 */
	message: string;
	/**
	 * The type of the toast
	 * @default 'info'
	 */
	type?: 'success' | 'error' | 'warning' | 'info';
	/**
	 * The duration in milliseconds before the toast automatically closes
	 * @default 3000
	 */
	duration?: number;
	/**
	 * Whether to show the close button
	 * @default true
	 */
	closable?: boolean;
	/**
	 * The position of the toast
	 * @default 'top-right'
	 */
	position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
	/**
	 * The size of the toast
	 * @default 'default'
	 */
	size?: BoSize;
	/**
	 * Unique ID for the toast, used for accessibility and testing
	 */
	id?: string;
};

export type ToastOptions = Omit<BoToastProps, 'id'>;

export enum BoToastVariant {
	default = 'default',
	minimal = 'minimal',
}
