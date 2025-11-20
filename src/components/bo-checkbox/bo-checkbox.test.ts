import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import BoCheckbox from './bo-checkbox.vue';
import { BoCheckboxSize } from './bo-checkbox';

describe('BoCheckbox', () => {
	test('should render with default props', () => {
		const wrapper = mount(BoCheckbox);
		expect(wrapper.find('.bo-checkbox').exists()).toBe(true);
	});

	test('should render with label', () => {
		const wrapper = mount(BoCheckbox, {
			props: {
				label: 'Accept terms',
			},
		});
		expect(wrapper.text()).toContain('Accept terms');
	});

	test('should toggle value on click', async () => {
		const wrapper = mount(BoCheckbox, {
			props: {
				modelValue: false,
			},
		});

		const input = wrapper.find('input[type="checkbox"]');
		await input.setValue(true);

		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true]);
	});

	test('should emit change event', async () => {
		const wrapper = mount(BoCheckbox);
		const input = wrapper.find('input[type="checkbox"]');

		await input.setValue(true);

		expect(wrapper.emitted('change')?.[0]).toEqual([true]);
	});

	test('should apply correct classes for all sizes', () => {
		const sizes = [BoCheckboxSize.sm, BoCheckboxSize.md, BoCheckboxSize.lg];

		for (const size of sizes) {
			const wrapper = mount(BoCheckbox, {
				props: { size },
			});
			expect(wrapper.find('.bo-checkbox').classes()).toContain(`bo-checkbox--size-${size}`);
		}
	});

	test('should be disabled when disabled prop is true', () => {
		const wrapper = mount(BoCheckbox, {
			props: {
				disabled: true,
			},
		});

		const input = wrapper.find('input[type="checkbox"]');
		expect(input.attributes('disabled')).toBeDefined();
		expect(wrapper.find('.bo-checkbox').classes()).toContain('bo-checkbox--disabled');
	});

	test('should render helper text', () => {
		const wrapper = mount(BoCheckbox, {
			props: {
				helperText: 'This is helper text',
			},
		});

		expect(wrapper.text()).toContain('This is helper text');
	});

	test('should have aria-label when provided', () => {
		const wrapper = mount(BoCheckbox, {
			props: {
				ariaLabel: 'Checkbox option',
			},
		});

		const input = wrapper.find('input[type="checkbox"]');
		expect(input.attributes('aria-label')).toBe('Checkbox option');
	});

	test('should have data-testid', () => {
		const wrapper = mount(BoCheckbox);
		const input = wrapper.find('input[type="checkbox"]');
		expect(input.attributes('data-testid')).toBeDefined();
	});

	test('should apply custom CSS class', () => {
		const wrapper = mount(BoCheckbox, {
			props: {
				customCssClass: 'custom-class',
			},
		});

		expect(wrapper.classes()).toContain('custom-class');
	});

	test('should show checked state when modelValue is true', () => {
		const wrapper = mount(BoCheckbox, {
			props: {
				modelValue: true,
			},
		});

		expect(wrapper.find('.bo-checkbox').classes()).toContain('bo-checkbox--checked');
	});

	test('should show indeterminate state', () => {
		const wrapper = mount(BoCheckbox, {
			props: {
				indeterminate: true,
			},
		});

		expect(wrapper.find('.bo-checkbox').classes()).toContain('bo-checkbox--indeterminate');
	});

	test('should work with array values', async () => {
		const wrapper = mount(BoCheckbox, {
			props: {
				value: 'option1',
				modelValue: [],
			},
		});

		const input = wrapper.find('input[type="checkbox"]');
		await input.setValue(true);

		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['option1']]);
	});
});
