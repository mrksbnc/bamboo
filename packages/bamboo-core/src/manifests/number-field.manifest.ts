import type { NumberFieldManifest } from '../definitions/bo-number-field.js';

export const NUMBER_FIELD_MANIFEST = {
	meta: { name: 'Number Field', version: '1.0.0' },
	styles: {
		base: 'bo-number-field',
		labels: {
			container: 'bo-number-field__label-container',
			label: 'bo-number-field__label',
			required: 'bo-number-field__required',
		},
		container: 'bo-number-field__container',
		input: 'bo-number-field__input',
		button: 'bo-number-field__button',
		buttons: {
			container: 'bo-number-field__buttons',
			decrement: 'bo-number-field__button--decrement',
			increment: 'bo-number-field__button--increment',
		},
		helpers: {
			container: 'bo-number-field__helpers',
			description: 'bo-number-field__description',
			error: 'bo-number-field__error',
			hint: 'bo-number-field__hint',
		},
	},
	defaults: {},
} as const satisfies NumberFieldManifest;
