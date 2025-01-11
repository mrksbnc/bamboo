export class StringUtils {
	/** Capitalizes the first letter of a string. */
	static capitalize(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1)
	}

	/** Converts a camel case string to title case. */
	static camelCaseToTitleCase(str: string): string {
		return str
			.replace(/([A-Z])/g, ' $1')
			.replace(/^./, (s) => s.toUpperCase())
			.trim()
	}

	/** Checks if a string is empty, null, or undefined.*/
	static isEmptyStr(str: unknown): boolean {
		return (typeof str === 'string' && str.trim().length === 0) || str === null || str === undefined
	}

	/** Returns an empty string if the input is undifined, null, otherwise it returns the original string. */
	static safeString(str: unknown): string {
		return StringUtils.isEmptyStr(str) ? '' : String(str)
	}
}
