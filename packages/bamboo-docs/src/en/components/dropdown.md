---
title: Dropdown
description: An accessible menu for actions and choices.
category: navigation
tags: [dropdown, menu, keyboard, accessibility]
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoDropdown, BoDropdownItem, BoDropdownLabel, BoDropdownSeparator } from '@mrksbnc/bamboo-vue';
const action = ref('');
const choice = ref('');
const example = `<bo-dropdown>\n  <template #trigger>Actions</template>\n  <bo-dropdown-item @select="run('Edit')">Edit</bo-dropdown-item>\n</bo-dropdown>`;
const choiceExample = `<bo-dropdown>\n  <template #trigger>{{ choice || 'Density' }}</template>\n  <bo-dropdown-item @select="choice = 'Comfortable'">Comfortable</bo-dropdown-item>\n  <bo-dropdown-item @select="choice = 'Compact'">Compact</bo-dropdown-item>\n</bo-dropdown>`;
const run = (name: string) => { action.value = name; };
</script>

# Dropdown

`bo-dropdown` presents a compact menu of actions or editable choices. Use it for related commands and lightweight selection content; use a navbar for primary navigation.

## Actions and groups

<ExampleFrame :code="example"><div class="flex w-full max-w-sm flex-col items-start gap-3"><bo-dropdown><template #trigger>Actions</template><bo-dropdown-label>Project</bo-dropdown-label><bo-dropdown-item @select="run('Rename')">Rename</bo-dropdown-item><bo-dropdown-item @select="run('Duplicate')">Duplicate</bo-dropdown-item><bo-dropdown-separator /><bo-dropdown-item destructive @select="run('Delete')">Delete</bo-dropdown-item></bo-dropdown><p class="text-sm text-neutral-500">{{ action ? `Selected: ${action}` : 'No action selected' }}</p></div></ExampleFrame>

<ExampleFrame :code="choiceExample">
  <div class="flex flex-col items-start gap-3">
    <bo-dropdown>
      <template #trigger>{{ choice || 'Density' }}</template>
      <bo-dropdown-item @select="choice = 'Comfortable'">Comfortable</bo-dropdown-item>
      <bo-dropdown-item @select="choice = 'Compact'">Compact</bo-dropdown-item>
    </bo-dropdown>
    <p class="text-sm text-neutral-500">{{ choice ? `Selected: ${choice}` : 'Choose a density' }}</p>
  </div>
</ExampleFrame>

## States

Use `disabled` on an item when an action is unavailable, `destructive` only for irreversible actions, and a label to group related commands. Close the menu after selection and show confirmation for destructive operations.

## Accessibility and responsive guidance

The trigger exposes expanded state and the menu uses menu-item semantics. Menus support Arrow keys, Home/End, Enter/Space, and Escape; preserve focus when closing. Keep the menu within the viewport and align it to the trigger. On touch screens, increase item height and avoid hover-only meaning.

## API reference

| Component/prop        | Type      | Description                       |
| --------------------- | --------- | --------------------------------- |
| `BoDropdown`          | component | Root menu and open state context. |
| `v-model:open`        | `boolean` | Controls visibility.              |
| `BoDropdownItem`      | component | Selectable item; emits `select`.  |
| `disabled`            | `boolean` | Prevents selection.               |
| `destructive`         | `boolean` | Applies destructive emphasis.     |
| `BoDropdownLabel`     | component | Non-interactive group label.      |
| `BoDropdownSeparator` | component | Separates groups.                 |
