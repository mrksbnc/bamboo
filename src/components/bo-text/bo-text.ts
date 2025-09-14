import { AriaLive } from '@/lib/bo-accessibility';

export enum BoFontWeight {
	/** 100 */
	Thin = 'thin',
	/** 200 */
	ExtraLight = 'extraLight',
	/** 300 */
	Light = 'light',
	/** 400 */
	Regular = 'regular',
	/** 500 */
	Medium = 'medium',
	/** 600 */
	Semibold = 'semibold',
	/** 700 */
	Bold = 'bold',
	/** 800 */
	Extrabold = 'extrabold',
	/** 900 */
	Black = 'black',
}

export enum BoFontSize {
	/** 10px */
	XS = 'xs',
	/** 12px */
	SM = 'sm',
	/** 14px */
	Default = 'default',
	/** 16px */
	LG = 'lg',
	/** 18px */
	XL = 'xl',
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
	Sans = 'sans',
	Mono = 'mono',
	Serif = 'serif',
	Inherit = 'inherit',
}

export enum BoTextWhiteSpace {
	Normal = 'normal',
	Nowrap = 'nowrap',
	Pre = 'pre',
	PreLine = 'pre-line',
	PreWrap = 'pre-wrap',
	BreakSpaces = 'break-spaces',
}

export enum BoTextVariant {
	Default = 'default',
	Primary = 'primary',
	Secondary = 'secondary',
	Disabled = 'disabled',
	Inherit = 'inherit',
	Current = 'currentColor',
	Success = 'success',
	Warning = 'warning',
	Danger = 'danger',
	Light = 'light',
}

export enum BoTextAlign {
	Left = 'left',
	Center = 'center',
	Right = 'right',
	Justify = 'justify',
}

export interface BoTextProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** The text of the element. */
	value: string;
	/** The size of the element. */
	fontSize?: BoFontSize;
	/** The weight of the element. */
	fontWeight?: BoFontWeight;
	/** The font family of the element. */
	fontFamily?: BoFontFamily;
	/** The white space of the element. */
	whiteSpace?: BoTextWhiteSpace;
	/** The variant of the element based on fixed enum values. */
	variant?: BoTextVariant;
	/** Any custom color for the element. This prop supports the following formats:
	 *
	 * - a variable name (e.g. --my-color)
	 * - a hex color (e.g. #ff0000)
	 * - an rgb color (e.g. rgb(255, 0, 0))
	 * - an rgba color (e.g. rgba(255, 0, 0, 0.5))
	 * - an oklch color (e.g. oklch(0.985 0.001 106.423))
	 * - an oklcha color (e.g. oklcha(0.985 0.001 106.423 0.5))
	 */
	customColor?: string;
	/** One or multiple css classes to be used for overriding the default styles on the element. */
	customCssClass?: string;
	/** The clickable of the element. */
	clickable?: boolean;
	/** The text align of the element. */
	textAlign?: BoTextAlign;
	/** The selectable of the element. */
	selectable?: boolean;
	/** Cursor type of the element. This must be a valid Tailwindcss cursor value. */
	cursor?: string;
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
		| (string & {});
	/** The role of the element. */
	role?: string;
	/** Defines a string value that labels the current element. */
	ariaLabel?: string;
	/** Reference to an element that labels the current element. */
	ariaLabelledBy?: string;
	/** Identifies the element (or elements) that describes the object. */
	ariaDescribedBy?: string;
	/** Indicates that an element will be updated, and describes the types of updates the user agents,
	 * assistive technologies, and user can expect from the live region.
	 *
	 * - off: The element is not exposed to an assistive technology.
	 * - polite: The element is exposed to an assistive technology that "actively" indicates that user input will occur.
	 * - assertive: The element is exposed to an assistive technology that "passively" indicates that user input will occur.
	 */
	ariaLive?: AriaLive;
	/** The language of the element. */
	lang?: string;
}
