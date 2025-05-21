import type { BoSize } from '@/shared/bo-size.js';

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

export enum BoProgressBarShape {
	rounded = 'rounded',
	square = 'square',
}

export interface BoProgressBarProps {
	/** Id for the progress bar */
	id?: string;
	/** Current value of the progress bar */
	value?: number;
	/** Maximum value of the progress bar */
	max?: number;
	/** Show label or precentage in the progress bar */
	showLabel?: boolean;
	/** The shape of the progress bar */
	shape?: BoProgressBarShape;
	/** Size of the progress bar */
	size?: BoSize;
	/** Color variant of the progress bar */
	variant?: BoProgressBarVariant;
	/** Label to display instead of percentage */
	label?: string;
	/** Custom color for the progress bar in hex format */
	color?: string;
	/** Custom tailwind class for the progress bar */
	tailwindClass?: string;
}
