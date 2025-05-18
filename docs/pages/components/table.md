<script setup>
import BoTable from '@/components/table/bo-table.vue';
import { BoTableVariant, BoTableSize } from '@/components/table/bo-table';
import { BoSize } from '@/shared/bo-size';
</script>

# Table

A customizable data table component for displaying structured data in rows and columns.

```js
import { BoTable } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-table
		:columns="columns"
		:data="data"
		:row-component="RowComponent"
		hoverable
		striped
	/>
</template>

<script setup>
import { BoTable } from '@mrksbnc/bamboo';
import RowComponent from './RowComponent.vue';

const columns = [
	{ header: 'Name', field: 'name' },
	{ header: 'Email', field: 'email' },
	{ header: 'Status', field: 'status' },
];

const data = [
	{ id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
	{ id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
	{ id: 3, name: 'Robert Johnson', email: 'robert@example.com', status: 'Pending' },
];
</script>
```

<hr />
<div class="my-4">
  <!-- Sample table display would go here in the actual documentation -->
</div>

## Props

| Name           | Type              | Default     | Description                                     |
| -------------- | ----------------- | ----------- | ----------------------------------------------- |
| `data`         | `any[]`           | required    | Array of data to display in the table           |
| `columns`      | `BoTableColumn[]` | required    | Column definitions for the table                |
| `rowComponent` | `Component`       | required    | Vue component used to render each row           |
| `bordered`     | `boolean`         | `false`     | Whether to show borders around the table        |
| `striped`      | `boolean`         | `false`     | Whether to use alternating row colors           |
| `hoverable`    | `boolean`         | `false`     | Whether rows highlight on hover                 |
| `fullWidth`    | `boolean`         | `true`      | Whether table takes full width of container     |
| `stickyHeader` | `boolean`         | `false`     | Whether headers stick to the top when scrolling |
| `height`       | `string`          | `undefined` | Fixed height for the table container            |

## Types

```ts
export interface BoTableColumn {
	header: string;
	field: string;
	sortable?: boolean;
	width?: string;
	cellRenderer?: Component | ((value: any, row: any) => string);
	class?: string;
	headerClass?: string;
}

export enum BoTableVariant {
	default = 'default',
	bordered = 'bordered',
	minimal = 'minimal',
}

export enum BoTableSize {
	small = 'small',
	default = 'default',
	large = 'large',
}
```

## Table Styles

### Basic Table

```vue
<template>
	<bo-table
		:columns="columns"
		:data="data"
		:row-component="RowComponent"
	/>
</template>
```

### Bordered Table

```vue
<template>
	<bo-table
		:columns="columns"
		:data="data"
		:row-component="RowComponent"
		bordered
	/>
</template>
```

### Striped Table

```vue
<template>
	<bo-table
		:columns="columns"
		:data="data"
		:row-component="RowComponent"
		striped
	/>
</template>
```

### Hoverable Rows

```vue
<template>
	<bo-table
		:columns="columns"
		:data="data"
		:row-component="RowComponent"
		hoverable
	/>
</template>
```

### Sticky Header

```vue
<template>
	<bo-table
		:columns="columns"
		:data="data"
		:row-component="RowComponent"
		sticky-header
		height="300px"
	/>
</template>
```

## Custom Row Component

The `rowComponent` prop allows you to completely customize how rows are rendered in the table. Here's an example of a custom row component:

```vue
<!-- UserTableRow.vue -->
<template>
	<tr :class="$attrs.class">
		<td class="p-3">{{ row.name }}</td>
		<td class="p-3">{{ row.email }}</td>
		<td class="p-3">
			<span :class="statusClass">{{ row.status }}</span>
		</td>
		<td class="p-3">
			<bo-button
				size="small"
				@click="editUser"
				>Edit</bo-button
			>
		</td>
	</tr>
</template>

<script setup>
import { computed } from 'vue';
import { BoButton } from '@mrksbnc/bamboo';

// Props passed by the BoTable component
const props = defineProps({
	row: {
		type: Object,
		required: true,
	},
	columns: {
		type: Array,
		required: true,
	},
});

// Computed property to determine status badge styling
const statusClass = computed(() => {
	switch (props.row.status) {
		case 'Active':
			return 'px-2 py-1 rounded-full bg-green-100 text-green-800';
		case 'Inactive':
			return 'px-2 py-1 rounded-full bg-red-100 text-red-800';
		case 'Pending':
			return 'px-2 py-1 rounded-full bg-yellow-100 text-yellow-800';
		default:
			return '';
	}
});

// Row action method
const editUser = () => {
	console.log('Edit user:', props.row);
};
</script>
```

