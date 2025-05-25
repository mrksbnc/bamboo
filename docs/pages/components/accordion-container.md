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

<script setup>
import { BoAccordionContainer, BoAccordion } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex flex-col gap-4 my-4">
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
</div>

## Props

| Name                | Type      | Default        | Description                                                 |
| ------------------- | --------- | -------------- | ----------------------------------------------------------- |
| `id`                | `string`  | auto-generated | Unique ID for the accordion container                       |
| `allowMultiple`     | `boolean` | `false`        | Whether multiple accordion items can be open simultaneously |
| `alwaysOpen`        | `boolean` | `false`        | Whether at least one accordion item must remain open        |
| `defaultOpenItemId` | `string`  | `''`           | The ID of the accordion item that should be open by default |

## Types

```ts
interface BoAccordionContainerProps {
	/** Unique ID for the accordion container, used for accessibility and testing */
	id?: string;
	/** Whether to allow multiple accordion items to be open at once */
	allowMultiple?: boolean;
	/** Whether to keep at least one accordion item open */
	alwaysOpen?: boolean;
	/** The ID of the accordion item that should be open by default */
	defaultOpenItemId?: string;
}
```

## Container Options

### Multiple Open Items

<div class="flex flex-col gap-4 my-4">
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
</div>

```vue
<bo-accordion-container :allow-multiple="true">
	<bo-accordion title="Section 1">Content 1</bo-accordion>
	<bo-accordion title="Section 2">Content 2</bo-accordion>
	<bo-accordion title="Section 3">Content 3</bo-accordion>
</bo-accordion-container>
```

### Always Keep One Open

<div class="flex flex-col gap-4 my-4">
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
</div>

```vue
<bo-accordion-container :always-open="true">
	<bo-accordion title="Section 1" :open="true">Content 1</bo-accordion>
	<bo-accordion title="Section 2">Content 2</bo-accordion>
	<bo-accordion title="Section 3">Content 3</bo-accordion>
</bo-accordion-container>
```

### Default Open Item

<div class="flex flex-col gap-4 my-4">
	<bo-accordion-container default-open-item-id="section-2">
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
</div>

```vue
<bo-accordion-container default-open-item-id="section-2">
	<bo-accordion id="section-1" title="Section 1">Content 1</bo-accordion>
	<bo-accordion id="section-2" title="Section 2">Content 2</bo-accordion>
	<bo-accordion id="section-3" title="Section 3">Content 3</bo-accordion>
</bo-accordion-container>
```

## Slots

| Name      | Description                                        |
| --------- | -------------------------------------------------- |
| `default` | The accordion items to be managed by the container |

## Event Handling

The accordion container doesn't emit events directly, but manages the state of child accordion components. Listen to individual accordion events for state changes:

```vue
<template>
	<bo-accordion-container>
		<bo-accordion
			title="Section 1"
			@toggle="onToggle"
		>
			Content 1
		</bo-accordion>
		<bo-accordion
			title="Section 2"
			@toggle="onToggle"
		>
			Content 2
		</bo-accordion>
	</bo-accordion-container>
</template>

<script setup>
const onToggle = (event) => {
	console.log(`Accordion ${event.id} is now ${event.open ? 'open' : 'closed'}`);
};
</script>
```
