import { ModalManifest } from '../definitions/index.js';

export const MODAL_MANIFEST = {
	meta: {
		name: 'Modal',
		version: '1.0.0',
	},
	styles: {
		backdrop:
			/*tw*/ 'fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200 ease-out',

		container:
			/*tw*/ 'fixed inset-0 flex items-center justify-center p-4 transition-all duration-200 ease-out',

		content: {
			base: /*tw*/ 'relative w-full max-h-[90vh] bg-base-100 rounded-lg shadow-xl border border-base-300 flex flex-col overflow-hidden transition-all duration-200 ease-out',
			size: {
				xs: /*tw*/ 'max-w-xs',
				sm: /*tw*/ 'max-w-sm',
				default: /*tw*/ 'max-w-md',
				lg: /*tw*/ 'max-w-lg',
				xl: /*tw*/ 'max-w-xl',
				full: /*tw*/ 'max-w-[95vw] max-h-[95vh]',
			},
			position: {
				center: /*tw*/ 'my-auto',
				top: /*tw*/ 'mt-8 mb-auto',
				bottom: /*tw*/ 'mb-8 mt-auto',
			},
		},

		header: {
			base: /*tw*/ 'flex items-center justify-between p-6 border-b border-base-300',
			withCloseButton: /*tw*/ 'pr-4',
		},

		title: /*tw*/ 'text-lg font-semibold text-base-content',

		closeButton:
			/*tw*/ 'ml-4 p-2 rounded-md text-base-content/60 hover:text-base-content hover:bg-base-200 transition-colors duration-150',

		body: /*tw*/ 'flex-1 p-6 overflow-y-auto',

		footer:
			/*tw*/ 'flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700',
	},
	defaults: {
		size: 'default',
		position: 'center',
		closeOnBackdropClick: true,
		closeOnEscape: true,
		showCloseButton: true,
		preventBodyScroll: true,
		zIndex: 50,
	},
} as const satisfies ModalManifest;
