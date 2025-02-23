import type { Icon } from '@/components/bo_icon';
import type { Component } from 'vue';

export type BoDropdownDefault = {
	icon?: Icon;
	label?: string;
};

export type BoDropdownOption = {
	component: Component;
	props: Record<string, unknown>;
};

export type BoDropdownProps = {
	defaultOption?: BoDropdownDefault;
	options?: BoDropdownDefault[];
};
