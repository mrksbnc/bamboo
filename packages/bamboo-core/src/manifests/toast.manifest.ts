import { ToastManifest } from '../definitions/index.js';

export const TOAST_MANIFEST = {
	meta: { name: 'Toast', version: '1.0.0' },
	styles: {
		viewport: 'bo-toast-viewport',
		viewportPosition: {
			'top-left': 'bo-toast-viewport--top-left',
			'top-center': 'bo-toast-viewport--top-center',
			'top-right': 'bo-toast-viewport--top-right',
			'bottom-left': 'bo-toast-viewport--bottom-left',
			'bottom-center': 'bo-toast-viewport--bottom-center',
			'bottom-right': 'bo-toast-viewport--bottom-right',
		},
		item: 'bo-toast',
		variant: {
			default: 'bo-toast--default',
			primary: 'bo-toast--primary',
			success: 'bo-toast--success',
			warning: 'bo-toast--warning',
			destructive: 'bo-toast--destructive',
		},
		icon: 'bo-toast__icon',
		content: 'bo-toast__content',
		title: 'bo-toast__title',
		description: 'bo-toast__description',
		close: 'bo-toast__close',
	},
	defaults: {
		variant: 'default',
		duration: 5000,
		closable: true,
		closeAriaLabel: 'Close notification',
		role: 'status',
	},
} as const satisfies ToastManifest;
