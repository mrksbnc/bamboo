export class IdentityUtils {
	static generateRandomId(): string {
		return Math.random()
			.toString(36)
			.replace(/[^a-z]+/g, '')
			.slice(0, 10)
	}

	static generateRandomIdWithPrefix(prefix: string): string {
		return [prefix, IdentityUtils.generateRandomId()].join('-')
	}
}
