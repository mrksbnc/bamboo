import { HTMLAttributes } from 'vue';
import { ComponentManifest } from '../manifests/types.js';
import { Icon } from './bo-icon.js';

export interface BoBreadcrumbItem {
	label: string;
	href?: string;
	icon?: Icon;
}

export interface BoBreadcrumbProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	items: BoBreadcrumbItem[];
	separator?: string;
	role?: HTMLAttributes['role'];
	ariaLabel?: HTMLAttributes['aria-label'];
}

type BoBreadcrumbManifestDefaults = Pick<BoBreadcrumbProps, 'separator'>;

export interface BoBreadcrumbStyleManifest {
	readonly nav: 'bo-breadcrumb';
	readonly list: 'bo-breadcrumb__list';
	readonly item: 'bo-breadcrumb__item';
	readonly link: 'bo-breadcrumb__link';
	readonly current: 'bo-breadcrumb__current';
	readonly separator: 'bo-breadcrumb__separator';
	readonly icon: 'bo-breadcrumb__icon';
}

export type BreadcrumbManifest = ComponentManifest<
	BoBreadcrumbStyleManifest,
	BoBreadcrumbManifestDefaults,
	'Breadcrumb'
>;
