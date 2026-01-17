import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import { BoAvatar } from './index';

describe('BoAvatar', () => {
	describe('Basic Rendering', () => {
		it('renders with default props', () => {
			const wrapper = mount(BoAvatar, {
				props: {
					data: {},
				},
			});

			expect(wrapper.find('div').exists()).toBe(true);
		});

		it('renders with custom id and data-testid', () => {
			const wrapper = mount(BoAvatar, {
				props: {
					id: 'custom-id',
					dataTestId: 'custom-test-id',
					data: {},
				},
			});

			expect(wrapper.find('div').attributes('id')).toBe('custom-id');
			expect(wrapper.find('div').attributes('data-testid')).toBe('custom-test-id');
		});
	});

	describe('Sizes', () => {
		const sizes = ['xs', 'sm', 'default', 'lg', 'xl'] as const;

		sizes.forEach((size) => {
			it(`renders ${size} size correctly`, () => {
				const wrapper = mount(BoAvatar, {
					props: {
						size,
						data: { label: 'JD' },
					},
				});

				expect(wrapper.find('div').exists()).toBe(true);
				// Check that size classes are applied
				const classes = wrapper.find('div').classes();
				expect(classes.some((cls) => cls.includes('w-') || cls.includes('h-'))).toBe(true);
			});
		});
	});

	describe('Shapes', () => {
		const shapes = [
			'circle',
			'rounded',
			'flat',
			'outline-circle',
			'outline-rounded',
			'outline-flat',
		] as const;

		shapes.forEach((shape) => {
			it(`renders ${shape} shape correctly`, () => {
				const wrapper = mount(BoAvatar, {
					props: {
						shape,
						data: { label: 'JD' },
					},
				});

				expect(wrapper.find('div').exists()).toBe(true);
				const classes = wrapper.find('div').classes();
				expect(
					classes.some(
						(cls) => cls.includes('rounded') || cls.includes('border') || cls === 'rounded-none',
					),
				).toBe(true);
			});
		});
	});

	describe('Variants', () => {
		const variants = ['primary', 'secondary', 'danger', 'warning', 'success', 'dark'] as const;

		variants.forEach((variant) => {
			it(`renders ${variant} variant correctly`, () => {
				const wrapper = mount(BoAvatar, {
					props: {
						variant,
						data: { label: 'JD' },
					},
				});

				expect(wrapper.find('div').exists()).toBe(true);
				const classes = wrapper.find('div').classes();
				expect(classes.some((cls) => cls.includes('bg-'))).toBe(true);
			});
		});
	});

	describe('Avatar Types', () => {
		it('renders initials avatar correctly', () => {
			const wrapper = mount(BoAvatar, {
				props: {
					type: 'initials',
					data: { label: 'John Doe' },
				},
			});

			expect(wrapper.find('bo-text').exists()).toBe(true);
			expect(wrapper.text()).toContain('JD'); // Should show initials
		});

		it('renders image avatar correctly', () => {
			const wrapper = mount(BoAvatar, {
				props: {
					type: 'image',
					data: {
						src: 'https://example.com/avatar.jpg',
						alt: 'User avatar',
					},
				},
			});

			const img = wrapper.find('img');
			expect(img.exists()).toBe(true);
			expect(img.attributes('src')).toBe('https://example.com/avatar.jpg');
			expect(img.attributes('alt')).toBe('User avatar');
		});

		it('renders default avatar when withDefaultImage is true', () => {
			const wrapper = mount(BoAvatar, {
				props: {
					withDefaultImage: true,
					data: {},
				},
			});

			const img = wrapper.find('img');
			expect(img.exists()).toBe(true);
			expect(img.attributes('alt')).toBe('avatar');
		});
	});

	describe('Status Indicators', () => {
		const statuses = ['online', 'offline', 'busy', 'away'] as const;

		statuses.forEach((status) => {
			it(`renders ${status} status indicator correctly`, () => {
				const wrapper = mount(BoAvatar, {
					props: {
						data: { label: 'JD' },
						indicator: {
							status,
							position: 'bottom-right',
						},
					},
				});

				const indicator = wrapper.find('.status-indicator');
				expect(indicator.exists()).toBe(true);
			});
		});

		it('does not render indicator when status is none', () => {
			const wrapper = mount(BoAvatar, {
				props: {
					data: { label: 'JD' },
					indicator: {
						status: 'none',
						position: 'bottom-right',
					},
				},
			});

			const indicator = wrapper.find('.status-indicator');
			expect(indicator.exists()).toBe(false);
		});

		const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const;

		positions.forEach((position) => {
			it(`renders indicator at ${position} position correctly`, () => {
				const wrapper = mount(BoAvatar, {
					props: {
						data: { label: 'JD' },
						indicator: {
							status: 'online',
							position,
						},
					},
				});

				const indicator = wrapper.find('.status-indicator');
				expect(indicator.exists()).toBe(true);
				const classes = indicator.classes();
				expect(
					classes.some(
						(cls) =>
							cls.includes('top') ||
							cls.includes('bottom') ||
							cls.includes('left') ||
							cls.includes('right'),
					),
				).toBe(true);
			});
		});
	});

	describe('Custom Colors', () => {
		it('applies custom background and text colors', () => {
			const wrapper = mount(BoAvatar, {
				props: {
					data: { label: 'JD' },
					color: {
						bgColor: '#ff0000',
						textColor: '#ffffff',
					},
				},
			});

			const avatar = wrapper.find('div');
			const style = avatar.attributes('style');
			expect(style).toContain('background-color: rgb(255, 0, 0)');

			const text = wrapper.find('bo-text');
			expect(text.attributes('custom-color')).toBe('#ffffff');
		});
	});

	describe('Clickable Avatar', () => {
		it('renders clickable avatar correctly', () => {
			const wrapper = mount(BoAvatar, {
				props: {
					clickable: true,
					data: { label: 'JD' },
				},
			});

			const text = wrapper.find('bo-text');
			expect(text.attributes('clickable')).toBe('true');
		});

		it('emits click event when clicked', async () => {
			const wrapper = mount(BoAvatar, {
				props: {
					clickable: true,
					data: { label: 'JD' },
				},
			});

			await wrapper.find('div').trigger('click');
			expect(wrapper.emitted('click')).toBeTruthy();
		});
	});

	describe('Image Error Handling', () => {
		it('handles image error correctly', async () => {
			const wrapper = mount(BoAvatar, {
				props: {
					type: 'image',
					withDefaultImage: true,
					data: {
						src: 'https://invalid-url.com/avatar.jpg',
						alt: 'User avatar',
					},
				},
			});

			const img = wrapper.find('img');
			expect(img.exists()).toBe(true);

			// Simulate image error
			await img.trigger('error');
			await nextTick();

			// Should still have an image element (now with default src)
			expect(wrapper.find('img').exists()).toBe(true);
		});

		it('falls back to initials when image fails and no default image', async () => {
			const wrapper = mount(BoAvatar, {
				props: {
					type: 'image',
					withDefaultImage: false,
					data: {
						src: 'https://invalid-url.com/avatar.jpg',
						label: 'John Doe',
					},
				},
			});

			const img = wrapper.find('img');
			await img.trigger('error');
			await nextTick();

			// Should show initials as fallback
			expect(wrapper.find('bo-text').exists()).toBe(true);
		});
	});

	describe('Accessibility', () => {
		it('has correct ARIA attributes', () => {
			const wrapper = mount(BoAvatar, {
				props: {
					data: { label: 'John Doe' },
					ariaLabel: 'User profile picture',
				},
			});

			const avatar = wrapper.find('div');
			expect(avatar.attributes('aria-label')).toBe('User profile picture');
		});

		it('has correct role attribute', () => {
			const wrapper = mount(BoAvatar, {
				props: {
					data: { label: 'JD' },
					role: 'img',
				},
			});

			expect(wrapper.find('div').attributes('role')).toBe('img');
		});

		it('provides meaningful alt text for images', () => {
			const wrapper = mount(BoAvatar, {
				props: {
					type: 'image',
					data: {
						src: 'https://example.com/avatar.jpg',
						alt: 'Profile picture of John Doe',
					},
				},
			});

			const img = wrapper.find('img');
			expect(img.attributes('alt')).toBe('Profile picture of John Doe');
		});
	});

	describe('Initials Generation', () => {
		it('generates correct initials from full name', () => {
			const wrapper = mount(BoAvatar, {
				props: {
					type: 'initials',
					data: { label: 'John Doe' },
				},
			});

			expect(wrapper.text()).toContain('JD');
		});

		it('generates correct initials from single name', () => {
			const wrapper = mount(BoAvatar, {
				props: {
					type: 'initials',
					data: { label: 'John' },
				},
			});

			expect(wrapper.text()).toContain('J');
		});

		it('generates correct initials from multiple names', () => {
			const wrapper = mount(BoAvatar, {
				props: {
					type: 'initials',
					data: { label: 'John Michael Doe' },
				},
			});

			expect(wrapper.text()).toContain('JD');
		});

		it('handles empty label gracefully', () => {
			const wrapper = mount(BoAvatar, {
				props: {
					type: 'initials',
					data: { label: '' },
				},
			});

			// Should not crash and should not show text
			expect(wrapper.find('bo-text').exists()).toBe(false);
		});
	});
});
