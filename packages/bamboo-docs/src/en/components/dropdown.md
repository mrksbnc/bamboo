---
title: Dropdown
description: Show a compact menu of actions.
category: navigation
tags:
  - dropdown
  - menu
  - actions
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import {
  BoButton,
  BoDropdown,
  BoDropdownContent,
  BoDropdownItem,
  BoDropdownLabel,
  BoDropdownSeparator,
  BoDropdownTrigger,
  BoIcon,
} from '@mrksbnc/bamboo-vue';

const selected = ref('No action selected');
const controlledOpen = ref(false);
const showAdvanced = ref(false);

const basicExample = `<bo-dropdown>
  <template #trigger>Actions</template>
  <bo-dropdown-label>Project</bo-dropdown-label>
  <bo-dropdown-item @select="selected = 'Rename'">Rename</bo-dropdown-item>
  <bo-dropdown-item @select="selected = 'Duplicate'">Duplicate</bo-dropdown-item>
  <bo-dropdown-separator />
  <bo-dropdown-item destructive @select="selected = 'Delete'">Delete</bo-dropdown-item>
</bo-dropdown>`;

const iconsExample = `<bo-dropdown>
  <template #trigger>Quick actions</template>
  <bo-dropdown-item>
    <bo-icon icon="folder" aria-hidden="true" />
    Open project
  </bo-dropdown-item>
  <bo-dropdown-item>
    <bo-icon icon="download" aria-hidden="true" />
    Download archive
  </bo-dropdown-item>
</bo-dropdown>`;

const statesExample = `<bo-dropdown>
  <template #trigger>Options</template>
  <bo-dropdown-item>Available</bo-dropdown-item>
  <bo-dropdown-item disabled>Unavailable</bo-dropdown-item>
  <bo-dropdown-item destructive>Delete permanently</bo-dropdown-item>
</bo-dropdown>`;

const groupsExample = `<bo-dropdown>
  <template #trigger>Workspace</template>
  <bo-dropdown-label>Navigate</bo-dropdown-label>
  <bo-dropdown-item>Overview</bo-dropdown-item>
  <bo-dropdown-item>Activity</bo-dropdown-item>
  <bo-dropdown-separator />
  <bo-dropdown-label>Manage</bo-dropdown-label>
  <bo-dropdown-item>Settings</bo-dropdown-item>
</bo-dropdown>`;

const variableExample = `<bo-button size="sm" kind="outline" @click="showAdvanced = !showAdvanced">
  Toggle advanced action
</bo-button>
<bo-dropdown>
  <template #trigger>Variable menu</template>
  <bo-dropdown-item>Always available</bo-dropdown-item>
  <bo-dropdown-item v-if="showAdvanced">Advanced action</bo-dropdown-item>
  <bo-dropdown-item v-else disabled>Advanced action unavailable</bo-dropdown-item>
</bo-dropdown>`;

const keyboardExample = `<bo-dropdown>
  <template #trigger>Keyboard menu</template>
  <bo-dropdown-item>First item</bo-dropdown-item>
  <bo-dropdown-item>Second item</bo-dropdown-item>
  <bo-dropdown-item>Third item</bo-dropdown-item>
</bo-dropdown>`;

const controlledExample = `<bo-button @click="controlledOpen = !controlledOpen">Toggle menu</bo-button>
<bo-dropdown v-model:open="controlledOpen">
  <template #trigger>Controlled menu</template>
  <bo-dropdown-item>Choose an action</bo-dropdown-item>
</bo-dropdown>`;
</script>

# Dropdown

Use `bo-dropdown` for a compact set of related commands that does not need persistent space in the page. The root owns the trigger and menu surface; use the `trigger` slot for the trigger content and the default slot for menu children.

## Basic Usage

`bo-dropdown-item` emits `select` when it is activated and closes the menu afterward.

<ExampleFrame :code="basicExample">
  <div class="grid justify-items-start gap-3">
    <bo-dropdown>
      <template #trigger>Actions</template>
      <bo-dropdown-label>Project</bo-dropdown-label>
      <bo-dropdown-item @select="selected = 'Rename'">Rename</bo-dropdown-item>
      <bo-dropdown-item @select="selected = 'Duplicate'">Duplicate</bo-dropdown-item>
      <bo-dropdown-separator />
      <bo-dropdown-item destructive @select="selected = 'Delete'">Delete</bo-dropdown-item>
    </bo-dropdown>
    <span class="text-sm text-neutral-500">{{ selected }}</span>
  </div>
</ExampleFrame>

## Icons Before Items

There is no separate icon prop on `BoDropdownItem`. Put `bo-icon` and the item label in its default slot to render an icon before the content.

<ExampleFrame :code="iconsExample">
  <div class="grid justify-items-start gap-3">
    <bo-dropdown>
      <template #trigger>Quick actions</template>
      <bo-dropdown-item>
        <bo-icon icon="folder" aria-hidden="true" />
        Open project
      </bo-dropdown-item>
      <bo-dropdown-item>
        <bo-icon icon="download" aria-hidden="true" />
        Download archive
      </bo-dropdown-item>
    </bo-dropdown>
  </div>
</ExampleFrame>

## Disabled and Destructive Items

Set `disabled` when an action is temporarily unavailable. Disabled items are skipped by keyboard navigation. Set `destructive` on actions that remove data or otherwise have serious consequences.

