import { InputManifest } from '../definitions/index.js';

export const INPUT_MANIFEST = {
	meta: {
		name: 'Input',
		version: '1.0.0',
	},
	styles: {
		base: 'bo-input',

		container: {
			base: 'bo-input__container',
			disabled: 'bo-input__container--disabled',
		},

		input: {
			base: 'bo-input__field',
		},

		state: {
			default: '',
			valid: 'bo-input__container--valid',
			invalid: 'bo-input__container--invalid',
		},

		icons: {
			prefix: 'bo-input__prefix-icon',
			suffix: 'bo-input__suffix-icon',
			passwordToggle: 'bo-input__password-toggle',
		},

		width: {
			default: '',
			full: 'bo-input--full-width',
		},

		labels: {
			container: 'bo-input__label-container',
			label: 'bo-input__label',
			required: 'bo-input__required',
		},

		helpers: {
			container: 'bo-input__helpers',
			error: 'bo-input__error',
			hint: 'bo-input__hint',
		},
	},
	defaults: {
		type: 'text',
		role: 'textbox',
		state: 'default',
	},
} as const satisfies InputManifest;
