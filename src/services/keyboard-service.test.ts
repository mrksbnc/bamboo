import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { KeyboardService } from './keyboard-service';

describe('KeyboardService', () => {
	let keyboardService: KeyboardService;
	let container: HTMLElement;

	// Mock elements for testing
	beforeEach(() => {
		keyboardService = new KeyboardService();

		// Set up container with focusable elements for testing
		container = document.createElement('div');
		container.id = 'test-container';

		// Create focusable elements
		const button1 = document.createElement('button');
		button1.textContent = 'Button 1';
		button1.id = 'button1';

		const input = document.createElement('input');
		input.type = 'text';
		input.id = 'input';

		const button2 = document.createElement('button');
		button2.textContent = 'Button 2';
		button2.id = 'button2';

		// Add elements to container
		container.appendChild(button1);
		container.appendChild(input);
		container.appendChild(button2);

		// Add container to document
		document.body.appendChild(container);
	});

	afterEach(() => {
		// Clean up after each test
		if (container && container.parentNode) {
			container.parentNode.removeChild(container);
		}

		// Reset mocks
		vi.restoreAllMocks();
	});

	describe('useTrapTabKey', () => {
		it('should find the container when given an id', () => {
			const getByIdSpy = vi.spyOn(document, 'getElementById');

			const focusTrap = keyboardService.useTrapTabKey('test-container');
			focusTrap.activate();

			expect(getByIdSpy).toHaveBeenCalledWith('test-container');
		});

		it('should set aria-modal attribute on the container', () => {
			const focusTrap = keyboardService.useTrapTabKey(container);
			focusTrap.activate();

			expect(container.getAttribute('aria-modal')).toBe('true');
		});

		it('should focus the first element when activated', () => {
			const button1 = document.getElementById('button1');
			const focusSpy = vi.spyOn(button1 as HTMLElement, 'focus');

			const focusTrap = keyboardService.useTrapTabKey(container);
			focusTrap.activate();

			expect(focusSpy).toHaveBeenCalled();
		});

		it('should handle Tab key to keep focus within container', () => {
			const focusTrap = keyboardService.useTrapTabKey(container);
			focusTrap.activate();

			const button2 = document.getElementById('button2') as HTMLElement;
			button2.focus();

			// Simulate Tab press on the last element
			const tabEvent = new KeyboardEvent('keydown', {
				key: 'Tab',
				bubbles: true,
				cancelable: true,
			});

			const preventDefaultSpy = vi.spyOn(tabEvent, 'preventDefault');

			// Focus should move to the first element
			button2.dispatchEvent(tabEvent);

			expect(preventDefaultSpy).toHaveBeenCalled();
		});

		it('should handle Shift+Tab to cycle focus backwards', () => {
			const focusTrap = keyboardService.useTrapTabKey(container);
			focusTrap.activate();

			const button1 = document.getElementById('button1') as HTMLElement;
			button1.focus();

			// Simulate Shift+Tab on the first element
			const shiftTabEvent = new KeyboardEvent('keydown', {
				key: 'Tab',
				shiftKey: true,
				bubbles: true,
				cancelable: true,
			});

			const preventDefaultSpy = vi.spyOn(shiftTabEvent, 'preventDefault');

			// Focus should move to the last element
			button1.dispatchEvent(shiftTabEvent);

			expect(preventDefaultSpy).toHaveBeenCalled();
		});

		it('should restore focus when deactivated', () => {
			// Create an element to be focused before trap activation
			const externalButton = document.createElement('button');
			externalButton.id = 'external-button';
			document.body.appendChild(externalButton);
			externalButton.focus();

			const focusSpy = vi.spyOn(externalButton, 'focus');

			const focusTrap = keyboardService.useTrapTabKey(container);
			focusTrap.activate();
			focusTrap.deactivate();

			expect(focusSpy).toHaveBeenCalled();

			// Clean up
			document.body.removeChild(externalButton);
		});

		it('should return focus to specified element when deactivated', () => {
			const returnElement = document.createElement('button');
			returnElement.id = 'return-button';
			document.body.appendChild(returnElement);

			const focusSpy = vi.spyOn(returnElement, 'focus');

			const focusTrap = keyboardService.useTrapTabKey(container, returnElement);
			focusTrap.activate();
			focusTrap.deactivate();

			expect(focusSpy).toHaveBeenCalled();

			// Clean up
			document.body.removeChild(returnElement);
		});
	});

	describe('useEnterKey', () => {
		it('should call handler when Enter key is pressed', () => {
			const handler = vi.fn();
			keyboardService.useEnterKey(handler);

			const enterEvent = new KeyboardEvent('keydown', {
				key: 'Enter',
				bubbles: true,
				cancelable: true,
			});

			document.dispatchEvent(enterEvent);

			expect(handler).toHaveBeenCalledWith(enterEvent);
		});

		it('should not call handler for other keys', () => {
			const handler = vi.fn();
			keyboardService.useEnterKey(handler);

			const otherEvent = new KeyboardEvent('keydown', {
				key: 'A',
				bubbles: true,
				cancelable: true,
			});

			document.dispatchEvent(otherEvent);

			expect(handler).not.toHaveBeenCalled();
		});
	});

	describe('useEscapeKey', () => {
		it('should call handler when Escape key is pressed', () => {
			const handler = vi.fn();
			keyboardService.useEscapeKey(handler);

			const escEvent = new KeyboardEvent('keydown', {
				key: 'Escape',
				bubbles: true,
				cancelable: true,
			});

			document.dispatchEvent(escEvent);

			expect(handler).toHaveBeenCalledWith(escEvent);
		});
	});

	describe('useArrowKeys', () => {
		it('should call handler when arrow keys are pressed', () => {
			const handler = vi.fn();
			keyboardService.useArrowKeys(handler);

			const arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

			arrowKeys.forEach((key) => {
				const arrowEvent = new KeyboardEvent('keydown', {
					key,
					bubbles: true,
					cancelable: true,
				});

				document.dispatchEvent(arrowEvent);

				expect(handler).toHaveBeenCalledWith(arrowEvent);
			});
		});

		it('should not call handler for non-arrow keys', () => {
			const handler = vi.fn();
			keyboardService.useArrowKeys(handler);

			const otherEvent = new KeyboardEvent('keydown', {
				key: 'Enter',
				bubbles: true,
				cancelable: true,
			});

			document.dispatchEvent(otherEvent);

			expect(handler).not.toHaveBeenCalled();
		});
	});
});
