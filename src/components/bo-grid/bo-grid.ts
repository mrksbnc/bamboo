import type { BoSize } from '@/shared';

export type BoGridProps = {
	/**
	 * The number of columns in the grid
	 * @default 12
	 */
	columns?: number;
	/**
	 * The gap between grid items
	 * @default 'default'
	 */
	gap?: BoSize;
	/**
	 * Whether the grid items should be centered
	 * @default false
	 */
	center?: boolean;
	/**
	 * Whether the grid should be responsive
	 * @default true
	 */
	responsive?: boolean;
	/**
	 * The breakpoint at which the grid becomes responsive
	 * @default 'md'
	 */
	breakpoint?: 'sm' | 'md' | 'lg' | 'xl';
	/**
	 * Unique ID for the grid, used for accessibility and testing
	 */
	id?: string;
};

export type BoGridItemProps = {
	/**
	 * The number of columns this item should span
	 * @default 1
	 */
	span?: number;
	/**
	 * The number of columns this item should span on small screens
	 */
	spanSm?: number;
	/**
	 * The number of columns this item should span on medium screens
	 */
	spanMd?: number;
	/**
	 * The number of columns this item should span on large screens
	 */
	spanLg?: number;
	/**
	 * The number of columns this item should span on extra large screens
	 */
	spanXl?: number;
	/**
	 * The column this item should start at
	 */
	start?: number;
	/**
	 * The column this item should end at
	 */
	end?: number;
	/**
	 * Unique ID for the grid item, used for accessibility and testing
	 */
	id?: string;
};

export enum BoGridVariant {
	default = 'default',
	dense = 'dense',
}
