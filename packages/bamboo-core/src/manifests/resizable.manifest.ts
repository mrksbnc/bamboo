import type { ResizableManifest } from '../definitions/bo-resizable.js';

export const RESIZABLE_MANIFEST = {
	meta: { name: 'Resizable', version: '1.0.0' },
	styles: {
		base: 'bo-resizable',
		direction: {
			horizontal: 'bo-resizable--horizontal',
			vertical: 'bo-resizable--vertical',
		},
		panel: 'bo-resizable__panel',
		handle: {
			horizontal: 'bo-resizable__handle--horizontal',
			vertical: 'bo-resizable__handle--vertical',
		},
	},
	defaults: { role: 'group', direction: 'horizontal' },
} as const satisfies ResizableManifest;
