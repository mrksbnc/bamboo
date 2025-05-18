<script setup>
import { Icon } from '@/components/icon/bo-icon';
import BoBadge from '@/components/badge/bo-badge.vue';
import BoAccordion from '@/components/accordion/bo-accordion.vue';
import BoAccordionContainer from '@/components/accordion/bo-accordion-container.vue';
</script>

# Accordion

The Accordion component is a collapsible content panel that helps organize and present information in expandable sections. This pattern is especially useful when you want to provide users with the ability to show and hide related content, saving space and reducing visual clutter.

## Basic Usage

```js
import { BoAccordion } from '@mrksbnc/bamboo';
```

```vue
<template>
	<bo-accordion title="Frequently Asked Questions">
		<p>The answers to all your questions can be found here.</p>
	</bo-accordion>
</template>
```

<bo-accordion title="Frequently Asked Questions">
	<template #default>
		<div class="flex flex-col items-center gap-2">
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.</p>
			<p>The answers to all your questions can be found here.</p>
		</div>
	</template>
</bo-accordion>

### BoAccordion Props

| Prop                 | Type      | Default             | Description                                             |
| -------------------- | --------- | ------------------- | ------------------------------------------------------- |
| `id`                 | `string`  | auto-generated      | Unique ID for the accordion item                        |
| `title`              | `string`  | `''`                | Title displayed in the accordion header                 |
| `open`               | `boolean` | `false`             | Whether the accordion is open by default                |
| `disabled`           | `boolean` | `false`             | Disables the accordion                                  |
| `prefix-icon`        | `Icon`    | `Icon.none`         | Icon to display before the title                        |
| `custom-toggle-icon` | `Icon`    | `Icon.chevron_down` | Custom icon for the expand/collapse indicator           |
| `allow-multiple`     | `boolean` | `false`             | Allow multiple accordion items to be open at once       |
| `always-open`        | `boolean` | `false`             | Keep at least one accordion item open                   |
| `default-open`       | `string`  | `''`                | ID of the accordion item that should be open by default |

### Slots

| Name      | Description                                 |
| --------- | ------------------------------------------- |
| `default` | The content inside the accordion body slot. |

### Events

| Event    | Payload                         | Description                                    |
| -------- | ------------------------------- | ---------------------------------------------- |
| `toggle` | `{ id: string, open: boolean }` | Emitted when the accordion is opened or closed |

## Types

```ts
interface BoAccordionProps {
	/** Unique ID for the accordion, used for accessibility and testing */
	id?: string;
	/** The title of the accordion item */
	title?: string;
	/** Whether the accordion is open by default */
	open?: boolean;
	disabled?: boolean;
	/** Prefix icon for the accordion item */
	prefixIcon?: Icon;
	/**
	 * Custom icon for the expand/collapse indicator
	 * @default Icon.chevron_down
	 */
	customToggleIcon?: Icon;
}

interface BoAccordionContainerProps {
	/** Whether to allow multiple accordion items to be open at once */
	allowMultiple?: boolean;
	/** Whether to keep at least one accordion item open */
	alwaysOpen?: boolean;
	/** The initial open accordion item Id */
	defaultOpenItemId?: string;
}

interface AccordionGroup {
	openItems: Set<string>;
	toggle: (id: string) => void;
	registerItem: (id: string, initialOpen: boolean) => void;
}
```

## Disabled Accordion

You can disable an accordion to prevent it from being toggled:

<bo-accordion title="Disabled Section" :disabled="true">This content cannot be accessed</bo-accordion>

```vue
<template>
	<bo-accordion
		title="Disabled Section"
		:disabled="true"
	>
		This content cannot be accessed
	</bo-accordion>
</template>
```

## Multiple Accordions

For multiple accordion items, wrap them in a `BoAccordionContainer`:

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

```vue
<template>
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
</template>
```

## Multiple Open Items

By default, only one accordion item can be open at a time. To allow multiple open items, use the `allow-multiple` prop:

<bo-accordion-container :allow-multiple="true">
	<bo-accordion title="Section 1">Content 1</bo-accordion>
	<bo-accordion title="Section 2">Content 2</bo-accordion>
	<bo-accordion title="Section 3">Content 3</bo-accordion>
</bo-accordion-container>

```vue
<template>
	<bo-accordion-container :allow-multiple="true">
		<bo-accordion title="Section 1">Content 1</bo-accordion>
		<bo-accordion title="Section 2">Content 2</bo-accordion>
		<bo-accordion title="Section 3">Content 3</bo-accordion>
	</bo-accordion-container>
</template>
```

## Always Keep One Open

To ensure at least one accordion is always open, use the `always-open` prop:

<bo-accordion-container :always-open="true">
	<bo-accordion
		title="Section 1"
		:open="true"
	>
		Content 1
	</bo-accordion>
	<bo-accordion title="Section 2">Content 2</bo-accordion>
</bo-accordion-container>

```vue
<template>
	<bo-accordion-container :always-open="true">
		<bo-accordion
			title="Section 1"
			:open="true"
		>
			Content 1
		</bo-accordion>
		<bo-accordion title="Section 2">Content 2</bo-accordion>
	</bo-accordion-container>
</template>
```

## Prefix Icon

You can add a prefix icon to the accordion header:

<bo-accordion title="Section 1" prefix-icon="info">Content 1</bo-accordion>

```vue
<template>
	<bo-accordion
		title="Section with Prefix Icon"
		prefix-icon="info"
	>
		Content
	</bo-accordion>
</template>
```

## Custom toggle icon

You can customize the expand/collapse icon:

<bo-accordion title="Section with Custom Icons" custom-toggle-icon="x">Content with custom icons</bo-accordion>

```vue
<bo-accordion title="Section with Custom Icons" custom-toggle-icon="x">
	Content with custom icons
</bo-accordion>
```
