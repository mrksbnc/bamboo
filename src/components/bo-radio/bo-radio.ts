import { BoSize } from '@/shared';

export interface BoRadioProps {
	value: string | number | boolean;
	id?: string;
	text?: string;
	disabled?: boolean;
	description?: string;
	size?: BoSize;
}
