import { BoLoaderSize, BoLoaderTextPosition, BoLoaderVariant } from '../definitions/bo-loader';
import { BoFontSize } from '../definitions/bo-text';

type BoLoadingSpinnerSizeStyleMap = Record<BoLoaderSize, string>;
type BoLoadingSpinnerVariantStyleMap = Record<BoLoaderVariant, string>;
type BoLoadingSpinnerTextPositionStyleMap = Record<BoLoaderTextPosition, string>;

interface LoadingSpinnerManifest {
	base: string;
	container: string;
	text: string;
	size: BoLoadingSpinnerSizeStyleMap;
	variant: BoLoadingSpinnerVariantStyleMap;
	textPosition: BoLoadingSpinnerTextPositionStyleMap;
	labelFontSize: Record<BoLoaderSize, BoFontSize>;
}

const loadingSpinnerStyles: LoadingSpinnerManifest = {
	base: /*tw*/ 'inline-flex animate-spin rounded-full border-2 border-current border-t-transparent',
	container: /*tw*/ 'flex content-center items-center justify-center gap-2 [&>span]:sr-only',
	text: /*tw*/ '',
	size: {
		xs: /*tw*/ 'size-3',
		sm: /*tw*/ 'size-3.5',
		default: /*tw*/ 'size-4',
		lg: /*tw*/ 'size-5',
		xl: /*tw*/ 'size-6',
	} as const satisfies BoLoadingSpinnerSizeStyleMap,
	variant: {
		primary: /*tw*/ 'text-blue-600',
		secondary: /*tw*/ 'text-gray-600',
		success: /*tw*/ 'text-green-600 dark:text-green-500',
		warning: /*tw*/ 'text-yellow-600 dark:text-yellow-500',
		danger: /*tw*/ 'text-red-600',
		white: /*tw*/ 'text-white',
		black: /*tw*/ 'text-black',
		current: /*tw*/ 'text-current',
	} as const satisfies BoLoadingSpinnerVariantStyleMap,
	textPosition: {
		top: /*tw*/ 'flex-col-reverse',
		bottom: /*tw*/ 'flex-col',
		before: /*tw*/ 'flex-row-reverse',
		after: /*tw*/ 'flex-row',
	} as const satisfies BoLoadingSpinnerTextPositionStyleMap,
	labelFontSize: {
		xs: 'xs',
		sm: 'sm',
		default: 'sm',
		lg: 'default',
		xl: 'default',
	} as const,
} as const;

export const LOADING_SPINNER_MANIFEST = {
	meta: {
		name: 'LoadingSpinner',
		version: '1.0.0',
		description: 'Animated spinner component for indicating loading states',
		category: 'feedback' as const,
		tags: ['loading', 'spinner', 'loader', 'progress', 'waiting'],
	},
	styles: loadingSpinnerStyles,
	defaults: {
		size: 'default' as const,
		variant: 'primary' as const,
		textPosition: 'after' as const,
	},
} as const;
