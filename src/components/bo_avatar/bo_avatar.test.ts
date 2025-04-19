import {
	BoAvatar,
	BoAvatarIndicatorPosition,
	BoAvatarIndicatorStatus,
	BoAvatarShape,
	BoAvatarType,
} from '@/components/bo_avatar'
import { BoText } from '@/components/bo_text'
import { BoSize } from '@/shared'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, suite, test } from 'vitest'

describe('bo_avatar.vue', () => {
	suite('bo_avatar initials', () => {
		let initialWrapper: ReturnType<typeof mount>

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
			})
		})

		test('the avatar container should have the default classes', () => {
			expect(initialWrapper.find('.bo-avatar').classes()).contains('relative')
			expect(initialWrapper.find('.bo-avatar').classes()).contains('inline-flex')
			expect(initialWrapper.find('.bo-avatar').classes()).contains('overflow-hidden')
			expect(initialWrapper.find('.bo-avatar').classes()).contains('shadow-sm')
			expect(initialWrapper.find('.bo-avatar').classes()).contains('text-white')
		})

		test('the avatar should render the initials', () => {
			expect(initialWrapper.find('.bo-avatar__initials')).toBeTruthy()
			expect(initialWrapper.findComponent(BoText).props('text')).toBe('BO')
		})

		suite('avatar shapes', () => {
			test('the avatar should have the default shape', () => {
				expect(initialWrapper.find('.bo-avatar').classes()).toContain('rounded-md')
			})

			test('the avatar should be able to change the shape to circle', async () => {
				await initialWrapper.setProps({ shape: BoAvatarShape.circle })
				expect(initialWrapper.find('.bo-avatar').classes()).toContain('rounded-full')
			})

			test('the avatar should be able to change the shape to square', async () => {
				await initialWrapper.setProps({ shape: BoAvatarShape.flat })
				expect(initialWrapper.find('.bo-avatar').classes()).toContain('rounded-none')
			})

			test('the avatar should be able to change the shape to rounded', async () => {
				await initialWrapper.setProps({ shape: BoAvatarShape.rounded })
				expect(initialWrapper.find('.bo-avatar').classes()).toContain('rounded-md')
			})

			test('the avatar should have shadow when not outline shape', async () => {
				await initialWrapper.setProps({ shape: BoAvatarShape.rounded })
				expect(initialWrapper.find('.bo-avatar').classes()).toContain('shadow-sm')
			})

			test('the avatar should have no shadow with outline shape', async () => {
				await initialWrapper.setProps({ shape: BoAvatarShape.outline_rounded })
				expect(initialWrapper.find('.bo-avatar').classes()).not.toContain('shadow-sm')
			})
		})

		suite('avatar sizes', () => {
			test('the avatar should have the default size', () => {
				const element = initialWrapper.find('.bo-avatar')

				expect(element.classes()).toContain('w-10')
				expect(element.classes()).toContain('h-10')
			})

			test('the avatar should be able to change the size to extra small', async () => {
				await initialWrapper.setProps({ size: BoSize.extra_small })
				const element = initialWrapper.find('.bo-avatar')

				expect(element.classes()).toContain('w-6')
				expect(element.classes()).toContain('h-6')
			})

			test('the avatar should be able to change the size to small', async () => {
				await initialWrapper.setProps({ size: BoSize.small })
				const element = initialWrapper.find('.bo-avatar')

				expect(element.classes()).toContain('w-8')
				expect(element.classes()).toContain('h-8')
			})

			test('the avatar should be able to change the size to default', async () => {
				await initialWrapper.setProps({ size: BoSize.default })
				const element = initialWrapper.find('.bo-avatar')

				expect(element.classes()).toContain('w-10')
				expect(element.classes()).toContain('h-10')
			})

			test('the avatar should be able to change the size to large', async () => {
				await initialWrapper.setProps({ size: BoSize.large })
				const element = initialWrapper.find('.bo-avatar')

				expect(element.classes()).toContain('w-20')
				expect(element.classes()).toContain('h-20')
			})

			test('the avatar should be able to change the size to extra large', async () => {
				await initialWrapper.setProps({ size: BoSize.extra_large })
				const element = initialWrapper.find('.bo-avatar')

				expect(element.classes()).toContain('w-36')
				expect(element.classes()).toContain('h-36')
			})
		})

		suite('avatar colors', () => {
			test('the avatar should have a random default background color if no custom one is provided', async () => {
				await initialWrapper.setProps({ colorHex: undefined })
				expect(initialWrapper.find('.bo-avatar').classes().join('')).includes('bg-')
			})

			test('the avatar should be able to set a custom background color in hex format', async () => {
				const colorHex = '#123456'
				await initialWrapper.setProps({ colorHex })

				const element = initialWrapper.find('.bo-avatar')

				expect(element.attributes('style')).toContain('background-color: rgb(18, 52, 86)')
			})

			test('the avatar should be able to change the font color in hex format', async () => {
				const fontColorHex = '#123456'
				await initialWrapper.setProps({ colorHex: '#ffffff', fontColorHex })

				const element = initialWrapper.find('.bo-avatar')

				expect(element.attributes('style')).toContain('color: rgb(18, 52, 86)')
			})
		})

		suite('avatar clickable', () => {
			test('the avatar should be able to make the avatar clickable', async () => {
				await initialWrapper.setProps({ clickable: true })
				expect(initialWrapper.find('.bo-avatar').classes()).toContain('cursor-pointer')
			})

			test('in case the avatar is not clickable, it should have the default cursor', async () => {
				await initialWrapper.setProps({ clickable: false })
				expect(initialWrapper.find('.bo-avatar').classes()).toContain('cursor-default')
			})
		})

		suite('avatar indicator', () => {
			test('the avatar should not display an indicator by default', () => {
				expect(initialWrapper.find('.absolute.rounded-full').exists()).toBe(false)
			})

			test('the avatar should display an indicator when withIndicator is true', async () => {
				await initialWrapper.setProps({
					withIndicator: true,
					indicatorStatus: BoAvatarIndicatorStatus.online,
				})

				expect(initialWrapper.find('.absolute.rounded-full').exists()).toBe(true)
			})

			test('the indicator should have the online status class', async () => {
				await initialWrapper.setProps({
					withIndicator: true,
					indicatorStatus: BoAvatarIndicatorStatus.online,
				})

				const indicator = initialWrapper.find('.absolute.rounded-full')
				expect(indicator.classes()).toContain('bg-green-500')
			})

			test('the indicator should have the offline status class', async () => {
				await initialWrapper.setProps({
					withIndicator: true,
					indicatorStatus: BoAvatarIndicatorStatus.offline,
				})

				const indicator = initialWrapper.find('.absolute.rounded-full')
				expect(indicator.classes()).toContain('bg-gray-400')
			})

			test('the indicator should have the busy status class', async () => {
				await initialWrapper.setProps({
					withIndicator: true,
					indicatorStatus: BoAvatarIndicatorStatus.busy,
				})

				const indicator = initialWrapper.find('.absolute.rounded-full')
				expect(indicator.classes()).toContain('bg-red-500')
			})

			test('the indicator should have the away status class', async () => {
				await initialWrapper.setProps({
					withIndicator: true,
					indicatorStatus: BoAvatarIndicatorStatus.away,
				})

				const indicator = initialWrapper.find('.absolute.rounded-full')
				expect(indicator.classes()).toContain('bg-yellow-500')
			})

			test('the indicator should be positioned at the bottom right by default', async () => {
				await initialWrapper.setProps({
					withIndicator: true,
					indicatorStatus: BoAvatarIndicatorStatus.online,
				})

				const indicator = initialWrapper.find('.absolute.rounded-full')
				expect(indicator.classes()).toContain('bottom-0')
				expect(indicator.classes()).toContain('right-0')
			})

			test('the indicator should change position to top left', async () => {
				await initialWrapper.setProps({
					withIndicator: true,
					indicatorStatus: BoAvatarIndicatorStatus.online,
					indicatorPosition: BoAvatarIndicatorPosition.topLeft,
				})

				const indicator = initialWrapper.find('.absolute.rounded-full')
				expect(indicator.classes()).toContain('top-0')
				expect(indicator.classes()).toContain('left-0')
			})

			test('the indicator should change position to top right', async () => {
				await initialWrapper.setProps({
					withIndicator: true,
					indicatorStatus: BoAvatarIndicatorStatus.online,
					indicatorPosition: BoAvatarIndicatorPosition.topRight,
				})

				const indicator = initialWrapper.find('.absolute.rounded-full')
				expect(indicator.classes()).toContain('top-0')
				expect(indicator.classes()).toContain('right-0')
			})

			test('the indicator should change position to bottom left', async () => {
				await initialWrapper.setProps({
					withIndicator: true,
					indicatorStatus: BoAvatarIndicatorStatus.online,
					indicatorPosition: BoAvatarIndicatorPosition.bottomLeft,
				})

				const indicator = initialWrapper.find('.absolute.rounded-full')
				expect(indicator.classes()).toContain('bottom-0')
				expect(indicator.classes()).toContain('left-0')
			})

			test('the indicator size should change based on avatar size', async () => {
				await initialWrapper.setProps({
					withIndicator: true,
					indicatorStatus: BoAvatarIndicatorStatus.online,
					size: BoSize.small,
				})

				const indicator = initialWrapper.find('.absolute.rounded-full')
				expect(indicator.classes()).toContain('w-2')
				expect(indicator.classes()).toContain('h-2')
			})
		})
	})

	suite('bo_avatar image', () => {
		let imageWrapper: ReturnType<typeof mount>

		beforeEach(() => {
			imageWrapper = mount(BoAvatar, {
				props: {
					type: BoAvatarType.image,
					data: {
						src: 'https://example.com/image.jpg',
						alt: 'avatar',
					},
				},
			})
		})

		suite('avatar with default image', () => {
			test('the avatar should render the default image', async () => {
				await imageWrapper.setProps({ withDefaultImage: true })

				const element = imageWrapper.find('.bo-avatar__default')
				expect(element.exists()).toBe(true)
			})

			test('the avatar should not render this image if the prop is set to false', async () => {
				await imageWrapper.setProps({ withDefaultImage: false })

				const element = imageWrapper.find('.bo-avatar__default')
				expect(element.exists()).toBe(false)
			})
		})

		suite('avatar with image from src', () => {
			test('the avatar should render the image', async () => {
				await imageWrapper.setProps({
					data: { src: 'https://example.com/image.jpg', alt: 'avatar' },
				})
				expect(imageWrapper.find('img')).toBeTruthy()
			})

			test('the avatar should have the alt text added to the image', async () => {
				await imageWrapper.setProps({
					data: { src: 'https://example.com/image.jpg', alt: 'avatar' },
				})
				expect(imageWrapper.find('img').attributes('alt')).toBe('avatar')
			})

			test('the avatar should have the src of the image added to the image', async () => {
				await imageWrapper.setProps({
					data: { src: 'https://example.com/image.jpg', alt: 'avatar' },
					type: BoAvatarType.image,
				})

				expect(imageWrapper.find('img').attributes('src')).toBe('https://example.com/image.jpg')
			})

			suite('avatar image sizes', () => {
				test('the avatar should have the default size', () => {
					const element = imageWrapper.find('.bo-avatar')

					expect(element.classes()).toContain('w-10')
					expect(element.classes()).toContain('h-10')
				})

				test('the avatar should be able to change the size to extra small', async () => {
					await imageWrapper.setProps({ size: BoSize.extra_small })
					const element = imageWrapper.find('.bo-avatar')

					expect(element.classes()).toContain('w-6')
					expect(element.classes()).toContain('h-6')
				})

				test('the avatar should be able to change the size to small', async () => {
					await imageWrapper.setProps({ size: BoSize.small })
					const element = imageWrapper.find('.bo-avatar')

					expect(element.classes()).toContain('w-8')
					expect(element.classes()).toContain('h-8')
				})

				test('the avatar should be able to change the size to default', async () => {
					await imageWrapper.setProps({ size: BoSize.default })
					const element = imageWrapper.find('.bo-avatar')

					expect(element.classes()).toContain('w-10')
					expect(element.classes()).toContain('h-10')
				})

				test('the avatar should be able to change the size to large', async () => {
					await imageWrapper.setProps({ size: BoSize.large })
					const element = imageWrapper.find('.bo-avatar')

					expect(element.classes()).toContain('w-20')
					expect(element.classes()).toContain('h-20')
				})

				test('the avatar should be able to change the size to extra large', async () => {
					await imageWrapper.setProps({ size: BoSize.extra_large })
					const element = imageWrapper.find('.bo-avatar')

					expect(element.classes()).toContain('w-36')
					expect(element.classes()).toContain('h-36')
				})
			})

			suite('avatar image shapes', () => {
				test('the avatar should have the default shape', () => {
					expect(imageWrapper.find('.bo-avatar').classes()).toContain('rounded-md')
				})

				test('the avatar should be able to change the shape to circle', async () => {
					await imageWrapper.setProps({ shape: BoAvatarShape.circle })
					expect(imageWrapper.find('.bo-avatar').classes()).toContain('rounded-full')
				})

				test('the avatar should be able to change the shape to flat', async () => {
					await imageWrapper.setProps({ shape: BoAvatarShape.flat })
					expect(imageWrapper.find('.bo-avatar').classes()).toContain('rounded-none')
				})
			})
		})
	})
})
