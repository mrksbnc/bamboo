import { BoModal } from '@/components/bo_modal'
import { AccessibilityUtils } from '@/utils'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, suite, test, vi } from 'vitest'

let wrapper: ReturnType<typeof mount>

// Mock AccessibilityUtils
vi.mock('@/utils', () => ({
	AccessibilityUtils: {
		generateAccessibleId: vi.fn().mockReturnValue('mock-id'),
		announceToScreenReader: vi.fn(),
	},
	KeyboardUtils: {
		trapTabKey: vi.fn(),
		registerEscapeKeyHandler: vi.fn(),
		getFocusableElements: vi.fn().mockReturnValue([]),
	},
}))

beforeEach(() => {
	wrapper = mount(BoModal, {
		props: {
			title: 'Test Modal Title',
			description: 'Test modal description',
			showClose: true,
		},
		slots: {
			default: '<div>Modal Content</div>',
			header: '<div>Header Content</div>',
			description: '<div>Description Content</div>',
			footer: '<div>Footer Content</div>',
		},
	})
})

describe('BoModal.vue', () => {
	test('renders properly', () => {
		expect(wrapper.exists()).toBe(true)

		// Test if the modal title is rendered correctly
		const titleText = wrapper.find('[role="dialog"]')
		expect(titleText.exists()).toBe(true)

		// Find content by searching within the slot content
		const content = wrapper.find('.p-4')
		expect(content.exists()).toBe(true)
		expect(content.html()).toContain('Modal Content')
	})

	test('close button emits close event when clicked', async () => {
		const closeButton = wrapper.find('button[aria-label="Close modal"]')
		expect(closeButton.exists()).toBe(true)

		await closeButton.trigger('click')
		expect(wrapper.emitted('close')).toBeTruthy()
		expect(wrapper.emitted('close')?.length).toBe(1)
	})

	test('does not show close button when showClose is false', async () => {
		await wrapper.setProps({ showClose: false })
		const closeButton = wrapper.find('button[aria-label="Close modal"]')
		expect(closeButton.exists()).toBe(false)
	})

	suite('Accessibility Features', () => {
		test('has correct ARIA attributes', () => {
			const modal = wrapper.find('[role="dialog"]')
			expect(modal.attributes('aria-modal')).toBe('true')
			expect(modal.attributes('aria-labelledby')).toBeTruthy()
			expect(modal.attributes('aria-describedby')).toBeTruthy()
		})

		test('close button has proper accessibility attributes', () => {
			const closeButton = wrapper.find('button[aria-label="Close modal"]')
			expect(closeButton.exists()).toBe(true)
			expect(closeButton.attributes('aria-label')).toBe('Close modal')
			expect(closeButton.find('.sr-only').text()).toBe('Close')
		})
	})

	suite('Width options', () => {
		test('applies px width when provided', async () => {
			await wrapper.setProps({
				width: { px: 500 },
			})
			const modalContent = wrapper.find('[role="document"]')
			expect(modalContent.attributes('style')).toContain('width: 500px')
		})

		test('applies percent width when provided', async () => {
			await wrapper.setProps({
				width: { percent: 75 },
			})
			const modalContent = wrapper.find('[role="document"]')
			expect(modalContent.attributes('style')).toContain('width: 75%')
		})

		test('applies tailwind class when provided', async () => {
			await wrapper.setProps({
				width: { tailwind: 'w-96' },
			})
			const modalContent = wrapper.find('[role="document"]')
			expect(modalContent.classes()).toContain('w-96')
		})
	})

	test('lifecycle hooks call accessibility functions', async () => {
		// Check if announceToScreenReader was called on mount
		expect(AccessibilityUtils.announceToScreenReader).toHaveBeenCalledWith(
			'Dialog opened',
			'assertive',
		)

		// Unmount the component
		wrapper.unmount()

		// Check if announceToScreenReader was called on unmount
		expect(AccessibilityUtils.announceToScreenReader).toHaveBeenCalledWith(
			'Dialog closed',
			'assertive',
		)
	})
})