## Column Configuration

The `columns` prop provides several options for customizing how data is displayed:

```js
const columns = [
	// Basic column
	{
		header: 'Name',
		field: 'name',
	},

	// Column with custom width
	{
		header: 'Email',
		field: 'email',
		width: '30%',
	},

	// Column with custom classes
	{
		header: 'Status',
		field: 'status',
		class: 'text-center',
		headerClass: 'bg-slate-200',
	},

	// Column with cell renderer function
	{
		header: 'Created',
		field: 'createdAt',
		cellRenderer: (value) => {
			return new Date(value).toLocaleDateString();
		},
	},
];
```

## Empty State

The table automatically shows an empty state message when no data is available, but you can customize this with a slot:

```vue
<template>
	<bo-table
		:columns="columns"
		:data="[]"
		:row-component="RowComponent"
	>
		<template #empty>
			<div class="py-8 text-center">
				<p class="text-slate-500">No users found</p>
				<bo-button class="mt-4">Add User</bo-button>
			</div>
		</template>
	</bo-table>
</template>
```

## Usage Examples

### Data Table with Actions

```vue
<template>
	<div>
		<div class="mb-4 flex justify-between">
			<h3 class="text-lg font-bold">Users</h3>
			<bo-button @click="addUser">Add User</bo-button>
		</div>

		<bo-table
			:columns="columns"
			:data="users"
			:row-component="UserTableRow"
			bordered
			hoverable
			sticky-header
			height="400px"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { BoTable, BoButton } from '@mrksbnc/bamboo';
import UserTableRow from './UserTableRow.vue';

const columns = [
	{ header: 'Name', field: 'name', width: '25%' },
	{ header: 'Email', field: 'email', width: '30%' },
	{ header: 'Role', field: 'role', width: '15%' },
	{ header: 'Status', field: 'status', width: '15%' },
	{ header: 'Actions', field: 'actions', width: '15%' },
];

const users = ref([
	{ id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
	{ id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
	{ id: 3, name: 'Robert Johnson', email: 'robert@example.com', role: 'User', status: 'Inactive' },
	{ id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: 'Editor', status: 'Active' },
	{ id: 5, name: 'Michael Brown', email: 'michael@example.com', role: 'User', status: 'Pending' },
]);

const addUser = () => {
	// Add user logic
};
</script>
```

### Responsive Table

```vue
<template>
	<div class="overflow-x-auto">
		<bo-table
			:columns="columns"
			:data="products"
			:row-component="ProductRow"
			striped
			hoverable
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { BoTable } from '@mrksbnc/bamboo';
import ProductRow from './ProductRow.vue';

const columns = [
	{ header: 'ID', field: 'id', width: '10%' },
	{ header: 'Product', field: 'name', width: '25%' },
	{ header: 'Category', field: 'category', width: '15%' },
	{ header: 'Price', field: 'price', width: '15%' },
	{ header: 'Stock', field: 'stock', width: '10%' },
	{ header: 'Rating', field: 'rating', width: '15%' },
	{ header: 'Actions', field: 'actions', width: '10%' },
];

const products = ref([
	{
		id: 1,
		name: 'MacBook Pro',
		category: 'Electronics',
		price: '$1999.99',
		stock: 45,
		rating: 4.8,
	},
	{
		id: 2,
		name: 'Ergonomic Chair',
		category: 'Furniture',
		price: '$299.99',
		stock: 28,
		rating: 4.5,
	},
	{ id: 3, name: 'Coffee Maker', category: 'Appliances', price: '$89.99', stock: 53, rating: 4.2 },
	{
		id: 4,
		name: 'Wireless Headphones',
		category: 'Electronics',
		price: '$159.99',
		stock: 14,
		rating: 4.7,
	},
]);
</script>
```
