import { LoadingSpinnerManifest } from '../definitions/index.js';

export const LOADING_SPINNER_MANIFEST = {
	meta: {
		name: 'LoadingSpinner',
		version: '1.0.0',
		description: 'Animated spinner component for indicating loading states',
		category: 'feedback',
		tags: ['loading', 'spinner', 'loader', 'progress', 'waiting'],
	},
	styles: {
		base: /*tw*/ 'inline-flex animate-spin rounded-full border-2 border-current border-t-transparent',
		container: /*tw*/ 'flex content-center items-center justify-center gap-2 [&>span]:sr-only',
		text: /*tw*/ '',
		size: {
			xs: /*tw*/ 'size-3',
			sm: /*tw*/ 'size-3.5',
			default: /*tw*/ 'size-4',
			lg: /*tw*/ 'size-5',
			xl: /*tw*/ 'size-6',
		},
		variant: {
			primary: /*tw*/ 'text-blue-600 dark:text-blue-500',
			secondary: /*tw*/ 'text-gray-600 dark:text-gray-500',
			success: /*tw*/ 'text-green-600 dark:text-green-500',
			warning: /*tw*/ 'text-yellow-600 dark:text-yellow-500',
			danger: /*tw*/ 'text-red-600 dark:text-red-500',
			white: /*tw*/ 'text-white',
			black: /*tw*/ 'text-black dark:text-white',
			current: /*tw*/ 'text-current',
		},
		textPosition: {
			top: /*tw*/ 'flex-col-reverse',
			bottom: /*tw*/ 'flex-col',
			before: /*tw*/ 'flex-row-reverse',
			after: /*tw*/ 'flex-row',
		},
		labelFontSize: {
			xs: 'xs',
			sm: 'sm',
			default: 'sm',
			lg: 'default',
			xl: 'default',
		},
	},
	defaults: {
		size: 'default',
		variant: 'primary',
		textPosition: 'after',
	},
} as const satisfies LoadingSpinnerManifest;
