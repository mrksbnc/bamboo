---
title: Popover
description: Position arbitrary content beside a trigger.
category: overlay
tags:
  - popover
  - overlay
  - positioning
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoPopover, BoPopoverContent, BoPopoverTrigger } from '@mrksbnc/bamboo-vue';

const open = ref(false);
const scrollOpen = ref(false);
const parentOpen = ref(false);
const childOpen = ref(false);

const basicExample = `<bo-popover v-model:open="open">
  <template #trigger>
    <bo-popover-trigger>Show details</bo-popover-trigger>
  </template>
  <bo-popover-content>
    <p class="max-w-xs">Content is positioned against the trigger.</p>
  </bo-popover-content>
</bo-popover>`;

const placementExample = `<bo-popover placement="top-start" :offset="12">
  <template #trigger>
    <bo-popover-trigger>Top start</bo-popover-trigger>
  </template>
  <bo-popover-content>Additional actions</bo-popover-content>
</bo-popover>`;

const scrollExample = `<div class="h-48 overflow-y-auto">
  <div class="h-64 pt-40">
    <bo-popover v-model:open="scrollOpen">
      <template #trigger>
        <bo-popover-trigger>Scroll around this trigger</bo-popover-trigger>
      </template>
      <bo-popover-content>
        <p>The content follows the trigger while its scroll container moves.</p>
      </bo-popover-content>
    </bo-popover>
  </div>
</div>`;

const nestedExample = `<bo-popover v-model:open="parentOpen">
  <template #trigger>
    <bo-popover-trigger>Open parent</bo-popover-trigger>
  </template>
  <bo-popover-content>
    <p>Parent content</p>
    <bo-popover v-model:open="childOpen" placement="right-start">
      <template #trigger>
        <bo-popover-trigger>Open nested content</bo-popover-trigger>
      </template>
      <bo-popover-content>Nested content</bo-popover-content>
    </bo-popover>
  </bo-popover-content>
</bo-popover>`;
</script>

# Popover

Use `bo-popover` for short interactive content that should remain associated with a trigger. Unlike a dialog, it is positioned beside the trigger and does not lock page scrolling. Unlike a dropdown, its content can contain arbitrary layout and controls.

## Basic Usage

Use `bo-popover-trigger` in the root `trigger` slot and `bo-popover-content` in the default slot. The root owns the open state and positioning context.

<ExampleFrame :code="basicExample">
  <bo-popover v-model:open="open">
    <template #trigger>
      <bo-popover-trigger>Show details</bo-popover-trigger>
    </template>
    <bo-popover-content>
      <p class="max-w-xs">Content is positioned against the trigger.</p>
    </bo-popover-content>
  </bo-popover>
</ExampleFrame>

## Trigger and Content

`bo-popover-trigger` renders a button and toggles the root state. `bo-popover-content` teleports its surface to `body`, adds the configured role, and includes a decorative arrow. Put forms, links, or other interactive content inside the content slot as needed.

## Placement and Offset

