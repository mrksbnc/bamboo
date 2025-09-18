import { AriaLive } from '@/lib/accessibility'

export enum BoFontWeight {
	/** 100 */
	thin = 'thin',
	/** 200 */
	extra_light = 'extra-light',
	/** 300 */
	light = 'light',
	/** 400 */
	regular = 'regular',
	/** 500 */
	medium = 'medium',
	/** 600 */
	semibold = 'semibold',
	/** 700 */
	bold = 'bold',
	/** 800 */
	extra_bold = 'extra-bold',
	/** 900 */
	black = 'black',
}

export enum BoFontSize {
	/** 10px */
	xs = 'xs',
	/** 12px */
	sm = 'sm',
	/** 14px */
	default = 'default',
	/** 16px */
	lg = 'lg',
	/** 18px */
	xl = 'xl',
	/** 20px */
	'2xl' = '2xl',
	/** 24px */
	'3xl' = '3xl',
	/** 30px */
	'4xl' = '4xl',
	/** 36px */
	'5xl' = '5xl',
	/** 48px */
	'6xl' = '6xl',
	/** 60px */
	'7xl' = '7xl',
}

export enum BoFontFamily {
	sans = 'sans',
	mono = 'mono',
	serif = 'serif',
	inherit = 'inherit',
}

export enum BoTextWhiteSpace {
	normal = 'normal',
	nowrap = 'nowrap',
	pre = 'pre',
	pre_line = 'pre-line',
	pre_wrap = 'pre-wrap',
	break_spaces = 'break-spaces',
}

export enum BoTextVariant {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	disabled = 'disabled',
	inherit = 'inherit',
	current = 'currentColor',
	success = 'success',
	warning = 'warning',
	danger = 'danger',
	light = 'light',
	dark = 'dark',
}

export enum BoTextAlign {
	left = 'left',
	center = 'center',
	right = 'right',
	justify = 'justify',
}

export enum BoTextTransform {
	none = 'none',
	/** Capitalizes the first letter of each word. */
	capitalize = 'capitalize',
	/** Converts all characters to uppercase. */
	uppercase = 'uppercase',
	/** Converts all characters to lowercase. */
	lowercase = 'lowercase',
}

export interface BoTextProps {
	/** The id of the element. */
	id?: string
	/** The data test id of the element. */
	dataTestId?: string
	/** The text of the element. */
	value: string
	/** The size of the element. */
	fontSize?: BoFontSize
	/** The weight of the element. */
	fontWeight?: BoFontWeight
	/** The font family of the element. */
	fontFamily?: BoFontFamily
	/** The white space of the element. */
	whiteSpace?: BoTextWhiteSpace
	/** The variant of the element based on fixed enum values. */
	variant?: BoTextVariant
	/** Any custom color for the element. This prop supports the following formats:
	 *
	 * - a variable name (e.g. --my-color)
	 * - a hex color (e.g. #ff0000)
	 * - an rgb color (e.g. rgb(255, 0, 0))
	 * - an rgba color (e.g. rgba(255, 0, 0, 0.5))
	 * - an oklch color (e.g. oklch(0.985 0.001 106.423))
	 * - an oklcha color (e.g. oklcha(0.985 0.001 106.423 0.5))
	 */
	customColor?: string
	/** One or multiple css classes to be used for overriding the default styles on the element. */
	customCssClass?: string
	/** The clickable of the element. */
	clickable?: boolean
	/** The text align of the element. */
	textAlign?: BoTextAlign
	/** The text transform of the element. */
	textTransform?: BoTextTransform
	/** Cursor type of the element. This must be a valid Tailwindcss cursor value. */
	cursor?: string
	/** The max lines of the element. */
	maxLines?:
		| '-moz-initial'
		| 'inherit'
		| 'initial'
		| 'revert'
		| 'revert-layer'
		| 'unset'
		| 'none'
		| (number & {})
		| (string & {})
	/** The role of the element. */
	role?: string
	/** Defines a string value that labels the current element. */
	ariaLabel?: string
	/** Reference to an element that labels the current element. */
	ariaLabelledBy?: string
	/** Identifies the element (or elements) that describes the object. */
	ariaDescribedBy?: string
	/** Indicates that an element will be updated, and describes the types of updates the user agents,
	 * assistive technologies, and user can expect from the live region.
	 *
	 * - off: The element is not exposed to an assistive technology.
	 * - polite: The element is exposed to an assistive technology that "actively" indicates that user input will occur.
	 * - assertive: The element is exposed to an assistive technology that "passively" indicates that user input will occur.
	 */
	ariaLive?: AriaLive
	/** The language of the element. */
	lang?: string
}
