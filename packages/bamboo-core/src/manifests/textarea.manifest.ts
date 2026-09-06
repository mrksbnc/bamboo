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

		padding: {
			sm: 'bo-textarea__field--sm',
			default: 'bo-textarea__field--default',
			lg: 'bo-textarea__field--lg',
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
			prefix: {
				sm: 'bo-textarea__prefix-icon bo-textarea__prefix-icon--sm',
				default: 'bo-textarea__prefix-icon bo-textarea__prefix-icon--default',
				lg: 'bo-textarea__prefix-icon bo-textarea__prefix-icon--lg',
			},
			suffix: {
				sm: 'bo-textarea__suffix-icon bo-textarea__suffix-icon--sm',
				default: 'bo-textarea__suffix-icon bo-textarea__suffix-icon--default',
				lg: 'bo-textarea__suffix-icon bo-textarea__suffix-icon--lg',
			},
			size: {
				sm: 'sm',
				default: 'default',
				lg: 'lg',
			},
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
