import { describe, expect, test } from 'vitest';
import BoButton from './bo-button.vue';
import { mount } from '@vue/test-utils';
import { BoSize } from '@/core/size';
import { BoVariant } from '@/core/variant';
import { BoButtonType } from './bo-button';

describe('BoButton', () => {
	test('should render with required props', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click me',
			},
		});

		expect(wrapper.text()).toBe('Click me');
		expect(wrapper.element.tagName).toBe('BUTTON');
	});

	test('should render with slot content', () => {
		const wrapper = mount(BoButton, {
			slots: {
				default: 'Slot content',
			},
		});

		expect(wrapper.text()).toBe('Slot content');
	});

	test('should apply correct classes for all sizes', () => {
		const sizes = [BoSize.xs, BoSize.sm, BoSize.md, BoSize.lg, BoSize.xl];

		for (const size of sizes) {
			const wrapper = mount(BoButton, {
				props: {
					label: 'Test',
					size,
				},
			});

			expect(wrapper.classes().join(' ').includes(`bo-button--size-${size}`)).toBe(true);
		}
	});

	test('should apply disabled class when disabled', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Test',
				disabled: true,
			},
		});

		expect(wrapper.classes().includes('bo-button--disabled')).toBe(true);
		expect(wrapper.attributes('disabled')).toBeDefined();
	});

	test('should not be disabled by default', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Test',
			},
		});

		expect(wrapper.classes().includes('bo-button--disabled')).toBe(false);
		expect(wrapper.attributes('disabled')).toBeUndefined();
	});

	test('should emit click event when clicked', async () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Test',
			},
		});

		await wrapper.trigger('click');

		expect(wrapper.emitted('click')).toBeTruthy();
		expect(wrapper.emitted('click')?.length).toBe(1);
	});

	test('should not emit click event when disabled', async () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Test',
				disabled: true,
			},
		});

		await wrapper.trigger('click');

		expect(wrapper.emitted('click')).toBeFalsy();
	});

	test('should have correct button type', () => {
		const types = [BoButtonType.button, BoButtonType.submit, BoButtonType.reset];

		for (const type of types) {
			const wrapper = mount(BoButton, {
				props: {
					label: 'Test',
					type,
				},
			});

			expect(wrapper.attributes('type')).toBe(type);
		}
	});

	test('should default to button type', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Test',
			},
		});

		expect(wrapper.attributes('type')).toBe('button');
	});

	test('should apply custom CSS class', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Test',
				customCssClass: 'my-custom-class',
			},
		});

		expect(wrapper.classes().includes('my-custom-class')).toBe(true);
	});

	test('should have aria-label when provided', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Test',
				ariaLabel: 'Accessible label',
			},
		});

		expect(wrapper.attributes('aria-label')).toBe('Accessible label');
	});

	test('should have data-testid', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Test',
			},
		});

		expect(wrapper.attributes('data-testid')).toBeDefined();
		expect(wrapper.attributes('data-testid')).toContain('bo-button');
	});

	test('should have custom data-testid when provided', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Test',
				dataTestId: 'custom-test-id',
			},
		});

		expect(wrapper.attributes('data-testid')).toBe('custom-test-id');
	});

	test('should apply correct classes for all variants', () => {
		const variants = [
			BoVariant.primary,
			BoVariant.secondary,
			BoVariant.success,
			BoVariant.warning,
			BoVariant.danger,
			BoVariant.light,
			BoVariant.dark,
		];

		for (const variant of variants) {
			const wrapper = mount(BoButton, {
				props: {
					label: 'Test',
					variant,
				},
			});

			expect(wrapper.classes().join(' ').includes(`bo-button--variant-${variant}`)).toBe(true);
		}
	});

	test('should have full width class when fullWidth is true', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Test',
				fullWidth: true,
			},
		});

		expect(wrapper.classes().includes('bo-button--full-width')).toBe(true);
	});

	test('should be disabled when isLoading is true', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Test',
				isLoading: true,
			},
		});

		expect(wrapper.attributes('disabled')).toBeDefined();
		expect(wrapper.classes().includes('bo-button--disabled')).toBe(true);
		expect(wrapper.classes().includes('bo-button--loading')).toBe(true);
	});

	test('should have loading class when isLoading is true', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Test',
				isLoading: true,
			},
		});

		expect(wrapper.classes().includes('bo-button--loading')).toBe(true);
	});

	test('should have correct tabIndex when provided', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Test',
				tabIndex: 0,
			},
		});

		expect(wrapper.attributes('tabindex')).toBe('0');
	});

	test('should have tabIndex -1 when disabled', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Test',
				disabled: true,
			},
		});

		expect(wrapper.attributes('tabindex')).toBe('-1');
	});

	test('should have tabIndex -1 when isLoading', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Test',
				isLoading: true,
			},
		});

		expect(wrapper.attributes('tabindex')).toBe('-1');
	});

	test('should not emit click when isLoading', async () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Test',
				isLoading: true,
			},
		});

		await wrapper.trigger('click');

		expect(wrapper.emitted('click')).toBeFalsy();
	});
});
