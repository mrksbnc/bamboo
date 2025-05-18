import type { Icon } from '@/components/icon/bo-icon.js';
import type { BoSize } from '@/shared/bo-size.js';

export enum BoTreeVariant {
	default = 'default',
	compact = 'compact',
}

export interface TreeNode {
	/** The unique ID of the node */
	id: string;
	/** The icon to display */
	icon?: Icon;
	/** The label of the node */
	label: string;
	/** Whether the node is expanded */
	expanded?: boolean;
	/** Whether the node is selected */
	selected?: boolean;
	/** Whether the node is disabled */
	disabled?: boolean;
	/** The children of the node (other nodes) */
	children?: TreeNode[];
}

export interface BoTreeProps {
	/** Unique ID for the tree, used for accessibility and testing */
	id?: string;
	/** The data for the tree */
	data: TreeNode[];
	/** Whether the tree is disabled */
	disabled?: boolean;
	/** Whether to show checkboxes */
	showCheckboxes?: boolean;
	/** Whether to show icons */
	showIcons?: boolean;
	/** The size of the tree */
	size?: BoSize;
	/** Whether to allow multiple selections */
	multiple?: boolean;
	/** The currently selected nodes */
	selectedIds?: Set<string>;
	/** Variant of the tree */
	variant?: BoTreeVariant;
}

export interface TreeNodeProps {
	/** The unique ID of the node */
	id?: string;
	/** The main data. This contains the constructs for the tree node. */
	node: TreeNode;
	/** The level of the node in the tree */
	level: number;
	/** Whether to show checkboxes */
	showCheckboxes?: boolean;
	/** Whether to show icons */
	showIcons?: boolean;
	/** Whether the node is disabled */
	disabled?: boolean;
	/** Whether the node is selected */
	selected?: boolean;
	/** Whether the node is expanded */
	expanded?: boolean;
	/** Whether multiple selections are allowed */
	multiple?: boolean;
	/** The IDs of the currently selected nodes */
	selectedIds: Set<string>;
}
