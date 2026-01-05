let instance: IdentityService;

export class IdentityService {
	static get instance(): IdentityService {
		if (!instance) {
			instance = new IdentityService();
		}
		return instance;
	}
	/**
	 * Simple wrapper around vue's new `useId` function which can be used to
	 * generate unique-per-application IDs that are guaranteed to be stable
	 * across the server and client renders.
	 */
	getComponentId(descriptor?: string): string {
		return descriptor ? `bo-${descriptor}-${crypto.randomUUID()}` : `bo-${crypto.randomUUID()}`;
	}
	/**
	 * Return a new unique data-test-id in the form of `test-${descriptor}-${uuid}`.
	 *
	 * @param descriptor - Any human readable descriptor of the component to be
	 * used as a prefix for the data-test-id. This is useful for debugging.
	 */
	getDataTestId(descriptor?: string): string {
		return descriptor
			? `test-bo-${descriptor}-${crypto.randomUUID()}`
			: `test-bo-${crypto.randomUUID()}`;
	}
}
