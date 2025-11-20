---
title: Popover
description: Display additional content in a floating container.
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoPopover } from '@/components/bo-popover';
import { BoButton } from '@/components/bo-button';

const isOpen = ref(false);
</script>

# Popover

Display additional content in a floating container with support for different placements and triggers.

## Basic Usage

```vue
<bo-popover content="This is a popover">
  <template #trigger>
    <bo-button label="Click me" />
  </template>
</bo-popover>
```

<div style="margin-top: 1rem;">
  <bo-popover content="This is a popover">
    <template #trigger>
      <bo-button label="Click me" />
    </template>
  </bo-popover>
</div>

## With Title

```vue
<bo-popover title="Popover Title" content="This is the popover content">
  <template #trigger>
    <bo-button label="Show Popover" />
  </template>
</bo-popover>
```

<div style="margin-top: 1rem;">
  <bo-popover title="Popover Title" content="This is the popover content">
    <template #trigger>
      <bo-button label="Show Popover" />
    </template>
  </bo-popover>
</div>

## Placements

```vue
<bo-popover placement="top" content="Top placement">
  <template #trigger>
    <bo-button label="Top" />
  </template>
</bo-popover>
```

## Trigger Types

### Click (Default)

```vue
<bo-popover trigger="click" content="Click to toggle">
  <template #trigger>
    <bo-button label="Click" />
  </template>
</bo-popover>
```

### Hover

```vue
<bo-popover trigger="hover" content="Hover to show">
  <template #trigger>
    <bo-button label="Hover" />
  </template>
</bo-popover>
```

## API Reference

### Props

| Name         | Type                                     | Default   | Description                 |
| ------------ | ---------------------------------------- | --------- | --------------------------- |
| `modelValue` | `boolean`                                | `false`   | Whether the popover is open |
| `placement`  | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`   | Placement of the popover    |
| `trigger`    | `'click' \| 'hover' \| 'focus'`          | `'click'` | Trigger type                |
| `title`      | `string`                                 | -         | Title of the popover        |
| `content`    | `string`                                 | -         | Content of the popover      |

### Slots

| Name      | Description     |
| --------- | --------------- |
| `trigger` | Trigger element |
| `default` | Custom content  |
