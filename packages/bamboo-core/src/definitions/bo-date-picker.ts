import type { ComponentManifest } from '../manifests/types.js';

export interface BoDatePickerProps {
	id?: string;
	dataTestId?: string;
	placeholder?: string;
	disabled?: boolean;
	locale?: string;
}

export interface BoDatePickerStyleManifest {
	readonly base: 'bo-date-picker';
	readonly trigger: 'bo-date-picker__trigger';
}

export type DatePickerManifest = ComponentManifest<BoDatePickerStyleManifest, {}, 'Date Picker'>;

export interface BoRangeCalendarProps {
	id?: string;
	dataTestId?: string;
	locale?: string;
	minDate?: Date;
	maxDate?: Date;
}

export interface BoRangeCalendarStyleManifest {
	readonly base: 'bo-range-calendar';
}

export type RangeCalendarManifest = ComponentManifest<
	BoRangeCalendarStyleManifest,
	{},
	'Range Calendar'
>;

export interface BoDateRangePickerProps {
	id?: string;
	dataTestId?: string;
	placeholder?: string;
	disabled?: boolean;
	locale?: string;
}

export interface BoDateRangePickerStyleManifest {
	readonly base: 'bo-date-range-picker';
	readonly trigger: 'bo-date-range-picker__trigger';
}

export type DateRangePickerManifest = ComponentManifest<
	BoDateRangePickerStyleManifest,
	{},
	'Date Range Picker'
>;
