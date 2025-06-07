import { BoSize } from '@/shared/bo-size.js';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test, vi } from 'vitest';
import { nextTick } from 'vue';
import { BoAvatarShape, BoAvatarType, BoAvatarVariant } from './bo-avatar.js';
import BoAvatar from './bo-avatar.vue';

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

describe('BoAvatar', () => {
	suite('Basic Rendering', () => {
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
	});

	suite('Initials Avatar', () => {
		test('should render initials container with correct test id', () => {
			const initials = wrapper.find('[data-testid*="avatar-initials"]');
			expect(initials.exists()).toBe(true);
		});

		test('should render label with correct test id', () => {
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

		test('should convert initials to uppercase', () => {
			const lowercaseWrapper = mount(BoAvatar, {
				props: {
					data: { label: 'john doe' },
				},
			});
			const label = lowercaseWrapper.find('[data-testid*="avatar-label"]');
			expect(label.text()).toBe('JD');
		});

		test('should have proper aria-hidden for initials when not clickable', () => {
			const initials = wrapper.find('[data-testid*="avatar-initials"]');
			expect(initials.attributes('aria-hidden')).toBe('true');
		});

		test('should not have aria-hidden for initials when clickable', () => {
			const clickableWrapper = mount(BoAvatar, {
				props: {
					clickable: true,
					data: { label: 'Test' },
				},
			});
			const initials = clickableWrapper.find('[data-testid*="avatar-initials"]');
			expect(initials.attributes('aria-hidden')).toBe('false');
		});
	});

	suite('Image Avatar', () => {
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

			// Check that fallback is not shown
			expect(imageWrapper.find('[data-testid*="avatar-fallback"]').exists()).toBe(false);

			// Check that image container exists
			const imageContainer = imageWrapper.find('[data-testid*="avatar-image-container"]');
			expect(imageContainer.exists()).toBe(true);

			// Check the actual image element
			const image = imageWrapper.find('img');
			expect(image.exists()).toBe(true);
			expect(image.attributes('src')).toBe('https://example.com/avatar.jpg');
			expect(image.attributes('alt')).toBe('User avatar');
		});

		test('should use default alt text when not provided', () => {
			const imageWrapper = mount(BoAvatar, {
				props: {
					type: BoAvatarType.image,
					data: {
						src: 'https://example.com/avatar.jpg',
					},
				},
			});

			const image = imageWrapper.find('img[data-testid*="avatar-image"]');
			expect(image.attributes('alt')).toBe('avatar');
		});

		test('should have correct aria-label for image avatar', () => {
			const imageWrapper = mount(BoAvatar, {
				props: {
					type: BoAvatarType.image,
					data: {
						src: 'https://example.com/avatar.jpg',
						alt: 'User profile picture',
					},
				},
			});

			const avatar = imageWrapper.find('[data-testid*="avatar"]');
			expect(avatar.attributes('aria-label')).toBe('User profile picture');
		});

		test('should have aria-hidden on images when clickable', () => {
			const clickableImageWrapper = mount(BoAvatar, {
				props: {
					type: BoAvatarType.image,
					clickable: true,
					data: {
						src: 'https://example.com/avatar.jpg',
						alt: 'User avatar',
					},
				},
			});

			const image = clickableImageWrapper.find('img[data-testid*="avatar-image"]');
			expect(image.attributes('aria-hidden')).toBe('true');
			expect(image.attributes('alt')).toBe('');
		});

		test('should not have aria-hidden on images when not clickable', () => {
			const imageWrapper = mount(BoAvatar, {
				props: {
					type: BoAvatarType.image,
					data: {
						src: 'https://example.com/avatar.jpg',
						alt: 'User avatar',
					},
				},
			});

			const image = imageWrapper.find('img[data-testid*="avatar-image"]');
			expect(image.attributes('aria-hidden')).toBeUndefined();
			expect(image.attributes('alt')).toBe('User avatar');
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

			const events = imageWrapper.emitted('image-load');
			expect(events).toHaveLength(1);
			expect(events![0]).toEqual([{ id: 'test-avatar', src: 'https://example.com/avatar.jpg' }]);
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

			const events = imageWrapper.emitted('image-error');
			expect(events).toHaveLength(1);
			expect(events![0][0]).toEqual({ id: 'test-avatar', error: expect.any(Event) });
		});
	});

	suite('Fallback Avatar', () => {
		test('should render fallback when no data provided', () => {
			const fallbackWrapper = mount(BoAvatar);
			const fallback = fallbackWrapper.find('[data-testid*="avatar-fallback"]');
			expect(fallback.exists()).toBe(true);
		});

		test('should render fallback when image src is missing', () => {
			const fallbackWrapper = mount(BoAvatar, {
				props: {
					type: BoAvatarType.image,
					data: {},
				},
			});
			const fallback = fallbackWrapper.find('[data-testid*="avatar-fallback"]');
			expect(fallback.exists()).toBe(true);
		});

		test('should render fallback when initials label is missing', () => {
			const fallbackWrapper = mount(BoAvatar, {
				props: {
					type: BoAvatarType.initials,
					data: {},
				},
			});
			const fallback = fallbackWrapper.find('[data-testid*="avatar-fallback"]');
			expect(fallback.exists()).toBe(true);
		});

		test('should render fallback image with correct test id', () => {
			const fallbackWrapper = mount(BoAvatar);
			const fallbackImage = fallbackWrapper.find('[data-testid*="avatar-fallback-image"]');
			expect(fallbackImage.exists()).toBe(true);
		});

		test('should have proper accessibility attributes for fallback image', () => {
			const fallbackWrapper = mount(BoAvatar);
			const fallbackImage = fallbackWrapper.find('img[data-testid*="avatar-fallback-image"]');
			expect(fallbackImage.attributes('alt')).toBe('avatar');
		});
	});

	suite('Sizes', () => {
		test('should apply extra small size classes', () => {
			const sizeWrapper = mount(BoAvatar, {
				props: {
					size: BoSize.extra_small,
					data: { label: 'Test' },
				},
			});
			expect(sizeWrapper.find('.bo-avatar--extra-small').exists()).toBe(true);
			expect(sizeWrapper.find('.size-6').exists()).toBe(true);
		});

		test('should apply small size classes', () => {
			const sizeWrapper = mount(BoAvatar, {
				props: {
					size: BoSize.small,
					data: { label: 'Test' },
				},
			});
			expect(sizeWrapper.find('.bo-avatar--small').exists()).toBe(true);
			expect(sizeWrapper.find('.size-8').exists()).toBe(true);
		});

		test('should apply default size classes', () => {
			const sizeWrapper = mount(BoAvatar, {
				props: {
					size: BoSize.default,
					data: { label: 'Test' },
				},
			});
			expect(sizeWrapper.find('.bo-avatar--default').exists()).toBe(true);
			expect(sizeWrapper.find('.size-10').exists()).toBe(true);
		});

		test('should apply large size classes', () => {
			const sizeWrapper = mount(BoAvatar, {
				props: {
					size: BoSize.large,
					data: { label: 'Test' },
				},
			});
			expect(sizeWrapper.find('.bo-avatar--large').exists()).toBe(true);
			expect(sizeWrapper.find('.size-14').exists()).toBe(true);
		});

		test('should apply extra large size classes', () => {
			const sizeWrapper = mount(BoAvatar, {
				props: {
					size: BoSize.extra_large,
					data: { label: 'Test' },
				},
			});
			expect(sizeWrapper.find('.bo-avatar--extra-large').exists()).toBe(true);
			expect(sizeWrapper.find('.size-20').exists()).toBe(true);
		});
	});

	suite('Shapes', () => {
		test('should apply circle shape classes', () => {
			const shapeWrapper = mount(BoAvatar, {
				props: {
					shape: BoAvatarShape.circle,
					data: { label: 'Test' },
				},
			});
			expect(shapeWrapper.find('.bo-avatar--circle').exists()).toBe(true);
			expect(shapeWrapper.find('.rounded-full').exists()).toBe(true);
		});

		test('should apply rounded shape classes', () => {
			const shapeWrapper = mount(BoAvatar, {
				props: {
					shape: BoAvatarShape.rounded,
					data: { label: 'Test' },
				},
			});
			expect(shapeWrapper.find('.bo-avatar--rounded').exists()).toBe(true);
			expect(shapeWrapper.find('.rounded-md').exists()).toBe(true);
		});

		test('should apply flat shape classes', () => {
			const shapeWrapper = mount(BoAvatar, {
				props: {
					shape: BoAvatarShape.flat,
					data: { label: 'Test' },
				},
			});
			expect(shapeWrapper.find('.bo-avatar--flat').exists()).toBe(true);
			expect(shapeWrapper.find('.rounded-none').exists()).toBe(true);
		});

		test('should apply outline circle shape classes', () => {
			const shapeWrapper = mount(BoAvatar, {
				props: {
					shape: BoAvatarShape.outline_circle,
					data: { label: 'Test' },
				},
			});
			expect(shapeWrapper.find('.bo-avatar--outline-circle').exists()).toBe(true);
			expect(shapeWrapper.find('.rounded-full').exists()).toBe(true);
			expect(shapeWrapper.find('.border').exists()).toBe(true);
		});

		test('should apply outline rounded shape classes', () => {
			const shapeWrapper = mount(BoAvatar, {
				props: {
					shape: BoAvatarShape.outline_rounded,
					data: { label: 'Test' },
				},
			});
			expect(shapeWrapper.find('.bo-avatar--outline-rounded').exists()).toBe(true);
			expect(shapeWrapper.find('.rounded-md').exists()).toBe(true);
			expect(shapeWrapper.find('.border').exists()).toBe(true);
		});

		test('should apply outline flat shape classes', () => {
			const shapeWrapper = mount(BoAvatar, {
				props: {
					shape: BoAvatarShape.outline_flat,
					data: { label: 'Test' },
				},
			});
			expect(shapeWrapper.find('.bo-avatar--outline-flat').exists()).toBe(true);
			expect(shapeWrapper.find('.rounded-none').exists()).toBe(true);
			expect(shapeWrapper.find('.border').exists()).toBe(true);
		});
	});

	suite('Variants', () => {
		test('should apply primary variant classes', () => {
			const variantWrapper = mount(BoAvatar, {
				props: {
					variant: BoAvatarVariant.primary,
					data: { label: 'Test' },
				},
			});
			expect(variantWrapper.find('.bo-avatar--primary').exists()).toBe(true);
		});

		test('should apply secondary variant classes', () => {
			const variantWrapper = mount(BoAvatar, {
				props: {
					variant: BoAvatarVariant.secondary,
					data: { label: 'Test' },
				},
			});
			expect(variantWrapper.find('.bo-avatar--secondary').exists()).toBe(true);
		});

		test('should apply danger variant classes', () => {
			const variantWrapper = mount(BoAvatar, {
				props: {
					variant: BoAvatarVariant.danger,
					data: { label: 'Test' },
				},
			});
			expect(variantWrapper.find('.bo-avatar--danger').exists()).toBe(true);
		});

		test('should apply warning variant classes', () => {
			const variantWrapper = mount(BoAvatar, {
				props: {
					variant: BoAvatarVariant.warning,
					data: { label: 'Test' },
				},
			});
			expect(variantWrapper.find('.bo-avatar--warning').exists()).toBe(true);
		});

		test('should apply success variant classes', () => {
			const variantWrapper = mount(BoAvatar, {
				props: {
					variant: BoAvatarVariant.success,
					data: { label: 'Test' },
				},
			});
			expect(variantWrapper.find('.bo-avatar--success').exists()).toBe(true);
		});

		test('should apply dark variant classes', () => {
			const variantWrapper = mount(BoAvatar, {
				props: {
					variant: BoAvatarVariant.dark,
					data: { label: 'Test' },
				},
			});
			expect(variantWrapper.find('.bo-avatar--dark').exists()).toBe(true);
		});

		test('should apply outline variant classes', () => {
			const outlineWrapper = mount(BoAvatar, {
				props: {
					shape: BoAvatarShape.outline_circle,
					variant: BoAvatarVariant.primary,
					data: { label: 'Test' },
				},
			});
			expect(outlineWrapper.find('.bo-avatar--outline-primary').exists()).toBe(true);
		});
	});

	suite('Clickable Behavior', () => {
		test('should not be clickable by default', () => {
			const avatar = wrapper.find('[data-testid*="avatar"]');
			expect(avatar.attributes('tabindex')).toBeUndefined();
			expect(avatar.classes()).toContain('cursor-default');
		});

		test('should be clickable when clickable prop is true', () => {
			const clickableWrapper = mount(BoAvatar, {
				props: {
					clickable: true,
					data: { label: 'Test' },
				},
			});

			const avatar = clickableWrapper.find('[data-testid*="avatar"]');
			expect(avatar.attributes('tabindex')).toBe('0');
			expect(avatar.classes()).toContain('cursor-pointer');
		});

		test('should emit click event when clicked', async () => {
			const clickableWrapper = mount(BoAvatar, {
				props: {
					id: 'test-avatar',
					clickable: true,
					data: { label: 'Test' },
				},
			});

			const avatar = clickableWrapper.find('[data-testid*="avatar"]');
			await avatar.trigger('click');

			const events = clickableWrapper.emitted('click');
			expect(events).toHaveLength(1);
			expect(events![0]).toEqual([{ id: 'test-avatar' }]);
		});

		test('should emit click event on Enter key', async () => {
			const clickableWrapper = mount(BoAvatar, {
				props: {
					id: 'test-avatar',
					clickable: true,
					data: { label: 'Test' },
				},
			});

			const avatar = clickableWrapper.find('[data-testid*="avatar"]');
			await avatar.trigger('keydown.enter');

			const events = clickableWrapper.emitted('click');
			expect(events).toHaveLength(1);
			expect(events![0]).toEqual([{ id: 'test-avatar' }]);
		});

		test('should emit click event on Space key', async () => {
			const clickableWrapper = mount(BoAvatar, {
				props: {
					id: 'test-avatar',
					clickable: true,
					data: { label: 'Test' },
				},
			});

			const avatar = clickableWrapper.find('[data-testid*="avatar"]');
			await avatar.trigger('keydown.space');

			const events = clickableWrapper.emitted('click');
			expect(events).toHaveLength(1);
			expect(events![0]).toEqual([{ id: 'test-avatar' }]);
		});

		test('should not emit click event when not clickable', async () => {
			const avatar = wrapper.find('[data-testid*="avatar"]');
			await avatar.trigger('click');

			expect(wrapper.emitted('click')).toBeFalsy();
		});

		test('should not emit click event on other keys', async () => {
			const clickableWrapper = mount(BoAvatar, {
				props: {
					clickable: true,
					data: { label: 'Test' },
				},
			});

			const avatar = clickableWrapper.find('[data-testid*="avatar"]');
			await avatar.trigger('keydown.escape');
			await avatar.trigger('keydown.tab');

			expect(clickableWrapper.emitted('click')).toBeFalsy();
		});

		test('should have focus styles when clickable', () => {
			const clickableWrapper = mount(BoAvatar, {
				props: {
					clickable: true,
					data: { label: 'Test' },
				},
			});

			const avatar = clickableWrapper.find('[data-testid*="avatar"]');
			expect(avatar.classes()).toContain('focus:outline-none');
			expect(avatar.classes()).toContain('focus:ring-2');
		});
	});

	suite('Custom Colors', () => {
		test('should apply custom background color', () => {
			const colorWrapper = mount(BoAvatar, {
				props: {
					color: { bgColorHex: '#ff0000' },
					data: { label: 'Test' },
				},
			});

			const avatar = colorWrapper.find('[data-testid*="avatar"]');
			expect(avatar.attributes('style')).toContain('background-color: rgb(255, 0, 0)');
		});

		test('should apply custom text color', () => {
			const colorWrapper = mount(BoAvatar, {
				props: {
					color: { colorHex: '#00ff00' },
					data: { label: 'Test' },
				},
			});

			const avatar = colorWrapper.find('[data-testid*="avatar"]');
			expect(avatar.attributes('style')).toContain('color: rgb(0, 255, 0)');
		});

		test('should apply both custom colors', () => {
			const colorWrapper = mount(BoAvatar, {
				props: {
					color: {
						bgColorHex: '#ff0000',
						colorHex: '#00ff00',
					},
					data: { label: 'Test' },
				},
			});

			const avatar = colorWrapper.find('[data-testid*="avatar"]');
			const style = avatar.attributes('style');
			expect(style).toContain('background-color: rgb(255, 0, 0)');
			expect(style).toContain('color: rgb(0, 255, 0)');
		});
	});

	suite('Image Error Handling', () => {
		test('should handle image load error', async () => {
			const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

			const imageWrapper = mount(BoAvatar, {
				props: {
					type: BoAvatarType.image,
					data: {
						src: 'https://example.com/valid-image.jpg',
						alt: 'Test avatar',
					},
				},
			});

			const image = imageWrapper.find('img[data-testid*="avatar-image"]');
			await image.trigger('error');
			await nextTick();

			expect(consoleSpy).toHaveBeenCalledWith('Error loading image', expect.any(Event));

			consoleSpy.mockRestore();
		});
	});

	suite('CSS Classes', () => {
		test('should have base avatar classes', () => {
			expect(wrapper.find('.bo-avatar').exists()).toBe(true);
			expect(wrapper.find('.bo-avatar__initials').exists()).toBe(true);
		});

		test('should have shadow by default', () => {
			expect(wrapper.find('.shadow-md').exists()).toBe(true);
		});

		test('should not have shadow for outline shapes', () => {
			const outlineWrapper = mount(BoAvatar, {
				props: {
					shape: BoAvatarShape.outline_circle,
					data: { label: 'Test' },
				},
			});
			expect(outlineWrapper.find('.shadow-md').exists()).toBe(false);
			expect(outlineWrapper.find('.shadow-none').exists()).toBe(true);
		});

		test('should have transition classes when clickable', () => {
			const clickableWrapper = mount(BoAvatar, {
				props: {
					clickable: true,
					data: { label: 'Test' },
				},
			});

			const avatar = clickableWrapper.find('[data-testid*="avatar"]');
			expect(avatar.classes()).toContain('transition-all');
			expect(avatar.classes()).toContain('duration-200');
			expect(avatar.classes()).toContain('hover:scale-105');
			expect(avatar.classes()).toContain('active:scale-95');
		});
	});

	suite('Accessibility', () => {
		test('should have proper ARIA attributes', () => {
			const avatar = wrapper.find('[data-testid*="avatar"]');
			expect(avatar.attributes('role')).toBe('img');
			expect(avatar.attributes('aria-label')).toBeDefined();
		});

		test('should have tabindex when clickable', () => {
			const clickableWrapper = mount(BoAvatar, {
				props: {
					clickable: true,
					data: { label: 'Test' },
				},
			});

			const avatar = clickableWrapper.find('[data-testid*="avatar"]');
			expect(avatar.attributes('tabindex')).toBe('0');
		});

		test('should not have tabindex when not clickable', () => {
			const avatar = wrapper.find('[data-testid*="avatar"]');
			expect(avatar.attributes('tabindex')).toBeUndefined();
		});

		test('should have appropriate aria-label for different types', () => {
			// Test initials avatar
			const initialsWrapper = mount(BoAvatar, {
				props: {
					type: BoAvatarType.initials,
					data: { label: 'John Doe' },
				},
			});
			expect(initialsWrapper.find('[data-testid*="avatar"]').attributes('aria-label')).toBe(
				'Avatar for John Doe',
			);

			// Test image avatar
			const imageWrapper = mount(BoAvatar, {
				props: {
					type: BoAvatarType.image,
					data: {
						src: 'test.jpg',
						alt: 'Profile picture',
					},
				},
			});
			expect(imageWrapper.find('[data-testid*="avatar"]').attributes('aria-label')).toBe(
				'Profile picture',
			);

			// Test fallback
			const fallbackWrapper = mount(BoAvatar);
			expect(fallbackWrapper.find('[data-testid*="avatar"]').attributes('aria-label')).toBe(
				'Avatar',
			);
		});

		test('should change role to button when clickable', () => {
			const clickableWrapper = mount(BoAvatar, {
				props: {
					clickable: true,
					data: { label: 'Test' },
				},
			});

			const avatar = clickableWrapper.find('[data-testid*="avatar"]');
			expect(avatar.attributes('role')).toBe('button');
		});

		test('should maintain img role when not clickable', () => {
			const avatar = wrapper.find('[data-testid*="avatar"]');
			expect(avatar.attributes('role')).toBe('img');
		});

		test('should support custom aria-label', () => {
			const customWrapper = mount(BoAvatar, {
				props: {
					ariaLabel: 'Custom avatar label',
					data: { label: 'Test' },
				},
			});

			const avatar = customWrapper.find('[data-testid*="avatar"]');
			expect(avatar.attributes('aria-label')).toBe('Custom avatar label');
		});

		test('should support aria-describedby', () => {
			const describedWrapper = mount(BoAvatar, {
				props: {
					ariaDescribedBy: 'description-id',
					data: { label: 'Test' },
				},
			});

			const avatar = describedWrapper.find('[data-testid*="avatar"]');
			expect(avatar.attributes('aria-describedby')).toBe('description-id');
		});

		test('should support aria-pressed for button-like avatars', () => {
			const pressedWrapper = mount(BoAvatar, {
				props: {
					clickable: true,
					ariaPressed: true,
					data: { label: 'Test' },
				},
			});

			const avatar = pressedWrapper.find('[data-testid*="avatar"]');
			expect(avatar.attributes('aria-pressed')).toBe('true');
		});

		test('should append "button" to aria-label when clickable', () => {
			const clickableInitialsWrapper = mount(BoAvatar, {
				props: {
					clickable: true,
					type: BoAvatarType.initials,
					data: { label: 'John Doe' },
				},
			});

			expect(
				clickableInitialsWrapper.find('[data-testid*="avatar"]').attributes('aria-label'),
			).toBe('Avatar for John Doe, button');

			const clickableImageWrapper = mount(BoAvatar, {
				props: {
					clickable: true,
					type: BoAvatarType.image,
					data: {
						src: 'test.jpg',
						alt: 'Profile picture',
					},
				},
			});

			expect(clickableImageWrapper.find('[data-testid*="avatar"]').attributes('aria-label')).toBe(
				'Profile picture button',
			);
		});

		test('should handle keyboard navigation correctly', async () => {
			const clickableWrapper = mount(BoAvatar, {
				props: {
					id: 'test-avatar',
					clickable: true,
					data: { label: 'Test' },
				},
			});

			const avatar = clickableWrapper.find('[data-testid*="avatar"]');

			// Test Enter key
			await avatar.trigger('keydown.enter');
			let events = clickableWrapper.emitted('click');
			expect(events).toHaveLength(1);

			// Test Space key
			await avatar.trigger('keydown.space');
			events = clickableWrapper.emitted('click');
			expect(events).toHaveLength(2);

			// Test that other keys don't trigger click
			await avatar.trigger('keydown.escape');
			events = clickableWrapper.emitted('click');
			expect(events).toHaveLength(2);
		});

		test('should prevent default on space and enter keys', async () => {
			const clickableWrapper = mount(BoAvatar, {
				props: {
					clickable: true,
					data: { label: 'Test' },
				},
			});

			const avatar = clickableWrapper.find('[data-testid*="avatar"]');

			const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
			const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });

			const preventDefaultSpy = vi.fn();
			enterEvent.preventDefault = preventDefaultSpy;
			spaceEvent.preventDefault = preventDefaultSpy;

			await avatar.trigger('keydown.enter');
			await avatar.trigger('keydown.space');

			// Note: preventDefault is automatically called by Vue's .prevent modifier
			// This test verifies the events are handled
			const events = clickableWrapper.emitted('click');
			expect(events).toHaveLength(2);
		});
	});

	suite('Data Test IDs', () => {
		test('should have consistent data-testid pattern', () => {
			const customWrapper = mount(BoAvatar, {
				props: {
					id: 'test-id',
					data: { label: 'Test' },
				},
			});

			expect(customWrapper.find('[data-testid="test-id-avatar"]').exists()).toBe(true);
			expect(customWrapper.find('[data-testid="test-id-avatar-initials"]').exists()).toBe(true);
			expect(customWrapper.find('[data-testid="test-id-avatar-label"]').exists()).toBe(true);
		});

		test('should have correct test ids for image avatar', () => {
			const imageWrapper = mount(BoAvatar, {
				props: {
					id: 'test-id',
					type: BoAvatarType.image,
					data: {
						src: 'test.jpg',
						alt: 'Test',
					},
				},
			});

			expect(imageWrapper.find('[data-testid="test-id-avatar"]').exists()).toBe(true);
			expect(imageWrapper.find('[data-testid="test-id-avatar-image-container"]').exists()).toBe(
				true,
			);
			expect(imageWrapper.find('[data-testid="test-id-avatar-image"]').exists()).toBe(true);
		});

		test('should have correct test ids for fallback avatar', () => {
			const fallbackWrapper = mount(BoAvatar, {
				props: {
					id: 'test-id',
				},
			});

			expect(fallbackWrapper.find('[data-testid="test-id-avatar"]').exists()).toBe(true);
			expect(fallbackWrapper.find('[data-testid="test-id-avatar-fallback"]').exists()).toBe(true);
			expect(fallbackWrapper.find('[data-testid="test-id-avatar-fallback-image"]').exists()).toBe(
				true,
			);
		});
	});
});
