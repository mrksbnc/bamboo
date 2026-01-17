import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { BoIcon } from './index';

// Mock the icon registry and composable
vi.mock('@mrksbnc/bamboo-core', async () => {
	const actual = await vi.importActual('@mrksbnc/bamboo-core');
	return {
		...actual,
		ICON_REGISTRY: {
			heart:
				'<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
			star: '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
			circle: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>',
		},
	};
});

describe('BoIcon', () => {
	describe('Basic Rendering', () => {
		it('renders with default props', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'heart',
				},
			});

			expect(wrapper.find('i').exists()).toBe(true);
			expect(wrapper.html()).toContain('<svg');
		});

		it('renders with custom id and data-testid', () => {
			const wrapper = mount(BoIcon, {
				props: {
					id: 'custom-id',
					dataTestId: 'custom-test-id',
					icon: 'heart',
				},
			});

			const icon = wrapper.find('i');
			expect(icon.attributes('id')).toBe('custom-id');
			expect(icon.attributes('data-testid')).toBe('custom-test-id');
		});

		it('renders correct SVG content', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'heart',
				},
			});

			expect(wrapper.html()).toContain('viewBox="0 0 24 24"');
			expect(wrapper.html()).toContain('M12 21.35l-1.45-1.32C5.4');
		});

		it('falls back to circle icon when icon not found', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'nonexistent-icon',
				},
			});

			expect(wrapper.html()).toContain('<circle cx="12" cy="12" r="10"/>');
		});
	});

	describe('Sizes', () => {
		const sizes = ['xs', 'sm', 'default', 'lg', 'xl'] as const;

		sizes.forEach((size) => {
			it(`renders ${size} size correctly`, () => {
				const wrapper = mount(BoIcon, {
					props: {
						icon: 'heart',
						size,
					},
				});

				const icon = wrapper.find('i');
				const classes = icon.classes();
				expect(classes.some((cls) => cls.includes('size-'))).toBe(true);
			});
		});

		it('renders custom numeric size correctly', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'heart',
					size: 32,
				},
			});

			const icon = wrapper.find('i');
			const classes = icon.classes();
			expect(classes.some((cls) => cls.includes('size-[32px]'))).toBe(true);
		});
	});

	describe('Variants', () => {
		const variants = [
			'current',
			'inherit',
			'primary',
			'secondary',
			'success',
			'warning',
			'danger',
			'white',
			'black',
		] as const;

		variants.forEach((variant) => {
			it(`renders ${variant} variant correctly`, () => {
				const wrapper = mount(BoIcon, {
					props: {
						icon: 'heart',
						variant,
					},
				});

				const icon = wrapper.find('i');
				const classes = icon.classes();
				expect(classes.some((cls) => cls.includes('text-'))).toBe(true);
			});
		});
	});

	describe('Custom Colors', () => {
		it('applies custom color correctly', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'heart',
					customColor: '#ff0000',
				},
			});

			const icon = wrapper.find('i');
			const style = icon.attributes('style');
			expect(style).toContain('color: rgb(255, 0, 0)');
		});

		it('applies custom color with CSS variable', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'heart',
					customColor: 'var(--custom-color)',
				},
			});

			const icon = wrapper.find('i');
			const style = icon.attributes('style');
			expect(style).toContain('color: var(--custom-color)');
		});
	});

	describe('Clickable Icons', () => {
		it('renders clickable icon with pointer cursor', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'heart',
					clickable: true,
				},
			});

			const icon = wrapper.find('i');
			const classes = icon.classes();
			expect(classes).toContain('cursor-pointer');
		});

		it('emits click event when clickable icon is clicked', async () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'heart',
					clickable: true,
				},
			});

			await wrapper.find('i').trigger('click');
			expect(wrapper.emitted('click')).toBeTruthy();
		});

		it('does not emit click event when icon is not clickable', async () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'heart',
					clickable: false,
				},
			});

			await wrapper.find('i').trigger('click');
			expect(wrapper.emitted('click')).toBeFalsy();
		});
	});

	describe('Custom Cursor', () => {
		it('applies custom cursor correctly', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'heart',
					cursor: 'cursor-help',
				},
			});

			const icon = wrapper.find('i');
			const classes = icon.classes();
			expect(classes).toContain('cursor-help');
		});

		it('prioritizes custom cursor over clickable cursor', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'heart',
					clickable: true,
					cursor: 'cursor-help',
				},
			});

			const icon = wrapper.find('i');
			const classes = icon.classes();
			expect(classes).toContain('cursor-help');
			expect(classes).not.toContain('cursor-pointer');
		});
	});

	describe('Accessibility', () => {
		it('renders decorative icon correctly', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'heart',
					decorative: true,
				},
			});

			const icon = wrapper.find('i');
			expect(icon.attributes('aria-hidden')).toBe('true');
			expect(icon.attributes('aria-label')).toBeUndefined();
		});

		it('renders non-decorative icon correctly', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'heart',
					decorative: false,
				},
			});

			const icon = wrapper.find('i');
			expect(icon.attributes('aria-hidden')).toBeUndefined();
			expect(icon.attributes('aria-label')).toBe('heart');
		});

		it('uses custom title for aria-label when provided', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'heart',
					decorative: false,
					title: 'Favorite',
				},
			});

			const icon = wrapper.find('i');
			expect(icon.attributes('aria-label')).toBe('Favorite');
			expect(icon.attributes('title')).toBe('Favorite');
		});

		it('has correct role attribute', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'heart',
					role: 'button',
				},
			});

			expect(wrapper.find('i').attributes('role')).toBe('button');
		});

		it('has default img role when not specified', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'heart',
				},
			});

			expect(wrapper.find('i').attributes('role')).toBe('img');
		});
	});

	describe('Base Classes', () => {
		it('applies correct base classes', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'heart',
				},
			});

			const icon = wrapper.find('i');
			const classes = icon.classes();
			expect(classes).toContain('box-border');
			expect(classes).toContain('inline-flex');
			expect(classes).toContain('items-center');
			expect(classes).toContain('justify-center');
		});
	});

	describe('Icon Registry Integration', () => {
		it('uses icon from registry', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'star',
				},
			});

			expect(wrapper.html()).toContain('M12 2l3.09 6.26L22 9.27l-5 4.87');
		});

		it('handles missing icon gracefully', () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'missing-icon',
				},
			});

			// Should fall back to circle icon
			expect(wrapper.html()).toContain('<circle cx="12" cy="12" r="10"/>');
		});
	});

	describe('Events', () => {
		it('emits mouseenter event', async () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'heart',
				},
			});

			await wrapper.find('i').trigger('mouseenter');
			expect(wrapper.emitted('mouseenter')).toBeTruthy();
		});

		it('emits mouseleave event', async () => {
			const wrapper = mount(BoIcon, {
				props: {
					icon: 'heart',
				},
			});

			await wrapper.find('i').trigger('mouseleave');
			expect(wrapper.emitted('mouseleave')).toBeTruthy();
		});
	});
});
