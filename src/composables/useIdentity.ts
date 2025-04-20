export interface UseIdentityReturn {
	/**
	 * Generates a random ID string with 10 characters
	 */
	generateRandomId: () => string;
	/**
	 * Generates an ID string with a prefix provided by the user
	 * as argument.
	 */
	generateRandomIdWithPrefix: (prefix: string) => string;
	/**
	 * Generates a v4 UUID
	 */
	getUuid: () => string;
}

export function useIdentity(): UseIdentityReturn {
	function generateRandomId(): string {
		return Math.random()
			.toString(36)
			.replace(/[^a-z]+/g, '')
			.slice(0, 10);
	}

	function generateRandomIdWithPrefix(prefix: string): string {
		return [prefix, generateRandomId()].join('-');
	}

	function getUuid(): string {
		return crypto.randomUUID();
	}

	return {
		generateRandomId,
		generateRandomIdWithPrefix,
		getUuid,
	};
}
