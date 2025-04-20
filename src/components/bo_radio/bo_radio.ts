export enum BoRadioSize {
	small = 'small',
	default = 'default',
	large = 'large',
}

export enum BoRadioState {
	none = 'none',
	valid = 'valid',
	invalid = 'invalid',
}

export type BoRadioProps = {
	modelValue?: string | number | boolean;
	value: string | number | boolean;
	id?: string;
	label?: string;
	description?: string;
	state?: BoRadioState;
	size?: BoRadioSize;
	errorMessage?: string | null;
	disabled?: boolean;
	readonly?: boolean;
	required?: boolean;
	name?: string;
};
