---
title: Table
description: Render structured data with aligned columns, custom cells, and actions.
category: display
tags:
  - table
  - data
  - slots
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoButton, BoTable } from '@mrksbnc/bamboo-vue';

const columns = [
  { key: 'name', label: 'Project', align: 'start' as const, width: 50 },
  { key: 'owner', label: 'Owner', align: 'center' as const, width: 25 },
  { key: 'status', label: 'Status', align: 'end' as const, width: 25 },
];
const rows: Record<string, unknown>[] = [
  { name: 'Bamboo docs', owner: 'Mina', status: 'Ready' },
  { name: 'Design tokens', owner: 'Alex', status: 'In review' },
  { name: 'Website', owner: 'Sam', status: 'Draft' },
];
const emptyRows: Record<string, unknown>[] = [];
const actionMessage = ref('No row action selected');

const actions = [
  {
    label: 'Open',
    kind: 'outline' as const,
    onClick: (row: Record<string, unknown>) => {
      actionMessage.value = `Opened ${String(row.name)}`;
    },
  },
  {
    label: 'Archive',
    variant: 'destructive' as const,
    onClick: (row: Record<string, unknown>) => {
      actionMessage.value = `Archived ${String(row.name)}`;
    },
  },
];

const basicExample = `<bo-table
  :columns="columns"
  :rows="rows"
  striped
  bordered
  caption="Projects"
/>`;

const cellsExample = `<bo-table :columns="columns" :rows="rows" caption="Projects">
  <template #cell-status="{ value }">
    <span class="font-medium">{{ value }}</span>
  </template>
  <template #cell-owner="{ value }">
    <span class="text-neutral-500">{{ value }}</span>
  </template>
</bo-table>`;

const actionsExample = `<bo-table
  :columns="columns"
  :rows="rows"
  :actions="actions"
  actions-label="Project actions"
  caption="Projects"
/>`;

const actionSlotExample = `<bo-table :columns="columns" :rows="rows" caption="Projects">
  <template #actions="{ row }">
    <bo-button size="sm" kind="outline" @click="actionMessage = String(row.name)">
      Inspect
    </bo-button>
  </template>
</bo-table>`;

const emptyExample = `<bo-table :columns="columns" :rows="emptyRows" caption="Projects">
  <template #empty>No projects match this filter.</template>
</bo-table>`;

const loadingExample = `<bo-table :columns="columns" :rows="emptyRows" caption="Projects">
  <template #empty>
    <span aria-live="polite">Loading projects...</span>
  </template>
</bo-table>`;
</script>

# Table

Use `bo-table` when columns and rows are data-driven. Columns define the order and alignment of the headers and cells; rows provide values by column key. Cell and action slots let you add presentation without changing the data model.

## Basic Usage

`columns` and `rows` are required. Add `caption` to describe the table, and wrap very wide tables in an overflow container when the surrounding layout is narrow.

<ExampleFrame :code="basicExample">
  <div class="w-full overflow-x-auto">
    <bo-table
      :columns="columns"
      :rows="rows"
      striped
      bordered
      caption="Projects"
    />
  </div>
</ExampleFrame>

## Aligned Headers and Columns

Set `align` on each column to align both its header and its cells. Set `width` to a percentage of the table width; column widths are defined directly on each column object and should total 100. Supported alignments are `start`, `center`, and `end`.

<ExampleFrame :code="basicExample">
  <div class="w-full overflow-x-auto">
    <bo-table :columns="columns" :rows="rows" caption="Aligned project data" />
  </div>
</ExampleFrame>

## Cell Slots

Cell slots use the naming pattern `cell-{key}`. Each slot receives `value`, `row`, and `index`; values without a matching slot render as text.

<ExampleFrame :code="cellsExample">
  <div class="w-full overflow-x-auto">
    <bo-table :columns="columns" :rows="rows" caption="Projects">
      <template #cell-status="{ value }">
        <span class="font-medium">{{ value }}</span>
      </template>
      <template #cell-owner="{ value }">
        <span class="text-neutral-500">{{ value }}</span>
      </template>
    </bo-table>
  </div>
</ExampleFrame>

## Built-In Row Actions

Pass `actions` to render a final actions column. Each action can define a label, accessible label, button variant, button kind, disabled state, and `onClick` callback.

<ExampleFrame :code="actionsExample">
  <div class="grid w-full gap-2">
    <div class="w-full overflow-x-auto">
      <bo-table
        :columns="columns"
        :rows="rows"
        :actions="actions"
        actions-label="Project actions"
        caption="Projects"
      />
    </div>
    <span class="text-sm text-neutral-500">{{ actionMessage }}</span>
  </div>
