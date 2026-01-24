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
			/*tw*/ 'bg-primary-500 text-white border-primary-500 hover:bg-primary-600 focus:bg-primary-600',

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
