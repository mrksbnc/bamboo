import { HTMLAttributes } from 'vue';
import { ComponentManifest } from '../manifests';
import { BoLoaderSize, BoLoaderTextPosition, BoLoaderVariant } from './bo-loader';
import { BoFontSize } from './bo-text';

export interface BoLoadingPulseProps {
	/** Unique id for the loading spinner */
	id?: HTMLAttributes['id'];
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
	 * @default 'after'
	 */
	textPosition?: BoLoaderTextPosition;
	/** Custom color of the loading spinner in CSS compatible format */
	customColor?: string;
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

type BoLoadingPulseSizeStyleMap = Record<BoLoaderSize, string>;
type BoLoadingPulseVariantStyleMap = Record<BoLoaderVariant, string>;
type BoLoadingPulseTextPositionStyleMap = Record<BoLoaderTextPosition, string>;

type BoLoadingPulseComponentDefaults = Pick<
	BoLoadingPulseProps,
	'size' | 'variant' | 'textPosition' | 'role'
>;

export interface LoadingPulseStyleManifest {
	base: string;
	container: string;
	dot: string;
	size: BoLoadingPulseSizeStyleMap;
	variant: BoLoadingPulseVariantStyleMap;
	textPosition: BoLoadingPulseTextPositionStyleMap;
	labelFontSize: Record<BoLoaderSize, BoFontSize>;
	/** Animation keyframes for the pulse loader */
	animation: [string, string, string];
}

export type LoadingPulseManifest = ComponentManifest<
	LoadingPulseStyleManifest,
	BoLoadingPulseComponentDefaults
>;
