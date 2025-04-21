import type { BoSize } from '@/shared';

export type BoCalendarProps = {
	/**
	 * The currently selected date
	 */
	modelValue?: Date;
	/**
	 * The size of the calendar
	 * @default 'default'
	 */
	size?: BoSize;
	/**
	 * Whether the calendar is disabled
	 * @default false
	 */
	disabled?: boolean;
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
	 * Whether to show the header with month navigation
	 * @default true
	 */
	showHeader?: boolean;
	/**
	 * Whether to show the week days
	 * @default true
	 */
	showWeekDays?: boolean;
	/**
	 * Whether to show dates from previous and next months
	 * @default true
	 */
	showOtherMonths?: boolean;
	/**
	 * Unique ID for the calendar, used for accessibility and testing
	 */
	id?: string;
};

export enum BoCalendarVariant {
	default = 'default',
	compact = 'compact',
}
