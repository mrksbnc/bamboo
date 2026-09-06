import { HTMLAttributes } from 'vue';
import { ComponentManifest } from '../manifests/types.js';
import { BoToggleGroupOrientation, BoToggleSize, BoToggleVariant } from './bo-toggle.js';

export interface BoToggleGroupProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	modelValue?: string | string[];
	multiple?: boolean;
	disabled?: boolean;
	variant?: BoToggleVariant;
	size?: BoToggleSize;
	orientation?: BoToggleGroupOrientation;
	role?: HTMLAttributes['role'];
	ariaLabel?: HTMLAttributes['aria-label'];
	ariaLabelledBy?: HTMLAttributes['aria-labelledby'];
}

type BoToggleGroupManifestDefaults = Pick<
	BoToggleGroupProps,
	'variant' | 'size' | 'orientation' | 'role'
>;

export interface BoToggleGroupStyleManifest {
	base: string;
	orientation: Record<BoToggleGroupOrientation, string>;
	item: string;
}

export type ToggleGroupManifest = ComponentManifest<
	BoToggleGroupStyleManifest,
	BoToggleGroupManifestDefaults
>;

export interface BoToggleGroupItemProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	value: string;
	disabled?: boolean;
	ariaLabel?: HTMLAttributes['aria-label'];
}
