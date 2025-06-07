<script setup>
import { BoAccordion } from '@/components/accordion';
import { BoAccordionTitlePosition } from '@/components/accordion/bo-accordion';
import { BoSize } from '@/shared/bo-size';
import { Icon } from '@/components/icon/bo-icon';
import BoIcon from '@/components/icon/bo-icon.vue';
</script>

# Accordion

The Accordion component is used to create collapsible sections of content, helping to organize and present information in a compact way.

```js
import { BoAccordion } from '@/components/accordion';
```

## Basic Usage

```vue
<template>
	<BoAccordion title="Basic Accordion">
		<p>This is the content of the accordion.</p>
	</BoAccordion>
</template>
```

<div class="flex flex-col gap-4 my-4">
	<BoAccordion title="Basic Accordion">
		<p>This is the content of the accordion.</p>
	</BoAccordion>
</div>

## Title Positions

```vue
<template>
	<BoAccordion
		:titlePosition="BoAccordionTitlePosition.start"
		title="Start Position"
	>
		<p>Title aligned to start (default)</p>
	</BoAccordion>
	<BoAccordion
		:titlePosition="BoAccordionTitlePosition.center"
		title="Center Position"
	>
		<p>Title aligned to center</p>
	</BoAccordion>
	<BoAccordion
		:titlePosition="BoAccordionTitlePosition.end"
		title="End Position"
	>
		<p>Title aligned to end</p>
	</BoAccordion>
</template>
```

<div class="flex flex-col gap-4 my-4">
	<BoAccordion :titlePosition="BoAccordionTitlePosition.start" title="Start Position">
		<p>Title aligned to start (default)</p>
	</BoAccordion>
	<BoAccordion :titlePosition="BoAccordionTitlePosition.center" title="Center Position">
		<p>Title aligned to center</p>
	</BoAccordion>
	<BoAccordion :titlePosition="BoAccordionTitlePosition.end" title="End Position">
		<p>Title aligned to end</p>
	</BoAccordion>
</div>

## Sizes

```vue
<template>
	<BoAccordion
		title="Small Size"
		:size="BoSize.small"
	>
		<p>Small accordion content</p>
	</BoAccordion>
	<BoAccordion
		title="Default Size"
		:size="BoSize.default"
	>
		<p>Default accordion content</p>
	</BoAccordion>
	<BoAccordion
		title="Large Size"
		:size="BoSize.large"
	>
		<p>Large accordion content</p>
	</BoAccordion>
</template>
```

<div class="flex flex-col gap-4 my-4">
	<BoAccordion title="Small Size" :size="BoSize.small">
		<p>Small accordion content</p>
	</BoAccordion>
	<BoAccordion title="Default Size" :size="BoSize.default">
		<p>Default accordion content</p>
	</BoAccordion>
	<BoAccordion title="Large Size" :size="BoSize.large">
		<p>Large accordion content</p>
	</BoAccordion>
</div>

## States

### Disabled

```vue
<template>
	<BoAccordion
		title="Disabled Accordion"
		:disabled="true"
	>
		<p>This accordion is disabled</p>
	</BoAccordion>
</template>
```

<div class="flex flex-col gap-4 my-4">
	<BoAccordion title="Disabled Accordion" :disabled="true">
		<p>This accordion is disabled</p>
	</BoAccordion>
</div>

### Expanded

```vue
<template>
	<BoAccordion
		title="Expanded Accordion"
		:expanded="true"
	>
		<p>This accordion starts expanded</p>
	</BoAccordion>
</template>
```

<div class="flex flex-col gap-4 my-4">
	<BoAccordion title="Expanded Accordion" :expanded="true">
		<p>This accordion starts expanded</p>
	</BoAccordion>
</div>

## Content Variations

### Custom Background Colors

```vue
<template>
	<BoAccordion
		title="Custom Colors"
		headerBackground="#f0f9ff"
		bodyBackground="#f8fafc"
	>
		<p>Accordion with custom background colors</p>
	</BoAccordion>
</template>
```

<div class="flex flex-col gap-4 my-4">
	<BoAccordion 
		title="Custom Colors"
		headerBackground="#f0f9ff"
		bodyBackground="#f8fafc"
	>
		<p>Accordion with custom background colors</p>
	</BoAccordion>
</div>

### With Icons

```vue
<template>
	<BoAccordion
		title="With Icons"
		:prefixIcon="Icon.info"
		:suffixIcon="Icon.chevron_down"
	>
		<p>Accordion with custom icons</p>
	</BoAccordion>
</template>
```

<div class="flex flex-col gap-4 my-4">
	<BoAccordion 
		title="With Icons"
		:prefixIcon="Icon.info"
		:suffixIcon="Icon.chevron_down"
	>
		<p>Accordion with custom icons</p>
	</BoAccordion>
</div>

### Custom Title Content

