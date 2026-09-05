import { HTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';

export type BoToastVariant = 'default' | 'primary' | 'success' | 'warning' | 'destructive';
export type BoToastPosition =
	| 'top-left'
	| 'top-center'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-center'
	| 'bottom-right';

export interface BoToastProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	open?: boolean;
	title?: string;
	description?: string;
	variant?: BoToastVariant;
	duration?: number;
	closable?: boolean;
	closeAriaLabel?: string;
	role?: HTMLAttributes['role'];
}

export interface BoToastViewportProps {
	position?: BoToastPosition;
	label?: string;
}

type BoToastManifestDefaults = ManifestDefaults<
	BoToastProps,
	'variant' | 'duration' | 'closable' | 'closeAriaLabel' | 'role'
>;

export interface BoToastStyleManifest {
	readonly viewport: 'bo-toast-viewport';
	readonly viewportPosition: Readonly<Record<BoToastPosition, `bo-toast-viewport--${string}`>>;
	readonly item: 'bo-toast';
	readonly variant: Readonly<Record<BoToastVariant, `bo-toast--${string}`>>;
	readonly icon: 'bo-toast__icon';
	readonly content: 'bo-toast__content';
	readonly title: 'bo-toast__title';
	readonly description: 'bo-toast__description';
	readonly close: 'bo-toast__close';
}

export type ToastManifest = ComponentManifest<
	BoToastStyleManifest,
	BoToastManifestDefaults,
	'Toast'
>;
