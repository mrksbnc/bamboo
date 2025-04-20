import { vi } from 'vitest';

// Mock browser APIs that aren't available in the JSDOM environment
global.ResizeObserver = vi.fn().mockImplementation(() => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
}));

// Make sure window.matchMedia is available
global.matchMedia = vi.fn().mockImplementation((query) => ({
	matches: false,
	media: query,
	onchange: null,
	addListener: vi.fn(),
	removeListener: vi.fn(),
	addEventListener: vi.fn(),
	removeEventListener: vi.fn(),
	dispatchEvent: vi.fn(),
}));

// Mock IntersectionObserver for useElementVisibility
global.IntersectionObserver = vi.fn().mockImplementation((callback) => {
	return {
		observe: vi.fn(),
		unobserve: vi.fn(),
		disconnect: vi.fn(),
		takeRecords: vi.fn(),
		// Simulate element being visible by default
		trigger: (isIntersecting = true) => {
			callback([
				{
					isIntersecting,
					boundingClientRect: {},
					intersectionRatio: isIntersecting ? 1 : 0,
					intersectionRect: {},
					rootBounds: null,
					target: {},
					time: Date.now(),
				},
			]);
		},
	};
});

// Add CSS related functions
if (typeof getComputedStyle === 'undefined') {
	global.getComputedStyle = vi.fn().mockImplementation((element) => {
		return {
			display: element.style.display || 'block',
			visibility: element.style.visibility || 'visible',
		};
	});
}

// Mock Element.prototype functions if needed by tests
if (!Element.prototype.scrollIntoView) {
	Element.prototype.scrollIntoView = vi.fn();
}
