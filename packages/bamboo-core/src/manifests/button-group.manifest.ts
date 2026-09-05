import { ButtonGroupManifest } from '../definitions/bo-button-group.js';

export const BUTTON_GROUP_MANIFEST: ButtonGroupManifest = {
	meta: {
		name: 'ButtonGroup',
		version: '1.0.0',
	},
	styles: {
		base: 'bo-button-group',

		orientation: {
			horizontal: 'bo-button-group--horizontal',
			vertical: 'bo-button-group--vertical',
		},

		fullWidth: 'bo-button-group--full-width',

		selected: 'bo-button-group--selected',

		attached: {
			base: '',

			orientation: {
				horizontal: 'bo-button-group--attached-horizontal',
				vertical: 'bo-button-group--attached-vertical',
			},

			first: {
				horizontal: '',
				vertical: '',
			},

			middle: {
				horizontal: '',
				vertical: '',
			},

			last: {
				horizontal: '',
				vertical: '',
			},

			single: {
				horizontal: '',
				vertical: '',
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
