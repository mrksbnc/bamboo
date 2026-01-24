import { TextManifest } from '../definitions/bo-text';

export const TEXT_MANIFEST = {
	meta: {
		name: 'Text',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'box-border m-0',

		fontFamily: {
			inherit: /*tw*/ 'font-inherit',
			sans: /*tw*/ 'font-sans',
			mono: /*tw*/ 'font-mono',
			serif: /*tw*/ 'font-serif',
		},

		fontSize: {
			xs: /*tw*/ 'text-xs',
			sm: /*tw*/ 'text-sm',
			default: /*tw*/ 'text-base',
			lg: /*tw*/ 'text-lg',
			xl: /*tw*/ 'text-xl',
			'2xl': /*tw*/ 'text-2xl',
			'3xl': /*tw*/ 'text-3xl',
			'4xl': /*tw*/ 'text-4xl',
			'5xl': /*tw*/ 'text-5xl',
			'6xl': /*tw*/ 'text-6xl',
			'7xl': /*tw*/ 'text-7xl',
			'8xl': /*tw*/ 'text-8xl',
			'9xl': /*tw*/ 'text-9xl',
		},

		textAlign: {
			left: /*tw*/ 'text-left',
			center: /*tw*/ 'text-center',
			right: /*tw*/ 'text-right',
			justify: /*tw*/ 'text-justify',
		},

		fontWeight: {
			thin: /*tw*/ 'font-thin',
			'extra-light': /*tw*/ 'font-extralight',
			light: /*tw*/ 'font-light',
			regular: /*tw*/ 'font-normal',
			medium: /*tw*/ 'font-medium',
			semibold: /*tw*/ 'font-semibold',
			bold: /*tw*/ 'font-bold',
			'extra-bold': /*tw*/ 'font-extrabold',
			black: /*tw*/ 'font-black',
		},

		variant: {
			default: /*tw*/ 'text-neutral-900 dark:text-neutral-100',
			inherit: /*tw*/ 'text-inherit',
			currentColor: /*tw*/ 'text-current',
			primary: /*tw*/ 'text-blue-600 dark:text-blue-500',
			secondary: /*tw*/ 'text-neutral-600 dark:text-neutral-500',
			disabled:
				/*tw*/ 'text-neutral-500 dark:text-neutral-300 opacity-50 cursor-not-allowed select-none',
			success: /*tw*/ 'text-green-600 dark:text-green-500',
			warning: /*tw*/ 'text-yellow-600 dark:text-yellow-500',
			destructive: /*tw*/ 'text-red-600 dark:text-red-500',
			white: /*tw*/ 'text-white',
			black: /*tw*/ 'text-neutral-800 dark:text-neutral-400',
		},

		textTransform: {
			none: /*tw*/ 'normal-case',
			capitalize: /*tw*/ 'capitalize',
			uppercase: /*tw*/ 'uppercase',
			lowercase: /*tw*/ 'lowercase',
		},

		whiteSpace: {
			normal: /*tw*/ 'whitespace-normal',
			nowrap: /*tw*/ 'whitespace-nowrap',
			pre: /*tw*/ 'whitespace-pre',
			'pre-line': /*tw*/ 'whitespace-pre-line',
			'pre-wrap': /*tw*/ 'whitespace-pre-wrap',
			'break-spaces': /*tw*/ 'whitespace-break-spaces',
		},

		cursor: {
			default: /*tw*/ 'cursor-default',
			clickable: /*tw*/ 'cursor-pointer',
		},

		lineClamp: {
			none: /*tw*/ 'line-clamp-none',
			template: /*tw*/ 'line-clamp-',
		},
	},
	defaults: {
		textAlign: 'left',
		lineClamp: 'none',
		role: 'paragraph',
		fontFamily: 'sans',
		variant: 'default',
		fontSize: 'default',
		whiteSpace: 'normal',
		fontWeight: 'regular',
		cursor: 'cursor-auto',
		textTransform: 'none',
	},
} as const satisfies TextManifest;
