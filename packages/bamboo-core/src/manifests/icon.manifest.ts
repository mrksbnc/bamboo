import { IconManifest } from '../definitions/index.js';

export const ICON_MANIFEST = {
	meta: {
		name: 'Icon',
		version: '1.0.0',
		category: 'display',
		tags: ['icon', 'svg', 'graphic', 'symbol'],
		description: 'SVG icon component with multiple sizes and color variants',
	},
	styles: {
		base: /*tw*/ 'box-border inline-flex items-center justify-center shrink-0',
		size: {
			xs: /*tw*/ 'size-3',
			sm: /*tw*/ 'size-3.5',
			default: /*tw*/ 'size-4',
			lg: /*tw*/ 'size-5',
			xl: /*tw*/ 'size-6',
		},
		variant: {
			current: /*tw*/ 'text-current',
			inherit: /*tw*/ 'text-inherit',
			primary: /*tw*/ 'text-blue-600 dark:text-blue-500',
			secondary: /*tw*/ 'text-gray-600 dark:text-gray-500',
			success: /*tw*/ 'text-green-600 dark:text-green-500',
			warning: /*tw*/ 'text-yellow-600 dark:text-yellow-500',
			destructive: /*tw*/ 'text-red-600 dark:text-red-500',
			white: /*tw*/ 'text-white',
			black: /*tw*/ 'text-black',
		},
		cursor: {
			default: /*tw*/ 'cursor-auto',
			clickable: /*tw*/ 'cursor-pointer',
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
