import type { Nullable } from '@/types';
import { onKeyStroke, useEventListener, useFocus, useFocusWithin } from '@vueuse/core';
import { ref, watch, type Ref, type WatchStopHandle } from 'vue';

export interface TrapTabKeyReturn {
	/** Function to stop the tab key trap event listener */
	stop: () => void;
}

export interface FocusTrapReturn {
	focused: Ref<boolean>;
	activate: () => void;
	deactivate: () => void;
}

export interface FocusManagerReturn {
	/** Reactive ref indicating whether the element has direct focus */
	focused: Ref<boolean>;
	/** Reactive ref indicating whether focus is within the element or its descendants */
	focusWithin: Ref<boolean>;
	/** Focus the first focusable element in the container */
	focusFirst: () => void;
	/** Focus the last focusable element in the container */
	focusLast: () => void;
}

/**
 * Return type for the useKeyboard composable
 */
export interface UseKeyboardReturn {
	/** Register a handler for Enter key press */
	registerEnterKeyHandler: (handler: () => void) => () => void;
	/** Register a handler for Escape key press */
	registerEscapeKeyHandler: (handler: () => void) => () => void;
	/** Trap the Tab key within a container */
	trapTabKey: (container: Nullable<HTMLElement>, returnFocus?: boolean) => TrapTabKeyReturn;
	/** Get all focusable elements within a container */
	getFocusableElements: (container: HTMLElement) => HTMLElement[];
	/** Create a focus trap for a container element */
	createFocusTrap: (target: Ref<HTMLElement | null> | HTMLElement) => FocusTrapReturn;
	/** Create a focus manager for a container */
	useFocusManager: (container: Ref<HTMLElement | null>) => FocusManagerReturn;
}

export function useKeyboard(): UseKeyboardReturn {
	function registerEnterKeyHandler(handler: (e: KeyboardEvent) => void): () => void {
		return onKeyStroke('Enter', (e) => {
			handler(e);
		});
	}

	function registerEscapeKeyHandler(handler: (e: KeyboardEvent) => void): () => void {
		return onKeyStroke(['Escape', 'Esc'], (e) => {
			e.preventDefault();
			handler(e);
		});
	}

	function getFocusableElements(container: HTMLElement): HTMLElement[] {
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
		].join(',');

		// Get all focusable elements in the container
		return Array.from(container.querySelectorAll<HTMLElement>(focusableElementsSelector)).filter(
			(el: HTMLElement) => {
				// Filter out elements with negative tabindex
				if (el.tabIndex < 0) return false;

				// Filter out hidden elements
				const style = window.getComputedStyle(el);
				return (
					style.display !== 'none' &&
					style.visibility !== 'hidden' &&
					el.offsetWidth > 0 &&
					el.offsetHeight > 0
				);
			},
		);
	}

	function trapTabKey(container: Nullable<HTMLElement>, returnFocus = false): TrapTabKeyReturn {
		if (!container) {
			console.warn('No container provided for trapTabKey');
			return { stop: () => {} };
		}

		// Create a keydown event listener that traps the tab key
		const stop = useEventListener(container, 'keydown', (e: KeyboardEvent) => {
			// Only process tab key presses
			if (e.key !== 'Tab' && e.keyCode !== 9) return;

			// Prevent the default tab behavior
			e.preventDefault();

			const focusableElements = getFocusableElements(container);

			if (focusableElements.length === 0) return;

			const firstFocusableEl = focusableElements[0];
			const lastFocusableEl = focusableElements[focusableElements.length - 1];
			const activeElement = document.activeElement as HTMLElement;

			// If focus is outside the container, move it to the appropriate element
			if (!container.contains(activeElement)) {
				// If tabbing backward, focus the last element
				if (e.shiftKey) {
					lastFocusableEl.focus();
				} else {
					// Otherwise focus the first element
					firstFocusableEl.focus();
				}
				return;
			}

			// Find the current index of the active element
			const currentIndex = focusableElements.indexOf(activeElement);

			// If the active element is not found within focusable elements
			if (currentIndex === -1) {
				firstFocusableEl.focus();
				return;
			}

			// Handle backward tab (shift+tab)
			if (e.shiftKey) {
				// If we're at the first element, move to the last
				if (currentIndex === 0) {
					lastFocusableEl.focus();
				} else {
					// Otherwise, move to the previous element
					focusableElements[currentIndex - 1].focus();
				}
			} else {
				// If we're at the last element
				if (currentIndex === focusableElements.length - 1) {
					// If returnFocus is true, cycle back to first element
					if (returnFocus) {
						firstFocusableEl.focus();
					}
				} else {
					// Move to the next element
					focusableElements[currentIndex + 1].focus();
				}
			}
		});

		return { stop };
	}

	function createFocusTrap(target: Ref<HTMLElement | null> | HTMLElement): FocusTrapReturn {
		const targetElement = ref(target instanceof HTMLElement ? target : target.value);
		let tabTrapCleanup: (() => void) | null = null;
		let watchStopHandle: WatchStopHandle | null = null;

		// Use VueUse's focus utilities to track focus state
		const { focused } = useFocus(targetElement);
		const { focused: focusedWithin } = useFocusWithin(targetElement);

		const activate = (): void => {
			if (!targetElement.value) return;

			// Focus the first focusable element in the container
			const focusableElements = getFocusableElements(targetElement.value);
			if (focusableElements.length > 0) {
				focusableElements[0].focus();
			}

			// Set up tab trapping
			const { stop } = trapTabKey(targetElement.value, true);
			tabTrapCleanup = stop;

			// Watch for focus changes and restore focus within the container if lost
			watchStopHandle = watch(focusedWithin, (isFocusedWithin) => {
				if (!isFocusedWithin && targetElement.value) {
					// If focus is lost, bring it back to the first focusable element
					const elements = getFocusableElements(targetElement.value);
					if (elements.length > 0) {
						elements[0].focus();
					}
				}
			});
		};

		const deactivate = (): void => {
			if (tabTrapCleanup) {
				tabTrapCleanup();
				tabTrapCleanup = null;
			}

			if (watchStopHandle) {
				watchStopHandle();
				watchStopHandle = null;
			}
		};

		return {
			activate,
			deactivate,
			focused,
		};
	}

	function useFocusManager(container: Ref<HTMLElement | null>): FocusManagerReturn {
		const { focused } = useFocus(container);
		const { focused: focusWithin } = useFocusWithin(container);

		const focusFirst = (): void => {
			if (!container.value) return;
			const elements = getFocusableElements(container.value);
			if (elements.length > 0) {
				elements[0].focus();
			}
		};

		const focusLast = (): void => {
			if (!container.value) return;
			const elements = getFocusableElements(container.value);
			if (elements.length > 0) {
				elements[elements.length - 1].focus();
			}
		};

		return {
			focused,
			focusWithin,
			focusFirst,
			focusLast,
		};
	}

	return {
		registerEnterKeyHandler,
		registerEscapeKeyHandler,
		trapTabKey,
		getFocusableElements,
		createFocusTrap,
		useFocusManager,
	};
}
