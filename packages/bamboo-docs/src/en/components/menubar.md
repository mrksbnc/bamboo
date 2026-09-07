---
title: Menubar
description: Arrange application menus in a floating, responsive bar.
category: navigation
tags:
  - menubar
  - menu
  - navigation
  - responsive
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import {
  BoButton,
  BoMenubar,
  BoMenubarItem,
  BoMenubarLabel,
  BoMenubarSeparator,
  BoMenubarSubTrigger,
  BoMenubarTrigger,
} from '@mrksbnc/bamboo-vue';

const selected = ref('No item selected');

const basicExample = `<bo-menubar aria-label="Workspace menu">
  <template #start><strong>Bamboo</strong></template>
  <template #main>
    <bo-menubar-trigger label="Workspace">
      <bo-menubar-item value="overview" @select="selected = 'Overview'">Overview</bo-menubar-item>
      <bo-menubar-item value="settings" @select="selected = 'Settings'">Settings</bo-menubar-item>
    </bo-menubar-trigger>
    <bo-menubar-trigger label="Help">
      <bo-menubar-item value="docs">Documentation</bo-menubar-item>
    </bo-menubar-trigger>
  </template>
  <template #end><bo-button size="sm" kind="outline">Account</bo-button></template>
</bo-menubar>`;

const slotsExample = `<bo-menubar aria-label="Workspace">
  <template #start>Workspace</template>
  <template #main>
    <bo-menubar-trigger>
      <template #trigger>Projects</template>
      <bo-menubar-item value="all">All projects</bo-menubar-item>
    </bo-menubar-trigger>
  </template>
  <template #end><span>Online</span></template>
</bo-menubar>`;

const submenuExample = `<bo-menubar aria-label="View menu">
  <template #main>
    <bo-menubar-trigger label="View">
      <bo-menubar-label>Panels</bo-menubar-label>
      <bo-menubar-item icon="columns" value="sidebar">Sidebar</bo-menubar-item>
      <bo-menubar-separator />
      <bo-menubar-sub-trigger value="More">
        <template #trigger>More options</template>
        <bo-menubar-item value="focus">Focus mode</bo-menubar-item>
      </bo-menubar-sub-trigger>
    </bo-menubar-trigger>
  </template>
</bo-menubar>`;

const itemsExample = `<bo-menubar>
  <template #main>
    <bo-menubar-trigger label="Actions">
      <bo-menubar-item icon="download" shortcut="Ctrl+D" value="download">
        Download
      </bo-menubar-item>
      <bo-menubar-item disabled value="unavailable">Unavailable</bo-menubar-item>
      <bo-menubar-item variant="destructive" value="delete">Delete</bo-menubar-item>
    </bo-menubar-trigger>
  </template>
</bo-menubar>`;

const placementExample = `<bo-menubar placement="bottom" aria-label="Bottom menu">
  <template #main>
    <bo-menubar-trigger label="Menu">
      <bo-menubar-item value="one">First item</bo-menubar-item>
    </bo-menubar-trigger>
  </template>
</bo-menubar>`;

const responsiveExample = `<bo-menubar class="w-[calc(100vw-2rem)]" aria-label="Responsive menu">
  <template #start><strong>Brand</strong></template>
  <template #main>
    <bo-menubar-trigger label="Overview" />
    <bo-menubar-trigger label="Projects" />
    <bo-menubar-trigger label="Reports" />
    <bo-menubar-trigger label="Settings" />
  </template>
</bo-menubar>`;

const keyboardExample = `<bo-menubar aria-label="Keyboard menu">
  <template #main>
    <bo-menubar-trigger label="Workspace">
      <bo-menubar-item value="overview">Overview</bo-menubar-item>
      <bo-menubar-item value="settings">Settings</bo-menubar-item>
    </bo-menubar-trigger>
    <bo-menubar-trigger label="Help">
      <bo-menubar-item value="docs">Documentation</bo-menubar-item>
    </bo-menubar-trigger>
  </template>
</bo-menubar>`;
</script>

# Menubar

`bo-menubar` is the application-level menu implementation. It renders as a floating, centered top bar by default, with menus opening below each top-level trigger. Use it for editor, workspace, or product navigation commands rather than ordinary page links.

## Basic Usage

Put top-level menus inside `bo-menubar-trigger`. Each trigger owns its menu items, and opening one trigger closes another.

