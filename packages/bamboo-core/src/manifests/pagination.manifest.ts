import { PaginationManifest } from '../definitions/index.js';

export const PAGINATION_MANIFEST = {
	meta: { name: 'Pagination', version: '1.0.0' },
	styles: {
		container: 'bo-pagination',
		list: 'bo-pagination__list',
		item: 'bo-pagination__item',
		button: 'bo-pagination__button',
		buttonActive: 'bo-pagination__button--active',
		ellipsis: 'bo-pagination__ellipsis',
	},
	defaults: {
		pageSize: 10,
		siblingCount: 1,
		role: 'navigation',
	},
} as const satisfies PaginationManifest;
