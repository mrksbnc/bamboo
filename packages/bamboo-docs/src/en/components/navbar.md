---
title: Navbar
description: A responsive navigation bar component for website headers and primary navigation
category: navigation
tags:
  - navbar
  - navigation
  - header
  - menu
  - responsive
outline: deep
---

<script setup lang="ts">
import { BoNavbar, BoButton } from '@mrksbnc/bamboo-vue'
</script>

# Navbar

The `bo-navbar` component provides a responsive navigation bar for website headers, containing branding, navigation links, and user actions.

## Basic Usage

::: raw
<bo-navbar>
<template #brand>

<div class="flex items-center space-x-2">
<div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">B</div>
<span class="font-semibold text-lg">Bamboo</span>
</div>
</template>

<template #nav>

<nav class="flex space-x-6">
<a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Home</a>
<a href="#" class="text-gray-700 hover:text-blue-600 font-medium">About</a>
<a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Services</a>
<a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
</nav>
</template>

<template #actions>

<div class="flex items-center space-x-3">
<bo-button variant="secondary" size="sm">Sign In</bo-button>
<bo-button size="sm">Sign Up</bo-button>
</div>
</template>
</bo-navbar>
:::

```vue
<bo-navbar>
  <template #brand>
    <div class="flex items-center space-x-2">
      <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">B</div>
      <span class="font-semibold text-lg">Bamboo</span>
    </div>
  </template>
  
  <template #nav>
    <nav class="flex space-x-6">
      <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Home</a>
      <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">About</a>
      <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Services</a>
      <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
    </nav>
  </template>
  
  <template #actions>
    <div class="flex items-center space-x-3">
      <bo-button variant="secondary" size="sm">Sign In</bo-button>
      <bo-button size="sm">Sign Up</bo-button>
    </div>
  </template>
</bo-navbar>
```

## Variants

Navbars support different visual variants to match your design system.

::: raw

<div class="space-y-4">
  <bo-navbar variant="default">
    <template #brand>
      <span class="font-semibold text-lg">Default Navbar</span>
    </template>
    <template #nav>
      <nav class="flex space-x-4">
        <a href="#" class="text-gray-700 hover:text-blue-600">Home</a>
        <a href="#" class="text-gray-700 hover:text-blue-600">About</a>
      </nav>
    </template>
  </bo-navbar>
  
  <bo-navbar variant="transparent">
    <template #brand>
      <span class="font-semibold text-lg">Transparent Navbar</span>
    </template>
    <template #nav>
      <nav class="flex space-x-4">
        <a href="#" class="text-gray-700 hover:text-blue-600">Home</a>
        <a href="#" class="text-gray-700 hover:text-blue-600">About</a>
      </nav>
    </template>
  </bo-navbar>
</div>
:::

```vue
<!-- Default variant -->
<bo-navbar variant="default">
  <template #brand>
    <span class="font-semibold text-lg">Default Navbar</span>
  </template>
  <template #nav>
    <nav class="flex space-x-4">
      <a href="#" class="text-gray-700 hover:text-blue-600">Home</a>
      <a href="#" class="text-gray-700 hover:text-blue-600">About</a>
    </nav>
  </template>
</bo-navbar>

<!-- Transparent variant -->
<bo-navbar variant="transparent">
  <template #brand>
    <span class="font-semibold text-lg">Transparent Navbar</span>
  </template>
  <template #nav>
    <nav class="flex space-x-4">
      <a href="#" class="text-gray-700 hover:text-blue-600">Home</a>
      <a href="#" class="text-gray-700 hover:text-blue-600">About</a>
    </nav>
  </template>
</bo-navbar>
```
