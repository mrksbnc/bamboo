import { HTMLAttributes } from 'vue';
import { ComponentManifest } from '../manifests/types.js';
import { Icon } from './bo-icon.js';

export type BoSidebarSide = 'left' | 'right' | 'top';

export interface BoSidebarProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	side?: BoSidebarSide;
	width?: string;
	collapsible?: boolean;
	ariaLabel?: HTMLAttributes['aria-label'];
}

type BoSidebarManifestDefaults = Readonly<Pick<BoSidebarProps, 'side' | 'collapsible'>>;

export interface BoSidebarStyleManifest {
	readonly base: 'bo-sidebar';
	readonly side: Readonly<Record<BoSidebarSide, `bo-sidebar--${string}`>>;
	readonly collapsed: 'bo-sidebar--collapsed';
	readonly header: 'bo-sidebar__header';
	readonly content: 'bo-sidebar__content';
	readonly footer: 'bo-sidebar__footer';
	readonly group: 'bo-sidebar__group';
	readonly groupLabel: 'bo-sidebar__group-label';
	readonly groupLabelContainer: 'bo-sidebar__group-label-container';
	readonly groupAction: 'bo-sidebar__group-action';
	readonly groupContent: 'bo-sidebar__group-content';
	readonly groupContentInner: 'bo-sidebar__group-content-inner';
	readonly visuallyHidden: 'bo-sidebar__visually-hidden';
	readonly menu: 'bo-sidebar__menu';
	readonly menuButton: {
		readonly base: 'bo-sidebar__menu-button';
		readonly active: 'bo-sidebar__menu-button--active';
	};
	readonly menuItem: {
		readonly base: 'bo-sidebar__menu-item';
		readonly active: 'bo-sidebar__menu-item--active';
		readonly label: 'bo-sidebar__menu-item-label';
	};
	readonly menuAction: 'bo-sidebar__menu-action';
	readonly menuBadge: 'bo-sidebar__menu-badge';
	readonly menuSub: 'bo-sidebar__menu-sub';
	readonly menuSubButton: 'bo-sidebar__menu-sub-button';
	readonly menuSubItem: 'bo-sidebar__menu-sub-item';
	readonly rail: 'bo-sidebar__rail';
	readonly trigger: 'bo-sidebar__trigger';
	readonly inset: 'bo-sidebar__inset';
}

export type SidebarManifest = ComponentManifest<
	BoSidebarStyleManifest,
	BoSidebarManifestDefaults,
	'Sidebar'
>;

export interface BoSidebarMenuButtonProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	label?: string;
	icon?: Icon;
	active?: boolean;
	disabled?: boolean;
}

export interface BoSidebarMenuItemProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	href?: string;
	label?: string;
	icon?: Icon;
	active?: boolean;
	disabled?: boolean;
}

export interface BoSidebarGroupActionProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	disabled?: boolean;
}
export interface BoSidebarGroupContentProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	open?: boolean;
}
export interface BoSidebarMenuActionProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	disabled?: boolean;
	label?: string;
	icon?: Icon;
	showOnHover?: boolean;
}
export interface BoSidebarMenuBadgeProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
}
export interface BoSidebarMenuSubProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
}
export interface BoSidebarMenuSubItemProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	href?: string;
	label?: string;
	active?: boolean;
	disabled?: boolean;
}
export interface BoSidebarMenuSubButtonProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	label?: string;
	icon?: Icon;
	active?: boolean;
	disabled?: boolean;
}
export interface BoSidebarInsetProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
}
export interface BoSidebarRailProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
}
