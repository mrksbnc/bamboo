---
title: Navbar
description: A vertical navigation shell with top, middle, and bottom content slots.
category: navigation
tags: [navbar, navigation, responsive, accessibility]
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoButton, BoNavbar } from '@mrksbnc/bamboo-vue';
const isOpen = ref(false);
const example = `<bo-navbar v-model:open="isOpen">\n  <template #header>Bamboo</template>\n  <template #content>...</template>\n  <template #footer><bo-button>Sign in</bo-button></template>\n</bo-navbar>`;
const regionsExample = `<bo-navbar>
  <template #header>Workspace</template>
  <template #top><span>Team switcher</span></template>
  <template #content>Primary links</template>
  <template #middle>Secondary links</template>
  <template #bottom>Version 1.0</template>
  <template #footer>Account actions</template>
</bo-navbar>`;
</script>

# Navbar

`bo-navbar` is a top-to-bottom navigation shell. It fills the available height on larger screens, with a header, scrollable navigation content, and footer. On smaller screens the content collapses behind an accessible menu toggle.

## Responsive navigation

<ExampleFrame :code="example"><div class="flex min-h-96 w-full"><bo-navbar v-model:open="isOpen"><template #header><a href="/" class="font-semibold">Bamboo</a></template><template #content><a href="/" class="bo-navbar__link bo-navbar__link--active">Home</a><a href="/components" class="bo-navbar__link">Components</a><a href="/docs" class="bo-navbar__link">Docs</a></template><template #footer><bo-button kind="outline" size="sm">Sign in</bo-button></template></bo-navbar><p class="mt-3 text-sm text-neutral-500">Mobile menu: {{ isOpen ? 'open' : 'closed' }}</p></div></ExampleFrame>

## Multiple regions

The navbar is a vertical shell. Use the region slots to keep product identity, secondary content, navigation, and account actions separate instead of flattening everything into one link list.

<ExampleFrame :code="regionsExample"><div class="flex min-h-96 w-full"><bo-navbar><template #header>Workspace</template><template #top><span class="text-xs text-neutral-500">Team switcher</span></template><template #content><a href="/" class="bo-navbar__link">Primary links</a></template><template #middle><a href="/settings" class="bo-navbar__link">Secondary links</a></template><template #bottom><span class="text-xs text-neutral-500">Version 1.0</span></template><template #footer>Account actions</template></bo-navbar></div></ExampleFrame>

## States and composition

Use `header`, `content`, and `footer` for the primary regions. `top`, `middle`, and `bottom` are available for additional content in those regions. The legacy `brand`, `links`, and `actions` slots remain supported. Mark the current page with `bo-navbar__link--active` and `aria-current="page"`.

## Accessibility and responsive guidance

The toggle exposes `aria-expanded` and `aria-controls`; Escape closes the menu and returns focus to the toggle. Give the navbar a meaningful `aria-label` when more than one navigation landmark exists. Ensure links have a visible focus style, and keep mobile links at least 44px tall.

## API reference

| Prop        | Type      | Default           | Description                         |
| ----------- | --------- | ----------------- | ----------------------------------- |
| `open`      | `boolean` | `false`           | Mobile menu state (`v-model:open`). |
| `ariaLabel` | `string`  | `Main navigation` | Accessible landmark name.           |
| `id`        | `string`  | Generated         | Root element id.                    |

### Slots

| Slot      | Description                                           |
| --------- | ----------------------------------------------------- |
| `header`  | Logo or product name.                                 |
| `content` | Primary navigation links.                             |
| `footer`  | Sign-in, profile, or other actions.                   |
| `top`     | Additional content above navigation.                  |
| `middle`  | Additional content in the flexible navigation region. |
| `bottom`  | Additional content below navigation.                  |
