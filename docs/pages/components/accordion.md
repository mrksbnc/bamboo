<script setup>
import { Icon } from '@/components/icon/bo-icon';
import BoAccordion from '@/components/accordion/bo-accordion.vue';
import BoAccordionContainer from '@/components/accordion/bo-accordion-container.vue';
</script>

# Accordion

A flexible, accessible collapsible panel for organizing content. Supports single and grouped usage, custom icons, backgrounds, and full dark mode.

```js
import { BoAccordion, BoAccordionContainer } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-accordion title="Frequently Asked Questions">
		<p>The answers to all your questions can be found here.</p>
	</bo-accordion>
</template>

<script setup>
import { BoAccordion } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="Frequently Asked Questions">
		<template #default>
			<div class="flex flex-col gap-2">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
				<p>The answers to all your questions can be found here.</p>
			</div>
		</template>
	</bo-accordion>
</div>

## Props

### BoAccordion Props

| Name                    | Type      | Default             | Description                                                      |
| ----------------------- | --------- | ------------------- | ---------------------------------------------------------------- |
| `id`                    | `string`  | auto-generated      | Unique ID for the accordion item                                 |
| `title`                 | `string`  | `''`                | Title displayed in the accordion header                          |
| `ariaLabel`             | `string`  |                     | Custom accessible label for screen readers (falls back to title) |
| `open`                  | `boolean` | `false`             | Whether the accordion is open by default                         |
| `disabled`              | `boolean` | `false`             | Disables the accordion                                           |
| `prefixIcon`            | `Icon`    | `Icon.none`         | Icon to display before the title                                 |
| `customToggleIcon`      | `Icon`    | `Icon.chevron_down` | Custom icon for the expand/collapse indicator                    |
| `shape`                 | `string`  | `'rounded'`         | Shape of the accordion: `'rounded'` or `'square'`                |
| `headerBackgroundColor` | `string`  |                     | Custom header background (Tailwind/CSS classes)                  |
| `bodyBackgroundColor`   | `string`  |                     | Custom body background (Tailwind/CSS classes)                    |
| `isFirst`               | `boolean` |                     | (Internal) True if this is the first item in a group             |
| `isLast`                | `boolean` |                     | (Internal) True if this is the last item in a group              |
| `headerTextColor`       | `string`  |                     | Custom text color for the header (Tailwind/CSS classes)          |
| `bodyTextColor`         | `string`  |                     | Custom text color for the body (Tailwind/CSS classes)            |

### BoAccordionContainer Props

| Name                | Type      | Default        | Description                                                 |
| ------------------- | --------- | -------------- | ----------------------------------------------------------- |
| `id`                | `string`  | auto-generated | Unique ID for the accordion container                       |
| `allowMultiple`     | `boolean` | `false`        | Whether multiple accordion items can be open simultaneously |
| `alwaysOpen`        | `boolean` | `false`        | Whether at least one accordion item must remain open        |
| `defaultOpenItemId` | `string`  | `''`           | The ID of the accordion item that should be open by default |

## Events

| Name     | Payload                         | Description                                    |
| -------- | ------------------------------- | ---------------------------------------------- |
| `toggle` | `{ id: string, open: boolean }` | Emitted when the accordion is opened or closed |

## Slots

| Name      | Description                                          |
| --------- | ---------------------------------------------------- |
| `default` | The content inside the accordion body slot           |
| `header`  | Custom header (receives `{ isOpen, toggle, props }`) |

## Types

```ts
enum BoAccordionShape {
	rounded = 'rounded',
	square = 'square',
}

interface BoAccordionProps {
	/** Unique ID for the accordion, used for accessibility and testing */
	id?: string;
	/** The title of the accordion item */
	title?: string;
	/** Custom accessible label for screen readers (falls back to title) */
	ariaLabel?: string;
	/** Whether the accordion is opened by default */
	open?: boolean;
	/** Whether the accordion is disabled */
	disabled?: boolean;
	/** Prefix icon for the accordion item */
	prefixIcon?: Icon;
	/** Shape of the accordion item */
	shape?: BoAccordionShape;
	/**
	 * Custom icon for the expand/collapse indicator
	 * @default Icon.chevron_down
	 */
	customToggleIcon?: Icon;
	/** Custom background color for the header (accepts Tailwind or CSS classes) */
	headerBackgroundColor?: string;
	/** Custom background color for the body (accepts Tailwind or CSS classes) */
	bodyBackgroundColor?: string;
	/** True if this accordion is the first in a group */
	isFirst?: boolean;
	/** True if this accordion is the last in a group */
	isLast?: boolean;
	/** Custom text color for the header (accepts Tailwind or CSS classes) */
	headerTextColor?: string;
	/** Custom text color for the body (accepts Tailwind or CSS classes) */
	bodyTextColor?: string;
}

interface BoAccordionContainerProps {
	/** Unique ID for the accordion container, used for accessibility and testing */
	id?: string;
	/** Whether to allow multiple accordion items to be open at once */
	allowMultiple?: boolean;
	/** Whether to keep at least one accordion item open */
	alwaysOpen?: boolean;
	/** The initial open accordion item Id */
	defaultOpenItemId?: string;
}

