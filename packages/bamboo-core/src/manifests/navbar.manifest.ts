import type { NavbarManifest } from '../definitions/bo-navbar.js';

export const NAVBAR_MANIFEST = {
	meta: { name: 'Navbar', version: '1.0.0' },
	styles: {
		base: 'bo-navbar',
		header: 'bo-navbar__header',
		toggle: 'bo-navbar__toggle',
		content: 'bo-navbar__content',
		contentOpen: 'bo-navbar__content--open',
		nav: 'bo-navbar__nav',
		link: 'bo-navbar__link',
		linkActive: 'bo-navbar__link--active',
		actions: 'bo-navbar__actions',
		top: 'bo-navbar__top',
		middle: 'bo-navbar__middle',
		bottom: 'bo-navbar__bottom',
		visuallyHidden: 'bo-navbar__visually-hidden',
	},
	defaults: {},
} as const satisfies NavbarManifest;
