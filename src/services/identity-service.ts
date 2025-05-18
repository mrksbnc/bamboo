let instance: IdentityService;

export interface BoIdentityService {
	/**
	 * Generates a unique identifier for an element
	 */
	uuid(prefix?: string): string;
}

export class IdentityService implements BoIdentityService {
	static get instance(): IdentityService {
		if (!instance) {
			instance = new IdentityService();
		}
		return instance;
	}

	uuid(descriptor?: string): string {
		return descriptor ? `${descriptor}-${crypto.randomUUID()}` : crypto.randomUUID();
	}
}
