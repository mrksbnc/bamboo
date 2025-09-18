const TEXT_REPLACE_PLACEHOLDER = '__BLANK__' as const

const UNKOWN_COLOR_WARNING = [
	`The custom color "__BLANK__" is not a valid color definition.`,
	'Valid color definitions are:',
	'\t- a variable name (e.g. --my-color)',
	'\t- a hex color (e.g. #ff0000)',
	'\t- an rgb color (e.g. rgb(255, 0, 0))',
	'\t- an rgba color (e.g. rgba(255, 0, 0, 0.5))',
	'The custom color will be ignored and currentColor will be used instead.',
].join('\n')

export function useColor() {
	const generateWarningLog = (prop: string) => {
		console.warn(UNKOWN_COLOR_WARNING.replace(TEXT_REPLACE_PLACEHOLDER, prop))
	}

	const getCustomColorFromComponentProp = (prop: string) => {
		if (
			prop.startsWith('var') ||
			prop.startsWith('#') ||
			prop.startsWith('oklch') ||
			prop.startsWith('oklcha') ||
			prop.startsWith('rgb') ||
			prop.startsWith('rgba')
		) {
			return {
				color: prop,
			}
		} else if (prop.startsWith('--')) {
			/** CSS variable */
			return {
				color: `var(${prop})`,
			}
		} else if (prop?.length === 6) {
			/** Hex color without the leading # */
			return {
				color: `#${prop}`,
			}
		} else {
			console.warn(generateWarningLog(prop))

			return {
				color: 'currentColor',
			}
		}
	}

	return {
		getCustomColorFromComponentProp,
	}
}
