---
title: Accordion
description: Collapsible content panels for organizing information.
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoAccordion, BoAccordionItem } from '@/components/bo-accordion';
import { Icon } from '@/components/bo-icon';

const activeItem = ref('item1');
const multipleItems = ref(['item1']);
</script>

# Accordion

Collapsible content panels for organizing information with support for single or multiple open items.

## Basic Usage

Single accordion mode allows only one item to be open at a time.

```vue
<script setup lang="ts">
	import { ref } from 'vue';
	import { BoAccordion, BoAccordionItem } from '@/components/bo-accordion';

	const activeItem = ref('item1');
</script>

<template>
	<bo-accordion v-model="activeItem">
		<bo-accordion-item value="item1" title="What is Vue?">
			Vue is a progressive JavaScript framework for building user interfaces.
		</bo-accordion-item>
		<bo-accordion-item value="item2" title="What is Vite?">
			Vite is a build tool that provides a faster development experience.
		</bo-accordion-item>
	</bo-accordion>
</template>
```

<div style="margin-top: 1rem;">
  <bo-accordion v-model="activeItem">
    <bo-accordion-item value="item1" title="What is Vue?">
      Vue is a progressive JavaScript framework for building user interfaces.
    </bo-accordion-item>
    <bo-accordion-item value="item2" title="What is Vite?">
      Vite is a build tool that provides a faster development experience.
    </bo-accordion-item>
    <bo-accordion-item value="item3" title="What is TypeScript?">
      TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
    </bo-accordion-item>
  </bo-accordion>
</div>

## Multiple Mode

Enable multiple mode to allow multiple items to be open simultaneously. The `v-model` should be an array of strings.

```vue
<script setup lang="ts">
	import { ref } from 'vue';
	import { BoAccordion, BoAccordionItem } from '@/components/bo-accordion';

	const multipleItems = ref(['item1']);
</script>

<template>
	<bo-accordion v-model="multipleItems" multiple>
		<bo-accordion-item value="item1" title="Frontend">
			Vue, React, Angular, and other frontend frameworks.
		</bo-accordion-item>
		<bo-accordion-item value="item2" title="Backend">
			Node.js, Python, Java, and other backend technologies.
		</bo-accordion-item>
		<bo-accordion-item value="item3" title="Database">
			PostgreSQL, MongoDB, Redis, and other databases.
		</bo-accordion-item>
	</bo-accordion>
</template>
```

<div style="margin-top: 1rem;">
  <bo-accordion v-model="multipleItems" multiple>
    <bo-accordion-item value="item1" title="Frontend">
      Vue, React, Angular, and other frontend frameworks.
    </bo-accordion-item>
    <bo-accordion-item value="item2" title="Backend">
      Node.js, Python, Java, and other backend technologies.
    </bo-accordion-item>
    <bo-accordion-item value="item3" title="Database">
      PostgreSQL, MongoDB, Redis, and other databases.
    </bo-accordion-item>
  </bo-accordion>
</div>

## With Icons

Add custom icons to accordion items.

```vue
<bo-accordion v-model="activeItem">
  <bo-accordion-item value="item1" title="Settings" :icon="Icon.settings">
    Configure your application settings here.
  </bo-accordion-item>
  <bo-accordion-item value="item2" title="Profile" :icon="Icon.user">
    Manage your user profile information.
  </bo-accordion-item>
</bo-accordion>
```

<div style="margin-top: 1rem;">
  <bo-accordion v-model="activeItem">
    <bo-accordion-item value="settings" title="Settings" :icon="Icon.settings">
      Configure your application settings here.
    </bo-accordion-item>
    <bo-accordion-item value="profile" title="Profile" :icon="Icon.user">
      Manage your user profile information.
    </bo-accordion-item>
  </bo-accordion>
</div>

## Disabled Items

Disable specific accordion items to prevent interaction.

```vue
<bo-accordion v-model="activeItem">
  <bo-accordion-item value="item1" title="Available">
    This item is available for interaction.
  </bo-accordion-item>
  <bo-accordion-item value="item2" title="Disabled" disabled>
    This item is disabled and cannot be opened.
  </bo-accordion-item>
</bo-accordion>
```

<div style="margin-top: 1rem;">
  <bo-accordion v-model="activeItem">
    <bo-accordion-item value="available" title="Available">
      This item is available for interaction.
    </bo-accordion-item>
    <bo-accordion-item value="disabled" title="Disabled" disabled>
      This item is disabled and cannot be opened.
    </bo-accordion-item>
  </bo-accordion>
</div>

## Accessibility

The accordion component follows WAI-ARIA best practices:

- Uses proper ARIA attributes (`aria-expanded`, `aria-controls`, `aria-labelledby`)
- Keyboard accessible with proper focus management
- Screen reader friendly with semantic HTML and ARIA roles
- Disabled items are properly marked and not keyboard accessible

## API Reference

### BoAccordion Props

| Name             | Type                 | Default          | Description                                    |
| ---------------- | -------------------- | ---------------- | ---------------------------------------------- |
| `id`             | `string`             | Auto-generated   | The id of the accordion element                |
| `dataTestId`     | `string`             | `'bo-accordion'` | The data-testid attribute for testing          |
| `modelValue`     | `string \| string[]` | -                | Currently open item(s)                         |
| `multiple`       | `boolean`            | `false`          | Allow multiple items to be open simultaneously |
| `customCssClass` | `string`             | -                | Custom CSS classes for styling overrides       |

### BoAccordion Events

| Name                | Payload              | Description                        |
| ------------------- | -------------------- | ---------------------------------- |
| `update:modelValue` | `string \| string[]` | Emitted when the open items change |

### BoAccordionItem Props

| Name       | Type      | Default | Description                         |
| ---------- | --------- | ------- | ----------------------------------- |
| `value`    | `string`  | -       | Unique value for the item           |
| `title`    | `string`  | -       | Title of the accordion item         |
| `disabled` | `boolean` | `false` | Whether the item is disabled        |
| `icon`     | `Icon`    | -       | Custom icon to display before title |
