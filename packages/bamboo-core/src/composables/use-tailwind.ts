export interface UseTailwind {
	merge: (...classes: string[]) => string;
}

export const useTailwind = (): UseTailwind => {
	function merge(...classes: string[]): string {
		return Array.from(
			new Set<string>(
				classes
					.map((c) => c?.split(' ') ?? [])
					.flatMap((c) => c)
					.filter(Boolean),
			).values(),
		).join(' ');
	}

	return {
		merge,
	};
};
