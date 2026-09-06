import { AlertDialogManifest } from '../definitions/index.js';

export const ALERT_DIALOG_MANIFEST = {
	meta: {
		name: 'AlertDialog',
		version: '1.0.0',
	},
	styles: {
		backdrop: 'bo-alert-dialog-backdrop',
		wrapper: 'bo-alert-dialog-wrapper',
		panel: 'bo-alert-dialog-panel',
		header: 'bo-alert-dialog-header',
		title: 'bo-alert-dialog-title',
		description: 'bo-alert-dialog-description',
		close: 'bo-alert-dialog-close',
		footer: 'bo-alert-dialog-footer',
		variant: {
			default: 'bo-alert-dialog--default',
			destructive: 'bo-alert-dialog--destructive',
		},
	},
	defaults: {
		confirmText: 'Continue',
		cancelText: 'Cancel',
		showCancel: true,
		variant: 'default',
		closeOnEscape: false,
		closeAriaLabel: 'Close',
		role: 'alertdialog',
	},
} as const satisfies AlertDialogManifest;
