let instance: IdentityService;

export class IdentityService {
	static get instance(): IdentityService {
		if (!instance) {
			instance = new IdentityService();
		}
		return instance;
	}

	getComponentId(descriptor?: string): string {
		return descriptor ? `bo-${descriptor}-${crypto.randomUUID()}` : `bo-${crypto.randomUUID()}`;
	}

	getDataTestId(descriptor?: string): string {
		return descriptor
			? `test-bo-${descriptor}-${crypto.randomUUID()}`
			: `test-bo-${crypto.randomUUID()}`;
	}
}
