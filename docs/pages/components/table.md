<script setup>
import BoTable from '@/components/table/bo-table.vue';

const columns = [
	{ key: 'name', label: 'Name' },
	{ key: 'age', label: 'Age' },
	{ key: 'email', label: 'Email' },
];

const data = [
	{ id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
	{ id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
	{ id: 3, name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
];
</script>

# Table

Table is a component that displays data in a structured tabular format.

```js
import { BoTable } from '@mrksbnc/bamboo';
```

## Basic Usage

<bo-table :columns="columns" :data="data" />

```vue
<template>
	<bo-table
		:columns="columns"
		:data="data"
	/>
</template>

<script setup>
const columns = [
	{ key: 'name', label: 'Name' },
	{ key: 'age', label: 'Age' },
	{ key: 'email', label: 'Email' },
];

const data = [
	{ id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
	{ id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
	{ id: 3, name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
];
</script>
```

## Props

| Name      | Type                    | Default | Description                      |
| --------- | ----------------------- | ------- | -------------------------------- |
| `id`      | `string`                | `auto`  | Unique ID for the table          |
| `columns` | `BoTableColumn[]`       | -       | Array of column definitions      |
| `data`    | `Record<string, any>[]` | -       | Array of data objects to display |

## Types

```ts
interface BoTableColumn {
	/** Unique key for the column */
	key: string;
	/** Display label for the column */
	label: string;
	/** Optional CSS class for the column */
	class?: string;
}

interface BoTableProps {
	/** Unique ID for the table */
	id?: string;
	/** Array of column definitions */
	columns: BoTableColumn[];
	/** Array of data objects to display in the table */
	data: Record<string, any>[];
}
```

## Custom Cell Content

You can customize the content of any cell using slots. The slot name should match the column key:

<bo-table :columns="columns" :data="data">
	<template #email="{ value }">
		<a :href="`mailto:${value}`" class="text-blue-500 hover:underline">
			{{ value }}
		</a>
	</template>
</bo-table>

```vue
<template>
	<bo-table
		:columns="columns"
		:data="data"
	>
		<template #email="{ value }">
			<a
				:href="`mailto:${value}`"
				class="text-blue-500 hover:underline"
			>
				{{ value }}
			</a>
		</template>
	</bo-table>
</template>

<script setup>
const columns = [
	{ key: 'name', label: 'Name' },
	{ key: 'age', label: 'Age' },
	{ key: 'email', label: 'Email' },
];

const data = [
	{ id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
	{ id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
	{ id: 3, name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
];
</script>
```

## Custom Column Styling

You can add custom CSS classes to columns:

<bo-table
	:columns="[
		{ key: 'name', label: 'Name', class: 'font-bold' },
		{ key: 'age', label: 'Age', class: 'text-right' },
		{ key: 'email', label: 'Email' },
	]"
	:data="data"
/>

```vue
<template>
	<bo-table
		:columns="[
			{ key: 'name', label: 'Name', class: 'font-bold' },
			{ key: 'age', label: 'Age', class: 'text-right' },
			{ key: 'email', label: 'Email' },
		]"
		:data="data"
	/>
</template>
```
