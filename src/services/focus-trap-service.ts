import { BrowserService } from '@/services/browser-service';
import { onBeforeUnmount, onMounted } from 'vue';

export interface FocusTrap {
	/**
	 * Activate the focus trap. This will make the container element focusable and trap focus within it.
	 */
	activate: () => void;
	/**
	 * Deactivate the focus trap. This will remove the focus trap from the container element.
	 */
	deactivate: () => void;
}

export interface BoFocusTrapService {
	/**
	 * Creates a focus trap within the specified container
	 */
	useFocusTrap: (
		container: string | HTMLElement,
		options?: FocusTrapOptions,
	) => {
		activate: () => void;
		deactivate: () => void;
	};
}

export interface FocusTrapOptions {
	/**
	 * Element to return focus to when trap is deactivated
	 */
	returnFocusTo?: HTMLElement;
	/**
	 * If true, handles Escape key to deactivate the trap
	 */
	handleEscapeKey?: boolean;
	/**
	 * Custom handler for Escape key press
	 */
	onEscape?: (e: KeyboardEvent) => void;
	/**
	 * If true, allows user to close the trap by clicking outside the container
	 */
	closeOnOutsideClick?: boolean;
	/**
	 * Custom handler for outside click
	 */
	onOutsideClick?: (e: MouseEvent) => void;
	/**
	 * Initial element to focus when trap is activated
	 * If not provided, will focus the first focusable element
	 */
	initialFocus?: HTMLElement | 'container' | 'first-focusable';
}

let instance: FocusTrapService | null = null;

export class FocusTrapService implements BoFocusTrapService {
	static get instance(): FocusTrapService {
		if (!instance) {
			instance = new FocusTrapService();
		}

		return instance;
	}

