import { TabsManifest } from '../definitions/index.js';

export const TABS_MANIFEST = {
	meta: { name: 'Tabs', version: '1.0.0' },
	styles: {
		base: 'bo-tabs',
		list: 'bo-tabs__list',
		listOrientation: {
			horizontal: 'bo-tabs__list--horizontal',
			vertical: 'bo-tabs__list--vertical',
		},
		trigger: 'bo-tabs__trigger',
		triggerActive: 'bo-tabs__trigger--active',
		content: 'bo-tabs__content',
	},
	defaults: {
		orientation: 'horizontal',
		activationMode: 'automatic',
	},
} as const satisfies TabsManifest;
