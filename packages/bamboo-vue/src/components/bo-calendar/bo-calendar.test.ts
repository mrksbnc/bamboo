import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { nextTick } from 'vue';
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

	it('navigates months and honors disabled dates', async () => {
		const visible = new Date();
		const selected = new Date(visible.getFullYear(), visible.getMonth(), 15);
		const blocked = new Date(visible.getFullYear(), visible.getMonth(), 16);
		const wrapper = mount(BoCalendar, {
			props: { modelValue: selected, disabledDates: [blocked] },
		});
		const initialLabel = wrapper.find('[role="grid"]').attributes('aria-label');
		expect(wrapper.find('button[aria-selected="true"]').text()).toBe('15');
		expect(wrapper.findAll('button[disabled]').some((button) => button.text() === '16')).toBe(true);

		await wrapper.find('button[aria-label="Next month"]').trigger('click');
		expect(wrapper.find('[role="grid"]').attributes('aria-label')).not.toBe(initialLabel);
		await wrapper.find('button[aria-label="Previous month"]').trigger('click');
		expect(wrapper.find('[role="grid"]').attributes('aria-label')).toBe(initialLabel);
	});

	it('moves focus with keyboard navigation and ignores disabled selection', async () => {
		const visible = new Date();
		const selected = new Date(visible.getFullYear(), visible.getMonth(), 15);
		const wrapper = mount(BoCalendar, {
			attachTo: document.body,
			props: { modelValue: selected, disabled: true },
		});
		const day = wrapper.find('button[aria-selected="true"]');
		await day.trigger('keydown', { key: 'ArrowRight' });
		await nextTick();
		expect(wrapper.emitted('select')).toBeUndefined();
		expect(wrapper.findAll('button[disabled]')).toHaveLength(42 + 2);
		wrapper.unmount();
	});
});
