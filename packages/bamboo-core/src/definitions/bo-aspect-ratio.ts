import { HTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';

export interface BoAspectRatioProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	ratio?: number;
	role?: HTMLAttributes['role'];
}

type BoAspectRatioManifestDefaults = ManifestDefaults<BoAspectRatioProps, 'ratio'>;

export interface BoAspectRatioStyleManifest {
	readonly outer: 'bo-aspect-ratio';
	readonly inner: 'bo-aspect-ratio__inner';
}

export type AspectRatioManifest = ComponentManifest<
	BoAspectRatioStyleManifest,
	BoAspectRatioManifestDefaults,
	'AspectRatio'
>;
