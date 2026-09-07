import { TextareaManifest } from '../definitions/index.js';

export const TEXTAREA_MANIFEST = {
	meta: {
		name: 'Textarea',
		version: '1.0.0',
	},
	styles: {
		base: 'bo-textarea',

		container: {
			base: 'bo-textarea__container',
			disabled: 'bo-textarea__container--disabled',
			expand: 'bo-textarea__container--expand',
		},

		textarea: {
			base: 'bo-textarea__field',
			withPrefixIcon: 'bo-textarea__field--with-prefix',
			withSuffixIcon: 'bo-textarea__field--with-suffix',
			expand: 'bo-textarea__field--expand',
			resizable: 'bo-textarea__field--resizable',
		},

		state: {
			default: 'bo-textarea__container--default',
			valid: 'bo-textarea__container--valid',
			invalid: 'bo-textarea__container--invalid',
		},

		variant: {
			default: 'bo-textarea__container--variant-default',
			filled: 'bo-textarea__container--variant-filled',
		},

		icons: {
			prefix: 'bo-textarea__prefix-icon',
			suffix: 'bo-textarea__suffix-icon',
		},

		labels: {
			container: 'bo-textarea__label-container',
			label: 'bo-textarea__label',
			required: 'bo-textarea__required',
			description: 'bo-textarea__description',
			fontSize: 'sm',
		},

		helpers: {
			error: 'bo-textarea__error',
			hint: 'bo-textarea__hint',
			fontSize: 'sm',
		},
	},
	defaults: {},
} as const satisfies TextareaManifest;
