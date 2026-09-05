import { HTMLAttributes } from 'vue';
import { ComponentManifest } from '../manifests/types.js';

export type BoSwitchSize = 'sm' | 'default' | 'lg';
export type BoSwitchOrientation = 'horizontal' | 'vertical';

export interface BoSwitchProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	modelValue?: boolean;
	size?: BoSwitchSize;
	orientation?: BoSwitchOrientation;
	label?: string;
	description?: string;
	disabled?: boolean;
	required?: boolean;
	name?: string;
	value?: string;
	role?: HTMLAttributes['role'];
	ariaLabel?: HTMLAttributes['aria-label'];
	ariaLabelledBy?: HTMLAttributes['aria-labelledby'];
	ariaDescribedBy?: HTMLAttributes['aria-describedby'];
}

type BoSwitchManifestDefaults = Pick<BoSwitchProps, 'size' | 'orientation' | 'role'>;

export interface BoSwitchStyleManifest {
	base: string;
	control: Record<BoSwitchSize, string>;
	thumb: Record<BoSwitchSize, string>;
	labelGroup: string;
	label: string;
	description: string;
}

export type SwitchManifest = ComponentManifest<BoSwitchStyleManifest, BoSwitchManifestDefaults>;
