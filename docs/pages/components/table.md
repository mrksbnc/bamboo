<script setup>
import { BoTable, BoTableSortDirection } from '@/components/bo-table';
</script>

# Table

The Table component is a versatile data display component that supports sorting, custom row components, and fixed headers. It follows the Flowbite and TailwindUI design patterns while maintaining consistency with the rest of the component library.

## Basic Example

```html
<bo-table
	:headers="[
		{ key: 'name', label: 'Name' },
		{ key: 'age', label: 'Age', sortable: true },
		{ key: 'email', label: 'Email' }
	]"
	:items="[
		{ name: 'John Doe', age: 30, email: 'john@example.com' },
		{ name: 'Jane Smith', age: 25, email: 'jane@example.com' }
	]"
/>
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
	<bo-table
		:headers="[
			{ key: 'name', label: 'Name' },
			{ key: 'age', label: 'Age', sortable: true },
			{ key: 'email', label: 'Email' }
		]"
		:items="[
			{ name: 'John Doe', age: 30, email: 'john@example.com' },
			{ name: 'Jane Smith', age: 25, email: 'jane@example.com' }
		]"
	/>
</div>

### Props

| Prop name       | Type                        | Default                     | Description                            |
| --------------- | --------------------------- | --------------------------- | -------------------------------------- |
| `headers`       | `BoTableHeader[]`           | -                           | Required. Table column definitions     |
| `items`         | `Record<string, unknown>[]` | -                           | Required. Data to display in the table |
| `rowComponent`  | `Component`                 | `BoDefaultTableRow`         | Custom component for rendering rows    |
| `sortBy`        | `string`                    | -                           | Current column to sort by              |
| `sortDirection` | `BoTableSortDirection`      | `BoTableSortDirection.none` | Current sort direction                 |

### Events

| Event name             | Description                         |
| ---------------------- | ----------------------------------- |
| `update:sortBy`        | Emitted when sort column changes    |
| `update:sortDirection` | Emitted when sort direction changes |

### Types

```ts
export enum BoTableSortDirection {
	asc = 'asc',
	desc = 'desc',
	none = 'none',
}

export interface BoTableHeader {
	key: string; // Unique identifier for the column
	label: string; // Display text for the column header
	sortable?: boolean; // Whether the column can be sorted
	width?: string; // Optional width for the column
}
```

## Custom Row Component

You can provide a custom component to render table rows:

```html
<bo-table
	:headers="headers"
	:items="items"
	:rowComponent="MyCustomRow"
/>
```

## Sorting

Enable sorting by setting the `sortable` property on headers:

```html
<bo-table
	:headers="[
		{ key: 'name', label: 'Name', sortable: true },
		{ key: 'age', label: 'Age', sortable: true }
	]"
	:items="items"
	v-model:sortBy="sortBy"
	v-model:sortDirection="sortDirection"
/>
```

## Styling

The table component uses Tailwind CSS classes for styling and supports dark mode out of the box. The table has a fixed header with a scrollable body that maintains a maximum height of 400px.

### Custom Widths

You can specify custom widths for columns using the `width` property:

```html
<bo-table
	:headers="[
		{ key: 'name', label: 'Name', width: '200px' },
		{ key: 'age', label: 'Age', width: '100px' },
		{ key: 'email', label: 'Email', width: '300px' }
	]"
	:items="items"
/>
```

### Dark Mode

The table automatically adapts to dark mode with appropriate color schemes:

```html
<bo-table
	:headers="headers"
	:items="items"
	class="dark"
/>
```

## Accessibility

The table component is built with accessibility in mind:

- Proper ARIA attributes for sortable columns
- Keyboard navigation support
- Semantic HTML structure
- High contrast color schemes for both light and dark modes

### Keyboard Navigation

- Use Tab to navigate through sortable columns
- Press Enter to toggle sort direction
- Use arrow keys to navigate through table cells

## Examples

### Basic Table with Sorting

```html
<bo-table
	:headers="[
		{ key: 'name', label: 'Name', sortable: true },
		{ key: 'age', label: 'Age', sortable: true },
		{ key: 'email', label: 'Email' }
	]"
	:items="items"
	v-model:sortBy="sortBy"
	v-model:sortDirection="sortDirection"
/>
```

### Custom Row Component

Create a custom row component with additional features:

```vue
<!-- MyCustomRow.vue -->
<template>
	<tr class="bo-table__row">
		<td
			v-for="header in headers"
			:key="header.key"
		>
			<slot
				:name="header.key"
				:item="item"
			>
				{{ item[header.key] }}
			</slot>
		</td>
	</tr>
</template>

<script setup lang="ts">
import type { BoTableHeader } from '@/components/bo-table';

defineProps<{
	headers: BoTableHeader[];
	item: Record<string, unknown>;
}>();
</script>
```

Then use it in your table:

```html
<bo-table
	:headers="headers"
	:items="items"
	:rowComponent="MyCustomRow"
>
	<template #name="{ item }">
		<div class="flex items-center gap-2">
			<bo-avatar :data="{ label: item.name }" />
			<span>{{ item.name }}</span>
		</div>
	</template>
</bo-table>
```

### Empty State

Handle empty data states:

```html
<bo-table
	:headers="headers"
	:items="[]"
>
	<template #empty>
		<div class="py-4 text-center">
			<bo-text value="No data available" />
		</div>
	</template>
</bo-table>
```

## Best Practices

1. **Column Widths**: Use fixed widths for columns that contain consistent data types (e.g., dates, numbers)
2. **Sorting**: Only enable sorting for columns that make sense to sort (e.g., dates, numbers, names)
3. **Responsive Design**: Consider using horizontal scroll for tables with many columns
4. **Performance**: For large datasets, consider implementing pagination or virtual scrolling
5. **Accessibility**: Always provide meaningful labels for sortable columns

## Common Use Cases

### Data Grid

```html
<bo-table
	:headers="[
		{ key: 'id', label: 'ID', width: '80px' },
		{ key: 'name', label: 'Name', sortable: true },
		{ key: 'status', label: 'Status', sortable: true },
		{ key: 'date', label: 'Date', sortable: true, width: '150px' }
	]"
	:items="items"
/>
```

### User List

```html
<bo-table
	:headers="[
		{ key: 'avatar', label: '', width: '50px' },
		{ key: 'name', label: 'Name', sortable: true },
		{ key: 'role', label: 'Role', sortable: true },
		{ key: 'email', label: 'Email' }
	]"
	:items="users"
	:rowComponent="UserRow"
/>
```
