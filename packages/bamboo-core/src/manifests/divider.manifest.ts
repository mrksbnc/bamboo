import { DividerManifest } from '../definitions/bo-divider.js';

export const DIVIDER_MANIFEST: DividerManifest = {
	meta: {
		name: 'Divider',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'my-2 w-full border-t',
		variants: {
			primary: /*tw*/ 'border-blue-600',
			secondary: /*tw*/ 'border-gray-200',
			destructive: /*tw*/ 'border-red-600',
			warning: /*tw*/ 'border-yellow-600',
			success: /*tw*/ 'border-green-600',
			dark: /*tw*/ 'border-black',
		},
		types: {
			default: /*tw*/ '',
			dotted: /*tw*/ 'border-dotted',
			dashed: /*tw*/ 'border-dashed',
		},
	},
	defaults: {
		variant: 'secondary',
		type: 'default',
	},
};
