# Tree

The Tree component provides a hierarchical view of data, allowing users to navigate through a tree structure. It supports features like node expansion/collapse, selection, and checkboxes.

## Features

- Hierarchical data display
- Node expansion and collapse
- Single and multiple selection
- Checkbox support
- Custom icons
- Disabled state
- Different sizes
- Compact variant
- Keyboard navigation

## Usage

### Basic Usage

```vue
<template>
	<bo-tree :data="treeData" />
</template>

<script setup lang="ts">
const treeData = [
	{
		id: '1',
		label: 'Node 1',
		children: [
			{
				id: '1.1',
				label: 'Node 1.1',
			},
		],
	},
];
</script>
```

### With Checkboxes

```vue
<template>
	<bo-tree
		:data="treeData"
		show-checkboxes
		multiple
		v-model="selectedNodes"
	/>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const treeData = [
	{
		id: '1',
		label: 'Node 1',
		children: [
			{
				id: '1.1',
				label: 'Node 1.1',
			},
		],
	},
];

const selectedNodes = ref<string[]>([]);
</script>
```

### With Icons

```vue
<template>
	<bo-tree
		:data="treeData"
		show-icons
	/>
</template>

<script setup lang="ts">
const treeData = [
	{
		id: '1',
		label: 'Node 1',
		icon: 'folder',
		children: [
			{
				id: '1.1',
				label: 'Node 1.1',
				icon: 'file',
			},
		],
	},
];
</script>
```

## Props

| Prop           | Type          | Default   | Description                          |
| -------------- | ------------- | --------- | ------------------------------------ |
| data           | TreeNode[]    | -         | The data for the tree                |
| disabled       | boolean       | false     | Whether the tree is disabled         |
| showCheckboxes | boolean       | false     | Whether to show checkboxes           |
| showIcons      | boolean       | true      | Whether to show icons                |
| size           | BoSize        | 'default' | The size of the tree                 |
| multiple       | boolean       | false     | Whether to allow multiple selections |
| modelValue     | string[]      | []        | The currently selected nodes         |
| variant        | BoTreeVariant | 'default' | The variant of the tree              |
| id             | string        | -         | Unique ID for the tree               |

### TreeNode Type

| Property | Type       | Description                    |
| -------- | ---------- | ------------------------------ |
| id       | string     | Unique identifier for the node |
| label    | string     | Display text for the node      |
| children | TreeNode[] | Child nodes                    |
| expanded | boolean    | Whether the node is expanded   |
| selected | boolean    | Whether the node is selected   |
| disabled | boolean    | Whether the node is disabled   |
| icon     | string     | Icon to display for the node   |

## Events

| Event             | Parameters | Description                               |
| ----------------- | ---------- | ----------------------------------------- |
| update:modelValue | string[]   | Emitted when selected nodes change        |
| node-toggle       | TreeNode   | Emitted when a node is expanded/collapsed |
| node-select       | TreeNode   | Emitted when a node is selected           |

## Variants

### BoTreeVariant

| Variant | Description                       |
| ------- | --------------------------------- |
| default | Default tree with normal spacing  |
| compact | Compact tree with minimal spacing |

## Examples

### File Explorer

```vue
<template>
	<bo-tree
		:data="fileSystem"
		show-icons
		@node-select="handleFileSelect"
	/>
</template>

<script setup lang="ts">
const fileSystem = [
	{
		id: 'root',
		label: 'Root',
		icon: 'folder',
		children: [
			{
				id: 'documents',
				label: 'Documents',
				icon: 'folder',
				children: [
					{
						id: 'report',
						label: 'Report.pdf',
						icon: 'file-pdf',
					},
				],
			},
		],
	},
];

const handleFileSelect = (node: TreeNode) => {
	console.log('Selected file:', node.label);
};
</script>
```

### Multi-select Tree

```vue
<template>
	<bo-tree
		:data="categories"
		show-checkboxes
		multiple
		v-model="selectedCategories"
	/>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const categories = [
	{
		id: 'electronics',
		label: 'Electronics',
		children: [
			{
				id: 'phones',
				label: 'Phones',
			},
			{
				id: 'laptops',
				label: 'Laptops',
			},
		],
	},
];

const selectedCategories = ref<string[]>([]);
</script>
```

## Best Practices

1. Use meaningful IDs for nodes
2. Keep the tree depth reasonable (3-4 levels max)
3. Use icons to improve visual hierarchy
4. Consider using checkboxes for multi-select scenarios
5. Use the compact variant for dense data
6. Handle disabled state appropriately
7. Provide keyboard navigation support
8. Consider lazy loading for large trees

## Accessibility

The tree component is built with accessibility in mind:

- Uses semantic HTML elements
- Supports keyboard navigation
- Provides ARIA attributes
- Maintains proper focus management
- Works with screen readers
- Supports high contrast mode

## Keyboard Navigation

- `Arrow Up`: Move to previous node
- `Arrow Down`: Move to next node
- `Arrow Right`: Expand node
- `Arrow Left`: Collapse node
- `Enter`: Select node
- `Space`: Toggle checkbox (if enabled)
- `Home`: Move to first node
- `End`: Move to last node

## Browser Support

The tree component works in all modern browsers:

- Chrome
- Firefox
- Safari
- Edge
- Opera
