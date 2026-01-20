import { ButtonManifest } from '../definitions/bo-button';

export const BUTTON_MANIFEST = {
	meta: {
		name: 'Button',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-gray-900 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
		width: {
			default: /*tw*/ 'w-auto',
			fullWidth: /*tw*/ 'w-full',
		},
		shape: {
			default: /*tw*/ 'rounded-md',
			pill: /*tw*/ 'rounded-full',
			flat: /*tw*/ 'rounded-none',
		},
		shadow: {
			default: /*tw*/ 'shadow-sm',
			pill: /*tw*/ 'shadow-sm',
			flat: /*tw*/ 'shadow-sm',
		},
		size: {
			xs: /*tw*/ 'h-7 px-2 py-1 text-xs has-[>svg]:px-1.5',
			sm: /*tw*/ 'h-8 px-3 py-1.5 text-sm has-[>svg]:px-2.5',
			default: /*tw*/ 'h-9 px-4 py-2 text-sm has-[>svg]:px-3',
			lg: /*tw*/ 'h-10 px-6 py-2.5 text-base has-[>svg]:px-4',
			xl: /*tw*/ 'h-11 px-8 py-3 text-lg has-[>svg]:px-6',
		},
		iconOnlySize: {
			xs: /*tw*/ 'size-7',
			sm: /*tw*/ 'size-8',
			default: /*tw*/ 'size-9',
			lg: /*tw*/ 'size-10',
			xl: /*tw*/ 'size-11',
		},
		variants: {
			default: {
				primary:
					/*tw*/ 'bg-blue-600 text-white shadow hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800',
				secondary:
					/*tw*/ 'bg-gray-600 text-white shadow-sm hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-800',
				destructive:
					/*tw*/ 'bg-red-600 text-white shadow-sm hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800',
				warning:
					/*tw*/ 'bg-yellow-500 text-white shadow-sm hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700',
				success:
					/*tw*/ 'bg-green-600 text-white shadow-sm hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800',
				light:
					/*tw*/ 'bg-white text-gray-900 shadow-sm hover:bg-gray-50 hover:text-gray-900 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200',
				dark: /*tw*/ 'bg-gray-900 text-white shadow-sm hover:bg-gray-800 dark:bg-black dark:hover:bg-gray-950',
			},
			outline: {
				primary:
					/*tw*/ 'border border-gray-300 bg-white text-gray-900 shadow-sm hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800',
				secondary:
					/*tw*/ 'border border-gray-300 bg-white text-gray-900 shadow-sm hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800',
				destructive:
					/*tw*/ 'border border-red-600 bg-white text-red-600 shadow-sm hover:bg-red-50 hover:text-red-700 dark:border-red-500 dark:bg-gray-900 dark:text-red-400 dark:hover:bg-red-950',
				warning:
					/*tw*/ 'border border-yellow-500 bg-white text-yellow-600 shadow-sm hover:bg-yellow-50 hover:text-yellow-700 dark:border-yellow-500 dark:bg-gray-900 dark:text-yellow-400 dark:hover:bg-yellow-950',
				success:
					/*tw*/ 'border border-green-600 bg-white text-green-600 shadow-sm hover:bg-green-50 hover:text-green-700 dark:border-green-500 dark:bg-gray-900 dark:text-green-400 dark:hover:bg-green-950',
				light:
					/*tw*/ 'border border-gray-300 bg-white text-gray-900 shadow-sm hover:bg-gray-50 hover:text-gray-900 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800',
				dark: /*tw*/ 'border border-gray-800 bg-white text-gray-900 shadow-sm hover:bg-gray-50 hover:text-gray-900 dark:border-gray-300 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800',
			},
			ghost: {
				primary: /*tw*/ 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950',
				secondary:
					/*tw*/ 'text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800',
				destructive: /*tw*/ 'text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950',
				warning:
					/*tw*/ 'text-yellow-600 hover:bg-yellow-50 dark:text-yellow-400 dark:hover:bg-yellow-950',
				success:
					/*tw*/ 'text-green-600 hover:bg-green-50 dark:text-green-500 dark:hover:bg-green-950',
				light: /*tw*/ 'text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800',
				dark: /*tw*/ 'text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800',
			},
			link: {
				primary: /*tw*/ 'text-blue-600 underline-offset-4 hover:underline dark:text-blue-400',
				secondary: /*tw*/ 'text-gray-900 underline-offset-4 hover:underline dark:text-gray-100',
				destructive: /*tw*/ 'text-red-600 underline-offset-4 hover:underline dark:text-red-400',
				warning: /*tw*/ 'text-yellow-600 underline-offset-4 hover:underline dark:text-yellow-400',
				success: /*tw*/ 'text-green-600 underline-offset-4 hover:underline dark:text-green-500',
				light: /*tw*/ 'text-gray-900 underline-offset-4 hover:underline dark:text-gray-100',
				dark: /*tw*/ 'text-gray-900 underline-offset-4 hover:underline dark:text-gray-100',
			},
		},
		states: {
			loading: /*tw*/ 'cursor-wait opacity-75',
			pressed: /*tw*/ 'scale-95 transition-transform',
			focus: /*tw*/ 'focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
		},
		content: {
			container: /*tw*/ 'inline-flex items-center justify-center gap-2',
			label: /*tw*/ 'flex items-center justify-center',
			prefixIcon: /*tw*/ '',
			suffixIcon: /*tw*/ '',
			loader: /*tw*/ 'ml-2',
		},
		dataAttributes: {
			slot: 'data-slot="button"',
			variant: 'data-variant',
			size: 'data-size',
			disabled: 'data-disabled',
			loading: 'data-loading',
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
} as const satisfies ButtonManifest;
