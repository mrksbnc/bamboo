import { HTMLAttributes } from 'vue';
import { ComponentManifest } from '../manifests/types.js';

export type BoSelectSize = 'sm' | 'default' | 'lg';

export interface BoSelectOption {
	value: string | number;
	label: string;
	description?: string;
	disabled?: boolean;
}

export interface BoSelectProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	modelValue?: string | number;
	options?: BoSelectOption[];
	placeholder?: string;
	label?: string;
	description?: string;
	error?: string;
	hint?: string;
	required?: boolean;
	disabled?: boolean;
	name?: string;
	size?: BoSelectSize;
	fullWidth?: boolean;
	role?: HTMLAttributes['role'];
	ariaLabel?: HTMLAttributes['aria-label'];
	ariaLabelledBy?: HTMLAttributes['aria-labelledby'];
	ariaDescribedBy?: HTMLAttributes['aria-describedby'];
}

type BoSelectManifestDefaults = Pick<BoSelectProps, 'size' | 'role'>;

export interface BoSelectStyleManifest {
	base: string;
	width: { default: string; full: string };
	labels: { container: string; label: string; required: string; description: string };
	trigger: string;
	triggerSize: Record<BoSelectSize, string>;
	triggerContent: string;
	placeholder: string;
	icon: string;
	menu: string;
	option: string;
	optionSelected: string;
	optionLabel: string;
	optionDescription: string;
	empty: string;
	helpers: { container: string; error: string; hint: string };
}

export type SelectManifest = ComponentManifest<BoSelectStyleManifest, BoSelectManifestDefaults>;
