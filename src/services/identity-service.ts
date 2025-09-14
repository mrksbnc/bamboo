let instance: IdentityService;

export class IdentityService {
	static get instance(): IdentityService {
		if (!instance) {
			instance = new IdentityService();
		}
		return instance;
	}

	getComponentId(descriptor?: string): string {
		return descriptor ? `${descriptor}-${crypto.randomUUID()}` : crypto.randomUUID();
	}

	getDataTestId(descriptor?: string): string {
		return descriptor ? `test-${descriptor}-${crypto.randomUUID()}` : `test-${crypto.randomUUID()}`;
	}
}
