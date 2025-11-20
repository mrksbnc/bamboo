import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import BoRadio from './bo-radio.vue';
import { BoRadioSize } from './bo-radio';

describe('BoRadio', () => {
	test('should render with default props', () => {
		const wrapper = mount(BoRadio, {
			props: {
				value: 'option1',
			},
		});
		expect(wrapper.find('.bo-radio').exists()).toBe(true);
	});

	test('should render with label', () => {
		const wrapper = mount(BoRadio, {
			props: {
				value: 'option1',
				label: 'Option 1',
			},
		});
		expect(wrapper.text()).toContain('Option 1');
	});

	test('should emit change event when selected', async () => {
		const wrapper = mount(BoRadio, {
			props: {
				value: 'option1',
			},
		});

		const input = wrapper.find('input[type="radio"]');
		await input.setValue();

		expect(wrapper.emitted('change')?.[0]).toEqual(['option1']);
	});

	test('should apply correct classes for all sizes', () => {
		const sizes = [BoRadioSize.sm, BoRadioSize.md, BoRadioSize.lg];

		for (const size of sizes) {
			const wrapper = mount(BoRadio, {
				props: {
					value: 'test',
					size,
				},
			});
			expect(wrapper.find('.bo-radio__container').classes()).toContain(
				`bo-radio__container--size-${size}`,
			);
		}
	});

	test('should be disabled when disabled prop is true', () => {
		const wrapper = mount(BoRadio, {
			props: {
				value: 'option1',
				disabled: true,
			},
		});

		const input = wrapper.find('input[type="radio"]');
		expect(input.attributes('disabled')).toBeDefined();
		expect(wrapper.find('.bo-radio__container').classes()).toContain(
			'bo-radio__container--disabled',
		);
	});

	test('should render helper text', () => {
		const wrapper = mount(BoRadio, {
			props: {
				value: 'option1',
				helperText: 'This is helper text',
			},
		});

		expect(wrapper.text()).toContain('This is helper text');
	});

	test('should have aria-label when provided', () => {
		const wrapper = mount(BoRadio, {
			props: {
				value: 'option1',
				ariaLabel: 'Radio option',
			},
		});

		const input = wrapper.find('input[type="radio"]');
		expect(input.attributes('aria-label')).toBe('Radio option');
	});

	test('should have data-testid', () => {
		const wrapper = mount(BoRadio, {
			props: {
				value: 'option1',
			},
		});

		const input = wrapper.find('input[type="radio"]');
		expect(input.attributes('data-testid')).toBeDefined();
	});

	test('should apply custom CSS class', () => {
		const wrapper = mount(BoRadio, {
			props: {
				value: 'option1',
				customCssClass: 'custom-class',
			},
		});

		expect(wrapper.classes()).toContain('custom-class');
	});

	test('should show checked state when modelValue matches value', () => {
		const wrapper = mount(BoRadio, {
			props: {
				value: 'option1',
				modelValue: 'option1',
			},
		});

		expect(wrapper.find('.bo-radio__container').classes()).toContain(
			'bo-radio__container--checked',
		);
		expect(wrapper.find('.bo-radio__dot').exists()).toBe(true);
	});

	test('should not show checked state when modelValue does not match value', () => {
		const wrapper = mount(BoRadio, {
			props: {
				value: 'option1',
				modelValue: 'option2',
			},
		});

		expect(wrapper.find('.bo-radio__container').classes()).not.toContain(
			'bo-radio__container--checked',
		);
		expect(wrapper.find('.bo-radio__dot').exists()).toBe(false);
	});
});
