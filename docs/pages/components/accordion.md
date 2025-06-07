<script setup>
import { BoAccordion, BoAccordionContainer, BoAccordionTitlePosition } from '@/components/accordion';
import { BoSize } from '@/shared/bo-size';
import { Icon } from '@/components/icon/bo-icon';
</script>

# BoAccordion

A collapsible content component that allows users to show and hide sections of content with proper accessibility support and keyboard navigation.

```js
import { BoAccordion, BoAccordionContainer } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-accordion title="Section Title">
		<p>Your content goes here...</p>
	</bo-accordion>
</template>

<script setup>
import { BoAccordion } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="Basic Accordion">
		<p>This is the accordion content that can be toggled by clicking the header.</p>
	</bo-accordion>
</div>

## Props

| Name               | Type                       | Default                          | Description                                    |
| ------------------ | -------------------------- | -------------------------------- | ---------------------------------------------- |
| `id`               | `string`                   | Generated UUID                   | Unique identifier for the accordion            |
| `title`            | `string`                   | Required                         | The title displayed in the accordion header    |
| `titlePosition`    | `BoAccordionTitlePosition` | `BoAccordionTitlePosition.start` | Position of the title in the header            |
| `headerBackground` | `string`                   | `undefined`                      | Custom background color for the header         |
| `bodyBackground`   | `string`                   | `undefined`                      | Custom background color for the body           |
| `index`            | `number`                   | `0`                              | Index in accordion group for border styling    |
| `total`            | `number`                   | `1`                              | Total accordions in group for border styling   |
| `disabled`         | `boolean`                  | `false`                          | Whether the accordion is disabled              |
| `expanded`         | `boolean`                  | `false`                          | Whether the accordion is expanded (deprecated) |
| `open`             | `boolean`                  | `false`                          | Whether the accordion is open by default       |
| `size`             | `BoSize`                   | `BoSize.default`                 | Size of the accordion                          |
| `prefixIcon`       | `Icon`                     | `Icon.none`                      | Icon displayed before the title                |
| `suffixIcon`       | `Icon`                     | `Icon.none`                      | Icon displayed after the title                 |
| `customToggleIcon` | `Icon`                     | `Icon.none`                      | Custom icon for the toggle button              |
| `ariaLabel`        | `string`                   | `undefined`                      | Custom accessible label for screen readers     |

## Events

| Name     | Payload                         | Description                       |
| -------- | ------------------------------- | --------------------------------- |
| `toggle` | `{ id: string, open: boolean }` | Emitted when accordion is toggled |

## Slots

| Name      | Description                         |
| --------- | ----------------------------------- |
| `default` | Content displayed in accordion body |

## Types

```ts
export enum BoAccordionTitlePosition {
	start = 'start',
	center = 'center',
	end = 'end',
}

export interface BoAccordionProps {
	id?: string;
	title: string;
	titlePosition?: BoAccordionTitlePosition;
	headerBackground?: string;
	bodyBackground?: string;
	index?: number;
	total?: number;
	disabled?: boolean;
	expanded?: boolean;
	open?: boolean;
	size?: BoSize;
	prefixIcon?: Icon;
	suffixIcon?: Icon;
	customToggleIcon?: Icon;
	ariaLabel?: string;
}

export interface BoAccordionContainerProps {
	id?: string;
	allowMultiple?: boolean;
	alwaysOpen?: boolean;
	defaultOpenItemId?: string;
}
```

## Title Positions

<div class="flex flex-col gap-4 my-4">
	<bo-accordion :title-position="BoAccordionTitlePosition.start" title="Start Position">
		<p>Title aligned to the start (left) of the header.</p>
	</bo-accordion>
	<bo-accordion :title-position="BoAccordionTitlePosition.center" title="Center Position">
		<p>Title aligned to the center of the header.</p>
	</bo-accordion>
	<bo-accordion :title-position="BoAccordionTitlePosition.end" title="End Position">
		<p>Title aligned to the end (right) of the header.</p>
	</bo-accordion>
</div>

```vue
<bo-accordion :title-position="BoAccordionTitlePosition.start" title="Start Position">
	<p>Content here...</p>
