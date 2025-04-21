import { BoSize } from '@/shared';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoDatepicker from './BoDatepicker.vue';
import { BoDatepickerVariant } from './bo-datepicker';

describe('BoDatepicker', () => {
	it('renders with default props', () => {
		const wrapper = mount(BoDatepicker);
		expect(wrapper.find('input').exists()).toBe(true);
		expect(wrapper.find('input').attributes('placeholder')).toBe('Select date');
	});

	it('shows calendar when clicked', async () => {
		const wrapper = mount(BoDatepicker);
		await wrapper.find('input').trigger('click');
		expect(wrapper.find('.absolute').exists()).toBe(true);
	});

	it('displays current month and year', async () => {
		const wrapper = mount(BoDatepicker);
		await wrapper.find('input').trigger('click');
		const currentDate = new Date();
		const expectedMonthYear = currentDate.toLocaleDateString('en-US', {
			month: 'long',
			year: 'numeric',
		});
		expect(wrapper.find('.font-semibold').text()).toBe(expectedMonthYear);
	});

	it('navigates between months', async () => {
		const wrapper = mount(BoDatepicker);
		await wrapper.find('input').trigger('click');

		const initialMonth = wrapper.find('.font-semibold').text();
		await wrapper.findAll('button')[0].trigger('click'); // Previous month
		expect(wrapper.find('.font-semibold').text()).not.toBe(initialMonth);

		await wrapper.findAll('button')[1].trigger('click'); // Next month
		expect(wrapper.find('.font-semibold').text()).toBe(initialMonth);
	});

	it('selects a date', async () => {
		const wrapper = mount(BoDatepicker);
		await wrapper.find('input').trigger('click');

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

	it('clears selected date', async () => {
		const wrapper = mount(BoDatepicker, {
			props: {
				modelValue: new Date(),
			},
		});

		await wrapper.find('.text-neutral-500').trigger('click');
		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([undefined]);
	});

	it('disables dates outside min/max range', async () => {
		const minDate = new Date();
		minDate.setDate(minDate.getDate() - 1);
		const maxDate = new Date();
		maxDate.setDate(maxDate.getDate() + 1);

		const wrapper = mount(BoDatepicker, {
			props: {
				minDate,
				maxDate,
			},
		});

		await wrapper.find('input').trigger('click');
		const disabledCells = wrapper.findAll('.opacity-50');
		expect(disabledCells.length).toBeGreaterThan(0);
	});

	it('shows time picker when showTime is true', async () => {
		const wrapper = mount(BoDatepicker, {
			props: {
				showTime: true,
			},
		});

		await wrapper.find('input').trigger('click');
		expect(wrapper.find('input[type="number"]').exists()).toBe(true);
	});

	it('applies correct size classes', () => {
		const wrapper = mount(BoDatepicker, {
			props: {
				size: BoSize.large,
			},
		});

		expect(wrapper.classes()).toContain('px-5');
		expect(wrapper.classes()).toContain('py-2.5');
		expect(wrapper.classes()).toContain('text-lg');
	});

	it('applies correct variant classes', () => {
		const wrapper = mount(BoDatepicker, {
			props: {
				variant: BoDatepickerVariant.outlined,
			},
		});

		expect(wrapper.classes()).toContain('border-neutral-300');
	});

	it('handles disabled state', () => {
		const wrapper = mount(BoDatepicker, {
			props: {
				disabled: true,
			},
		});

		expect(wrapper.classes()).toContain('opacity-50');
		expect(wrapper.classes()).toContain('cursor-not-allowed');
	});
});