	useFocusTrap(container: string | HTMLElement, options: FocusTrapOptions = {}) {
		const defaultOptions: FocusTrapOptions = {
			returnFocusTo: undefined,
			handleEscapeKey: true,
			onEscape: undefined,
			closeOnOutsideClick: false,
			onOutsideClick: undefined,
			initialFocus: 'first-focusable',
		};

		const mergedOptions = { ...defaultOptions, ...options };

		let isActive = false;
		let outsideClickPrevented = false;
		let focusableElements: HTMLElement[] = [];
		let containerElement: HTMLElement | null = null;
		let previouslyFocusedElement: HTMLElement | null = null;

		let handleClick: ((e: MouseEvent) => void) | null = null;
		let escapeHandler: ((e: KeyboardEvent) => void) | null = null;
		let handleKeyDown: ((e: KeyboardEvent) => void) | null = null;

		const getFocusableElements = (): HTMLElement[] => {
			if (!containerElement) {
				return [];
			}

			const elements = containerElement.querySelectorAll<HTMLElement>(
				'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), details:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])',
			);

			return Array.from(elements).filter((element) => {
				const isDisabled =
					element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true';
				return !isDisabled && element.tabIndex >= 0;
			});
		};

		const setup = (): boolean => {
			if (typeof container === 'string') {
				containerElement = document.getElementById(container.replace('#', ''));
			} else if (container instanceof HTMLElement) {
				containerElement = container;
			}

			if (!containerElement) {
				console.warn('Focus trap: Container element not found');
				return false;
			}

			if (!containerElement.hasAttribute('role')) {
				containerElement.setAttribute('role', 'dialog');
			}

			containerElement.setAttribute('aria-modal', 'true');

			// Save the currently focused element to restore later
			previouslyFocusedElement = document.activeElement as HTMLElement;

			// Get all focusable elements
			focusableElements = getFocusableElements();

			if (!focusableElements.length) {
				console.warn('Focus trap: No focusable elements found in container');
				// Continue anyway as the container might receive focus
			}

			return true;
		};

		const handleTabKey = (e: KeyboardEvent): void => {
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

		const handleEscapeKey = (e: KeyboardEvent): void => {
			if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
				e.preventDefault();

				if (mergedOptions.onEscape) {
					mergedOptions.onEscape(e);
				} else {
					deactivate();
				}
			}
		};

		const handleOutsideClick = (e: MouseEvent): void => {
			if (outsideClickPrevented) {
				outsideClickPrevented = false;
				return;
			}

			if (!containerElement || !isActive) {
				return;
			}

			// Check if the click occurred outside the container
			if (containerElement && !containerElement.contains(e.target as Node)) {
				if (mergedOptions.onOutsideClick) {
					mergedOptions.onOutsideClick(e);
				} else if (mergedOptions.closeOnOutsideClick) {
					deactivate();
				}
			}
		};

		const setInitialFocus = (): void => {
			if (!containerElement) {
				return;
			}

			// Delay focus to ensure DOM is ready
			setTimeout(() => {
				try {
					if (mergedOptions.initialFocus === 'container') {
						if (containerElement) {
							containerElement.focus();
						}
					} else if (mergedOptions.initialFocus instanceof HTMLElement) {
						mergedOptions.initialFocus.focus();
					} else {
						// Default to the first focusable element
						if (focusableElements.length > 0) {
							focusableElements[0].focus();
						} else {
							// If no focusable elements, focus the container itself
							if (containerElement) {
								containerElement.setAttribute('tabindex', '-1');
								containerElement.focus();
							}
						}
					}
				} catch (error) {
					console.warn('Focus trap: Error setting initial focus', error);
				}
			}, 0);
		};

		const makeOutsideElementsInert = (): void => {
			if (!BrowserService.instance.isBrowserEnv() || !containerElement) {
				return;
			}

			const allElements = document.querySelectorAll<HTMLElement>('body > *');
			allElements.forEach((element) => {
				if (element !== containerElement && !element.contains(containerElement)) {
					element.setAttribute('aria-hidden', 'true');
					element.setAttribute('inert', '');
				}
			});
		};

		const restoreOutsideElements = (): void => {
			if (!BrowserService.instance.isBrowserEnv()) {
				return;
			}

			const allElements = document.querySelectorAll<HTMLElement>('[aria-hidden="true"][inert]');
			allElements.forEach((element) => {
				element.removeAttribute('aria-hidden');
				element.removeAttribute('inert');
			});
		};

		const activate = (): void => {
			if (!setup()) {
				return;
			}
			isActive = true;

			// Set up keyboard event handlers
			handleKeyDown = (e: KeyboardEvent) => handleTabKey(e);

			// Set up escape key handler if enabled
			if (mergedOptions.handleEscapeKey) {
				escapeHandler = (e: KeyboardEvent) => handleEscapeKey(e);
			}

			// Set up click handler if enabled
			if (mergedOptions.closeOnOutsideClick || mergedOptions.onOutsideClick) {
				handleClick = (e: MouseEvent) => handleOutsideClick(e);
			}

			// Add event listeners
			if (containerElement && handleKeyDown) {
				containerElement.addEventListener('keydown', handleKeyDown);
			}

			if (escapeHandler) {
				document.addEventListener('keydown', escapeHandler);
			}

			if (handleClick) {
				document.addEventListener('click', handleClick);
				// Prevent the first click from triggering the outside click handler
				outsideClickPrevented = true;
			}

			makeOutsideElementsInert();
			setInitialFocus();
		};

		const deactivate = (): void => {
			isActive = false;

			// Remove event listeners
			if (containerElement && handleKeyDown) {
				containerElement.removeEventListener('keydown', handleKeyDown);
			}

			if (escapeHandler) {
				document.removeEventListener('keydown', escapeHandler);
			}

			if (handleClick) {
				document.removeEventListener('click', handleClick);
			}

			// Remove aria attributes
			if (containerElement) {
				containerElement.removeAttribute('aria-modal');
			}

			// Restore outside elements
			restoreOutsideElements();

			// Restore focus to the element that had focus before the trap was activated,
			// or to a specified element
			if (mergedOptions.returnFocusTo) {
				mergedOptions.returnFocusTo.focus();
			} else if (previouslyFocusedElement) {
				previouslyFocusedElement.focus();
			}
		};

		return { activate, deactivate };
	}
}

export const useFocusTrap = (
	container: string | HTMLElement,
	options: FocusTrapOptions = {},
): FocusTrap => {
	let trap: FocusTrap | null = null;

	onMounted(() => {
		trap = FocusTrapService.instance.useFocusTrap(container, options);
	});

	onBeforeUnmount(() => {
		trap?.deactivate();
	});

	return {
		activate: () => trap?.activate(),
		deactivate: () => trap?.deactivate(),
	};
};
