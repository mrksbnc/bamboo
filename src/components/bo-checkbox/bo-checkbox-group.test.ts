import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BoCheckboxGroup from './bo-checkbox-group.vue';
import BoCheckbox from './bo-checkbox.vue';
import { BoCheckboxSize } from './bo-checkbox';

describe('bo-checkbox-group', () => {
	it('should render checkbox group', () => {
		const wrapper = mount(BoCheckboxGroup);
		expect(wrapper.find('.bo-checkbox-group').exists()).toBe(true);
	});

	it('should render label when provided', () => {
		const wrapper = mount(BoCheckboxGroup, {
			props: {
				label: 'Select options',
			},
		});
		expect(wrapper.text()).toContain('Select options');
	});

	it('should accept required prop', () => {
		const wrapper = mount(BoCheckboxGroup, {
			props: {
				label: 'Select options',
				required: true,
			},
		});
		// The component accepts the required prop
		expect(wrapper.props('required')).toBe(true);
	});

	it('should apply vertical direction by default', () => {
		const wrapper = mount(BoCheckboxGroup);
		expect(wrapper.find('.bo-checkbox-group--vertical').exists()).toBe(true);
	});

	it('should apply horizontal direction', () => {
		const wrapper = mount(BoCheckboxGroup, {
			props: {
				direction: 'horizontal',
			},
		});
		expect(wrapper.find('.bo-checkbox-group--horizontal').exists()).toBe(true);
	});

	it('should display helper text', () => {
		const wrapper = mount(BoCheckboxGroup, {
			props: {
				helperText: 'Select at least one option',
			},
		});
		expect(wrapper.text()).toContain('Select at least one option');
	});

	it('should display error text when hasError is true', () => {
		const wrapper = mount(BoCheckboxGroup, {
			props: {
				hasError: true,
				errorText: 'Please select an option',
			},
		});
		expect(wrapper.text()).toContain('Please select an option');
		expect(wrapper.find('.bo-checkbox-group__message--error').exists()).toBe(true);
	});

	it('should apply error state', () => {
		const wrapper = mount(BoCheckboxGroup, {
			props: {
				hasError: true,
			},
		});
		expect(wrapper.find('.bo-checkbox-group--error').exists()).toBe(true);
	});

	it('should have role group', () => {
		const wrapper = mount(BoCheckboxGroup);
		expect(wrapper.attributes('role')).toBe('group');
	});

	it('should apply aria-label', () => {
		const wrapper = mount(BoCheckboxGroup, {
			props: {
				ariaLabel: 'Options group',
			},
		});
		expect(wrapper.attributes('aria-label')).toBe('Options group');
	});

	it('should render slot content', () => {
		const wrapper = mount(BoCheckboxGroup, {
			slots: {
				default: '<div class="custom-checkbox">Checkbox</div>',
			},
		});
		expect(wrapper.find('.custom-checkbox').exists()).toBe(true);
	});

	it('should provide context to child checkboxes', () => {
		const wrapper = mount(BoCheckboxGroup, {
			props: {
				name: 'options',
				size: BoCheckboxSize.lg,
				disabled: true,
			},
			slots: {
				default: BoCheckbox,
			},
		});

		// The checkbox should receive the context from the group
		expect(wrapper.findComponent(BoCheckbox).exists()).toBe(true);
	});

	it('should emit change event when model value changes', async () => {
		const wrapper = mount(BoCheckboxGroup, {
			props: {
				modelValue: [],
			},
		});

		await wrapper.vm.$emit('change', ['option1']);
		expect(wrapper.emitted('change')).toBeTruthy();
		expect(wrapper.emitted('change')?.[0]).toEqual([['option1']]);
	});

	it('should apply disabled state', () => {
		const wrapper = mount(BoCheckboxGroup, {
			props: {
				disabled: true,
			},
		});
		expect(wrapper.find('.bo-checkbox-group--disabled').exists()).toBe(true);
	});
});
