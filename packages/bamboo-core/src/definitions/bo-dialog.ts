import { HTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';

export type BoDialogSize = 'sm' | 'default' | 'lg' | 'xl' | 'full';

export interface BoDialogProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	open?: boolean;
	title?: string;
	description?: string;
	size?: BoDialogSize;
	closeOnBackdrop?: boolean;
	closeOnEscape?: boolean;
	showClose?: boolean;
	closeAriaLabel?: string;
	role?: HTMLAttributes['role'];
	ariaLabel?: HTMLAttributes['aria-label'];
	ariaLabelledBy?: HTMLAttributes['aria-labelledby'];
	ariaDescribedBy?: HTMLAttributes['aria-describedby'];
}

type BoDialogManifestDefaults = ManifestDefaults<
	BoDialogProps,
	'size' | 'closeOnBackdrop' | 'closeOnEscape' | 'showClose' | 'closeAriaLabel' | 'role'
>;

type BoDialogSizeStyleMap = Readonly<Record<BoDialogSize, `bo-dialog-panel--${string}`>>;

export interface BoDialogStyleManifest {
	readonly backdrop: 'bo-dialog-backdrop';
	readonly wrapper: 'bo-dialog-wrapper';
	readonly panel: {
		readonly base: 'bo-dialog-panel';
		readonly size: BoDialogSizeStyleMap;
	};
	readonly header: 'bo-dialog-header';
	readonly headerContent: 'bo-dialog-header__content';
	readonly title: 'bo-dialog-title';
	readonly close: 'bo-dialog-close';
	readonly body: 'bo-dialog-body';
	readonly description: 'bo-dialog-description';
	readonly footer: 'bo-dialog-footer';
}

export type DialogManifest = ComponentManifest<
	BoDialogStyleManifest,
	BoDialogManifestDefaults,
	'Dialog'
>;
