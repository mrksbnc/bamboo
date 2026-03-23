import { InputManifest } from '../definitions/index.js';

export const INPUT_MANIFEST = {
	meta: {
		name: 'Input',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'relative flex w-full flex-col gap-2',

		container: {
			base: /*tw*/ 'relative flex h-10 w-full items-center rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm transition-colors hover:border-neutral-400 outline-2 -outline-offset-1 outline-transparent focus-within:outline-blue-500 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:focus-within:outline-blue-400',
			disabled:
				/*tw*/ 'cursor-not-allowed bg-neutral-50 border-neutral-200 opacity-50 dark:bg-neutral-800 dark:border-neutral-700',
		},

		input: {
			base: /*tw*/ 'flex-1 bg-transparent border-none outline-none text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 disabled:cursor-not-allowed',
		},

		state: {
			default: /*tw*/ '',
			valid:
				/*tw*/ 'border-green-500 focus-within:outline-green-500 dark:border-green-400 dark:focus-within:outline-green-400',
			invalid:
				/*tw*/ 'border-red-500 focus-within:outline-red-500 dark:border-red-400 dark:focus-within:outline-red-400',
		},

		icons: {
			prefix: /*tw*/ 'flex items-center justify-center text-neutral-500 dark:text-neutral-400 mr-2',
			suffix:
				/*tw*/ 'flex items-center justify-center text-neutral-500 dark:text-neutral-400 ml-2 cursor-pointer',
		},

		labels: {
			container: /*tw*/ 'flex justify-between items-center',
			label: /*tw*/ 'text-sm font-medium text-neutral-900 dark:text-neutral-100',
			required: /*tw*/ 'text-red-500 dark:text-red-400 ml-1',
		},

		helpers: {
			container: /*tw*/ 'flex flex-col gap-1',
			error: /*tw*/ 'flex items-center gap-2 text-sm text-red-600 dark:text-red-400',
			hint: /*tw*/ 'text-sm text-neutral-600 dark:text-neutral-400',
		},
	},
	defaults: {
		type: 'text',
		role: 'textbox',
		state: 'default',
	},
} as const satisfies InputManifest;
