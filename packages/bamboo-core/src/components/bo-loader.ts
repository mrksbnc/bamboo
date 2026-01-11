import { HTMLAttributes } from 'vue';

export type BoLoaderType = 'spinner' | 'ring';

export type BoLoaderTextPosition = 'top' | 'bottom' | 'before' | 'after';

export type BoLoaderSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BoLoaderVariant =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'white'
	| 'black'
	| 'current';

export interface BoLoadingSpinnerProps {
	/** Unique id for the loading spinner */
	id?: string;
	/** Unique data-test-id for the spinner container */
	dataTestId?: string;
	/**
	 * The size of the loading spinner
	 * @default 'md'
	 */
	size?: BoLoaderSize;
	/**
	 * Predefined color variant of the spinner
	 * @default 'primary'
	 */
	variant?: BoLoaderVariant;
	/** Optional loader text to display */
	loaderText?: string;
	/**
	 * Position of the text relative to the spinner
	 * @default 'bottom'
	 */
	textPosition?: BoLoaderTextPosition;
	/** Custom color of the loading spinner in CSS compatible format */
	customColor?: string;
	/** Optional custom classes appended to the spinner wrapper */
	customContainerCssClass?: string;
	/** Optional custom classes appended to the spinner element */
	customSpinnerCssClass?: string;
	/**
	 * Accessibility role of the spinner
	 * @default 'status'
	 */
	role?: HTMLAttributes['role'];
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
	/** Accessible label describing the spinner state */
	ariaLabel?: HTMLAttributes['aria-label'];
	/** Mark the region as busy while the spinner is visible */
	ariaBusy?: HTMLAttributes['aria-busy'];
}
