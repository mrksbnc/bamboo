import { ProgressManifest } from '../definitions/bo-progress';

export const PROGRESS_MANIFEST: ProgressManifest = {
	meta: {
		name: 'Progress',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'relative w-full overflow-hidden',

		track: /*tw*/ 'w-full bg-gray-200 rounded-full dark:bg-gray-700',

		bar: {
			base: /*tw*/ 'h-full transition-all duration-300 ease-in-out rounded-full',

			size: {
				sm: /*tw*/ 'h-2',
				default: /*tw*/ 'h-3',
				lg: /*tw*/ 'h-4',
			},

			variant: {
				primary: /*tw*/ 'bg-blue-600 dark:bg-blue-500',
				secondary: /*tw*/ 'bg-neutral-600 dark:bg-neutral-500',
				success: /*tw*/ 'bg-green-600 dark:bg-green-500',
				warning: /*tw*/ 'bg-yellow-600 dark:bg-yellow-500',
				destructive: /*tw*/ 'bg-red-600 dark:bg-red-500',
			},

			striped:
				/*tw*/ 'bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:1rem_1rem] bg-repeat-x',

			animated: /*tw*/ 'animate-pulse',

			indeterminate:
				/*tw*/ 'animate-pulse bg-gradient-to-r from-transparent via-current to-transparent bg-[length:2rem_100%] bg-repeat-x animate-[progress-indeterminate_2s_ease-in-out_infinite]',
		},

		label: {
			base: /*tw*/ 'absolute inset-0 flex items-center justify-center font-medium text-white mix-blend-difference',

			size: {
				sm: /*tw*/ 'text-xs',
				default: /*tw*/ 'text-sm',
				lg: /*tw*/ 'text-base',
			},
		},
	},
	defaults: {
		value: 0,
		max: 100,
		size: 'default',
		variant: 'primary',
		showLabel: false,
		indeterminate: false,
		striped: false,
		animated: false,
		role: 'progressbar',
	},
};
