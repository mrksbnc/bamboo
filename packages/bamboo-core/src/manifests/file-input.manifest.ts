import { FileInputManifest } from '../definitions/index.js';

export const FILE_INPUT_MANIFEST = {
	meta: { name: 'File Input', version: '1.0.0' },
	styles: {
		base: 'bo-file-input',
		labels: {
			container: 'bo-file-input__label-container',
			label: 'bo-file-input__label',
			required: 'bo-file-input__required',
			description: 'bo-file-input__description',
		},
		container: 'bo-file-input__container',
		icon: 'bo-file-input__icon',
		input: 'bo-file-input__input',
		fileList: 'bo-file-input__file-list',
		file: 'bo-file-input__file',
		remove: 'bo-file-input__remove',
		helpers: {
			container: 'bo-file-input__helpers',
			error: 'bo-file-input__error',
			hint: 'bo-file-input__hint',
		},
	},
	defaults: {},
} as const satisfies FileInputManifest;
