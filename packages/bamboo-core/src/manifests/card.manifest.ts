import { CardManifest } from '../definitions/bo-card.js';

export const CARD_MANIFEST: CardManifest = {
	meta: {
		name: 'Card',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'rounded-lg border bg-white dark:bg-gray-900 shadow overflow-hidden',
		variants: {
			default: /*tw*/ 'border-gray-300 dark:border-gray-700',
			outlined: /*tw*/ 'border-gray-400 dark:border-gray-600 shadow-none',
			elevated: /*tw*/ 'border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-gray-900/20',
		},
		size: {
			sm: /*tw*/ 'text-sm',
			default: /*tw*/ 'text-base',
			lg: /*tw*/ 'text-lg',
		},
		clickable:
			/*tw*/ 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200',
		content: /*tw*/ 'overflow-y-auto overflow-x-hidden',
	},
	defaults: {
		variant: 'default',
		size: 'default',
		clickable: false,
	},
};
