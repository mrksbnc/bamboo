import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { BrowserService } from './browser-service';

describe('BrowserService', () => {
	const service = BrowserService.instance;
	const originalDocument = global.document;

	beforeEach(() => {
		global.document = originalDocument;
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	describe('isBrowserEnv', () => {
		it('should return true when document is defined', () => {
			expect(service.isBrowserEnv()).toBe(true);
		});

		it('should return false when document is undefined', () => {
			// Mock non-browser environment
			// @ts-expect-error - Intentionally setting document to undefined
			global.document = undefined;

			expect(service.isBrowserEnv()).toBe(false);
		});
	});
});
