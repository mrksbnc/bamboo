let instance: TailwindService | null = null;

export interface BoTailwindService {
	/**
	 * Merges multiple class strings into a single one and removes duplicates.
	 */
	merge(...classes: (string | null | undefined)[]): string;
}

export class TailwindService implements BoTailwindService {
	static get instance(): TailwindService {
		if (!instance) {
			instance = new TailwindService();
		}
		return instance;
	}

	merge(...classes: (string | null | undefined)[]): string {
		if (classes.length === 0) {
			return '';
		}

		const ensuredEntities = classes.filter((c) => c !== null && c !== undefined);
		const arrayLike = ensuredEntities.map((c) => c.split(' ').filter(Boolean));

		const flattened = arrayLike.flat();
		const unique = new Set(flattened);

		return Array.from(unique).join(' ');
	}
}
