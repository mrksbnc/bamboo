import { isDefined } from '@vueuse/core';

export interface UseStringReturn {
	/**
	 * Capitalizes the first letter of a string
	 * @param str The string to capitalize
	 * @returns The capitalized string
	 */
	capitalize: (str: string) => string;
	/**
	 * Converts a camelCase string to Title Case
	 * @param str The camelCase string to convert
	 * @returns The Title Case string
	 */
	camelCaseToTitleCase: (str: string) => string;
	/**
	 * Checks if a value is an empty string, null, or undefined
	 * @param str The value to check
	 * @returns True if the value is empty, null, or undefined
	 */
	isEmptyStr: (str: unknown) => boolean;
	/**
	 * Safely converts a value to a string, returning an empty string for null or undefined
	 * @param str The value to convert to a string
	 * @returns The string value or an empty string
	 */
	safeString: (str: unknown) => string;
	/**
	 * Converts a string to a slug (lowercase with hyphens instead of spaces)
	 * @param str The string to slugify
	 * @returns The slugified string
	 */
	slugify: (str: string) => string;
	/**
	 * Truncates a string to a maximum length and adds a suffix
	 * @param str The string to truncate
	 * @param maxLength The maximum length of the string
	 * @param suffix The suffix to add to truncated strings (default: '...')
	 * @returns The truncated string
	 */
	truncate: (str: string, maxLength: number, suffix?: string) => string;
}

export function useString(): UseStringReturn {
	function capitalize(str: string): string {
		if (!str) return str;
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	function camelCaseToTitleCase(str: string): string {
		if (!str) return str;
		return str
			.replace(/([A-Z])/g, ' $1')
			.replace(/^./, (s) => s.toUpperCase())
			.trim();
	}

	function isEmptyStr(str: unknown): boolean {
		return !isDefined(str) || (typeof str === 'string' && str.trim().length === 0);
	}

	function safeString(str: unknown): string {
		return isEmptyStr(str) ? '' : String(str);
	}

	function slugify(str: string): string {
		return str.toLowerCase().replace(/ /g, '-');
	}

	function truncate(str: string, maxLength: number, suffix = '...'): string {
		if (!str || str.length <= maxLength) return str;
		return str.slice(0, maxLength) + suffix;
	}

	return {
		capitalize,
		camelCaseToTitleCase,
		isEmptyStr,
		safeString,
		slugify,
		truncate,
	};
}
