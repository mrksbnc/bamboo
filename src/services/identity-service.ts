let instance: IdentityService | null = null;

export interface BoIdentityService {
	/**
	 * Generates a unique identifier for an element
	 */
	getId(prefix?: string): string;
}

export class IdentityService implements BoIdentityService {
	static get instance(): IdentityService {
		if (!instance) {
			instance = new IdentityService();
		}
		return instance;
	}

	getId(descriptor?: string): string {
		return Symbol(descriptor ?? crypto.randomUUID()).toString();
	}
}
