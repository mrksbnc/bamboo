import type { Nullable } from '@/types'
export class KeyboardUtils {
	public static registerEnterKeyHandler(e: KeyboardEvent, handler: () => void): void {
		if (e.key === 'Enter') {
			handler()
		}
	}

	public static registerEscapeKeyHandler(e: KeyboardEvent, handler: () => void): void {
		// Support both standard 'Escape' and older 'Esc' key values
		if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
			e.preventDefault()
			handler()
		}
	}

	private static getFocusableElements(container: HTMLElement): HTMLElement[] {
		// A comprehensive selector for all potentially focusable elements
		const focusableElementsSelector = [
			'a[href]:not([disabled])',
			'button:not([disabled])',
			'textarea:not([disabled])',
			'input[type="text"]:not([disabled])',
			'input[type="radio"]:not([disabled])',
			'input[type="checkbox"]:not([disabled])',
			'input[type="submit"]:not([disabled])',
			'input[type="reset"]:not([disabled])',
			'input[type="email"]:not([disabled])',
			'input[type="tel"]:not([disabled])',
			'input[type="password"]:not([disabled])',
			'input[type="number"]:not([disabled])',
			'input[type="search"]:not([disabled])',
			'input[type="url"]:not([disabled])',
			'input[type="date"]:not([disabled])',
			'input[type="datetime-local"]:not([disabled])',
			'input[type="month"]:not([disabled])',
			'input[type="time"]:not([disabled])',
			'input[type="week"]:not([disabled])',
			'select:not([disabled])',
			'[tabindex]:not([tabindex="-1"])',
			'[contenteditable="true"]',
			'audio[controls]',
			'video[controls]',
			'summary',
			'details',
			'iframe',
			'object',
			'embed',
		].join(',')

		// Get all focusable elements in the container
		return Array.from(container.querySelectorAll<HTMLElement>(focusableElementsSelector)).filter(
			(el: HTMLElement) => {
				// Filter out elements with negative tabindex
				if (el.tabIndex < 0) return false

				// Filter out hidden elements
				const style = window.getComputedStyle(el)
				return (
					style.display !== 'none' &&
					style.visibility !== 'hidden' &&
					el.offsetWidth > 0 &&
					el.offsetHeight > 0
				)
			},
		)
	}

	public static trapTabKey(
		e: KeyboardEvent,
		container: Nullable<HTMLElement>,
		returnFocus = false,
	): void {
		// Only process tab key presses
		if (e.key !== 'Tab' && e.keyCode !== 9) return

		if (!container) {
			console.warn('No container provided for trapTabKey')
			return
		}

		// Prevent the default tab behavior
		e.preventDefault()

		const focusableElements = this.getFocusableElements(container)

		if (focusableElements.length === 0) return

		const firstFocusableEl = focusableElements[0]
		const lastFocusableEl = focusableElements[focusableElements.length - 1]
		const activeElement = document.activeElement as HTMLElement

		// If focus is outside the container, move it to the appropriate element
		if (!container.contains(activeElement)) {
			// If tabbing backward, focus the last element
			if (e.shiftKey) {
				lastFocusableEl.focus()
			} else {
				// Otherwise focus the first element
				firstFocusableEl.focus()
			}
			return
		}

		// Find the current index of the active element
		const currentIndex = focusableElements.indexOf(activeElement)

		// If the active element is not found within focusable elements
		// (which shouldn't happen but just in case)
		if (currentIndex === -1) {
			firstFocusableEl.focus()
			return
		}

		// Handle backward tab (shift+tab)
		if (e.shiftKey) {
			// If we're at the first element, move to the last
			if (currentIndex === 0) {
				lastFocusableEl.focus()
			} else {
				// Otherwise, move to the previous element
				focusableElements[currentIndex - 1].focus()
			}
		} else {
			// If we're at the last element
			if (currentIndex === focusableElements.length - 1) {
				// If returnFocus is true, cycle back to first element
				// Otherwise, stay on the last element (focus doesn't move)
				if (returnFocus) {
					firstFocusableEl.focus()
				}
			} else {
				// Move to the next element
				focusableElements[currentIndex + 1].focus()
			}
		}
	}
}
