import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoRadioGroup from './BoRadioGroup.vue';

describe('BoRadioGroup.vue', () => {
	const options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
	];

	it('renders options', () => {
		const wrapper = mount(BoRadioGroup, {
			props: { options },
		});
		expect(wrapper.findAll('.bo-radio')).toHaveLength(3);
		expect(wrapper.text()).toContain('Option 1');
		expect(wrapper.text()).toContain('Option 2');
		expect(wrapper.text()).toContain('Option 3');
	});

	it('renders with label', () => {
		const wrapper = mount(BoRadioGroup, {
			props: { options, label: 'Test Label' },
		});
		expect(wrapper.find('label').text()).toBe('Test Label');
	});

	it('selects option when modelValue matches', () => {
		const wrapper = mount(BoRadioGroup, {
			props: { options, modelValue: '2' },
		});
		const radio = wrapper.find('input[value="2"]');
		expect(radio.element.checked).toBe(true);
	});

	it('emits update:modelValue when option is selected', async () => {
		const wrapper = mount(BoRadioGroup, {
			props: { options },
		});
		await wrapper.find('input[value="2"]').trigger('click');
		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
		expect(wrapper.emitted('update:modelValue')![0]).toEqual(['2']);
	});

	it('renders as disabled', () => {
		const wrapper = mount(BoRadioGroup, {
			props: { options, disabled: true },
		});
		wrapper.findAll('input').forEach((radio) => {
			expect(radio.attributes('disabled')).toBeDefined();
		});
	});

	it('shows error message', () => {
		const wrapper = mount(BoRadioGroup, {
			props: { options, error: 'Invalid selection' },
		});
		expect(wrapper.find('.bo-radio-group__error').text()).toBe('Invalid selection');
	});

	it('shows description', () => {
		const wrapper = mount(BoRadioGroup, {
			props: { options, description: 'Help text' },
		});
		expect(wrapper.find('.bo-radio-group__description').text()).toBe('Help text');
	});

	it('shows required indicator', () => {
		const wrapper = mount(BoRadioGroup, {
			props: { options, required: true },
		});
		expect(wrapper.find('.bo-radio-group__required').exists()).toBe(true);
	});

	it('applies custom class', () => {
		const wrapper = mount(BoRadioGroup, {
			props: { options, class: 'custom-class' },
		});
		expect(wrapper.classes()).toContain('custom-class');
	});

	it('renders with inline layout', () => {
		const wrapper = mount(BoRadioGroup, {
			props: { options, inline: true },
		});
		expect(wrapper.classes()).toContain('bo-radio-group--inline');
	});
});
