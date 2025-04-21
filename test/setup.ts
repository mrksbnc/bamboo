import { mount } from '@vue/test-utils';
import { expect, vi } from 'vitest';
import type { Component } from 'vue';

global.ResizeObserver = class ResizeObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
};

global.IntersectionObserver = class IntersectionObserver {
	constructor() {}
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

export const mountComponent = (component: Component, options: any = {}) => {
	return mount(component, {
		global: {
			...options.global,
		},
		...options,
	});
};

export const waitFor = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

expect.extend({
	toBeWithinRange(received: number, floor: number, ceiling: number) {
		const pass = received >= floor && received <= ceiling;
		if (pass) {
			return {
				message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`,
				pass: true,
			};
		} else {
			return {
				message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
				pass: false,
			};
		}
	},
});
