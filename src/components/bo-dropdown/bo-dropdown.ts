import type { Icon } from '@/components/bo-icon';
import type { Component } from 'vue';
import type { BoButtonVariant } from '../bo-button';

export enum BoDropdownPlacement {
	top = 'top',
	topStart = 'top-start',
	topEnd = 'top-end',
	bottom = 'bottom',
	bottomStart = 'bottom-start',
	bottomEnd = 'bottom-end',
	right = 'right',
	rightStart = 'right-start',
	rightEnd = 'right-end',
	left = 'left',
	leftStart = 'left-start',
	leftEnd = 'left-end',
}

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
	placement?: BoDropdownPlacement;
};
