import type { NavigationMenuManifest } from '../definitions/bo-navigation-menu.js';

export const NAVIGATION_MENU_MANIFEST = {
	meta: { name: 'NavigationMenu', version: '1.0.0' },
	styles: {
		base: 'bo-navigation-menu',
		list: 'bo-navigation-menu__list',
		item: 'bo-navigation-menu__item',
		link: 'bo-navigation-menu__link',
		trigger: 'bo-navigation-menu__trigger',
		content: 'bo-navigation-menu__content',
		viewport: 'bo-navigation-menu__viewport',
		indicator: 'bo-navigation-menu__indicator',
		indicatorInner: 'bo-navigation-menu__indicator-inner',
	},
	defaults: {},
} as const satisfies NavigationMenuManifest;
