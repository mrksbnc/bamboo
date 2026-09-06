import { HTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';

export interface BoScrollAreaProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	maxHeight?: number;
	masked?: boolean;
	ariaLabel?: HTMLAttributes['aria-label'];
}

type BoScrollAreaManifestDefaults = ManifestDefaults<BoScrollAreaProps, 'masked'>;

export interface BoScrollAreaStyleManifest {
	readonly base: 'bo-scroll-area';
	readonly masked: 'bo-scroll-area--masked';
	readonly viewport: 'bo-scroll-area__viewport';
	readonly scrollbar: {
		readonly vertical: 'bo-scroll-area__scrollbar--vertical';
		readonly horizontal: 'bo-scroll-area__scrollbar--horizontal';
	};
	readonly thumb: 'bo-scroll-area__thumb';
	readonly corner: 'bo-scroll-area__corner';
}

export type ScrollAreaManifest = ComponentManifest<
	BoScrollAreaStyleManifest,
	BoScrollAreaManifestDefaults,
	'ScrollArea'
>;
