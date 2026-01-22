import { CheckboxManifest } from '../definitions/index.js';

export const CHECKBOX_MANIFEST = {
	meta: {
		name: 'Checkbox',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'flex flex-col gap-1',

		container: /*tw*/ 'flex items-start gap-2',

		input: {
			base: /*tw*/ 'relative appearance-none rounded border-2 bg-base-100 transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-base-100 disabled:cursor-not-allowed disabled:opacity-50',
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

		checkmark: {
			base: /*tw*/ 'absolute inset-0 flex items-center justify-center text-primary-content pointer-events-none opacity-0 transition-opacity duration-150',
			size: {
				xs: /*tw*/ 'text-[8px]',
				sm: /*tw*/ 'text-xs',
				default: /*tw*/ 'text-sm',
				lg: /*tw*/ 'text-base',
				xl: /*tw*/ 'text-lg',
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
		indeterminate: false,
	},
} as const satisfies CheckboxManifest;
