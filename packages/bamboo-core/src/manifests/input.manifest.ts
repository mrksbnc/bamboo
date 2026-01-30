import { InputManifest } from '../definitions/index.js';

export const INPUT_MANIFEST = {
	meta: {
		name: 'Input',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'relative flex w-full flex-col gap-2',

		container: {
			base: /*tw*/ 'relative flex h-10 w-full items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-colors hover:border-gray-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600 dark:focus-within:border-blue-400 dark:focus-within:ring-blue-400/20',
			disabled:
				/*tw*/ 'cursor-not-allowed bg-gray-50 border-gray-200 opacity-50 dark:bg-gray-800 dark:border-gray-700',
		},

		input: {
			base: /*tw*/ 'flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 disabled:cursor-not-allowed',
		},

		state: {
			default: /*tw*/ '',
			valid:
				/*tw*/ 'border-green-500 focus-within:border-green-500 focus-within:ring-green-500/20 dark:border-green-400 dark:focus-within:border-green-400 dark:focus-within:ring-green-400/20',
			invalid:
				/*tw*/ 'border-red-500 focus-within:border-red-500 focus-within:ring-red-500/20 dark:border-red-400 dark:focus-within:border-red-400 dark:focus-within:ring-red-400/20',
		},

		icons: {
			prefix: /*tw*/ 'flex items-center justify-center text-gray-500 dark:text-gray-400 mr-2',
			suffix:
				/*tw*/ 'flex items-center justify-center text-gray-500 dark:text-gray-400 ml-2 cursor-pointer',
		},

		labels: {
			container: /*tw*/ 'flex justify-between items-center',
			label: /*tw*/ 'text-sm font-medium text-gray-900 dark:text-gray-100',
			required: /*tw*/ 'text-red-500 dark:text-red-400 ml-1',
		},

		helpers: {
			container: /*tw*/ 'flex flex-col gap-1',
			error: /*tw*/ 'flex items-center gap-2 text-sm text-red-600 dark:text-red-400',
		},
	},
	defaults: {
		type: 'text',
		role: 'textbox',
		state: 'default',
	},
} as const satisfies InputManifest;
