import { vi } from 'vitest';

global.ResizeObserver = class ResizeObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
};

global.IntersectionObserver = class IntersectionObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
	root: null;
	rootMargin: '';
	thresholds: [];
	takeRecords(): IntersectionObserverEntry[] {
		return [];
	}
};

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: vi.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(),
		removeListener: vi.fn(),
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn(),
	})),
});
