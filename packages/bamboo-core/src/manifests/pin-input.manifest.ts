import type { PinInputManifest } from '../definitions/bo-pin-input.js';

export const PIN_INPUT_MANIFEST = {
	meta: { name: 'PIN Input', version: '1.0.0' },
	styles: {
		base: 'bo-pin-input',
		labels: {
			container: 'bo-pin-input__label-container',
			label: 'bo-pin-input__label',
			required: 'bo-pin-input__required',
		},
		group: 'bo-pin-input__group',
		input: 'bo-pin-input__input',
		helpers: {
			container: 'bo-pin-input__helpers',
			description: 'bo-pin-input__description',
			error: 'bo-pin-input__error',
			hint: 'bo-pin-input__hint',
		},
	},
	defaults: { length: 4, type: 'password', inputMode: 'numeric', pattern: '[0-9]' },
} as const satisfies PinInputManifest;
