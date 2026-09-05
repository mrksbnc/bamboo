import { HTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';

export type BoAlertDialogVariant = 'default' | 'destructive';

export interface BoAlertDialogProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	open?: boolean;
	title?: string;
	description?: string;
	confirmText?: string;
	cancelText?: string;
	showCancel?: boolean;
	variant?: BoAlertDialogVariant;
	closeOnEscape?: boolean;
	closeAriaLabel?: string;
	role?: HTMLAttributes['role'];
	ariaLabel?: HTMLAttributes['aria-label'];
	ariaLabelledBy?: HTMLAttributes['aria-labelledby'];
	ariaDescribedBy?: HTMLAttributes['aria-describedby'];
}

type BoAlertDialogManifestDefaults = ManifestDefaults<
	BoAlertDialogProps,
	| 'confirmText'
	| 'cancelText'
	| 'showCancel'
	| 'variant'
	| 'closeOnEscape'
	| 'closeAriaLabel'
	| 'role'
>;

export interface BoAlertDialogStyleManifest {
	readonly backdrop: 'bo-alert-dialog-backdrop';
	readonly wrapper: 'bo-alert-dialog-wrapper';
	readonly panel: 'bo-alert-dialog-panel';
	readonly header: 'bo-alert-dialog-header';
	readonly title: 'bo-alert-dialog-title';
	readonly description: 'bo-alert-dialog-description';
	readonly close: 'bo-alert-dialog-close';
	readonly footer: 'bo-alert-dialog-footer';
	readonly variant: Readonly<Record<BoAlertDialogVariant, `bo-alert-dialog--${string}`>>;
}

export type AlertDialogManifest = ComponentManifest<
	BoAlertDialogStyleManifest,
	BoAlertDialogManifestDefaults,
	'AlertDialog'
>;
