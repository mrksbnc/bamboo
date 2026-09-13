import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoDatePicker from './bo-date-picker.vue';
import BoDateRangePicker from './bo-date-range-picker.vue';

describe('BoDatePicker', () => {
	it('opens the calendar and updates its formatted value', async () => {
		const wrapper = mount(BoDatePicker);
		await wrapper.find('button').trigger('click');
		expect(document.body.querySelector('.bo-calendar')).not.toBeNull();

		const day = document.body.querySelector<HTMLButtonElement>(
			'button.bo-calendar__day:not([disabled])',
		);
		day?.click();
		await wrapper.vm.$nextTick();
		expect(wrapper.find('button').text()).not.toContain('Select date');
		wrapper.unmount();
	});

	it('uses the calendar border as the date-picker popover border', async () => {
		const wrapper = mount(BoDatePicker);
		await wrapper.find('button').trigger('click');

		const content = document.body.querySelector<HTMLElement>('[data-slot="popover-content"]');
		expect(content?.classList).toContain('border-0');
		expect(content?.classList).toContain('p-0');
		expect(content?.classList).toContain('shadow-none');
		wrapper.unmount();
	});

	it('uses the same dropdown treatment for the date-range picker', async () => {
		const wrapper = mount(BoDateRangePicker);
		await wrapper.find('button').trigger('click');

		const content = document.body.querySelector<HTMLElement>('[data-slot="popover-content"]');
		expect(content?.classList).toContain('border-0');
		expect(document.body.querySelectorAll('.bo-calendar')).toHaveLength(2);
		wrapper.unmount();
	});
});
