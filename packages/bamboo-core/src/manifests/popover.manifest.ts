import type { PopoverManifest } from '../definitions/bo-popover.js';

export const POPOVER_MANIFEST = {
	meta: { name: 'Popover', version: '1.0.0' },
	styles: {
		trigger: 'bo-popover-trigger',
		content: 'bo-popover-content',
		arrow: 'bo-popover-content__arrow',
		placement: {
			top: 'bo-popover-content--top',
			'top-start': 'bo-popover-content--top-start',
			'top-end': 'bo-popover-content--top-end',
			bottom: 'bo-popover-content--bottom',
			'bottom-start': 'bo-popover-content--bottom-start',
			'bottom-end': 'bo-popover-content--bottom-end',
			left: 'bo-popover-content--left',
			'left-start': 'bo-popover-content--left-start',
			'left-end': 'bo-popover-content--left-end',
			right: 'bo-popover-content--right',
			'right-start': 'bo-popover-content--right-start',
			'right-end': 'bo-popover-content--right-end',
		},
	},
	defaults: {
		placement: 'bottom',
		offset: 8,
		closeOnOutside: true,
		closeOnEscape: true,
		role: 'dialog',
	},
} as const satisfies PopoverManifest;
