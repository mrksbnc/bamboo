import { BadgeManifest } from '../definitions/index.js';

export const BADGE_MANIFEST = {
	meta: {
		name: 'Badge',
		version: '1.0.0',
		category: 'display',
		tags: ['badge', 'label', 'tag', 'status', 'indicator', 'chip'],
		description:
			'Simple badge component for displaying status indicators, tags, and more with support for icons, variants, and sizes',
	},
	styles: {
		base: /*tw*/ 'inline-flex max-h-fit items-center justify-center text-center select-none gap-1.5 shadow-sm cursor-default font-medium transition-colors',
		shape: {
			default: /*tw*/ 'rounded-md',
			circle: /*tw*/ 'rounded-full',
			pill: /*tw*/ 'rounded-full',
			flat: /*tw*/ 'rounded-none',
		},

		size: {
			default: {
				xs: /*tw*/ 'px-1 py-0',
				sm: /*tw*/ 'px-1.5 py-0.5',
				default: /*tw*/ 'px-2 py-0.75',
				lg: /*tw*/ 'px-2.5 py-1',
				xl: /*tw*/ 'px-3 py-1.5',
			},

			circle: {
				xs: /*tw*/ 'p-0',
				sm: /*tw*/ 'p-0.5',
				default: /*tw*/ 'p-0.75',
				lg: /*tw*/ 'p-1.25',
				xl: /*tw*/ 'p-2',
			},
		},

		variants: {
			default: {
				primary:
					/*tw*/ 'bg-blue-600 text-white border border-blue-700 dark:bg-blue-700 dark:text-white',
				secondary:
					/*tw*/ 'bg-neutral-600 text-white border border-neutral-700 dark:bg-neutral-700 dark:text-white',
				danger:
					/*tw*/ 'bg-red-600 text-white border border-red-700 dark:bg-red-700 dark:text-white',
				warning:
					/*tw*/ 'bg-yellow-600 text-white border border-yellow-700 dark:bg-yellow-600 dark:text-white',
				success:
					/*tw*/ 'bg-green-600 text-white border border-green-700 dark:bg-green-700 dark:text-white',
				light:
					/*tw*/ 'bg-neutral-100 text-neutral-800 border border-neutral-200 dark:bg-neutral-200 dark:border-neutral-300 dark:text-neutral-800',
				dark: /*tw*/ 'bg-neutral-800 text-white border border-neutral-900 dark:bg-black dark:text-white',
			},

			outline: {
				primary:
					/*tw*/ 'bg-transparent border border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400',
				secondary:
					/*tw*/ 'bg-transparent border border-neutral-600 text-neutral-600 dark:border-neutral-400 dark:text-neutral-400',
				danger:
					/*tw*/ 'bg-transparent border border-red-600 text-red-600 dark:border-red-500 dark:text-red-400',
				warning:
					/*tw*/ 'bg-transparent border border-yellow-600 text-yellow-600 dark:border-yellow-500 dark:text-yellow-400',
				success:
					/*tw*/ 'bg-transparent border border-green-600 text-green-600 dark:border-green-500 dark:text-green-400',
				light:
					/*tw*/ 'bg-transparent border border-neutral-400 text-neutral-400 dark:border-neutral-400 dark:text-neutral-300',
				dark: /*tw*/ 'bg-transparent border border-black text-black dark:border-white dark:text-white',
			},
		},

		fontSize: {
			xs: 'xs',
			sm: 'xs',
			default: 'xs',
			lg: 'default',
			xl: 'lg',
		},

		iconSize: {
			xs: 'sm',
			sm: 'sm',
			default: 'default',
			lg: 'lg',
			xl: 'lg',
		},

		containers: {
			prefixIcon: /*tw*/ 'inline-flex',
			suffixIcon: /*tw*/ 'inline-flex',
		},
	},
	defaults: {
		role: 'status',
		type: 'default',
		size: 'default',
		shape: 'default',
		variant: 'primary',
	},
} as const satisfies BadgeManifest;
