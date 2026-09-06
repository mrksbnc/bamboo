import { AspectRatioManifest } from '../definitions/index.js';

export const ASPECT_RATIO_MANIFEST = {
	meta: { name: 'AspectRatio', version: '1.0.0' },
	styles: {
		outer: 'bo-aspect-ratio',
		inner: 'bo-aspect-ratio__inner',
	},
	defaults: {
		ratio: 1.777778,
	},
} as const satisfies AspectRatioManifest;
