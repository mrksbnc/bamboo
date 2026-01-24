---
title: Dropdown
description: A dropdown menu component for displaying a list of options or actions
category: navigation
tags:
  - dropdown
  - menu
  - select
  - navigation
  - options
outline: deep
---

<script setup lang="ts">
import { BoDropdown, BoButton } from '@mrksbnc/bamboo-vue'
</script>

# Dropdown

The `bo-dropdown` component provides a dropdown menu interface for displaying a list of options, actions, or navigation items. It's commonly used for menus, select-like interfaces, and action lists.

## Basic Usage

::: raw
<bo-dropdown>
<template #trigger>
<bo-button suffix-icon="chevron-down">Options</bo-button>
</template>
<template #content>

<div class="p-2 space-y-1">
<div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Option 1</div>
<div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Option 2</div>
<div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Option 3</div>
</div>
</template>
</bo-dropdown>
:::

```vue
<bo-dropdown>
  <template #trigger>
    <bo-button suffix-icon="chevron-down">Options</bo-button>
  </template>
  <template #content>
    <div class="p-2 space-y-1">
      <div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Option 1</div>
      <div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Option 2</div>
      <div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Option 3</div>
    </div>
  </template>
</bo-dropdown>
```

## Placement

The `placement` prop controls where the dropdown appears relative to the trigger element.

::: raw

<div class="flex gap-4 flex-wrap">
  <bo-dropdown placement="bottom-start">
    <template #trigger>
      <bo-button suffix-icon="chevron-down">Bottom Start</bo-button>
    </template>
    <template #content>
      <div class="p-2 space-y-1">
        <div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Option 1</div>
        <div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Option 2</div>
      </div>
    </template>
  </bo-dropdown>
  
  <bo-dropdown placement="bottom-end">
    <template #trigger>
      <bo-button suffix-icon="chevron-down">Bottom End</bo-button>
    </template>
    <template #content>
      <div class="p-2 space-y-1">
        <div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Option 1</div>
        <div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Option 2</div>
      </div>
    </template>
  </bo-dropdown>
  
  <bo-dropdown placement="top-start">
    <template #trigger>
      <bo-button suffix-icon="chevron-up">Top Start</bo-button>
    </template>
    <template #content>
      <div class="p-2 space-y-1">
        <div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Option 1</div>
        <div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Option 2</div>
      </div>
    </template>
  </bo-dropdown>
</div>
:::

```vue
<bo-dropdown placement="bottom-start">
  <template #trigger>
    <bo-button suffix-icon="chevron-down">Bottom Start</bo-button>
  </template>
  <template #content>
    <!-- content -->
  </template>
</bo-dropdown>

<bo-dropdown placement="bottom-end">
  <template #trigger>
    <bo-button suffix-icon="chevron-down">Bottom End</bo-button>
  </template>
  <template #content>
    <!-- content -->
  </template>
</bo-dropdown>

<bo-dropdown placement="top-start">
  <template #trigger>
    <bo-button suffix-icon="chevron-up">Top Start</bo-button>
  </template>
  <template #content>
    <!-- content -->
  </template>
</bo-dropdown>
```

## Trigger Events

Control when the dropdown opens and closes using different trigger events.

::: raw

<div class="flex gap-4 flex-wrap">
  <bo-dropdown trigger="click">
    <template #trigger>
      <bo-button>Click to Open</bo-button>
    </template>
    <template #content>
      <div class="p-2 space-y-1">
        <div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Click Option 1</div>
        <div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Click Option 2</div>
      </div>
    </template>
  </bo-dropdown>
  
  <bo-dropdown trigger="hover">
    <template #trigger>
      <bo-button>Hover to Open</bo-button>
    </template>
    <template #content>
      <div class="p-2 space-y-1">
        <div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Hover Option 1</div>
        <div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Hover Option 2</div>
      </div>
    </template>
  </bo-dropdown>
</div>
:::

```vue
<!-- Click trigger (default) -->
<bo-dropdown trigger="click">
  <template #trigger>
    <bo-button>Click to Open</bo-button>
  </template>
  <template #content>
    <!-- content -->
  </template>
</bo-dropdown>

<!-- Hover trigger -->
<bo-dropdown trigger="hover">
  <template #trigger>
    <bo-button>Hover to Open</bo-button>
  </template>
  <template #content>
    <!-- content -->
  </template>
</bo-dropdown>
```

## With Dividers and Groups

Organize dropdown content with dividers and logical groups.

::: raw
<bo-dropdown>
<template #trigger>
<bo-button suffix-icon="chevron-down">Actions</bo-button>
</template>
<template #content>

<div class="p-2">
<div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Edit</div>
<div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Duplicate</div>
<div class="border-t my-2"></div>
<div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Archive</div>
<div class="px-3 py-2 hover:bg-red-50 hover:text-red-600 cursor-pointer rounded text-red-500">Delete</div>
</div>
</template>
</bo-dropdown>
:::

```vue
<bo-dropdown>
  <template #trigger>
    <bo-button suffix-icon="chevron-down">Actions</bo-button>
  </template>
  <template #content>
    <div class="p-2">
      <div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Edit</div>
      <div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Duplicate</div>
      <div class="border-t my-2"></div>
      <div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Archive</div>
      <div class="px-3 py-2 hover:bg-red-50 hover:text-red-600 cursor-pointer rounded text-red-500">Delete</div>
    </div>
  </template>
</bo-dropdown>
```

## Disabled State

Dropdowns can be disabled to prevent user interaction.

::: raw
<bo-dropdown :disabled="true">
<template #trigger>
<bo-button :disabled="true" suffix-icon="chevron-down">Disabled</bo-button>
</template>
<template #content>

<div class="p-2 space-y-1">
<div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Option 1</div>
<div class="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">Option 2</div>
</div>
</template>
</bo-dropdown>
:::

```vue
<bo-dropdown :disabled="true">
  <template #trigger>
    <bo-button :disabled="true" suffix-icon="chevron-down">Disabled</bo-button>
  </template>
  <template #content>
    <!-- content -->
  </template>
</bo-dropdown>
```
