let instance: BrowserService | null = null;

export interface BoBrowserService {
	/**
	 * Checks if the current environment is a browser environment
	 */
	isBrowserEnv(): boolean;
}

export class BrowserService implements BoBrowserService {
	static get instance(): BrowserService {
		if (!instance) {
			instance = new BrowserService();
		}
		return instance;
	}

	isBrowserEnv(): boolean {
		return typeof document !== 'undefined';
	}
}
