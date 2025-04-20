import { isDefined } from '@vueuse/core';

export interface BoStringService {
	/**
	 * Capitalizes the first letter of a string
	 */
	capitalize: (str: string) => string;
	/**
	 * Converts a camelCase string to Title Case
	 */
	camelCaseToTitleCase: (str: string) => string;
	/**
	 * Checks if a value is an empty string, null, or undefined
	 */
	isEmptyStr: (str: unknown) => boolean;
	/**
	 * Safely converts a value to a string, returning an empty string for null or undefined
	 */
	safeString: (str: unknown) => string;
	/**
	 * Converts a string to a slug (lowercase with hyphens instead of spaces)
	 */
	slugify: (str: string) => string;
	/**
	 * Truncates a string to a maximum length and adds a suffix
	 */
	truncate: (str: string, maxLength: number, suffix?: string) => string;
}

let instance: StringService | null = null;

export class StringService implements BoStringService {
	static get instance(): StringService {
		if (!instance) {
			instance = new StringService();
		}
		return instance;
	}

	capitalize(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	camelCaseToTitleCase(str: string): string {
		return str
			.replace(/([A-Z])/g, ' $1')
			.replace(/^./, (s) => s.toUpperCase())
			.trim();
	}

	isEmptyStr(str: unknown): boolean {
		return !isDefined(str) || (typeof str === 'string' && str.trim().length === 0);
	}

	safeString(str: unknown): string {
		return this.isEmptyStr(str) ? '' : String(str);
	}

	slugify(str: string): string {
		return str.toLowerCase().replace(/ /g, '-');
	}

	truncate(str: string, maxLength: number, suffix = '...'): string {
		return str.length > maxLength ? str.slice(0, maxLength) + suffix : str;
	}
}
