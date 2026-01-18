export interface UseColor {
	getValidOrFallbackColorFromStr(prop: string): string;
}

export const useColor = (): UseColor => {
	const TEXT_REPLACE_PLACEHOLDER = '__BLANK__';

	const UNKNOWN_COLOR_WARNING = [
		`The custom color "__BLANK__" is not a valid color definition.`,
		'Valid color definitions are:',
		'\t- a variable name (e.g. --my-color)',
		'\t- a hex color (e.g. #ff0000)',
		'\t- an rgb color (e.g. rgb(255, 0, 0))',
		'\t- an rgba color (e.g. rgba(255, 0, 0, 0.5))',
		'The custom color will be ignored and currentColor will be used instead.',
	].join('\n');

	function getValidOrFallbackColorFromStr(prop: string): string {
		if (
			prop.startsWith('#') ||
			prop.startsWith('oklch') ||
			prop.startsWith('rgb') ||
			prop.startsWith('rgba')
		) {
			return prop;
		} else if (prop.startsWith('--')) {
			/** CSS variable */
			return `var(${prop})`;
		} else if (prop?.length === 6) {
			/** Hex color without the leading # */
			return `#${prop}`;
		} else {
			console.warn(UNKNOWN_COLOR_WARNING.replace(TEXT_REPLACE_PLACEHOLDER, prop));
			return 'inherit';
		}
	}

	return {
		getValidOrFallbackColorFromStr,
	};
};
