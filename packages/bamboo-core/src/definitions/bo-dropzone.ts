import { ComponentManifest } from '../manifests/types.js';

export interface BoDropzoneProps {
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
	ariaLabel?: string;
}

export interface BoDropzoneStyleManifest {
	base: string;
	input: string;
	content: string;
	icon: string;
	label: string;
	description: string;
	fileList: string;
	file: string;
	remove: string;
	dragging: string;
	disabled: string;
	error: string;
}

export type DropzoneManifest = ComponentManifest<BoDropzoneStyleManifest, Record<string, never>>;
