export interface UseTailwind {
	merge: (...classes: string[]) => string;
}

export const useTailwind = (): UseTailwind => {
	const merge = (...classes: string[]): string => {
		return Array.from(
			new Set<string>(
				classes
					.map((c) => c?.split(' ') ?? [])
					.flat()
					.filter(Boolean),
			).values(),
		).join(' ');
	};

	return {
		merge,
	};
};
