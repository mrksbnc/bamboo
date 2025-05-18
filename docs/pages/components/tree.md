# Tree

A customizable tree component for displaying hierarchical data structures with expandable/collapsible nodes.

```js
import { BoTree } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-tree
		:items="[
			{
				id: '1',
				label: 'Root',
				children: [
					{
						id: '1-1',
						label: 'Child 1',
					},
					{
						id: '1-2',
						label: 'Child 2',
						children: [
							{
								id: '1-2-1',
								label: 'Grandchild 1',
							},
						],
					},
				],
			},
		]"
	/>
</template>

<script setup>
import { BoTree } from '@mrksbnc/bamboo';
</script>
```

## Props

| Name          | Type         | Default        | Description                       |
| ------------- | ------------ | -------------- | --------------------------------- |
| `items`       | `TreeItem[]` | `[]`           | Array of tree items to display    |
| `expandedIds` | `string[]`   | `[]`           | Array of expanded node IDs        |
| `selectedId`  | `string`     | `''`           | ID of the currently selected node |
| `selectable`  | `boolean`    | `true`         | Whether nodes can be selected     |
| `multiSelect` | `boolean`    | `false`        | Allow multiple node selection     |
| `size`        | `BoSize`     | `'default'`    | Size of tree nodes                |
| `disabled`    | `boolean`    | `false`        | Disable the entire tree           |
| `loading`     | `boolean`    | `false`        | Show loading state                |
| `icons`       | `TreeIcons`  | `defaultIcons` | Custom icons for nodes            |

## Events

| Name                 | Payload              | Description                        |
| -------------------- | -------------------- | ---------------------------------- |
| `expand`             | `string`             | Emitted when a node is expanded    |
| `collapse`           | `string`             | Emitted when a node is collapsed   |
| `select`             | `string \| string[]` | Emitted when a node is selected    |
| `update:expandedIds` | `string[]`           | Emitted when expanded nodes change |
| `update:selectedId`  | `string \| string[]` | Emitted when selection changes     |

## Types

```ts
interface TreeItem {
	/** Unique identifier for the node */
	id: string;
	/** Display label for the node */
	label: string;
	/** Child nodes */
	children?: TreeItem[];
	/** Whether the node is disabled */
	disabled?: boolean;
	/** Custom icon component/name */
	icon?: string | Component;
	/** Additional data attached to the node */
	data?: any;
}

interface TreeIcons {
	/** Icon for collapsed state */
	collapsed?: string | Component;
	/** Icon for expanded state */
	expanded?: string | Component;
	/** Default folder icon */
	folder?: string | Component;
	/** Default file icon */
	file?: string | Component;
	/** Loading indicator icon */
	loading?: string | Component;
}
```

## Examples

### Custom Icons

```vue
<template>
	<bo-tree
		:items="items"
		:icons="{
			collapsed: 'chevron-right',
			expanded: 'chevron-down',
			folder: 'folder',
			file: 'document',
			loading: 'spinner',
		}"
	/>
</template>
```

### Async Loading

```vue
<template>
	<bo-tree
		:items="items"
		:loading="loading"
		@expand="loadChildren"
	/>
</template>

<script setup>
const loading = ref(false);
const items = ref([
	{
		id: '1',
		label: 'Async Node',
		children: [], // Will be loaded on expand
	},
]);

const loadChildren = async (nodeId) => {
	loading.value = true;
	// Simulate API call
	await new Promise((resolve) => setTimeout(resolve, 1000));
	// Add children to the expanded node
	const node = findNodeById(items.value, nodeId);
	if (node) {
		node.children = [
			{ id: `${nodeId}-1`, label: 'Loaded Child 1' },
			{ id: `${nodeId}-2`, label: 'Loaded Child 2' },
		];
	}
	loading.value = false;
};
</script>
```

### Multi-Select

```vue
<template>
	<bo-tree
		:items="items"
		multi-select
		v-model:selectedId="selectedIds"
	/>
</template>

<script setup>
const selectedIds = ref([]);
const items = ref([
	{
		id: '1',
		label: 'Multi-select Root',
		children: [
			{ id: '1-1', label: 'Option 1' },
			{ id: '1-2', label: 'Option 2' },
			{ id: '1-3', label: 'Option 3' }
		}
	}
]);
</script>
```

### Disabled Nodes

```vue
<template>
	<bo-tree
		:items="[
			{
				id: '1',
				label: 'Root',
				children: [
					{
						id: '1-1',
						label: 'Enabled Node',
					},
					{
						id: '1-2',
						label: 'Disabled Node',
						disabled: true,
					},
				],
			},
		]"
	/>
</template>
```

### Different Sizes

```vue
<template>
	<div class="space-y-4">
		<bo-tree
			:items="items"
			size="small"
		/>
		<bo-tree
			:items="items"
			size="default"
		/>
		<bo-tree
			:items="items"
			size="large"
		/>
	</div>
</template>
```

### Custom Node Content

```vue
<template>
	<bo-tree :items="items">
		<template #node="{ item }">
			<div class="flex items-center gap-2">
				<span>{{ item.label }}</span>
				<bo-badge v-if="item.count">{{ item.count }}</bo-badge>
			</div>
		</template>
	</bo-tree>
</template>

<script setup>
const items = ref([
	{
		id: '1',
		label: 'Custom Node',
		count: 5,
		children: [{ id: '1-1', label: 'Child', count: 2 }],
	},
]);
</script>
```

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
