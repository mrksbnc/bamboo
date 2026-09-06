---
title: Resizable
description: A two-panel layout with a keyboard and pointer resize handle.
category: layout
tags:
  - resizable
  - layout
  - panels
  - a11y
outline: deep
---

<script setup lang="ts">
import { BoResizable, BoResizableHandle, BoResizablePanel } from '@mrksbnc/bamboo-vue';

const horizontalExample = `<bo-resizable class="min-h-40 w-full">
  <bo-resizable-panel :default-size="35" :min-size="20"><div class="p-4">Navigation</div></bo-resizable-panel>
  <bo-resizable-handle />
  <bo-resizable-panel :default-size="65" :min-size="30"><div class="p-4">Main content</div></bo-resizable-panel>
</bo-resizable>`;
const verticalExample = `<bo-resizable direction="vertical" class="min-h-64 w-full">
  <bo-resizable-panel :default-size="60"><div class="p-4">Preview</div></bo-resizable-panel>
  <bo-resizable-handle />
  <bo-resizable-panel :default-size="40"><div class="p-4">Details</div></bo-resizable-panel>
</bo-resizable>`;
</script>

# Resizable

`bo-resizable` lays out two panels around a handle. Drag the handle or focus it and use the arrow keys, Home, and End. Panel sizes are percentages.

## Horizontal Panels

<ExampleFrame :code="horizontalExample">
  <bo-resizable class="min-h-40 w-full"><bo-resizable-panel :default-size="35" :min-size="20"><div class="p-4">Navigation</div></bo-resizable-panel><bo-resizable-handle /><bo-resizable-panel :default-size="65" :min-size="30"><div class="p-4">Main content</div></bo-resizable-panel></bo-resizable>
</ExampleFrame>

## Vertical Panels

<ExampleFrame :code="verticalExample">
  <bo-resizable direction="vertical" class="min-h-64 w-full"><bo-resizable-panel :default-size="60"><div class="p-4">Preview</div></bo-resizable-panel><bo-resizable-handle /><bo-resizable-panel :default-size="40"><div class="p-4">Details</div></bo-resizable-panel></bo-resizable>
</ExampleFrame>

## API Reference

| Component / prop    | Type                         | Default      | Description                               |
| ------------------- | ---------------------------- | ------------ | ----------------------------------------- |
| `BoResizable`       | component                    | -            | Panel group and direction context.        |
| `direction`         | `'horizontal' \| 'vertical'` | `horizontal` | Main axis for panels and handle movement. |
| `role`              | `HTMLAttributes['role']`     | `group`      | Group role.                               |
| `BoResizablePanel`  | component                    | -            | Panel with percentage sizing.             |
| `defaultSize`       | `number`                     | `50`         | Initial percentage size.                  |
| `minSize`           | `number`                     | `10`         | Minimum percentage size.                  |
| `BoResizableHandle` | component                    | -            | Separator handle between panels.          |

The handle clamps the first panel between 10% and 90% and exposes separator value attributes.
