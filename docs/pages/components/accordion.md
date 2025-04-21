# Accordion

The Accordion component is a collapsible content panel that helps organize and present information in expandable sections. This pattern is especially useful when you want to provide users with the ability to show and hide related content, saving space and reducing visual clutter.

## Basic Usage

Use the `BoAccordion` component for a simple expandable section:

```vue
<template>
	<bo-accordion title="Frequently Asked Questions">
		<p>The answers to all your questions can be found here.</p>
	</bo-accordion>
</template>
```

## Multiple Accordions

For multiple accordion items, wrap them in a `BoAccordionContainer`:

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

```vue
<template>
	<bo-accordion-container :always-open="true">
		<bo-accordion
			title="Section 1"
			:open="true"
			>Content 1</bo-accordion
		>
		<bo-accordion title="Section 2">Content 2</bo-accordion>
	</bo-accordion-container>
</template>
```

## Custom Icons

You can customize both the prefix icon (before the title) and the expand/collapse icon:

```vue
<template>
	<bo-accordion
		title="Section with Custom Icons"
		:prefix-icon="Icon.info"
		:custom-icon="Icon.arrow_down"
	>
		Content with custom icons
	</bo-accordion>
</template>

<script setup>
import { Icon } from '@/components/bo-icon';
</script>
```

## Disabled Accordion

You can disable an accordion to prevent it from being toggled:

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

## API Reference

### BoAccordion Props

| Prop         | Type      | Default        | Description                                       |
| ------------ | --------- | -------------- | ------------------------------------------------- |
| `title`      | `string`  | `''`           | Title displayed in the accordion header           |
| `open`       | `boolean` | `false`        | Whether the accordion is open by default          |
| `disabled`   | `boolean` | `false`        | Disables the accordion                            |
| `prefixIcon` | `Icon`    | `Icon.none`    | Icon to display before the title                  |
| `customIcon` | `Icon`    | `Icon.none`    | Custom icon for the expand/collapse indicator     |
| `id`         | `string`  | auto-generated | Unique ID for the accordion item                  |
| `className`  | `string`  | `''`           | Custom CSS class to apply to the accordion header |

### BoAccordionContainer Props

| Prop            | Type      | Default | Description                                             |
| --------------- | --------- | ------- | ------------------------------------------------------- |
| `allowMultiple` | `boolean` | `false` | Allow multiple accordion items to be open at once       |
| `alwaysOpen`    | `boolean` | `false` | Keep at least one accordion item open                   |
| `defaultOpen`   | `string`  | `''`    | ID of the accordion item that should be open by default |

### BoAccordion Events

| Event    | Payload                         | Description                                    |
| -------- | ------------------------------- | ---------------------------------------------- |
| `toggle` | `{ id: string, open: boolean }` | Emitted when the accordion is opened or closed |

## Accessibility

The accordion component follows accessibility best practices:

- Uses appropriate ARIA attributes (`aria-expanded`, `aria-controls`, etc.)
- Supports keyboard navigation
- Provides visual indication of the current state
- Labels interactive elements appropriately

## Best Practices

- Use accordions to organize related content into manageable sections
- Keep accordion titles short, clear, and descriptive
- Consider starting with the most important accordion section open by default
- Avoid nesting accordions too deeply
- Use accordions for content that's supplementary, not for critical information
- Test with keyboard navigation to ensure accessibility
