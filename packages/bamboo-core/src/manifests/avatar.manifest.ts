import { AvatarManifest } from '../definitions/index.js';

export const AVATAR_MANIFEST = {
	meta: {
		name: 'Avatar',
		version: '1.0.0',
	},
	styles: {
		base: 'bo-avatar',
		size: {
			xs: 'bo-avatar-size-xs',
			sm: 'bo-avatar-size-sm',
			default: 'bo-avatar-size-default',
			lg: 'bo-avatar-size-lg',
			xl: 'bo-avatar-size-xl',
		},
		kind: {
			circle: 'bo-avatar-kind-circle',
			default: 'bo-avatar-kind-default',
			flat: 'bo-avatar-kind-flat',
			'outline-flat': 'bo-avatar-kind-outline-flat',
			outline: 'bo-avatar-kind-outline',
			'outline-circle': 'bo-avatar-kind-outline-circle',
		},
		variants: {
			filled: {
				primary: 'bo-avatar-variant-primary',
				secondary: 'bo-avatar-variant-secondary',
				destructive: 'bo-avatar-variant-destructive',
				warning: 'bo-avatar-variant-warning',
				success: 'bo-avatar-variant-success',
				dark: 'bo-avatar-variant-dark',
			},
			outline: {
				primary: 'bo-avatar-variant-primary',
				secondary: 'bo-avatar-variant-secondary',
				destructive: 'bo-avatar-variant-destructive',
				warning: 'bo-avatar-variant-warning',
				success: 'bo-avatar-variant-success',
				dark: 'bo-avatar-variant-dark',
			},
		},
		textColor: {
			filled: {
				primary: 'bo-avatar-variant-primary',
				secondary: 'bo-avatar-variant-secondary',
				destructive: 'bo-avatar-variant-destructive',
				warning: 'bo-avatar-variant-warning',
				success: 'bo-avatar-variant-success',
				dark: 'bo-avatar-variant-dark',
			},
			outline: {
				primary: 'bo-avatar-variant-primary',
				secondary: 'bo-avatar-variant-secondary',
				destructive: 'bo-avatar-variant-destructive',
				warning: 'bo-avatar-variant-warning',
				success: 'bo-avatar-variant-success',
				dark: 'bo-avatar-variant-dark',
			},
		},
		indicator: {
			base: 'bo-avatar-indicator',
			status: {
				online: 'bo-avatar-indicator-status-online',
				offline: 'bo-avatar-indicator-status-offline',
				busy: 'bo-avatar-indicator-status-busy',
				away: 'bo-avatar-indicator-status-away',
				none: '',
			},
			position: {
				'top-left': 'bo-avatar-indicator-position-top-left',
				'top-right': 'bo-avatar-indicator-position-top-right',
				'bottom-left': 'bo-avatar-indicator-position-bottom-left',
				'bottom-right': 'bo-avatar-indicator-position-bottom-right',
			},
			size: {
				xs: 'bo-avatar-indicator-size-xs',
				sm: 'bo-avatar-indicator-size-sm',
				default: 'bo-avatar-indicator-size-default',
				lg: 'bo-avatar-indicator-size-lg',
				xl: 'bo-avatar-indicator-size-xl',
			},
		},
		labelSize: {
			xs: 'xs',
			sm: 'sm',
			default: 'default',
			lg: 'xl',
			xl: '4xl',
		},
	},
	defaults: {
		role: 'img',
		alt: 'avatar',
		kind: 'default',
		size: 'default',
		variant: 'primary',
		cursor: 'cursor-auto',
		indicatorKind: 'none',
		indicatorPosition: 'top-right',
	},
} as const satisfies AvatarManifest;
