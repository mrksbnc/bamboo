import type { BoLoaderType } from '@/core/constants/loader.js';
import { AriaLive } from '@/core/constants/accessibility.js';
import { BoSize } from '@/core/constants/size.js';
import { BoVariant } from '@/core/constants/variant.js';
import type { Icon } from '@/components/bo-icon/bo-icon.js';

export enum BoButtonType {
	button = 'button',
	submit = 'submit',
	reset = 'reset',
}

export interface BoButtonProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** The size of the button. */
	size?: BoSize;
	/** The variant of the button. */
	variant?: BoVariant;
	/** Whether the button is disabled. */
	disabled?: boolean;
	/** Loading state of the button */
	isLoading?: boolean;
	/** The type of the loader @default spinner */
	loaderType?: BoLoaderType;
	/** The type of the button. */
	type?: BoButtonType;
	/** The text content of the button. */
	label?: string;
	/** Whether the button is full width or not. */
	fullWidth?: boolean;
	/** The prefix icon to render */
	prefixIcon?: Icon;
	/** The suffix icon to render */
	suffixIcon?: Icon;
	/** Custom color for the button background (CSS variable, hex, rgb, rgba). */
	customColor?: string;
	/** One or multiple css classes to be used for overriding the default styles on the element. */
	customCssClass?: string;
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
	/** Tab index of the element. */
	tabIndex?: number;
}
