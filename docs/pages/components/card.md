<script setup>
import { BoCard } from '@/components/bo-card';
</script>

# Card

The Card component is a flexible container that can be used to group related content and actions. It provides a clean, elevated surface with customizable padding, width, and interactive states. Cards are commonly used to display content in a structured and visually appealing way.

## Basic Example

```html
<bo-card
	title="Card Title"
	description="This is a card description"
>
	<p>Card content goes here</p>
</bo-card>
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
  <bo-card title="Card Title" description="This is a card description">
    <p>Card content goes here</p>
  </bo-card>
</div>

### Props

| Prop name              | Type            | Default  | Description                        |
| ---------------------- | --------------- | -------- | ---------------------------------- |
| `padding`              | `BoCardPadding` | All true | Padding configuration for the card |
| `title`                | `string`        | -        | Title of the card                  |
| `description`          | `string`        | -        | Description text for the card      |
| `clickable`            | `boolean`       | `false`  | Whether the card is clickable      |
| `disabled`             | `boolean`       | `false`  | Whether the card is disabled       |
| `widthInPx`            | `number`        | -        | Fixed width in pixels              |
| `widthInPercent`       | `number`        | -        | Width as percentage of parent      |
| `widthAsTailwindClass` | `string`        | -        | Tailwind class for width           |

### Types

```ts
export type BoCardPadding = {
	top: boolean; // Whether to apply top padding
	right: boolean; // Whether to apply right padding
	bottom: boolean; // Whether to apply bottom padding
	left: boolean; // Whether to apply left padding
};

export type BoCardProps = {
	padding?: BoCardPadding; // Padding configuration
	title?: string; // Card title
	description?: string; // Card description
	clickable?: boolean; // Whether card is clickable
	disabled?: boolean; // Whether card is disabled
	widthInPx?: number; // Fixed width in pixels
	widthInPercent?: number; // Width as percentage
	widthAsTailwindClass?: string; // Tailwind width class
};
```

## Basic Usage

A simple card with title and description:

<div class="flex flex-col gap-4">
  <bo-card title="Welcome" description="This is a simple card example">
    <p>Card content goes here</p>
  </bo-card>
</div>

```html
<bo-card
	title="Welcome"
	description="This is a simple card example"
>
	<p>Card content goes here</p>
</bo-card>
```

## Custom Width

The card width can be customized using different methods:

<div class="flex flex-col gap-4">
  <bo-card 
    title="Fixed Width" 
    :widthInPx="400"
  >
    <p>Card with fixed width of 400px</p>
  </bo-card>

<bo-card
title="Percentage Width"
:widthInPercent="75"

>

    <p>Card with 75% width</p>

  </bo-card>

<bo-card
title="Tailwind Width"
widthAsTailwindClass="w-96"

>

    <p>Card with Tailwind width class</p>

  </bo-card>
</div>

```html
<bo-card
	title="Fixed Width"
	:widthInPx="400"
>
	<p>Card with fixed width of 400px</p>
</bo-card>

<bo-card
	title="Percentage Width"
	:widthInPercent="75"
>
</bo-card>

<bo-card
	title="Tailwind Width"
	widthAsTailwindClass="w-96"
>
	<p>Card with Tailwind width class</p>
</bo-card>
```

## Custom Padding

You can customize the padding for each side of the card:

<div class="flex flex-col gap-4">
  <bo-card 
    title="Custom Padding" 
    :padding="{ top: true, right: false, bottom: true, left: false }"
  >
    <p>Card with custom padding configuration</p>
  </bo-card>
</div>

```html
<bo-card
	title="Custom Padding"
	:padding="{ top: true, right: false, bottom: true, left: false }"
>
	<p>Card with custom padding configuration</p>
</bo-card>
```

## Clickable Cards

Cards can be made clickable for interactive elements:

<div class="flex flex-col gap-4">
  <bo-card 
    title="Clickable Card" 
    :clickable="true"
  >
    <p>This card can be clicked</p>
  </bo-card>
</div>

```html
<bo-card
	title="Clickable Card"
	:clickable="true"
>
	<p>This card can be clicked</p>
</bo-card>
```

## Disabled Cards

Cards can be disabled to prevent interaction:

<div class="flex flex-col gap-4">
  <bo-card 
    title="Disabled Card" 
    :disabled="true"
  >
    <p>This card is disabled</p>
  </bo-card>
</div>

```html
<bo-card
	title="Disabled Card"
	:disabled="true"
>
	<p>This card is disabled</p>
</bo-card>
```

## Best Practices

When using the Card component:

1. Use appropriate width based on content and layout
2. Consider padding for content readability
3. Use titles and descriptions to provide context
4. Make cards clickable only when necessary
5. Use disabled state appropriately
6. Consider responsive design
7. Maintain consistent spacing between cards