<ExampleFrame :code="statesExample">
  <bo-dropdown>
    <template #trigger>Options</template>
    <bo-dropdown-item>Available</bo-dropdown-item>
    <bo-dropdown-item disabled>Unavailable</bo-dropdown-item>
    <bo-dropdown-item destructive>Delete permanently</bo-dropdown-item>
  </bo-dropdown>
</ExampleFrame>

## Groups and Separators

Use `bo-dropdown-label` for a non-interactive group label and `bo-dropdown-separator` between groups. Both are content primitives and do not emit events.

<ExampleFrame :code="groupsExample">
  <bo-dropdown>
    <template #trigger>Workspace</template>
    <bo-dropdown-label>Navigate</bo-dropdown-label>
    <bo-dropdown-item>Overview</bo-dropdown-item>
    <bo-dropdown-item>Activity</bo-dropdown-item>
    <bo-dropdown-separator />
    <bo-dropdown-label>Manage</bo-dropdown-label>
    <bo-dropdown-item>Settings</bo-dropdown-item>
  </bo-dropdown>
</ExampleFrame>

## Variable Content

The default slot is ordinary Vue content, so items can be added, removed, or disabled reactively. Keep the menu usable when its content changes and avoid changing the meaning of an item while it has focus.

<ExampleFrame :code="variableExample">
  <div class="grid justify-items-start gap-3">
    <bo-button size="sm" kind="outline" @click="showAdvanced = !showAdvanced">
      Toggle advanced action
    </bo-button>
    <bo-dropdown>
      <template #trigger>Variable menu</template>
      <bo-dropdown-item>Always available</bo-dropdown-item>
      <bo-dropdown-item v-if="showAdvanced">Advanced action</bo-dropdown-item>
      <bo-dropdown-item v-else disabled>Advanced action unavailable</bo-dropdown-item>
    </bo-dropdown>
  </div>
</ExampleFrame>

## Controlled Visibility

Use `v-model:open` when another control needs to control menu visibility. The root still closes the menu after an item is selected, on outside pointer interaction, or from Escape.

<ExampleFrame :code="controlledExample">
  <div class="flex flex-wrap items-center gap-2">
    <bo-button @click="controlledOpen = !controlledOpen">Toggle menu</bo-button>
    <bo-dropdown v-model:open="controlledOpen">
      <template #trigger>Controlled menu</template>
      <bo-dropdown-item>Choose an action</bo-dropdown-item>
    </bo-dropdown>
  </div>
</ExampleFrame>

## Keyboard Interaction

The trigger and menu support keyboard navigation:

- `ArrowDown` opens the menu and focuses the first enabled item.
- `ArrowUp` opens the menu and focuses the last enabled item.
- `ArrowDown` and `ArrowUp` move between enabled items.
- `Home` and `End` move to the first and last enabled items.
- `Escape` closes the menu and returns focus to the trigger.

<ExampleFrame :code="keyboardExample">
  <div class="grid justify-items-start gap-2">
    <bo-dropdown>
      <template #trigger>Keyboard menu</template>
      <bo-dropdown-item>First item</bo-dropdown-item>
      <bo-dropdown-item>Second item</bo-dropdown-item>
      <bo-dropdown-item>Third item</bo-dropdown-item>
    </bo-dropdown>
    <span class="text-sm text-neutral-500">Focus the trigger, then use ArrowDown, Home, End, or Escape.</span>
  </div>
</ExampleFrame>

## Usage Guidance

- Use a visible trigger label that describes the available commands.
- Use `destructive` only for actions that need strong visual emphasis.
- Keep disabled items in the menu only when showing their unavailable context is useful.
- Use a menu for commands, not for long-form content or a persistent navigation list.

## API Reference

### `BoDropdown` Props

| Prop         | Type      | Default       | Description                              |
| ------------ | --------- | ------------- | ---------------------------------------- |
| `id`         | `string`  | Autogenerated | The dropdown root id.                    |
| `dataTestId` | `string`  | Autogenerated | The test id attribute.                   |
| `disabled`   | `boolean` | `false`       | Disables the root trigger.               |
| `open`       | `boolean` | `false`       | Visibility state used by `v-model:open`. |

### `BoDropdown` Events and Slots

| Name          | Type      | Description                         |
| ------------- | --------- | ----------------------------------- |
| `update:open` | `boolean` | Emitted when visibility changes.    |
| `trigger`     | slot      | Content of the root trigger button. |
| `default`     | slot      | Menu content.                       |

### `BoDropdownItem` Props and Events

| Name          | Type                  | Default | Description                             |
| ------------- | --------------------- | ------- | --------------------------------------- |
| `disabled`    | `boolean`             | `false` | Prevents activation and focus.          |
| `destructive` | `boolean`             | `false` | Applies destructive item styling.       |
| `select`      | `(event: MouseEvent)` | -       | Emitted when the item is activated.     |
| `default`     | slot                  | -       | Item content, including optional icons. |

### Content Primitives

| Component             | Props | Description                                      |
| --------------------- | ----- | ------------------------------------------------ |
| `BoDropdownTrigger`   | -     | Exported trigger primitive for dropdown context. |
| `BoDropdownContent`   | -     | Exported menu-content primitive.                 |
| `BoDropdownLabel`     | -     | Non-interactive group label with a default slot. |
| `BoDropdownSeparator` | -     | Visual and semantic separator between groups.    |
