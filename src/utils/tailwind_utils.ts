export class TailwindUtils {
	/**
	 * Merges multiple classes into a single class that can later
	 * directly be applied to an element.
	 */
	static merge(...classes: (string | null | undefined)[]): string {
		if (classes.length === 0) {
			return ''
		}

		return Array.from(
			new Set(
				classes
					.filter((f) => f !== null && f !== undefined)
					.map((c) => {
						return c.split(' ')
					})
					.flat(),
			),
		).join(' ')
	}
}
