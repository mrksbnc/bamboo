---
title: Table
description: A flexible data table component with sorting, selection, loading states, and customizable columns. Perfect for displaying structured data.
category: data
tags:
  - table
  - data
  - grid
  - sorting
  - selection
outline: deep
---

<script setup>
import { ref } from 'vue';
import { BoTable, BoButton } from '@mrksbnc/bamboo-vue';

const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status', align: 'center' }
];

const rows = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' }
];

const sort = ref();
const selectedRows = ref([]);
const loading = ref(false);

const simulateLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>

# Table

A flexible data table component with sorting, selection, loading states, and customizable columns. Perfect for displaying structured data.

## Basic Usage

The component is called `bo-table` and requires `columns` and `rows` props:

<div class="mb-4">
  <bo-table :columns="columns" :rows="rows" />
</div>

```vue
<template>
	<bo-table :columns="columns" :rows="rows" />
</template>

<script setup>
	const columns = [
		{ key: 'name', label: 'Name', sortable: true },
		{ key: 'email', label: 'Email', sortable: true },
		{ key: 'role', label: 'Role' },
		{ key: 'status', label: 'Status', align: 'center' },
	];

	const rows = [
		{ id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
		{ id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
		{ id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
	];
</script>
```

## With Sorting

Enable sorting by setting `sortable: true` on columns and handling the sort event:

<div class="mb-4">
  <bo-table 
    :columns="columns" 
    :rows="rows" 
    :sort="sort"
    @update:sort="sort = $event"
  />
</div>

```vue
<template>
	<bo-table :columns="columns" :rows="rows" :sort="sort" @update:sort="sort = $event" />
</template>

<script setup>
	import { ref } from 'vue';
	const sort = ref();
</script>
```

## With Selection

Enable row selection with the `selectable` prop:

<div class="mb-4">
  <bo-table 
    :columns="columns" 
    :rows="rows" 
    selectable
    :selected-rows="selectedRows"
    @update:selected-rows="selectedRows = $event"
  />
  <p class="mt-2 text-sm text-gray-600">Selected: {{ selectedRows.length }} rows</p>
</div>

```vue
<template>
	<bo-table
		:columns="columns"
		:rows="rows"
		selectable
		:selected-rows="selectedRows"
		@update:selected-rows="selectedRows = $event"
	/>
</template>

<script setup>
	import { ref } from 'vue';
	const selectedRows = ref([]);
</script>
```

## Loading State

Show a loading state while data is being fetched:

<div class="mb-4">
  <bo-button @click="simulateLoading" label="Simulate Loading" class="mb-4" />
  <bo-table :columns="columns" :rows="rows" :loading="loading" />
</div>

```vue
<template>
	<bo-table :columns="columns" :rows="rows" :loading="loading" />
</template>

<script setup>
	import { ref } from 'vue';
	const loading = ref(false);
</script>
```

## Variants

The `variant` prop allows you to customize the table appearance:

<div class="space-y-4">
  <div>
    <h4 class="text-sm font-medium mb-2">Striped</h4>
    <bo-table :columns="columns" :rows="rows" variant="striped" />
  </div>
  
  <div>
    <h4 class="text-sm font-medium mb-2">Bordered</h4>
    <bo-table :columns="columns" :rows="rows" variant="bordered" />
  </div>
</div>

```vue
<bo-table :columns="columns" :rows="rows" variant="striped" />
<bo-table :columns="columns" :rows="rows" variant="bordered" />
```

## API Reference

### Props

| Prop           | Type                                          | Default               | Description                 |
| -------------- | --------------------------------------------- | --------------------- | --------------------------- |
| `columns`      | `BoTableColumn[]`                             | `[]`                  | Array of column definitions |
| `rows`         | `BoTableRow[]`                                | `[]`                  | Array of row data           |
| `size`         | `'sm' \| 'default' \| 'lg'`                   | `'default'`           | Size of the table           |
| `variant`      | `'default' \| 'striped' \| 'bordered'`        | `'default'`           | Visual variant              |
| `sort`         | `{ key: string, direction: 'asc' \| 'desc' }` | `undefined`           | Current sort state          |
| `selectable`   | `boolean`                                     | `false`               | Whether rows are selectable |
| `selectedRows` | `(string \| number)[]`                        | `[]`                  | Array of selected row IDs   |
| `loading`      | `boolean`                                     | `false`               | Loading state               |
| `stickyHeader` | `boolean`                                     | `false`               | Whether header is sticky    |
| `hoverable`    | `boolean`                                     | `true`                | Whether rows are hoverable  |
| `emptyMessage` | `string`                                      | `'No data available'` | Empty state message         |
| `caption`      | `string`                                      | `undefined`           | Table caption               |

### Column Definition

| Property   | Type                            | Description                    |
| ---------- | ------------------------------- | ------------------------------ |
| `key`      | `string`                        | Unique key for the column      |
| `label`    | `string`                        | Display label for the header   |
| `sortable` | `boolean`                       | Whether the column is sortable |
| `width`    | `string`                        | CSS width value                |
| `align`    | `'left' \| 'center' \| 'right'` | Content alignment              |
| `sticky`   | `boolean`                       | Whether the column is sticky   |

### Events

| Event                 | Payload                                                    | Description                    |
| --------------------- | ---------------------------------------------------------- | ------------------------------ |
| `update:sort`         | `{ key: string, direction: 'asc' \| 'desc' } \| undefined` | Emitted when sort changes      |
| `update:selectedRows` | `(string \| number)[]`                                     | Emitted when selection changes |
| `rowClick`            | `BoTableRow`                                               | Emitted when a row is clicked  |

### Slots

| Slot               | Props                    | Description                             |
| ------------------ | ------------------------ | --------------------------------------- |
| `cell-{columnKey}` | `{ row, column, value }` | Custom cell content for specific column |
