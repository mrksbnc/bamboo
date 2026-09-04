import { HTMLAttributes } from 'vue';
import { ComponentManifest } from '../manifests/types.js';
import { Icon } from './bo-icon.js';

export type BoAlertVariant = 'default' | 'primary' | 'warning' | 'destructive';

export type BoAlertPosition =
	| 'top-left'
	| 'top-center'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-center'
	| 'bottom-right';

export interface BoAlertProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	variant?: BoAlertVariant;
	title?: string;
	description?: string;
	showIcon?: boolean;
	icon?: Icon;
	role?: HTMLAttributes['role'];
}

export interface BoAlertContainerProps {
	/** The fixed viewport position for dispatched alerts. */
	position?: BoAlertPosition;
}

type BoAlertManifestDefaults = Pick<BoAlertProps, 'variant' | 'showIcon' | 'role'>;
type BoAlertVariantStyleMap = Record<BoAlertVariant, string>;

export interface BoAlertStyleManifest {
	base: string;
	variant: BoAlertVariantStyleMap;
	icon: BoAlertVariantStyleMap;
	content: string;
	title: string;
	description: string;
}

export type AlertManifest = ComponentManifest<BoAlertStyleManifest, BoAlertManifestDefaults>;
