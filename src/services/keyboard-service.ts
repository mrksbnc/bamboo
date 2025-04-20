import { useEventListener } from '@vueuse/core';

export type KeyHandler = (e: KeyboardEvent) => void;

export interface BoKeyboardService {
	/**
	 * Creates a focus trap within the specified container, preventing
	 * focus from leaving when tabbing through elements.
	 * Based on Material Design and accessibility best practices.
	 */
	useTrapTabKey: (container: string | HTMLElement) => void;
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

	useTrapTabKey(container: string | HTMLElement): void {
		useEventListener('keydown', (e: KeyboardEvent) => {
			const isTab = e.key === 'Tab' || e.keyCode === 9;

			if (!isTab) {
				return;
			}

			let containerElement: HTMLElement | null = null;

			if (typeof container === 'string') {
				containerElement = document.querySelector(`#${container}`) as HTMLElement | null;
			} else if (container instanceof HTMLElement) {
				containerElement = container;
			}

			if (!containerElement) {
				return;
			}

			// Find all focusable elements in the container
			// This includes more elements than just those with tabindex
			const focusable = containerElement.querySelectorAll(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
			);

			if (!focusable?.length) {
				return;
			}

			// Sort by tabindex to ensure logical navigation order
			const sorted = [...focusable].sort((a, b) => {
				const aIndex = a.getAttribute('tabindex');
				const bIndex = b.getAttribute('tabindex');

				// Elements without tabindex or with tabindex="0" should come after
				// those with explicit positive tabindex values, per accessibility standards
				if (!aIndex || aIndex === '0') {
					return bIndex && bIndex !== '0' ? 1 : 0;
				}

				if (!bIndex || bIndex === '0') {
					return -1;
				}

				return parseInt(aIndex) - parseInt(bIndex);
			});

			const shift = e.shiftKey;
			const first = sorted[0] as HTMLElement;
			const last = sorted[sorted.length - 1] as HTMLElement;

			// Handle focus cycling
			if (shift && e.target === first) {
				last.focus();
				e.preventDefault();
			} else if (!shift && e.target === last) {
				first.focus();
				e.preventDefault();
			}
		});
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
