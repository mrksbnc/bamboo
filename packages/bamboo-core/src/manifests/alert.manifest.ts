import { AlertManifest } from '../definitions/bo-alert.js';

export const ALERT_MANIFEST: AlertManifest = {
	meta: {
		name: 'Alert',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'relative flex items-start gap-3 rounded-lg border p-4',
		size: {
			sm: /*tw*/ 'p-3 gap-2',
			default: /*tw*/ 'p-4 gap-3',
			lg: /*tw*/ 'p-5 gap-4',
		},
		variants: {
			info: /*tw*/ 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-100',
			success:
				/*tw*/ 'bg-green-50 border-green-200 text-green-900 dark:bg-green-950 dark:border-green-800 dark:text-green-100',
			warning:
				/*tw*/ 'bg-yellow-50 border-yellow-200 text-yellow-900 dark:bg-yellow-950 dark:border-yellow-800 dark:text-yellow-100',
			error:
				/*tw*/ 'bg-red-50 border-red-200 text-red-900 dark:bg-red-950 dark:border-red-800 dark:text-red-100',
		},
		iconColor: {
			info: /*tw*/ 'text-blue-600 dark:text-blue-400',
			success: /*tw*/ 'text-green-600 dark:text-green-400',
			warning: /*tw*/ 'text-yellow-600 dark:text-yellow-400',
			error: /*tw*/ 'text-red-600 dark:text-red-400',
		},
		titleSize: {
			sm: /*tw*/ 'text-sm font-medium',
			default: /*tw*/ 'text-base font-medium',
			lg: /*tw*/ 'text-lg font-medium',
		},
		contentSize: {
			sm: /*tw*/ 'text-xs',
			default: /*tw*/ 'text-sm',
			lg: /*tw*/ 'text-base',
		},
		iconSize: {
			sm: /*tw*/ 'w-4 h-4',
			default: /*tw*/ 'w-5 h-5',
			lg: /*tw*/ 'w-6 h-6',
		},
		closeButton: {
			base: /*tw*/ 'absolute top-2 right-2 p-1 rounded-md transition-colors duration-200',
			hover: /*tw*/ 'hover:bg-black/10 dark:hover:bg-white/10',
		},
	},
	defaults: {
		size: 'default',
		variant: 'info',
		dismissible: false,
		role: 'alert',
	},
};
