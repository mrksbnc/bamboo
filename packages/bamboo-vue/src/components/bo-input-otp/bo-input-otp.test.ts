import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoInputOtp from './bo-input-otp.vue';

describe('BoInputOtp', () => {
	it('renders one input for each configured character', () => {
		const wrapper = mount(BoInputOtp, { props: { length: 4 } });
		expect(wrapper.findAll('input')).toHaveLength(4);
	});

	it('updates its model and emits complete after entry', async () => {
		const wrapper = mount(BoInputOtp, { props: { length: 4, modelValue: '' } });
		const inputs = wrapper.findAll('input');
		await inputs[0].setValue('1');
		await inputs[1].setValue('2');
		await inputs[2].setValue('3');
		await inputs[3].setValue('4');

		expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['1234']);
		expect(wrapper.emitted('complete')).toContainEqual(['1234']);
	});

	it('fills the model from a paste event', async () => {
		const wrapper = mount(BoInputOtp, { props: { length: 4 } });
		await wrapper.find('.bo-input-otp__group').trigger('paste', {
			clipboardData: { getData: () => '9876' },
		});
		expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['9876']);
	});
});
