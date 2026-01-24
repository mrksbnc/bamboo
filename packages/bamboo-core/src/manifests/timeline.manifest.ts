import { TimelineManifest } from '../definitions/bo-timeline';

export const TIMELINE_MANIFEST: TimelineManifest = {
	meta: {
		name: 'Timeline',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'relative',

		orientation: {
			vertical: /*tw*/ 'flex flex-col space-y-6',
			horizontal: /*tw*/ 'flex flex-row space-x-6 overflow-x-auto',
		},

		item: {
			base: /*tw*/ 'relative flex',

			orientation: {
				vertical: /*tw*/ 'flex-row items-start',
				horizontal: /*tw*/ 'flex-col items-center min-w-0 flex-shrink-0',
			},

			marker: {
				base: /*tw*/ 'relative flex items-center justify-center rounded-full border-2 border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800 flex-shrink-0',

				size: {
					sm: /*tw*/ 'w-6 h-6',
					default: /*tw*/ 'w-8 h-8',
					lg: /*tw*/ 'w-10 h-10',
				},

				active:
					/*tw*/ 'border-blue-600 bg-blue-600 text-white dark:border-blue-500 dark:bg-blue-500',
				completed:
					/*tw*/ 'border-green-600 bg-green-600 text-white dark:border-green-500 dark:bg-green-500',
			},

			connector: {
				base: /*tw*/ 'absolute bg-gray-300 dark:bg-gray-600',

				orientation: {
					vertical: /*tw*/ 'w-0.5 h-full top-8 left-1/2 -translate-x-1/2',
					horizontal: /*tw*/ 'h-0.5 w-full top-1/2 left-8 -translate-y-1/2',
				},
			},

			content: {
				base: /*tw*/ 'flex-1 min-w-0',

				orientation: {
					vertical: /*tw*/ 'ml-4',
					horizontal: /*tw*/ 'mt-4 text-center',
				},
			},

			title: /*tw*/ 'text-sm font-semibold text-gray-900 dark:text-gray-100',
			description: /*tw*/ 'mt-1 text-sm text-gray-600 dark:text-gray-400',
			time: /*tw*/ 'mt-2 text-xs text-gray-500 dark:text-gray-500',
		},
	},
	defaults: {
		orientation: 'vertical',
		size: 'default',
		role: 'list',
	},
};
