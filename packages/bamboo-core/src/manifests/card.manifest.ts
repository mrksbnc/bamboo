import { CardManifest } from '../definitions/bo-card.js';

export const CARD_MANIFEST: CardManifest = {
	meta: {
		name: 'Card',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'rounded-lg border bg-white shadow overflow-hidden',
		variants: {
			default: /*tw*/ 'border-gray-300',
			outlined: /*tw*/ 'border-gray-400 shadow-none',
			elevated: /*tw*/ 'border-gray-200 shadow-lg',
		},
		size: {
			sm: /*tw*/ 'text-sm',
			default: /*tw*/ 'text-base',
			lg: /*tw*/ 'text-lg',
		},
		clickable: /*tw*/ 'cursor-pointer hover:bg-gray-50 transition-colors duration-200',
		content: /*tw*/ 'overflow-y-auto overflow-x-hidden',
	},
	defaults: {
		variant: 'default',
		size: 'default',
	},
};
