import type { BoSize } from '@/shared/bo_size';
import type { Icon } from './constant';
import type { SVGAttributes } from 'vue';

export type BoIconProps = {
	icon: Icon;
	size?: BoSize;
	color?: string;
};
