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
		base: /*tw*/ 'box-border inline-flex items-center justify-center',
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
			primary: /*tw*/ 'text-blue-500 dark:text-blue-400',
			secondary: /*tw*/ 'text-gray-500 dark:text-gray-400',
			success: /*tw*/ 'text-green-500 dark:text-green-400',
			warning: /*tw*/ 'text-yellow-500 dark:text-yellow-400',
			danger: /*tw*/ 'text-red-500 dark:text-red-400',
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
