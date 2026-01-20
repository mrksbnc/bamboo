import { BadgeManifest } from '../definitions/index.js';

export const BADGE_MANIFEST = {
	meta: {
		name: 'Badge',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'flex items-center justify-center text-center select-none shadow-sm cursor-default font-medium transition-colors leading-none',
		shape: {
			default: /*tw*/ 'rounded-md',
			circle: /*tw*/ 'rounded-full',
			pill: /*tw*/ 'rounded-full',
			flat: /*tw*/ 'rounded-none',
		},

		size: {
			default: {
				sm: /*tw*/ 'px-1 py-0.5',
				default: /*tw*/ 'px-2 py-1',
				lg: /*tw*/ 'px-2.5 py-1.5',
			},
			circle: {
				sm: /*tw*/ 'size-5.5',
				default: /*tw*/ 'size-6.5',
				lg: /*tw*/ 'size-8.5',
			},
		},

		variants: {
			default: {
				primary:
					/*tw*/ 'bg-blue-600 text-white border border-blue-700 dark:bg-blue-700 dark:text-white',
				secondary:
					/*tw*/ 'bg-neutral-600 text-white border border-neutral-700 dark:bg-neutral-700 dark:text-white',
				destructive:
					/*tw*/ 'bg-red-600 text-white border border-red-700 dark:bg-red-700 dark:text-white',
				warning:
					/*tw*/ 'bg-yellow-600 text-white border border-yellow-600 dark:bg-yellow-600 dark:text-white',
				success:
					/*tw*/ 'bg-green-600 text-white border border-green-700 dark:bg-green-700 dark:text-white',
				light:
					/*tw*/ 'bg-neutral-100 text-neutral-800 border border-neutral-200 dark:bg-neutral-200 dark:border-neutral-300 dark:text-neutral-800',
				black:
					/*tw*/ 'bg-neutral-800 text-white border border-neutral-700 dark:bg-neutral-800 dark:text-white',
			},

			outline: {
				primary:
					/*tw*/ 'bg-transparent border border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500',
				secondary:
					/*tw*/ 'bg-transparent border border-neutral-600 text-neutral-600 dark:border-neutral-500 dark:text-neutral-500',
				destructive:
					/*tw*/ 'bg-transparent border border-red-600 text-red-600 dark:border-red-500 dark:text-red-500',
				warning:
					/*tw*/ 'bg-transparent border border-yellow-600 text-yellow-600 dark:border-yellow-500 dark:text-yellow-500',
				success:
					/*tw*/ 'bg-transparent border border-green-600 text-green-600 dark:border-green-500 dark:text-green-500',
				light:
					/*tw*/ 'bg-transparent border border-neutral-400 text-neutral-400 dark:border-neutral-400 dark:text-neutral-400',
				black:
					/*tw*/ 'bg-transparent border border-black text-black dark:border-neutral-600 dark:text-neutral-400',
			},
		},

		fontSize: {
			sm: 'xs',
			default: 'xs',
			lg: 'sm',
		},

		iconSize: {
			sm: 'sm',
			default: 'sm',
			lg: 'default',
		},
	},
	defaults: {
		role: 'status',
		kind: 'default',
		size: 'default',
		shape: 'default',
		variant: 'primary',
		cursor: 'cursor-auto',
	},
} as const satisfies BadgeManifest;
