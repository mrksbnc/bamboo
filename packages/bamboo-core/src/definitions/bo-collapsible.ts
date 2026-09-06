import { HTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';

export interface BoCollapsibleProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	open?: boolean;
	label?: string;
	disabled?: boolean;
	role?: HTMLAttributes['role'];
	ariaLabel?: HTMLAttributes['aria-label'];
}

type BoCollapsibleManifestDefaults = ManifestDefaults<BoCollapsibleProps, 'disabled'>;

export interface BoCollapsibleStyleManifest {
	readonly base: 'bo-collapsible';
	readonly trigger: 'bo-collapsible__trigger';
	readonly icon: 'bo-collapsible__icon';
	readonly content: 'bo-collapsible__content';
}

export type CollapsibleManifest = ComponentManifest<
	BoCollapsibleStyleManifest,
	BoCollapsibleManifestDefaults,
	'Collapsible'
>;
