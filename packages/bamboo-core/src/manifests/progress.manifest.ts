import { ProgressManifest } from '../definitions/index.js';

export const PROGRESS_MANIFEST = {
	meta: { name: 'Progress', version: '1.0.0' },
	styles: {
		track: 'bo-progress__track',
		indicator: 'bo-progress__indicator',
		size: {
			sm: 'bo-progress__track--sm',
			default: 'bo-progress__track--default',
			lg: 'bo-progress__track--lg',
		},
		variant: {
			primary: 'bo-progress__indicator--primary',
			secondary: 'bo-progress__indicator--secondary',
			destructive: 'bo-progress__indicator--destructive',
			warning: 'bo-progress__indicator--warning',
			success: 'bo-progress__indicator--success',
		},
		label: 'bo-progress__label',
	},
	defaults: {
		variant: 'primary',
		size: 'default',
		max: 100,
		showValue: false,
		role: 'progressbar',
	},
} as const satisfies ProgressManifest;
