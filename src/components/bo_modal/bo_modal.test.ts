import { BoModal } from '@/components/bo_modal'
import { KeyboardUtils } from '@/utils'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { BoModalSize, BoPaddingSize } from './bo_modal'

// Mock KeyboardUtils methods
vi.mock('@/utils', () => ({
	KeyboardUtils: {
		trapTabKey: vi.fn(),
		registerEscapeKeyHandler: vi.fn((e, handler) => {
			if (e.key === 'Escape') handler()
		}),
		getFocusableElements: vi.fn().mockReturnValue([]),
	},
}))

describe('BoModal.vue', () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	afterEach(() => {
		vi.clearAllMocks()
	})

	test('should render the modal', () => {
		const wrapper = mount(BoModal)

		expect(wrapper.find('.fixed').exists()).toBe(true)
	})

	test('should emit close when close button is clicked', async () => {
		const wrapper = mount(BoModal, {
			props: {
				showClose: true,
			},
		})

		await wrapper.find('button').trigger('click')
		expect(wrapper.emitted('close')).toBeTruthy()
	})

	test('should not render close button when showClose is false', () => {
		const wrapper = mount(BoModal, {
			props: {
				showClose: false,
			},
		})

		expect(wrapper.find('button').exists()).toBe(false)
	})

	test('should display title and subtitle when provided', () => {
		const wrapper = mount(BoModal, {
			props: {
				title: 'Modal Title',
				subtitle: 'Modal Subtitle',
			},
		})

		expect(wrapper.find('h3').exists()).toBe(true)
		expect(wrapper.find('h3').text()).toBe('Modal Title')
		expect(wrapper.find('p').exists()).toBe(true)
		expect(wrapper.find('p').text()).toBe('Modal Subtitle')
	})

	test('should apply correct size class', () => {
		const sizes = [
			{ size: BoModalSize.SM, class: 'max-w-sm' },
			{ size: BoModalSize.MD, class: 'max-w-md' },
			{ size: BoModalSize.LG, class: 'max-w-lg' },
			{ size: BoModalSize.XL, class: 'max-w-xl' },
			{ size: BoModalSize.XXL, class: 'max-w-2xl' },
		]

		sizes.forEach(({ size, class: className }) => {
			const wrapper = mount(BoModal, {
				props: {
					size,
				},
			})

			expect(wrapper.find(`.${className}`).exists()).toBe(true)
		})
	})

	test('should apply correct padding class', () => {
		const paddings = [
			{ padding: BoPaddingSize.SM, class: 'p-3' },
			{ padding: BoPaddingSize.MD, class: 'p-5' },
			{ padding: BoPaddingSize.LG, class: 'p-6' },
			{ padding: BoPaddingSize.XL, class: 'p-8' },
		]

		paddings.forEach(({ padding, class: className }) => {
			const wrapper = mount(BoModal, {
				props: {
					padding,
				},
			})

			expect(wrapper.find('.relative').classes()).toContain(className)
		})
	})

	test('should apply width in pixels when widthInPx is provided', () => {
		const wrapper = mount(BoModal, {
			props: {
				widthInPx: 400,
			},
		})

		expect(wrapper.find('.relative').attributes('style')).toBe('width: 400px;')
	})

	test('should apply width in percent when widthInPercent is provided', () => {
		const wrapper = mount(BoModal, {
			props: {
				widthInPercent: 80,
			},
		})

		expect(wrapper.find('.relative').attributes('style')).toBe('width: 80%;')
	})

	test('should apply tailwind class when widthAsTailwindClass is provided', () => {
		const wrapper = mount(BoModal, {
			props: {
				widthAsTailwindClass: 'w-3/4',
			},
		})

		expect(wrapper.find('.relative').classes()).toContain('w-3/4')
	})

	test('should prioritize custom width options over size class', () => {
		const wrapper = mount(BoModal, {
			props: {
				size: BoModalSize.LG,
				widthInPx: 500,
			},
		})

		expect(wrapper.find('.relative').classes()).not.toContain('max-w-lg')
		expect(wrapper.find('.relative').attributes('style')).toBe('width: 500px;')
	})

	test('should render slots correctly', () => {
		const wrapper = mount(BoModal, {
			slots: {
				header: '<h2 class="header-content">Modal Header</h2>',
				content: '<p class="content-text">Modal Content</p>',
				footer: '<button class="footer-button">Close</button>',
			},
		})

		expect(wrapper.find('.header-content').exists()).toBe(true)
		expect(wrapper.find('.header-content').text()).toBe('Modal Header')

		expect(wrapper.find('.content-text').exists()).toBe(true)
		expect(wrapper.find('.content-text').text()).toBe('Modal Content')

		expect(wrapper.find('.footer-button').exists()).toBe(true)
		expect(wrapper.find('.footer-button').text()).toBe('Close')
	})

	test('should have proper ARIA attributes for accessibility', () => {
		const wrapper = mount(BoModal, {
			props: {
				title: 'Accessible Modal',
				subtitle: 'This modal is accessible',
			},
		})

		const modal = wrapper.find('[role="dialog"]')
		expect(modal.exists()).toBe(true)
		expect(modal.attributes('aria-modal')).toBe('true')
		expect(modal.attributes('aria-labelledby')).toBe('modal-title')
		expect(modal.attributes('aria-describedby')).toBe('modal-subtitle')

		// Check the title and subtitle elements have proper IDs
		expect(wrapper.find('#modal-title').exists()).toBe(true)
		expect(wrapper.find('#modal-subtitle').exists()).toBe(true)
	})

	test('should handle Tab key to trap focus within modal', async () => {
		const wrapper = mount(BoModal)

		// Simulate Tab key press
		await wrapper.trigger('keydown', { key: 'Tab' })

		// Verify trapTabKey was called
		expect(KeyboardUtils.trapTabKey).toHaveBeenCalled()
	})

	test('should close modal when Escape key is pressed', async () => {
		const wrapper = mount(BoModal, {
			props: {
				closable: true,
			},
		})

		// Simulate a document keydown event
		const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' })
		document.dispatchEvent(escapeEvent)

		// Verify the close event was emitted
		expect(wrapper.emitted('close')).toBeTruthy()
	})
})
