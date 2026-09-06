import type { ComponentManifest } from '../manifests/types.js';
export interface BoDropdownProps {
	id?: string;
	dataTestId?: string;
	disabled?: boolean;
	open?: boolean;
}
export interface BoDropdownItemProps {
	disabled?: boolean;
	destructive?: boolean;
}
export interface BoDropdownStyleManifest {
	base: string;
	trigger: string;
	content: string;
	item: string;
	itemDestructive: string;
	label: string;
	separator: string;
}
export type DropdownManifest = ComponentManifest<
	BoDropdownStyleManifest,
	Pick<BoDropdownProps, never>
>;
