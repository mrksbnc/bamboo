import type { Icon } from '@/components/bo-icon';
import type { Component } from 'vue';
import type { BoButtonVariant } from '../bo-button';

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
