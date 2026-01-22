import { TextareaManifest } from '../definitions/index.js';

export const TEXTAREA_MANIFEST = {
	meta: {
		name: 'Textarea',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'flex flex-col transition-all duration-200',

		container: {
			base: /*tw*/ 'relative flex w-full rounded-md border transition-colors focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:focus-within:ring-blue-400 dark:focus-within:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-red-500/20 dark:aria-invalid:border-red-400',
			disabled:
				/*tw*/ 'cursor-not-allowed bg-gray-50 border-gray-200 opacity-50 dark:bg-gray-800 dark:border-gray-700',
			expand: /*tw*/ 'grow',
		},

		textarea: {
			base: /*tw*/ 'w-full resize-none rounded-md border-none bg-transparent text-sm font-normal text-gray-900 dark:text-gray-100 outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:text-red-600 dark:aria-invalid:text-red-400',
			withPrefixIcon: /*tw*/ 'pl-10',
			withSuffixIcon: /*tw*/ 'pr-10',
			expand: /*tw*/ 'grow',
			resizable: /*tw*/ 'resize-y',
		},

		padding: {
			sm: /*tw*/ 'p-2',
			default: /*tw*/ 'p-3',
			lg: /*tw*/ 'p-4',
		},

		state: {
			default:
				/*tw*/ 'border-gray-300 bg-white hover:border-gray-400 focus-within:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600 dark:focus-within:border-blue-400',
			valid:
				/*tw*/ 'border-green-500 bg-white hover:border-green-600 focus-within:border-green-600 focus-within:ring-green-500/20 dark:border-green-500 dark:bg-gray-900 dark:hover:border-green-400 dark:focus-within:border-green-400',
			invalid:
				/*tw*/ 'border-red-500 bg-white hover:border-red-600 focus-within:border-red-500 focus-within:ring-red-500/20 dark:border-red-500 dark:bg-gray-900 dark:hover:border-red-400 dark:focus-within:border-red-400',
		},

		variant: {
			default: /*tw*/ 'bg-white dark:bg-gray-900',
			filled: /*tw*/ 'bg-gray-50 dark:bg-gray-800',
		},

		icons: {
			prefix: {
				sm: /*tw*/ 'absolute left-3 top-2.5 text-gray-500 dark:text-gray-400',
				default: /*tw*/ 'absolute left-3 top-3 text-gray-500 dark:text-gray-400',
				lg: /*tw*/ 'absolute left-3.5 top-4 text-gray-500 dark:text-gray-400',
			},

			suffix: {
				sm: /*tw*/ 'absolute right-3 top-2.5 h-full text-gray-500 dark:text-gray-400',
				default: /*tw*/ 'absolute right-3 top-3 h-full text-gray-500 dark:text-gray-400',
				lg: /*tw*/ 'absolute right-3.5 top-4 h-full text-gray-500 dark:text-gray-400',
			},

			size: {
				sm: 'sm',
				default: 'default',
				lg: 'lg',
			},
		},

		labels: {
			container: /*tw*/ 'flex items-center justify-start pb-2 text-gray-900 dark:text-gray-100',
			required: /*tw*/ 'ml-1 text-sm font-medium text-red-600 dark:text-red-400',
			fontSize: 'sm',
		},

		helpers: {
			error: /*tw*/ 'mt-1 flex items-center gap-1 text-sm text-red-600 dark:text-red-400',
			hint: /*tw*/ 'mt-1 text-sm text-gray-600 dark:text-gray-400',
			fontSize: 'sm',
		},
	},
	defaults: {},
} as const satisfies TextareaManifest;
