import { ButtonManifest } from '../definitions/bo-button';

export const BUTTON_MANIFEST: ButtonManifest = {
	meta: {
		name: 'Button',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 ease-in-out shadow-sm focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',

		shape: {
			default: /*tw*/ 'rounded-lg',
			pill: /*tw*/ 'rounded-full',
			outline: /*tw*/ 'rounded-lg',
		},

		size: {
			xs: /*tw*/ 'h-7 px-2 gap-1 text-xs',
			sm: /*tw*/ 'h-8 px-3 gap-1.5 text-xs',
			default: /*tw*/ 'h-9 px-3 gap-2 text-sm',
			lg: /*tw*/ 'h-10 px-5 gap-2 text-base',
			xl: /*tw*/ 'h-14 px-6 gap-2.5 text-lg',
		},

		iconOnlySize: {
			xs: /*tw*/ 'size-7',
			sm: /*tw*/ 'size-8',
			default: /*tw*/ 'size-9',
			lg: /*tw*/ 'size-10',
			xl: /*tw*/ 'size-14',
		},

		variants: {
			default: {
				primary: /*tw*/ 'bg-blue-700 hover:bg-blue-800',
				secondary: /*tw*/ 'bg-gray-200 hover:bg-gray-300',
				danger: /*tw*/ 'bg-red-600 hover:bg-red-700',
				warning: /*tw*/ 'bg-yellow-500 hover:bg-yellow-600',
				success: /*tw*/ 'bg-green-600 hover:bg-green-700',
				dark: /*tw*/ 'bg-gray-800 hover:bg-gray-700',
				purple: /*tw*/ 'bg-purple-500 hover:bg-purple-600',
				teal: /*tw*/ 'bg-teal-500 hover:bg-teal-600',
			},

			outline: {
				primary: /*tw*/ 'border border-blue-700 hover:bg-blue-800',
				secondary: /*tw*/ 'border border-gray-500 hover:bg-gray-600',
				danger: /*tw*/ 'border border-red-600 hover:bg-red-600',
				warning: /*tw*/ 'border border-yellow-500 hover:bg-yellow-600',
				success: /*tw*/ 'border border-green-500 hover:bg-green-600',
				dark: /*tw*/ 'border border-gray-800 hover:bg-gray-700',
				purple: /*tw*/ 'border border-purple-500 hover:bg-purple-600',
				teal: /*tw*/ 'border border-teal-500 hover:bg-teal-600',
			},

			pill: {
				primary: /*tw*/ 'bg-blue-700 hover:bg-blue-800',
				secondary: /*tw*/ 'bg-gray-200 hover:bg-gray-300',
				danger: /*tw*/ 'bg-red-600 hover:bg-red-700',
				warning: /*tw*/ 'bg-yellow-500 hover:bg-yellow-600',
				success: /*tw*/ 'bg-green-600 hover:bg-green-700',
				dark: /*tw*/ 'bg-gray-800 hover:bg-gray-700',
				purple: /*tw*/ 'bg-purple-500 hover:bg-purple-600',
				teal: /*tw*/ 'bg-teal-500 hover:bg-teal-600',
			},
		},

		textColor: {
			default: {
				primary: /*tw*/ 'text-white',
				secondary: /*tw*/ 'text-gray-600',
				danger: /*tw*/ 'text-white',
				warning: /*tw*/ 'text-white',
				success: /*tw*/ 'text-white',
				dark: /*tw*/ 'text-white',
				purple: /*tw*/ 'text-white',
				teal: /*tw*/ 'text-white',
			},
			outline: {
				primary: /*tw*/ 'text-blue-700 hover:text-white dark:text-blue-500 dark:hover:text-white',
				secondary: /*tw*/ 'text-gray-700 hover:text-white dark:text-gray-300 dark:hover:text-white',
				danger: /*tw*/ 'text-red-600 hover:text-white',
				warning: /*tw*/ 'text-yellow-500 hover:text-white',
				success: /*tw*/ 'text-green-500 hover:text-white',
				dark: /*tw*/ 'text-gray-500 hover:text-white dark:hover:text-white',
				purple: /*tw*/ 'text-purple-500 hover:text-white',
				teal: /*tw*/ 'text-teal-500 hover:text-white',
			},
			pill: {
				primary: /*tw*/ 'text-white',
				secondary: /*tw*/ 'text-gray-600',
				danger: /*tw*/ 'text-white',
				warning: /*tw*/ 'text-white',
				success: /*tw*/ 'text-white',
				dark: /*tw*/ 'text-white',
				purple: /*tw*/ 'text-white',
				teal: /*tw*/ 'text-white',
			},
		},

		fontSize: {
			xs: 'xs',
			sm: 'xs',
			default: 'sm',
			lg: 'base',
			xl: 'lg',
		},

		iconSize: {
			xs: 'sm',
			sm: 'sm',
			default: 'default',
			lg: 'lg',
			xl: 'xl',
		},
	},
	defaults: {
		type: 'button',
		role: 'button',
		kind: 'default',
		size: 'default',
		shape: 'default',
		variant: 'primary',
		loaderType: 'spinner',
	},
};
