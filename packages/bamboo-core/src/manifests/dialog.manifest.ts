import { DialogManifest } from '../definitions/index.js';

export const DIALOG_MANIFEST = {
	meta: { name: 'Dialog', version: '1.0.0' },
	styles: {
		backdrop: 'bo-dialog-backdrop',
		wrapper: 'bo-dialog-wrapper',
		panel: {
			base: 'bo-dialog-panel',
			size: {
				sm: 'bo-dialog-panel--sm',
				default: 'bo-dialog-panel--default',
				lg: 'bo-dialog-panel--lg',
				xl: 'bo-dialog-panel--xl',
				full: 'bo-dialog-panel--full',
			},
		},
		header: 'bo-dialog-header',
		headerContent: 'bo-dialog-header__content',
		title: 'bo-dialog-title',
		close: 'bo-dialog-close',
		body: 'bo-dialog-body',
		description: 'bo-dialog-description',
		footer: 'bo-dialog-footer',
	},
	defaults: {
		size: 'default',
		closeOnBackdrop: true,
		closeOnEscape: true,
		showClose: true,
		closeAriaLabel: 'Close',
		role: 'dialog',
	},
} as const satisfies DialogManifest;
