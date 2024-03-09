export class StringUtils {
	static capitalize(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	static camelCaseToTitleCase(str: string): string {
		return str.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
	}

	static isEmpty(str: string): boolean {
		return (
			typeof str === 'string' && str.length === 0 && str.trim().length === 0
		);
	}
}
