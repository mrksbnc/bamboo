import type { Icon } from '@/components/bo-icon';
import type { BoSize } from '@/shared';

export enum BoTreeVariant {
	default = 'default',
	compact = 'compact',
}

export interface TreeNode {
	id: string;
	icon?: Icon;
	label: string;
	expanded?: boolean;
	selected?: boolean;
	disabled?: boolean;
	children?: TreeNode[];
}

export interface BoTreeProps {
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
}

export interface TreeNodeProps {
	/**
	 * The main data. This contains the constructs for the tree node.
	 */
	node: TreeNode;
	/**
	 * The level of the node in the tree
	 */
	level: number;
	/**
	 * Whether to show checkboxes
	 */
	showCheckboxes: boolean;
	/**
	 * Whether to show icons
	 */
	showIcons: boolean;
	/**
	 * Whether the node is disabled
	 */
	disabled: boolean;
	/**
	 * Whether the node is selected
	 */
	selected: boolean;
	/**
	 * Whether the node is expanded
	 */
	expanded: boolean;
	/**
	 * Whether multiple selections are allowed
	 */
	multiple: boolean;
	/**
	 * The IDs of the currently selected nodes
	 */
	selectedIds: Set<string>;
}
