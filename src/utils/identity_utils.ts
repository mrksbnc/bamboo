export class IdentityUtils {
	static generateRandomId(): string {
		return Symbol(
			Math.random().toString(36).substring(2, 15) + Date.now(),
		).toString();
	}

	static generateRandomIdWithPrefix(prefix: string): string {
		return `${prefix}-${IdentityUtils.generateRandomId()}`;
	}
}
