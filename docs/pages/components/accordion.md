<script setup>
import BoAccordion from '@/components/accordion/bo-accordion.vue';
import BoAccordionContainer from '@/components/accordion/bo-accordion-container.vue';
import { BoAccordionTitlePosition, BoAccordionShape } from '@/components/accordion/bo-accordion';
import { BoSize } from '@/shared/bo-size';
import { Icon } from '@/components/icon/bo-icon';
</script>

# BoAccordion

A collapsible content component that allows users to show and hide sections of content. Provides proper accessibility support, keyboard navigation, and group management capabilities.

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

### BoAccordion Props

| Name               | Type                       | Default                          | Description                                  |
| ------------------ | -------------------------- | -------------------------------- | -------------------------------------------- |
| `id`               | `string`                   | Generated UUID                   | Unique identifier for the accordion          |
| `title`            | `string`                   | Required                         | The title displayed in the accordion header  |
| `titlePosition`    | `BoAccordionTitlePosition` | `BoAccordionTitlePosition.start` | Position of the title in the header          |
| `headerBackground` | `string`                   | `undefined`                      | Custom background color for the header       |
| `bodyBackground`   | `string`                   | `undefined`                      | Custom background color for the body         |
| `index`            | `number`                   | `0`                              | Index in accordion group for border styling  |
| `total`            | `number`                   | `1`                              | Total accordions in group for border styling |
| `disabled`         | `boolean`                  | `false`                          | Whether the accordion is disabled            |
| `open`             | `boolean`                  | `false`                          | Whether the accordion is open by default     |
| `size`             | `BoSize`                   | `BoSize.default`                 | Size of the accordion                        |
| `prefixIcon`       | `Icon`                     | `Icon.none`                      | Icon displayed before the title              |
| `customToggleIcon` | `Icon`                     | `Icon.none`                      | Custom icon for the toggle button            |
| `shape`            | `BoAccordionShape`         | `BoAccordionShape.flat`          | Shape of the accordion borders               |
| `ariaLabel`        | `string`                   | `undefined`                      | Custom accessible label for screen readers   |

### BoAccordionContainer Props

| Name                | Type      | Default     | Description                                  |
| ------------------- | --------- | ----------- | -------------------------------------------- |
| `id`                | `string`  | UUID        | Unique identifier for the container          |
| `allowMultiple`     | `boolean` | `false`     | Allow multiple accordions to be open at once |
| `alwaysOpen`        | `boolean` | `false`     | Prevent closing the last open accordion      |
| `defaultOpenItemId` | `string`  | `undefined` | ID of accordion to open by default           |

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

export enum BoAccordionShape {
	flat = 'flat',
	rounded = 'rounded',
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
	open?: boolean;
	size?: BoSize;
	prefixIcon?: Icon;
	customToggleIcon?: Icon;
	shape?: BoAccordionShape;
	ariaLabel?: string;
}

export interface BoAccordionContainerProps {
	id?: string;
	allowMultiple?: boolean;
	alwaysOpen?: boolean;
	defaultOpenItemId?: string;
}
```

## Variants

### Title Positions

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

### Shapes

<div class="flex flex-col gap-4 my-4">
	<bo-accordion :shape="BoAccordionShape.flat" title="Flat Shape">
		<p>Accordion with flat borders.</p>
	</bo-accordion>
	<bo-accordion :shape="BoAccordionShape.rounded" title="Rounded Shape">
		<p>Accordion with rounded borders.</p>
	</bo-accordion>
</div>

```vue
<bo-accordion :shape="BoAccordionShape.flat" title="Flat Shape">
	<p>Content here...</p>
</bo-accordion>
<bo-accordion :shape="BoAccordionShape.rounded" title="Rounded Shape">
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

## Content Variations

### With Icons

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

### Grouped Accordions

<div class="flex flex-col gap-4 my-4">
	<bo-accordion-container allow-multiple>
		<bo-accordion title="First Section">
			<p>Content for first section.</p>
		</bo-accordion>
		<bo-accordion title="Second Section">
			<p>Content for second section.</p>
		</bo-accordion>
		<bo-accordion title="Third Section">
			<p>Content for third section.</p>
		</bo-accordion>
	</bo-accordion-container>
</div>

```vue
<bo-accordion-container allow-multiple>
	<bo-accordion title="First Section">
		<p>Content for first section.</p>
	</bo-accordion>
	<bo-accordion title="Second Section">
		<p>Content for second section.</p>
	</bo-accordion>
	<bo-accordion title="Third Section">
		<p>Content for third section.</p>
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
		<p>Content here...</p>
	</bo-accordion>
</template>

<script setup>
const handleToggle = ({ id, open }) => {
	console.log(`Accordion ${id} is now ${open ? 'open' : 'closed'}`);
};
</script>
```

## Accessibility

The accordion component follows WAI-ARIA Accordion Pattern guidelines:

- Uses proper ARIA roles: `button` for header, `region` for content
- Supports keyboard navigation:
  - Enter/Space: Toggle accordion
  - Arrow Up/Down: Navigate between accordions in a group
- Provides proper ARIA attributes:
  - `aria-expanded`: Indicates open/closed state
  - `aria-disabled`: Indicates disabled state
  - `aria-controls`: Links header to content
  - `aria-labelledby`: Links content to header
- Focus management:
  - Visible focus indicators
  - Proper focus order
  - Focus trap in open accordion content

## CSS Classes

The component uses BEM methodology for styling:

```css
.bo-accordion /* Root element */
.bo-accordion__header /* Header container */
.bo-accordion__content /* Content container */
.bo-accordion__body /* Body wrapper */
.bo-accordion__icon /* Icon elements */
.bo-accordion__title /* Title element */
.bo-accordion--expanded /* Open state */
.bo-accordion--collapsed /* Closed state */
.bo-accordion--disabled /* Disabled state */
```

## Test IDs

The component provides the following test IDs for testing:

```js
`${id}-accordion-header` // Header element
`${id}-accordion-content` // Content element
`${id}-accordion-prefix-icon` // Prefix icon
`${id}-accordion-toggle-icon` // Toggle icon
`${id}-accordion-title`; // Title element
```
