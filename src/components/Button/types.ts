import type { Color } from '@/data';
import type { Icon } from '../Icon';

export declare type ButtonGroupItem = {
	id: number;
	label: string;
	prefix?: Icon;
	suffix?: Icon;
	iconColor?: Color | string;
};
