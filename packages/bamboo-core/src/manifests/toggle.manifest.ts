import { ToggleManifest } from '../definitions/bo-toggle.js';

export const TOGGLE_MANIFEST = {
	meta: { name: 'Toggle', version: '1.0.0' },
	styles: {
		base: 'bo-toggle',
		variant: { default: 'bo-toggle--default', outline: 'bo-toggle--outline' },
		size: {
			sm: 'bo-toggle--sm',
			default: 'bo-toggle--default-size',
			lg: 'bo-toggle--lg',
		},
		pressed: 'bo-toggle--pressed',
	},
	defaults: { variant: 'default', size: 'default', role: 'button' },
} as const satisfies ToggleManifest;