The root supports twelve placements: `top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, and `right-end`. `offset` is the gap from the trigger in pixels. Content can override `placement` or `offset` for one surface.

<ExampleFrame :code="placementExample">
  <div class="flex flex-wrap items-center gap-3">
    <bo-popover placement="top-start" :offset="12">
      <template #trigger>
        <bo-popover-trigger>Top start</bo-popover-trigger>
      </template>
      <bo-popover-content>Additional actions</bo-popover-content>
    </bo-popover>
    <bo-popover placement="right-end">
      <template #trigger>
        <bo-popover-trigger>Right end</bo-popover-trigger>
      </template>
      <bo-popover-content>Aligned to the trigger end.</bo-popover-content>
    </bo-popover>
  </div>
</ExampleFrame>

## Scroll Anchoring

Popover content is positioned against the trigger and recalculated after opening, on resize, and while the window or an ancestor scrolls. This keeps teleported content anchored to a moving trigger.

<ExampleFrame :code="scrollExample">
  <div class="h-48 max-w-md overflow-y-auto rounded-md border p-4">
    <div class="h-64 pt-40">
      <bo-popover v-model:open="scrollOpen">
        <template #trigger>
          <bo-popover-trigger>Scroll around this trigger</bo-popover-trigger>
        </template>
        <bo-popover-content>
          <p>The content follows the trigger while its scroll container moves.</p>
        </bo-popover-content>
      </bo-popover>
    </div>
  </div>
</ExampleFrame>

## Nested Content

A popover can contain another popover. Give nested content an explicit placement when the default position would overlap the parent surface, and keep nested actions short.

<ExampleFrame :code="nestedExample">
  <bo-popover v-model:open="parentOpen">
    <template #trigger>
      <bo-popover-trigger>Open parent</bo-popover-trigger>
    </template>
    <bo-popover-content>
      <p>Parent content</p>
      <bo-popover v-model:open="childOpen" placement="right-start">
        <template #trigger>
          <bo-popover-trigger>Open nested content</bo-popover-trigger>
        </template>
        <bo-popover-content>Nested content</bo-popover-content>
      </bo-popover>
    </bo-popover-content>
  </bo-popover>
</ExampleFrame>

## Closing Behavior

Outside pointer interaction and Escape close the popover by default. Set `closeOnOutside` or `closeOnEscape` to `false` when the surrounding interaction requires the surface to stay open. The root emits `update:open` through `v-model:open`.

## Usage Guidance

- Keep popover content brief enough to scan without leaving the current context.
- Use a dialog for a blocking workflow and a dropdown for a command list.
- Provide a clear trigger label and ensure interactive content remains keyboard reachable.
- Use `role="dialog"` for general content and choose a more specific role only when the content semantics require it.

## API Reference

### `BoPopover` Props

| Prop             | Type                     | Default       | Description                                 |
| ---------------- | ------------------------ | ------------- | ------------------------------------------- |
| `id`             | `string`                 | Autogenerated | The popover root id.                        |
| `dataTestId`     | `string`                 | Autogenerated | The test id attribute.                      |
| `open`           | `boolean`                | `false`       | Visibility state used by `v-model:open`.    |
| `placement`      | `BoPopoverPlacement`     | `bottom`      | Position relative to the trigger.           |
| `offset`         | `number`                 | `8`           | Gap from the trigger in pixels.             |
| `closeOnOutside` | `boolean`                | `true`        | Closes after a pointer interaction outside. |
| `closeOnEscape`  | `boolean`                | `true`        | Closes when Escape is pressed.              |
| `role`           | `HTMLAttributes['role']` | `dialog`      | Role applied to the content surface.        |

### `BoPopover` Events and Slots

| Name          | Type      | Description                             |
| ------------- | --------- | --------------------------------------- |
| `update:open` | `boolean` | Emitted when visibility changes.        |
| `trigger`     | slot      | Usually a `BoPopoverTrigger` component. |
| `default`     | slot      | Usually a `BoPopoverContent` component. |

### `BoPopoverTrigger`

| Name      | Type | Description                                          |
| --------- | ---- | ---------------------------------------------------- |
| `default` | slot | Button content. All native attributes are forwarded. |

### `BoPopoverContent` Props and Slots

| Prop         | Type                     | Default       | Description                                   |
| ------------ | ------------------------ | ------------- | --------------------------------------------- |
| `id`         | `string`                 | generated     | Content id and the trigger's `aria-controls`. |
| `dataTestId` | `string`                 | Autogenerated | The test id attribute.                        |
| `placement`  | `BoPopoverPlacement`     | inherited     | Content-level placement override.             |
| `offset`     | `number`                 | inherited     | Content-level offset override.                |
| `role`       | `HTMLAttributes['role']` | `dialog`      | Role applied to the content surface.          |
| `default`    | slot                     | -             | Popover content.                              |
