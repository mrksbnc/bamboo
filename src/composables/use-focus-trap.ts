import { useEventListener } from '@vueuse/core';
import { ref } from 'vue';

export function useFocusTrap() {
	const elementRef = ref<HTMLElement | null>(null);
	let previousActiveElement: Element | null = null;
	let cleanup: (() => void) | null = null;

	const getFocusableElements = (element: HTMLElement): HTMLElement[] => {
		return Array.from(
			element.querySelectorAll(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
			),
		) as HTMLElement[];
	};

	const trapFocus = (event: KeyboardEvent): void => {
		if (!elementRef.value || event.key !== 'Tab') {
			return;
		}

		const focusableElements = getFocusableElements(elementRef.value);
		if (focusableElements.length === 0) {
			return;
		}

		const firstElement = focusableElements[0];
		const lastElement = focusableElements[focusableElements.length - 1];

		/** Shift+Tab */
		if (event.shiftKey) {
			if (document.activeElement === firstElement) {
				lastElement.focus();
				event.preventDefault();
			}
		} else {
		/** Tab */
			if (document.activeElement === lastElement) {
				firstElement.focus();
				event.preventDefault();
			}
		}
	};

	const activate = (element: HTMLElement) => {
		elementRef.value = element;
		previousActiveElement = document.activeElement;

		// Focus first focusable element
		const focusableElements = getFocusableElements(element);
		if (focusableElements.length > 0) {
			focusableElements[0].focus();
		}

		// Setup event listener using useEventListener
		cleanup = useEventListener(document, 'keydown', trapFocus, { passive: false });
	};

	const deactivate = () => {
		if (cleanup) {
			cleanup();
			cleanup = null;
		}
		if (previousActiveElement instanceof HTMLElement) {
			previousActiveElement.focus();
		}
	};

	return {
		activate,
		deactivate,
	};
}
