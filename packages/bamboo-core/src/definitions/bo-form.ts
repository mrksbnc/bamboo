import type { HTMLAttributes } from 'vue';
import type { ComponentManifest } from '../manifests/types.js';

export interface BoFormProps {
	id?: string;
	dataTestId?: string;
	ariaLabel?: HTMLAttributes['aria-label'];
	novalidate?: boolean;
}

export interface BoFormStyleManifest {
	readonly base: 'bo-form';
}

export type FormManifest = ComponentManifest<BoFormStyleManifest, {}, 'Form'>;

export interface BoFormFieldProps {
	id?: string;
	dataTestId?: string;
	label?: string;
	description?: string;
	error?: string;
	required?: boolean;
	disabled?: boolean;
}

export interface BoFormFieldStyleManifest {
	readonly base: 'bo-form-field';
	readonly label: 'bo-form-field__label';
	readonly description: 'bo-form-field__description';
	readonly error: 'bo-form-field__error';
	readonly control: 'bo-form-field__control';
}

export type FormFieldManifest = ComponentManifest<BoFormFieldStyleManifest, {}, 'Form Field'>;
