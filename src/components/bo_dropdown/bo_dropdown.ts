import type { Icon } from '@/components/bo_icon';
import type { Component } from 'vue';
import type { BoButtonVariant } from '../bo_button';

export type BaseDropdownOption = {
	id?: string;
	icon?: Icon;
	label?: string;
	[key: string]: unknown;
};

export type BoDropdownProps = {
	id?: string;
	toggleVariant?: BoButtonVariant;
	defaultOption?: BaseDropdownOption;
	options?: BaseDropdownOption[];
	component?: Component;
};
