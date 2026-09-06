import { HTMLAttributes } from 'vue';
import { ComponentManifest } from '../manifests/types.js';

export interface BoEmptyProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	title?: string;
	description?: string;
	role?: HTMLAttributes['role'];
	ariaLabel?: HTMLAttributes['aria-label'];
}

type BoEmptyManifestDefaults = Record<string, never>;

export interface BoEmptyStyleManifest {
	readonly base: 'bo-empty';
	readonly title: 'bo-empty__title';
	readonly description: 'bo-empty__description';
	readonly media: 'bo-empty__media';
	readonly content: 'bo-empty__content';
	readonly action: 'bo-empty__action';
}

export type EmptyManifest = ComponentManifest<
	BoEmptyStyleManifest,
	BoEmptyManifestDefaults,
	'Empty'
>;
