let instance: IdentityService | null = null;

export interface BoIdentityService {
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
