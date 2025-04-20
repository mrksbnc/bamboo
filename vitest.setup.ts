// Import Vitest for mocking capabilities
import { userEvent } from '@vitest/browser/context';
import { beforeAll, vi } from 'vitest';

// Setup userEvent for tests
beforeAll(() => {
	// Initialize userEvent for @vitest/browser
	if (typeof globalThis.userEvent === 'undefined') {
		globalThis.userEvent = userEvent.setup();
	}
});

// Mock browser APIs not available in JSDOM
if (typeof window !== 'undefined') {
	// Mock ResizeObserver
	if (!window.ResizeObserver) {
		window.ResizeObserver = class ResizeObserver {
			constructor(callback: any) {
				this.callback = callback;
			}
			callback: any;
			observe() {
				return null;
			}
			unobserve() {
				return null;
			}
			disconnect() {
				return null;
			}
		};
	}

	// Mock matchMedia
	if (!window.matchMedia) {
		window.matchMedia = (() => ({
			matches: false,
			addListener: () => {},
			removeListener: () => {},
			addEventListener: () => {},
			removeEventListener: () => {},
			dispatchEvent: () => true,
			media: '',
			onchange: null,
		})) as any;
	}

	// Mock IntersectionObserver
	if (!window.IntersectionObserver) {
		window.IntersectionObserver = class IntersectionObserver {
			root: Element | null = null;
			rootMargin: string = '0px';
			thresholds: ReadonlyArray<number> = [0];

			constructor(callback: any) {
				this.callback = callback;
			}
			callback: any;
			observe() {
				return null;
			}
			unobserve() {
				return null;
			}
			disconnect() {
				return null;
			}
			takeRecords(): IntersectionObserverEntry[] {
				return [];
			}
		} as any;
	}

	// Mock CSS functions
	if (!window.CSS) {
		window.CSS = {
			supports: () => true,
			escape: (str: string) => str,
		} as any;
	}

	// Mock localStorage if it doesn't exist
	if (!window.localStorage) {
		window.localStorage = {
			getItem: vi.fn(),
			setItem: vi.fn(),
			removeItem: vi.fn(),
			clear: vi.fn(),
			key: vi.fn(),
			length: 0,
		};
	}

	// Ensure window.crypto for services that use randomUUID
	if (!window.crypto) {
		window.crypto = {
			getRandomValues: (arr: Uint8Array) => {
				for (let i = 0; i < arr.length; i++) {
					arr[i] = Math.floor(Math.random() * 256);
				}
				return arr;
			},
			randomUUID: () => {
				return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
					const r = (Math.random() * 16) | 0;
					const v = c === 'x' ? r : (r & 0x3) | 0x8;
					return v.toString(16);
				});
			},
		} as any;
	}

	// Mock focus for keyboard tests
	if (typeof HTMLElement !== 'undefined' && !HTMLElement.prototype.focus) {
		HTMLElement.prototype.focus = vi.fn();
	}

	// Ensure Element has scrollIntoView
	if (typeof Element !== 'undefined' && !Element.prototype.scrollIntoView) {
		Element.prototype.scrollIntoView = vi.fn();
	}
}

// Setup for keyboard events registry (required for @vitest/browser)
globalThis.__VI_KEYBOARD_EVENT_REGISTRY__ = new Map();

// Mock document methods used by accessibility service
if (typeof document !== 'undefined') {
	document.createElement =
		document.createElement ||
		vi.fn().mockImplementation((tag) => {
			const element = {
				tagName: tag.toUpperCase(),
				getAttribute: vi.fn(),
				setAttribute: vi.fn(),
				appendChild: vi.fn(),
				removeChild: vi.fn(),
				style: {},
				focus: vi.fn(),
				textContent: '',
				id: '',
				classList: {
					add: vi.fn(),
					remove: vi.fn(),
					contains: vi.fn(),
				},
				addEventListener: vi.fn(),
				removeEventListener: vi.fn(),
				dispatchEvent: vi.fn(),
			};
			return element;
		});
}

// Reference type definitions for browser providers
/// <reference types="@vitest/browser/providers/playwright" />
/// <reference types="@vitest/browser/providers/webdriverio" />
