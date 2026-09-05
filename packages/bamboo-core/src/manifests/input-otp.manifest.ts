import type { InputOtpManifest } from '../definitions/bo-input-otp.js';

export const INPUT_OTP_MANIFEST = {
	meta: { name: 'Input OTP', version: '1.0.0' },
	styles: {
		base: 'bo-input-otp',
		labels: {
			container: 'bo-input-otp__label-container',
			label: 'bo-input-otp__label',
			required: 'bo-input-otp__required',
		},
		group: 'bo-input-otp__group',
		input: 'bo-input-otp__input',
		helpers: {
			container: 'bo-input-otp__helpers',
			description: 'bo-input-otp__description',
			error: 'bo-input-otp__error',
			hint: 'bo-input-otp__hint',
		},
	},
	defaults: { length: 6, type: 'text', inputMode: 'numeric', pattern: '[0-9]', role: 'group' },
} as const satisfies InputOtpManifest;
