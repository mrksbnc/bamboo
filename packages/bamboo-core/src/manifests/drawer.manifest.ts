import type { DrawerManifest } from '../definitions/bo-drawer.js';

export const DRAWER_MANIFEST = {
	meta: { name: 'Drawer', version: '1.0.0' },
	styles: {
		backdrop: 'bo-drawer-backdrop',
		wrapper: 'bo-drawer-wrapper',
		panel: {
			base: 'bo-drawer-panel',
			side: { left: 'bo-drawer-panel--left', right: 'bo-drawer-panel--right' },
			size: {
				sm: 'bo-drawer-panel--sm',
				default: 'bo-drawer-panel--default',
				lg: 'bo-drawer-panel--lg',
				full: 'bo-drawer-panel--full',
			},
		},
		header: 'bo-drawer-header',
		headerContent: 'bo-drawer-header__content',
		title: 'bo-drawer-title',
		close: 'bo-drawer-close',
		body: 'bo-drawer-body',
		description: 'bo-drawer-description',
		footer: 'bo-drawer-footer',
	},
	defaults: {
		side: 'right',
		size: 'default',
		closeOnBackdrop: true,
		closeOnEscape: true,
		showClose: true,
		closeAriaLabel: 'Close',
		role: 'dialog',
	},
} as const satisfies DrawerManifest;
