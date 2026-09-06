import type { DropdownManifest } from '../definitions/bo-dropdown.js';
export const DROPDOWN_MANIFEST = {
	meta: { name: 'Dropdown', version: '1.0.0' },
	styles: {
		base: 'bo-dropdown',
		trigger: 'bo-dropdown__trigger',
		content: 'bo-dropdown__content',
		item: 'bo-dropdown__item',
		itemDestructive: 'bo-dropdown__item--destructive',
		label: 'bo-dropdown__label',
		separator: 'bo-dropdown__separator',
	},
	defaults: {},
} as const satisfies DropdownManifest;
