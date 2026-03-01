---
title: Navbar
description: Floating top navigation bar with brand, navigation, and action slots.
---

<script setup lang="ts">
import { BoNavbar, BoButton } from '@mrksbnc/bamboo-vue';
</script>

# Navbar

The `bo-navbar` component gives you a floating, sticky, or fixed top bar with dedicated slots for brand, navigation links, and right-aligned actions.

## Basic Floating Navbar

<div class="p-4 bg-linear-to-r from-neutral-100 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-950 rounded-2xl">
  <bo-navbar>
    <template #brand>
      <div class="flex items-center gap-2 font-semibold text-lg">
        <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">B</span>
        <span>Bamboo</span>
      </div>
    </template>
    <div class="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-200">
      <a class="font-medium" href="#">Overview</a>
      <a class="text-neutral-500 dark:text-neutral-400" href="#">Components</a>
      <a class="text-neutral-500 dark:text-neutral-400" href="#">Pricing</a>
    </div>
    <template #actions>
      <div class="flex items-center gap-2">
        <bo-button size="sm" variant="secondary">Docs</bo-button>
        <bo-button size="sm">Get Started</bo-button>
      </div>
    </template>
  </bo-navbar>
  <div class="mt-6 text-sm text-neutral-600 dark:text-neutral-300">
    Content scrolls underneath while the navbar stays floating with blur, border, and shadow.
  </div>
</div>

```vue
<bo-navbar>
  <template #brand>
    <div class="flex items-center gap-2 font-semibold text-lg">
      <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">B</span>
      <span>Bamboo</span>
    </div>
  </template>
  <div class="flex items-center gap-3 text-sm">
    <a class="font-medium" href="#">Overview</a>
    <a class="text-neutral-500" href="#">Components</a>
    <a class="text-neutral-500" href="#">Pricing</a>
  </div>
  <template #actions>
    <bo-button size="sm" variant="secondary">Docs</bo-button>
    <bo-button size="sm">Get Started</bo-button>
  </template>
</bo-navbar>
```

## Variants

Use the `variant` prop to switch between floating (glassmorphic), solid, or minimal looks.

<div class="flex flex-col gap-4">
  <bo-navbar variant="floating">
    <div class="flex gap-3 text-sm">
      <span class="font-semibold">Floating</span>
      <span class="text-neutral-500 dark:text-neutral-400">Default</span>
    </div>
  </bo-navbar>
  <bo-navbar variant="solid" :shadow="false">
    <div class="flex gap-3 text-sm">
      <span class="font-semibold">Solid</span>
      <span class="text-neutral-500 dark:text-neutral-400">No blur</span>
    </div>
  </bo-navbar>
  <bo-navbar variant="minimal" :border="false" :shadow="false" :rounded="false" padding="sm">
    <div class="flex gap-3 text-sm">
      <span class="font-semibold">Minimal</span>
      <span class="text-neutral-500 dark:text-neutral-400">Flat surface</span>
    </div>
  </bo-navbar>
</div>

```vue
<bo-navbar variant="floating">...</bo-navbar>
<bo-navbar variant="solid" :shadow="false">...</bo-navbar>
<bo-navbar
	variant="minimal"
	:border="false"
	:shadow="false"
	:rounded="false"
	padding="sm"
>...</bo-navbar>
```

## Layout Controls

Toggle borders, rounding, and shadow to blend the navbar into surrounding content.

<div class="flex flex-col gap-3">
  <bo-navbar :border="false" :shadow="false" variant="minimal" padding="lg">
    <div class="text-sm">Borderless and flat</div>
  </bo-navbar>
  <bo-navbar :rounded="false" variant="solid">
    <div class="text-sm">Squared corners</div>
  </bo-navbar>
</div>

```vue
<bo-navbar :border="false" :shadow="false" variant="minimal" padding="lg">...</bo-navbar>
<bo-navbar :rounded="false" variant="solid">...</bo-navbar>
```
