import { LoadingPulseManifest } from '../definitions/index.js';

export const LOADING_PULSE_MANIFEST = {
	meta: {
		name: 'LoadingPulse',
		version: '1.0.0',
	},
	styles: {
		base: 'bo-loading-pulse__dots',
		container: 'bo-loading-pulse',
		dot: 'bo-loading-pulse__dot',
		size: {
			xs: 'bo-loading-pulse__dot--xs',
			sm: 'bo-loading-pulse__dot--sm',
			default: 'bo-loading-pulse__dot--default',
			lg: 'bo-loading-pulse__dot--lg',
			xl: 'bo-loading-pulse__dot--xl',
		},
		textPosition: {
			top: 'bo-loading-pulse--top',
			bottom: 'bo-loading-pulse--bottom',
			before: 'bo-loading-pulse--before',
			after: 'bo-loading-pulse--after',
		},
		labelFontSize: {
			xs: 'xs',
			sm: 'sm',
			default: 'sm',
			lg: 'default',
			xl: 'default',
		},
		animation: [
			'bo-loading-pulse__dot--delay-0',
			'bo-loading-pulse__dot--delay-1',
			'bo-loading-pulse__dot--delay-2',
		],
	},
	defaults: {
		role: 'status',
		size: 'default',
		textPosition: 'after',
	},
} as const satisfies LoadingPulseManifest;
