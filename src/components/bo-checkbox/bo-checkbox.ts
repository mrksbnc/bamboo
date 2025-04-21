import { BoSize } from '@/shared';

export enum BoCheckboxVariant {
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	danger = 'danger',
	warning = 'warning',
	dark = 'dark',
}

export interface BoCheckboxProps {
	/**
	 * The id of the element.
	 */
	id?: string;
	/**
	 * The name of the element.
	 */
	name?: string;
	/**
	 * The value of the element.
	 */
	value?: string;
	/**
	 * The model value of the element.
	 */
	modelValue?: boolean;
	/**
	 * The disabled state of the element.
	 */
	disabled?: boolean;
	/**
	 * The label of the element.
	 */
	label?: string;
	/**
	 * The description of the element.
	 */
	description?: string;
	/**
	 * The size of the element.
	 */
	size?: BoSize;
	/**
	 * The variant of the element.
	 */
	variant?: BoCheckboxVariant;
	/**
	 * The custom color of the element.
	 */
	customColor?: string;
}
