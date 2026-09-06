import { IconManifest } from '../definitions/index.js';

export const ICON_MANIFEST = {
	meta: {
		name: 'Icon',
		version: '1.0.0',
	},
	styles: {
		base: 'bo-icon',
		cursor: {
			default: 'bo-icon--cursor-auto',
		},
		size: {
			xs: 'bo-icon--xs',
			sm: 'bo-icon--sm',
			default: 'bo-icon--default',
			lg: 'bo-icon--lg',
			xl: 'bo-icon--xl',
		},
		variant: {
			current: 'bo-icon--current',
			inherit: 'bo-icon--inherit',
			primary: 'bo-icon--primary',
			secondary: 'bo-icon--secondary',
			success: 'bo-icon--success',
			warning: 'bo-icon--warning',
			destructive: 'bo-icon--destructive',
			white: 'bo-icon--white',
			black: 'bo-icon--black',
		},
	},
	defaults: {
		size: 'default',
		decorative: true,
		variant: 'current',
	},
} as const satisfies IconManifest;
