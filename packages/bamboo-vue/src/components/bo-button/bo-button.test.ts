import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { BoButton } from './index';

describe('BoButton', () => {
	describe('Basic Rendering', () => {
		it('renders with default props', () => {
			const wrapper = mount(BoButton, {
				props: {
					label: 'Test Button',
				},
			});

			expect(wrapper.find('button').exists()).toBe(true);
			expect(wrapper.text()).toContain('Test Button');
			expect(wrapper.find('button').attributes('type')).toBe('button');
		});

		it('renders without label (icon only)', () => {
			const wrapper = mount(BoButton, {
				props: {
					prefixIcon: 'heart',
				},
			});

			expect(wrapper.find('button').exists()).toBe(true);
			expect(wrapper.find('bo-icon').exists()).toBe(true);
		});

		it('renders with custom id and data-testid', () => {
			const wrapper = mount(BoButton, {
				props: {
					id: 'custom-id',
					dataTestId: 'custom-test-id',
					label: 'Test',
				},
			});

			expect(wrapper.find('button').attributes('id')).toBe('custom-id');
			expect(wrapper.find('button').attributes('data-testid')).toBe('custom-test-id');
		});
	});

	describe('Variants', () => {
		const variants = [
			'primary',
			'secondary',
			'success',
			'warning',
			'destructive',
			'light',
			'dark',
		] as const;

		variants.forEach((variant) => {
			it(`renders ${variant} variant correctly`, () => {
				const wrapper = mount(BoButton, {
					props: {
						variant,
						label: 'Test Button',
					},
				});

				expect(wrapper.find('button').exists()).toBe(true);
				// The exact classes will depend on the manifest, but we can check the component renders
				expect(wrapper.find('button').classes()).toContain('inline-flex');
			});
		});
	});

	describe('Sizes', () => {
		const sizes = ['xs', 'sm', 'default', 'lg', 'xl'] as const;

		sizes.forEach((size) => {
			it(`renders ${size} size correctly`, () => {
				const wrapper = mount(BoButton, {
					props: {
						size,
						label: 'Test Button',
					},
				});

				expect(wrapper.find('button').exists()).toBe(true);
				expect(wrapper.find('button').classes()).toContain('inline-flex');
			});
		});
	});

	describe('Shapes', () => {
		const shapes = ['default', 'pill', 'outline', 'link'] as const;

		shapes.forEach((shape) => {
			it(`renders ${shape} shape correctly`, () => {
				const wrapper = mount(BoButton, {
					props: {
						shape,
						label: 'Test Button',
					},
				});

				expect(wrapper.find('button').exists()).toBe(true);
				expect(wrapper.find('button').classes()).toContain('inline-flex');
			});
		});
	});

	describe('States', () => {
		it('renders disabled state correctly', () => {
			const wrapper = mount(BoButton, {
				props: {
					disabled: true,
					label: 'Disabled Button',
				},
			});

			const button = wrapper.find('button');
			expect(button.attributes('disabled')).toBeDefined();
			expect(button.attributes('aria-disabled')).toBe('true');
			expect(button.attributes('tabindex')).toBe('-1');
		});

		it('renders loading state correctly', () => {
			const wrapper = mount(BoButton, {
				props: {
					isLoading: true,
					label: 'Loading Button',
				},
			});

			const button = wrapper.find('button');
			expect(button.attributes('disabled')).toBeDefined();
			expect(button.attributes('aria-busy')).toBe('true');
			expect(wrapper.find('bo-loading-spinner').exists()).toBe(true);
		});

		it('renders loading state with pulse loader', () => {
			const wrapper = mount(BoButton, {
				props: {
					isLoading: true,
					loaderType: 'pulse',
					label: 'Loading Button',
				},
			});

			expect(wrapper.find('bo-loading-pulse').exists()).toBe(true);
			expect(wrapper.find('bo-loading-spinner').exists()).toBe(false);
		});

		it('renders pressed state correctly', () => {
			const wrapper = mount(BoButton, {
				props: {
					pressed: true,
					label: 'Pressed Button',
				},
			});

			expect(wrapper.find('button').attributes('aria-pressed')).toBe('true');
		});
	});

	describe('Icons', () => {
		it('renders with prefix icon', () => {
			const wrapper = mount(BoButton, {
				props: {
					prefixIcon: 'heart',
					label: 'With Icon',
				},
			});

			const icons = wrapper.findAll('bo-icon');
			expect(icons.length).toBeGreaterThan(0);
		});

		it('renders with suffix icon', () => {
			const wrapper = mount(BoButton, {
				props: {
					suffixIcon: 'arrow-right',
					label: 'With Icon',
				},
			});

			const icons = wrapper.findAll('bo-icon');
			expect(icons.length).toBeGreaterThan(0);
		});

		it('renders icon-only button correctly', () => {
			const wrapper = mount(BoButton, {
				props: {
					prefixIcon: 'heart',
					'aria-label': 'Like button',
				},
			});

			expect(wrapper.find('bo-icon').exists()).toBe(true);
			expect(wrapper.find('bo-text').exists()).toBe(false);
			expect(wrapper.find('button').attributes('aria-label')).toBe('Like button');
		});
	});

	describe('Full Width', () => {
		it('renders full width button correctly', () => {
			const wrapper = mount(BoButton, {
				props: {
					fullWidth: true,
					label: 'Full Width Button',
				},
			});

			expect(wrapper.find('button').classes()).toContain('w-full');
		});
	});

	describe('Custom Colors', () => {
		it('applies custom colors correctly', () => {
			const customColor = {
				background: '#ff0000',
				border: '#ff0000',
				text: '#ffffff',
			};

			const wrapper = mount(BoButton, {
				props: {
					customColor,
					label: 'Custom Color Button',
				},
			});

			const button = wrapper.find('button');
			const style = button.attributes('style');
			expect(style).toContain('background-color: rgb(255, 0, 0)');
			expect(style).toContain('color: rgb(255, 255, 255)');
		});
	});

	describe('Events', () => {
		it('emits click event when clicked', async () => {
			const wrapper = mount(BoButton, {
				props: {
					label: 'Clickable Button',
				},
			});

			await wrapper.find('button').trigger('click');
			expect(wrapper.emitted('click')).toBeTruthy();
		});

		it('does not emit click when disabled', async () => {
			const wrapper = mount(BoButton, {
				props: {
					disabled: true,
					label: 'Disabled Button',
				},
			});

			await wrapper.find('button').trigger('click');
			expect(wrapper.emitted('click')).toBeFalsy();
		});

		it('does not emit click when loading', async () => {
			const wrapper = mount(BoButton, {
				props: {
					isLoading: true,
					label: 'Loading Button',
				},
			});

			await wrapper.find('button').trigger('click');
			expect(wrapper.emitted('click')).toBeFalsy();
		});
	});

	describe('Accessibility', () => {
		it('has correct ARIA attributes', () => {
			const wrapper = mount(BoButton, {
				props: {
					label: 'Accessible Button',
					ariaLabel: 'Custom aria label',
					ariaDescribedBy: 'description-id',
				},
			});

			const button = wrapper.find('button');
			expect(button.attributes('aria-label')).toBe('Custom aria label');
			expect(button.attributes('aria-describedby')).toBe('description-id');
		});

		it('has correct role', () => {
			const wrapper = mount(BoButton, {
				props: {
					role: 'menuitem',
					label: 'Menu Button',
				},
			});

			expect(wrapper.find('button').attributes('role')).toBe('menuitem');
		});

		it('has correct tabindex when disabled', () => {
			const wrapper = mount(BoButton, {
				props: {
					disabled: true,
					label: 'Disabled Button',
				},
			});

			expect(wrapper.find('button').attributes('tabindex')).toBe('-1');
		});
	});

	describe('Form Integration', () => {
		it('renders submit button correctly', () => {
			const wrapper = mount(BoButton, {
				props: {
					type: 'submit',
					label: 'Submit',
				},
			});

			expect(wrapper.find('button').attributes('type')).toBe('submit');
		});

		it('renders reset button correctly', () => {
			const wrapper = mount(BoButton, {
				props: {
					type: 'reset',
					label: 'Reset',
				},
			});

			expect(wrapper.find('button').attributes('type')).toBe('reset');
		});
	});

	describe('Slots', () => {
		it('renders custom content via default slot', () => {
			const wrapper = mount(BoButton, {
				slots: {
					default: '<span>Custom Content</span>',
				},
			});

			expect(wrapper.html()).toContain('<span>Custom Content</span>');
		});
	});
});
