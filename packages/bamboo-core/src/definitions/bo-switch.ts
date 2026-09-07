import { HTMLAttributes } from 'vue';
import { ComponentManifest } from '../manifests/types.js';

export type BoSwitchOrientation = 'horizontal' | 'vertical';

export interface BoSwitchCustomColors {
	background?: string;
	checkedBackground?: string;
	border?: string;
	thumb?: string;
	checkedThumb?: string;
	text?: string;
}

export type BoSwitchCustomColor = string | BoSwitchCustomColors;

export interface BoSwitchProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	modelValue?: boolean;
	defaultValue?: boolean;
	orientation?: BoSwitchOrientation;
	label?: string;
	description?: string;
	disabled?: boolean;
	required?: boolean;
	name?: string;
	value?: string;
	customColor?: BoSwitchCustomColor;
	customThumbColor?: string;
	role?: HTMLAttributes['role'];
	ariaLabel?: HTMLAttributes['aria-label'];
	ariaLabelledBy?: HTMLAttributes['aria-labelledby'];
	ariaDescribedBy?: HTMLAttributes['aria-describedby'];
}

type BoSwitchManifestDefaults = Pick<BoSwitchProps, 'orientation' | 'role'>;

export interface BoSwitchStyleManifest {
	base: string;
	control: string;
	thumb: string;
	labelGroup: string;
	label: string;
	description: string;
}

export type SwitchManifest = ComponentManifest<BoSwitchStyleManifest, BoSwitchManifestDefaults>;
