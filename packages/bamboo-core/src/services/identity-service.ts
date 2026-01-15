let instance: IdentityService;

export class IdentityService {
	static get instance(): IdentityService {
		if (!instance) {
			instance = new IdentityService();
		}
		return instance;
	}

	private generateUUID(): string {
		// Check if we're in a browser environment with crypto.randomUUID support
		if (
			typeof window !== 'undefined' &&
			window.crypto &&
			typeof window.crypto.randomUUID === 'function'
		) {
			return window.crypto.randomUUID();
		}

		// Fallback for SSR or environments without crypto.randomUUID
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			const r = (Math.random() * 16) | 0;
			const v = c === 'x' ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});
	}

	getComponentId(descriptor?: string): string {
		return descriptor ? `bo-${descriptor}-${this.generateUUID()}` : `bo-${this.generateUUID()}`;
	}

	getDataTestId(descriptor?: string): string {
		return descriptor
			? `test-bo-${descriptor}-${this.generateUUID()}`
			: `test-bo-${this.generateUUID()}`;
	}
}