<ExampleFrame :code="basicExample">
  <div class="min-h-24 w-full">
    <bo-menubar aria-label="Workspace menu">
      <template #start><strong>Bamboo</strong></template>
      <template #main>
        <bo-menubar-trigger label="Workspace">
          <bo-menubar-item value="overview" @select="selected = 'Overview'">Overview</bo-menubar-item>
          <bo-menubar-item value="settings" @select="selected = 'Settings'">Settings</bo-menubar-item>
        </bo-menubar-trigger>
        <bo-menubar-trigger label="Help">
          <bo-menubar-item value="docs">Documentation</bo-menubar-item>
        </bo-menubar-trigger>
      </template>
      <template #end><bo-button size="sm" kind="outline">Account</bo-button></template>
    </bo-menubar>
  </div>
  <span class="text-sm text-neutral-500">{{ selected }}</span>
</ExampleFrame>

## Floating Placement

The default `placement="top"` style fixes the bar four spacing units from the top of the viewport. Set `placement="bottom"` to float it above the bottom edge instead. The menu content follows the selected edge.

<ExampleFrame :code="placementExample">
  <div class="min-h-24 w-full">
    <bo-menubar placement="bottom" aria-label="Bottom menu">
      <template #main>
        <bo-menubar-trigger label="Menu">
          <bo-menubar-item value="one">First item</bo-menubar-item>
        </bo-menubar-trigger>
      </template>
    </bo-menubar>
  </div>
</ExampleFrame>

## Slots

Use `start`, `main`, and `end` to divide the bar into brand, menu, and trailing-action regions. `left` and `right` are aliases for `start` and `end`; the default slot is the fallback for `main`. The trigger also has a `trigger` slot for custom content.

<ExampleFrame :code="slotsExample">
  <div class="min-h-24 w-full">
    <bo-menubar aria-label="Workspace">
      <template #start>Workspace</template>
      <template #main>
        <bo-menubar-trigger>
          <template #trigger>Projects</template>
          <bo-menubar-item value="all">All projects</bo-menubar-item>
        </bo-menubar-trigger>
      </template>
      <template #end><span>Online</span></template>
    </bo-menubar>
  </div>
</ExampleFrame>

## Submenus, Labels, and Separators

Use `bo-menubar-label` and `bo-menubar-separator` to organize a menu. `bo-menubar-sub-trigger` opens a nested menu; its default slot contains the nested items and its `trigger` slot controls the visible label.

<ExampleFrame :code="submenuExample">
  <div class="min-h-32 w-full">
    <bo-menubar aria-label="View menu">
      <template #main>
        <bo-menubar-trigger label="View">
          <bo-menubar-label>Panels</bo-menubar-label>
          <bo-menubar-item icon="columns" value="sidebar">Sidebar</bo-menubar-item>
          <bo-menubar-separator />
          <bo-menubar-sub-trigger value="More">
            <template #trigger>More options</template>
            <bo-menubar-item value="focus">Focus mode</bo-menubar-item>
          </bo-menubar-sub-trigger>
        </bo-menubar-trigger>
      </template>
    </bo-menubar>
  </div>
</ExampleFrame>

## Item States and Presentation

Items support icons, shortcuts, inset alignment, disabled state, and a default or destructive variant.

<ExampleFrame :code="itemsExample">
  <div class="min-h-24 w-full">
    <bo-menubar>
      <template #main>
        <bo-menubar-trigger label="Actions">
          <bo-menubar-item icon="download" shortcut="Ctrl+D" value="download">
            Download
          </bo-menubar-item>
          <bo-menubar-item disabled value="unavailable">Unavailable</bo-menubar-item>
          <bo-menubar-item variant="destructive" value="delete">Delete</bo-menubar-item>
        </bo-menubar-trigger>
      </template>
    </bo-menubar>
  </div>
</ExampleFrame>

## Responsive Behavior

The floating bar is constrained to the viewport. Its `main` region scrolls horizontally when its triggers do not fit; start and end regions remain compact. Add your own class to set a wider bounded bar when required.

<ExampleFrame :code="responsiveExample">
  <div class="min-h-24 w-full">
    <bo-menubar class="w-[calc(100vw-2rem)]" aria-label="Responsive menu">
      <template #start><strong>Brand</strong></template>
      <template #main>
        <bo-menubar-trigger label="Overview" />
        <bo-menubar-trigger label="Projects" />
        <bo-menubar-trigger label="Reports" />
        <bo-menubar-trigger label="Settings" />
      </template>
    </bo-menubar>
  </div>
</ExampleFrame>

## Keyboard Interaction

- On a top-level trigger, `Enter`, `Space`, or `ArrowDown` opens the menu and focuses its first enabled item; `ArrowUp` opens it at the last item.
- `ArrowLeft` and `ArrowRight` move focus across enabled top-level triggers. `Home` and `End` move to the first and last trigger.
- Inside a menu, `ArrowUp`, `ArrowDown`, `Home`, and `End` move between enabled items.
- `ArrowRight` or `ArrowDown` opens a submenu; `ArrowLeft` or `Escape` closes it and returns focus to its trigger.
- `Escape` closes the active top-level menu and returns focus to its trigger.

