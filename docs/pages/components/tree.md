<script setup>
import BoTree from '@/components/tree/bo-tree.vue';
import { BoSize } from '@/shared/bo-size';
import { BoTreeVariant } from '@/components/tree/bo-tree';
import { Icon } from '@/components/icon/bo-icon';
</script>

# Tree

Tree is a component that displays hierarchical data in a tree structure.

```js
import { BoTree } from '@mrksbnc/bamboo';
```

## Basic Usage

<bo-tree :data="treeData" />

```vue
<template>
	<bo-tree :data="treeData" />
</template>

<script setup>
import { Icon } from '@/components/icon/bo-icon';

const treeData = [
	{
		id: '1',
		label: 'Documents',
		icon: Icon.folder,
		expanded: true,
		children: [
			{
				id: '1-1',
				label: 'Work',
				icon: Icon.folder,
				children: [
					{
						id: '1-1-1',
						label: 'Project A',
						icon: Icon.file,
					},
					{
						id: '1-1-2',
						label: 'Project B',
						icon: Icon.file,
					},
				],
			},
			{
				id: '1-2',
				label: 'Personal',
				icon: Icon.folder,
				children: [
					{
						id: '1-2-1',
						label: 'Photos',
						icon: Icon.image,
					},
					{
						id: '1-2-2',
						label: 'Videos',
						icon: Icon.video,
					},
				],
			},
		],
	},
];
</script>
```

## Props

| Name             | Type            | Default     | Description                          |
| ---------------- | --------------- | ----------- | ------------------------------------ |
| `id`             | `string`        | `auto`      | Unique ID for the tree               |
| `data`           | `TreeNode[]`    | -           | Array of tree nodes to display       |
| `disabled`       | `boolean`       | `false`     | Whether the tree is disabled         |
| `showCheckboxes` | `boolean`       | `false`     | Whether to show checkboxes           |
| `showIcons`      | `boolean`       | `true`      | Whether to show icons                |
| `size`           | `BoSize`        | `default`   | Size of the tree                     |
| `multiple`       | `boolean`       | `false`     | Whether to allow multiple selections |
| `selectedIds`    | `Set<string>`   | `new Set()` | The currently selected nodes         |
| `variant`        | `BoTreeVariant` | `default`   | Variant of the tree                  |

## Types

```ts
enum BoTreeVariant {
	default = 'default',
	compact = 'compact',
}

interface TreeNode {
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

interface BoTreeProps {
	/** Unique ID for the tree */
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
```

## Sizes

The tree supports different sizes:

<bo-tree :data="treeData" :size="BoSize.extra_small" class="mb-4" />
<bo-tree :data="treeData" :size="BoSize.small" class="mb-4" />
<bo-tree :data="treeData" :size="BoSize.default" class="mb-4" />
<bo-tree :data="treeData" :size="BoSize.large" class="mb-4" />
<bo-tree :data="treeData" :size="BoSize.extra_large" />

```vue
<template>
	<bo-tree
		:data="treeData"
		:size="BoSize.extra_small"
	/>
	<bo-tree
		:data="treeData"
		:size="BoSize.small"
	/>
	<bo-tree
		:data="treeData"
		:size="BoSize.default"
	/>
	<bo-tree
		:data="treeData"
		:size="BoSize.large"
	/>
	<bo-tree
		:data="treeData"
		:size="BoSize.extra_large"
	/>
</template>
```

## Variants

The tree supports different variants:

<bo-tree :data="treeData" :variant="BoTreeVariant.default" class="mb-4" />
<bo-tree :data="treeData" :variant="BoTreeVariant.compact" />

```vue
<template>
	<bo-tree
		:data="treeData"
		:variant="BoTreeVariant.default"
	/>
	<bo-tree
		:data="treeData"
		:variant="BoTreeVariant.compact"
	/>
</template>
```

## With Checkboxes

You can enable checkboxes for node selection:

<bo-tree :data="treeData" :show-checkboxes="true" />

```vue
<template>
	<bo-tree
		:data="treeData"
		:show-checkboxes="true"
	/>
</template>
```

## Without Icons

You can hide the icons:

<bo-tree :data="treeData" :show-icons="false" />

```vue
<template>
	<bo-tree
		:data="treeData"
		:show-icons="false"
	/>
</template>
```

## Disabled

You can disable the entire tree or individual nodes:

<bo-tree :data="[
	{
		id: '1',
		label: 'Enabled Node',
		icon: Icon.folder,
		children: [
			{
				id: '1-1',
				label: 'Disabled Node',
				icon: Icon.file,
				disabled: true,
			},
		],
	},
]" :disabled="false" />

```vue
<template>
	<bo-tree
		:data="[
			{
				id: '1',
				label: 'Enabled Node',
				icon: Icon.folder,
				children: [
					{
						id: '1-1',
						label: 'Disabled Node',
						icon: Icon.file,
						disabled: true,
					},
				],
			},
		]"
		:disabled="false"
	/>
</template>
```

## Events

| Name                 | Payload              | Description                        |
| -------------------- | -------------------- | ---------------------------------- |
| `expand`             | `string`             | Emitted when a node is expanded    |
| `collapse`           | `string`             | Emitted when a node is collapsed   |
| `select`             | `string \| string[]` | Emitted when a node is selected    |
| `update:expandedIds` | `string[]`           | Emitted when expanded nodes change |
| `update:selectedId`  | `string \| string[]` | Emitted when selection changes     |

## Slots

| Name          | Props                   | Description                 |
| ------------- | ----------------------- | --------------------------- |
| `node`        | `{ item: TreeItem }`    | Custom node content         |
| `icon`        | `{ item: TreeItem }`    | Custom icon for a node      |
| `expand-icon` | `{ expanded: boolean }` | Custom expand/collapse icon |
| `loading`     | none                    | Custom loading indicator    |

## Accessibility

The tree component implements the WAI-ARIA tree view pattern:

- Uses appropriate ARIA roles (`tree`, `treeitem`, `group`)
- Supports keyboard navigation (arrows, Enter, Space)
- Announces expanded/collapsed states
- Provides focus management
