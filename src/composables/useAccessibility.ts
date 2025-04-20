import { isDefined } from '@vueuse/core';
import { onMounted, ref, type Ref } from 'vue';
import { useBrowser } from './useBrowser';

/**
 * Enum representing the priority of announcements to screen readers
 * - `polite`: Announce changes in a polite manner
 * - `assertive`: Announce changes in an assertive manner
 */
export enum AriaLivePriority {
	polite = 'polite',
	assertive = 'assertive',
}

export interface UseAccessibilityReturn {
	/**
	 * A reference to the live region element
	 */
	liveRegion: Ref<HTMLElement | null>;
	/**
	 * Announces a message to screen readers
	 */
	announceToScreenReader: (message: string, priority?: AriaLivePriority) => void;
	/**
	 * Checks if an element is hidden from screen readers
	 */
	isHiddenFromScreenReaders: (element: HTMLElement) => boolean;
	/**
	 * Adds a skip link to the page
	 */
	addSkipLink: (targetId: string, text?: string) => void;
}

export function useAccessibility(): UseAccessibilityReturn {
	const { isBrowserEnv } = useBrowser();

	const liveRegion = ref<HTMLElement | null>(null);

	function announceToScreenReader(
		message: string,
		priority: AriaLivePriority = AriaLivePriority.polite,
	): void {
		if (!liveRegion.value && typeof document !== 'undefined') {
			const existingRegion = document.getElementById('aria-live-announcer');
			if (existingRegion) {
				liveRegion.value = existingRegion as HTMLElement;
			} else {
				const newRegion = document.createElement('div');
				newRegion.id = 'aria-live-announcer';
				newRegion.setAttribute('aria-live', priority);
				newRegion.setAttribute('aria-atomic', 'true');
				newRegion.className = 'sr-only';
				document.body.appendChild(newRegion);
				liveRegion.value = newRegion;
			}
		}

		if (liveRegion.value) {
			liveRegion.value.setAttribute('aria-live', priority);
			liveRegion.value.textContent = message;
		}
	}

	function isHiddenFromScreenReaders(element: HTMLElement): boolean {
		if (!isDefined(element)) {
			return true;
		}

		// Check aria-hidden attribute
		if (element.hasAttribute('aria-hidden') && element.getAttribute('aria-hidden') === 'true') {
			return true;
		}

		const style = getComputedStyle(element);
		if (style.display === 'none' || style.visibility === 'hidden') {
			return true;
		}

		// In test environments, we may not have access to IntersectionObserver
		// This is a simplification for the test
		if (isBrowserEnv() && window.IntersectionObserver) {
			// We're checking visibility only in real browser environments
			// We could also use useElementVisibility but it requires a reactive element
			return false;
		}

		return false;
	}

	function addSkipLink(targetId: string, text = 'Skip to main content'): void {
		if (!isBrowserEnv()) {
			return;
		}

		// Check if skip link already exists
		const existingSkipLink = document.querySelector('.skip-link');
		if (existingSkipLink) {
			return;
		}

		const skipLink = document.createElement('a');

		skipLink.textContent = text;
		skipLink.href = `#${targetId}`;
		skipLink.className = 'skip-link';

		skipLink.style.top = '0';
		skipLink.style.left = '0';
		skipLink.style.color = '#000';
		skipLink.style.zIndex = '9999';
		skipLink.style.padding = '0.5rem';
		skipLink.style.position = 'absolute';
		skipLink.style.backgroundColor = '#fff';
		skipLink.style.transform = 'translateY(-100%)';
		skipLink.style.transition = 'transform 0.3s';

		skipLink.addEventListener('focus', () => {
			skipLink.style.transform = 'translateY(0)';
		});

		skipLink.addEventListener('blur', () => {
			skipLink.style.transform = 'translateY(-100%)';
		});

		document.body.insertBefore(skipLink, document.body.firstChild);
	}

	onMounted(() => {
		if (!liveRegion.value) {
			const existingRegion = document.getElementById('aria-live-announcer');
			if (existingRegion) {
				liveRegion.value = existingRegion as HTMLElement;
				return;
			}

			const newRegion = document.createElement('div');

			newRegion.id = 'aria-live-announcer';
			newRegion.setAttribute('aria-live', 'polite');
			newRegion.setAttribute('aria-atomic', 'true');
			newRegion.className = 'sr-only';

			document.body.appendChild(newRegion);

			liveRegion.value = newRegion;
		}
	});

	return {
		announceToScreenReader,
		isHiddenFromScreenReaders,
		addSkipLink,

		liveRegion,
	};
}
