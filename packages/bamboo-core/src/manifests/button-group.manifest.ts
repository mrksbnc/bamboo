import { ButtonGroupManifest } from '../definitions/bo-button-group';

export const BUTTON_GROUP_MANIFEST: ButtonGroupManifest = {
	meta: {
		name: 'ButtonGroup',
		version: '1.0.0',
	},
	styles: {
		base: /*tw*/ 'inline-flex isolate',

		orientation: {
			horizontal: /*tw*/ 'flex-row',
			vertical: /*tw*/ 'flex-col',
		},

		fullWidth: /*tw*/ 'w-full',

		selected:
			/*tw*/ 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 focus:bg-blue-700 dark:bg-blue-500 dark:border-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600',

		attached: {
			base: /*tw*/ '',

			orientation: {
				horizontal: /*tw*/ '',
				vertical: /*tw*/ '',
			},

			first: {
				horizontal: /*tw*/ 'rounded-r-none',
				vertical: /*tw*/ 'rounded-b-none',
			},

			middle: {
				horizontal: /*tw*/ 'rounded-none -ml-px',
				vertical: /*tw*/ 'rounded-none -mt-px',
			},

			last: {
				horizontal: /*tw*/ 'rounded-l-none -ml-px',
				vertical: /*tw*/ 'rounded-t-none -mt-px',
			},

			single: {
				horizontal: /*tw*/ '',
				vertical: /*tw*/ '',
			},
		},
	},
	defaults: {
		orientation: 'horizontal',
		fullWidth: false,
		attached: true,
		role: 'group',
		multiple: false,
		required: false,
	},
};
