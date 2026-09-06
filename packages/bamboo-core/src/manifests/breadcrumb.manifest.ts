import { BreadcrumbManifest } from '../definitions/index.js';

export const BREADCRUMB_MANIFEST = {
	meta: { name: 'Breadcrumb', version: '1.0.0' },
	styles: {
		nav: 'bo-breadcrumb',
		list: 'bo-breadcrumb__list',
		item: 'bo-breadcrumb__item',
		link: 'bo-breadcrumb__link',
		current: 'bo-breadcrumb__current',
		separator: 'bo-breadcrumb__separator',
		icon: 'bo-breadcrumb__icon',
	},
	defaults: {
		separator: '/',
	},
} as const satisfies BreadcrumbManifest;
