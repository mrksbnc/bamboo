// eslint-disable no-this-alias
import { KeyboardUtils } from '@/utils';
import { afterEach, beforeEach, describe, expect, suite, test, vi } from 'vitest';

describe('KeyboardUtils', () => {
	// Mock focus handling for JSDOM environment
	let mockActiveElement: Element | null = null;

	// Override document.activeElement getter to use our mock
	const originalActiveElementDescriptor = Object.getOwnPropertyDescriptor(
		Document.prototype,
		'activeElement',
	);

	beforeEach(() => {
		// Setup the activeElement mock
		Object.defineProperty(document, 'activeElement', {
			configurable: true,
			get: function () {
				return mockActiveElement || document.body;
			},
		});

		// Mock the focus method on HTMLElement
		HTMLElement.prototype.focus = vi.fn().mockImplementation(function (this: HTMLElement) {
			mockActiveElement = this;
		});
	});

	afterEach(() => {
		// Reset the active element
		mockActiveElement = null;

		// Restore the original activeElement descriptor if it existed
		if (originalActiveElementDescriptor) {
			Object.defineProperty(Document.prototype, 'activeElement', originalActiveElementDescriptor);
		}

		// Restore the original focus method
		vi.restoreAllMocks();
	});

	suite('registerEnterKeyHandler', () => {
		test('should register a handler for the enter key', () => {
			const handler = vi.fn();
			KeyboardUtils.registerEnterKeyHandler(
				new KeyboardEvent('keydown', { key: 'Enter' }),
				handler,
			);
			expect(handler).toHaveBeenCalled();
		});

		test('should not register a handler for a non-enter key', () => {
			const handler = vi.fn();
			KeyboardUtils.registerEnterKeyHandler(new KeyboardEvent('keydown', { key: 'Tab' }), handler);
			expect(handler).not.toHaveBeenCalled();
		});
	});

	suite('registerEscapeKeyHandler', () => {
		test('should register a handler for the Escape key', () => {
			const handler = vi.fn();
			const preventDefaultSpy = vi.fn();

			const event = new KeyboardEvent('keydown', { key: 'Escape' });
			Object.defineProperty(event, 'preventDefault', { value: preventDefaultSpy });

			KeyboardUtils.registerEscapeKeyHandler(event, handler);
			expect(handler).toHaveBeenCalled();
			expect(preventDefaultSpy).toHaveBeenCalled();
		});

		test('should register a handler for the Esc key (older browsers)', () => {
			const handler = vi.fn();
			const preventDefaultSpy = vi.fn();

			const event = new KeyboardEvent('keydown', { key: 'Esc' });
			Object.defineProperty(event, 'preventDefault', { value: preventDefaultSpy });

			KeyboardUtils.registerEscapeKeyHandler(event, handler);
			expect(handler).toHaveBeenCalled();
			expect(preventDefaultSpy).toHaveBeenCalled();
		});

		test('should register a handler for keyCode 27 (older browsers)', () => {
			const handler = vi.fn();
			const preventDefaultSpy = vi.fn();

			// Create event with keyCode
			const event = new KeyboardEvent('keydown', {});
			Object.defineProperty(event, 'keyCode', { value: 27 });
			Object.defineProperty(event, 'preventDefault', { value: preventDefaultSpy });

			KeyboardUtils.registerEscapeKeyHandler(event, handler);
			expect(handler).toHaveBeenCalled();
			expect(preventDefaultSpy).toHaveBeenCalled();
		});

		test('should not register a handler for a non-escape key', () => {
			const handler = vi.fn();
			const preventDefaultSpy = vi.fn();

			const event = new KeyboardEvent('keydown', { key: 'Tab' });
			Object.defineProperty(event, 'preventDefault', { value: preventDefaultSpy });

			KeyboardUtils.registerEscapeKeyHandler(event, handler);
			expect(handler).not.toHaveBeenCalled();
			expect(preventDefaultSpy).not.toHaveBeenCalled();
		});
	});

	suite('trapTabKey', () => {
		let container: HTMLDivElement;
		let firstElement: HTMLButtonElement;
		let middleElement: HTMLButtonElement;
		let lastElement: HTMLButtonElement;

		beforeEach(() => {
			// Reset mock active element for each test
			mockActiveElement = null;

			// Create a container with focusable elements
			container = document.createElement('div');
			container.id = 'test-container';

			firstElement = document.createElement('button');
			firstElement.textContent = 'First';
			firstElement.setAttribute('tabindex', '0');

			middleElement = document.createElement('button');
			middleElement.textContent = 'Middle';
			middleElement.setAttribute('tabindex', '0');

			lastElement = document.createElement('button');
			lastElement.textContent = 'Last';
			lastElement.setAttribute('tabindex', '0');

			container.appendChild(firstElement);
			container.appendChild(middleElement);
			container.appendChild(lastElement);

			document.body.appendChild(container);

			// Mock container.contains to work with our activeElement mock
			container.contains = vi.fn((element) => {
				return element === firstElement || element === middleElement || element === lastElement;
			});

			// Mock getFocusableElements private method
			vi.spyOn(
				KeyboardUtils as unknown as {
					getFocusableElements: (container: HTMLElement) => HTMLElement[];
				},
				'getFocusableElements',
			).mockImplementation(() => {
				return [firstElement, middleElement, lastElement];
			});
		});

		afterEach(() => {
			document.body.removeChild(container);
			vi.restoreAllMocks();
		});

		test('should do nothing for non-tab key events', () => {
			// Create a non-tab event
			const enterEvent = new KeyboardEvent('keydown', {
				key: 'Enter',
				bubbles: true,
				cancelable: true,
			});

			// Mock preventDefault
			const preventDefaultSpy = vi.fn();
			Object.defineProperty(enterEvent, 'preventDefault', { value: preventDefaultSpy });

			// Execute the trap
			KeyboardUtils.trapTabKey(enterEvent, container);

			// Assert preventDefault was NOT called
			expect(preventDefaultSpy).not.toHaveBeenCalled();
		});

		test('should handle null container gracefully', () => {
			// Mock console.warn
			const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

			// Create a tab event
			const tabEvent = new KeyboardEvent('keydown', {
				key: 'Tab',
				bubbles: true,
				cancelable: true,
			});

			// Mock preventDefault
			const preventDefaultSpy = vi.fn();
			Object.defineProperty(tabEvent, 'preventDefault', { value: preventDefaultSpy });

			// Execute the trap with null container
			KeyboardUtils.trapTabKey(tabEvent, null);

			// Assert warning was logged
			expect(consoleWarnSpy).toHaveBeenCalledWith('No container provided for trapTabKey');

			// Restore console.warn
			consoleWarnSpy.mockRestore();
		});

		test('should focus first element when focus is outside container', () => {
			// Create an element outside the container
			const outsideElement = document.createElement('button');
			outsideElement.setAttribute('id', 'outside-element');
			document.body.appendChild(outsideElement);

			// Focus on the outside element (mock for test)
			mockActiveElement = outsideElement;

			// Setup contains spy to simulate focus outside container
			vi.spyOn(container, 'contains').mockReturnValue(false);

			// Create a tab event (forward)
			const tabEvent = new KeyboardEvent('keydown', {
				key: 'Tab',
				bubbles: true,
				cancelable: true,
				shiftKey: false,
			});

			// Mock preventDefault
			const preventDefaultSpy = vi.fn();
			Object.defineProperty(tabEvent, 'preventDefault', { value: preventDefaultSpy });

			// Execute the trap
			KeyboardUtils.trapTabKey(tabEvent, container);

			// Assert preventDefault was called
			expect(preventDefaultSpy).toHaveBeenCalled();

			// Assert first element received focus
			expect(document.activeElement).toBe(firstElement);

			// Clean up
			document.body.removeChild(outsideElement);
		});

		test('should focus last element when focus is outside container and tabbing backward', () => {
			// Create an element outside the container
			const outsideElement = document.createElement('button');
			outsideElement.setAttribute('id', 'outside-element');
			document.body.appendChild(outsideElement);

			// Focus on the outside element (mock for test)
			mockActiveElement = outsideElement;

			// Setup contains spy to simulate focus outside container
			vi.spyOn(container, 'contains').mockReturnValue(false);

			// Create a tab event (backward)
			const tabEvent = new KeyboardEvent('keydown', {
				key: 'Tab',
				bubbles: true,
				cancelable: true,
				shiftKey: true,
			});

			// Mock preventDefault
			const preventDefaultSpy = vi.fn();
			Object.defineProperty(tabEvent, 'preventDefault', { value: preventDefaultSpy });

			// Execute the trap
			KeyboardUtils.trapTabKey(tabEvent, container);

			// Assert preventDefault was called
			expect(preventDefaultSpy).toHaveBeenCalled();

			// Assert last element received focus
			expect(document.activeElement).toBe(lastElement);

			// Clean up
			document.body.removeChild(outsideElement);
		});

		test('should focus next element when tabbing forward', () => {
			// Set focus to the first element
			mockActiveElement = firstElement;

			// Create a tab event (forward)
			const tabEvent = new KeyboardEvent('keydown', {
				key: 'Tab',
				bubbles: true,
				cancelable: true,
				shiftKey: false,
			});

			// Mock preventDefault
			const preventDefaultSpy = vi.fn();
			Object.defineProperty(tabEvent, 'preventDefault', { value: preventDefaultSpy });

			// Execute the trap
			KeyboardUtils.trapTabKey(tabEvent, container);

			// Assert preventDefault was called
			expect(preventDefaultSpy).toHaveBeenCalled();

			// Assert middle element received focus
			expect(document.activeElement).toBe(middleElement);
		});

		test('should focus previous element when tabbing backward', () => {
			// Set focus to the middle element
			mockActiveElement = middleElement;

			// Create a tab event (backward)
			const tabEvent = new KeyboardEvent('keydown', {
				key: 'Tab',
				bubbles: true,
				cancelable: true,
				shiftKey: true,
			});

			// Mock preventDefault
			const preventDefaultSpy = vi.fn();
			Object.defineProperty(tabEvent, 'preventDefault', { value: preventDefaultSpy });

			// Execute the trap
			KeyboardUtils.trapTabKey(tabEvent, container);

			// Assert preventDefault was called
			expect(preventDefaultSpy).toHaveBeenCalled();

			// Assert first element received focus
			expect(document.activeElement).toBe(firstElement);
		});

		test('should wrap focus from last to first element when returnFocus is true', () => {
			// Set focus to the last element
			mockActiveElement = lastElement;

			// Create a tab event (forward)
			const tabEvent = new KeyboardEvent('keydown', {
				key: 'Tab',
				bubbles: true,
				cancelable: true,
				shiftKey: false,
			});

			// Mock preventDefault
			const preventDefaultSpy = vi.fn();
			Object.defineProperty(tabEvent, 'preventDefault', { value: preventDefaultSpy });

			// Execute the trap with returnFocus = true
			KeyboardUtils.trapTabKey(tabEvent, container, true);

			// Assert preventDefault was called
			expect(preventDefaultSpy).toHaveBeenCalled();

			// Assert first element received focus
			expect(document.activeElement).toBe(firstElement);
		});

		test('should not wrap focus when on last element and returnFocus is false', () => {
			// Set focus to the last element
			mockActiveElement = lastElement;

			// Create a tab event (forward)
			const tabEvent = new KeyboardEvent('keydown', {
				key: 'Tab',
				bubbles: true,
				cancelable: true,
				shiftKey: false,
			});

			// Mock preventDefault
			const preventDefaultSpy = vi.fn();
			Object.defineProperty(tabEvent, 'preventDefault', { value: preventDefaultSpy });

			// Execute the trap with returnFocus = false
			KeyboardUtils.trapTabKey(tabEvent, container, false);

			// Assert preventDefault was called
			expect(preventDefaultSpy).toHaveBeenCalled();

			// Assert focus remains on last element (should not have changed)
			expect(document.activeElement).toBe(lastElement);
		});

		test('should wrap focus from first to last element when tabbing backward', () => {
			// Set focus to the first element
			mockActiveElement = firstElement;

			// Create a tab event (backward)
			const tabEvent = new KeyboardEvent('keydown', {
				key: 'Tab',
				bubbles: true,
				cancelable: true,
				shiftKey: true,
			});

			// Mock preventDefault
			const preventDefaultSpy = vi.fn();
			Object.defineProperty(tabEvent, 'preventDefault', { value: preventDefaultSpy });

			// Execute the trap
			KeyboardUtils.trapTabKey(tabEvent, container);

			// Assert preventDefault was called
			expect(preventDefaultSpy).toHaveBeenCalled();

			// Assert last element received focus
			expect(document.activeElement).toBe(lastElement);
		});

		test('should handle tab by keyCode for older browsers', () => {
			// Set focus to the first element
			mockActiveElement = firstElement;

			// Create a tab event using keyCode instead of key
			const tabEvent = new KeyboardEvent('keydown', {
				bubbles: true,
				cancelable: true,
				shiftKey: false,
			});

			// Set keyCode manually (Tab is 9)
			Object.defineProperty(tabEvent, 'keyCode', { value: 9 });
			Object.defineProperty(tabEvent, 'key', { value: undefined });

			// Mock preventDefault
			const preventDefaultSpy = vi.fn();
			Object.defineProperty(tabEvent, 'preventDefault', { value: preventDefaultSpy });

			// Execute the trap
			KeyboardUtils.trapTabKey(tabEvent, container);

			// Assert preventDefault was called
			expect(preventDefaultSpy).toHaveBeenCalled();

			// Assert middle element received focus
			expect(document.activeElement).toBe(middleElement);
		});
	});
});
