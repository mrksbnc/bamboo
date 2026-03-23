import { TextareaManifest } from '../definitions/index.js';

export const TEXTAREA_MANIFEST = {
	meta: {
		name: 'Textarea',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'flex flex-col transition-all duration-200',

		container: {
			base: /*tw*/ 'relative flex w-full rounded-md border outline-2 -outline-offset-1 outline-transparent transition-colors disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-500 dark:aria-invalid:border-red-400',
			disabled:
				/*tw*/ 'cursor-not-allowed bg-neutral-50 border-neutral-200 opacity-50 dark:bg-neutral-800 dark:border-neutral-700',
			expand: /*tw*/ 'grow',
		},

		textarea: {
			base: /*tw*/ 'w-full resize-none rounded-md border-none bg-transparent text-sm font-normal text-neutral-900 dark:text-neutral-100 outline-none focus:outline-none placeholder:text-neutral-500 dark:placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:text-red-600 dark:aria-invalid:text-red-400',
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
				/*tw*/ 'border-neutral-300 bg-white hover:border-neutral-400 focus-within:outline-blue-500 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:focus-within:outline-blue-400',
			valid:
				/*tw*/ 'border-green-500 bg-white hover:border-green-600 focus-within:outline-green-500 dark:border-green-500 dark:bg-neutral-900 dark:hover:border-green-400 dark:focus-within:outline-green-400',
			invalid:
				/*tw*/ 'border-red-500 bg-white hover:border-red-600 focus-within:outline-red-500 dark:border-red-500 dark:bg-neutral-900 dark:hover:border-red-400 dark:focus-within:outline-red-400',
		},

		variant: {
			default: /*tw*/ 'bg-white dark:bg-neutral-900',
			filled: /*tw*/ 'bg-neutral-50 dark:bg-neutral-800',
		},

		icons: {
			prefix: {
				sm: /*tw*/ 'absolute left-3 top-2.5 text-neutral-500 dark:text-neutral-400',
				default: /*tw*/ 'absolute left-3 top-3 text-neutral-500 dark:text-neutral-400',
				lg: /*tw*/ 'absolute left-3.5 top-4 text-neutral-500 dark:text-neutral-400',
			},

			suffix: {
				sm: /*tw*/ 'absolute right-3 top-2.5 h-full text-neutral-500 dark:text-neutral-400',
				default: /*tw*/ 'absolute right-3 top-3 h-full text-neutral-500 dark:text-neutral-400',
				lg: /*tw*/ 'absolute right-3.5 top-4 h-full text-neutral-500 dark:text-neutral-400',
			},

			size: {
				sm: 'sm',
				default: 'default',
				lg: 'lg',
			},
		},

		labels: {
			container:
				/*tw*/ 'flex items-center justify-start pb-2 text-neutral-900 dark:text-neutral-100',
			required: /*tw*/ 'ml-1 text-sm font-medium text-red-600 dark:text-red-400',
			fontSize: 'sm',
		},

		helpers: {
			error: /*tw*/ 'mt-1 flex items-center gap-1 text-sm text-red-600 dark:text-red-400',
			hint: /*tw*/ 'mt-1 text-sm text-neutral-600 dark:text-neutral-400',
			fontSize: 'sm',
		},
	},
	defaults: {},
} as const satisfies TextareaManifest;
