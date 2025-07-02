export enum BoFontWeight {
	light = 'light',
	regular = 'regular',
	medium = 'medium',
	semibold = 'semibold',
	bold = 'bold',
}

export enum BoFontSize {
	xs = 'xs',
	sm = 'sm',
	base = 'base',
	lg = 'lg',
	xl = 'xl',
	'2xl' = '2xl',
	'3xl' = '3xl',
	'4xl' = '4xl',
	'5xl' = '5xl',
	'6xl' = '6xl',
	'7xl' = '7xl',
	'8xl' = '8xl',
	'9xl' = '9xl',
}

export enum BoFontFamily {
	sans = 'sans',
	mono = 'mono',
	serif = 'serif',
}

export enum BoTextWhiteSpace {
	normal = 'normal',
	nowrap = 'nowrap',
	pre = 'pre',
	pre_line = 'pre-line',
	pre_wrap = 'pre-wrap',
	break_spaces = 'break-spaces',
}

export enum BoTextColor {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	inherit = 'inherit',
	current = 'currentColor',
	success = 'success',
	warning = 'warning',
	danger = 'danger',
	light = 'light',
}

export enum BoTextAlign {
	left = 'left',
	center = 'center',
	right = 'right',
	justify = 'justify',
}

export interface BoTextProps {
	/** The id of the element. */
	id?: string;
	/** The text of the element. */
	value: string;
	/** The size of the element. */
	size?: BoFontSize;
	/** The weight of the element. */
	weight?: BoFontWeight;
	/** The font family of the element. */
	fontFamily?: BoFontFamily;
	/** The white space of the element. */
	whiteSpace?: BoTextWhiteSpace;
	/** The color of the element. */
	color?: BoTextColor;
	/** The custom color of the element. */
	customColor?: string;
	/** The css class of the element. */
	cssClass?: string;
	/** The clickable of the element. */
	clickable?: boolean;
	/** The text align of the element. */
	textAlign?: BoTextAlign;
	/** The selectable of the element. */
	selectable?: boolean;
	/** Cursor type of the element. This must be a valid Tailwindcss cursor value. */
	cursor?: string;
}
