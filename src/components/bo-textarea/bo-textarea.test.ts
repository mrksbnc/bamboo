import { BoSize } from '@/shared/bo-size.js';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoTextarea from './bo-textarea.vue';

describe('BoTextarea.vue', () => {
	it('renders with label', () => {
		const wrapper = mount(BoTextarea, {
			props: { label: 'Test Label' },
		});
		expect(wrapper.find('label').text()).toBe('Test Label');
	});

	it('renders with placeholder', () => {
		const wrapper = mount(BoTextarea, {
			props: { placeholder: 'Enter text' },
		});
		expect(wrapper.find('textarea').attributes('placeholder')).toBe('Enter text');
	});

	it('shows error message', () => {
		const wrapper = mount(BoTextarea, {
			props: { error: 'Invalid input' },
		});
		expect(wrapper.find('.bo-textarea__error').text()).toBe('Invalid input');
	});

	it('renders as disabled', () => {
		const wrapper = mount(BoTextarea, {
			props: { disabled: true },
		});
		expect(wrapper.find('textarea').attributes('disabled')).toBeDefined();
	});

	it('renders as readonly', () => {
		const wrapper = mount(BoTextarea, {
			props: { readonly: true },
		});
		expect(wrapper.find('textarea').attributes('readonly')).toBeDefined();
	});

	it('renders with specified size', () => {
		const wrapper = mount(BoTextarea, {
			props: { size: BoSize.large },
		});
		expect(wrapper.classes()).toContain('bo-textarea--large');
	});

	it('renders with custom class', () => {
		const wrapper = mount(BoTextarea, {
			props: { class: 'custom-class' },
		});
		expect(wrapper.classes()).toContain('custom-class');
	});

	it('emits update:modelValue on input', async () => {
		const wrapper = mount(BoTextarea);
		await wrapper.find('textarea').setValue('test');
		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
		expect(wrapper.emitted('update:modelValue')![0]).toEqual(['test']);
	});

	it('renders with description', () => {
		const wrapper = mount(BoTextarea, {
			props: { description: 'Help text' },
		});
		expect(wrapper.find('.bo-textarea__description').text()).toBe('Help text');
	});

	it('renders as required', () => {
		const wrapper = mount(BoTextarea, {
			props: { required: true },
		});
		expect(wrapper.find('textarea').attributes('required')).toBeDefined();
	});

	it('renders with specified rows', () => {
		const wrapper = mount(BoTextarea, {
			props: { rows: 5 },
		});
		expect(wrapper.find('textarea').attributes('rows')).toBe('5');
	});

	it('renders with specified cols', () => {
		const wrapper = mount(BoTextarea, {
			props: { cols: 50 },
		});
		expect(wrapper.find('textarea').attributes('cols')).toBe('50');
	});
});