</ExampleFrame>

## Actions Slot

Use the `actions` scoped slot when the row action layout needs custom content. It receives the configured actions, row, and row index. A table with this slot still renders an actions column even when the `actions` prop is empty.

<ExampleFrame :code="actionSlotExample">
  <div class="grid w-full gap-2">
    <div class="w-full overflow-x-auto">
      <bo-table :columns="columns" :rows="rows" caption="Projects">
        <template #actions="{ row }">
          <bo-button size="sm" kind="outline" @click="actionMessage = String(row.name)">
            Inspect
          </bo-button>
        </template>
      </bo-table>
    </div>
    <span class="text-sm text-neutral-500">{{ actionMessage }}</span>
  </div>
</ExampleFrame>

## Empty State

When `rows` is empty, the table renders one empty row spanning all columns. Replace the default `No results.` text with the `empty` slot.

<ExampleFrame :code="emptyExample">
  <div class="w-full overflow-x-auto">
    <bo-table :columns="columns" :rows="emptyRows" caption="Projects">
      <template #empty>No projects match this filter.</template>
    </bo-table>
  </div>
</ExampleFrame>

## Loading-Like State

The current table API has no `loading` prop or loading slot. While data is being fetched, keep `rows` empty and use the `empty` slot for a temporary live message, then replace it with the actual empty state or rows when the request finishes.

<ExampleFrame :code="loadingExample">
  <div class="w-full overflow-x-auto">
    <bo-table :columns="columns" :rows="emptyRows" caption="Projects">
      <template #empty>
        <span aria-live="polite">Loading projects...</span>
      </template>
    </bo-table>
  </div>
</ExampleFrame>

## Usage Guidance

- Keep column keys stable and make them match the keys in every row.
- Add a caption or `ariaLabel` so the table has a useful accessible name.
- Use `cell-{key}` for formatting and `actions` for row-specific commands.
- Use `striped` and `bordered` to improve scanning, not as a substitute for clear column labels.

## API Reference

### Props

| Prop           | Type                           | Default       | Description                                  |
| -------------- | ------------------------------ | ------------- | -------------------------------------------- |
| `id`           | `string`                       | Autogenerated | The table root id.                           |
| `dataTestId`   | `string`                       | Autogenerated | The test id attribute.                       |
| `columns`      | `BoTableColumn[]`              | required      | Ordered column definitions.                  |
| `rows`         | `Record<string, unknown>[]`    | required      | Data rows keyed by column key.               |
| `caption`      | `string`                       | -             | Visible table caption.                       |
| `striped`      | `boolean`                      | `false`       | Applies alternating row backgrounds.         |
| `bordered`     | `boolean`                      | `false`       | Adds cell borders.                           |
| `ariaLabel`    | `HTMLAttributes['aria-label']` | -             | Accessible table name.                       |
| `actions`      | `BoTableAction[]`              | `[]`          | Built-in actions rendered in a final column. |
| `actionsLabel` | `string`                       | `Actions`     | Header label for the actions column.         |

### `BoTableColumn`

| Field   | Type                           | Default  | Description                                      |
| ------- | ------------------------------ | -------- | ------------------------------------------------ |
| `key`   | `string`                       | required | Row property used for the column.                |
| `label` | `string`                       | required | Header text.                                     |
| `align` | `'start' \| 'center' \| 'end'` | `start`  | Header and cell alignment.                       |
| `width` | `number`                       | -        | Column width as a percentage of the table width. |

### `BoTableAction`

| Field       | Type                   | Default  | Description                              |
| ----------- | ---------------------- | -------- | ---------------------------------------- |
| `label`     | `string`               | required | Button label.                            |
| `ariaLabel` | `string`               | label    | Accessible button name.                  |
| `variant`   | `BoButtonVariant`      | -        | Button color variant.                    |
| `kind`      | `BoButtonKind`         | -        | Button surface kind.                     |
| `disabled`  | `boolean`              | `false`  | Disables the action.                     |
| `onClick`   | `(row, index) => void` | -        | Callback invoked with the row and index. |

### Slots

| Name         | Props                     | Description                            |
| ------------ | ------------------------- | -------------------------------------- |
| `cell-{key}` | `{ value, row, index }`   | Custom content for a data column.      |
| `actions`    | `{ actions, row, index }` | Custom content for a row actions cell. |
| `empty`      | -                         | Content for an empty rows array.       |
