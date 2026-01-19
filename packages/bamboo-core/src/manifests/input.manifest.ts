import { InputManifest } from '../definitions/index.js';

export const INPUT_MANIFEST = {
	meta: {
		name: 'Input',
		version: '1.0.0',
		description: 'Text input field component with support for icons, validation states, and pills',
		category: 'form',
		tags: ['input', 'form', 'text', 'field', 'validation', 'pills'],
	},
	styles: {
		base: /*tw*/ 'relative flex w-full flex-col transition-all duration-200',

		container: {
			base: /*tw*/ 'relative flex w-full items-center rounded-md border transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:focus-within:ring-blue-400 dark:focus-within:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-red-500/20 dark:aria-invalid:border-red-400',
			disabled:
				/*tw*/ 'cursor-not-allowed bg-gray-50 border-gray-200 opacity-50 dark:bg-gray-800 dark:border-gray-700',
		},

		input: {
			base: /*tw*/ 'w-full flex-1 bg-transparent text-sm font-normal border-none outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed aria-invalid:text-red-600 dark:aria-invalid:text-red-400',
			withPills: /*tw*/ 'min-w-25',
		},

		size: {
			sm: /*tw*/ 'h-8 px-3 py-1 text-xs',
			default: /*tw*/ 'h-9 px-3 py-1',
			lg: /*tw*/ 'h-10 px-3 py-2',
		},

		padding: {
			sm: /*tw*/ 'py-1 px-3',
			default: /*tw*/ 'py-1 px-3',
			lg: /*tw*/ 'py-2 px-3',
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
			prefix: /*tw*/ 'absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400',
			suffix: /*tw*/ 'absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400',
			size: {
				sm: 'sm',
				default: 'default',
				lg: 'lg',
			},
		},

		inputContainer: {
			base: /*tw*/ 'flex max-h-31 w-full gap-1.5 overflow-y-auto',
			horizontalScroll: /*tw*/ 'scrollbar-none flex-nowrap overflow-x-auto',
			flexWrap: /*tw*/ 'flex-wrap',
			withPrefixIcon: /*tw*/ 'ml-8',
			withSuffixIcon: /*tw*/ 'mr-8',
		},

		labels: {
			container: /*tw*/ 'flex justify-between gap-2',
			label:
				/*tw*/ 'mb-1 flex items-center gap-1 text-sm font-medium leading-none text-gray-900 dark:text-gray-100 peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
			required: /*tw*/ 'pl-0.5 text-red-600 dark:text-red-400',
			fontSize: 'sm',
		},

		helpers: {
			container: /*tw*/ 'mt-1 flex flex-col gap-1',
			error: /*tw*/ 'flex items-center gap-1 text-sm text-red-600 dark:text-red-400',
			fontSize: 'sm',
		},
	},
	defaults: {
		type: 'text',
		role: 'textbox',
		size: 'default',
		state: 'default',
		variant: 'default',
	},
} as const satisfies InputManifest;
