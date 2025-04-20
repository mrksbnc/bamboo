export class AccessibilityUtils {
	/**
	 * Announce messages to screen readers using an ARIA live region. The
	 * available priority levels are 'polite' and 'assertive'.
	 */
	static announceToScreenReader(
		message: string,
		priority: 'polite' | 'assertive' = 'polite',
	): void {
		// Create or reuse a live region
		let liveRegion = document.getElementById('aria-live-announcer');
		if (!liveRegion) {
			liveRegion = document.createElement('div');
			liveRegion.id = 'aria-live-announcer';
			liveRegion.setAttribute('aria-live', priority);
			liveRegion.setAttribute('aria-atomic', 'true');
			liveRegion.className = 'sr-only';
			document.body.appendChild(liveRegion);
		} else {
			liveRegion.setAttribute('aria-live', priority);
		}

		// Set message to be announced
		liveRegion.textContent = message;
	}

	static isHiddenFromScreenReaders(element: HTMLElement): boolean {
		return (
			(element.hasAttribute('aria-hidden') && element.getAttribute('aria-hidden') === 'true') ||
			getComputedStyle(element).display === 'none' ||
			getComputedStyle(element).visibility === 'hidden'
		);
	}

	static addSkipLink(targetId: string, text = 'Skip to main content'): void {
		const skipLink = document.createElement('a');
		skipLink.href = `#${targetId}`;
		skipLink.className = 'skip-link';
		skipLink.textContent = text;

		// Apply styles to keep it visually hidden until focused
		skipLink.style.position = 'absolute';
		skipLink.style.transform = 'translateY(-100%)';
		skipLink.style.transition = 'transform 0.3s';
		skipLink.style.padding = '0.5rem';
		skipLink.style.backgroundColor = '#fff';
		skipLink.style.color = '#000';
		skipLink.style.zIndex = '9999';
		skipLink.style.left = '0';
		skipLink.style.top = '0';

		// Show on focus
		skipLink.addEventListener('focus', () => {
			skipLink.style.transform = 'translateY(0)';
		});

		// Hide when blurred
		skipLink.addEventListener('blur', () => {
			skipLink.style.transform = 'translateY(-100%)';
		});

		document.body.insertBefore(skipLink, document.body.firstChild);
	}

	static generateAccessibleId(prefix: string): string {
		return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
	}
}
