import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';

export type BoContextMenuItemVariant = 'default' | 'destructive';

export interface BoContextMenuProps {
	id?: string;
	dataTestId?: string;
	open?: boolean;
	closeOnOutside?: boolean;
	closeOnEscape?: boolean;
	role?: string;
}

export interface BoContextMenuItemProps {
	id?: string;
	dataTestId?: string;
	disabled?: boolean;
	inset?: boolean;
	variant?: BoContextMenuItemVariant;
	role?: string;
}

export interface BoContextMenuLabelProps {
	id?: string;
	dataTestId?: string;
	inset?: boolean;
}

export interface BoContextMenuCheckboxItemProps extends BoContextMenuItemProps {
	checked?: boolean;
}

export interface BoContextMenuRadioGroupProps {
	value?: string | number;
}

export interface BoContextMenuRadioItemProps extends BoContextMenuItemProps {
	value: string | number;
}

type BoContextMenuManifestDefaults = ManifestDefaults<
	BoContextMenuProps,
	'closeOnOutside' | 'closeOnEscape' | 'role'
>;

export interface BoContextMenuStyleManifest {
	trigger: string;
	content: string;
	item: string;
	itemInset: string;
	itemDestructive: string;
	itemIndicator: string;
	label: string;
	labelInset: string;
	separator: string;
}

export type ContextMenuManifest = ComponentManifest<
	BoContextMenuStyleManifest,
	BoContextMenuManifestDefaults,
	'ContextMenu'
>;
