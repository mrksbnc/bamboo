# BoAccordion Component

The `BoAccordion` component is a collapsible content panel that displays sections of content. It's useful for reducing visual clutter and organizing information into expandable sections.

## Usage

### Basic Accordion

```vue
<template>
	<bo-accordion title="Section Title">
		This is the content that will be shown or hidden.
	</bo-accordion>
</template>
```

### Accordion Container (for multiple items)

```vue
<template>
	<bo-accordion-container>
		<bo-accordion title="Section 1"> Content for section 1 </bo-accordion>
		<bo-accordion title="Section 2"> Content for section 2 </bo-accordion>
	</bo-accordion-container>
</template>
```

## Props

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

## Events

### BoAccordion Events

| Event    | Payload                         | Description                                    |
| -------- | ------------------------------- | ---------------------------------------------- |
| `toggle` | `{ id: string, open: boolean }` | Emitted when the accordion is opened or closed |

## Examples

### Allow Multiple Open Items

```vue
<template>
	<bo-accordion-container :allow-multiple="true">
		<bo-accordion title="Section 1">Content 1</bo-accordion>
		<bo-accordion title="Section 2">Content 2</bo-accordion>
		<bo-accordion title="Section 3">Content 3</bo-accordion>
	</bo-accordion-container>
</template>
```

### Always Keep One Open

```vue
<template>
	<bo-accordion-container :always-open="true">
		<bo-accordion title="Section 1">Content 1</bo-accordion>
		<bo-accordion title="Section 2">Content 2</bo-accordion>
	</bo-accordion-container>
</template>
```

### With Custom Icons

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

### Disabled Accordion

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
