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
			variant: {
				default: '',
				primary: 'bo-modal-header--primary',
				warning: 'bo-modal-header--warning',
				destructive: 'bo-modal-header--destructive',
			},
		},
		close: 'bo-modal-close',
		body: 'bo-modal-body',
		footer: 'bo-modal-footer',
		icon: {
			variant: {
				default: 'bo-modal-icon--default',
				primary: 'bo-modal-icon--primary',
				warning: 'bo-modal-icon--warning',
				destructive: 'bo-modal-icon--destructive',
			},
		},
	},
	defaults: {
		variant: 'default',
		size: 'default',
		closeOnBackdrop: true,
		closeOnEscape: true,
		showClose: true,
		closeAriaLabel: 'Close',
		role: 'dialog',
	},
} as const satisfies ModalManifest;
