import { AvatarManifest } from '../components/bo-avatar';

export const AVATAR_MANIFEST = {
	base: /*tw*/ 'relative inline-flex overflow-hidden select-none',

	size: {
		xs: /*tw*/ 'w-6 h-6',
		sm: /*tw*/ 'w-8 h-8',
		default: /*tw*/ 'w-10 h-10',
		lg: /*tw*/ 'w-12 h-12',
		xl: /*tw*/ 'w-36 h-36',
	},

	shape: {
		circle: /*tw*/ 'rounded-full',
		rounded: /*tw*/ 'rounded-md',
		flat: /*tw*/ 'rounded-none',
		'outline-circle': /*tw*/ 'rounded-full border',
		'outline-rounded': /*tw*/ 'rounded-md border',
		'outline-flat': /*tw*/ 'rounded-none border',
	},

	variants: {
		filled: {
			primary: /*tw*/ 'bg-blue-500 dark:bg-blue-700 text-white',
			secondary: /*tw*/ 'bg-gray-400 dark:bg-gray-700 text-white',
			danger: /*tw*/ 'bg-red-500 dark:bg-red-700 text-white',
			warning: /*tw*/ 'bg-yellow-500 dark:bg-yellow-600 text-white',
			success: /*tw*/ 'bg-green-600 dark:bg-green-700 text-white',
			dark: /*tw*/ 'bg-black dark:bg-black text-white',
		},

		outline: {
			primary:
				/*tw*/ 'bg-transparent border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400',
			secondary:
				/*tw*/ 'bg-transparent border-gray-500 text-gray-500 dark:border-neutral-300 dark:text-neutral-300',
			danger:
				/*tw*/ 'bg-transparent border-red-500 text-red-500 dark:border-red-400 dark:text-red-400',
			warning:
				/*tw*/ 'bg-transparent border-yellow-500 text-yellow-500 dark:border-yellow-400 dark:text-yellow-400',
			success:
				/*tw*/ 'bg-transparent border-green-500 text-green-500 dark:border-green-400 dark:text-green-400',
			dark: /*tw*/ 'bg-transparent border-black text-black dark:border-neutral-700 dark:text-neutral-300',
		},
	},

	textColor: {
		filled: {
			primary: /*tw*/ 'text-white dark:text-white',
			secondary: /*tw*/ 'text-white dark:text-white',
			danger: /*tw*/ 'text-white dark:text-white',
			warning: /*tw*/ 'text-white dark:text-white',
			success: /*tw*/ 'text-white dark:text-white',
			dark: /*tw*/ 'text-white dark:text-white',
		},

		outline: {
			primary: /*tw*/ 'text-blue-500 dark:text-blue-400',
			secondary: /*tw*/ 'text-gray-500 dark:text-neutral-300',
			danger: /*tw*/ 'text-red-500 dark:text-red-400',
			warning: /*tw*/ 'text-yellow-500 dark:text-yellow-400',
			success: /*tw*/ 'text-green-500 dark:text-green-400',
			dark: /*tw*/ 'text-black dark:text-neutral-300',
		},
	},

	indicator: {
		status: {
			online: /*tw*/ 'bg-green-500',
			offline: /*tw*/ 'bg-gray-400',
			busy: /*tw*/ 'bg-red-500',
			away: /*tw*/ 'bg-yellow-500',
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
		lg: 'lg',
		xl: 'xl',
	} as const,

	containers: {
		default: /*tw*/ 'relative overflow-hidden',
		initials: /*tw*/ 'flex h-full w-full items-center justify-center',
		image: /*tw*/ 'relative h-full w-full overflow-hidden',
	},
} as const satisfies AvatarManifest;