</bo-accordion>
<bo-accordion :title-position="BoAccordionTitlePosition.center" title="Center Position">
	<p>Content here...</p>
</bo-accordion>
<bo-accordion :title-position="BoAccordionTitlePosition.end" title="End Position">
	<p>Content here...</p>
</bo-accordion>
```

## Sizes

<div class="flex flex-col gap-4 my-4">
	<bo-accordion :size="BoSize.small" title="Small Accordion">
		<p>Small sized accordion content.</p>
	</bo-accordion>
	<bo-accordion :size="BoSize.default" title="Default Accordion">
		<p>Default sized accordion content.</p>
	</bo-accordion>
	<bo-accordion :size="BoSize.large" title="Large Accordion">
		<p>Large sized accordion content.</p>
	</bo-accordion>
</div>

```vue
<bo-accordion :size="BoSize.small" title="Small Accordion">
	<p>Content here...</p>
</bo-accordion>
<bo-accordion :size="BoSize.default" title="Default Accordion">
	<p>Content here...</p>
</bo-accordion>
<bo-accordion :size="BoSize.large" title="Large Accordion">
	<p>Content here...</p>
</bo-accordion>
```

## States

### Disabled

<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="Disabled Accordion" disabled>
		<p>This accordion is disabled and cannot be toggled.</p>
	</bo-accordion>
</div>

```vue
<bo-accordion title="Disabled Accordion" disabled>
	<p>Content here...</p>
</bo-accordion>
```

### Open by Default

<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="Open Accordion" open>
		<p>This accordion is open by default.</p>
	</bo-accordion>
</div>

```vue
<bo-accordion title="Open Accordion" open>
	<p>Content here...</p>
</bo-accordion>
```

## With Icons

<div class="flex flex-col gap-4 my-4">
	<bo-accordion title="With Prefix Icon" :prefix-icon="Icon.star">
		<p>Accordion with a prefix icon.</p>
	</bo-accordion>
	<bo-accordion title="Custom Toggle Icon" :custom-toggle-icon="Icon.plus">
		<p>Accordion with a custom toggle icon.</p>
	</bo-accordion>
</div>

```vue
<bo-accordion title="With Prefix Icon" :prefix-icon="Icon.star">
	<p>Content here...</p>
</bo-accordion>
<bo-accordion title="Custom Toggle Icon" :custom-toggle-icon="Icon.plus">
	<p>Content here...</p>
</bo-accordion>
```

## Accordion Container

Use `BoAccordionContainer` to group multiple accordions with shared behavior:

<div class="flex flex-col gap-4 my-4">
	<bo-accordion-container :allow-multiple="false">
		<bo-accordion title="Section 1">
			<p>Only one accordion can be open at a time.</p>
		</bo-accordion>
		<bo-accordion title="Section 2">
			<p>Opening this will close the previous one.</p>
		</bo-accordion>
		<bo-accordion title="Section 3">
			<p>This maintains exclusive expansion behavior.</p>
		</bo-accordion>
	</bo-accordion-container>
</div>

```vue
<bo-accordion-container :allow-multiple="false">
	<bo-accordion title="Section 1">
		<p>Content here...</p>
	</bo-accordion>
	<bo-accordion title="Section 2">
		<p>Content here...</p>
	</bo-accordion>
</bo-accordion-container>
```

### Allow Multiple Open

<div class="flex flex-col gap-4 my-4">
	<bo-accordion-container :allow-multiple="true">
		<bo-accordion title="Section A">
			<p>Multiple accordions can be open simultaneously.</p>
		</bo-accordion>
		<bo-accordion title="Section B">
			<p>Both sections can be expanded at once.</p>
		</bo-accordion>
	</bo-accordion-container>
</div>

```vue
<bo-accordion-container :allow-multiple="true">
	<bo-accordion title="Section A">
		<p>Content here...</p>
	</bo-accordion>
	<bo-accordion title="Section B">
		<p>Content here...</p>
	</bo-accordion>
