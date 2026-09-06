import { HTMLAttributes } from 'vue';
import { ComponentManifest } from '../manifests/types.js';

export interface BoFileInputProps {
	id?: string;
	dataTestId?: string;
	name?: string;
	accept?: string;
	multiple?: boolean;
	maxFiles?: number;
	maxSize?: number;
	label?: string;
	description?: string;
	error?: string;
	hint?: string;
	required?: boolean;
	disabled?: boolean;
	fullWidth?: boolean;
	ariaLabel?: HTMLAttributes['aria-label'];
}

export interface BoFileInputStyleManifest {
	base: string;
	labels: { container: string; label: string; required: string; description: string };
	container: string;
	icon: string;
	input: string;
	fileList: string;
	file: string;
	remove: string;
	helpers: { container: string; error: string; hint: string };
}

export type FileInputManifest = ComponentManifest<BoFileInputStyleManifest, Record<string, never>>;
