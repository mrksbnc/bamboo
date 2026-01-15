---
title: Components Overview
---

# Components Overview

<div class="bg-blue-500 text-white p-4 rounded-lg mb-4">
  This is a test to see if Tailwind CSS is working properly.
</div>

Bamboo provides a collection of lightweight and flexible Vue components designed to help you build modern user interfaces quickly and efficiently.

## Available Components

### Text Components

- [BoText](./bo-text.md) - A versatile text component with customizable typography

## Getting Started

All components are designed to work seamlessly with Tailwind CSS and follow consistent design patterns. Each component is fully customizable and supports both light and dark themes.

## Usage

Import components from the Bamboo Vue package:

```vue
<script setup>
	import { BoText } from '@mrksbnc/bamboo-vue';
</script>

<template>
	<BoText value="Hello, World!" size="xl" weight="semibold" />
</template>
```

## Styling

Components can be styled using:

- Built-in props for common styling options
- Custom CSS classes
- Tailwind CSS utilities
- CSS custom properties

For more information about styling, see the [Styles](../styles/colors.md) section.
