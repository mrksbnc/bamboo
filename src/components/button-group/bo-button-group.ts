import { BoButtonVariant } from '@/components/button/bo-button.js';
import { BoSize } from '@/shared/bo-size.js';

export enum BoButtonGroupOrientation {
	horizontal = 'horizontal',
	vertical = 'vertical',
}

export enum BoButtonGroupShape {
	square = 'square',
	rounded = 'rounded',
}

export interface ButtonGroupItemListPosition {
	index: number;
	length: number;
	isLast: boolean;
	isFirst: boolean;
	activeIndex: number;
}

export interface BoButtonGroupItemProps {
	id: string;
	label: string;
	size?: BoSize;
	active?: boolean;
	disabled?: boolean;
	shape?: BoButtonGroupShape;
	variant?: BoButtonVariant;
	orientation?: BoButtonGroupOrientation;
	position?: ButtonGroupItemListPosition;
}

export interface BoButtonGroupProps<T = Record<string, unknown>> {
	id?: string;
	/**
	 * The variant of the button group.
	 * @default BoButtonVariant.secondary
	 */
	variant?: BoButtonVariant;
	/**
	 * The orientation of the button group.
	 * @default BoButtonGroupOrientation.horizontal
	 */
	orientation?: BoButtonGroupOrientation;
	size?: BoSize;
	disabled?: boolean;
	shape?: BoButtonGroupShape;
	/** The items to use in case the slot is not used. */
	items?: T[];
	/** The active item index */
	defaultActiveIndex?: number;
}
