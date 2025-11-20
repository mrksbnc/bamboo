import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import BoToggle from './bo-toggle.vue';
import { BoToggleSize } from './bo-toggle';

describe('BoToggle', () => {
	test('should render with default props', () => {
		const wrapper = mount(BoToggle);
		expect(wrapper.find('.bo-toggle').exists()).toBe(true);
	});

	test('should render with label', () => {
		const wrapper = mount(BoToggle, {
			props: {
				label: 'Enable notifications',
			},
		});
		expect(wrapper.text()).toContain('Enable notifications');
	});

	test('should toggle value on click', async () => {
		const wrapper = mount(BoToggle, {
			props: {
				modelValue: false,
			},
		});

		const input = wrapper.find('input[type="checkbox"]');
		await input.setValue(true);

		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true]);
	});

	test('should emit change event', async () => {
		const wrapper = mount(BoToggle);
		const input = wrapper.find('input[type="checkbox"]');

		await input.setValue(true);

		expect(wrapper.emitted('change')?.[0]).toEqual([true]);
	});

	test('should apply correct classes for all sizes', () => {
		const sizes = [BoToggleSize.sm, BoToggleSize.md, BoToggleSize.lg];

		for (const size of sizes) {
			const wrapper = mount(BoToggle, {
				props: { size },
			});
			expect(wrapper.find('.bo-toggle').classes()).toContain(`bo-toggle--size-${size}`);
		}
	});

	test('should be disabled when disabled prop is true', () => {
		const wrapper = mount(BoToggle, {
			props: {
				disabled: true,
			},
		});

		const input = wrapper.find('input[type="checkbox"]');
		expect(input.attributes('disabled')).toBeDefined();
		expect(wrapper.find('.bo-toggle').classes()).toContain('bo-toggle--disabled');
	});

	test('should not emit events when disabled', async () => {
		const wrapper = mount(BoToggle, {
			props: {
				disabled: true,
			},
		});

		const input = wrapper.find('input[type="checkbox"]');
		await input.trigger('click');

		expect(wrapper.emitted('change')).toBeFalsy();
	});

	test('should render helper text', () => {
		const wrapper = mount(BoToggle, {
			props: {
				helperText: 'This is helper text',
			},
		});

		expect(wrapper.text()).toContain('This is helper text');
	});

	test('should position label on left when labelPosition is left', () => {
		const wrapper = mount(BoToggle, {
			props: {
				label: 'Test label',
				labelPosition: 'left',
			},
		});

		expect(wrapper.find('.bo-toggle__label--left').exists()).toBe(true);
	});

	test('should position label on right by default', () => {
		const wrapper = mount(BoToggle, {
			props: {
				label: 'Test label',
			},
		});

		expect(wrapper.find('.bo-toggle__label--right').exists()).toBe(true);
	});

	test('should have aria-label when provided', () => {
		const wrapper = mount(BoToggle, {
			props: {
				ariaLabel: 'Toggle switch',
			},
		});

		const input = wrapper.find('input[type="checkbox"]');
		expect(input.attributes('aria-label')).toBe('Toggle switch');
	});

	test('should have data-testid', () => {
		const wrapper = mount(BoToggle);
		const input = wrapper.find('input[type="checkbox"]');
		expect(input.attributes('data-testid')).toBeDefined();
	});

	test('should apply custom CSS class', () => {
		const wrapper = mount(BoToggle, {
			props: {
				customCssClass: 'custom-class',
			},
		});

		expect(wrapper.classes()).toContain('custom-class');
	});

	test('should apply checked class when value is true', () => {
		const wrapper = mount(BoToggle, {
			props: {
				modelValue: true,
			},
		});

		expect(wrapper.find('.bo-toggle').classes()).toContain('bo-toggle--checked');
		expect(wrapper.find('.bo-toggle__switch').classes()).toContain('bo-toggle__switch--checked');
	});
});
