export interface UseTailwind {
	merge: (...cn: string[]) => void;
}

/**
 * General utility function to merge multiple blocks of classes into a single string
 * that can be set on an element using the `class` attribute.
 *
 * @param cn - The class names to merge.
 * @returns A single string containing all the class names without duplicates or undefined, null or empty strings.
 */
function merge(...cn: (string | undefined | null)[]): string {
	const classSet = new Set<string>(cn.map((c) => c?.split(' ') ?? []).flatMap((c) => c));
	return Array.from(classSet).filter(Boolean).join(' ');
}

export const useTailwind = (): UseTailwind => {
	return {
		merge,
	};
};
