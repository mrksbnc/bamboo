import { HTMLAttributes } from 'vue';
import { ComponentManifest } from '../manifests/types.js';

export type BoToggleVariant = 'default' | 'outline';
export type BoToggleSize = 'sm' | 'default' | 'lg';
export type BoToggleGroupOrientation = 'horizontal' | 'vertical';

export interface BoToggleProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	modelValue?: boolean;
	disabled?: boolean;
	variant?: BoToggleVariant;
	size?: BoToggleSize;
	label?: string;
	ariaLabel?: HTMLAttributes['aria-label'];
	role?: HTMLAttributes['role'];
}

type BoToggleManifestDefaults = Pick<BoToggleProps, 'variant' | 'size' | 'role'>;

export interface BoToggleStyleManifest {
	base: string;
	variant: Record<BoToggleVariant, string>;
	size: Record<BoToggleSize, string>;
	pressed: string;
}

export type ToggleManifest = ComponentManifest<BoToggleStyleManifest, BoToggleManifestDefaults>;
