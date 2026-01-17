import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { BoLoadingSpinner } from './index';

describe('BoLoadingSpinner', () => {
	describe('Basic Rendering', () => {
		it('renders with default props', () => {
			const wrapper = mount(BoLoadingSpinner);

			expect(wrapper.find('div').exists()).toBe(true);
			expect(wrapper.find('div[role="status"]').exists()).toBe(true);
		});

		it('renders with custom id and data-testid', () => {
			const wrapper = mount(BoLoadingSpinner, {
				props: {
					id: 'custom-id',
					dataTestId: 'custom-test-id',
				},
			});

			const container = wrapper.find('div');
			expect(container.attributes('id')).toBe('custom-id');
			expect(container.attributes('data-testid')).toBe('custom-test-id');
		});

		it('renders spinner element', () => {
			const wrapper = mount(BoLoadingSpinner);

			const spinner = wrapper.find('div > div');
			expect(spinner.exists()).toBe(true);
			expect(spinner.classes()).toContain('animate-spin');
		});
	});

	describe('Sizes', () => {
		const sizes = ['xs', 'sm', 'default', 'lg', 'xl'] as const;

		sizes.forEach((size) => {
			it(`renders ${size} size correctly`, () => {
				const wrapper = mount(BoLoadingSpinner, {
					props: {
						size,
					},
				});

				const spinner = wrapper.find('div > div');
				expect(spinner.exists()).toBe(true);
				const classes = spinner.classes();
				expect(classes.some((cls) => cls.includes('size-'))).toBe(true);
			});
		});
	});

	describe('Variants', () => {
		const variants = [
			'primary',
			'secondary',
			'success',
			'warning',
			'danger',
			'white',
			'black',
			'current',
		] as const;

		variants.forEach((variant) => {
			it(`renders ${variant} variant correctly`, () => {
				const wrapper = mount(BoLoadingSpinner, {
					props: {
						variant,
					},
				});

				const spinner = wrapper.find('div > div');
				expect(spinner.exists()).toBe(true);
				const classes = spinner.classes();
				expect(classes.some((cls) => cls.includes('text-'))).toBe(true);
			});
		});
	});

	describe('Text Positioning', () => {
		const positions = ['top', 'bottom', 'before', 'after'] as const;

		positions.forEach((textPosition) => {
			it(`renders text at ${textPosition} position correctly`, () => {
				const wrapper = mount(BoLoadingSpinner, {
					props: {
						textPosition,
						loaderText: 'Loading...',
					},
				});

				const container = wrapper.find('div');
				expect(container.exists()).toBe(true);
				const classes = container.classes();
				expect(classes.some((cls) => cls.includes('flex-col') || cls.includes('flex-row'))).toBe(
					true,
				);
			});
		});
	});

	describe('Loader Text', () => {
		it('renders with loader text', () => {
			const wrapper = mount(BoLoadingSpinner, {
				props: {
					loaderText: 'Loading data...',
				},
			});

			expect(wrapper.find('bo-text').exists()).toBe(true);
			expect(wrapper.text()).toContain('Loading data...');
		});

		it('does not render text container when no text provided', () => {
			const wrapper = mount(BoLoadingSpinner);

			expect(wrapper.find('bo-text').exists()).toBe(false);
		});

		it('renders text with correct font size based on spinner size', () => {
			const wrapper = mount(BoLoadingSpinner, {
				props: {
					size: 'lg',
					loaderText: 'Loading...',
				},
			});

			const text = wrapper.find('bo-text');
			expect(text.exists()).toBe(true);
			expect(text.attributes('font-size')).toBe('default');
		});
	});

	describe('Custom Colors', () => {
		it('applies custom color correctly', () => {
			const wrapper = mount(BoLoadingSpinner, {
				props: {
					customColor: '#ff0000',
				},
			});

			const spinner = wrapper.find('div > div');
			const style = spinner.attributes('style');
			expect(style).toContain('color: rgb(255, 0, 0)');
		});

		it('applies custom color with CSS variable', () => {
			const wrapper = mount(BoLoadingSpinner, {
				props: {
					customColor: 'var(--custom-color)',
				},
			});

			const spinner = wrapper.find('div > div');
			const style = spinner.attributes('style');
			expect(style).toContain('color: var(--custom-color)');
		});
	});

	describe('Accessibility', () => {
		it('has correct default role', () => {
			const wrapper = mount(BoLoadingSpinner);

			expect(wrapper.find('div').attributes('role')).toBe('status');
		});

		it('accepts custom role', () => {
			const wrapper = mount(BoLoadingSpinner, {
				props: {
					role: 'progressbar',
				},
			});

			expect(wrapper.find('div').attributes('role')).toBe('progressbar');
		});

		it('has correct aria-label when provided', () => {
			const wrapper = mount(BoLoadingSpinner, {
				props: {
					ariaLabel: 'Loading content',
				},
			});

			expect(wrapper.find('div').attributes('aria-label')).toBe('Loading content');
		});

		it('has correct aria-live when provided', () => {
			const wrapper = mount(BoLoadingSpinner, {
				props: {
					ariaLive: 'assertive',
				},
			});

			expect(wrapper.find('div').attributes('aria-live')).toBe('assertive');
		});

		it('has correct aria-busy when provided', () => {
			const wrapper = mount(BoLoadingSpinner, {
				props: {
					ariaBusy: true,
				},
			});

			expect(wrapper.find('div').attributes('aria-busy')).toBe('true');
		});
	});

	describe('Animation', () => {
		it('has spinning animation class', () => {
			const wrapper = mount(BoLoadingSpinner);

			const spinner = wrapper.find('div > div');
			expect(spinner.classes()).toContain('animate-spin');
		});

		it('has correct border styles for spinner', () => {
			const wrapper = mount(BoLoadingSpinner);

			const spinner = wrapper.find('div > div');
			const classes = spinner.classes();
			expect(classes).toContain('rounded-full');
			expect(classes).toContain('border-2');
			expect(classes).toContain('border-current');
			expect(classes).toContain('border-t-transparent');
		});
	});

	describe('Slots', () => {
		it('renders custom content via default slot', () => {
			const wrapper = mount(BoLoadingSpinner, {
				slots: {
					default: '<span>Custom loading text</span>',
				},
			});

			expect(wrapper.html()).toContain('<span>Custom loading text</span>');
		});

		it('prioritizes slot content over loaderText prop', () => {
			const wrapper = mount(BoLoadingSpinner, {
				props: {
					loaderText: 'Prop text',
				},
				slots: {
					default: '<span>Slot text</span>',
				},
			});

			expect(wrapper.html()).toContain('<span>Slot text</span>');
			expect(wrapper.find('bo-text').exists()).toBe(false);
		});
	});

	describe('Container Classes', () => {
		it('applies correct container classes', () => {
			const wrapper = mount(BoLoadingSpinner, {
				props: {
					loaderText: 'Loading...',
				},
			});

			const container = wrapper.find('div');
			const classes = container.classes();
			expect(classes).toContain('flex');
			expect(classes).toContain('items-center');
			expect(classes).toContain('justify-center');
		});
	});
});
