import { BoAvatar, BoAvatarShape, BoAvatarType } from '@/components/bo_avatar';
import { BoText } from '@/components/bo_text';
import { BoSize } from '@/shared';
import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, suite, test } from 'vitest';

describe('bo_avatar.vue', () => {
	suite('bo_avatar initials', () => {
		let initialWrapper: ReturnType<typeof mount>;

		beforeEach(() => {
			initialWrapper = mount(BoAvatar, {
				props: {
					type: BoAvatarType.initials,
					data: {
						label: 'BO',
						alt: 'avatar',
					},
					shape: BoAvatarShape.rounded,
					size: BoSize.default,
					colorHex: undefined,
					fontColorHex: undefined,
					clickable: false,
					withDefaultImage: false,
				},
			});
		});

		test('the avatar container should have the default classes', () => {
			expect(initialWrapper.find('.bo-avatar').classes()).contains('flex');
			expect(initialWrapper.find('.bo-avatar').classes()).contains('items-center');
			expect(initialWrapper.find('.bo-avatar').classes()).contains('justify-center');
			expect(initialWrapper.find('.bo-avatar').classes()).contains('overflow-hidden');
			expect(initialWrapper.find('.bo-avatar').classes()).contains('shadow-sm');
			expect(initialWrapper.find('.bo-avatar').classes()).contains('text-white');
		});

		test('the avatar should render the initials', () => {
			expect(initialWrapper.find('span')).toBeTruthy();
			expect(initialWrapper.find('span').text()).toBe('BO');
		});

		test('the avatar should have alt text added to the initials', () => {
			expect(initialWrapper.find('.bo-avatar__initials').find('span').attributes('alt')).toBe(
				'avatar',
			);
		});

		suite('avatar shapes', () => {
			test('the avatar should have the default shape', () => {
				expect(initialWrapper.find('.bo-avatar').classes()).toContain('rounded-lg');
			});

			test('the avatar should be able to change the shape to circle', async () => {
				await initialWrapper.setProps({ shape: BoAvatarShape.circle });
				expect(initialWrapper.find('.bo-avatar').classes()).toContain('rounded-full');
			});

			test('the avatar should be able to change the shape to square', async () => {
				await initialWrapper.setProps({ shape: BoAvatarShape.square });
				expect(initialWrapper.find('.bo-avatar').classes()).toContain('rounded-none');
			});

			test('the avatar should be able to change the shape to rounded', async () => {
				await initialWrapper.setProps({ shape: BoAvatarShape.rounded });
				expect(initialWrapper.find('.bo-avatar').classes()).toContain('rounded-lg');
			});
		});

		suite('avatar sizes', () => {
			test('the avatar should have the default size', () => {
				const element = initialWrapper.find('.bo-avatar');

				expect(element.classes()).toContain('h-[42px]');
				expect(element.classes()).toContain('w-[42px]');
			});

			test('the avatar should be able to change the size to extra small', async () => {
				await initialWrapper.setProps({ size: BoSize.extra_small });
				const element = initialWrapper.find('.bo-avatar');

				expect(element.classes()).toContain('h-[24px]');
				expect(element.classes()).toContain('w-[24px]');
			});

			test('the avatar should be able to change the size to small', async () => {
				await initialWrapper.setProps({ size: BoSize.small });
				const element = initialWrapper.find('.bo-avatar');

				expect(element.classes()).toContain('h-[32px]');
				expect(element.classes()).toContain('w-[32px]');
			});

			test('the avatar should be able to change the size to default', async () => {
				await initialWrapper.setProps({ size: BoSize.default });
				const element = initialWrapper.find('.bo-avatar');

				expect(element.classes()).toContain('h-[42px]');
				expect(element.classes()).toContain('w-[42px]');
			});

			test('the avatar should be able to change the size to large', async () => {
				await initialWrapper.setProps({ size: BoSize.large });
				const element = initialWrapper.find('.bo-avatar');

				expect(element.classes()).toContain('h-[50px]');
				expect(element.classes()).toContain('w-[50px]');
			});

			test('the avatar should be able to change the size to extra large', async () => {
				await initialWrapper.setProps({ size: BoSize.extra_large });
				const element = initialWrapper.find('.bo-avatar');

				expect(element.classes()).toContain('h-[60px]');
				expect(element.classes()).toContain('w-[60px]');
			});
		});

		suite('avatar colors', () => {
			test('the avatar should have a random default background color if no cusotom one is provided', async () => {
				await initialWrapper.setProps({ colorHex: undefined });
				expect(initialWrapper.find('.bo-avatar').classes().join('')).includes('bg-');
			});

			test('the avatar should be able to set a custom background color in hex format', async () => {
				const colorHex = '#123456';
				await initialWrapper.setProps({ colorHex });

				const element = initialWrapper.find('.bo-avatar');

				expect(element.attributes('style')).toBe('background-color: rgb(18, 52, 86);');
			});

			test('the avatar should be able to change the font color in hex format', async () => {
				const fontColorHex = '#123456';
				await initialWrapper.setProps({ fontColorHex });

				const element = initialWrapper.findComponent(BoText);

				expect(element.attributes('style')).toBe('color: rgb(18, 52, 86);');
			});
		});

		suite('avatar clickable', () => {
			test('the avatar should be able to make the avatar clickable', async () => {
				await initialWrapper.setProps({ clickable: true });
				expect(initialWrapper.find('.bo-avatar').classes()).toContain('cursor-pointer');
			});

			test('in case the avatar is not clickable, it should have the default cursor', async () => {
				await initialWrapper.setProps({ clickable: false });
				expect(initialWrapper.find('.bo-avatar').classes()).toContain('cursor-default');
			});
		});
	});

	suite('bo_avatar image', () => {
		let imageWrapper: ReturnType<typeof mount>;

		beforeEach(() => {
			imageWrapper = mount(BoAvatar, {
				props: {
					type: BoAvatarType.image,
					data: {
						src: 'https://example.com/image.jpg',
						alt: 'avatar',
					},
				},
			});
		});

		suite('avatar with default image', () => {
			test('the avatar should render the default image', async () => {
				await imageWrapper.setProps({ withDefaultImage: true });

				const element = imageWrapper.find('.bo-avatar__default');
				expect(element.exists()).toBe(true);
			});

			test('the avatar should not render this image if the prop is set to false', async () => {
				await imageWrapper.setProps({ withDefaultImage: false });

				const element = imageWrapper.find('.bo-avatar__default');
				expect(element.exists()).toBe(false);
			});
		});

		suite('avatar with image from src', () => {
			test('the avatar should render the image', async () => {
				await imageWrapper.setProps({
					data: { src: 'https://example.com/image.jpg', alt: 'avatar' },
				});
				expect(imageWrapper.find('.bo-avatar__image')).toBeTruthy();
			});

			test('the avatar should have the alt text added to the image', async () => {
				await imageWrapper.setProps({
					data: { src: 'https://example.com/image.jpg', alt: 'avatar' },
				});
				expect(imageWrapper.find('.bo-avatar__image').attributes('alt')).toBe('avatar');
			});

			test('the avatar should have the src of the image added to the image', async () => {
				await imageWrapper.setProps({
					data: { src: 'https://example.com/image.jpg', alt: 'avatar' },
					type: BoAvatarType.image,
				});

				expect(imageWrapper.find('.bo-avatar__image').attributes('src')).toBe(
					'https://example.com/image.jpg',
				);
			});

			suite('avatar image sizes', () => {
				test('the avatar should have the default size', () => {
					const element = imageWrapper.find('.bo-avatar');

					expect(element.classes()).toContain('h-[42px]');
					expect(element.classes()).toContain('w-[42px]');
				});

				test('the avatar should be able to change the size to extra small', async () => {
					await imageWrapper.setProps({ size: BoSize.extra_small });
					const element = imageWrapper.find('.bo-avatar');

					expect(element.classes()).toContain('h-[24px]');
					expect(element.classes()).toContain('w-[24px]');
				});

				test('the avatar should be able to change the size to small', async () => {
					await imageWrapper.setProps({ size: BoSize.small });
					const element = imageWrapper.find('.bo-avatar');

					expect(element.classes()).toContain('h-[32px]');
					expect(element.classes()).toContain('w-[32px]');
				});

				test('the avatar should be able to change the size to default', async () => {
					await imageWrapper.setProps({ size: BoSize.default });
					const element = imageWrapper.find('.bo-avatar');

					expect(element.classes()).toContain('h-[42px]');
					expect(element.classes()).toContain('w-[42px]');
				});

				test('the avatar should be able to change the size to large', async () => {
					await imageWrapper.setProps({ size: BoSize.large });
					const element = imageWrapper.find('.bo-avatar');

					expect(element.classes()).toContain('h-[50px]');
					expect(element.classes()).toContain('w-[50px]');
				});

				test('the avatar should be able to change the size to extra large', async () => {
					await imageWrapper.setProps({ size: BoSize.extra_large });
					const element = imageWrapper.find('.bo-avatar');

					expect(element.classes()).toContain('h-[60px]');
					expect(element.classes()).toContain('w-[60px]');
				});
			});

			suite('avatar image shapes', () => {
				test('the avatar should have the default shape', () => {
					expect(imageWrapper.find('.bo-avatar').classes()).toContain('rounded-lg');
				});

				test('the avatar should be able to change the shape to circle', async () => {
					await imageWrapper.setProps({ shape: BoAvatarShape.circle });
					expect(imageWrapper.find('.bo-avatar').classes()).toContain('rounded-full');
				});

				test('the avatar should be able to change the shape to square', async () => {
					await imageWrapper.setProps({ shape: BoAvatarShape.square });
					expect(imageWrapper.find('.bo-avatar').classes()).toContain('rounded-none');
				});

				test('the avatar should be able to change the shape to rounded', async () => {
					await imageWrapper.setProps({ shape: BoAvatarShape.rounded });
					expect(imageWrapper.find('.bo-avatar').classes()).toContain('rounded-lg');
				});
			});
		});
	});
});
