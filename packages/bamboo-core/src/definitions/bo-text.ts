import { HTMLAttributes } from 'vue';
import { BoCursor } from './index.js';
import { ComponentManifest } from '../manifests/types.js';

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
	| 'destructive'
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

/**
 * The max lines of the element.  This will be
 * translated to CSS line-clamp property.
 *
 * @see https://tailwindcss.com/docs/line-clamp
 *
 * @default 'none'
 */
export type BoTextLineClamp = number | string | 'none';

export interface BoTextProps {
	/** The id of the element. */
	id?: HTMLAttributes['id'];
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
	/**
	 * Whether the element is clickable. In case a custom
	 * cursor is provided, that will take precedence and this
	 * value will be ignored.
	 */
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
	lineClamp?: BoTextLineClamp;
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

type BoFontSizeStyleMap = Record<BoFontSize, string>;
type BoTextAlignStyleMap = Record<BoTextAlign, string>;
type BoFontFamilyStyleMap = Record<BoFontFamily, string>;
type BoTextWeightStyleMap = Record<BoFontWeight, string>;
type BoTextVariantStyleMap = Record<BoTextVariant, string>;
type BoTextTransformStyleMap = Record<BoTextTransform, string>;
type BoTextWhiteSpaceStyleMap = Record<BoTextWhiteSpace, string>;

interface TextStyleManifest {
	base: string;
	fontFamily: BoFontFamilyStyleMap;
	fontSize: BoFontSizeStyleMap;
	textAlign: BoTextAlignStyleMap;
	fontWeight: BoTextWeightStyleMap;
	variant: BoTextVariantStyleMap;
	textTransform: BoTextTransformStyleMap;
	whiteSpace: BoTextWhiteSpaceStyleMap;
	cursor: {
		default: string;
		clickable: string;
	};
	lineClamp: {
		none: string;
		template: string;
	};
}

type TextComponentDefaults = Pick<
	BoTextProps,
	| 'cursor'
	| 'role'
	| 'fontSize'
	| 'fontWeight'
	| 'variant'
	| 'textAlign'
	| 'fontFamily'
	| 'whiteSpace'
	| 'lineClamp'
>;

export type TextManifest = ComponentManifest<TextStyleManifest, TextComponentDefaults>;
