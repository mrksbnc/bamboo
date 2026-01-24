import { ToggleManifest } from '../definitions/index.js';

export const TOGGLE_MANIFEST = {
	meta: {
		name: 'Toggle',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'flex flex-col gap-1',

		container: /*tw*/ 'flex items-start gap-2',

		track: {
			base: /*tw*/ 'relative inline-flex cursor-pointer rounded-full border-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-base-100 disabled:cursor-not-allowed disabled:opacity-50',
			size: {
				xs: /*tw*/ 'h-4 w-7',
				sm: /*tw*/ 'h-5 w-9',
				default: /*tw*/ 'h-6 w-11',
				lg: /*tw*/ 'h-7 w-12',
				xl: /*tw*/ 'h-8 w-14',
			},
			state: {
				default:
					/*tw*/ 'border-base-300 bg-base-200 hover:bg-base-300 data-[checked]:bg-primary data-[checked]:border-primary',
				valid:
					/*tw*/ 'border-success bg-success/10 data-[checked]:bg-success data-[checked]:border-success',
				invalid:
					/*tw*/ 'border-error bg-error/10 data-[checked]:bg-error data-[checked]:border-error',
			},
			disabled: /*tw*/ 'cursor-not-allowed opacity-50 bg-base-200',
		},

		thumb: {
			base: /*tw*/ 'absolute top-0.5 left-0.5 bg-white rounded-full shadow-sm transition-transform duration-200 ease-in-out',
			size: {
				xs: /*tw*/ 'h-3 w-3 data-[checked]:translate-x-3',
				sm: /*tw*/ 'h-4 w-4 data-[checked]:translate-x-4',
				default: /*tw*/ 'h-5 w-5 data-[checked]:translate-x-5',
				lg: /*tw*/ 'h-6 w-6 data-[checked]:translate-x-5',
				xl: /*tw*/ 'h-7 w-7 data-[checked]:translate-x-6',
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
} as const satisfies ToggleManifest;
