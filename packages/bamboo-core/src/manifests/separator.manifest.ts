import { SeparatorManifest } from '../definitions/index.js';

export const SEPARATOR_MANIFEST = {
	meta: { name: 'Separator', version: '1.0.0' },
	styles: {
		base: 'bo-separator',
		orientation: {
			horizontal: 'bo-separator--horizontal',
			vertical: 'bo-separator--vertical',
		},
		withLabel: 'bo-separator--with-label',
		label: 'bo-separator__label',
	},
	defaults: {
		orientation: 'horizontal',
		decorative: true,
		role: 'separator',
	},
} as const satisfies SeparatorManifest;
