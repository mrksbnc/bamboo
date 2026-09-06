import type { CollapsibleManifest } from '../definitions/bo-collapsible.js';

export const COLLAPSIBLE_MANIFEST = {
	meta: { name: 'Collapsible', version: '1.0.0' },
	styles: {
		base: 'bo-collapsible',
		trigger: 'bo-collapsible__trigger',
		icon: 'bo-collapsible__icon',
		content: 'bo-collapsible__content',
	},
	defaults: { disabled: false },
} as const satisfies CollapsibleManifest;
