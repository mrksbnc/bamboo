import type { HTMLAttributes } from 'vue';
import type { ComponentManifest } from '../manifests/types.js';

export interface BoNavbarProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	ariaLabel?: HTMLAttributes['aria-label'];
}

export interface BoNavbarStyleManifest {
	readonly base: 'bo-navbar';
	readonly header: 'bo-navbar__header';
	readonly toggle: 'bo-navbar__toggle';
	readonly content: 'bo-navbar__content';
	readonly contentOpen: 'bo-navbar__content--open';
	readonly nav: 'bo-navbar__nav';
	readonly link: 'bo-navbar__link';
	readonly linkActive: 'bo-navbar__link--active';
	readonly actions: 'bo-navbar__actions';
	readonly top: 'bo-navbar__top';
	readonly middle: 'bo-navbar__middle';
	readonly bottom: 'bo-navbar__bottom';
	readonly visuallyHidden: 'bo-navbar__visually-hidden';
}

export type NavbarManifest = ComponentManifest<BoNavbarStyleManifest, {}, 'Navbar'>;
