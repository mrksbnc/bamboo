---
title: Sidebar
description: Collapsible vertical navigation sidebar with floating and solid variants.
category: layout
tags:
  - sidebar
  - navigation
  - layout
  - sticky
  - fixed
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoSidebar, BoButton } from '@mrksbnc/bamboo-vue';

const collapsed = ref(false);
</script>

# Sidebar

`bo-sidebar` provides a vertical navigation surface with floating glassmorphic styling, optional borders, and a compact collapsed state for icon-only layouts.

## Basic Sidebar

<div class="flex gap-6">
  <bo-sidebar>
    <template #header>
      <div class="flex items-center gap-2 text-base font-semibold">
        <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">B</span>
        <span>Workspace</span>
      </div>
    </template>

    <nav class="flex flex-col gap-2 text-sm text-neutral-700 dark:text-neutral-200">
      <a class="font-medium" href="#">Dashboard</a>
      <a class="text-neutral-500 dark:text-neutral-400" href="#">Projects</a>
      <a class="text-neutral-500 dark:text-neutral-400" href="#">Activity</a>
      <a class="text-neutral-500 dark:text-neutral-400" href="#">Settings</a>
    </nav>

    <template #footer>
      <bo-button size="sm" variant="secondary" class="w-full">Invite teammates</bo-button>
    </template>

  </bo-sidebar>

  <div class="flex-1 rounded-xl border border-neutral-200/60 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-6 text-sm text-neutral-700 dark:text-neutral-200">
    Main content area
  </div>
</div>

```vue
<bo-sidebar>
  <template #header>...</template>
  <nav class="flex flex-col gap-2 text-sm">
    <a href="#">Dashboard</a>
    <a href="#">Projects</a>
    <a href="#">Activity</a>
  </nav>
  <template #footer>
    <bo-button size="sm" variant="secondary" class="w-full">Invite teammates</bo-button>
  </template>
</bo-sidebar>
```

## Collapsed Rail

Toggle the `collapsed` prop to shrink the sidebar to an icon rail. Use `collapsed-width` to control how narrow it becomes.

<div class="space-y-3">
  <div class="flex items-center gap-3">
    <bo-button size="sm" variant="secondary" @click="collapsed = !collapsed">
      {{ collapsed ? 'Expand sidebar' : 'Collapse sidebar' }}
    </bo-button>
  </div>
  <div class="flex gap-6">
    <bo-sidebar :collapsed="collapsed" collapsed-width="icon" width="base">
      <template #header>
        <div class="text-sm font-semibold">Navigation</div>
      </template>
      <nav class="flex flex-col gap-2 text-sm">
        <a href="#">Home</a>
        <a href="#">Teams</a>
        <a href="#">Calendar</a>
      </nav>
    </bo-sidebar>
    <div class="flex-1 rounded-xl border border-dashed border-neutral-300/80 dark:border-neutral-700/70 p-4 text-sm">
      Try collapsing to see the compact rail width.
    </div>
  </div>
</div>

```vue
<script setup>
	import { ref } from 'vue';

	const collapsed = ref(false);
</script>

<bo-sidebar :collapsed="collapsed" collapsed-width="icon">
  ...
</bo-sidebar>
<bo-button @click="collapsed = !collapsed">Toggle</bo-button>
```

## Variants and Widths

Blend the sidebar into your layout by switching variants or adjusting its width presets.

<div class="flex flex-col gap-4">
  <bo-sidebar variant="floating" width="narrow">
    <div class="text-sm font-medium">Floating (glass) narrow</div>
  </bo-sidebar>
  <bo-sidebar variant="solid" width="wide" :shadow="false">
    <div class="text-sm font-medium">Solid wide</div>
  </bo-sidebar>
  <bo-sidebar variant="minimal" :border="false" :shadow="false" :rounded="false">
    <div class="text-sm font-medium">Minimal frame</div>
  </bo-sidebar>
  <bo-sidebar variant="solid" width="wide" max-width="md">
    <div class="text-sm font-medium">Wide but capped at max-w-md</div>
  </bo-sidebar>
</div>

```vue
<bo-sidebar variant="floating" width="narrow">...</bo-sidebar>
<bo-sidebar variant="solid" width="wide" :shadow="false">...</bo-sidebar>
<bo-sidebar variant="minimal" :border="false" :shadow="false" :rounded="false">...</bo-sidebar>
<bo-sidebar variant="solid" width="wide" max-width="md">...</bo-sidebar>
```

## Position and Side

Set `position` to `sticky`, `fixed`, or `static`, and choose which side of the viewport it anchors to.

<div class="flex flex-col gap-3">
  <bo-sidebar position="sticky" offset="md">
    <div class="text-sm font-medium">Sticky left (default)</div>
  </bo-sidebar>
  <bo-sidebar position="fixed" side="right" offset="sm" variant="solid">
    <div class="text-sm font-medium">Fixed right @ top-2</div>
  </bo-sidebar>
</div>

```vue
<bo-sidebar position="sticky" offset="md">...</bo-sidebar>
<bo-sidebar position="fixed" side="right" offset="sm" variant="solid">...</bo-sidebar>
```
