import { CardManifest } from '../definitions/index.js';

export const CARD_MANIFEST = {
	meta: { name: 'Card', version: '1.0.0' },
	styles: {
		base: 'bo-card',
		variant: {
			default: 'bo-card--default',
			primary: 'bo-card--primary',
			secondary: 'bo-card--secondary',
			destructive: 'bo-card--destructive',
			warning: 'bo-card--warning',
			success: 'bo-card--success',
		},
		header: 'bo-card__header',
		title: 'bo-card__title',
		description: 'bo-card__description',
		body: 'bo-card__body',
		footer: 'bo-card__footer',
	},
	defaults: {
		variant: 'default',
	},
} as const satisfies CardManifest;
