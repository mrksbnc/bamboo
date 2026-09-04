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
		icon: 'bo-alert__icon',
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
		title: 'bo-alert__title',
		description: 'bo-alert__description',
	},
	defaults: {
		role: 'alert',
		variant: 'default',
		showIcon: true,
	},
} as const satisfies AlertManifest;
