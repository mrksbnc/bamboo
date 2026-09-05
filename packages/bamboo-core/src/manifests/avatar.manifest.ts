import { AvatarManifest } from '../definitions/index.js';

export const AVATAR_MANIFEST = {
	meta: {
		name: 'Avatar',
		version: '1.0.0',
	},
	styles: {
		base: 'bo-avatar',
		cursor: {
			default: 'bo-avatar--cursor-auto',
		},
		size: {
			xs: 'bo-avatar-size-xs',
			sm: 'bo-avatar-size-sm',
			default: 'bo-avatar-size-default',
			lg: 'bo-avatar-size-lg',
			xl: 'bo-avatar-size-xl',
		},
		kind: {
			circle: '',
			default: '',
			flat: '',
			'outline-flat': '',
			outline: '',
			'outline-circle': '',
		},
		variants: {
			filled: {
				primary: '',
				secondary: '',
				destructive: '',
				warning: '',
				success: '',
				dark: '',
			},
			outline: {
				primary: '',
				secondary: '',
				destructive: '',
				warning: '',
				success: '',
				dark: '',
			},
		},
		textColor: {
			filled: {
				primary: '',
				secondary: '',
				destructive: '',
				warning: '',
				success: '',
				dark: '',
			},
			outline: {
				primary: '',
				secondary: '',
				destructive: '',
				warning: '',
				success: '',
				dark: '',
			},
		},
		indicator: {
			base: 'bo-avatar-indicator',
			status: {
				online: '',
				offline: '',
				busy: '',
				away: '',
				none: '',
			},
			position: {
				'top-left': '',
				'top-right': '',
				'bottom-left': '',
				'bottom-right': '',
			},
			size: {
				xs: '',
				sm: '',
				default: '',
				lg: '',
				xl: '',
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
