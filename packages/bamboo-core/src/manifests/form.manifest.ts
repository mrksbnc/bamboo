import type { FormFieldManifest, FormManifest } from '../definitions/bo-form.js';

export const FORM_MANIFEST = {
	meta: { name: 'Form', version: '1.0.0' },
	styles: { base: 'bo-form' },
	defaults: {},
} as const satisfies FormManifest;

export const FORM_FIELD_MANIFEST = {
	meta: { name: 'Form Field', version: '1.0.0' },
	styles: {
		base: 'bo-form-field',
		label: 'bo-form-field__label',
		description: 'bo-form-field__description',
		error: 'bo-form-field__error',
		control: 'bo-form-field__control',
	},
	defaults: {},
} as const satisfies FormFieldManifest;
