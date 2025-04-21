import { useEventListener } from '@vueuse/core';

export type KeyHandler = (e: KeyboardEvent) => void;

export interface BoKeyboardService {
	/**
	 * Creates a focus trap within the specified container, preventing
	 * focus from leaving when tabbing through elements.
	 */
	useTrapTabKey: (
		container: string | HTMLElement,
		returnFocusTo?: HTMLElement,
	) => {
		activate: () => void;
		deactivate: () => void;
	};
	/**
	 * Register a handler for Enter key press
	 */
	useEnterKey: (handler: KeyHandler) => void;
	/**
	 * Register a handler for Escape key press
	 */
	useEscapeKey: (handler: KeyHandler) => void;
	/**
	 * Register a handler for Arrow key navigation
	 */
	useArrowKeys: (handler: KeyHandler) => void;
}

let instance: KeyboardService | null = null;

export class KeyboardService implements BoKeyboardService {
	static get instance(): KeyboardService {
		if (!instance) {
			instance = new KeyboardService();
		}

		return instance;
	}

	/**
	 * Creates a focus trap within the specified container, preventing
	 * focus from leaving when tabbing through elements.
	 */
	useTrapTabKey(container: string | HTMLElement, returnFocusTo?: HTMLElement) {
		let containerElement: HTMLElement | null = null;
		let focusableElements: HTMLElement[] = [];
		let previouslyFocusedElement: HTMLElement | null = null;
		let handleKeyDown: ((e: KeyboardEvent) => void) | null = null;

		const getFocusableElements = () => {
			if (!containerElement) return [];

			const elements = containerElement.querySelectorAll<HTMLElement>(
				'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
			);

			return Array.from(elements).filter((element) => {
				const isDisabled =
					element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true';
				return !isDisabled && element.tabIndex >= 0;
			});
		};

		const setup = () => {
			if (typeof container === 'string') {
				containerElement = document.getElementById(container.replace('#', ''));
			} else if (container instanceof HTMLElement) {
				containerElement = container;
			}

			if (!containerElement) {
				console.warn('Focus trap: Container element not found');
				return false;
			}

			// Set aria attributes for accessibility
			containerElement.setAttribute('aria-modal', 'true');

			// Get all focusable elements
			focusableElements = getFocusableElements();

			if (!focusableElements.length) {
				console.warn('Focus trap: No focusable elements found in container');
				return false;
			}

			return true;
		};

		const handleTabKey = (e: KeyboardEvent) => {
			if (!containerElement || focusableElements.length === 0) {
				return;
			}

			if (e.key !== 'Tab') {
				return;
			}

			// Get first and last focusable elements
			const firstFocusableElement = focusableElements[0];
			const lastFocusableElement = focusableElements[focusableElements.length - 1];

			// If Shift+Tab is pressed and the first element is focused,
			// move focus to the last focusable element
			if (e.shiftKey) {
				if (document.activeElement === firstFocusableElement) {
					lastFocusableElement.focus();
					e.preventDefault();
				}
			}
			// If Tab is pressed and the last element is focused,
			// move focus to the first focusable element
			else {
				if (document.activeElement === lastFocusableElement) {
					firstFocusableElement.focus();
					e.preventDefault();
				}
			}
		};

		const focusFirstElement = () => {
			if (focusableElements.length > 0) {
				// Save the currently focused element to restore later
				previouslyFocusedElement = document.activeElement as HTMLElement;

				// Focus the first element
				focusableElements[0].focus();
			}
		};

		const activate = () => {
			if (!setup()) return;

			// Setup the keyboard event handler
			handleKeyDown = (e: KeyboardEvent) => handleTabKey(e);

			// Add event listener
			if (containerElement && handleKeyDown) {
				containerElement.addEventListener('keydown', handleKeyDown);
			}

			// Focus the first element
			focusFirstElement();
		};

		const deactivate = () => {
			// Remove event listener
			if (containerElement && handleKeyDown) {
				containerElement.removeEventListener('keydown', handleKeyDown);
				containerElement.removeAttribute('aria-modal');
			}

			// Restore focus to the element that had focus before the trap was activated,
			// or to a specified element
			if (returnFocusTo) {
				returnFocusTo.focus();
			} else if (previouslyFocusedElement) {
				previouslyFocusedElement.focus();
			}
		};

		return { activate, deactivate };
	}

	useEnterKey(handler: KeyHandler): void {
		useEventListener('keydown', (e: KeyboardEvent) => {
			const isEnter = e.key === 'Enter' || e.keyCode === 13;
			if (!isEnter) {
				return;
			}

			e.preventDefault();
			handler(e);
		});
	}

	useEscapeKey(handler: KeyHandler): void {
		useEventListener('keydown', (e: KeyboardEvent) => {
			const isEscape = e.key === 'Escape' || e.keyCode === 27;
			if (!isEscape) {
				return;
			}

			e.preventDefault();
			handler(e);
		});
	}

	useArrowKeys(handler: KeyHandler): void {
		useEventListener('keydown', (e: KeyboardEvent) => {
			const isArrow = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key);

			if (!isArrow) {
				return;
			}

			handler(e);
		});
	}
}
