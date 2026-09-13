---
title: Button Group
description: Group related buttons with shared styling and selection.
category: form
tags:
  - button-group
  - buttons
  - selection
  - toolbar
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoButtonGroup, BoButtonGroupItem, BoIcon } from '@mrksbnc/bamboo-vue';

const alignment = ref<string | number>('left');
const filters = ref<string[]>(['open']);
const view = ref<string | number>('list');

const basicExample = `<bo-button-group>
  <bo-button-group-item value="back">Back</bo-button-group-item>
  <bo-button-group-item value="next">Next</bo-button-group-item>
</bo-button-group>`;

const singleExample = `<bo-button-group v-model="alignment">
  <bo-button-group-item value="left">Left</bo-button-group-item>
  <bo-button-group-item value="center">Center</bo-button-group-item>
  <bo-button-group-item value="right">Right</bo-button-group-item>
</bo-button-group>`;

const multipleExample = `<bo-button-group v-model="filters" multiple variant="secondary">
  <bo-button-group-item value="open">Open</bo-button-group-item>
  <bo-button-group-item value="assigned">Assigned</bo-button-group-item>
  <bo-button-group-item value="review">Review</bo-button-group-item>
</bo-button-group>`;

const layoutExample = `<div class="grid gap-4">
  <bo-button-group :attached="false">
    <bo-button-group-item value="list">List</bo-button-group-item>
    <bo-button-group-item value="board">Board</bo-button-group-item>
  </bo-button-group>
  <bo-button-group orientation="vertical" full-width>
    <bo-button-group-item value="overview">Overview</bo-button-group-item>
    <bo-button-group-item value="activity">Activity</bo-button-group-item>
  </bo-button-group>
</div>`;

const variantsExample = `<div class="flex flex-wrap gap-3">
  <bo-button-group variant="primary">
    <bo-button-group-item value="new">New</bo-button-group-item>
    <bo-button-group-item value="import">Import</bo-button-group-item>
  </bo-button-group>
  <bo-button-group variant="secondary">
    <bo-button-group-item value="draft">Draft</bo-button-group-item>
    <bo-button-group-item value="published">Published</bo-button-group-item>
  </bo-button-group>
</div>`;

const sizesExample = `<div class="grid gap-3">
  <bo-button-group size="sm"><bo-button-group-item value="sm">Small</bo-button-group-item><bo-button-group-item value="sm-2">Small</bo-button-group-item></bo-button-group>
  <bo-button-group size="default"><bo-button-group-item value="default">Default</bo-button-group-item><bo-button-group-item value="default-2">Default</bo-button-group-item></bo-button-group>
  <bo-button-group size="lg"><bo-button-group-item value="lg">Large</bo-button-group-item><bo-button-group-item value="lg-2">Large</bo-button-group-item></bo-button-group>
</div>`;

const itemExample = `<bo-button-group v-model="view">
  <bo-button-group-item value="list" size="sm" aria-label="List view">
    <bo-icon icon="list" aria-hidden="true" />
  </bo-button-group-item>
  <bo-button-group-item value="board" size="lg" aria-label="Board view">
    <bo-icon icon="grid" aria-hidden="true" />
  </bo-button-group-item>
  <bo-button-group-item value="disabled" disabled>Unavailable</bo-button-group-item>
</bo-button-group>`;
</script>

const selectedValue = ref('option1');
const selectedValues = ref(['bold', 'italic']);
const requiredValue = ref('center');

Use `bo-button-group` for adjacent actions or a compact selection control. Use `bo-button-group-item` for every child; items receive their size, variant, selection, and disabled state from the group unless overridden.

## Basic Usage

The default group is horizontal, attached, and uses the neutral secondary treatment.

<ExampleFrame :code="basicExample">
  <bo-button-group>
    <bo-button-group-item value="back">Back</bo-button-group-item>
    <bo-button-group-item value="next">Next</bo-button-group-item>
  </bo-button-group>
</ExampleFrame>

## Single Selection

With the default `multiple="false"`, `v-model` contains one selected string or number. Selecting the current item clears it unless `required` is set.

<ExampleFrame :code="singleExample">
  <div class="grid gap-2">
    <bo-button-group v-model="alignment">
      <bo-button-group-item value="left">Left</bo-button-group-item>
      <bo-button-group-item value="center">Center</bo-button-group-item>
      <bo-button-group-item value="right">Right</bo-button-group-item>
    </bo-button-group>
    <span class="text-sm text-neutral-500">Selected: {{ alignment }}</span>
  </div>
</ExampleFrame>

## Multiple Selection

Set `multiple` to make `v-model` an array. Set `required` when at least one item must remain selected.

<ExampleFrame :code="multipleExample">
  <div class="grid gap-2">
    <bo-button-group v-model="filters" multiple variant="secondary">
      <bo-button-group-item value="open">Open</bo-button-group-item>
      <bo-button-group-item value="assigned">Assigned</bo-button-group-item>
      <bo-button-group-item value="review">Review</bo-button-group-item>
    </bo-button-group>
    <span class="text-sm text-neutral-500">{{ filters.length ? filters.join(', ') : 'Nothing selected' }}</span>
  </div>
