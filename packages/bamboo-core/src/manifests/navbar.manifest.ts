import { NavbarManifest } from '../definitions/bo-navbar';

export const NAVBAR_MANIFEST: NavbarManifest = {
	meta: {
		name: 'Navbar',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'w-full z-50 transition-all duration-200',

		variant: {
			default: /*tw*/ 'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700',
			transparent: /*tw*/ 'bg-transparent',
			bordered:
				/*tw*/ 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg mx-4 mt-4',
		},

		size: {
			sm: /*tw*/ 'h-14',
			default: /*tw*/ 'h-16',
			lg: /*tw*/ 'h-20',
		},

		sticky: /*tw*/ 'sticky top-0',
		shadow: /*tw*/ 'shadow-sm',
		blur: /*tw*/ 'backdrop-blur-md bg-white/80 dark:bg-gray-900/80',

		container: {
			base: /*tw*/ 'mx-auto px-4 sm:px-6 lg:px-8',

			maxWidth: {
				sm: /*tw*/ 'max-w-sm',
				md: /*tw*/ 'max-w-md',
				lg: /*tw*/ 'max-w-lg',
				xl: /*tw*/ 'max-w-xl',
				'2xl': /*tw*/ 'max-w-2xl',
				full: /*tw*/ 'max-w-full',
			},
		},

		content: {
			base: /*tw*/ 'flex items-center justify-between w-full',

			size: {
				sm: /*tw*/ 'h-14',
				default: /*tw*/ 'h-16',
				lg: /*tw*/ 'h-20',
			},
		},

		brand: /*tw*/ 'flex items-center flex-shrink-0',
		nav: /*tw*/ 'hidden md:flex items-center space-x-8',
		actions: /*tw*/ 'flex items-center space-x-4',

		mobile: {
			toggle:
				/*tw*/ 'md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500',
			menu: /*tw*/ 'md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg transform transition-all duration-200 ease-in-out origin-top',
			menuOpen: /*tw*/ 'scale-y-100 opacity-100',
		},
	},
	defaults: {
		variant: 'default',
		size: 'default',
		sticky: false,
		shadow: true,
		blur: false,
		maxWidth: 'full',
		role: 'navigation',
	},
};
