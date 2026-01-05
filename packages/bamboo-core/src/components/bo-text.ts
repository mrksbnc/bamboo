import { AriaLive } from '../core/bo-accessibility';

export type BoFontWeight =
	| 'thin'
	| 'extra-light'
	| 'light'
	| 'regular'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extra-bold'
	| 'black';

export type BoFontSize =
	| 'xs'
	| 'sm'
	| 'default'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| '8xl'
	| '9xl';

export type BoFontFamily = 'sans' | 'mono' | 'serif' | 'inherit';

export type BoTextWhiteSpace =
	| 'normal'
	| 'nowrap'
	| 'pre'
	| 'pre-line'
	| 'pre-wrap'
	| 'break-spaces';

export type BoTextVariant =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'disabled'
	| 'inherit'
	| 'currentColor'
	| 'success'
	| 'warning'
	| 'danger'
	| 'white'
	| 'black';

export type BoTextAlign = 'left' | 'center' | 'right' | 'justify';

export type BoTextTransform =
	/** No transformation. */
	| 'none'
	/** Capitalizes the first letter of each word. */
	| 'capitalize'
	/** Converts all characters to uppercase. */
	| 'uppercase'
	/** Converts all characters to lowercase. */
	| 'lowercase';

export type BoTextMaxLines =
	| '-moz-initial'
	| 'inherit'
	| 'initial'
	| 'revert'
	| 'revert-layer'
	| 'unset'
	| 'none'
	| (number & {})
	| (string & {});

type BoTextCursor =
	| 'cursor-auto'
	| 'cursor-default'
	| 'cursor-pointer'
	| 'cursor-wait'
	| 'cursor-text'
	| 'cursor-move'
	| 'cursor-help'
	| 'cursor-not-allowed'
	| 'cursor-none'
	| 'cursor-context-menu'
	| 'cursor-progress'
	| 'cursor-cell'
	| 'cursor-crosshair'
	| 'cursor-vertical-text'
	| 'cursor-alias'
	| 'cursor-copy'
	| 'cursor-no-drop'
	| 'cursor-grab'
	| 'cursor-grabbing'
	| 'cursor-all-scroll'
	| 'cursor-col-resize'
	| 'cursor-row-resize'
	| 'cursor-n-resize'
	| 'cursor-e-resize'
	| 'cursor-s-resize'
	| 'cursor-w-resize'
	| 'cursor-ne-resize'
	| 'cursor-nw-resize'
	| 'cursor-se-resize'
	| 'cursor-sw-resize'
	| 'cursor-ew-resize'
	| 'cursor-ns-resize'
	| 'cursor-nesw-resize'
	| 'cursor-nwse-resize'
	| 'cursor-zoom-in'
	| 'cursor-zoom-out';

export interface BoTextProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** The text of the element. */
	value: string;
	/**
	 * The size of the element.
	 * @default default
	 */
	fontSize?: BoFontSize;
	/**
	 * The weight of the element.
	 * @default regular
	 */
	fontWeight?: BoFontWeight;
	/**
	 * The font family of the element.
	 * @default inherit
	 */
	fontFamily?: BoFontFamily;
	/**
	 * The white space of the element.
	 * @default normal
	 */
	whiteSpace?: BoTextWhiteSpace;
	/**
	 * The variant of the element based on fixed enum values.
	 * @default default
	 */
	variant?: BoTextVariant;
	/** Any custom color for the element. This prop supports the following formats:
	 *
	 * - a variable name (e.g. --my-color)
	 * - a hex color (e.g. #ff0000)
	 * - an rgb color (e.g. rgb(255, 0, 0))
	 * - an rgba color (e.g. rgba(255, 0, 0, 0.5))
	 * - an oklch color (e.g. oklch(0.985 0.001 106.423))
	 */
	customColor?: string;
	/** One or multiple css classes to be used for overriding the default styles on the element. */
	customCssClass?: string;
	/** The clickable of the element. */
	clickable?: boolean;
	/**
	 * The text align of the element.
	 * @default left
	 */
	textAlign?: BoTextAlign;
	/**
	 * The text transform of the element.
	 * @default none
	 */
	textTransform?: BoTextTransform;
	/**
	 * Cursor type of the element in Tailwind CSS format.
	 * @default cursor-auto
	 */
	cursor?: BoTextCursor;
	/**
	 * The max lines of the element.
	 * @default none
	 */
	maxLines?: BoTextMaxLines;
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
	 *
	 * @default off
	 */
	ariaLive?: AriaLive;
	/** The language of the element. */
	lang?: string;
}

export type BoTextVariantStyle = Record<BoTextVariant, string>;

export type BoTextSizeStyle = Record<BoFontSize, string>;

export type BoTextWeightStyle = Record<BoFontWeight, string>;

export const BO_TEXT_VARIANT_STYLE = {
	default: /*tw*/ 'text-neutral-800 dark:text-neutral-200',
	primary: /*tw*/ 'text-blue-600 dark:text-blue-400',
	secondary: /*tw*/ 'text-neutral-600 dark:text-neutral-400',
	disabled: /*tw*/ 'text-neutral-400 dark:text-neutral-600',
	success: /*tw*/ 'text-green-600 dark:text-green-400',
	warning: /*tw*/ 'text-yellow-600 dark:text-yellow-400',
	danger: /*tw*/ 'text-red-600 dark:text-red-400',
	white: /*tw*/ 'text-white',
	black: /*tw*/ 'text-black',
	inherit: /*tw*/ 'text-inherit',
	currentColor: /*tw*/ 'text-current',
} as const satisfies BoTextVariantStyle;

export const BO_FONT_SIZE_STYLE = {
	xs: /*tw*/ 'text-xs',
	sm: /*tw*/ 'text-sm',
	default: /*tw*/ 'text-base',
	lg: /*tw*/ 'text-lg',
	xl: /*tw*/ 'text-xl',
	'2xl': /*tw*/ 'text-2xl',
	'3xl': /*tw*/ 'text-3xl',
	'4xl': /*tw*/ 'text-4xl',
	'5xl': /*tw*/ 'text-5xl',
	'6xl': /*tw*/ 'text-6xl',
	'7xl': /*tw*/ 'text-7xl',
	'8xl': /*tw*/ 'text-8xl',
	'9xl': /*tw*/ 'text-9xl',
} as const satisfies BoTextSizeStyle;

export const BO_FONT_WEIGHT_STYLE = {
	thin: /*tw*/ 'font-thin',
	'extra-light': /*tw*/ 'font-extralight',
	light: /*tw*/ 'font-light',
	regular: /*tw*/ 'font-normal',
	medium: /*tw*/ 'font-medium',
	semibold: /*tw*/ 'font-semibold',
	bold: /*tw*/ 'font-bold',
	'extra-bold': /*tw*/ 'font-extrabold',
	black: /*tw*/ 'font-black',
} as const satisfies BoTextWeightStyle;
