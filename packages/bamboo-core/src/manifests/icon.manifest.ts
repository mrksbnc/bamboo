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
			primary: /*tw*/ 'text-blue-700 dark:text-blue-600',
			secondary: /*tw*/ 'text-gray-700 dark:text-gray-600',
			success: /*tw*/ 'text-green-700 dark:text-green-600',
			warning: /*tw*/ 'text-yellow-700 dark:text-yellow-600',
			destructive: /*tw*/ 'text-red-700 dark:text-red-600',
			white: /*tw*/ 'text-white',
			black: /*tw*/ 'text-black',
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
