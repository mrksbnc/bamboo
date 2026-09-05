import { RadioGroupManifest } from '../definitions/bo-radio-group.js';

export const RADIO_GROUP_MANIFEST = {
	meta: {
		name: 'RadioGroup',
		version: '1.0.0',
	},
	styles: {
		base: 'bo-radio-group',
		orientation: {
			horizontal: 'bo-radio-group--horizontal',
			vertical: 'bo-radio-group--vertical',
		},
	},
	defaults: {
		orientation: 'vertical',
	},
} as const satisfies RadioGroupManifest;
