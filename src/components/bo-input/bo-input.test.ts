import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BoInput from './bo-input.vue';
import { BoInputSize, BoInputState, BoInputType } from './bo-input';

describe('BoInput', () => {
	it('renders input element', () => {
		const wrapper = mount(BoInput, {
			props: { modelValue: '' },
		});
		expect(wrapper.find('input').exists()).toBe(true);
	});

	it('updates modelValue on input', async () => {
		const wrapper = mount(BoInput, {
			props: { modelValue: '' },
		});
		const input = wrapper.find('input');
		await input.setValue('test value');
		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test value']);
	});

	it('applies size classes', () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
				size: BoInputSize.sm,
			},
		});
		expect(wrapper.find('.bo-input--size-sm').exists()).toBe(true);
	});

	it('applies state classes', () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
				state: BoInputState.error,
			},
		});
		expect(wrapper.find('.bo-input--state-error').exists()).toBe(true);
	});

	it('sets input type', () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
				type: BoInputType.email,
			},
		});
		expect(wrapper.find('input').attributes('type')).toBe('email');
	});

	it('disables input when disabled prop is true', () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
				disabled: true,
			},
		});
		expect(wrapper.find('input').attributes('disabled')).toBeDefined();
		expect(wrapper.find('.bo-input--disabled').exists()).toBe(true);
	});

	it('sets readonly attribute', () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
				readonly: true,
			},
		});
		expect(wrapper.find('input').attributes('readonly')).toBeDefined();
	});

	it('emits focus and blur events', async () => {
		const wrapper = mount(BoInput, {
			props: { modelValue: '' },
		});
		await wrapper.find('input').trigger('focus');
		expect(wrapper.emitted('focus')).toBeTruthy();

		await wrapper.find('input').trigger('blur');
		expect(wrapper.emitted('blur')).toBeTruthy();
	});

	it('sets placeholder', () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
				placeholder: 'Enter text...',
			},
		});
		expect(wrapper.find('input').attributes('placeholder')).toBe('Enter text...');
	});

	it('sets aria-invalid when state is error', () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
				state: BoInputState.error,
			},
		});
		expect(wrapper.find('input').attributes('aria-invalid')).toBe('true');
	});
});
