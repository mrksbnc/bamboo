import { describe, expect, it, vi, beforeEach } from 'vitest';
import { createApp } from 'vue';
import BambooPlugin from './bamboo-plugin';

vi.mock('@/composables', () => ({
	useTheme: () => ({
		initTheme: vi.fn(),
	}),
}));

describe('BambooPlugin', () => {
	let app: ReturnType<typeof createApp>;

	beforeEach(() => {
		app = createApp({});
		vi.clearAllMocks();
	});

	it('is a valid Vue plugin', () => {
		expect(BambooPlugin).toHaveProperty('install');
		expect(typeof BambooPlugin.install).toBe('function');
	});

	it('registers all components', () => {
		const componentSpy = vi.spyOn(app, 'component');

		app.use(BambooPlugin);

		expect(componentSpy).toHaveBeenCalledWith('BoBadge', expect.anything());
		expect(componentSpy).toHaveBeenCalledWith('BoButton', expect.anything());
		expect(componentSpy).toHaveBeenCalledWith('BoIcon', expect.anything());
		expect(componentSpy).toHaveBeenCalledWith('BoLink', expect.anything());
		expect(componentSpy).toHaveBeenCalledWith('BoLoadingRing', expect.anything());
		expect(componentSpy).toHaveBeenCalledWith('BoLoadingSpinner', expect.anything());
		expect(componentSpy).toHaveBeenCalledWith('BoText', expect.anything());
		expect(componentSpy).toHaveBeenCalledWith('BoTooltip', expect.anything());
		expect(componentSpy).toHaveBeenCalledWith('BoTooltipContainer', expect.anything());
	});

	it('can be installed without errors', () => {
		expect(() => app.use(BambooPlugin)).not.toThrow();
	});
});
