import { ModalManifest } from '../definitions/index.js';

export const MODAL_MANIFEST = {
	meta: {
		name: 'Modal',
		version: '1.0.0',
	},
	styles: {
		backdrop: 'bo-modal-backdrop',
		wrapper: 'bo-modal-wrapper',
		panel: {
			base: 'bo-modal-panel',
			size: {
				sm: 'bo-modal-panel--sm',
				default: 'bo-modal-panel--default',
				lg: 'bo-modal-panel--lg',
				xl: 'bo-modal-panel--xl',
				full: 'bo-modal-panel--full',
			},
		},
		header: {
			base: 'bo-modal-header',
			content: 'bo-modal-header__content',
			title: 'bo-modal-header__title',
		},
		close: 'bo-modal-close',
		body: 'bo-modal-body',
		footer: 'bo-modal-footer',
	},
	defaults: {
		size: 'default',
		closeOnBackdrop: true,
		closeOnEscape: true,
		showClose: true,
		closeAriaLabel: 'Close',
		role: 'dialog',
	},
} as const satisfies ModalManifest;
