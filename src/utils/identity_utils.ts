export class IdentityUtils {
	/**
	 * @description Generated a new random id.
	 *
	 * @returns A random id.
	 */
	static generateRandomId(): string {
		return Math.random()
			.toString(36)
			.replace(/[^a-z]+/g, '')
			.slice(0, 10);
	}
	/**
	 * @description Generated a new random id with the specified prefix.
	 *
	 * @param prefix - The prefix to be added to the random id.
	 * @returns A random id with the specified prefix.
	 */
	static generateRandomIdWithPrefix(prefix: string): string {
		return [prefix, IdentityUtils.generateRandomId()].join('-');
	}
}
