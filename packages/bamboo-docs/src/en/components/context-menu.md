---
title: Context Menu
description: A pointer and keyboard menu for contextual actions.
category: navigation
tags:
  - context-menu
  - menu
  - keyboard
  - a11y
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import {
  BoContextMenu,
  BoContextMenuCheckboxItem,
  BoContextMenuContent,
  BoContextMenuItem,
  BoContextMenuLabel,
  BoContextMenuRadioGroup,
  BoContextMenuRadioItem,
  BoContextMenuSeparator,
  BoContextMenuTrigger,
} from '@mrksbnc/bamboo-vue';

const action = ref('');
const checked = ref(false);
const color = ref('blue');

const basicExample = `<bo-context-menu>
  <bo-context-menu-trigger><div class="rounded border p-8">Right-click this surface</div></bo-context-menu-trigger>
  <bo-context-menu-content>
    <bo-context-menu-label>Actions</bo-context-menu-label>
    <bo-context-menu-item @select="action = 'Open'">Open</bo-context-menu-item>
    <bo-context-menu-item @select="action = 'Rename'">Rename</bo-context-menu-item>
    <bo-context-menu-separator />
    <bo-context-menu-item variant="destructive" @select="action = 'Delete'">Delete</bo-context-menu-item>
  </bo-context-menu-content>
</bo-context-menu>`;

const stateExample = `<bo-context-menu>
  <bo-context-menu-trigger><div class="rounded border p-8">Right-click for options</div></bo-context-menu-trigger>
  <bo-context-menu-content>
    <bo-context-menu-checkbox-item v-model:checked="checked">Show grid</bo-context-menu-checkbox-item>
    <bo-context-menu-radio-group v-model:value="color">
      <bo-context-menu-label>Color</bo-context-menu-label>
      <bo-context-menu-radio-item value="blue">Blue</bo-context-menu-radio-item>
      <bo-context-menu-radio-item value="green">Green</bo-context-menu-radio-item>
    </bo-context-menu-radio-group>
  </bo-context-menu-content>
</bo-context-menu>`;
</script>

# Context Menu

`bo-context-menu` opens a menu at the pointer position when its trigger is context-clicked. The content is teleported to `body` and receives menu semantics.

## Basic Usage

<ExampleFrame :code="basicExample">
  <bo-context-menu>
    <bo-context-menu-trigger><div class="rounded border p-8">Right-click this surface</div></bo-context-menu-trigger>
    <bo-context-menu-content>
      <bo-context-menu-label>Actions</bo-context-menu-label>
      <bo-context-menu-item @select="action = 'Open'">Open</bo-context-menu-item>
      <bo-context-menu-item @select="action = 'Rename'">Rename</bo-context-menu-item>
      <bo-context-menu-separator />
      <bo-context-menu-item variant="destructive" @select="action = 'Delete'">Delete</bo-context-menu-item>
    </bo-context-menu-content>
  </bo-context-menu>
  <p class="mt-2 text-sm text-neutral-500">{{ action ? `Selected: ${action}` : 'No action selected' }}</p>
</ExampleFrame>

## Checkboxes and Radio Items

Items close the menu after selection. Checkbox items use `v-model:checked`; radio items must be inside `bo-context-menu-radio-group` and use `v-model:value` on that group.

<ExampleFrame :code="stateExample">
  <bo-context-menu>
    <bo-context-menu-trigger><div class="rounded border p-8">Right-click for options</div></bo-context-menu-trigger>
    <bo-context-menu-content>
      <bo-context-menu-checkbox-item v-model:checked="checked">Show grid</bo-context-menu-checkbox-item>
      <bo-context-menu-radio-group v-model:value="color">
        <bo-context-menu-label>Color</bo-context-menu-label>
        <bo-context-menu-radio-item value="blue">Blue</bo-context-menu-radio-item>
        <bo-context-menu-radio-item value="green">Green</bo-context-menu-radio-item>
      </bo-context-menu-radio-group>
    </bo-context-menu-content>
  </bo-context-menu>
  <p class="mt-2 text-sm text-neutral-500">Grid: {{ checked ? 'shown' : 'hidden' }}. Color: {{ color }}</p>
</ExampleFrame>

## API Reference

| Component / prop            | Type                         | Default   | Description                                       |
| --------------------------- | ---------------------------- | --------- | ------------------------------------------------- |
| `BoContextMenu`             | component                    | -         | Root context and open state.                      |
| `open`                      | `boolean`                    | `false`   | Visibility used by `v-model:open`.                |
| `closeOnOutside`            | `boolean`                    | `true`    | Closes on a pointer event outside the content.    |
| `closeOnEscape`             | `boolean`                    | `true`    | Closes when Escape is pressed.                    |
| `BoContextMenuTrigger`      | component                    | -         | Region that listens for `contextmenu`.            |
| `BoContextMenuContent`      | component                    | -         | Teleported menu content.                          |
| `BoContextMenuItem`         | component                    | -         | Selectable item; emits `select`.                  |
| `disabled`                  | `boolean`                    | `false`   | Prevents item selection.                          |
| `inset`                     | `boolean`                    | `false`   | Applies inset item styling.                       |
| `variant`                   | `'default' \| 'destructive'` | `default` | Item visual variant.                              |
| `BoContextMenuCheckboxItem` | component                    | -         | Toggleable item with `v-model:checked`.           |
| `BoContextMenuRadioGroup`   | component                    | -         | Provides a string or number value to radio items. |
| `BoContextMenuRadioItem`    | component                    | -         | Radio item with required `value`.                 |
| `BoContextMenuLabel`        | component                    | -         | Non-interactive label; supports `inset`.          |
| `BoContextMenuSeparator`    | component                    | -         | Menu separator.                                   |

The menu supports Arrow Up/Down, Home, End, and Escape. Its default role is `menu`.
