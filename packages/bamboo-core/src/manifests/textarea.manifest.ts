import { BoTextareaSize, BoTextareaState, BoTextareaVariant } from '../components/bo-textarea';
import { BoFontSize } from '../components/bo-text';
import { BoIconSize } from '../components/bo-icon';

type BoTextareaSizeStyleMap = Record<BoTextareaSize, string>;
type BoTextareaStateStyleMap = Record<BoTextareaState, string>;
type BoTextareaVariantStyleMap = Record<BoTextareaVariant, string>;

interface TextareaManifest {
	base: string;
	container: {
		base: string;
		disabled: string;
		expand: string;
	};
	textarea: {
		base: string;
		withPrefixIcon: string;
		withSuffixIcon: string;
		expand: string;
		resizable: string;
	};
	padding: BoTextareaSizeStyleMap;
	state: BoTextareaStateStyleMap;
	variant: BoTextareaVariantStyleMap;
	icons: {
		prefix: BoTextareaSizeStyleMap;
		suffix: BoTextareaSizeStyleMap;
		size: Record<BoTextareaSize, BoIconSize>;
	};
	labels: {
		container: string;
		required: string;
		fontSize: BoFontSize;
	};
	helpers: {
		error: string;
		hint: string;
		fontSize: BoFontSize;
	};
}

export const TEXTAREA_MANIFEST: TextareaManifest = {
	base: /*tw*/ 'flex flex-col transition-all duration-200',

	container: {
		base: /*tw*/ 'relative flex w-full rounded-md border transition-colors focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-red-500/20',
		disabled: /*tw*/ 'cursor-not-allowed bg-gray-50 border-gray-200 opacity-50',
		expand: /*tw*/ 'grow',
	},

	textarea: {
		base: /*tw*/ 'w-full resize-none rounded-md border-none bg-transparent text-sm font-normal text-gray-900 outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:text-red-600',
		withPrefixIcon: /*tw*/ 'pl-10',
		withSuffixIcon: /*tw*/ 'pr-10',
		expand: /*tw*/ 'grow',
		resizable: /*tw*/ 'resize-y',
	},

	padding: {
		sm: /*tw*/ 'p-2',
		md: /*tw*/ 'p-3',
		lg: /*tw*/ 'p-4',
	} as const satisfies BoTextareaSizeStyleMap,

	state: {
		default: /*tw*/ 'border-gray-300 bg-white hover:border-gray-400 focus-within:border-blue-500',
		valid:
			/*tw*/ 'border-green-500 bg-white hover:border-green-600 focus-within:border-green-600 focus-within:ring-green-500/20',
		invalid:
			/*tw*/ 'border-red-500 bg-white hover:border-red-600 focus-within:border-red-500 focus-within:ring-red-500/20',
	} as const satisfies BoTextareaStateStyleMap,

	variant: {
		default: /*tw*/ 'bg-white',
		filled: /*tw*/ 'bg-gray-50',
	} as const satisfies BoTextareaVariantStyleMap,

	icons: {
		prefix: {
			sm: /*tw*/ 'absolute left-3 top-2.5 text-gray-500',
			md: /*tw*/ 'absolute left-3 top-3 text-gray-500',
			lg: /*tw*/ 'absolute left-3.5 top-4 text-gray-500',
		} as const satisfies BoTextareaSizeStyleMap,

		suffix: {
			sm: /*tw*/ 'absolute right-3 top-2.5 h-full text-gray-500',
			md: /*tw*/ 'absolute right-3 top-3 h-full text-gray-500',
			lg: /*tw*/ 'absolute right-3.5 top-4 h-full text-gray-500',
		} as const satisfies BoTextareaSizeStyleMap,

		size: {
			sm: 'sm',
			md: 'default',
			lg: 'lg',
		} as const,
	},

	labels: {
		container: /*tw*/ 'flex items-center justify-start pb-2',
		required: /*tw*/ 'ml-1 text-sm font-medium text-destructive',
		fontSize: 'sm',
	},

	helpers: {
		error: /*tw*/ 'mt-1 flex items-center gap-1 text-sm text-red-600',
		hint: /*tw*/ 'mt-1 text-sm text-gray-600',
		fontSize: 'sm',
	},
} as const;
