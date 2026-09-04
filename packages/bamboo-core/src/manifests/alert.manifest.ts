import { AlertManifest } from '../definitions/index.js';

export const ALERT_MANIFEST = {
	meta: {
		name: 'Alert',
		version: '1.0.0',
	},
	styles: {
		base: 'bo-alert',
		variant: {
			default: 'bo-alert--default',
			primary: 'bo-alert--primary',
			warning: 'bo-alert--warning',
			destructive: 'bo-alert--destructive',
		},
		icon: {
			default: 'bo-alert__icon--default',
			primary: 'bo-alert__icon--primary',
			warning: 'bo-alert__icon--warning',
			destructive: 'bo-alert__icon--destructive',
		},
		container: {
			base: 'bo-alert-container',
			position: {
				'top-left': 'bo-alert-container--top-left',
				'top-center': 'bo-alert-container--top-center',
				'top-right': 'bo-alert-container--top-right',
				'bottom-left': 'bo-alert-container--bottom-left',
				'bottom-center': 'bo-alert-container--bottom-center',
				'bottom-right': 'bo-alert-container--bottom-right',
			},
		},
		content: 'bo-alert__content',
		title: /*tw*/ 'bo-alert__title !text-neutral-900 dark:!text-neutral-100',
		description: /*tw*/ 'bo-alert__description !text-neutral-500 dark:!text-neutral-400',
	},
	defaults: {
		role: 'alert',
		variant: 'default',
		showIcon: true,
	},
} as const satisfies AlertManifest;
