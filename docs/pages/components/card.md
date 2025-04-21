<script setup>
import { BoCard } from '@/components/bo-card';
</script>

# Card

Cards are flexible containers that group related content and actions together. They help organize information and provide a consistent layout.

```js
import { BoCard } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-card
		title="Card Title"
		description="Card description"
	>
		<p>Card content goes here</p>
	</bo-card>
</template>

<script setup>
import { BoCard } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
	<bo-card title="Card Title" description="Card description">
		<p>Card content goes here</p>
	</bo-card>
</div>

## Props

| Name                   | Type            | Default                                                | Description                                 |
| ---------------------- | --------------- | ------------------------------------------------------ | ------------------------------------------- |
| `padding`              | `BoCardPadding` | `{ top: true, right: true, bottom: true, left: true }` | Controls padding on each side of the card   |
| `title`                | `string`        | `undefined`                                            | Card title displayed at the top             |
| `description`          | `string`        | `undefined`                                            | Card description displayed below the title  |
| `clickable`            | `boolean`       | `false`                                                | Makes the card clickable with hover effects |
| `disabled`             | `boolean`       | `false`                                                | Disables the card, reducing opacity         |
| `widthInPx`            | `number`        | `undefined`                                            | Sets the card width in pixels               |
| `widthInPercent`       | `number`        | `undefined`                                            | Sets the card width as a percentage         |
| `widthAsTailwindClass` | `string`        | `undefined`                                            | Sets the card width using a Tailwind class  |

## Types

```ts
export type BoCardPadding = {
	top: boolean;
	right: boolean;
	bottom: boolean;
	left: boolean;
};

export type BoCardProps = {
	padding?: BoCardPadding;
	title?: string;
	description?: string;
	clickable?: boolean;
	disabled?: boolean;
	widthInPx?: number;
	widthInPercent?: number;
	widthAsTailwindClass?: string;
};
```

## Slots

| Name      | Description                                                    |
| --------- | -------------------------------------------------------------- |
| `default` | Main content of the card                                       |
| `header`  | Custom header content (replaces the default title/description) |
| `footer`  | Footer content at the bottom of the card                       |

## With Title and Description

<div class="flex gap-4 items-center my-4">
	<bo-card title="Card Title" description="This is a description that provides additional details about the card.">
		<p>Card content goes here</p>
	</bo-card>
</div>

```vue
<bo-card
	title="Card Title"
	description="This is a description that provides additional details about the card."
>
	<p>Card content goes here</p>
</bo-card>
```

## Custom Width

<div class="flex gap-4 items-center my-4">
	<bo-card title="Fixed Width" :width-in-px="200">
		<p>This card is 200px wide</p>
	</bo-card>
	<bo-card title="Percentage Width" :width-in-percent="50">
		<p>This card is 50% wide</p>
	</bo-card>
	<bo-card title="Tailwind Width" width-as-tailwind-class="w-1/3">
		<p>This card uses Tailwind width class</p>
	</bo-card>
</div>

```vue
<bo-card title="Fixed Width" :width-in-px="200">
	<p>This card is 200px wide</p>
</bo-card>

<bo-card title="Percentage Width" :width-in-percent="50">
	<p>This card is 50% wide</p>
</bo-card>

<bo-card title="Tailwind Width" width-as-tailwind-class="w-1/3">
	<p>This card uses Tailwind width class</p>
</bo-card>
```

## Custom Padding

<div class="flex gap-4 items-center my-4">
	<bo-card 
		title="Custom Padding" 
		:padding="{ top: true, right: false, bottom: true, left: false }"
	>
		<p>This card has padding only on top and bottom</p>
	</bo-card>
</div>

```vue
<bo-card title="Custom Padding" :padding="{ top: true, right: false, bottom: true, left: false }">
	<p>This card has padding only on top and bottom</p>
</bo-card>
```

## Clickable

<div class="flex gap-4 items-center my-4">
	<bo-card 
		title="Clickable Card" 
		:clickable="true"
	>
		<p>Click this card to trigger an action</p>
	</bo-card>
</div>

```vue
<bo-card title="Clickable Card" :clickable="true">
	<p>Click this card to trigger an action</p>
</bo-card>
```

## Disabled

<div class="flex gap-4 items-center my-4">
	<bo-card 
		title="Disabled Card" 
		:disabled="true"
	>
		<p>This card is disabled</p>
	</bo-card>
</div>

```vue
<bo-card title="Disabled Card" :disabled="true">
	<p>This card is disabled</p>
</bo-card>
```

## Custom Header and Footer

<div class="flex gap-4 items-center my-4">
	<bo-card>
		<template #header>
			<div class="flex items-center justify-between bg-gray-100 p-4 rounded-t-lg">
				<h3 class="text-lg font-medium">Custom Header</h3>
				<button class="text-gray-500 hover:text-gray-700">
					×
				</button>
			</div>
		</template>
		
		<p class="p-4">Card content with custom header and footer</p>
		
		<template #footer>
			<div class="flex justify-end gap-2 bg-gray-50 p-3 rounded-b-lg">
				<button class="px-3 py-1 bg-gray-200 rounded">Cancel</button>
				<button class="px-3 py-1 bg-blue-500 text-white rounded">Save</button>
			</div>
		</template>
	</bo-card>
</div>

```vue
<bo-card>
	<template #header>
		<div class="flex items-center justify-between bg-gray-100 p-4 rounded-t-lg">
			<h3 class="text-lg font-medium">Custom Header</h3>
			<button class="text-gray-500 hover:text-gray-700">
				×
			</button>
		</div>
	</template>
	
	<p class="p-4">Card content with custom header and footer</p>
	
	<template #footer>
		<div class="flex justify-end gap-2 bg-gray-50 p-3 rounded-b-lg">
			<button class="px-3 py-1 bg-gray-200 rounded">Cancel</button>
			<button class="px-3 py-1 bg-blue-500 text-white rounded">Save</button>
		</div>
	</template>
</bo-card>
```
