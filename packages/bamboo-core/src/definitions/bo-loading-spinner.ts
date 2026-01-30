import { HTMLAttributes } from 'vue';
import {
	BoFontSize,
	type BoLoaderTextPosition,
	type BoLoaderSize,
	type BoLoaderVariant,
} from './index.js';
import { ComponentManifest } from '../manifests/types.js';

export interface BoLoadingSpinnerProps {
	/** Unique id for the loading spinner */
	id?: HTMLAttributes['id'];
	/** Unique data-test-id for the spinner container */
	dataTestId?: string;
	/**
	 * The size of the loading spinner
	 * @default 'default'
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

type BoLoadingSpinnerSizeStyleMap = Record<BoLoaderSize, string>;
type BoLoadingSpinnerVariantStyleMap = Record<BoLoaderVariant, string>;
type BoLoadingSpinnerTextPositionStyleMap = Record<BoLoaderTextPosition, string>;

type BoLoadingSpinnerManifestDefaults = Pick<
	BoLoadingSpinnerProps,
	'size' | 'variant' | 'textPosition' | 'role'
>;

export interface BoLoadingSpinnerStyleManifest {
	base: string;
	container: string;
	text: string;
	size: BoLoadingSpinnerSizeStyleMap;
	variant: BoLoadingSpinnerVariantStyleMap;
	textPosition: BoLoadingSpinnerTextPositionStyleMap;
	labelFontSize: Record<BoLoaderSize, BoFontSize>;
}

export type LoadingSpinnerManifest = ComponentManifest<
	BoLoadingSpinnerStyleManifest,
	BoLoadingSpinnerManifestDefaults
>;
