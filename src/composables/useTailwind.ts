export function useTailwind() {
	function merge(...classes: (string | null | undefined)[]): string {
		if (classes.length === 0) {
			return '';
		}

		const ensuredEntities = classes.filter((f) => f !== null && f !== undefined);
		const arrayLike = ensuredEntities.map((c) => c.split(' ').filter(Boolean));

		const flattened = arrayLike.flat();
		const unique = new Set(flattened);

		return Array.from(unique).join(' ');
	}

	return {
		merge,
	};
}
