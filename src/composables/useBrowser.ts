export interface UseBrowserReturn {
	/**
	 * Checks if the current environment is a browser environment
	 * and if it has access to the `window` and `document` objects
	 */
	isBrowserEnv: () => boolean;
}

export function useBrowser(): UseBrowserReturn {
	function isBrowserEnv(): boolean {
		return typeof window !== 'undefined' && typeof document !== 'undefined';
	}

	return {
		isBrowserEnv,
	};
}
