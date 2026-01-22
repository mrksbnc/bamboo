const TEXT_REPLACE_PLACEHOLDER = '__BLANK__';
const UNKNOWN_COLOR_WARNING = [
	`The custom color "__BLANK__" is not a valid color definition.`,
	'Valid color definitions are:',
	'\t- a named CSS color (e.g. red) see https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/named-color',
	'\t- a keyword value (e.g. currentColor, inherit, initial, revert, revert-layer, unset)',
	'\t- a variable name (e.g. --my-color)',
	'\t- a hex color (e.g. #ff0000, #f00, #ff0000aa, #f00a)',
	'\t- an rgb/rgba color (e.g. rgb(255, 0, 0), rgb(255 0 0 / 0.5))',
	'\t- an hsl/hsla color (e.g. hsl(30, 100%, 50%), hsl(30 100% 50% / 0.6))',
	'\t- an hwb color (e.g. hwb(90 10% 10%), hwb(90deg 10% 10% / 0.5))',
	'\t- an oklch color (e.g. oklch(0.5 0.2 180))',
	'The custom color will be ignored and an empty string will be returned instead.',
].join('\n');

/**
 * List of named CSS colors
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/named-color
 */
const NAMED_CSS_COLORS = new Set([
	'black',
	'silver',
	'gray',
	'white',
	'maroon',
	'red',
	'purple',
	'fuchsia',
	'green',
	'lime',
	'olive',
	'yellow',
	'navy',
	'blue',
	'teal',
	'aqua',
	'aliceblue',
	'antiquewhite',
	'aquamarine',
	'azure',
	'beige',
	'bisque',
	'blanchedalmond',
	'blueviolet',
	'brown',
	'burlywood',
	'cadetblue',
	'chartreuse',
	'chocolate',
	'coral',
	'cornflowerblue',
	'cornsilk',
	'crimson',
	'cyan',
	'darkblue',
	'darkcyan',
	'darkgoldenrod',
	'darkgray',
	'darkgreen',
	'darkgrey',
	'darkkhaki',
	'darkmagenta',
	'darkolivegreen',
	'darkorange',
	'darkorchid',
	'darkred',
	'darksalmon',
	'darkseagreen',
	'darkslateblue',
	'darkslategray',
	'darkslategrey',
	'darkturquoise',
	'darkviolet',
	'deeppink',
	'deepskyblue',
	'dimgray',
	'dimgrey',
	'dodgerblue',
	'firebrick',
	'floralwhite',
	'forestgreen',
	'gainsboro',
	'ghostwhite',
	'gold',
	'goldenrod',
	'greenyellow',
	'grey',
	'honeydew',
	'hotpink',
	'indianred',
	'indigo',
	'ivory',
	'khaki',
	'lavender',
	'lavenderblush',
	'lawngreen',
	'lemonchiffon',
	'lightblue',
	'lightcoral',
	'lightcyan',
	'lightgoldenrodyellow',
	'lightgray',
	'lightgreen',
	'lightgrey',
	'lightpink',
	'lightsalmon',
	'lightseagreen',
	'lightskyblue',
	'lightslategray',
	'lightslategrey',
	'lightsteelblue',
	'lightyellow',
	'limegreen',
	'linen',
	'magenta',
	'mediumaquamarine',
	'mediumblue',
	'mediumorchid',
	'mediumpurple',
	'mediumseagreen',
	'mediumslateblue',
	'mediumspringgreen',
	'mediumturquoise',
	'mediumvioletred',
	'midnightblue',
	'mintcream',
	'mistyrose',
	'moccasin',
	'navajowhite',
	'oldlace',
	'olivedrab',
	'orange',
	'orangered',
	'orchid',
	'palegoldenrod',
	'palegreen',
	'paleturquoise',
	'palevioletred',
	'papayawhip',
	'peachpuff',
	'peru',
	'pink',
	'plum',
	'powderblue',
	'rebeccapurple',
	'rosybrown',
	'royalblue',
	'saddlebrown',
	'salmon',
	'sandybrown',
	'seagreen',
	'seashell',
	'sienna',
	'skyblue',
	'slateblue',
	'slategray',
	'slategrey',
	'snow',
	'springgreen',
	'steelblue',
	'tan',
	'thistle',
	'tomato',
	'transparent',
	'turquoise',
	'violet',
	'wheat',
	'whitesmoke',
	'yellowgreen',
]);

/**
 * CSS keyword color values
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
 */
const CSS_KEYWORD_COLORS = new Set([
	'currentcolor',
	'inherit',
	'initial',
	'revert',
	'revert-layer',
	'unset',
]);

export function getValidOrFallbackColorFromStr(prop: string): string {
	const normalized = prop.toLowerCase().trim();

	if (CSS_KEYWORD_COLORS.has(normalized)) {
		return prop;
	}

	if (NAMED_CSS_COLORS.has(normalized)) {
		return prop;
	}

	if (prop.startsWith('#')) {
		const hexPart = prop.slice(1);
		if (/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{4}$|^[0-9a-fA-F]{8}$/.test(hexPart)) {
			return prop;
		}
	}

	// Check for color functions (rgb, rgba, hsl, hsla, hwb, oklch, etc.)
	if (
		normalized.startsWith('rgb(') ||
		normalized.startsWith('rgba(') ||
		normalized.startsWith('hsl(') ||
		normalized.startsWith('hsla(') ||
		normalized.startsWith('hwb(') ||
		normalized.startsWith('oklch(') ||
		normalized.startsWith('oklab(') ||
		normalized.startsWith('lab(') ||
		normalized.startsWith('lch(') ||
		normalized.startsWith('color(')
	) {
		return prop;
	}

	// Check for CSS variables (var() or --variable-name)
	if (normalized.startsWith('var(')) {
		return prop;
	}

	if (prop.startsWith('--')) {
		// CSS variable - wrap it in var()
		return `var(${prop})`;
	}

	// Check for 6-character hex without #
	if (/^[0-9a-fA-F]{6}$/.test(prop)) {
		return `#${prop}`;
	}

	// Check for 3-character hex without #
	if (/^[0-9a-fA-F]{3}$/.test(prop)) {
		return `#${prop}`;
	}

	// Check for 8-character hex without # (with alpha)
	if (/^[0-9a-fA-F]{8}$/.test(prop)) {
		return `#${prop}`;
	}

	// Check for 4-character hex without # (with alpha)
	if (/^[0-9a-fA-F]{4}$/.test(prop)) {
		return `#${prop}`;
	}

	// If nothing matches, warn and return empty string
	console.warn(UNKNOWN_COLOR_WARNING.replace(TEXT_REPLACE_PLACEHOLDER, prop));
	return '';
}
