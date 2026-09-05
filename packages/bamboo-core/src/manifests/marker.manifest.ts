import { MarkerManifest } from '../definitions/index.js';

export const MARKER_MANIFEST = {
	meta: { name: 'Marker', version: '1.0.0' },
	styles: {
		base: 'bo-marker',
		variant: {
			default: 'bo-marker--default',
			primary: 'bo-marker--primary',
			secondary: 'bo-marker--secondary',
			destructive: 'bo-marker--destructive',
			warning: 'bo-marker--warning',
			success: 'bo-marker--success',
		},
	},
	defaults: {
		variant: 'default',
	},
} as const satisfies MarkerManifest;
