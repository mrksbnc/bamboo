import { ModalManifest } from '../definitions/index.js';

export const MODAL_MANIFEST = {
	meta: {
		name: 'Modal',
		version: '1.0.0',
	},
	styles: {
		backdrop:
			/*tw*/ 'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-200',

		wrapper: /*tw*/ 'fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6',

		panel: {
			base: /*tw*/ 'relative flex max-h-[90vh] w-full flex-col overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-200 dark:bg-neutral-900',
			size: {
				sm: /*tw*/ 'max-w-sm',
				default: /*tw*/ 'max-w-md sm:max-w-lg',
				lg: /*tw*/ 'max-w-md sm:max-w-lg md:max-w-2xl',
				xl: /*tw*/ 'max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl',
				full: /*tw*/ 'max-w-full sm:max-w-[calc(100vw-3rem)]',
			},
		},

		header: {
			base: /*tw*/ 'flex items-center gap-3 border-b border-neutral-200 px-4 py-3 sm:px-6 sm:py-4 dark:border-neutral-700',
			variant: {
				default: /*tw*/ '',
				info: /*tw*/ 'border-b-blue-500 dark:border-b-blue-400',
				warning: /*tw*/ 'border-b-yellow-500 dark:border-b-yellow-400',
				error: /*tw*/ 'border-b-red-500 dark:border-b-red-400',
			},
		},

		close:
			/*tw*/ 'flex items-center justify-center rounded-md p-1 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200',

		body: /*tw*/ 'flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5 text-sm text-neutral-700 dark:text-neutral-300',

		footer:
			/*tw*/ 'flex items-center justify-end gap-2 border-t border-neutral-200 px-4 py-3 sm:px-6 sm:py-4 dark:border-neutral-700',

		icon: {
			variant: {
				default: /*tw*/ '',
				info: /*tw*/ 'text-blue-600 dark:text-blue-400',
				warning: /*tw*/ 'text-yellow-600 dark:text-yellow-400',
				error: /*tw*/ 'text-red-600 dark:text-red-400',
			},
		},
	},
	defaults: {
		variant: 'default',
		size: 'default',
		closeOnBackdrop: true,
		closeOnEscape: true,
		showClose: true,
		role: 'dialog',
	},
} as const satisfies ModalManifest;
