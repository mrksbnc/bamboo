import type { BoSize } from '@/shared';

export enum BoProgressBarVariant {
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	danger = 'danger',
	warning = 'warning',
	info = 'info',
	light = 'light',
	dark = 'dark',
}

export interface BoProgressBarProps {
	/**
	 * Current value of the progress bar
	 */
	value: number;
	/**
	 * Maximum value of the progress bar
	 */
	max?: number;
	/**
	 * Show label with percentage
	 */
	showLabel?: boolean;
	/**
	 * Whether the progress bar is striped
	 */
	striped?: boolean;
	/**
	 * Whether the progress bar is animated
	 */
	animated?: boolean;
	/**
	 * Size of the progress bar
	 */
	size?: BoSize;
	/**
	 * Color variant of the progress bar
	 */
	variant?: BoProgressBarVariant;
	/**
	 * Label to display instead of percentage
	 */
	label?: string;
	/**
	 * Whether to show indeterminate state
	 */
	indeterminate?: boolean;
}
