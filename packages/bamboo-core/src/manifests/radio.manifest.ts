import { RadioManifest } from '../definitions/index.js';

export const RADIO_MANIFEST = {
	meta: {
		name: 'Radio',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'flex flex-col gap-1',

		container: /*tw*/ 'flex items-start gap-2',

		input: {
			base: /*tw*/ 'relative appearance-none rounded-full border-2 bg-base-100 transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-base-100 disabled:cursor-not-allowed disabled:opacity-50',
			size: {
				xs: /*tw*/ 'h-3 w-3',
				sm: /*tw*/ 'h-4 w-4',
				default: /*tw*/ 'h-5 w-5',
				lg: /*tw*/ 'h-6 w-6',
				xl: /*tw*/ 'h-7 w-7',
			},
			state: {
				default: /*tw*/ 'border-base-300 hover:border-base-content/20',
				valid: /*tw*/ 'border-success',
				invalid: /*tw*/ 'border-error',
			},
			disabled: /*tw*/ 'cursor-not-allowed opacity-50 bg-base-200',
		},

		indicator: {
			base: /*tw*/ 'absolute inset-0 flex items-center justify-center pointer-events-none',
			size: {
				xs: /*tw*/ 'after:h-1 after:w-1',
				sm: /*tw*/ 'after:h-1.5 after:w-1.5',
				default: /*tw*/ 'after:h-2 after:w-2',
				lg: /*tw*/ 'after:h-2.5 after:w-2.5',
				xl: /*tw*/ 'after:h-3 after:w-3',
			},
		},

		labelContainer: /*tw*/ 'flex flex-col gap-1',

		label: {
			base: /*tw*/ 'text-base-content cursor-pointer select-none',
			size: {
				xs: /*tw*/ 'text-xs',
				sm: /*tw*/ 'text-sm',
				default: /*tw*/ 'text-sm',
				lg: /*tw*/ 'text-base',
				xl: /*tw*/ 'text-lg',
			},
			disabled: /*tw*/ 'cursor-not-allowed opacity-50',
		},

		description: {
			base: /*tw*/ 'text-base-content/60',
			size: {
				xs: /*tw*/ 'text-xs',
				sm: /*tw*/ 'text-xs',
				default: /*tw*/ 'text-sm',
				lg: /*tw*/ 'text-sm',
				xl: /*tw*/ 'text-base',
			},
		},

		error: {
			base: /*tw*/ 'flex items-center gap-1 text-error',
			size: {
				xs: /*tw*/ 'text-xs',
				sm: /*tw*/ 'text-xs',
				default: /*tw*/ 'text-sm',
				lg: /*tw*/ 'text-sm',
				xl: /*tw*/ 'text-base',
			},
		},
	},
	defaults: {
		size: 'default',
		state: 'default',
		checked: false,
	},
} as const satisfies RadioManifest;
