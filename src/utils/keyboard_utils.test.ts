import { KeyboardUtils } from '@/utils'
import { afterEach, beforeEach, describe, expect, suite, test, vi } from 'vitest'

describe('KeyboardUtils', () => {
	suite('registerEnterKeyHandler', () => {
		test('should register a handler for the enter key', () => {
			const handler = vi.fn()
			KeyboardUtils.registerEnterKeyHandler(new KeyboardEvent('keydown', { key: 'Enter' }), handler)
			expect(handler).toHaveBeenCalled()
		})

		test('should not register a handler for a non-enter key', () => {
			const handler = vi.fn()
			KeyboardUtils.registerEnterKeyHandler(new KeyboardEvent('keydown', { key: 'Tab' }), handler)
			expect(handler).not.toHaveBeenCalled()
		})
	})

	suite('trapTabKey', () => {
		let container: HTMLDivElement
		let firstElement: HTMLButtonElement
		let middleElement: HTMLButtonElement
		let lastElement: HTMLButtonElement

		beforeEach(() => {
			// Create a container with focusable elements
			container = document.createElement('div')
			container.id = 'test-container'

			firstElement = document.createElement('button')
			firstElement.setAttribute('tabindex', '0')

			middleElement = document.createElement('button')
			middleElement.setAttribute('tabindex', '1')

			lastElement = document.createElement('button')
			lastElement.setAttribute('tabindex', '2')

			container.appendChild(firstElement)
			container.appendChild(middleElement)
			container.appendChild(lastElement)

			document.body.appendChild(container)
		})

		afterEach(() => {
			document.body.removeChild(container)
		})

		test('should wrap focus from last to first element when tabbing forward', () => {
			// Set focus to the last element
			lastElement.focus()

			// Create a tab event (without shift)
			const tabEvent = new KeyboardEvent('keydown', {
				key: 'Tab',
				bubbles: true,
				cancelable: true,
				shiftKey: false,
			})

			// Mock preventDefault
			const preventDefaultSpy = vi.spyOn(tabEvent, 'preventDefault')

			// Spy on focus method
			const focusSpy = vi.spyOn(firstElement, 'focus')

			// Set the target (current active element)
			Object.defineProperty(tabEvent, 'target', { value: lastElement })

			// Execute the trap
			KeyboardUtils.trapTabKey(tabEvent, 'test-container')

			// Assert preventDefault was called
			expect(preventDefaultSpy).toHaveBeenCalled()

			// Assert focus was called on the first element
			expect(focusSpy).toHaveBeenCalled()
		})

		test('should wrap focus from first to last element when tabbing backward', () => {
			// Set focus to the first element
			firstElement.focus()

			// Create a tab event with shift key
			const tabEvent = new KeyboardEvent('keydown', {
				key: 'Tab',
				bubbles: true,
				cancelable: true,
				shiftKey: true,
			})

			// Mock preventDefault
			const preventDefaultSpy = vi.spyOn(tabEvent, 'preventDefault')

			// Spy on focus method
			const focusSpy = vi.spyOn(lastElement, 'focus')

			// Set the target (current active element)
			Object.defineProperty(tabEvent, 'target', { value: firstElement })

			// Execute the trap
			KeyboardUtils.trapTabKey(tabEvent, 'test-container')

			// Assert preventDefault was called
			expect(preventDefaultSpy).toHaveBeenCalled()

			// Assert focus was called on the last element
			expect(focusSpy).toHaveBeenCalled()
		})

		test('should not interfere with normal tabbing in the middle of the sequence', () => {
			// Set focus to the middle element
			middleElement.focus()

			// Create a tab event (without shift)
			const tabEvent = new KeyboardEvent('keydown', {
				key: 'Tab',
				bubbles: true,
				cancelable: true,
				shiftKey: false,
			})

			// Mock preventDefault
			const preventDefaultSpy = vi.spyOn(tabEvent, 'preventDefault')

			// Set the target (current active element)
			Object.defineProperty(tabEvent, 'target', { value: middleElement })

			// Execute the trap
			KeyboardUtils.trapTabKey(tabEvent, 'test-container')

			// Assert preventDefault was NOT called
			expect(preventDefaultSpy).not.toHaveBeenCalled()
		})

		test('should do nothing if container has no focusable elements', () => {
			// Create empty container without removing the existing container
			const emptyContainer = document.createElement('div')
			emptyContainer.id = 'empty-container'
			document.body.appendChild(emptyContainer)

			// Create a tab event
			const tabEvent = new KeyboardEvent('keydown', {
				key: 'Tab',
				bubbles: true,
				cancelable: true,
			})

			// Mock preventDefault
			const preventDefaultSpy = vi.spyOn(tabEvent, 'preventDefault')

			// Execute the trap
			KeyboardUtils.trapTabKey(tabEvent, 'empty-container')

			// Assert preventDefault was NOT called
			expect(preventDefaultSpy).not.toHaveBeenCalled()

			// Clean up
			document.body.removeChild(emptyContainer)
		})

		test('should do nothing for non-tab key events', () => {
			// Create a non-tab event
			const enterEvent = new KeyboardEvent('keydown', {
				key: 'Enter',
				bubbles: true,
				cancelable: true,
			})

			// Mock preventDefault
			const preventDefaultSpy = vi.spyOn(enterEvent, 'preventDefault')

			// Execute the trap
			KeyboardUtils.trapTabKey(enterEvent, 'test-container')

			// Assert preventDefault was NOT called
			expect(preventDefaultSpy).not.toHaveBeenCalled()
		})
	})
})
