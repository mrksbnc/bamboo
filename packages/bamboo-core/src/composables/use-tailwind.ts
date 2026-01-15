export interface UseTailwind {
	merge: (...classes: string[]) => string;
}

export const useTailwind = (): UseTailwind => {
	const merge = (...classes: string[]): string => {
		return Array.from(
			new Set<string>(
				classes
					.filter(Boolean) // Filter out undefined/null values first
					.map((c) => c?.split(' ') ?? [])
					.flat(),
			).values(),
		).join(' ');
	};

	return {
		merge,
	};
};
