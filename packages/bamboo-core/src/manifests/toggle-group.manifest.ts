import { ToggleGroupManifest } from '../definitions/bo-toggle-group.js';

export const TOGGLE_GROUP_MANIFEST = {
	meta: { name: 'ToggleGroup', version: '1.0.0' },
	styles: {
		base: 'bo-toggle-group',
		orientation: {
			horizontal: 'bo-toggle-group--horizontal',
			vertical: 'bo-toggle-group--vertical',
		},
		item: 'bo-toggle-group__item',
		variant: {
			default: 'bo-toggle-group__item--default',
			outline: 'bo-toggle-group__item--outline',
		},
		size: {
			sm: 'bo-toggle-group__item--sm',
			default: 'bo-toggle-group__item--default-size',
			lg: 'bo-toggle-group__item--lg',
		},
		selected: 'bo-toggle-group__item--selected',
	},
	defaults: { variant: 'default', size: 'default', orientation: 'horizontal', role: 'group' },
} as const satisfies ToggleGroupManifest;
