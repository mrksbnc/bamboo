import { SwitchManifest } from '../definitions/bo-switch.js';

export const SWITCH_MANIFEST = {
	meta: { name: 'Switch', version: '1.0.0' },
	styles: {
		base: 'bo-switch',
		control: 'bo-switch__control',
		thumb: 'bo-switch__thumb',
		labelGroup: 'bo-switch__label-group',
		label: 'bo-switch__label',
		description: 'bo-switch__description',
	},
	defaults: { orientation: 'horizontal', role: 'switch' },
} as const satisfies SwitchManifest;
