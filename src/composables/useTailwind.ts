import { type MaybeRef } from '@vueuse/core';
import { unref } from 'vue';

export interface UseTailwindReturn {
	/**
	 * Merges multiple class strings into a single string, removing duplicates
	 * @param classes Array of class strings, which can be null or undefined
	 * @returns A single string of combined classes without duplicates
	 */
	merge: (...classes: MaybeRef<string | null | undefined>[]) => string;
}

export function useTailwind(): UseTailwindReturn {
	function merge(...classes: MaybeRef<string | null | undefined>[]): string {
		if (classes.length === 0) {
			return '';
		}

		const ensuredEntities = classes
			.map((cls) => unref(cls))
			.filter((f) => f !== null && f !== undefined);

		const arrayLike = ensuredEntities.map((c) => c.split(' ').filter(Boolean));

		const flattened = arrayLike.flat();
		const unique = new Set(flattened);

		return Array.from(unique).join(' ');
	}

	return {
		merge,
	};
}
