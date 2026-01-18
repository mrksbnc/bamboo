import { LoadingPulseManifest } from '../definitions/index.js';

export const LOADING_PULSE_MANIFEST = {
	meta: {
		name: 'LoadingPulse',
		version: '1.0.0',
		description: 'Animated pulsing dots component for indicating loading states',
		category: 'feedback',
		tags: ['loading', 'pulse', 'dots', 'loader', 'progress', 'waiting'],
	},
	styles: {
		base: /*tw*/ 'flex items-center justify-center gap-1',
		container: /*tw*/ 'flex content-center items-center justify-center gap-2',
		dot: /*tw*/ 'rounded-full animate-pulse',
		size: {
			xs: /*tw*/ 'size-1',
			sm: /*tw*/ 'size-1.5',
			default: /*tw*/ 'size-2',
			lg: /*tw*/ 'size-2.5',
			xl: /*tw*/ 'size-3',
		},
		variant: {
			primary: /*tw*/ 'bg-blue-600 dark:bg-blue-500',
			secondary: /*tw*/ 'bg-gray-600 dark:bg-gray-500',
			success: /*tw*/ 'bg-green-600 dark:bg-green-500',
			warning: /*tw*/ 'bg-yellow-600 dark:bg-yellow-500',
			destructive: /*tw*/ 'bg-red-600 dark:bg-red-500',
			white: /*tw*/ 'bg-white',
			black: /*tw*/ 'bg-black dark:bg-white',
			current: /*tw*/ 'bg-current',
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
		animation: [
			/*tw*/ 'animate-pulse [animation-delay:0ms]',
			/*tw*/ 'animate-pulse [animation-delay:150ms]',
			/*tw*/ 'animate-pulse [animation-delay:300ms]',
		],
	},
	defaults: {},
} as const satisfies LoadingPulseManifest;
