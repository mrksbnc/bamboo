import { ButtonGroupManifest } from '../definitions/bo-button-group.js';

export const BUTTON_GROUP_MANIFEST: ButtonGroupManifest = {
	meta: {
		name: 'ButtonGroup',
		version: '1.0.0',
	},
	styles: {
		base: 'bo-button-group',
		item: 'bo-button-group__item',

		size: {
			xs: 'bo-button-group__item--xs',
			sm: 'bo-button-group__item--sm',
			default: 'bo-button-group__item--default',
			lg: 'bo-button-group__item--lg',
			xl: 'bo-button-group__item--xl',
		},

		variant: {
			primary: 'bo-button-group__item--primary',
			secondary: 'bo-button-group__item--secondary',
			destructive: 'bo-button-group__item--destructive',
			warning: 'bo-button-group__item--warning',
			success: 'bo-button-group__item--success',
			light: 'bo-button-group__item--light',
			dark: 'bo-button-group__item--dark',
		},

		orientation: {
			horizontal: 'bo-button-group--horizontal',
			vertical: 'bo-button-group--vertical',
		},

		fullWidth: 'bo-button-group--full-width',

		selected: 'bo-button-group__item--selected',

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
		variant: 'secondary',
		fullWidth: false,
		attached: true,
		role: 'group',
		multiple: false,
		required: false,
	},
};
