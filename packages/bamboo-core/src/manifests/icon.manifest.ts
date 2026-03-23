import { IconManifest } from '../definitions/index.js';

export const ICON_MANIFEST = {
	meta: {
		name: 'Icon',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'box-border inline-flex items-center justify-center shrink-0',
		size: {
			xs: /*tw*/ 'size-3',
			sm: /*tw*/ 'size-4',
			default: /*tw*/ 'size-6',
			lg: /*tw*/ 'size-8',
			xl: /*tw*/ 'size-10',
		},
		variant: {
			current: /*tw*/ 'text-current',
			inherit: /*tw*/ 'text-inherit',
			primary: /*tw*/ 'text-blue-600 dark:text-blue-500',
			secondary: /*tw*/ 'text-neutral-600 dark:text-neutral-500',
			success: /*tw*/ 'text-green-600 dark:text-green-500',
			warning: /*tw*/ 'text-yellow-600 dark:text-yellow-500',
			destructive: /*tw*/ 'text-red-600 dark:text-red-500',
			white: /*tw*/ 'text-white',
			black: /*tw*/ 'text-neutral-800 dark:text-neutral-400',
		},
	},
	defaults: {
		role: 'img',
		size: 'default',
		decorative: true,
		variant: 'current',
		cursor: 'cursor-auto',
	},
} as const satisfies IconManifest;
