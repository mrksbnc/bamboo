import { AvatarManifest } from '../definitions/index.js';

export const AVATAR_MANIFEST = {
	meta: {
		name: 'Avatar',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'inline-flex overflow-hidden select-none justify-center items-center',
		size: {
			xs: /*tw*/ 'w-6 h-6',
			sm: /*tw*/ 'w-8 h-8',
			default: /*tw*/ 'w-10 h-10',
			lg: /*tw*/ 'w-12 h-12',
			xl: /*tw*/ 'w-36 h-36',
		},
		kind: {
			circle: /*tw*/ 'rounded-full',
			default: /*tw*/ 'rounded-md',
			flat: /*tw*/ 'rounded-none',
			'outline-flat': /*tw*/ 'rounded-none border',
			'outline-default': /*tw*/ 'rounded-md border',
			'outline-circle': /*tw*/ 'rounded-full border',
		},
		variants: {
			filled: {
				primary: /*tw*/ 'bg-blue-600 dark:bg-blue-700 text-white',
				secondary: /*tw*/ 'bg-gray-400 dark:bg-gray-700 text-white',
				destructive: /*tw*/ 'bg-red-600 dark:bg-red-700 text-white',
				warning: /*tw*/ 'bg-yellow-600 dark:bg-yellow-600 text-white',
				success: /*tw*/ 'bg-green-600 dark:bg-green-700 text-white',
				dark: /*tw*/ 'bg-black dark:bg-black text-white',
			},
			outline: {
				primary:
					/*tw*/ 'bg-transparent border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500',
				secondary:
					/*tw*/ 'bg-transparent border-gray-600 text-gray-600 dark:border-neutral-400 dark:text-neutral-400',
				destructive:
					/*tw*/ 'bg-transparent border-red-600 text-red-600 dark:border-red-500 dark:text-red-500',
				warning:
					/*tw*/ 'bg-transparent border-yellow-600 text-yellow-600 dark:border-yellow-500 dark:text-yellow-500',
				success:
					/*tw*/ 'bg-transparent border-green-600 text-green-600 dark:border-green-500 dark:text-green-500',
				dark: /*tw*/ 'bg-transparent border-black text-black dark:border-neutral-700 dark:text-neutral-400',
			},
		},
		textColor: {
			filled: {
				primary: /*tw*/ 'text-white dark:text-white',
				secondary: /*tw*/ 'text-white dark:text-white',
				destructive: /*tw*/ 'text-white dark:text-white',
				warning: /*tw*/ 'text-white dark:text-white',
				success: /*tw*/ 'text-white dark:text-white',
				dark: /*tw*/ 'text-white dark:text-white',
			},
			outline: {
				primary: /*tw*/ 'text-blue-600 dark:text-blue-500',
				secondary: /*tw*/ 'text-gray-600 dark:text-neutral-400',
				destructive: /*tw*/ 'text-red-600 dark:text-red-500',
				warning: /*tw*/ 'text-yellow-600 dark:text-yellow-500',
				success: /*tw*/ 'text-green-600 dark:text-green-500',
				dark: /*tw*/ 'text-black dark:text-neutral-400',
			},
		},
		indicator: {
			base: /*tw*/ 'absolute rounded-full border-2 border-white dark:border-gray-800 z-10',
			status: {
				online: /*tw*/ 'bg-green-500 dark:bg-green-400',
				offline: /*tw*/ 'bg-gray-400 dark:bg-gray-500',
				busy: /*tw*/ 'bg-red-500 dark:bg-red-400',
				away: /*tw*/ 'bg-yellow-500 dark:bg-yellow-400',
				none: '',
			},
			position: {
				'top-left': /*tw*/ '-top-0.5 -left-0.5',
				'top-right': /*tw*/ '-top-0.5 -right-0.5',
				'bottom-left': /*tw*/ '-bottom-0.5 -left-0.5',
				'bottom-right': /*tw*/ '-bottom-0.5 -right-0.5',
			},
			size: {
				xs: /*tw*/ 'w-2 h-2',
				sm: /*tw*/ 'w-2.5 h-2.5',
				default: /*tw*/ 'w-3 h-3',
				lg: /*tw*/ 'w-4 h-4',
				xl: /*tw*/ 'w-6 h-6',
			},
		},
		labelSize: {
			xs: 'xs',
			sm: 'sm',
			default: 'default',
			lg: 'xl',
			xl: '4xl',
		},
	},
	defaults: {
		role: 'img',
		alt: 'avatar',
		kind: 'default',
		size: 'default',
		variant: 'primary',
		cursor: 'cursor-auto',
		indicatorKind: 'none',
		indicatorPosition: 'top-right',
	},
} as const satisfies AvatarManifest;
