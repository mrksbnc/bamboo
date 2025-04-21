import type { BoSize } from '@/shared';

export type BoDatepickerProps = {
	/**
	 * The selected date
	 */
	modelValue?: Date;
	/**
	 * The size of the datepicker
	 * @default 'default'
	 */
	size?: BoSize;
	/**
	 * Whether the datepicker is disabled
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * The placeholder text
	 * @default 'Select date'
	 */
	placeholder?: string;
	/**
	 * The format to display the date
	 * @default 'MM/DD/YYYY'
	 */
	format?: string;
	/**
	 * The minimum selectable date
	 */
	minDate?: Date;
	/**
	 * The maximum selectable date
	 */
	maxDate?: Date;
	/**
	 * Whether to show the time picker
	 * @default false
	 */
	showTime?: boolean;
	/**
	 * Unique ID for the datepicker, used for accessibility and testing
	 */
	id?: string;
};

export enum BoDatepickerVariant {
	default = 'default',
	outlined = 'outlined',
}
