import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoDatePicker from './bo-date-picker.vue';

describe('BoDatePicker', () => {
	it('opens the calendar and updates its formatted value', async () => {
		const wrapper = mount(BoDatePicker);
		await wrapper.find('button').trigger('click');
		expect(wrapper.find('.bo-calendar').exists()).toBe(true);

		const day = wrapper.find('button.bo-calendar__day:not([disabled])');
		await day.trigger('click');
		expect(wrapper.find('button').text()).not.toContain('Select date');
	});
});
