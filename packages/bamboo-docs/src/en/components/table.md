---
title: Table
description: Structured, responsive data tables with custom cells.
category: display
tags: [table, data, responsive, accessibility]
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoTable } from '@mrksbnc/bamboo-vue';
const columns = [
  { key: 'name', label: 'Project' },
  { key: 'owner', label: 'Owner' },
  { key: 'status', label: 'Status' },
];
const rows = ref([
  { name: 'Bamboo docs', owner: 'Mina', status: 'Ready' },
  { name: 'Design tokens', owner: 'Alex', status: 'In review' },
  { name: 'Website', owner: 'Sam', status: 'Draft' },
]);
const emptyRows = ref<Record<string, unknown>[]>([]);
const basicExample = `<bo-table :columns="columns" :rows="rows" striped caption="Projects" />`;
const customCellsExample = `<bo-table :columns="columns" :rows="rows" bordered caption="Projects">
  <template #cell-status="{ value }">
    <span class="font-medium">{{ value }}</span>
  </template>
</bo-table>`;
const emptyExample = `<bo-table :columns="columns" :rows="emptyRows" caption="Projects">
  <template #empty>No projects match this filter.</template>
</bo-table>`;
</script>

# Table

`bo-table` renders semantic table markup from column definitions and row objects. Use named cell slots when a value needs a badge, link, or action; keep the underlying table semantics intact.

## Data and custom cells

<ExampleFrame :code="basicExample"><div class="w-full overflow-x-auto"><bo-table :columns="columns" :rows="rows" striped caption="Projects" /></div></ExampleFrame>

## Custom cells

Named `cell-{key}` slots receive `value`, `row`, and `index`. This keeps formatting in the consuming page without replacing table semantics.

<ExampleFrame :code="customCellsExample"><div class="w-full overflow-x-auto"><bo-table :columns="columns" :rows="rows" bordered caption="Projects"><template #cell-status="{ value }"><span class="font-medium">{{ value }}</span></template></bo-table></div></ExampleFrame>

## Empty state

Use the `empty` slot for a useful empty state instead of leaving the table body blank.

<ExampleFrame :code="emptyExample"><div class="w-full overflow-x-auto"><bo-table :columns="columns" :rows="emptyRows" caption="Projects"><template #empty>No projects match this filter.</template></bo-table></div></ExampleFrame>

## States and responsive guidance

Provide an explicit empty state when `rows` is empty and render loading or error feedback outside the table while data is fetched. Use a caption or `aria-label` to identify the table. For narrow screens, allow horizontal scrolling or switch to a card presentation; never hide columns without making their content available elsewhere.

## Accessibility

Use real header cells and keep column labels concise. If rows are selectable, expose the selection state and provide a keyboard-accessible action. Sort controls should announce direction and preserve focus. Do not rely on zebra striping or status color alone.

## API reference

| Prop           | Type                                                                     | Default     | Description                                |
| -------------- | ------------------------------------------------------------------------ | ----------- | ------------------------------------------ |
| `columns`      | `{ key: string; label: string; align?: 'start' \| 'center' \| 'end' }[]` | required    | Ordered column definitions.                |
| `rows`         | `Record<string, unknown>[]`                                              | required    | Data rows.                                 |
| `striped`      | `boolean`                                                                | `false`     | Alternating row backgrounds.               |
| `caption`      | `string`                                                                 | `undefined` | Accessible table caption.                  |
| `bordered`     | `boolean`                                                                | `false`     | Adds borders to the table.                 |
| `ariaLabel`    | `string`                                                                 | `undefined` | Accessible table name.                     |
| `actions`      | `BoTableAction[]`                                                        | `[]`        | Row actions rendered in an actions column. |
| `actionsLabel` | `string`                                                                 | `Actions`   | Header for the actions column.             |

### Slots and events

Use `cell-{key}` slots for custom cell content and `actions` for row actions. Sorting, filtering, and selection events are not built into `bo-table`; keep those concerns in the parent so the data source remains the source of truth.
