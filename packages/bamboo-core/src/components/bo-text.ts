import { HTMLAttributes } from 'vue';
import { BoCursor } from '../core/cursor';

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

export type BoTextVariantStyle = Record<BoTextVariant, string>;

export type BoFontSizeStyle = Record<BoFontSize, string>;

export type BoTextWeightStyle = Record<BoFontWeight, string>;

export interface BoTextProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** The text of the element. */
	value: string;
	/**
	 * The size of the element.
	 * @default 'default'
	 */
	fontSize?: BoFontSize;
	/**
	 * The weight of the element.
	 * @default 'regular'
	 */
	fontWeight?: BoFontWeight;
	/**
	 * The font family of the element.
	 * @default 'inherit'
	 */
	fontFamily?: BoFontFamily;
	/**
	 * The white space of the element.
	 * @default 'normal'
	 */
	whiteSpace?: BoTextWhiteSpace;
	/**
	 * The variant of the element based on fixed enum values.
	 * @default 'default'
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
	 * @default 'left'
	 */
	textAlign?: BoTextAlign;
	/**
	 * The text transform of the element.
	 * @default 'none'
	 */
	textTransform?: BoTextTransform;
	/**
	 * Cursor type of the element in Tailwind CSS format.
	 * @default 'cursor-auto'
	 */
	cursor?: BoCursor;
	/**
	 * The max lines of the element.
	 * @default 'none'
	 */
	maxLines?: BoTextMaxLines;
	/** The role of the element. */
	role?: HTMLAttributes['role'];
	/** Defines a string value that labels the current element. */
	ariaLabel?: HTMLAttributes['aria-label'];
	/** Reference to an element that labels the current element. */
	ariaLabelledBy?: HTMLAttributes['aria-labelledby'];
	/** Identifies the element (or elements) that describes the object. */
	ariaDescribedBy?: HTMLAttributes['aria-describedby'];
	/** Indicates that an element will be updated, and describes the types of updates the user agents,
	 * assistive technologies, and user can expect from the live region.
	 *
	 * - off: The element is not exposed to an assistive technology.
	 * - polite: The element is exposed to an assistive technology that "actively" indicates that user input will occur.
	 * - assertive: The element is exposed to an assistive technology that "passively" indicates that user input will occur.
	 *
	 * @default 'polite'
	 */
	ariaLive?: HTMLAttributes['aria-live'];
	/** The language of the element. */
	lang?: string;
}
