import { describe, expect, test } from 'vitest';
import BoLink from './bo-link.vue';
import { mount } from '@vue/test-utils';
import { BoSize } from '@/shared/size';
import { BoVariant } from '@/shared/variant';

describe('BoLink', () => {
	test('should render with required props', () => {
		const wrapper = mount(BoLink, {
			props: {
				href: 'https://example.com',
				label: 'Click me',
			},
		});

		expect(wrapper.text()).toBe('Click me');
		expect(wrapper.element.tagName).toBe('A');
		expect(wrapper.attributes('href')).toBe('https://example.com');
	});

	test('should render with slot content', () => {
		const wrapper = mount(BoLink, {
			props: {
				href: 'https://example.com',
			},
			slots: {
				default: 'Slot content',
			},
		});

		expect(wrapper.text()).toBe('Slot content');
	});

	test('should apply correct classes for all sizes', () => {
		const sizes = [BoSize.xs, BoSize.sm, BoSize.md, BoSize.lg, BoSize.xl];

		for (const size of sizes) {
			const wrapper = mount(BoLink, {
				props: {
					href: 'https://example.com',
					label: 'Test',
					size,
				},
			});

			expect(wrapper.classes().join(' ').includes(`bo-link--size-${size}`)).toBe(true);
		}
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
			const wrapper = mount(BoLink, {
				props: {
					href: 'https://example.com',
					label: 'Test',
					variant,
				},
			});

			expect(wrapper.classes().join(' ').includes(`bo-link--variant-${variant}`)).toBe(true);
		}
	});

	test('should emit click event when clicked', async () => {
		const wrapper = mount(BoLink, {
			props: {
				href: 'https://example.com',
				label: 'Test',
			},
		});

		await wrapper.trigger('click');

		expect(wrapper.emitted('click')).toBeTruthy();
		expect(wrapper.emitted('click')?.length).toBe(1);
	});

	test('should have correct target attribute', () => {
		const targets = ['_blank', '_self', '_parent', '_top'] as const;

		for (const target of targets) {
			const wrapper = mount(BoLink, {
				props: {
					href: 'https://example.com',
					label: 'Test',
					target,
				},
			});

			expect(wrapper.attributes('target')).toBe(target);
		}
	});

	test('should default to _self target', () => {
		const wrapper = mount(BoLink, {
			props: {
				href: 'https://example.com',
				label: 'Test',
			},
		});

		expect(wrapper.attributes('target')).toBe('_self');
	});

	test('should add noopener noreferrer rel when target is _blank', () => {
		const wrapper = mount(BoLink, {
			props: {
				href: 'https://example.com',
				label: 'Test',
				target: '_blank',
			},
		});

		expect(wrapper.attributes('rel')).toBe('noopener noreferrer');
	});

	test('should use custom rel when provided', () => {
		const wrapper = mount(BoLink, {
			props: {
				href: 'https://example.com',
				label: 'Test',
				target: '_blank',
				rel: 'custom-rel',
			},
		});

		expect(wrapper.attributes('rel')).toBe('custom-rel');
	});

	test('should apply custom CSS class', () => {
		const wrapper = mount(BoLink, {
			props: {
				href: 'https://example.com',
				label: 'Test',
				customCssClass: 'my-custom-class',
			},
		});

		expect(wrapper.classes().includes('my-custom-class')).toBe(true);
	});

	test('should have aria-label when provided', () => {
		const wrapper = mount(BoLink, {
			props: {
				href: 'https://example.com',
				label: 'Test',
				ariaLabel: 'Accessible label',
			},
		});

		expect(wrapper.attributes('aria-label')).toBe('Accessible label');
	});

	test('should have data-testid', () => {
		const wrapper = mount(BoLink, {
			props: {
				href: 'https://example.com',
				label: 'Test',
			},
		});

		expect(wrapper.attributes('data-testid')).toBeDefined();
		expect(wrapper.attributes('data-testid')).toContain('bo-link');
	});

	test('should have custom data-testid when provided', () => {
		const wrapper = mount(BoLink, {
			props: {
				href: 'https://example.com',
				label: 'Test',
				dataTestId: 'custom-test-id',
			},
		});

		expect(wrapper.attributes('data-testid')).toBe('custom-test-id');
	});
});
