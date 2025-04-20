export function useString() {
	function capitalize(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	function camelCaseToTitleCase(str: string): string {
		return str
			.replace(/([A-Z])/g, ' $1')
			.replace(/^./, (s) => s.toUpperCase())
			.trim();
	}

	function isEmptyStr(str: unknown): boolean {
		return (
			(typeof str === 'string' && str.trim().length === 0) || str === null || str === undefined
		);
	}

	function safeString(str: unknown): string {
		return isEmptyStr(str) ? '' : String(str);
	}

	return {
		capitalize,
		camelCaseToTitleCase,
		isEmptyStr,
		safeString,
	};
}
