import { BoSize } from '@/shared';

export enum BoRadioVariant {
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	danger = 'danger',
	warning = 'warning',
	dark = 'dark',
}

export interface BoRadioProps {
	/**
	 * The id of the element.
	 */
	id?: string;
	/**
	 * The name of the element.
	 */
	name: string;
	/**
	 * The value of the element.
	 */
	value: string;
	/**
	 * The model value of the element.
	 */
	modelValue?: string;
	/**
	 * The disabled state of the element.
	 */
	disabled?: boolean;
	/**
	 * The label of the element.
	 */
	label?: string;
	/**
	 * The size of the element.
	 */
	size?: BoSize;
	/**
	 * The variant of the element.
	 */
	variant?: BoRadioVariant;
	/**
	 * The custom color of the element.
	 */
	customColor?: string;
}