<ExampleFrame :code="keyboardExample">
  <div class="min-h-24 w-full">
    <bo-menubar aria-label="Keyboard menu">
      <template #main>
        <bo-menubar-trigger label="Workspace">
          <bo-menubar-item value="overview">Overview</bo-menubar-item>
          <bo-menubar-item value="settings">Settings</bo-menubar-item>
        </bo-menubar-trigger>
        <bo-menubar-trigger label="Help">
          <bo-menubar-item value="docs">Documentation</bo-menubar-item>
        </bo-menubar-trigger>
      </template>
    </bo-menubar>
  </div>
</ExampleFrame>

## Usage Guidance

- Give the menubar a meaningful `aria-label` when the page has other navigation landmarks.
- Use menu items for commands and submenus for related command groups.
- Keep labels short so the floating bar remains usable at narrow widths.
- Do not use a menubar as a replacement for a responsive page navigation shell.

## API Reference

### `BoMenubar` Props

| Prop         | Type                 | Default       | Description                       |
| ------------ | -------------------- | ------------- | --------------------------------- |
| `id`         | `string`             | Autogenerated | The menubar id.                   |
| `dataTestId` | `string`             | Autogenerated | The test id attribute.            |
| `ariaLabel`  | `string`             | `Menu bar`    | Accessible name for the menubar.  |
| `placement`  | `BoMenubarPlacement` | `top`         | Floating edge: `top` or `bottom`. |

### `BoMenubar` Slots

| Name      | Description                              |
| --------- | ---------------------------------------- |
| `start`   | Content at the start of the bar.         |
| `left`    | Alias used when `start` is not provided. |
| `main`    | Top-level menu triggers.                 |
| `default` | Fallback content for the `main` region.  |
| `end`     | Content at the end of the bar.           |
| `right`   | Alias used when `end` is not provided.   |

### `BoMenubarTrigger` Props and Model

| Name         | Type      | Default       | Description                                     |
| ------------ | --------- | ------------- | ----------------------------------------------- |
| `id`         | `string`  | Autogenerated | Trigger id.                                     |
| `dataTestId` | `string`  | Autogenerated | The test id attribute.                          |
| `label`      | `string`  | -             | Trigger text when the `trigger` slot is absent. |
| `disabled`   | `boolean` | `false`       | Prevents opening and keyboard focus.            |
| `open`       | `boolean` | `false`       | Open state used by `v-model:open`.              |

| Event         | Payload   | Description                          |
| ------------- | --------- | ------------------------------------ |
| `update:open` | `boolean` | Emitted when this menu opens/closes. |

| Slot      | Description                        |
| --------- | ---------------------------------- |
| `trigger` | Visible top-level trigger content. |
| `default` | Menu items and menu primitives.    |

### `BoMenubarItem` Props and Events

| Prop         | Type                         | Default       | Description                                    |
| ------------ | ---------------------------- | ------------- | ---------------------------------------------- |
| `id`         | `string`                     | Autogenerated | Item id.                                       |
| `dataTestId` | `string`                     | Autogenerated | The test id attribute.                         |
| `value`      | `string \| number`           | -             | Value emitted on selection.                    |
| `disabled`   | `boolean`                    | `false`       | Prevents selection and focus.                  |
| `icon`       | `Icon`                       | -             | Icon before the item content.                  |
| `shortcut`   | `string`                     | -             | Keyboard hint rendered at the end of the item. |
| `inset`      | `boolean`                    | `false`       | Aligns the item with items that have icons.    |
| `variant`    | `'default' \| 'destructive'` | `default`     | Item presentation variant.                     |

| Event    | Payload                         | Description                      |
| -------- | ------------------------------- | -------------------------------- |
| `select` | `string \| number \| undefined` | Emitted when the item is chosen. |

### Other Components

| Component             | Props / model                       | Slots                | Description                         |
| --------------------- | ----------------------------------- | -------------------- | ----------------------------------- |
| `BoMenubarSubTrigger` | `value`, `disabled`, `v-model:open` | `trigger`, `default` | Opens a nested menu.                |
| `BoMenubarLabel`      | `id`, `dataTestId`                  | `default`            | Non-interactive menu label.         |
| `BoMenubarSeparator`  | `id`, `dataTestId`                  | -                    | Visual and semantic menu separator. |

`BoMenubarSubTrigger` also emits `update:open` when its nested menu changes state.
