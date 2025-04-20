import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { BrowserService } from './browser-service';

describe('BrowserService', () => {
	let service: BrowserService;

	beforeEach(() => {
		service = BrowserService.instance;
	});

	it('should be a singleton', () => {
		const instance1 = BrowserService.instance;
		const instance2 = BrowserService.instance;
		expect(instance1).toBe(instance2);
	});

	describe('isBrowserEnv', () => {
		const originalDocument = global.document;

		afterEach(() => {
			global.document = originalDocument;
		});

		it('should return true when document is defined', () => {
			expect(service.isBrowserEnv()).toBe(true);
		});

		it('should return false when document is undefined', () => {
			vi.stubGlobal('document', undefined);
			expect(service.isBrowserEnv()).toBe(false);

			vi.unstubAllGlobals();
		});
	});
});
