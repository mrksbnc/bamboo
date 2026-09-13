import { HTMLAttributes } from 'vue';
import { ComponentManifest } from '../manifests/types.js';

export interface BoNavigationMenuProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	ariaLabel?: HTMLAttributes['aria-label'];
}

type BoNavigationMenuManifestDefaults = Record<string, never>;

export interface BoNavigationMenuStyleManifest {
	readonly base: 'bo-navigation-menu';
	readonly list: 'bo-navigation-menu__list';
	readonly item: 'bo-navigation-menu__item';
	readonly link: 'bo-navigation-menu__link';
	readonly trigger: 'bo-navigation-menu__trigger';
	readonly content: 'bo-navigation-menu__content';
	readonly viewport: 'bo-navigation-menu__viewport';
	readonly indicator: 'bo-navigation-menu__indicator';
	readonly indicatorInner: 'bo-navigation-menu__indicator-inner';
}

export type NavigationMenuManifest = ComponentManifest<
	BoNavigationMenuStyleManifest,
	BoNavigationMenuManifestDefaults,
	'NavigationMenu'
>;

export interface BoNavigationMenuItemProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	href?: string;
	label?: string;
	active?: boolean;
}

export interface BoNavigationMenuTriggerProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	label?: string;
	disabled?: boolean;
}

export interface BoNavigationMenuContentProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
}
