import { LoadingSpinnerManifest } from '../definitions/index.js';

export const LOADING_SPINNER_MANIFEST = {
	meta: {
		name: 'LoadingSpinner',
		version: '1.0.0',
	},
	styles: {
		base: 'bo-loading-spinner__track',
		container: 'bo-loading-spinner',
		text: '',
		size: {
			xs: 'bo-loading-spinner__track--xs',
			sm: 'bo-loading-spinner__track--sm',
			default: 'bo-loading-spinner__track--default',
			lg: 'bo-loading-spinner__track--lg',
			xl: 'bo-loading-spinner__track--xl',
		},
		variant: {
			primary: 'bo-loading-spinner--primary',
			secondary: 'bo-loading-spinner--secondary',
			success: 'bo-loading-spinner--success',
			warning: 'bo-loading-spinner--warning',
			destructive: 'bo-loading-spinner--destructive',
			white: 'bo-loading-spinner--white',
			black: 'bo-loading-spinner--black',
			current: 'bo-loading-spinner--current',
		},
		textPosition: {
			top: 'bo-loading-spinner--top',
			bottom: 'bo-loading-spinner--bottom',
			before: 'bo-loading-spinner--before',
			after: 'bo-loading-spinner--after',
		},
		labelFontSize: {
			xs: 'xs',
			sm: 'sm',
			default: 'sm',
			lg: 'default',
			xl: 'default',
		},
	},
	defaults: {
		role: 'status',
		size: 'default',
		variant: 'primary',
		textPosition: 'after',
	},
} as const satisfies LoadingSpinnerManifest;
