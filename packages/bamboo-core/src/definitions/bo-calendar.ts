import type { ComponentManifest } from '../manifests/types.js';

export interface BoCalendarProps {
	id?: string;
	dataTestId?: string;
	minDate?: Date;
	maxDate?: Date;
	disabledDates?: Date[];
	disabled?: boolean;
	locale?: string;
}

export interface BoCalendarStyleManifest {
	readonly base: 'bo-calendar';
	readonly header: 'bo-calendar__header';
	readonly title: 'bo-calendar__title';
	readonly grid: 'bo-calendar__grid';
	readonly weekday: 'bo-calendar__weekday';
	readonly day: 'bo-calendar__day';
	readonly daySelected: 'bo-calendar__day--selected';
	readonly dayToday: 'bo-calendar__day--today';
	readonly dayOutside: 'bo-calendar__day--outside';
	readonly dayDisabled: 'bo-calendar__day--disabled';
}

export type CalendarManifest = ComponentManifest<BoCalendarStyleManifest, {}, 'Calendar'>;
