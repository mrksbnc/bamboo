---
title: Popover
description: A positioned surface for arbitrary content.
category: overlay
tags:
  - popover
  - overlay
  - a11y
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoButton, BoPopover, BoPopoverContent, BoPopoverTrigger } from '@mrksbnc/bamboo-vue';

const open = ref(false);
const basicExample = `<bo-popover v-model:open="open">
  <bo-popover-trigger>Show details</bo-popover-trigger>
  <bo-popover-content><p class="max-w-xs">Content is positioned against the trigger.</p></bo-popover-content>
</bo-popover>`;
const placementExample = `<bo-popover placement="top-start">
  <bo-popover-trigger><bo-button variant="secondary">Top start</bo-button></bo-popover-trigger>
  <bo-popover-content><p>Additional actions</p></bo-popover-content>
</bo-popover>`;
</script>

# Popover

`bo-popover` provides a trigger and a teleported content surface. The content is positioned from the trigger and closes on outside pointer events or Escape by default.

## Basic Usage

<ExampleFrame :code="basicExample">
  <bo-popover v-model:open="open">
    <bo-popover-trigger>Show details</bo-popover-trigger>
    <bo-popover-content><p class="max-w-xs">Content is positioned against the trigger.</p></bo-popover-content>
  </bo-popover>
</ExampleFrame>

## Placement

Use `placement` to choose the side and alignment. Supported values are `top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, and `right-end`.

<ExampleFrame :code="placementExample">
  <bo-popover placement="top-start">
    <bo-popover-trigger><bo-button variant="secondary">Top start</bo-button></bo-popover-trigger>
    <bo-popover-content><p>Additional actions</p></bo-popover-content>
  </bo-popover>
</ExampleFrame>

## API Reference

| Prop / component   | Type                     | Default  | Description                                                                                |
| ------------------ | ------------------------ | -------- | ------------------------------------------------------------------------------------------ |
| `BoPopover`        | component                | -        | Root context and open state.                                                               |
| `open`             | `boolean`                | `false`  | Visibility used by `v-model:open`.                                                         |
| `placement`        | `BoPopoverPlacement`     | `bottom` | Side and alignment of content.                                                             |
| `offset`           | `number`                 | `8`      | Gap from the trigger in pixels.                                                            |
| `closeOnOutside`   | `boolean`                | `true`   | Closes on outside pointer events.                                                          |
| `closeOnEscape`    | `boolean`                | `true`   | Closes on Escape.                                                                          |
| `role`             | `HTMLAttributes['role']` | `dialog` | Content role.                                                                              |
| `BoPopoverTrigger` | component                | -        | Button that toggles the popover.                                                           |
| `BoPopoverContent` | component                | -        | Teleported content surface; accepts `id`, `dataTestId`, `placement`, `offset`, and `role`. |

The trigger and content expose `aria-expanded` and `aria-controls` relationships. Both root and content support `update:open` through the model.
