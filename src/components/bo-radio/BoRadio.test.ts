import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoRadio from './BoRadio.vue';

describe('BoRadio.vue', () => {
	it('renders with label', () => {
		const wrapper = mount(BoRadio, {
			props: { label: 'Test Label', value: 'test' },
		});
		expect(wrapper.find('label').text()).toBe('Test Label');
	});

	it('renders without label', () => {
		const wrapper = mount(BoRadio, {
			props: { value: 'test' },
		});
		expect(wrapper.find('input[type="radio"]').exists()).toBe(true);
	});

	it('is checked when modelValue matches value', () => {
		const wrapper = mount(BoRadio, {
			props: { value: 'test', modelValue: 'test' },
		});
		expect(wrapper.find('input[type="radio"]').element.checked).toBe(true);
	});

	it('is not checked when modelValue does not match value', () => {
		const wrapper = mount(BoRadio, {
			props: { value: 'test', modelValue: 'other' },
		});
		expect(wrapper.find('input[type="radio"]').element.checked).toBe(false);
	});

	it('emits update:modelValue when clicked', async () => {
		const wrapper = mount(BoRadio, {
			props: { value: 'test' },
		});
		await wrapper.find('input[type="radio"]').trigger('click');
		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
		expect(wrapper.emitted('update:modelValue')![0]).toEqual(['test']);
	});

	it('renders as disabled', () => {
		const wrapper = mount(BoRadio, {
			props: { value: 'test', disabled: true },
		});
		expect(wrapper.find('input[type="radio"]').attributes('disabled')).toBeDefined();
	});

	it('shows error message', () => {
		const wrapper = mount(BoRadio, {
			props: { value: 'test', error: 'Invalid selection' },
		});
		expect(wrapper.find('.bo-radio__error').text()).toBe('Invalid selection');
	});

	it('shows description', () => {
		const wrapper = mount(BoRadio, {
			props: { value: 'test', description: 'Help text' },
		});
		expect(wrapper.find('.bo-radio__description').text()).toBe('Help text');
	});

	it('shows required indicator', () => {
		const wrapper = mount(BoRadio, {
			props: { value: 'test', required: true },
		});
		expect(wrapper.find('.bo-radio__required').exists()).toBe(true);
	});

	it('applies custom class', () => {
		const wrapper = mount(BoRadio, {
			props: { value: 'test', class: 'custom-class' },
		});
		expect(wrapper.classes()).toContain('custom-class');
	});
});
