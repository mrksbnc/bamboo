import { AlertManifest } from '../definitions/index.js';
import { RADIUS, VARIANT } from './shared.js';

export const ALERT_MANIFEST = {
	meta: {
		name: 'Alert',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ `flex w-full min-w-0 items-start gap-2 ${RADIUS.lg} border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100`,
		variant: {
			default: /*tw*/ '',
			primary: /*tw*/ 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400',
			warning:
				/*tw*/ 'border-yellow-600 dark:border-yellow-400 text-yellow-700 dark:text-yellow-400',
			destructive: /*tw*/ 'border-red-600 dark:border-red-400 text-red-600 dark:text-red-400',
		},
		icon: {
			default: /*tw*/ 'text-neutral-900 dark:text-neutral-100',
			primary: VARIANT.primary.text,
			warning: VARIANT.warning.text,
			destructive: VARIANT.destructive.text,
		},
		content: /*tw*/ 'flex min-w-0 flex-1 flex-col justify-between gap-1',
		title: /*tw*/ 'font-medium tracking-tight text-neutral-900 dark:text-neutral-100',
		description: /*tw*/ 'text-sm text-neutral-500 dark:text-neutral-400 [&_p]:leading-relaxed',
	},
	defaults: {
		role: 'alert',
		variant: 'default',
		showIcon: true,
	},
} as const satisfies AlertManifest;
