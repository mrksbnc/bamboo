import type { BoCheckboxSize, BoCheckboxState } from './constants';

export type BoCheckboxProps = {
	modelValue?: boolean;
	id?: string;
	label?: string;
	description?: string;
	state?: BoCheckboxState;
	size?: BoCheckboxSize;
	errorMessage?: string | null;
	disabled?: boolean;
	readonly?: boolean;
	required?: boolean;
	name?: string;
};
