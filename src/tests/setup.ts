// eslint-disable no-this-alias
/**
 * Test setup file for focus-related tests and accessibility
 *
 * This file sets up mocks and stubs for focus-related DOM behavior
 * since JSDOM doesn't fully implement these behaviors.
 * It also adds helpers for testing accessibility features.
 */

// Track the current active element
let mockActiveElement: Element | null = null

// Mock document.activeElement
Object.defineProperty(document, 'activeElement', {
	get: function () {
		return mockActiveElement || document.body
	},
})

// Mock focus method
HTMLElement.prototype.focus = function () {
	mockActiveElement = this
}

// Mock the contains method to properly work with our mocked focus
HTMLElement.prototype.contains = function (element: Node | null): boolean {
	if (!element) return false

	// Check if the element is this element
	if (element === this) return true

	// Check if the element is a child of this element
	let parent = element.parentNode
	while (parent) {
		if (parent === this) return true
		parent = parent.parentNode
	}

	return false
}

// Create a mock implementation for the announcer in tests
let mockAriaLiveText = ''
let mockAriaPriority = 'polite'

// Create a helper to test announcements to screen readers
export function getMockAriaLiveAnnouncement() {
	return {
		text: mockAriaLiveText,
		priority: mockAriaPriority,
	}
}

// Mock implementation of the AccessibilityUtils.announceToScreenReader method for testing
export function mockAnnounceToScreenReader(
	text: string,
	priority: 'polite' | 'assertive' = 'polite',
) {
	mockAriaLiveText = text
	mockAriaPriority = priority
}

// Export a helper to reset the mock state between tests
export function resetAccessibilityMocks() {
	mockActiveElement = null
	mockAriaLiveText = ''
	mockAriaPriority = 'polite'
}

// Legacy export renamed for clarity
export function resetFocusMock() {
	mockActiveElement = null
}

// Export a helper to get the currently focused element
export function getMockActiveElement() {
	return mockActiveElement
}

// Check ARIA attributes on an element
export function hasAriaAttribute(element: Element, attribute: string, value?: string): boolean {
	const hasAttribute = element.hasAttribute(attribute)
	if (!value) return hasAttribute
	return hasAttribute && element.getAttribute(attribute) === value
}

// Find elements by ARIA role
export function findByRole(container: Element, role: string): Element[] {
	return Array.from(container.querySelectorAll(`[role="${role}"]`))
}

// Check if an element is accessible to screen readers (not hidden)
export function isAccessibleToScreenReaders(element: Element): boolean {
	if (element.hasAttribute('aria-hidden') && element.getAttribute('aria-hidden') === 'true') {
		return false
	}

	// Check computed style if applicable
	if (window.getComputedStyle) {
		const style = window.getComputedStyle(element)
		if (style.display === 'none' || style.visibility === 'hidden') {
			return false
		}
	}

	return true
}
