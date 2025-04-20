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
	/**
	 * Merges multiple CSS class strings, removing duplicates
	 * Uses unref to support reactive class values
	 */
	function merge(...classes: MaybeRef<string | null | undefined>[]): string {
		if (classes.length === 0) {
			return '';
		}

		// Unwrap reactive values and filter out null/undefined
		const ensuredEntities = classes
			.map((cls) => unref(cls))
			.filter((f) => f !== null && f !== undefined);

		// Split by spaces and filter out empty strings
		const arrayLike = ensuredEntities.map((c) => c.split(' ').filter(Boolean));

		// Flatten the array and remove duplicates using Set
		const flattened = arrayLike.flat();
		const unique = new Set(flattened);

		return Array.from(unique).join(' ');
	}

	return {
		merge,
	};
}
