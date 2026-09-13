import { CardManifest } from '../definitions/index.js';

export const CARD_MANIFEST = {
	meta: { name: 'Card', version: '1.0.0' },
	styles: {
		base: 'bo-card',
		header: 'bo-card__header',
		title: 'bo-card__title',
		description: 'bo-card__description',
		media: 'bo-card__media',
		body: 'bo-card__body',
		footer: 'bo-card__footer',
	},
	defaults: {},
} as const satisfies CardManifest;
