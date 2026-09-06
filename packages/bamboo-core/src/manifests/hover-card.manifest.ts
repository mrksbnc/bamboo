import type { HoverCardManifest } from '../definitions/bo-hover-card.js';

export const HOVER_CARD_MANIFEST = {
	meta: { name: 'HoverCard', version: '1.0.0' },
	styles: {
		trigger: 'bo-hover-card-trigger',
		content: 'bo-hover-card-content',
		placement: {
			top: 'bo-hover-card-content--top',
			'top-start': 'bo-hover-card-content--top-start',
			'top-end': 'bo-hover-card-content--top-end',
			bottom: 'bo-hover-card-content--bottom',
			'bottom-start': 'bo-hover-card-content--bottom-start',
			'bottom-end': 'bo-hover-card-content--bottom-end',
			left: 'bo-hover-card-content--left',
			'left-start': 'bo-hover-card-content--left-start',
			'left-end': 'bo-hover-card-content--left-end',
			right: 'bo-hover-card-content--right',
			'right-start': 'bo-hover-card-content--right-start',
			'right-end': 'bo-hover-card-content--right-end',
		},
	},
	defaults: {
		placement: 'bottom',
		offset: 8,
		openDelay: 700,
		closeDelay: 300,
		role: 'dialog',
	},
} as const satisfies HoverCardManifest;
