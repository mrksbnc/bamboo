import { SwitchManifest } from '../definitions/bo-switch.js';

export const SWITCH_MANIFEST = {
	meta: { name: 'Switch', version: '1.0.0' },
	styles: {
		base: 'bo-switch',
		control: {
			sm: 'bo-switch__control--sm',
			default: 'bo-switch__control--default',
			lg: 'bo-switch__control--lg',
		},
		thumb: {
			sm: 'bo-switch__thumb--sm',
			default: 'bo-switch__thumb--default',
			lg: 'bo-switch__thumb--lg',
		},
		labelGroup: 'bo-switch__label-group',
		label: 'bo-switch__label',
		description: 'bo-switch__description',
	},
	defaults: { size: 'default', orientation: 'horizontal', role: 'switch' },
} as const satisfies SwitchManifest;
