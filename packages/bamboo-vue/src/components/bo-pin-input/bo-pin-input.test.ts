import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoPinInput from './bo-pin-input.vue';

describe('BoPinInput', () => {
	it('uses the PIN defaults and exposes accessible cell labels', () => {
		const wrapper = mount(BoPinInput);
		const inputs = wrapper.findAll('input');
		expect(inputs).toHaveLength(4);
		expect(inputs[0].attributes('type')).toBe('password');
		expect(inputs[0].attributes('aria-label')).toBe('PIN digit 1 of 4');
	});

	it('supports model updates and disabled state', async () => {
		const wrapper = mount(BoPinInput, { props: { length: 3, disabled: true } });
		expect(wrapper.findAll('input').every((input) => input.element.disabled)).toBe(true);
		await wrapper.setProps({ disabled: false });
		await wrapper.findAll('input')[0].setValue('7');
		expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['7']);
	});
});
