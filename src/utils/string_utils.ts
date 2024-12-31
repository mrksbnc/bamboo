export class StringUtils {
	/**
	 * @description
	 * This method capitalizes the first letter of a string.
	 *
	 * @example
	 * capitalize('hello world'); // Hello world
	 */
	static capitalize(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1)
	}
	/**
	 * @description
	 * This method converts a string to title case.
	 *
	 * @example
	 * camelCaseToTitleCase('helloWorld'); // Hello World
	 */
	static camelCaseToTitleCase(str: string): string {
		return str
			.replace(/([A-Z])/g, ' $1')
			.replace(/^./, (s) => s.toUpperCase())
			.trim()
	}
	/**
	 * @description
	 * This method checks if a string is empty, null, or undefined.
	 *
	 * @example
	 * isEmptyStr(''); // true
	 * isEmptyStr('hello world'); // false
	 * isEmptyStr(null); // true
	 */
	static isEmptyStr(str: unknown): boolean {
		return (
			(typeof str === 'string' && str.trim().length === 0) ||
			str === null ||
			str === undefined
		)
	}
	/**
	 * @description
	 * This method returns an empty string if the input is empty or null, otherwise it returns the input as a string.
	 *
	 * @example
	 * safeString(''); // ''
	 * safeString('hello world'); // 'hello world'
	 * safeString(null); // ''
	 */
	static safeString(str: unknown): string {
		return StringUtils.isEmptyStr(str) ? '' : String(str)
	}
}
