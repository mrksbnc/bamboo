import type { BoSize } from '@/shared';

export type BoDividerProps = {
	/**
	 * The size of the divider
	 * @default 'default'
	 */
	size?: BoSize;
	/**
	 * Whether the divider is vertical
	 * @default false
	 */
	vertical?: boolean;
	/**
	 * The variant of the divider
	 * @default 'default'
	 */
	variant?: BoDividerVariant;
	/**
	 * The label to display in the center of the divider
	 * @default undefined
	 */
	label?: string;
	/**
	 * Unique ID for the divider, used for accessibility and testing
	 */
	id?: string;
};

export enum BoDividerVariant {
	default = 'default',
	dashed = 'dashed',
	dotted = 'dotted',
}
