import { HTMLAttributes } from 'vue';
import { ComponentManifest } from '../manifests/types.js';
import { Icon } from './bo-icon.js';

export interface BoMenubarProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	ariaLabel?: HTMLAttributes['aria-label'];
}

type BoMenubarManifestDefaults = Record<string, never>;

export interface BoMenubarStyleManifest {
	readonly base: 'bo-menubar';
	readonly menu: 'bo-menubar__menu';
	readonly trigger: {
		readonly base: 'bo-menubar__trigger';
		readonly active: 'bo-menubar__trigger--active';
	};
	readonly content: 'bo-menubar__content';
	readonly item: {
		readonly base: 'bo-menubar__item';
		readonly shortcut: 'bo-menubar__item-shortcut';
	};
	readonly separator: 'bo-menubar__separator';
	readonly label: 'bo-menubar__label';
	readonly subTrigger: 'bo-menubar__sub-trigger';
	readonly subContent: 'bo-menubar__sub-content';
}

export type MenubarManifest = ComponentManifest<
	BoMenubarStyleManifest,
	BoMenubarManifestDefaults,
	'Menubar'
>;

export interface BoMenubarTriggerProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	label?: string;
	disabled?: boolean;
}

export interface BoMenubarContentProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
}

export interface BoMenubarItemProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	value?: string | number;
	disabled?: boolean;
	icon?: Icon;
	shortcut?: string;
	inset?: boolean;
	variant?: 'default' | 'destructive';
}

export interface BoMenubarLabelProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
}

export interface BoMenubarSeparatorProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
}
