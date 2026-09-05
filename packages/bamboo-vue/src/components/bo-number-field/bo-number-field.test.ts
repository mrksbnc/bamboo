import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoNumberField from './bo-number-field.vue';

describe('BoNumberField', () => {
	it('renders a spinbutton and updates its numeric model', async () => {
		const wrapper = mount(BoNumberField, {
			props: { modelValue: 2, min: '0', max: '5', step: '1' },
		});
		const input = wrapper.find('input');
		expect(input.attributes('role')).toBe('spinbutton');
		await input.setValue('3');
		expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([3]);
	});

	it('steps within the configured bounds', async () => {
		const wrapper = mount(BoNumberField, { props: { modelValue: 2, min: '0', max: '3' } });
		await wrapper.findAll('button')[1].trigger('click');
		expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([3]);
		await wrapper.findAll('button')[1].trigger('click');
		expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
	});
});
