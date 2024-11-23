export class StringUtils {
	/**
	 * @description
	 * This method capitalizes the first letter of a string.
	 *
	 * @example
	 * capitalize('hello world'); // Hello world
	 *
	 * @param str - The string to be capitalized.
	 * @returns The capitalized string.
	 */
	static capitalize(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	/**
	 * @description
	 * This method converts a string to title case.
	 *
	 * @example
	 * console.log(camelCaseToTitleCase('helloWorld')); // Hello World
	 *
	 * @param str - The string to be converted.
	 * @returns The converted string.
	 */
	static camelCaseToTitleCase(str: string): string {
		return str.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
	}
	/**
	 * @description
	 * This method checks if a string is empty, null, or undefined.
	 *
	 * @example
	 * isEmpty(''); // true
	 * isEmpty('hello world'); // false
	 * isEmpty(null); // true
	 *
	 * @param str - The string to be checked.
	 * @returns A boolean value indicating the result of the check.
	 */
	static isEmpty(str: string): boolean {
		return (
			str == null ||
			(typeof str === 'string' && str.length === 0 && str.trim().length === 0)
		);
	}
}
