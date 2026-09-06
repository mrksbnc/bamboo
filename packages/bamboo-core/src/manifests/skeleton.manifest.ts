import { SkeletonManifest } from '../definitions/index.js';

export const SKELETON_MANIFEST = {
	meta: { name: 'Skeleton', version: '1.0.0' },
	styles: {
		base: 'bo-skeleton',
		animated: 'bo-skeleton--animated',
		variant: {
			text: 'bo-skeleton--text',
			circle: 'bo-skeleton--circle',
			rect: 'bo-skeleton--rect',
		},
	},
	defaults: {
		variant: 'rect',
		animated: true,
		role: 'status',
	},
} as const satisfies SkeletonManifest;
