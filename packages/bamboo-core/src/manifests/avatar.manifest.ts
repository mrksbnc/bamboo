import { AvatarManifest } from '../definitions/index.js';

export const AVATAR_MANIFEST = {
	meta: {
		name: 'Avatar',
		version: '1.0.0',
		category: 'media',
		tags: ['avatar', 'profile', 'user', 'image', 'initials', 'status'],
		description:
			'Avatar component for displaying user profile pictures, initials, or default images with support for indicators, sizes, and more',
	},
	styles: {
		base: /*tw*/ 'relative inline-flex overflow-hidden select-none justify-center items-center',
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
			status: {
				online: /*tw*/ 'bg-green-500 dark:bg-green-400',
				offline: /*tw*/ 'bg-gray-400 dark:bg-gray-500',
				busy: /*tw*/ 'bg-red-500 dark:bg-red-400',
				away: /*tw*/ 'bg-yellow-500 dark:bg-yellow-400',
				none: '',
			},
			position: {
				'top-left': /*tw*/ 'top-0 left-0',
				'top-right': /*tw*/ 'top-0 right-0',
				'bottom-left': /*tw*/ 'bottom-0 left-0',
				'bottom-right': /*tw*/ 'bottom-0 right-0',
			},
			size: {
				xs: /*tw*/ 'w-1.5 h-1.5',
				sm: /*tw*/ 'w-2 h-2',
				default: /*tw*/ 'w-2.5 h-2.5',
				lg: /*tw*/ 'w-3.5 h-3.5',
				xl: /*tw*/ 'w-5 h-5',
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
		size: 'default',
		kind: 'default',
		variant: 'primary',
		indicatorKind: 'none',
		indicatorPosition: 'top-right',
	},
} as const satisfies AvatarManifest;
