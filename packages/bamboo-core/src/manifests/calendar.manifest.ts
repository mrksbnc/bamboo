import type { CalendarManifest } from '../definitions/bo-calendar.js';

export const CALENDAR_MANIFEST = {
	meta: { name: 'Calendar', version: '1.0.0' },
	styles: {
		base: 'bo-calendar',
		header: 'bo-calendar__header',
		title: 'bo-calendar__title',
		grid: 'bo-calendar__grid',
		weekday: 'bo-calendar__weekday',
		day: 'bo-calendar__day',
		daySelected: 'bo-calendar__day--selected',
		dayToday: 'bo-calendar__day--today',
		dayOutside: 'bo-calendar__day--outside',
		dayDisabled: 'bo-calendar__day--disabled',
	},
	defaults: {},
} as const satisfies CalendarManifest;
