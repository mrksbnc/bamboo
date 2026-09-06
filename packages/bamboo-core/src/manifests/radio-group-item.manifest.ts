import { RadioGroupItemManifest } from '../definitions/bo-radio-group.js';

export const RADIO_GROUP_ITEM_MANIFEST = {
	meta: {
		name: 'RadioGroupItem',
		version: '1.0.0',
	},
	styles: {
		base: 'bo-radio-group-item',
		input: 'bo-radio-group-item__input',
		indicator: 'bo-radio-group-item__indicator',
		dot: 'bo-radio-group-item__dot',
		labelGroup: 'bo-radio-group-item__label-group',
		label: 'bo-radio-group-item__label',
		description: 'bo-radio-group-item__description',
	},
	defaults: {},
} as const satisfies RadioGroupItemManifest;
