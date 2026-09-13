import { SelectManifest } from '../definitions/bo-select.js';

export const SELECT_MANIFEST = {
	meta: { name: 'Select', version: '1.0.0' },
	styles: {
		base: 'bo-select',
		width: { default: '', full: 'bo-select--full-width' },
		labels: {
			container: 'bo-select__label-container',
			label: 'bo-select__label',
			required: 'bo-select__required',
			description: 'bo-select__description',
		},
		trigger: 'bo-select__trigger',
		triggerSize: {
			sm: 'bo-select__trigger--sm',
			default: 'bo-select__trigger--default',
			lg: 'bo-select__trigger--lg',
		},
		triggerContent: 'bo-select__trigger-content',
		placeholder: 'bo-select__placeholder',
		icon: 'bo-select__icon',
		menu: 'bo-select__menu',
		option: 'bo-select__option',
		optionSelected: 'bo-select__option--selected',
		optionLabel: 'bo-select__option-label',
		optionDescription: 'bo-select__option-description',
		empty: 'bo-select__empty',
		helpers: {
			container: 'bo-select__helpers',
			error: 'bo-select__error',
			hint: 'bo-select__hint',
		},
	},
	defaults: { size: 'default', role: 'combobox' },
} as const satisfies SelectManifest;
