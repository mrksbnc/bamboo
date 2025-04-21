import { BrowserService } from '@/services/browser-service';
import { isDefined } from '@vueuse/core';

export enum AriaLivePriority {
	polite = 'polite',
	assertive = 'assertive',
}

export interface BoAccessibilityService {
	/**
	 * The live region element
	 */
	liveRegion: HTMLElement | null;
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

let instance: AccessibilityService | null = null;

export class AccessibilityService implements BoAccessibilityService {
	private region: HTMLElement | null = null;

	constructor() {
		if (!this.region) {
			const existingRegion = document.getElementById('aria-live-announcer');

			if (existingRegion) {
				this.region = existingRegion as HTMLElement;
				return;
			}

			const newRegion = document.createElement('div');

			newRegion.id = 'aria-live-announcer';
			newRegion.setAttribute('aria-live', 'polite');
			newRegion.setAttribute('aria-atomic', 'true');
			newRegion.className = 'sr-only';

			document.body.appendChild(newRegion);

			this.region = newRegion;
		}
	}

	static get instance(): AccessibilityService {
		if (!instance) {
			instance = new AccessibilityService();
		}

		return instance;
	}

	get liveRegion(): HTMLElement | null {
		return this.region;
	}

	addSkipLink(targetId: string, text = 'Skip to main content'): void {
		if (!BrowserService.instance.isBrowserEnv()) {
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

	announceToScreenReader(
		message: string,
		priority: AriaLivePriority = AriaLivePriority.polite,
	): void {
		if (!this.region && BrowserService.instance.isBrowserEnv()) {
			const existingRegion = document.getElementById('aria-live-announcer');

			if (existingRegion) {
				this.region = existingRegion as HTMLElement;
				return;
			}

			const newRegion = document.createElement('div');

			newRegion.id = 'aria-live-announcer';
			newRegion.setAttribute('aria-live', priority);
			newRegion.setAttribute('aria-atomic', 'true');
			newRegion.className = 'sr-only';

			document.body.appendChild(newRegion);
			this.region = newRegion;
		}

		if (this.region) {
			this.region.setAttribute('aria-live', priority);
			this.region.textContent = message;
		}
	}

	isHiddenFromScreenReaders(element: HTMLElement): boolean {
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
		if (BrowserService.instance.isBrowserEnv() && window.IntersectionObserver) {
			// We're checking visibility only in real browser environments
			// We could also use useElementVisibility but it requires a reactive element
			return false;
		}

		return false;
	}
}
