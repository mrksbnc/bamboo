import { HTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';

export type BoTabsValue = string | number;
export type BoTabsOrientation = 'horizontal' | 'vertical';
export type BoTabsActivationMode = 'automatic' | 'manual';

export interface BoTabsProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	modelValue?: BoTabsValue;
	defaultValue?: BoTabsValue;
	orientation?: BoTabsOrientation;
	activationMode?: BoTabsActivationMode;
	disabled?: boolean;
}

export interface BoTabsListProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	ariaLabel?: HTMLAttributes['aria-label'];
}

export interface BoTabsTriggerProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	value: BoTabsValue;
	disabled?: boolean;
	ariaLabel?: HTMLAttributes['aria-label'];
}

export interface BoTabsContentProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	value: BoTabsValue;
	forceMount?: boolean;
}

type BoTabsManifestDefaults = ManifestDefaults<BoTabsProps, 'orientation' | 'activationMode'>;

export interface BoTabsStyleManifest {
	readonly base: 'bo-tabs';
	readonly list: 'bo-tabs__list';
	readonly listOrientation: Readonly<Record<BoTabsOrientation, `bo-tabs__list--${string}`>>;
	readonly trigger: 'bo-tabs__trigger';
	readonly triggerActive: 'bo-tabs__trigger--active';
	readonly content: 'bo-tabs__content';
}

export type TabsManifest = ComponentManifest<BoTabsStyleManifest, BoTabsManifestDefaults, 'Tabs'>;
