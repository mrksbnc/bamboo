import { BoSize } from '@/shared';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoCalendar from './BoCalendar.vue';
import { BoCalendarVariant } from './bo-calendar';

describe('BoCalendar', () => {
	it('renders with default props', () => {
		const wrapper = mount(BoCalendar);
		expect(wrapper.find('.font-semibold').exists()).toBe(true);
		expect(wrapper.findAll('.text-center').length).toBeGreaterThan(0);
	});

	it('displays current month and year', () => {
		const wrapper = mount(BoCalendar);
		const currentDate = new Date();
		const expectedMonthYear = currentDate.toLocaleDateString('en-US', {
			month: 'long',
			year: 'numeric',
		});
		expect(wrapper.find('.font-semibold').text()).toBe(expectedMonthYear);
	});

	it('navigates between months', async () => {
		const wrapper = mount(BoCalendar);

		const initialMonth = wrapper.find('.font-semibold').text();
		await wrapper.findAll('button')[0].trigger('click'); // Previous month
		expect(wrapper.find('.font-semibold').text()).not.toBe(initialMonth);

		await wrapper.findAll('button')[1].trigger('click'); // Next month
		expect(wrapper.find('.font-semibold').text()).toBe(initialMonth);
	});

	it('selects a date', async () => {
		const wrapper = mount(BoCalendar);

		const today = new Date();
		const todayCell = wrapper
			.findAll('.text-center')
			.find(
				(cell) =>
					cell.text() === today.getDate().toString() &&
					!cell.classes().includes('text-neutral-400'),
			);

		await todayCell?.trigger('click');
		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
	});

	it('disables dates outside min/max range', () => {
		const minDate = new Date();
		minDate.setDate(minDate.getDate() - 1);
		const maxDate = new Date();
		maxDate.setDate(maxDate.getDate() + 1);

		const wrapper = mount(BoCalendar, {
			props: {
				minDate,
				maxDate,
			},
		});

		const disabledCells = wrapper.findAll('.opacity-50');
		expect(disabledCells.length).toBeGreaterThan(0);
	});

	it('shows time picker when showTime is true', () => {
		const wrapper = mount(BoCalendar, {
			props: {
				showTime: true,
			},
		});

		expect(wrapper.find('input[type="number"]').exists()).toBe(true);
	});

	it('hides header when showHeader is false', () => {
		const wrapper = mount(BoCalendar, {
			props: {
				showHeader: false,
			},
		});

		expect(wrapper.find('.font-semibold').exists()).toBe(false);
	});

	it('hides week days when showWeekDays is false', () => {
		const wrapper = mount(BoCalendar, {
			props: {
				showWeekDays: false,
			},
		});

		expect(wrapper.find('.text-neutral-500').exists()).toBe(false);
	});

	it('hides other months when showOtherMonths is false', () => {
		const wrapper = mount(BoCalendar, {
			props: {
				showOtherMonths: false,
			},
		});

		const invisibleCells = wrapper.findAll('.invisible');
		expect(invisibleCells.length).toBeGreaterThan(0);
	});

	it('applies correct size classes', () => {
		const wrapper = mount(BoCalendar, {
			props: {
				size: BoSize.large,
			},
		});

		expect(wrapper.classes()).toContain('text-lg');
	});

	it('applies compact variant correctly', () => {
		const wrapper = mount(BoCalendar, {
			props: {
				variant: BoCalendarVariant.compact,
			},
		});

		expect(wrapper.classes()).toContain('p-2');
		expect(wrapper.find('.text-xs').exists()).toBe(true);
	});

	it('handles disabled state', () => {
		const wrapper = mount(BoCalendar, {
			props: {
				disabled: true,
			},
		});

		const disabledButtons = wrapper.findAll('.cursor-not-allowed');
		expect(disabledButtons.length).toBe(2); // Previous and next month buttons
	});
});
