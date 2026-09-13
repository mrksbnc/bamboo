import { HTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';
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

type BoAlertManifestDefaults = ManifestDefaults<BoAlertProps, 'variant' | 'showIcon' | 'role'>;
type BoAlertVariantStyleMap = Readonly<Record<BoAlertVariant, `bo-alert--${string}`>>;

export interface BoAlertContainerStyleManifest {
	readonly base: 'bo-alert-container';
	readonly item: 'bo-alert-container__item';
	readonly position: Readonly<Record<BoAlertPosition, `bo-alert-container--${string}`>>;
}

export interface BoAlertStyleManifest {
	readonly base: 'bo-alert';
	readonly variant: BoAlertVariantStyleMap;
	readonly icon: 'bo-alert__icon';
	readonly container: BoAlertContainerStyleManifest;
	readonly content: 'bo-alert__content';
	readonly title: 'bo-alert__title';
	readonly description: 'bo-alert__description';
}

export type AlertManifest = ComponentManifest<
	BoAlertStyleManifest,
	BoAlertManifestDefaults,
	'Alert'
>;
