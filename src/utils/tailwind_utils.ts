export class TailwindUtils {
	/**
	 * @description
	 * This method merges multiple classes into a single class that can later
	 * directly be applied to an element.
	 *
	 * @example
	 * merge('bg-blue-500', 'text-white', 'rounded-lg'); // bg-blue-500 text-white rounded-lg
	 *
	 * In case a null or undefined value is passed, it will be ignored.
	 *
	 * merge('bg-blue-500', null, 'text-white', 'rounded-lg'); // bg-blue-500 text-white rounded-lg
	 */
	static merge(...classes: (string | null | undefined)[]): string {
		return Array.from(
			new Set(classes
					.filter((f) => f !== null && f !== undefined)
					.map((c) => {
						return c.split(' ');
					})
					.flat()),
		).join(' ');
	}
}
