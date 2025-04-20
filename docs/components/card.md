<script setup>
import { BoCard } from '@/components/bo-card';
</script>

# Card

Cards are flexible containers that group related content and actions. They're a great way to organize and display information in a clear and concise manner.

## Basic Example

```html
<bo-card
	title="Card Title"
	description="This is a simple card description. Cards can contain various content types."
/>
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
  <bo-card 
    title="Card Title" 
    description="This is a simple card description. Cards can contain various content types."
  />
</div>

### Props

| Prop name              | Type            | Default                     | Description                         |
| ---------------------- | --------------- | --------------------------- | ----------------------------------- |
| `title`                | `string`        | -                           | Card title                          |
| `description`          | `string`        | -                           | Card description                    |
| `padding`              | `BoCardPadding` | `{top:true,right:true,...}` | Control padding on each side        |
| `clickable`            | `boolean`       | `false`                     | Make the card clickable             |
| `disabled`             | `boolean`       | `false`                     | Disable the card                    |
| `widthInPx`            | `number`        | -                           | Custom width in pixels              |
| `widthInPercent`       | `number`        | -                           | Custom width in percentage          |
| `widthAsTailwindClass` | `string`        | -                           | Custom width using Tailwind classes |

### Events

| Event name | Description                  |
| ---------- | ---------------------------- |
| `click`    | Emitted when card is clicked |

### Slots

| Slot name | Description                 |
| --------- | --------------------------- |
| `content` | Custom content for the card |
| `actions` | Actions area at the bottom  |

### Types

```ts
export type BoCardPadding = {
	top: boolean; // Apply top padding
	right: boolean; // Apply right padding
	bottom: boolean; // Apply bottom padding
	left: boolean; // Apply left padding
};

export type BoCardProps = {
	padding?: BoCardPadding; // Padding configuration
	title?: string; // Card title
	description?: string; // Card description
	clickable?: boolean; // Make card clickable
	disabled?: boolean; // Disable card
	widthInPx?: number; // Width in pixels
	widthInPercent?: number; // Width in percentage
	widthAsTailwindClass?: string; // Width as Tailwind class
};
```

## With Title and Description

Basic card with a title and description.

<div class="flex gap-4 items-center">
  <bo-card 
    title="Getting Started" 
    description="Learn how to use our library of components to build beautiful interfaces."
  />
</div>

```html
<bo-card
	title="Getting Started"
	description="Learn how to use our library of components to build beautiful interfaces."
/>
```

## Custom Content

Use the content slot to add custom content to your card.

<div class="flex gap-4 items-center">
  <bo-card title="Custom Content">
    <template #content>
      <div class="flex flex-col gap-3">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          This card contains custom content using the content slot.
        </p>
        <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded">
          <p class="text-sm">You can add any elements here.</p>
        </div>
      </div>
    </template>
  </bo-card>
</div>

```html
<bo-card title="Custom Content">
	<template #content>
		<div class="flex flex-col gap-3">
			<p class="text-sm text-gray-600 dark:text-gray-400">
				This card contains custom content using the content slot.
			</p>
			<div class="rounded bg-gray-100 p-3 dark:bg-gray-700">
				<p class="text-sm">You can add any elements here.</p>
			</div>
		</div>
	</template>
</bo-card>
```

## With Actions

Use the actions slot to add buttons or other interactive elements to your card.

<div class="flex gap-4 items-center">
  <bo-card 
    title="Card with Actions" 
    description="This card has action buttons in the actions slot."
  >
    <template #actions>
      <div class="flex justify-end gap-2">
        <button class="px-3 py-1 text-sm bg-gray-200 rounded dark:bg-gray-700">Cancel</button>
        <button class="px-3 py-1 text-sm bg-blue-600 text-white rounded">Save</button>
      </div>
    </template>
  </bo-card>
</div>

```html
<bo-card
	title="Card with Actions"
	description="This card has action buttons in the actions slot."
>
	<template #actions>
		<div class="flex justify-end gap-2">
			<button class="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">Cancel</button>
			<button class="rounded bg-blue-600 px-3 py-1 text-sm text-white">Save</button>
		</div>
	</template>
</bo-card>
```

## Clickable Card

Cards can be made clickable to act as navigation or trigger actions.

<div class="flex gap-4 items-center">
  <bo-card 
    title="Clickable Card" 
    description="Click me to trigger an action. Clickable cards have hover and focus states."
    :clickable="true"
    @click="() => alert('Card clicked!')"
  />
</div>

```html
<bo-card
	title="Clickable Card"
	description="Click me to trigger an action. Clickable cards have hover and focus states."
	:clickable="true"
	@click="handleCardClick"
/>
```

## Disabled Card

Cards can be disabled to indicate that they are not interactive.

<div class="flex gap-4 items-center">
  <bo-card 
    title="Disabled Card" 
    description="This card is disabled and cannot be interacted with."
    :clickable="true"
    :disabled="true"
  />
</div>

```html
<bo-card
	title="Disabled Card"
	description="This card is disabled and cannot be interacted with."
	:clickable="true"
	:disabled="true"
/>
```

## Custom Width

Cards can have custom widths specified in pixels, percentage, or using Tailwind classes.

<div class="grid grid-cols-3 gap-4">
  <div>
    <bo-card 
      title="Fixed Width" 
      description="This card has a width of 200px."
      :width-in-px="200"
    />
    <p class="text-sm mt-2">Width in pixels</p>
  </div>
  <div>
    <bo-card 
      title="Percentage Width" 
      description="This card has a width of 100%."
      :width-in-percent="100"
    />
    <p class="text-sm mt-2">Width in percentage</p>
  </div>
  <div>
    <bo-card 
      title="Tailwind Width" 
      description="This card uses a Tailwind width class."
      width-as-tailwind-class="w-full"
    />
    <p class="text-sm mt-2">Tailwind width class</p>
  </div>
</div>

```html
<bo-card
	title="Fixed Width"
	description="This card has a width of 200px."
	:width-in-px="200"
/>

<bo-card
	title="Percentage Width"
	description="This card has a width of 100%."
	:width-in-percent="100"
/>

<bo-card
	title="Tailwind Width"
	description="This card uses a Tailwind width class."
	width-as-tailwind-class="w-full"
/>
```

## Custom Padding

You can control which sides of the card have padding.

<div class="grid grid-cols-2 gap-4">
  <div>
    <bo-card 
      title="Default Padding" 
      description="This card has padding on all sides (default)."
    />
    <p class="text-sm mt-2">Default padding</p>
  </div>
  <div>
    <bo-card 
      title="Custom Padding" 
      description="This card has no padding on the left and right."
      :padding="{ top: true, right: false, bottom: true, left: false }"
    />
    <p class="text-sm mt-2">No horizontal padding</p>
  </div>
</div>

```html
<bo-card
	title="Default Padding"
	description="This card has padding on all sides (default)."
/>

<bo-card
	title="Custom Padding"
	description="This card has no padding on the left and right."
	:padding="{ top: true, right: false, bottom: true, left: false }"
/>
```