interface AccordionGroup {
	/** The currently open accordion items */
	openItems: Set<string>;
	/** Toggle an accordion item */
	toggle: (id: string) => void;
	/** Register an accordion item on the accordion group */
	registerItem: (id: string, initialOpen: boolean) => void;
}
```

## Variants

All shape values must be documented with visual examples:

<div class="flex gap-4 items-center my-4">
	<bo-accordion title="Rounded" shape="rounded">Rounded shape</bo-accordion>
	<bo-accordion title="Square" shape="square">Square shape</bo-accordion>
</div>

```vue
<bo-accordion title="Rounded" shape="rounded">Rounded shape</bo-accordion>
<bo-accordion title="Square" shape="square">Square shape</bo-accordion>
```

## States

### Open by Default

<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="Open by Default" :open="true">
		<p>This accordion starts in an open state.</p>
	</bo-accordion>
</div>

```vue
<bo-accordion title="Open by Default" :open="true">
	<p>This accordion starts in an open state.</p>
</bo-accordion>
```

### Disabled

<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="Disabled Accordion" disabled>
		<p>This content cannot be accessed because the accordion is disabled.</p>
	</bo-accordion>
</div>

```vue
<bo-accordion title="Disabled Accordion" disabled>
	<p>This content cannot be accessed because the accordion is disabled.</p>
</bo-accordion>
```

## Content Variations

### Custom Header

<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="Custom Header">
		<template #header="{ isOpen, toggle, props }">
			<div @click="toggle">Custom Header (Open: {{ isOpen }})</div>
		</template>
		Custom header content.
	</bo-accordion>
</div>

```vue
<bo-accordion title="Custom Header">
	<template #header="{ isOpen, toggle, props }">
		<div @click="toggle">Custom Header (Open: {{ isOpen }})</div>
	</template>
	Custom header content.
</bo-accordion>
```

### With Icons

<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="User Settings" :prefix-icon="Icon.user">
		<p>Configure your user preferences and account settings.</p>
	</bo-accordion>
	<bo-accordion title="Security" :prefix-icon="Icon.shield">
		<p>Manage your security settings and privacy options.</p>
	</bo-accordion>
</div>

```vue
<bo-accordion title="User Settings" :prefix-icon="Icon.user">
	<p>Configure your user preferences and account settings.</p>
</bo-accordion>
<bo-accordion title="Security" :prefix-icon="Icon.shield">
	<p>Manage your security settings and privacy options.</p>
</bo-accordion>
```

### Custom Toggle Icon

<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="Expandable Section" :custom-toggle-icon="Icon.plus">
		<p>This accordion uses a plus/minus icon instead of chevrons.</p>
	</bo-accordion>
</div>

```vue
<bo-accordion title="Expandable Section" :custom-toggle-icon="Icon.plus">
	<p>This accordion uses a plus/minus icon instead of chevrons.</p>
</bo-accordion>
```

### Custom Header & Colors

<div class="flex flex-col gap-4 my-4">
	<bo-accordion :header-background-color="'bg-blue-100'" :body-background-color="'bg-blue-50'">
		<template #header="{ isOpen, toggle, props }">
			<div @click="toggle">Custom Header (Open: {{ isOpen }})</div>
		</template>
		Custom colored content.
	</bo-accordion>
</div>

```vue
<bo-accordion :header-background-color="'bg-blue-100'" :body-background-color="'bg-blue-50'">
	<template #header="{ isOpen, toggle, props }">
		<div @click="toggle">Custom Header (Open: {{ isOpen }})</div>
	</template>
	Custom colored content.
</bo-accordion>
```

### Custom Text Color

<div class="flex flex-col gap-4 my-4">
	<bo-accordion
		title="Custom Text Colors"
		:header-text-color="'text-blue-700'"
		:body-text-color="'text-green-700'"
	>
		<p>This body text is green, and the header text is blue.</p>
	</bo-accordion>
</div>

```vue
<bo-accordion
	title="Custom Text Colors"
	:header-text-color="'text-blue-700'"
	:body-text-color="'text-green-700'"
>
	<p>This body text is green, and the header text is blue.</p>
</bo-accordion>
```

## Accordion Container

Use `BoAccordionContainer` to manage multiple accordion items with coordinated behavior.

### Basic Container

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

```vue
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
```

### Allow Multiple Open

<div class="flex flex-col gap-4 my-4">
	<bo-accordion-container :allow-multiple="true">
		<bo-accordion title="Section 1">Content 1</bo-accordion>
		<bo-accordion title="Section 2">Content 2</bo-accordion>
		<bo-accordion title="Section 3">Content 3</bo-accordion>
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
		<bo-accordion title="Section 1" :open="true">Content 1</bo-accordion>
		<bo-accordion title="Section 2">Content 2</bo-accordion>
		<bo-accordion title="Section 3">Content 3</bo-accordion>
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
		<bo-accordion id="section-1" title="Section 1">Content 1</bo-accordion>
		<bo-accordion id="section-2" title="Section 2">Content 2</bo-accordion>
		<bo-accordion id="section-3" title="Section 3">Content 3</bo-accordion>
	</bo-accordion-container>
</div>

```vue
<bo-accordion-container default-open-item-id="section-2">
	<bo-accordion id="section-1" title="Section 1">Content 1</bo-accordion>
	<bo-accordion id="section-2" title="Section 2">Content 2</bo-accordion>
	<bo-accordion id="section-3" title="Section 3">Content 3</bo-accordion>
</bo-accordion-container>
```

## Accessibility

- Fully accessible with ARIA attributes
- Keyboard navigation support (arrow keys, enter, space)
- Proper focus management
- Dark mode support
