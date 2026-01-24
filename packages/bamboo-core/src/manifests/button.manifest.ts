import { ButtonManifest } from '../definitions/bo-button';

export const BUTTON_MANIFEST: ButtonManifest = {
	meta: {
		name: 'Button',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:cursor-inherit',
		pressed: /*tw*/ 'scale-95',
		shape: {
			default: /*tw*/ 'rounded-lg',
			pill: /*tw*/ 'rounded-full',
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
			default: {
				primary:
					/*tw*/ 'bg-blue-600 text-white hover:bg-blue-700 border-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800',
				secondary:
					/*tw*/ 'bg-neutral-600 text-white hover:bg-neutral-700 border-neutral-600 dark:bg-neutral-700 dark:hover:bg-neutral-800',
				destructive:
					/*tw*/ 'bg-red-600 text-white hover:bg-red-700 border-red-600 dark:bg-red-700 dark:hover:bg-red-800',
				warning:
					/*tw*/ 'bg-yellow-600 text-white hover:bg-yellow-700 border-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700',
				success:
					/*tw*/ 'bg-green-600 text-white hover:bg-green-700 border-green-600 dark:bg-green-700 dark:hover:bg-green-800',
				light:
					/*tw*/ 'bg-white text-neutral-900 hover:bg-neutral-50 border-neutral-200 dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-neutral-900',
				dark: /*tw*/ 'bg-neutral-800 text-white hover:bg-neutral-900 border-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-900',
			},
			outline: {
				primary: /*tw*/ 'border border-blue-600 hover:bg-blue-600',
				secondary: /*tw*/ 'border border-neutral-600 hover:bg-neutral-600',
				destructive: /*tw*/ 'border border-red-600 hover:bg-red-600',
				warning: /*tw*/ 'border border-yellow-600 hover:bg-yellow-600',
				success: /*tw*/ 'border border-green-600 hover:bg-green-600',
				light:
					/*tw*/ 'border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-300 dark:hover:bg-neutral-100',
				dark: /*tw*/ 'border border-neutral-800 hover:bg-neutral-800',
			},
			ghost: {
				primary: /*tw*/ 'bg-transparent hover:bg-blue-50 dark:hover:bg-blue-950',
				secondary: /*tw*/ 'bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-950',
				destructive: /*tw*/ 'bg-transparent hover:bg-red-50 dark:hover:bg-red-950',
				warning: /*tw*/ 'bg-transparent hover:bg-yellow-50 dark:hover:bg-yellow-950',
				success: /*tw*/ 'bg-transparent hover:bg-green-50 dark:hover:bg-green-950',
				light: /*tw*/ 'bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-100',
				dark: /*tw*/ 'bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800',
			},
			link: {
				primary:
					/*tw*/ 'bg-transparent text-blue-600 hover:text-blue-700 border-transparent dark:text-blue-500 dark:hover:text-blue-400',
				secondary:
					/*tw*/ 'bg-transparent text-neutral-600 hover:text-neutral-700 border-transparent dark:text-neutral-500 dark:hover:text-neutral-400',
				destructive:
					/*tw*/ 'bg-transparent text-red-600 hover:text-red-700 border-transparent dark:text-red-500 dark:hover:text-red-400',
				warning:
					/*tw*/ 'bg-transparent text-yellow-600 hover:text-yellow-700 border-transparent dark:text-yellow-500 dark:hover:text-yellow-400',
				success:
					/*tw*/ 'bg-transparent text-green-600 hover:text-green-700 border-transparent dark:text-green-500 dark:hover:text-green-400',
				light:
					/*tw*/ 'bg-transparent text-neutral-400 hover:text-neutral-300 border-transparent dark:text-neutral-300 dark:hover:text-neutral-200',
				dark: /*tw*/ 'bg-transparent text-neutral-800 hover:text-neutral-900 border-transparent dark:text-neutral-400 dark:hover:text-neutral-300',
			},
		},
		textColor: {
			default: {
				primary: /*tw*/ 'text-white',
				secondary: /*tw*/ 'text-white',
				destructive: /*tw*/ 'text-white',
				warning: /*tw*/ 'text-white',
				success: /*tw*/ 'text-white',
				light: /*tw*/ 'text-neutral-900',
				dark: /*tw*/ 'text-white',
			},
			outline: {
				primary: /*tw*/ 'text-blue-600 hover:text-white dark:text-blue-500 dark:hover:text-white',
				secondary:
					/*tw*/ 'text-neutral-600 hover:text-white dark:text-neutral-400 dark:hover:text-white',
				destructive: /*tw*/ 'text-red-600 hover:text-white dark:text-red-500 dark:hover:text-white',
				warning:
					/*tw*/ 'text-yellow-600 hover:text-white dark:text-yellow-500 dark:hover:text-white',
				success: /*tw*/ 'text-green-600 hover:text-white dark:text-green-500 dark:hover:text-white',
				light:
					/*tw*/ 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-900',
				dark: /*tw*/ 'text-neutral-800 hover:text-white dark:text-neutral-200 dark:hover:text-white',
			},
			ghost: {
				primary:
					/*tw*/ 'text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400',
				secondary:
					/*tw*/ 'text-neutral-600 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300',
				destructive:
					/*tw*/ 'text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400',
				warning:
					/*tw*/ 'text-yellow-600 hover:text-yellow-700 dark:text-yellow-500 dark:hover:text-yellow-400',
				success:
					/*tw*/ 'text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400',
				light:
					/*tw*/ 'text-neutral-600 hover:text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-200',
				dark: /*tw*/ 'text-neutral-800 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-100',
			},
			link: {
				primary:
					/*tw*/ 'text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400',
				secondary:
					/*tw*/ 'text-neutral-600 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300',
				destructive:
					/*tw*/ 'text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400',
				warning:
					/*tw*/ 'text-yellow-600 hover:text-yellow-700 dark:text-yellow-500 dark:hover:text-yellow-400',
				success:
					/*tw*/ 'text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400',
				light:
					/*tw*/ 'text-neutral-400 hover:text-neutral-300 dark:text-neutral-300 dark:hover:text-neutral-200',
				dark: /*tw*/ 'text-neutral-800 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-100',
			},
		},
		shadow: {
			default: {
				primary: /*tw*/ 'shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30',
				secondary:
					/*tw*/ 'shadow-lg shadow-neutral-600/25 hover:shadow-xl hover:shadow-neutral-600/30',
				destructive: /*tw*/ 'shadow-lg shadow-red-600/25 hover:shadow-xl hover:shadow-red-600/30',
				warning: /*tw*/ 'shadow-lg shadow-yellow-600/25 hover:shadow-xl hover:shadow-yellow-600/30',
				success: /*tw*/ 'shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/30',
				light: /*tw*/ 'shadow-lg shadow-neutral-200/50 hover:shadow-xl hover:shadow-neutral-200/60',
				dark: /*tw*/ 'shadow-lg shadow-neutral-800/25 hover:shadow-xl hover:shadow-neutral-800/30',
			},
			outline: {
				primary: /*tw*/ 'shadow-md shadow-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20',
				secondary:
					/*tw*/ 'shadow-md shadow-neutral-600/10 hover:shadow-lg hover:shadow-neutral-600/20',
				destructive: /*tw*/ 'shadow-md shadow-red-600/10 hover:shadow-lg hover:shadow-red-600/20',
				warning: /*tw*/ 'shadow-md shadow-yellow-600/10 hover:shadow-lg hover:shadow-yellow-600/20',
				success: /*tw*/ 'shadow-md shadow-green-600/10 hover:shadow-lg hover:shadow-green-600/20',
				light: /*tw*/ 'shadow-md shadow-neutral-200/30 hover:shadow-lg hover:shadow-neutral-200/40',
				dark: /*tw*/ 'shadow-md shadow-neutral-800/10 hover:shadow-lg hover:shadow-neutral-800/20',
			},
			ghost: {
				primary: /*tw*/ 'shadow-none',
				secondary: /*tw*/ 'shadow-none',
				destructive: /*tw*/ 'shadow-none',
				warning: /*tw*/ 'shadow-none',
				success: /*tw*/ 'shadow-none',
				light: /*tw*/ 'shadow-none',
				dark: /*tw*/ 'shadow-none',
			},
			link: {
				primary: /*tw*/ 'shadow-none',
				secondary: /*tw*/ 'shadow-none',
				destructive: /*tw*/ 'shadow-none',
				warning: /*tw*/ 'shadow-none',
				success: /*tw*/ 'shadow-none',
				light: /*tw*/ 'shadow-none',
				dark: /*tw*/ 'shadow-none',
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
			xs: 'xs',
			sm: 'xs',
			default: 'sm',
			lg: 'default',
			xl: 'default',
		},
		loaderSize: {
			xs: 'xs',
			sm: 'xs',
			default: 'sm',
			lg: 'default',
			xl: 'default',
		},
		cursor: {
			default: 'cursor-pointer',
			disabled: 'cursor-not-allowed',
			loading: 'cursor-wait',
		},
		width: {
			default: '',
			full: 'w-full',
		},
	},
	defaults: {
		type: 'button',
		role: 'button',
		kind: 'default',
		size: 'default',
		shape: 'default',
		variant: 'primary',
	},
};
