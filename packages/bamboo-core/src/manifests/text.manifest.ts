import { TextManifest } from '../definitions/bo-text';

export const TEXT_MANIFEST = {
	meta: {
		name: 'Text',
		version: '1.0.0',
	},
	styles: {
		base: 'bo-text',

		fontFamily: {
			inherit: 'bo-text--font-inherit',
			sans: 'bo-text--font-sans',
			mono: 'bo-text--font-mono',
			serif: 'bo-text--font-serif',
		},

		fontSize: {
			xs: 'bo-text--xs',
			sm: 'bo-text--sm',
			default: 'bo-text--default',
			lg: 'bo-text--lg',
			xl: 'bo-text--xl',
			'2xl': 'bo-text--2xl',
			'3xl': 'bo-text--3xl',
			'4xl': 'bo-text--4xl',
			'5xl': 'bo-text--5xl',
			'6xl': 'bo-text--6xl',
			'7xl': 'bo-text--7xl',
			'8xl': 'bo-text--8xl',
			'9xl': 'bo-text--9xl',
		},

		textAlign: {
			left: 'bo-text--align-left',
			center: 'bo-text--align-center',
			right: 'bo-text--align-right',
			justify: 'bo-text--align-justify',
		},

		fontWeight: {
			thin: 'bo-text--thin',
			'extra-light': 'bo-text--extra-light',
			light: 'bo-text--light',
			regular: 'bo-text--regular',
			medium: 'bo-text--medium',
			semibold: 'bo-text--semibold',
			bold: 'bo-text--bold',
			'extra-bold': 'bo-text--extra-bold',
			black: 'bo-text--black',
		},

		variant: {
			default: 'bo-text--variant-default',
			inherit: 'bo-text--variant-inherit',
			currentColor: 'bo-text--variant-current',
			primary: 'bo-text--variant-primary',
			secondary: 'bo-text--variant-secondary',
			disabled: 'bo-text--variant-disabled',
			success: 'bo-text--variant-success',
			warning: 'bo-text--variant-warning',
			destructive: 'bo-text--variant-destructive',
			white: 'bo-text--variant-white',
			black: 'bo-text--variant-black',
		},

		textTransform: {
			none: 'bo-text--transform-none',
			capitalize: 'bo-text--transform-capitalize',
			uppercase: 'bo-text--transform-uppercase',
			lowercase: 'bo-text--transform-lowercase',
		},

		whiteSpace: {
			normal: 'bo-text--whitespace-normal',
			nowrap: 'bo-text--whitespace-nowrap',
			pre: 'bo-text--whitespace-pre',
			'pre-line': 'bo-text--whitespace-pre-line',
			'pre-wrap': 'bo-text--whitespace-pre-wrap',
			'break-spaces': 'bo-text--whitespace-break-spaces',
		},

		cursor: {
			default: 'bo-text--cursor-default',
			clickable: 'bo-text--cursor-pointer',
		},

		lineClamp: {
			none: 'bo-text--line-clamp-none',
			base: 'bo-text--line-clamp',
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
		textTransform: 'none',
	},
} as const satisfies TextManifest;
