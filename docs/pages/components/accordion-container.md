<script setup>
import BoAccordion from '@/components/accordion/bo-accordion.vue';
import BoAccordionContainer from '@/components/accordion/bo-accordion-container.vue';
</script>

# Accordion Container

The `BoAccordionContainer` component is a wrapper component that manages multiple accordion items. It provides functionality for controlling how accordion items interact with each other, such as allowing multiple items to be open simultaneously or ensuring at least one item remains open.

```js
import { BoAccordionContainer } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-accordion-container>
		<bo-accordion title="Section 1">Content 1</bo-accordion>
		<bo-accordion title="Section 2">Content 2</bo-accordion>
		<bo-accordion title="Section 3">Content 3</bo-accordion>
	</bo-accordion-container>
</template>
```

<bo-accordion-container>
	<bo-accordion title="What is Bamboo?">
		Bamboo is a UI component library built with Vue 3 and Tailwind CSS.
	</bo-accordion>
	<bo-accordion title="How do I install it?">
		You can install Bamboo using npm or yarn.
	</bo-accordion>
	<bo-accordion title="Is it customizable?">
		Yes, every component is highly customizable using props and slots.
	</bo-accordion>
</bo-accordion-container>

## Props

| Prop            | Type      | Default | Description                                                 |
| --------------- | --------- | ------- | ----------------------------------------------------------- |
| `allowMultiple` | `boolean` | `false` | Whether multiple accordion items can be open simultaneously |
| `alwaysOpen`    | `boolean` | `false` | Whether at least one accordion item must remain open        |
| `defaultOpen`   | `string`  | `''`    | The ID of the accordion item that should be open by default |

## Types

```ts
interface BoAccordionContainerProps {
	/**
	 * Whether to allow multiple accordion items to be open at once
	 * @default false
	 */
	allowMultiple?: boolean;
	/**
	 * Whether to keep at least one accordion item open
	 * @default false
	 */
	alwaysOpen?: boolean;
	/**
	 * The ID of the accordion item that should be open by default
	 * @default ''
	 */
	defaultOpen?: string;
}
```

## Multiple Open Items

By default, only one accordion item can be open at a time. To allow multiple open items, use the `allowMultiple` prop:

```vue
<template>
	<bo-accordion-container :allow-multiple="true">
		<bo-accordion title="Section 1">Content 1</bo-accordion>
		<bo-accordion title="Section 2">Content 2</bo-accordion>
		<bo-accordion title="Section 3">Content 3</bo-accordion>
	</bo-accordion-container>
</template>
```

<bo-accordion-container :allow-multiple="true">
	<bo-accordion title="Section 1">
		<p>Content for section 1</p>
	</bo-accordion>
	<bo-accordion title="Section 2">
		<p>Content for section 2</p>
	</bo-accordion>
	<bo-accordion title="Section 3">
		<p>Content for section 3</p>
	</bo-accordion>
</bo-accordion-container>

## Always Keep One Open

To ensure at least one accordion is always open, use the `alwaysOpen` prop:

```vue
<template>
	<bo-accordion-container :always-open="true">
		<bo-accordion
			title="Section 1"
			:open="true"
			>Content 1</bo-accordion
		>
		<bo-accordion title="Section 2">Content 2</bo-accordion>
		<bo-accordion title="Section 3">Content 3</bo-accordion>
	</bo-accordion-container>
</template>
```

<bo-accordion-container :always-open="true">
	<bo-accordion title="Section 1" :open="true">
		<p>Content for section 1</p>
	</bo-accordion>
	<bo-accordion title="Section 2">
		<p>Content for section 2</p>
	</bo-accordion>
	<bo-accordion title="Section 3">
		<p>Content for section 3</p>
	</bo-accordion>
</bo-accordion-container>

## Default Open Item

To specify which accordion item should be open by default, use the `defaultOpen` prop with the ID of the desired accordion:

```vue
<template>
	<bo-accordion-container default-open="section-2">
		<bo-accordion
			id="section-1"
			title="Section 1"
			>Content 1</bo-accordion
		>
		<bo-accordion
			id="section-2"
			title="Section 2"
			>Content 2</bo-accordion
		>
		<bo-accordion
			id="section-3"
			title="Section 3"
			>Content 3</bo-accordion
		>
	</bo-accordion-container>
</template>
```

<bo-accordion-container default-open="section-2">
	<bo-accordion id="section-1" title="Section 1">
		<p>Content for section 1</p>
	</bo-accordion>
	<bo-accordion id="section-2" title="Section 2">
		<p>Content for section 2</p>
	</bo-accordion>
	<bo-accordion id="section-3" title="Section 3">
		<p>Content for section 3</p>
	</bo-accordion>
</bo-accordion-container>
