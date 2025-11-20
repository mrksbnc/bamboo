import { AriaLive } from '@/shared/accessibility';
import { BoSize } from '@/shared/size';
import { BoVariant } from '@/shared/variant';

export enum BoLinkBehavior {
	/** Default link behavior */
	default = 'default',
	/** Button-like link behavior */
	button = 'button',
}

export interface BoLinkProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** The behavior of the link. */
	behavior?: BoLinkBehavior;
	/** The href of the link. */
	href?: string;
	/** The target of the link. */
	target?: '_blank' | '_self' | '_parent' | '_top';
	/** The rel attribute of the link. */
	rel?: string;
	/** The size of the link. */
	size?: BoSize;
	/** The variant of the link. */
	variant?: BoVariant;
	/** The text content of the link. */
	label?: string;
	/** Whether the link is disabled. */
	disabled?: boolean;
	/** Custom color for the link (CSS variable, hex, rgb, rgba). */
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
	/** The tabindex of the element. */
	tabIndex?: number;
}
