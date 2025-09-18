import { describe, expect, vi, test } from 'vitest'
import { mount } from '@vue/test-utils'
import BoIcon from './bo-icon.vue'
import { Icon, BoIconVariant } from './bo-icon'

describe('BoIcon', () => {
	test('should render with required props', () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.check,
			},
		})

		expect(wrapper.findComponent(BoIcon).exists()).toBe(true)
	})

	test('should render with all props', async () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.activity,
				size: 32,
				variant: BoIconVariant.primary,
				customCssClass: 'my-custom-class',
				cursor: 'pointer',
				title: 'My Icon',
				role: 'button',
				decorative: true,
				customColor: '#ff0000',
			},
		})

		// Wait for the SVG to load
		await wrapper.vm.$nextTick()
		await new Promise((resolve) => setTimeout(resolve, 100))

		expect(wrapper.find('i').exists()).toBe(true)
		expect(wrapper.classes().join(' ').includes('bo-icon__size--32')).toBe(true)
		expect(wrapper.classes().join(' ').includes('bo-icon__variant--primary')).toBe(true)
		expect(wrapper.classes().join(' ').includes('my-custom-class')).toBe(true)
		expect(wrapper.attributes('style')).toContain('color: rgb(255, 0, 0)')
		expect(wrapper.attributes('style')).toContain('cursor: pointer')
		expect(wrapper.attributes('aria-label')).toBe('My Icon')
		expect(wrapper.attributes('role')).toBe('button')
		expect(wrapper.attributes('aria-hidden')).toBe('true')
	})

	test('should apply custom color for valid hex colors', () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.activity,
				customColor: '#ff0000',
			},
		})

		expect(wrapper.attributes('style')).toContain('color: rgb(255, 0, 0)')
	})

	test('should apply custom color for CSS variables', () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.activity,
				customColor: '--my-color',
			},
		})

		expect(wrapper.attributes('style')).toContain('color: var(--my-color)')
	})

	test('should apply custom color for var() wrapped variables', () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.activity,
				customColor: 'var(--my-color)',
			},
		})

		expect(wrapper.attributes('style')).toContain('color: var(--my-color)')
	})

	test('should apply custom color for rgb colors', () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.activity,
				customColor: 'rgb(255, 0, 0)',
			},
		})

		expect(wrapper.attributes('style')).toContain('color: rgb(255, 0, 0)')
	})

	test('should apply custom color for rgba colors', () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.activity,
				customColor: 'rgba(255, 0, 0, 0.5)',
			},
		})

		expect(wrapper.attributes('style')).toContain('color: rgba(255, 0, 0, 0.5)')
	})

	test('should apply custom color for oklch colors', () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.activity,
				customColor: 'oklch(0.7 0.15 180)',
			},
		})

		expect(wrapper.attributes('style')).toContain('color: oklch(0.7 0.15 180)')
	})

	test('should handle 6-character hex without #', () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.activity,
				customColor: 'ff0000',
			},
		})

		expect(wrapper.attributes('style')).toContain('color: rgb(255, 0, 0);')
	})

	test('should print a warning if the custom color cannot be parsed', () => {
		const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.activity,
				customColor: 'invalid-color',
			},
		})

		expect(wrapper.attributes('style')).not.toContain('color: invalid-color')
		expect(consoleWarnSpy).toHaveBeenCalledWith(
			expect.stringContaining('The custom color "invalid-color" is not a valid color definition'),
		)

		consoleWarnSpy.mockRestore()
	})

	test('should apply correct classes for all icon variants', () => {
		const variants = [
			BoIconVariant.default,
			BoIconVariant.primary,
			BoIconVariant.secondary,
			BoIconVariant.success,
			BoIconVariant.warning,
			BoIconVariant.danger,
			BoIconVariant.light,
			BoIconVariant.dark,
		]

		for (const variant of variants) {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.activity,
					variant,
				},
			})

			expect(wrapper.classes().join(' ').includes(`bo-icon__variant--${variant}`)).toBe(true)
		}
	})

	test('should apply correct size', () => {
		const sizes = [16, 24, 32, 48, 64, 96, 128, 256]

		for (const size of sizes) {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.activity,
					size,
				},
			})

			expect(wrapper.classes().join(' ').includes(`bo-icon__size--${size}`)).toBe(true)
		}
	})

	test('if the icon is decorative, it should not have an aria-hidden attribute', () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.activity,
				decorative: true,
			},
		})

		expect(wrapper.attributes('aria-hidden')).toBeTruthy()
	})

	test('if the icon is not decorative, it should have an aria-hidden attribute', () => {
		const wrapper = mount(BoIcon, {
			props: {
				icon: Icon.activity,
				decorative: false,
			},
		})

		expect(wrapper.attributes('aria-hidden')).toBe(undefined)
	})

	test('should apply the correct role', () => {
		const roles = ['img', 'button', 'link']

		for (const role of roles) {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.activity,
					role,
				},
			})

			expect(wrapper.attributes('role')).toBe(role)
		}

		const wrapper2 = mount(BoIcon, {
			props: {
				icon: Icon.activity,
			},
		})

		expect(wrapper2.attributes('role')).toBe('img')
	})

	test('should apply the proper cursor style', () => {
		const cursors = ['pointer', 'default', 'grab', 'grabbing', 'zoom-in', 'zoom-out']

		for (const cursor of cursors) {
			const wrapper = mount(BoIcon, {
				props: {
					icon: Icon.activity,
					cursor,
				},
			})

			expect(wrapper.attributes('style')).toContain(`cursor: ${cursor}`)
		}

		const wrapper2 = mount(BoIcon, {
			props: {
				icon: Icon.activity,
			},
		})

		expect(wrapper2.attributes('style')).toContain('cursor: default')
	})
})
