---
title: Menubar
description: A horizontal menu bar with keyboard navigation and nested menus.
category: navigation
tags:
  - menubar
  - menu
  - keyboard
  - a11y
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoMenubar, BoMenubarItem, BoMenubarLabel, BoMenubarSeparator, BoMenubarSubTrigger, BoMenubarTrigger } from '@mrksbnc/bamboo-vue';

const selected = ref('');
const basicExample = `<bo-menubar aria-label="Editor menu">
  <bo-menubar-trigger label="File"><bo-menubar-item @select="selected = 'New'">New</bo-menubar-item><bo-menubar-item @select="selected = 'Open'">Open</bo-menubar-item></bo-menubar-trigger>
  <bo-menubar-trigger label="Edit"><bo-menubar-item @select="selected = 'Undo'" shortcut="Ctrl+Z">Undo</bo-menubar-item><bo-menubar-item @select="selected = 'Redo'">Redo</bo-menubar-item></bo-menubar-trigger>
</bo-menubar>`;

const nestedExample = `<bo-menubar>
  <bo-menubar-trigger label="View"><bo-menubar-label>Panels</bo-menubar-label><bo-menubar-item value="Sidebar">Sidebar</bo-menubar-item><bo-menubar-separator /><bo-menubar-item variant="destructive" value="Reset">Reset</bo-menubar-item></bo-menubar-trigger>
  <bo-menubar-sub-trigger value="More"><bo-menubar-item value="Help">Help</bo-menubar-item></bo-menubar-sub-trigger>
</bo-menubar>`;
</script>

# Menubar

`bo-menubar` provides a horizontal `menubar` and roving keyboard navigation between its triggers. A trigger owns its menu content and toggles it on click.

## Menus and Items

<ExampleFrame :code="basicExample">
  <bo-menubar aria-label="Editor menu">
    <bo-menubar-trigger label="File"><bo-menubar-item @select="selected = 'New'">New</bo-menubar-item><bo-menubar-item @select="selected = 'Open'">Open</bo-menubar-item></bo-menubar-trigger>
    <bo-menubar-trigger label="Edit"><bo-menubar-item @select="selected = 'Undo'" shortcut="Ctrl+Z">Undo</bo-menubar-item><bo-menubar-item @select="selected = 'Redo'">Redo</bo-menubar-item></bo-menubar-trigger>
  </bo-menubar>
  <p class="mt-2 text-sm text-neutral-500">{{ selected ? `Selected: ${selected}` : 'Choose an item' }}</p>
</ExampleFrame>

## Labels, Separators, and Submenus

<ExampleFrame :code="nestedExample">
  <bo-menubar>
    <bo-menubar-trigger label="View"><bo-menubar-label>Panels</bo-menubar-label><bo-menubar-item value="Sidebar">Sidebar</bo-menubar-item><bo-menubar-separator /><bo-menubar-item variant="destructive" value="Reset">Reset</bo-menubar-item></bo-menubar-trigger>
    <bo-menubar-sub-trigger value="More"><bo-menubar-item value="Help">Help</bo-menubar-item></bo-menubar-sub-trigger>
  </bo-menubar>
</ExampleFrame>

## API Reference

| Component / prop      | Type                         | Default   | Description                                             |
| --------------------- | ---------------------------- | --------- | ------------------------------------------------------- |
| `BoMenubar`           | component                    | -         | Horizontal menubar; `ariaLabel` defaults to `Menu bar`. |
| `BoMenubarTrigger`    | component                    | -         | Trigger with `v-model:open`, `label`, and `disabled`.   |
| `BoMenubarItem`       | component                    | -         | Item; emits `select` with its `value`.                  |
| `value`               | `string \| number`           | -         | Item value.                                             |
| `icon`                | `Icon`                       | -         | Item icon.                                              |
| `shortcut`            | `string`                     | -         | Shortcut text shown at the end of an item.              |
| `inset`               | `boolean`                    | `false`   | Applies inset styling.                                  |
| `variant`             | `'default' \| 'destructive'` | `default` | Item visual variant.                                    |
| `BoMenubarLabel`      | component                    | -         | Non-interactive menu label.                             |
| `BoMenubarSeparator`  | component                    | -         | Menu separator.                                         |
| `BoMenubarSubTrigger` | component                    | -         | Nested menu trigger with `v-model:open`.                |

Triggers support Enter/Space, Arrow Down, and Escape. The menubar supports Arrow Left/Right, Home, and End.
