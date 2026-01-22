import { ButtonManifest } from '../definitions/bo-button';

export const BUTTON_MANIFEST: ButtonManifest = {
	meta: {
		name: 'Button',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0',

		pressed: /*tw*/ 'scale-95',

		shape: {
			default: /*tw*/ 'rounded-lg',
			pill: /*tw*/ 'rounded-full',
			outline: /*tw*/ 'rounded-lg',
			flat: /*tw*/ 'rounded-none',
		},

		size: {
			xs: /*tw*/ 'h-6 px-2 gap-1 text-xs',
			sm: /*tw*/ 'h-8 px-3 gap-1.5 text-sm',
			default: /*tw*/ 'h-10 px-4 gap-2 text-sm',
			lg: /*tw*/ 'h-12 px-6 gap-2 text-base',
			xl: /*tw*/ 'h-16 px-8 gap-2.5 text-lg',
		},

		iconOnlySize: {
			xs: /*tw*/ 'size-6',
			sm: /*tw*/ 'size-8',
			default: /*tw*/ 'size-10',
			lg: /*tw*/ 'size-12',
			xl: /*tw*/ 'size-16',
		},

		variants: {
			filled: {
				primary:
					/*tw*/ 'bg-blue-600 text-white hover:bg-blue-700 border-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600',
				secondary:
					/*tw*/ 'bg-gray-600 text-white hover:bg-gray-700 border-gray-600 dark:bg-gray-500 dark:hover:bg-gray-600',
				destructive:
					/*tw*/ 'bg-red-600 text-white hover:bg-red-700 border-red-600 dark:bg-red-500 dark:hover:bg-red-600',
				warning:
					/*tw*/ 'bg-yellow-500 text-white hover:bg-yellow-600 border-yellow-500 dark:bg-yellow-400 dark:hover:bg-yellow-500',
				success:
					/*tw*/ 'bg-green-600 text-white hover:bg-green-700 border-green-600 dark:bg-green-500 dark:hover:bg-green-600',
				dark: /*tw*/ 'bg-gray-900 text-white hover:bg-gray-800 border-gray-900 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200',
				link: /*tw*/ 'bg-transparent text-blue-600 hover:text-blue-700 border-transparent dark:text-blue-400 dark:hover:text-blue-300',
				'link-secondary':
					/*tw*/ 'bg-transparent text-gray-600 hover:text-gray-700 border-transparent dark:text-gray-400 dark:hover:text-gray-300',
				'link-destructive':
					/*tw*/ 'bg-transparent text-red-600 hover:text-red-700 border-transparent dark:text-red-400 dark:hover:text-red-300',
				'link-warning':
					/*tw*/ 'bg-transparent text-yellow-600 hover:text-yellow-700 border-transparent dark:text-yellow-400 dark:hover:text-yellow-300',
				'link-success':
					/*tw*/ 'bg-transparent text-green-600 hover:text-green-700 border-transparent dark:text-green-400 dark:hover:text-green-300',
				'link-dark':
					/*tw*/ 'bg-transparent text-gray-900 hover:text-gray-800 border-transparent dark:text-gray-100 dark:hover:text-gray-200',
			},

			outline: {
				primary: /*tw*/ 'border border-blue-500 hover:bg-blue-700',
				secondary: /*tw*/ 'border border-gray-600 hover:bg-gray-400',
				destructive: /*tw*/ 'border border-red-600 hover:bg-red-600',
				warning: /*tw*/ 'border border-yellow-500 hover:bg-yellow-500',
				success: /*tw*/ 'border border-green-600 hover:bg-green-600',
				dark: /*tw*/ 'border border-black hover:bg-black',
				link: /*tw*/ 'bg-transparent hover:bg-transparent',
				'link-secondary': /*tw*/ 'bg-transparent hover:bg-transparent',
				'link-destructive': /*tw*/ 'bg-transparent hover:bg-transparent',
				'link-warning': /*tw*/ 'bg-transparent hover:bg-transparent',
				'link-success': /*tw*/ 'bg-transparent hover:bg-transparent',
				'link-dark': /*tw*/ 'bg-transparent hover:bg-transparent',
			},

			ghost: {
				primary: /*tw*/ 'bg-transparent hover:bg-blue-50',
				secondary: /*tw*/ 'bg-transparent hover:bg-gray-50',
				destructive: /*tw*/ 'bg-transparent hover:bg-red-50',
				warning: /*tw*/ 'bg-transparent hover:bg-yellow-50',
				success: /*tw*/ 'bg-transparent hover:bg-green-50',
				dark: /*tw*/ 'bg-transparent hover:bg-gray-50',
				link: /*tw*/ 'bg-transparent hover:bg-transparent',
				'link-secondary': /*tw*/ 'bg-transparent hover:bg-transparent',
				'link-destructive': /*tw*/ 'bg-transparent hover:bg-transparent',
				'link-warning': /*tw*/ 'bg-transparent hover:bg-transparent',
				'link-success': /*tw*/ 'bg-transparent hover:bg-transparent',
				'link-dark': /*tw*/ 'bg-transparent hover:bg-transparent',
			},
		},

		textColor: {
			filled: {
				primary: /*tw*/ 'text-white',
				secondary: /*tw*/ 'text-white',
				destructive: /*tw*/ 'text-white',
				warning: /*tw*/ 'text-white',
				success: /*tw*/ 'text-white',
				dark: /*tw*/ 'text-white',
				link: /*tw*/ 'text-blue-500 hover:text-blue-700',
				'link-secondary': /*tw*/ 'text-gray-600 hover:text-gray-700',
				'link-destructive': /*tw*/ 'text-red-600 hover:text-red-700',
				'link-warning': /*tw*/ 'text-yellow-500 hover:text-yellow-700',
				'link-success': /*tw*/ 'text-green-600 hover:text-green-700',
				'link-dark': /*tw*/ 'text-black hover:text-black/50',
			},
			outline: {
				primary: /*tw*/ 'text-blue-500 hover:text-white',
				secondary: /*tw*/ 'text-gray-400 hover:text-white',
				destructive: /*tw*/ 'text-red-600 hover:text-white',
				warning: /*tw*/ 'text-yellow-500 hover:text-white',
				success: /*tw*/ 'text-green-600 hover:text-white',
				dark: /*tw*/ 'text-black hover:text-white',
				link: /*tw*/ 'text-blue-500 hover:text-blue-700',
				'link-secondary': /*tw*/ 'text-blue-500 hover:text-blue-700',
				'link-destructive': /*tw*/ 'text-red-600 hover:text-red-700',
				'link-warning': /*tw*/ 'text-yellow-500 hover:text-yellow-700',
				'link-success': /*tw*/ 'text-green-600 hover:text-green-700',
				'link-dark': /*tw*/ 'text-black hover:text-black/50',
			},
			ghost: {
				primary: /*tw*/ 'text-blue-600 hover:text-blue-700',
				secondary: /*tw*/ 'text-gray-600 hover:text-gray-700',
				destructive: /*tw*/ 'text-red-600 hover:text-red-700',
				warning: /*tw*/ 'text-yellow-600 hover:text-yellow-700',
				success: /*tw*/ 'text-green-600 hover:text-green-700',
				dark: /*tw*/ 'text-gray-900 hover:text-black',
				link: /*tw*/ 'text-blue-500 hover:text-blue-700',
				'link-secondary': /*tw*/ 'text-gray-600 hover:text-gray-700',
				'link-destructive': /*tw*/ 'text-red-600 hover:text-red-700',
				'link-warning': /*tw*/ 'text-yellow-500 hover:text-yellow-700',
				'link-success': /*tw*/ 'text-green-600 hover:text-green-700',
				'link-dark': /*tw*/ 'text-black hover:text-black/50',
			},
		},

		shadow: {
			filled: {
				primary: /*tw*/ 'shadow-lg inset-shadow-sm inset-shadow-white/20',
				secondary: /*tw*/ 'shadow-lg inset-shadow-sm inset-shadow-white/20',
				destructive: /*tw*/ 'shadow-lg inset-shadow-sm inset-shadow-white/20',
				warning: /*tw*/ 'shadow-lg inset-shadow-sm inset-shadow-white/20',
				success: /*tw*/ 'shadow-lg inset-shadow-sm inset-shadow-white/20',
				dark: /*tw*/ 'shadow-lg inset-shadow-sm inset-shadow-white/20',
				link: /*tw*/ 'shadow-none',
				'link-secondary': /*tw*/ 'shadow-none',
				'link-destructive': /*tw*/ 'shadow-none',
				'link-warning': /*tw*/ 'shadow-none',
				'link-success': /*tw*/ 'shadow-none',
				'link-dark': /*tw*/ 'shadow-none',
			},
			outline: {
				primary: /*tw*/ 'shadow-lg inset-shadow-sm inset-shadow-white/20',
				secondary: /*tw*/ 'shadow-lg inset-shadow-sm inset-shadow-white/20',
				destructive: /*tw*/ 'shadow-lg inset-shadow-sm inset-shadow-white/20',
				warning: /*tw*/ 'shadow-lg inset-shadow-sm inset-shadow-white/20',
				success: /*tw*/ 'shadow-lg inset-shadow-sm inset-shadow-white/20',
				dark: /*tw*/ 'shadow-lg inset-shadow-sm inset-shadow-white/20',
				link: /*tw*/ 'shadow-none',
				'link-secondary': /*tw*/ 'shadow-none',
				'link-destructive': /*tw*/ 'shadow-none',
				'link-warning': /*tw*/ 'shadow-none',
				'link-success': /*tw*/ 'shadow-none',
				'link-dark': /*tw*/ 'shadow-none',
			},
			ghost: {
				primary: /*tw*/ 'shadow-none',
				secondary: /*tw*/ 'shadow-none',
				destructive: /*tw*/ 'shadow-none',
				warning: /*tw*/ 'shadow-none',
				success: /*tw*/ 'shadow-none',
				dark: /*tw*/ 'shadow-none',
				link: /*tw*/ 'shadow-none',
				'link-secondary': /*tw*/ 'shadow-none',
				'link-destructive': /*tw*/ 'shadow-none',
				'link-warning': /*tw*/ 'shadow-none',
				'link-success': /*tw*/ 'shadow-none',
				'link-dark': /*tw*/ 'shadow-none',
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
		kind: 'filled',
		size: 'default',
		shape: 'default',
		variant: 'primary',
		loaderType: 'spinner',
	},
};
