let instance: IdentityService;

export class IdentityService {
	static get instance(): IdentityService {
		if (!instance) {
			instance = new IdentityService();
		}
		return instance;
	}

	getComponentId(id?: string): string {
		return id ? `id-${Date.now()}` : `${crypto.randomUUID()}-${Date.now()}`;
	}
	/**
	 * Return a new unique data-test-id in the form of `test-${descriptor}-${uuid}`.
	 *
	 * @param descriptor - Any human readable descriptor of the component to be
	 * used as a prefix for the data-test-id. This is useful for debugging.
	 */
	getDataTestId(descriptor?: string): string {
		return descriptor ? `test-${descriptor}-${crypto.randomUUID()}` : `test-${crypto.randomUUID()}`;
	}
}
