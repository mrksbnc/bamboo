import type { TagsInputManifest } from '../definitions/bo-tags-input.js';

export const TAGS_INPUT_MANIFEST = {
	meta: { name: 'Tags Input', version: '1.0.0' },
	styles: {
		base: 'bo-tags-input',
		labels: {
			container: 'bo-tags-input__label-container',
			label: 'bo-tags-input__label',
			required: 'bo-tags-input__required',
		},
		container: 'bo-tags-input__container',
		tags: 'bo-tags-input__tags',
		tag: 'bo-tags-input__tag',
		remove: 'bo-tags-input__remove',
		input: 'bo-tags-input__input',
		helpers: {
			container: 'bo-tags-input__helpers',
			description: 'bo-tags-input__description',
			error: 'bo-tags-input__error',
			hint: 'bo-tags-input__hint',
		},
	},
	defaults: {},
} as const satisfies TagsInputManifest;
