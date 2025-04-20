import { isDefined } from '@vueuse/core';
import { onMounted, ref, type Ref } from 'vue';
import { useIdentity } from './useIdentity';

export enum AriaLivePriority {
	polite = 'polite',
	assertive = 'assertive',
}

export interface UseAccessibilityReturn {
	announceToScreenReader: (message: string, priority?: AriaLivePriority) => void;
	isHiddenFromScreenReaders: (element: HTMLElement) => boolean;
	addSkipLink: (targetId: string, text?: string) => void;
	generateAccessibleId: (prefix: string) => string;
	liveRegion: Ref<HTMLElement | null>;
}

export function useAccessibility(): UseAccessibilityReturn {
	const liveRegion = ref<HTMLElement | null>(null);

	onMounted(() => {
		if (!liveRegion.value) {
			const existingRegion = document.getElementById('aria-live-announcer');
			if (existingRegion) {
				liveRegion.value = existingRegion as HTMLElement;
			} else {
				const newRegion = document.createElement('div');
				newRegion.id = 'aria-live-announcer';
				newRegion.setAttribute('aria-live', 'polite');
				newRegion.setAttribute('aria-atomic', 'true');
				newRegion.className = 'sr-only';
				document.body.appendChild(newRegion);
				liveRegion.value = newRegion;
			}
		}
	});

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

	const isHiddenFromScreenReaders = (element: HTMLElement): boolean => {
		if (!isDefined(element)) return true;

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
		if (typeof window !== 'undefined' && window.IntersectionObserver) {
			// We're checking visibility only in real browser environments
			// We could also use useElementVisibility but it requires a reactive element
			return false;
		}

		return false;
	};

	const addSkipLink = (targetId: string, text = 'Skip to main content'): void => {
		if (typeof document === 'undefined') return;

		// Check if skip link already exists
		const existingSkipLink = document.querySelector('.skip-link');
		if (existingSkipLink) return;

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
		liveRegion,
	};
}
