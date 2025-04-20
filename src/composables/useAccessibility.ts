import { useIdentity } from './useIdentity';

export interface UseAccessibilityReturn {
	announceToScreenReader: (message: string, priority?: 'polite' | 'assertive') => void;
	isHiddenFromScreenReaders: (element: HTMLElement) => boolean;
	addSkipLink: (targetId: string, text?: string) => void;
	generateAccessibleId: (prefix: string) => string;
}

export function useAccessibility(): UseAccessibilityReturn {
	const announceToScreenReader = (
		message: string,
		priority: 'polite' | 'assertive' = 'polite',
	): void => {
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

		liveRegion.textContent = message;
	};

	const isHiddenFromScreenReaders = (element: HTMLElement): boolean => {
		return (
			(element.hasAttribute('aria-hidden') && element.getAttribute('aria-hidden') === 'true') ||
			getComputedStyle(element).display === 'none' ||
			getComputedStyle(element).visibility === 'hidden'
		);
	};

	const addSkipLink = (targetId: string, text = 'Skip to main content'): void => {
		const skipLink = document.createElement('a');
		skipLink.href = `#${targetId}`;
		skipLink.className = 'skip-link';
		skipLink.textContent = text;

		skipLink.style.position = 'absolute';
		skipLink.style.transform = 'translateY(-100%)';
		skipLink.style.transition = 'transform 0.3s';
		skipLink.style.padding = '0.5rem';
		skipLink.style.backgroundColor = '#fff';
		skipLink.style.color = '#000';
		skipLink.style.zIndex = '9999';
		skipLink.style.left = '0';
		skipLink.style.top = '0';

		skipLink.addEventListener('focus', () => {
			skipLink.style.transform = 'translateY(0)';
		});

		skipLink.addEventListener('blur', () => {
			skipLink.style.transform = 'translateY(-100%)';
		});

		document.body.insertBefore(skipLink, document.body.firstChild);
	};

	const generateAccessibleId = (prefix: string): string => {
		return useIdentity().generateRandomIdWithPrefix(prefix);
	};

	return {
		announceToScreenReader,
		isHiddenFromScreenReaders,
		addSkipLink,
		generateAccessibleId,
	};
}
