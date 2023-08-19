import type { Color } from '@/data';
import type { Icon } from '../Icon';
import type { ButtonType } from '.';

export declare type ButtonGroupItem = {
	id: string;
	label: string;
	prefix?: Icon;
	suffix?: Icon;
	iconColor?: Color | string;
};
