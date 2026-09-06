import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoCalendar from './bo-calendar.vue';

describe('BoCalendar', () => {
	it('renders a month grid and emits selected dates', async () => {
		const wrapper = mount(BoCalendar);
		const day = wrapper.find('button.bo-calendar__day:not([disabled])');

		expect(day.exists()).toBe(true);
		await day.trigger('click');

		expect(wrapper.emitted('select')).toHaveLength(1);
	});

	it('disables dates outside the configured range', () => {
		const wrapper = mount(BoCalendar, {
			props: { minDate: new Date(2026, 0, 10), maxDate: new Date(2026, 0, 20) },
		});

		expect(wrapper.findAll('button[disabled]').length).toBeGreaterThan(0);
	});
});
