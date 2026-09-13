import { DropzoneManifest } from '../definitions/index.js';

export const DROPZONE_MANIFEST = {
	meta: { name: 'Dropzone', version: '1.0.0' },
	styles: {
		base: 'bo-dropzone',
		input: 'bo-dropzone__input',
		content: 'bo-dropzone__content',
		icon: 'bo-dropzone__icon',
		label: 'bo-dropzone__label',
		description: 'bo-dropzone__description',
		fileList: 'bo-dropzone__file-list',
		file: 'bo-dropzone__file',
		remove: 'bo-dropzone__remove',
		dragging: 'bo-dropzone--dragging',
		disabled: 'bo-dropzone--disabled',
		error: 'bo-dropzone__error',
	},
	defaults: {},
} as const satisfies DropzoneManifest;
