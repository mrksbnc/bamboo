import type { BoSize } from '@/shared';

export type TreeNode = {
	id: string;
	label: string;
	children?: TreeNode[];
	expanded?: boolean;
	selected?: boolean;
	disabled?: boolean;
	icon?: string;
};

export type BoTreeProps = {
	/**
	 * The data for the tree
	 */
	data: TreeNode[];
	/**
	 * Whether the tree is disabled
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Whether to show checkboxes
	 * @default false
	 */
	showCheckboxes?: boolean;
	/**
	 * Whether to show icons
	 * @default true
	 */
	showIcons?: boolean;
	/**
	 * The size of the tree
	 * @default 'default'
	 */
	size?: BoSize;
	/**
	 * Whether to allow multiple selections
	 * @default false
	 */
	multiple?: boolean;
	/**
	 * The currently selected nodes
	 */
	modelValue?: string[];
	/**
	 * Unique ID for the tree, used for accessibility and testing
	 */
	id?: string;
};

export enum BoTreeVariant {
	default = 'default',
	compact = 'compact',
}