</ExampleFrame>

## Layout and Attachment

Attached groups use shared edges and retain a rounded outer silhouette. Set `attached="false"` for separated rounded buttons. Use `orientation="vertical"` and `fullWidth` for stacked controls.

<ExampleFrame :code="layoutExample">
  <div class="grid w-full max-w-sm gap-4">
    <bo-button-group :attached="false">
      <bo-button-group-item value="list">List</bo-button-group-item>
      <bo-button-group-item value="board">Board</bo-button-group-item>
    </bo-button-group>
    <bo-button-group orientation="vertical" full-width>
      <bo-button-group-item value="overview">Overview</bo-button-group-item>
      <bo-button-group-item value="activity">Activity</bo-button-group-item>
    </bo-button-group>
  </div>
</ExampleFrame>

## Variants

The group variant is inherited by its items. Use item-level `variant` when a specific action needs a different treatment.

<ExampleFrame :code="variantsExample">
  <div class="flex flex-wrap gap-3">
    <bo-button-group variant="primary">
      <bo-button-group-item value="new">New</bo-button-group-item>
      <bo-button-group-item value="import">Import</bo-button-group-item>
    </bo-button-group>
    <bo-button-group variant="secondary">
      <bo-button-group-item value="draft">Draft</bo-button-group-item>
      <bo-button-group-item value="published">Published</bo-button-group-item>
    </bo-button-group>
  </div>
</ExampleFrame>

## Sizes

Group size is inherited by every item unless the item supplies its own `size`.

<ExampleFrame :code="sizesExample">
  <div class="grid gap-3">
    <bo-button-group size="sm"><bo-button-group-item value="sm">Small</bo-button-group-item><bo-button-group-item value="sm-2">Small</bo-button-group-item></bo-button-group>
    <bo-button-group size="default"><bo-button-group-item value="default">Default</bo-button-group-item><bo-button-group-item value="default-2">Default</bo-button-group-item></bo-button-group>
    <bo-button-group size="lg"><bo-button-group-item value="lg">Large</bo-button-group-item><bo-button-group-item value="lg-2">Large</bo-button-group-item></bo-button-group>
  </div>
</ExampleFrame>

## Item Overrides, Icons, and Disabled Items

An item can override the inherited size or variant. Icon-only items should include `ariaLabel`; disabled items are skipped and cannot change the model.

<ExampleFrame :code="itemExample">
  <div class="flex flex-wrap items-center gap-3">
    <bo-button-group v-model="view">
      <bo-button-group-item value="list" size="sm" aria-label="List view">
        <bo-icon icon="list" aria-hidden="true" />
      </bo-button-group-item>
      <bo-button-group-item value="board" size="lg" aria-label="Board view">
        <bo-icon icon="grid" aria-hidden="true" />
      </bo-button-group-item>
      <bo-button-group-item value="disabled" disabled>Unavailable</bo-button-group-item>
    </bo-button-group>
    <span class="text-sm text-neutral-500">{{ view }}</span>
  </div>
</ExampleFrame>

## API Reference

### `BoButtonGroup` Props

| Prop                    | Type                                       | Default       | Description                                               |
| ----------------------- | ------------------------------------------ | ------------- | --------------------------------------------------------- |
| `id` / `dataTestId`     | `string`                                   | autogenerated | Root attributes.                                          |
| `modelValue`            | `string \| number \| (string \| number)[]` | -             | Selected value or values.                                 |
| `orientation`           | `horizontal \| vertical`                   | `horizontal`  | Item direction.                                           |
| `size`                  | `BoButtonSize`                             | `default`     | Size inherited by items.                                  |
| `variant`               | `BoButtonVariant`                          | `secondary`   | Variant inherited by items.                               |
| `fullWidth`             | `boolean`                                  | `false`       | Expands the group and its items.                          |
| `attached`              | `boolean`                                  | `true`        | Joins item edges and preserves outer rounding.            |
| `multiple` / `required` | `boolean`                                  | `false`       | Selection mode and whether one item must remain selected. |
| `role`                  | `HTMLAttributes['role']`                   | `group`       | Group semantics.                                          |

### `BoButtonGroupItem` Props

| Prop                | Type                               | Default       | Description                          |
| ------------------- | ---------------------------------- | ------------- | ------------------------------------ |
| `id` / `dataTestId` | `string`                           | autogenerated | Item attributes.                     |
| `value`             | `string \| number`                 | required      | Value represented by the item.       |
| `disabled`          | `boolean`                          | `false`       | Prevents selection and focus.        |
| `variant` / `size`  | `BoButtonVariant` / `BoButtonSize` | inherited     | Item-level overrides.                |
| `ariaLabel`         | `string`                           | -             | Accessible name for icon-only items. |

### Events and Slots

| Name                | Description                     |
| ------------------- | ------------------------------- |
| `update:modelValue` | Emitted when selection changes. |
| `default`           | Group or item content.          |
