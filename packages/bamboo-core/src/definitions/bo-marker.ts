import { HTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';

export type BoMarkerVariant =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'destructive'
	| 'warning'
	| 'success';

export interface BoMarkerProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	variant?: BoMarkerVariant;
	role?: HTMLAttributes['role'];
	ariaLabel?: HTMLAttributes['aria-label'];
}

type BoMarkerManifestDefaults = ManifestDefaults<BoMarkerProps, 'variant'>;

export interface BoMarkerStyleManifest {
	readonly base: 'bo-marker';
	readonly variant: Record<BoMarkerVariant, string>;
}

export type MarkerManifest = ComponentManifest<
	BoMarkerStyleManifest,
	BoMarkerManifestDefaults,
	'Marker'
>;
