import { HTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';

export interface BoPaginationProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	total: number;
	pageSize?: number;
	siblingCount?: number;
	disabled?: boolean;
	role?: HTMLAttributes['role'];
	ariaLabel?: HTMLAttributes['aria-label'];
}

type BoPaginationManifestDefaults = ManifestDefaults<
	BoPaginationProps,
	'pageSize' | 'siblingCount' | 'role'
>;

export interface BoPaginationStyleManifest {
	readonly container: 'bo-pagination';
	readonly list: 'bo-pagination__list';
	readonly item: 'bo-pagination__item';
	readonly button: 'bo-pagination__button';
	readonly buttonActive: 'bo-pagination__button--active';
	readonly ellipsis: 'bo-pagination__ellipsis';
}

export type PaginationManifest = ComponentManifest<
	BoPaginationStyleManifest,
	BoPaginationManifestDefaults,
	'Pagination'
>;
