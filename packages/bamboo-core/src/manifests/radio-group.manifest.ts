import { RadioGroupManifest } from '../definitions/bo-radio-group';

export const RADIO_GROUP_MANIFEST: RadioGroupManifest = {
	meta: {
		name: 'RadioGroup',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'space-y-3',

		orientation: {
			vertical: /*tw*/ 'flex flex-col space-y-3',
			horizontal: /*tw*/ 'flex flex-row space-x-6',
		},

		label: /*tw*/ 'block text-sm font-medium text-gray-900 dark:text-gray-100 mb-3',
		description: /*tw*/ 'text-sm text-gray-600 dark:text-gray-400 mb-3',
		error: /*tw*/ 'mt-2 flex items-center gap-2 text-sm text-red-600 dark:text-red-400',
		errorIcon: /*tw*/ 'shrink-0',
	},
	defaults: {
		orientation: 'vertical',
		size: 'default',
		role: 'radiogroup',
	},
};
