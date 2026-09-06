import { CheckboxManifest } from '../definitions/bo-checkbox.js';

export const CHECKBOX_MANIFEST = {
	meta: {
		name: 'Checkbox',
		version: '1.0.0',
	},
	styles: {
		base: 'bo-checkbox',
		container: 'bo-checkbox__container',
		input: 'bo-checkbox__input',
		box: {
			sm: 'bo-checkbox__box--sm',
			default: 'bo-checkbox__box--default',
			lg: 'bo-checkbox__box--lg',
		},
		icon: {
			sm: 'bo-checkbox__icon--sm',
			default: 'bo-checkbox__icon--default',
			lg: 'bo-checkbox__icon--lg',
		},
		labelGroup: 'bo-checkbox__label-group',
		label: 'bo-checkbox__label',
		required: 'bo-checkbox__required',
		helpers: {
			container: 'bo-checkbox__helpers',
			error: 'bo-checkbox__error',
			hint: 'bo-checkbox__hint',
		},
	},
	defaults: {
		size: 'default',
	},
} as const satisfies CheckboxManifest;
