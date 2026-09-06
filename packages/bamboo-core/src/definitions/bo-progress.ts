import { HTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';

export type BoProgressVariant = 'primary' | 'secondary' | 'destructive' | 'warning' | 'success';
export type BoProgressSize = 'sm' | 'default' | 'lg';

export interface BoProgressProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	value?: number;
	max?: number;
	variant?: BoProgressVariant;
	size?: BoProgressSize;
	label?: string;
	showValue?: boolean;
	role?: HTMLAttributes['role'];
	ariaLabel?: HTMLAttributes['aria-label'];
}

type BoProgressManifestDefaults = ManifestDefaults<
	BoProgressProps,
	'variant' | 'size' | 'max' | 'showValue' | 'role'
>;

export interface BoProgressStyleManifest {
	readonly track: 'bo-progress__track';
	readonly indicator: 'bo-progress__indicator';
	readonly size: Record<BoProgressSize, string>;
	readonly variant: Record<BoProgressVariant, string>;
	readonly label: 'bo-progress__label';
}

export type ProgressManifest = ComponentManifest<
	BoProgressStyleManifest,
	BoProgressManifestDefaults,
	'Progress'
>;
