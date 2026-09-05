import type { ContextMenuManifest } from '../definitions/bo-context-menu.js';

export const CONTEXT_MENU_MANIFEST = {
	meta: { name: 'ContextMenu', version: '1.0.0' },
	styles: {
		trigger: 'bo-context-menu-trigger',
		content: 'bo-context-menu-content',
		item: 'bo-context-menu-item',
		itemInset: 'bo-context-menu-item--inset',
		itemDestructive: 'bo-context-menu-item--destructive',
		itemIndicator: 'bo-context-menu-item__indicator',
		label: 'bo-context-menu-label',
		labelInset: 'bo-context-menu-label--inset',
		separator: 'bo-context-menu-separator',
	},
	defaults: {
		closeOnOutside: true,
		closeOnEscape: true,
		role: 'menu',
	},
} as const satisfies ContextMenuManifest;
