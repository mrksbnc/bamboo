import type { SheetManifest } from '../definitions/bo-sheet.js';

export const SHEET_MANIFEST = {
	meta: { name: 'Sheet', version: '1.0.0' },
	styles: {
		backdrop: 'bo-sheet-backdrop',
		wrapper: 'bo-sheet-wrapper',
		panel: {
			base: 'bo-sheet-panel',
			side: {
				top: 'bo-sheet-panel--top',
				bottom: 'bo-sheet-panel--bottom',
				left: 'bo-sheet-panel--left',
				right: 'bo-sheet-panel--right',
			},
			size: {
				sm: 'bo-sheet-panel--sm',
				default: 'bo-sheet-panel--default',
				lg: 'bo-sheet-panel--lg',
				full: 'bo-sheet-panel--full',
			},
		},
		header: 'bo-sheet-header',
		headerContent: 'bo-sheet-header__content',
		title: 'bo-sheet-title',
		close: 'bo-sheet-close',
		body: 'bo-sheet-body',
		description: 'bo-sheet-description',
		footer: 'bo-sheet-footer',
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
} as const satisfies SheetManifest;
