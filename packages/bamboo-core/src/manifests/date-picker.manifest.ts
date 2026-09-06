import type {
	DatePickerManifest,
	DateRangePickerManifest,
	RangeCalendarManifest,
} from '../definitions/bo-date-picker.js';

export const DATE_PICKER_MANIFEST = {
	meta: { name: 'Date Picker', version: '1.0.0' },
	styles: { base: 'bo-date-picker', trigger: 'bo-date-picker__trigger' },
	defaults: {},
} as const satisfies DatePickerManifest;

export const RANGE_CALENDAR_MANIFEST = {
	meta: { name: 'Range Calendar', version: '1.0.0' },
	styles: { base: 'bo-range-calendar' },
	defaults: {},
} as const satisfies RangeCalendarManifest;

export const DATE_RANGE_PICKER_MANIFEST = {
	meta: { name: 'Date Range Picker', version: '1.0.0' },
	styles: {
		base: 'bo-date-range-picker',
		trigger: 'bo-date-range-picker__trigger',
	},
	defaults: {},
} as const satisfies DateRangePickerManifest;