```vue
<template>
	<BoAccordion>
		<template #title>
			<div class="flex items-center gap-2">
				<BoIcon :icon="Icon.star" />
				<span>Custom Title Content</span>
			</div>
		</template>
		<p>Accordion with custom title content</p>
	</BoAccordion>
</template>
```

<div class="flex flex-col gap-4 my-4">
	<BoAccordion>
		<template #title>
			<div class="flex items-center gap-2">
				<BoIcon :icon="Icon.star" />
				<span>Custom Title Content</span>
			</div>
		</template>
		<p>Accordion with custom title content</p>
	</BoAccordion>
</div>

### Grouped Accordions

```vue
<template>
	<div class="flex flex-col">
		<BoAccordion
			title="First Accordion"
			:index="0"
			:total="3"
		>
			<p>First accordion content</p>
		</BoAccordion>
		<BoAccordion
			title="Second Accordion"
			:index="1"
			:total="3"
		>
			<p>Second accordion content</p>
		</BoAccordion>
		<BoAccordion
			title="Third Accordion"
			:index="2"
			:total="3"
		>
			<p>Third accordion content</p>
		</BoAccordion>
	</div>
</template>
```

<div class="flex flex-col my-4">
	<BoAccordion title="First Accordion" :index="0" :total="3">
		<p>First accordion content</p>
	</BoAccordion>
	<BoAccordion title="Second Accordion" :index="1" :total="3">
		<p>Second accordion content</p>
	</BoAccordion>
	<BoAccordion title="Third Accordion" :index="2" :total="3">
		<p>Third accordion content</p>
	</BoAccordion>
</div>

## Event Handling

```vue
<template>
	<BoAccordion
		title="Interactive Accordion"
		@toggle="handleToggle"
	>
		<p>Click to toggle</p>
	</BoAccordion>
</template>

<script setup>
const handleToggle = (isOpen) => {
	console.log('Accordion toggled:', isOpen);
};
</script>
```

## Props

| Name               | Type                       | Default        | Description                             |
| ------------------ | -------------------------- | -------------- | --------------------------------------- |
| `id`               | `string`                   | Generated UUID | Unique identifier for the accordion     |
| `title`            | `string`                   | Required       | The title text of the accordion         |
| `titlePosition`    | `BoAccordionTitlePosition` | `'start'`      | Position of the title in the header     |
| `headerBackground` | `string`                   | `undefined`    | Custom background color for the header  |
| `bodyBackground`   | `string`                   | `undefined`    | Custom background color for the body    |
| `index`            | `number`                   | `0`            | Index of the accordion in a group       |
| `total`            | `number`                   | `1`            | Total number of accordions in the group |
| `disabled`         | `boolean`                  | `false`        | Whether the accordion is disabled       |
| `expanded`         | `boolean`                  | `false`        | Whether the accordion is expanded       |
| `size`             | `BoSize`                   | `'default'`    | Size of the accordion                   |
| `prefixIcon`       | `Icon`                     | `undefined`    | Icon to display before the title        |
| `suffixIcon`       | `Icon`                     | `undefined`    | Icon to display after the title         |
| `ariaLabel`        | `string`                   | `undefined`    | Custom accessible label                 |

## Events

| Event    | Type                        | Description                           |
| -------- | --------------------------- | ------------------------------------- |
| `toggle` | `(isOpen: boolean) => void` | Emitted when the accordion is toggled |

## Slots

| Name          | Description                           |
| ------------- | ------------------------------------- |
| `default`     | The content to be shown when expanded |
| `title`       | Custom title content                  |
| `prefix-icon` | Custom prefix icon content            |
| `suffix-icon` | Custom suffix icon content            |

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
	size?: BoSize;
	prefixIcon?: Icon;
	suffixIcon?: Icon;
	ariaLabel?: string;
}
```

## Accessibility

The accordion component follows WAI-ARIA guidelines for accordion patterns:

### Keyboard Navigation

| Key             | Action                                  |
| --------------- | --------------------------------------- |
| `Tab`           | Move focus to accordion header          |
| `Enter`/`Space` | Toggle accordion expansion              |
| `Arrow Down`    | Move focus to next accordion header     |
| `Arrow Up`      | Move focus to previous accordion header |
| `Home`          | Move focus to first accordion header    |
| `End`           | Move focus to last accordion header     |

### ARIA Attributes

| Attribute       | Purpose                 | Values          |
| --------------- | ----------------------- | --------------- |
| `role`          | Semantic role           | `button`        |
| `aria-expanded` | Expansion state         | `true`, `false` |
| `aria-disabled` | Disabled state          | `true`, `false` |
| `aria-controls` | Links header to content | Panel ID        |
| `aria-label`    | Accessible name         | Custom string   |

The component also provides:

- Clear visual feedback for focus and hover states
- Proper heading structure
- Consistent keyboard navigation within accordion groups
- Screen reader announcements for state changes
