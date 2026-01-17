import { BoLoaderSize, BoLoaderTextPosition, BoLoaderVariant } from '../components/bo-loader';
import { BoFontSize } from '../components/bo-text';

type BoLoadingPulseSizeStyleMap = Record<BoLoaderSize, string>;
type BoLoadingPulseVariantStyleMap = Record<BoLoaderVariant, string>;
type BoLoadingPulseTextPositionStyleMap = Record<BoLoaderTextPosition, string>;

interface LoadingPulseManifest {
	base: string;
	container: string;
	dot: string;
	size: BoLoadingPulseSizeStyleMap;
	variant: BoLoadingPulseVariantStyleMap;
	textPosition: BoLoadingPulseTextPositionStyleMap;
	labelFontSize: Record<BoLoaderSize, BoFontSize>;
	animation: {
		dot1: string;
		dot2: string;
		dot3: string;
	};
}

export const LOADING_PULSE_MANIFEST: LoadingPulseManifest = {
	base: /*tw*/ 'flex items-center justify-center gap-1',

	container: /*tw*/ 'flex content-center items-center justify-center gap-2',

	dot: /*tw*/ 'rounded-full animate-pulse',

	size: {
		xs: /*tw*/ 'size-1',
		sm: /*tw*/ 'size-1.5',
		default: /*tw*/ 'size-2',
		lg: /*tw*/ 'size-2.5',
		xl: /*tw*/ 'size-3',
	} as const satisfies BoLoadingPulseSizeStyleMap,

	variant: {
		primary: /*tw*/ 'bg-blue-600',
		secondary: /*tw*/ 'bg-gray-600',
		success: /*tw*/ 'bg-green-600 dark:bg-green-500',
		warning: /*tw*/ 'bg-yellow-600 dark:bg-yellow-500',
		danger: /*tw*/ 'bg-red-600',
		white: /*tw*/ 'bg-white',
		black: /*tw*/ 'bg-black',
		current: /*tw*/ 'bg-current',
	} as const satisfies BoLoadingPulseVariantStyleMap,

	textPosition: {
		top: /*tw*/ 'flex-col-reverse',
		bottom: /*tw*/ 'flex-col',
		before: /*tw*/ 'flex-row-reverse',
		after: /*tw*/ 'flex-row',
	} as const satisfies BoLoadingPulseTextPositionStyleMap,

	labelFontSize: {
		xs: 'xs',
		sm: 'sm',
		default: 'sm',
		lg: 'default',
		xl: 'default',
	} as const,

	animation: {
		dot1: /*tw*/ 'animate-pulse [animation-delay:0ms]',
		dot2: /*tw*/ 'animate-pulse [animation-delay:150ms]',
		dot3: /*tw*/ 'animate-pulse [animation-delay:300ms]',
	},
} as const;