</bo-accordion-container>
```

## Event Handling

```vue
<template>
	<bo-accordion
		title="Interactive Accordion"
		@toggle="handleToggle"
	>
		<p>This accordion emits events when toggled.</p>
	</bo-accordion>
</template>

<script setup>
const handleToggle = ({ id, open }) => {
	console.log('Accordion toggled:', { id, open });
};
</script>
```

## Accessibility

### Features

- Semantic HTML structure with proper ARIA roles
- ARIA attributes for expanded state and relationships
- Keyboard navigation support with arrow keys (in container)
- Screen reader compatibility with live regions
- Focus management and visual focus indicators

### Keyboard Navigation

| Key           | Action                                |
| ------------- | ------------------------------------- |
| Tab/Shift+Tab | Navigate to/from accordion headers    |
| Enter/Space   | Toggle accordion expansion            |
| Arrow Down    | Move to next accordion (in group)     |
| Arrow Up      | Move to previous accordion (in group) |

### ARIA Attributes

| Attribute         | Purpose               | Values                      |
| ----------------- | --------------------- | --------------------------- |
| `role`            | Semantic role         | `button`, `region`, `group` |
| `aria-expanded`   | Expansion state       | `true`, `false`             |
| `aria-controls`   | Controls relationship | Target element ID           |
| `aria-labelledby` | Label relationship    | Header element ID           |
| `aria-disabled`   | Disabled state        | `true`, `false`             |
| `aria-label`      | Accessible name       | Custom string               |

### Accessibility Props

| Name        | Type     | Default     | Description                               |
| ----------- | -------- | ----------- | ----------------------------------------- |
| `ariaLabel` | `string` | `undefined` | Custom accessible name for screen readers |

### BEM Classes

The component follows BEM methodology for consistent styling:

| Class                          | Purpose                  |
| ------------------------------ | ------------------------ |
| `.bo-accordion`                | Base component container |
| `.bo-accordion__header`        | Accordion header/trigger |
| `.bo-accordion__content`       | Content wrapper          |
| `.bo-accordion__body`          | Body container           |
| `.bo-accordion__title`         | Title container          |
| `.bo-accordion__title--start`  | Start-aligned title      |
| `.bo-accordion__title--center` | Center-aligned title     |
| `.bo-accordion__title--end`    | End-aligned title        |
| `.bo-accordion__icon`          | Icon container           |
| `.bo-accordion__icon--prefix`  | Prefix icon              |
| `.bo-accordion__icon--toggle`  | Toggle icon              |
| `.bo-accordion--expanded`      | Expanded state           |
| `.bo-accordion--collapsed`     | Collapsed state          |
| `.bo-accordion--disabled`      | Disabled state           |

### Test IDs

All interactive elements include data-testid attributes for reliable testing:

| Test ID Pattern              | Element           |
| ---------------------------- | ----------------- |
| `{id}-accordion`             | Main container    |
| `{id}-accordion-header`      | Header button     |
| `{id}-accordion-content`     | Content container |
| `{id}-accordion-title`       | Title text        |
| `{id}-accordion-toggle-icon` | Toggle icon       |
| `{id}-accordion-prefix-icon` | Prefix icon       |
| `{id}-accordion-container`   | Container wrapper |

## Dark Mode Support

The accordion automatically adapts to dark mode using Tailwind CSS classes:

- Headers use `dark:bg-neutral-800` backgrounds
- Borders use `dark:border-neutral-700` colors
- Text uses `dark:text-neutral-200` colors
- Hover states use `dark:hover:bg-neutral-700` backgrounds
