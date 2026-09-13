import { BadgeManifest } from '../definitions/index.js';

export const BADGE_MANIFEST = {
	meta: {
		name: 'Badge',
		version: '1.0.0',
	},
	styles: {
		base: 'bo-badge',
		shape: {
			default: 'bo-badge--shape-default',
			circle: 'bo-badge--shape-circle',
			pill: 'bo-badge--shape-pill',
			flat: 'bo-badge--shape-flat',
		},
		size: {
			default: {
				sm: 'bo-badge--sm',
				default: 'bo-badge--default',
				lg: 'bo-badge--lg',
			},
			circle: {
				sm: 'bo-badge--circle-sm',
				default: 'bo-badge--circle-default',
				lg: 'bo-badge--circle-lg',
			},
		},
		variants: {
			filled: {
				primary: 'bo-badge--filled-primary',
				secondary: 'bo-badge--filled-secondary',
				destructive: 'bo-badge--filled-destructive',
				warning: 'bo-badge--filled-warning',
				success: 'bo-badge--filled-success',
				light: 'bo-badge--filled-light',
				black: 'bo-badge--filled-black',
			},
			outline: {
				primary: 'bo-badge--outline-primary',
				secondary: 'bo-badge--outline-secondary',
				destructive: 'bo-badge--outline-destructive',
				warning: 'bo-badge--outline-warning',
				success: 'bo-badge--outline-success',
				light: 'bo-badge--outline-light',
				black: 'bo-badge--outline-black',
			},
		},
		textColor: {
			filled: {
				primary: '',
				secondary: '',
				destructive: '',
				warning: '',
				success: '',
				light: '',
				black: '',
			},
			outline: {
				primary: '',
				secondary: '',
				destructive: '',
				warning: '',
				success: '',
				light: '',
				black: '',
			},
		},
		fontSize: { sm: 'xs', default: 'xs', lg: 'sm' },
		iconSize: { sm: 'sm', default: 'sm', lg: 'default' },
	},
	defaults: {
		role: 'status',
		kind: 'default',
		size: 'default',
		shape: 'default',
		variant: 'primary',
		cursor: 'cursor-auto',
	},
} as const satisfies BadgeManifest;
