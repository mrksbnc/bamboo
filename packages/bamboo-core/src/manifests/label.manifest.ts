import { LabelManifest } from '../definitions/index.js';

export const LABEL_MANIFEST = {
	meta: { name: 'Label', version: '1.0.0' },
	styles: {
		base: 'bo-label',
		required: 'bo-label__required',
		disabled: 'bo-label--disabled',
		size: {
			sm: 'bo-label--sm',
			default: 'bo-label--default',
			lg: 'bo-label--lg',
		},
	},
	defaults: {
		required: false,
		disabled: false,
		size: 'default',
	},
} as const satisfies LabelManifest;
