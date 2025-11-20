import { describe, expect, it, vi, beforeEach } from 'vitest';
import { createApp } from 'vue';
import BambooProvider from './provider';

describe('BambooProvider', () => {
	let app: ReturnType<typeof createApp>;

	beforeEach(() => {
		app = createApp({});
		vi.clearAllMocks();
	});

	it('is a valid Vue plugin', () => {
		expect(BambooProvider).toHaveProperty('install');
		expect(typeof BambooProvider.install).toBe('function');
	});

	it('registers all components with kebab-case names', () => {
		const componentSpy = vi.spyOn(app, 'component');

		app.use(BambooProvider);

		expect(componentSpy).toHaveBeenCalledWith('bo-badge', expect.anything());
		expect(componentSpy).toHaveBeenCalledWith('bo-button', expect.anything());
		expect(componentSpy).toHaveBeenCalledWith('bo-icon', expect.anything());
		expect(componentSpy).toHaveBeenCalledWith('bo-link', expect.anything());
		expect(componentSpy).toHaveBeenCalledWith('bo-loading-ring', expect.anything());
		expect(componentSpy).toHaveBeenCalledWith('bo-loading-spinner', expect.anything());
		expect(componentSpy).toHaveBeenCalledWith('bo-text', expect.anything());
		expect(componentSpy).toHaveBeenCalledWith('bo-tooltip', expect.anything());
		expect(componentSpy).toHaveBeenCalledWith('bo-tooltip-container', expect.anything());
	});

	it('can be installed without errors', () => {
		expect(() => app.use(BambooProvider)).not.toThrow();
	});
});
