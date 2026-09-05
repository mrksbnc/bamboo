import type { ScrollAreaManifest } from '../definitions/bo-scroll-area.js';

export const SCROLL_AREA_MANIFEST = {
	meta: { name: 'ScrollArea', version: '1.0.0' },
	styles: {
		base: 'bo-scroll-area',
		masked: 'bo-scroll-area--masked',
		viewport: 'bo-scroll-area__viewport',
		scrollbar: {
			vertical: 'bo-scroll-area__scrollbar--vertical',
			horizontal: 'bo-scroll-area__scrollbar--horizontal',
		},
		thumb: 'bo-scroll-area__thumb',
		corner: 'bo-scroll-area__corner',
	},
	defaults: { masked: false },
} as const satisfies ScrollAreaManifest;
