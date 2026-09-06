import { VisuallyHiddenManifest } from '../definitions/index.js';

export const VISUALLY_HIDDEN_MANIFEST = {
	meta: { name: 'VisuallyHidden', version: '1.0.0' },
	styles: {
		base: 'bo-visually-hidden',
	},
	defaults: {},
} as const satisfies VisuallyHiddenManifest;
