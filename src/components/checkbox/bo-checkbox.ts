import { BoSize } from '@/shared/bo-size.js';

export interface BoCheckboxProps {
	id?: string;
	name?: string;
	value?: string;
	disabled?: boolean;
	label?: string;
	description?: string;
	size?: BoSize;
}
