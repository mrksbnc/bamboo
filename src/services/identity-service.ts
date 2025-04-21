let instance: IdentityService | null = null;

export interface BoIdentityService {
	/**
	 * Generates a unique identifier for an element
	 */
	generateId(prefix?: string): string;
}

export class IdentityService implements BoIdentityService {
	static get instance(): IdentityService {
		if (!instance) {
			instance = new IdentityService();
		}
		return instance;
	}

	generateId(descriptor?: string): string {
		return descriptor ? `${descriptor}-${crypto.randomUUID()}` : crypto.randomUUID();
	}
}
