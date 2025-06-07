import { BoSize } from '@/shared/bo-size.js';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { nextTick } from 'vue';
import { BoAvatarShape, BoAvatarType, BoAvatarVariant } from './bo-avatar.js';
import BoAvatar from './bo-avatar.vue';

describe('BoAvatar', () => {
	let wrapper: ReturnType<typeof mount>;

	beforeEach(() => {
		wrapper = mount(BoAvatar, {
			props: {
				data: {
					label: 'John Doe',
				},
			},
		});
	});

	test('should render avatar container', () => {
		expect(wrapper.find('.bo-avatar').exists()).toBe(true);
	});

	test('should have correct test id', () => {
		expect(wrapper.find('[data-testid*="avatar"]').exists()).toBe(true);
	});

	test('should render with custom id', () => {
		const customWrapper = mount(BoAvatar, {
			props: {
				id: 'custom-id',
				data: { label: 'Test' },
			},
		});
		expect(customWrapper.find('[data-testid="custom-id-avatar"]').exists()).toBe(true);
	});

	test('should have correct role attribute', () => {
		const avatar = wrapper.find('[data-testid*="avatar"]');
		expect(avatar.attributes('role')).toBe('img');
	});

	test('should have correct aria-label', () => {
		const avatar = wrapper.find('[data-testid*="avatar"]');
		expect(avatar.attributes('aria-label')).toBe('Avatar for John Doe');
	});

	describe('Variants', () => {
		Object.values(BoAvatarVariant).forEach((variant) => {
			test(`should render ${variant} variant correctly`, () => {
				const variantWrapper = mount(BoAvatar, {
					props: {
						variant,
						data: { label: 'Test' },
					},
				});
				expect(variantWrapper.find(`.bo-avatar--${variant}`).exists()).toBe(true);
			});
		});
	});

	describe('Shapes', () => {
		Object.values(BoAvatarShape).forEach((shape) => {
			test(`should render ${shape} shape correctly`, () => {
				const shapeWrapper = mount(BoAvatar, {
					props: {
						shape,
						data: { label: 'Test' },
					},
				});
				const expectedClass = shape.replace(/_/g, '-');
				expect(shapeWrapper.find(`.bo-avatar--${expectedClass}`).exists()).toBe(true);
			});
		});
	});

	describe('Sizes', () => {
		Object.values(BoSize).forEach((size) => {
			test(`should render ${size} size correctly`, () => {
				const sizeWrapper = mount(BoAvatar, {
					props: {
						size,
						data: { label: 'Test' },
					},
				});
				expect(sizeWrapper.find(`.bo-avatar--${size}`).exists()).toBe(true);
			});
		});
	});

	describe('States', () => {
		test('should apply clickable styles when clickable prop is true', () => {
			const clickableWrapper = mount(BoAvatar, {
				props: {
					clickable: true,
					data: { label: 'Test' },
				},
			});
			expect(clickableWrapper.find('.cursor-pointer').exists()).toBe(true);
			expect(clickableWrapper.find('.hover\\:opacity-80').exists()).toBe(true);
			expect(clickableWrapper.find('.hover\\:scale-105').exists()).toBe(true);
		});

		test('should emit click event when clicked', async () => {
			const clickableWrapper = mount(BoAvatar, {
				props: {
					id: 'test-avatar',
					clickable: true,
					data: { label: 'Test' },
				},
			});

			await clickableWrapper.trigger('click');
			expect(clickableWrapper.emitted('click')).toHaveLength(1);
			expect(clickableWrapper.emitted('click')![0]).toEqual([{ id: 'test-avatar' }]);
		});

		test('should not emit click event when not clickable', async () => {
			await wrapper.trigger('click');
			expect(wrapper.emitted('click')).toBeUndefined();
		});
	});

	describe('Custom Colors', () => {
		test('should apply custom background color', () => {
			const colorWrapper = mount(BoAvatar, {
				props: {
					color: {
						bgColorHex: '#FF5733',
					},
					data: { label: 'Test' },
				},
			});
			const style = colorWrapper.attributes('style');
			expect(style).toMatch(/background-color:\s*rgb\(255,\s*87,\s*51\)/);
		});

		test('should apply custom text color', () => {
			const colorWrapper = mount(BoAvatar, {
				props: {
					color: {
						colorHex: '#FFFFFF',
					},
					data: { label: 'Test' },
				},
			});
			const style = colorWrapper.attributes('style');
			expect(style).toMatch(/color:\s*rgb\(255,\s*255,\s*255\)/);
		});
	});

	describe('Initials Avatar', () => {
		test('should render initials container', () => {
			const initials = wrapper.find('[data-testid*="avatar-initials"]');
			expect(initials.exists()).toBe(true);
		});

		test('should render label', () => {
			const label = wrapper.find('[data-testid*="avatar-label"]');
			expect(label.exists()).toBe(true);
		});

		test('should display correct initials', () => {
			const label = wrapper.find('[data-testid*="avatar-label"]');
			expect(label.text()).toBe('JD');
		});

		test('should handle single character label', () => {
			const singleCharWrapper = mount(BoAvatar, {
				props: {
					data: { label: 'A' },
				},
			});
			const label = singleCharWrapper.find('[data-testid*="avatar-label"]');
			expect(label.text()).toBe('A');
		});

		test('should take first letters of multiple words', () => {
			const longLabelWrapper = mount(BoAvatar, {
				props: {
					data: { label: 'Very Long Name' },
				},
			});
			const label = longLabelWrapper.find('[data-testid*="avatar-label"]');
			expect(label.text()).toBe('VL');
		});
	});

	describe('Image Avatar', () => {
		beforeEach(() => {
			vi.spyOn(console, 'error').mockImplementation(() => {});
		});

		test('should render image container when type is image', () => {
			const imageWrapper = mount(BoAvatar, {
				props: {
					type: BoAvatarType.image,
					data: {
						src: 'https://example.com/avatar.jpg',
						alt: 'User avatar',
					},
				},
			});

			const imageContainer = imageWrapper.find('[data-testid*="avatar-image-container"]');
			expect(imageContainer.exists()).toBe(true);
		});

		test('should render image with correct attributes', () => {
			const imageWrapper = mount(BoAvatar, {
				props: {
					type: BoAvatarType.image,
					data: {
						src: 'https://example.com/avatar.jpg',
						alt: 'User avatar',
					},
				},
			});

			const image = imageWrapper.find('img');
			expect(image.exists()).toBe(true);
			expect(image.attributes('src')).toBe('https://example.com/avatar.jpg');
		});

		test('should emit image-load event when image loads', async () => {
			const imageWrapper = mount(BoAvatar, {
				props: {
					id: 'test-avatar',
					type: BoAvatarType.image,
					data: {
						src: 'https://example.com/avatar.jpg',
						alt: 'User avatar',
					},
				},
			});

			const image = imageWrapper.find('img[data-testid*="avatar-image"]');
			await image.trigger('load');

			expect(imageWrapper.emitted('image-load')).toHaveLength(1);
			expect(imageWrapper.emitted('image-load')![0]).toEqual([
				{ id: 'test-avatar', src: 'https://example.com/avatar.jpg' },
			]);
		});

		test('should emit image-error event when image fails to load', async () => {
			const imageWrapper = mount(BoAvatar, {
				props: {
					id: 'test-avatar',
					type: BoAvatarType.image,
					data: {
						src: 'https://example.com/invalid.jpg',
						alt: 'User avatar',
					},
				},
			});

			const image = imageWrapper.find('img[data-testid*="avatar-image"]');
			await image.trigger('error');

			expect(imageWrapper.emitted('image-error')).toHaveLength(1);
			expect(imageWrapper.emitted('image-error')![0][0]).toHaveProperty('id', 'test-avatar');
			expect(imageWrapper.emitted('image-error')![0][0]).toHaveProperty('error');
		});

		test('should show fallback image when image fails to load', async () => {
			const imageWrapper = mount(BoAvatar, {
				props: {
					type: BoAvatarType.image,
					data: {
						src: 'https://example.com/invalid.jpg',
						alt: 'User avatar',
					},
				},
			});

			const image = imageWrapper.find('img[data-testid*="avatar-image"]');
			await image.trigger('error');
			await nextTick();

			expect(imageWrapper.find('[data-testid*="avatar-fallback"]').exists()).toBe(true);
		});
	});

	describe('Accessibility', () => {
		test('should have correct role for image avatar', () => {
			const imageWrapper = mount(BoAvatar, {
				props: {
					type: BoAvatarType.image,
					data: {
						src: 'https://example.com/avatar.jpg',
						alt: 'User avatar',
					},
				},
			});

			const avatar = imageWrapper.find('[data-testid*="avatar"]');
			expect(avatar.attributes('role')).toBe('img');
		});

		test('should have correct role for clickable avatar', () => {
			const clickableWrapper = mount(BoAvatar, {
				props: {
					clickable: true,
					data: { label: 'Test' },
				},
			});

			const avatar = clickableWrapper.find('[data-testid*="avatar"]');
			expect(avatar.attributes('role')).toBe('button');
		});

		test('should have correct aria-label for custom label', () => {
			const customLabelWrapper = mount(BoAvatar, {
				props: {
					ariaLabel: 'Custom label',
					data: { label: 'Test' },
				},
			});

			const avatar = customLabelWrapper.find('[data-testid*="avatar"]');
			expect(avatar.attributes('aria-label')).toBe('Custom label');
		});

		test('should have correct aria-describedby when provided', () => {
			const describedByWrapper = mount(BoAvatar, {
				props: {
					ariaDescribedBy: 'description-id',
					data: { label: 'Test' },
				},
			});

			const avatar = describedByWrapper.find('[data-testid*="avatar"]');
			expect(avatar.attributes('aria-describedby')).toBe('description-id');
		});
	});

	describe('BEM Classes', () => {
		test('should have base BEM classes', () => {
			expect(wrapper.find('.bo-avatar').exists()).toBe(true);
			expect(wrapper.find('.bo-avatar__fallback').exists()).toBe(false);
			expect(wrapper.find('.bo-avatar__image').exists()).toBe(false);
			expect(wrapper.find('.bo-avatar__image-content').exists()).toBe(false);
			expect(wrapper.find('.bo-avatar__initials').exists()).toBe(true);
		});

		test('should have correct BEM classes for image type', () => {
			const imageWrapper = mount(BoAvatar, {
				props: {
					type: BoAvatarType.image,
					data: {
						src: 'https://example.com/avatar.jpg',
						alt: 'User avatar',
					},
				},
			});

			expect(imageWrapper.find('.bo-avatar__image').exists()).toBe(true);
			expect(imageWrapper.find('.bo-avatar__image-content').exists()).toBe(true);
			expect(imageWrapper.find('.bo-avatar__initials').exists()).toBe(false);
		});

		test('should have correct BEM classes for fallback image', async () => {
			const imageWrapper = mount(BoAvatar, {
				props: {
					type: BoAvatarType.image,
					data: {
						src: 'https://example.com/invalid.jpg',
						alt: 'User avatar',
					},
				},
			});

			const image = imageWrapper.find('img[data-testid*="avatar-image"]');
			await image.trigger('error');
			await nextTick();

			expect(imageWrapper.find('.bo-avatar__fallback').exists()).toBe(true);
			expect(imageWrapper.find('.bo-avatar__image-content').exists()).toBe(true);
		});

		test('should have correct BEM classes for interactive states', () => {
			const clickableWrapper = mount(BoAvatar, {
				props: {
					clickable: true,
					data: { label: 'Test' },
				},
			});

			const avatar = clickableWrapper.find('.bo-avatar');
			expect(avatar.classes()).toContain('cursor-pointer');
			expect(avatar.classes()).toContain('hover:opacity-80');
			expect(avatar.classes()).toContain('hover:scale-105');
			expect(avatar.classes()).toContain('active:scale-95');
			expect(avatar.classes()).toContain('active:opacity-90');
		});

		test('should have correct BEM classes for size variants', () => {
			Object.values(BoSize).forEach((size) => {
				const sizeWrapper = mount(BoAvatar, {
					props: {
						size,
						data: { label: 'Test' },
					},
				});
				expect(sizeWrapper.find(`.bo-avatar--${size}`).exists()).toBe(true);
			});
		});

		test('should have correct BEM classes for shape variants', () => {
			Object.values(BoAvatarShape).forEach((shape) => {
				const shapeWrapper = mount(BoAvatar, {
					props: {
						shape,
						data: { label: 'Test' },
					},
				});
				const expectedClass = shape.replace(/_/g, '-');
				expect(shapeWrapper.find(`.bo-avatar--${expectedClass}`).exists()).toBe(true);
			});
		});

		test('should have correct BEM classes for variant colors', () => {
			Object.values(BoAvatarVariant).forEach((variant) => {
				const variantWrapper = mount(BoAvatar, {
					props: {
						variant,
						data: { label: 'Test' },
					},
				});
				expect(variantWrapper.find(`.bo-avatar--${variant}`).exists()).toBe(true);
			});
		});

		test('should have correct BEM classes for outline shapes', () => {
			const outlineShapes = [
				BoAvatarShape.outline_circle,
				BoAvatarShape.outline_rounded,
				BoAvatarShape.outline_flat,
			];

			outlineShapes.forEach((shape) => {
				const shapeWrapper = mount(BoAvatar, {
					props: {
						shape,
						data: { label: 'Test' },
					},
				});
				const expectedClass = shape.replace(/_/g, '-');
				expect(shapeWrapper.find(`.bo-avatar--${expectedClass}`).exists()).toBe(true);
				expect(shapeWrapper.find('.border').exists()).toBe(true);
			});
		});

		test('should have correct BEM classes for shadow variants', () => {
			const shadowWrapper = mount(BoAvatar, {
				props: {
					data: { label: 'Test' },
				},
			});
			expect(shadowWrapper.find('.shadow-md').exists()).toBe(true);
			expect(shadowWrapper.find('.bo-avatar--shadow').exists()).toBe(true);
		});
	});
});
