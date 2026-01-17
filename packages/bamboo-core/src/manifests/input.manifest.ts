import { BoInputSize, BoInputState, BoInputVariant } from '../components/bo-input';
import { BoFontSize } from '../components/bo-text';
import { BoIconSize } from '../components/bo-icon';

type BoInputSizeStyleMap = Record<BoInputSize, string>;
type BoInputStateStyleMap = Record<BoInputState, string>;
type BoInputVariantStyleMap = Record<BoInputVariant, string>;

interface InputManifest {
	base: string;
	container: {
		base: string;
		disabled: string;
	};
	input: {
		base: string;
		withPills: string;
	};
	size: BoInputSizeStyleMap;
	padding: BoInputSizeStyleMap;
	state: BoInputStateStyleMap;
	variant: BoInputVariantStyleMap;
	icons: {
		prefix: string;
		suffix: string;
		size: Record<BoInputSize, BoIconSize>;
	};
	inputContainer: {
		base: string;
		horizontalScroll: string;
		flexWrap: string;
		withPrefixIcon: string;
		withSuffixIcon: string;
	};
	labels: {
		container: string;
		label: string;
		required: string;
		fontSize: BoFontSize;
	};
	helpers: {
		container: string;
		error: string;
		fontSize: BoFontSize;
	};
}

export const INPUT_MANIFEST: InputManifest = {
	base: /*tw*/ 'relative flex w-full flex-col transition-all duration-200',

	container: {
		base: /*tw*/ 'relative flex w-full items-center rounded-md border transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-red-500/20',
		disabled: /*tw*/ 'cursor-not-allowed bg-gray-50 border-gray-200 opacity-50',
	},

	input: {
		base: /*tw*/ 'w-full flex-1 bg-transparent text-sm font-normal border-none outline-none text-gray-900 placeholder:text-gray-500 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed aria-invalid:text-red-600',
		withPills: /*tw*/ 'min-w-[100px]',
	},

	size: {
		sm: /*tw*/ 'h-8 px-3 py-1 text-xs',
		md: /*tw*/ 'h-9 px-3 py-1',
		lg: /*tw*/ 'h-10 px-3 py-2',
	} as const satisfies BoInputSizeStyleMap,

	padding: {
		sm: /*tw*/ 'py-1 px-3',
		md: /*tw*/ 'py-1 px-3',
		lg: /*tw*/ 'py-2 px-3',
	} as const satisfies BoInputSizeStyleMap,

	state: {
		default: /*tw*/ 'border-gray-300 bg-white hover:border-gray-400 focus-within:border-blue-500',
		valid:
			/*tw*/ 'border-green-500 bg-white hover:border-green-600 focus-within:border-green-600 focus-within:ring-green-500/20',
		invalid:
			/*tw*/ 'border-red-500 bg-white hover:border-red-600 focus-within:border-red-500 focus-within:ring-red-500/20',
	} as const satisfies BoInputStateStyleMap,

	variant: {
		default: /*tw*/ 'bg-white',
		filled: /*tw*/ 'bg-gray-50',
	} as const satisfies BoInputVariantStyleMap,

	icons: {
		prefix: /*tw*/ 'absolute left-3 top-1/2 -translate-y-1/2 text-gray-500',
		suffix: /*tw*/ 'absolute right-3 top-1/2 -translate-y-1/2 text-gray-500',
		size: {
			sm: 'sm',
			md: 'default',
			lg: 'lg',
		} as const,
	},

	inputContainer: {
		base: /*tw*/ 'flex max-h-[124px] w-full gap-1.5 overflow-y-auto',
		horizontalScroll: /*tw*/ 'scrollbar-none flex-nowrap overflow-x-auto',
		flexWrap: /*tw*/ 'flex-wrap',
		withPrefixIcon: /*tw*/ 'ml-8',
		withSuffixIcon: /*tw*/ 'mr-8',
	},

	labels: {
		container: /*tw*/ 'flex justify-between gap-2',
		label:
			/*tw*/ 'mb-1 flex items-center gap-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
		required: /*tw*/ 'pl-0.5 text-destructive',
		fontSize: 'sm',
	},

	helpers: {
		container: /*tw*/ 'mt-1 flex flex-col gap-1',
		error: /*tw*/ 'flex items-center gap-1 text-sm text-red-600',
		fontSize: 'sm',
	},
} as const;
