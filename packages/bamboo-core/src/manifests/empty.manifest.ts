import { EmptyManifest } from '../definitions/index.js';

export const EMPTY_MANIFEST = {
	meta: { name: 'Empty', version: '1.0.0' },
	styles: {
		base: 'bo-empty',
		title: 'bo-empty__title',
		description: 'bo-empty__description',
		media: 'bo-empty__media',
		content: 'bo-empty__content',
		action: 'bo-empty__action',
	},
	defaults: {},
} as const satisfies EmptyManifest;
