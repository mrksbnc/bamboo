import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { nextTick } from 'vue';
import { AriaLivePriority, useAccessibility } from './useAccessibility';

describe('useAccessibility', () => {
	let cleanup: (() => void)[] = [];

	beforeEach(() => {
		cleanup = [];
	});

	afterEach(() => {
		cleanup.forEach((fn) => fn());
		document.body.innerHTML = '';
	});

	describe('announceToScreenReader', () => {
		it('should create a live region if none exists', async () => {
			const { announceToScreenReader } = useAccessibility();
			announceToScreenReader('Test announcement');

			await nextTick();

			const liveRegion = document.getElementById('aria-live-announcer');
			expect(liveRegion).not.toBeNull();
			expect(liveRegion?.getAttribute('aria-live')).toBe('polite');
			expect(liveRegion?.textContent).toBe('Test announcement');
		});

		it('should use an existing live region if it exists', async () => {
			// Create a live region first
			const existingRegion = document.createElement('div');
			existingRegion.id = 'aria-live-announcer';
			existingRegion.setAttribute('aria-live', 'polite');
			document.body.appendChild(existingRegion);

			cleanup.push(() => existingRegion.remove());

			const { announceToScreenReader } = useAccessibility();
			announceToScreenReader('Test announcement');

			await nextTick();

			expect(existingRegion.textContent).toBe('Test announcement');
		});

		it('should respect priority parameter', async () => {
			const { announceToScreenReader } = useAccessibility();
			announceToScreenReader('Important announcement', AriaLivePriority.assertive);

			await nextTick();

			const liveRegion = document.getElementById('aria-live-announcer');
			expect(liveRegion?.getAttribute('aria-live')).toBe(AriaLivePriority.assertive);
		});
	});

	describe('isHiddenFromScreenReaders', () => {
		it('should detect aria-hidden elements', () => {
			const element = document.createElement('div');
			element.setAttribute('aria-hidden', 'true');
			document.body.appendChild(element);

			cleanup.push(() => element.remove());

			const { isHiddenFromScreenReaders } = useAccessibility();
			expect(isHiddenFromScreenReaders(element)).toBe(true);
		});

		it('should detect elements with display:none', () => {
			const element = document.createElement('div');
			element.style.display = 'none';
			document.body.appendChild(element);

			cleanup.push(() => element.remove());

			const { isHiddenFromScreenReaders } = useAccessibility();
			expect(isHiddenFromScreenReaders(element)).toBe(true);
		});

		it('should detect elements with visibility:hidden', () => {
			const element = document.createElement('div');
			element.style.visibility = 'hidden';
			document.body.appendChild(element);

			cleanup.push(() => element.remove());

			const { isHiddenFromScreenReaders } = useAccessibility();
			expect(isHiddenFromScreenReaders(element)).toBe(true);
		});

		it('should return false for visible elements', () => {
			const element = document.createElement('div');
			document.body.appendChild(element);

			cleanup.push(() => element.remove());

			const { isHiddenFromScreenReaders } = useAccessibility();
			expect(isHiddenFromScreenReaders(element)).toBe(false);
		});
	});

	describe('addSkipLink', () => {
		it('should add a skip link to the document', () => {
			const { addSkipLink } = useAccessibility();
			addSkipLink('main-content');

			const skipLink = document.querySelector('.skip-link');
			expect(skipLink).not.toBeNull();
			expect(skipLink?.getAttribute('href')).toBe('#main-content');
			expect(skipLink?.textContent).toBe('Skip to main content');
		});

		it('should respect the custom text parameter', () => {
			const { addSkipLink } = useAccessibility();
			addSkipLink('main-content', 'Skip to content');

			const skipLink = document.querySelector('.skip-link');
			expect(skipLink?.textContent).toBe('Skip to content');
		});

		it('should not create duplicate skip links', () => {
			const { addSkipLink } = useAccessibility();
			addSkipLink('main-content');
			addSkipLink('other-content');

			const skipLinks = document.querySelectorAll('.skip-link');
			expect(skipLinks.length).toBe(1);
			expect(skipLinks[0]?.getAttribute('href')).toBe('#main-content');
		});

		it('should show skip link on focus and hide on blur', () => {
			const { addSkipLink } = useAccessibility();
			addSkipLink('main-content');

			const skipLink = document.querySelector('.skip-link') as HTMLElement;

			// Initial state is hidden (transformed up)
			expect(skipLink.style.transform).toBe('translateY(-100%)');

			// Focus shows the link
			skipLink.dispatchEvent(new Event('focus'));
			expect(skipLink.style.transform).toBe('translateY(0)');

			// Blur hides the link again
			skipLink.dispatchEvent(new Event('blur'));
			expect(skipLink.style.transform).toBe('translateY(-100%)');
		});
	});

	describe('generateAccessibleId', () => {
		it('should generate an id with the specified prefix', () => {
			const { generateAccessibleId } = useAccessibility();
			const id = generateAccessibleId('test');

			expect(id).toContain('test-');
			expect(id.length).toBeGreaterThan(6); // Prefix plus some random characters
		});

		it('should generate unique ids', () => {
			const { generateAccessibleId } = useAccessibility();
			const id1 = generateAccessibleId('test');
			const id2 = generateAccessibleId('test');

			expect(id1).not.toBe(id2);
		});
	});
});
