import { TooltipManifest } from '../definitions/bo-tooltip';

export const TOOLTIP_MANIFEST: TooltipManifest = {
	meta: {
		name: 'Tooltip',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'absolute z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg dark:bg-gray-700 max-w-xs wrap-break-word',

		arrow: /*tw*/ 'absolute w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45',

		placement: {
			top: /*tw*/ 'mb-2',
			'top-start': /*tw*/ 'mb-2',
			'top-end': /*tw*/ 'mb-2',
			bottom: /*tw*/ 'mt-2',
			'bottom-start': /*tw*/ 'mt-2',
			'bottom-end': /*tw*/ 'mt-2',
			left: /*tw*/ 'mr-2',
			'left-start': /*tw*/ 'mr-2',
			'left-end': /*tw*/ 'mr-2',
			right: /*tw*/ 'ml-2',
			'right-start': /*tw*/ 'ml-2',
			'right-end': /*tw*/ 'ml-2',
		},

		arrowPlacement: {
			top: /*tw*/ 'top-full left-1/2 -translate-x-1/2 -translate-y-1/2',
			'top-start': /*tw*/ 'top-full left-4 -translate-y-1/2',
			'top-end': /*tw*/ 'top-full right-4 -translate-y-1/2',
			bottom: /*tw*/ 'bottom-full left-1/2 -translate-x-1/2 translate-y-1/2',
			'bottom-start': /*tw*/ 'bottom-full left-4 translate-y-1/2',
			'bottom-end': /*tw*/ 'bottom-full right-4 translate-y-1/2',
			left: /*tw*/ 'left-full top-1/2 -translate-y-1/2 -translate-x-1/2',
			'left-start': /*tw*/ 'left-full top-4 -translate-x-1/2',
			'left-end': /*tw*/ 'left-full bottom-4 -translate-x-1/2',
			right: /*tw*/ 'right-full top-1/2 -translate-y-1/2 translate-x-1/2',
			'right-start': /*tw*/ 'right-full top-4 translate-x-1/2',
			'right-end': /*tw*/ 'right-full bottom-4 translate-x-1/2',
		},
	},
	defaults: {
		placement: 'top',
		trigger: 'hover',
		showDelay: 100,
		hideDelay: 100,
		offset: 8,
		arrow: true,
		role: 'tooltip',
	},
};
