import type { BoSize, BoVariant } from '@/global';
import type { Icon } from '../bo_icon/bo_icon';
import type { BoIconButtonShape, BoIconButtonType } from './bo_icon_button';

export type BoIconButtonComponentProps = {
	icon: Icon;
	size?: BoSize;
	variant?: BoVariant;
	shape?: BoIconButtonShape;
	type?: BoIconButtonType;
	disabled?: boolean;
	isLoading?: boolean;
};
