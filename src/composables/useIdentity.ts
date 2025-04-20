export function useIdentity() {
	function generateRandomId(): string {
		return Math.random()
			.toString(36)
			.replace(/[^a-z]+/g, '')
			.slice(0, 10);
	}

	function generateRandomIdWithPrefix(prefix: string): string {
		return [prefix, generateRandomId()].join('-');
	}

	return {
		generateRandomId,
		generateRandomIdWithPrefix,
	};
}
