<script setup>
import { BoPopover, BoPopoverPlacement, BoPopoverTrigger } from '@/components/popover';
import { BoButton } from '@/components/button';
import { BoSize } from '@/shared'
</script>

# BoPopover

A popover is a floating container that displays rich content in a trigger element. It can be used for various purposes, such as displaying additional information or actions related to a specific element.

```js
import { BoPopover } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-popover
		title="Popover Title"
		content="This is the popover content."
	>
		<template #trigger>
			<bo-button label="Click me" />
		</template>
	</bo-popover>
</template>

<script setup>
import { BoPopover } from '@mrksbnc/bamboo';
import { BoButton } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
	<BoPopover title="Popover Title" content="This is the popover content.">
		<template #trigger>
			<BoButton label="Click me" />
		</template>
	</BoPopover>
</div>

## Props

| Name                  | Type                 | Default                     | Description                                   |
| --------------------- | -------------------- | --------------------------- | --------------------------------------------- |
| `id`                  | `string`             | `auto-generated`            | Unique identifier for the popover             |
| `placement`           | `BoPopoverPlacement` | `BoPopoverPlacement.bottom` | Where the popover appears relative to trigger |
| `offset`              | `number`             | `8`                         | Distance in pixels from trigger element       |
| `trigger`             | `BoPopoverTrigger`   | `BoPopoverTrigger.click`    | Event that triggers the popover               |
| `interactive`         | `boolean`            | `true`                      | Whether the popover content is interactive    |
| `title`               | `string`             | `undefined`                 | Title text for the popover                    |
| `content`             | `string`             | `undefined`                 | Body text for the popover                     |
| `size`                | `BoSize`             | `BoSize.default`            | Size of the popover                           |
| `popoverClass`        | `string`             | `undefined`                 | Custom CSS class for the popover              |
| `arrow`               | `boolean`            | `true`                      | Whether to show the arrow pointing to trigger |
| `shadow`              | `boolean`            | `true`                      | Whether the popover should have a shadow      |
| `border`              | `boolean`            | `true`                      | Whether the popover should have a border      |
| `closeOnOutsideClick` | `boolean`            | `true`                      | Whether to close when clicking outside        |

## Events

| Name     | Payload | Description                 |
| -------- | ------- | --------------------------- |
| `opened` | `void`  | Emitted when popover opens  |
| `closed` | `void`  | Emitted when popover closes |

## Slots

| Name      | Description                   |
| --------- | ----------------------------- |
| `trigger` | Element that triggers popover |
| `default` | Custom popover content        |

## Types

```ts
export enum BoPopoverPlacement {
	top = 'top',
	top_start = 'top-start',
	top_end = 'top-end',
	right = 'right',
	right_start = 'right-start',
	right_end = 'right-end',
	bottom = 'bottom',
	bottom_start = 'bottom-start',
	bottom_end = 'bottom-end',
	left = 'left',
	left_start = 'left-start',
	left_end = 'left-end',
}

export enum BoPopoverTrigger {
	click = 'click',
	hover = 'hover',
	focus = 'focus',
}

export interface BoPopoverProps {
	id?: string;
	placement?: BoPopoverPlacement;
	offset?: number;
	trigger?: BoPopoverTrigger;
	interactive?: boolean;
	title?: string;
	content?: string;
	size?: BoSize;
	popoverClass?: string;
	arrow?: boolean;
	shadow?: boolean;
	border?: boolean;
	closeOnOutsideClick?: boolean;
}
```

## Placements

### Basic Placements

<div class="flex gap-4 items-center my-4">
	<BoPopover :placement="BoPopoverPlacement.top" title="Top" content="Popover positioned on top">
		<template #trigger>
			<BoButton label="Top" />
		</template>
	</BoPopover>
	<BoPopover
		:placement="BoPopoverPlacement.right"
		title="Right"
		content="Popover positioned on right"
	>
		<template #trigger>
			<BoButton label="Right" />
		</template>
	</BoPopover>
	<BoPopover
		:placement="BoPopoverPlacement.bottom"
		title="Bottom"
		content="Popover positioned on bottom"
	>
		<template #trigger>
			<BoButton label="Bottom" />
		</template>
	</BoPopover>
	<BoPopover :placement="BoPopoverPlacement.left" title="Left" content="Popover positioned on left">
		<template #trigger>
			<BoButton label="Left" />
		</template>
	</BoPopover>
</div>

```vue
<bo-popover :placement="BoPopoverPlacement.top" title="Top" content="Popover positioned on top">
	<template #trigger>
		<bo-button label="Top" />
	</template>
</bo-popover>
<bo-popover
	:placement="BoPopoverPlacement.right"
	title="Right"
	content="Popover positioned on right"
>
	<template #trigger>
		<bo-button label="Right" />
	</template>
</bo-popover>
<bo-popover
	:placement="BoPopoverPlacement.bottom"
	title="Bottom"
	content="Popover positioned on bottom"
>
	<template #trigger>
		<bo-button label="Bottom" />
	</template>
</bo-popover>
<bo-popover :placement="BoPopoverPlacement.left" title="Left" content="Popover positioned on left">
	<template #trigger>
		<bo-button label="Left" />
	</template>
</bo-popover>
```

### Aligned Placements

<div class="flex gap-4 items-center my-4">
	<BoPopover :placement="BoPopoverPlacement.top_start" title="Top Start" content="Aligned to start">
		<template #trigger>
			<BoButton label="Top Start" />
		</template>
	</BoPopover>
	<BoPopover :placement="BoPopoverPlacement.top_end" title="Top End" content="Aligned to end">
		<template #trigger>
			<BoButton label="Top End" />
		</template>
	</BoPopover>
	<BoPopover :placement="BoPopoverPlacement.bottom_start" title="Bottom Start" content="Aligned to start">
		<template #trigger>
			<BoButton label="Bottom Start" />
		</template>
	</BoPopover>
	<BoPopover :placement="BoPopoverPlacement.bottom_end" title="Bottom End" content="Aligned to end">
		<template #trigger>
			<BoButton label="Bottom End" />
		</template>
	</BoPopover>
</div>

```vue
<bo-popover :placement="BoPopoverPlacement.top_start" title="Top Start" content="Aligned to start">
	<template #trigger>
		<bo-button label="Top Start" />
	</template>
</bo-popover>
<bo-popover :placement="BoPopoverPlacement.top_end" title="Top End" content="Aligned to end">
	<template #trigger>
		<bo-button label="Top End" />
	</template>
</bo-popover>
```

## Triggers

### Click Trigger

<div class="flex gap-4 items-center my-4">
	<BoPopover :trigger="BoPopoverTrigger.click" title="Click Trigger" content="Click to toggle">
		<template #trigger>
			<BoButton label="Click me" />
		</template>
	</BoPopover>
</div>

```vue
<bo-popover :trigger="BoPopoverTrigger.click" title="Click Trigger" content="Click to toggle">
	<template #trigger>
		<bo-button label="Click me" />
	</template>
</bo-popover>
```

### Hover Trigger

<div class="flex gap-4 items-center my-4">
	<BoPopover :trigger="BoPopoverTrigger.hover" title="Hover Trigger" content="Hover to show">
		<template #trigger>
			<BoButton label="Hover me" />
		</template>
	</BoPopover>
</div>

```vue
<bo-popover :trigger="BoPopoverTrigger.hover" title="Hover Trigger" content="Hover to show">
	<template #trigger>
		<bo-button label="Hover me" />
	</template>
</bo-popover>
```

## Sizes

<div class="flex items-center gap-4 my-4">
	<BoPopover :size="BoSize.small" title="Small" content="Small popover">
		<template #trigger>
			<BoButton label="Small" />
		</template>
	</BoPopover>
	<BoPopover :size="BoSize.default" title="Default" content="Default popover">
		<template #trigger>
			<BoButton label="Default" />
		</template>
	</BoPopover>
	<BoPopover :size="BoSize.large" title="Large" content="Large popover">
		<template #trigger>
			<BoButton label="Large" />
		</template>
	</BoPopover>
</div>

```vue
<bo-popover :size="BoSize.small" title="Small" content="Small popover">
	<template #trigger>
		<bo-button label="Small" />
	</template>
</bo-popover>
<bo-popover :size="BoSize.default" title="Default" content="Default popover">
	<template #trigger>
		<bo-button label="Default" />
	</template>
</bo-popover>
<bo-popover :size="BoSize.large" title="Large" content="Large popover">
	<template #trigger>
		<bo-button label="Large" />
	</template>
</bo-popover>
```

## Visual States

### Without Arrow

<div class="flex gap-4 items-center my-4">
	<BoPopover :arrow="false" title="No Arrow" content="Popover without arrow">
		<template #trigger>
			<BoButton label="No Arrow" />
		</template>
	</BoPopover>
</div>

```vue
<bo-popover :arrow="false" title="No Arrow" content="Popover without arrow">
	<template #trigger>
		<bo-button label="No Arrow" />
	</template>
</bo-popover>
```

### Without Shadow

<div class="flex gap-4 items-center my-4">
	<BoPopover :shadow="false" title="No Shadow" content="Popover without shadow">
		<template #trigger>
			<BoButton label="No Shadow" />
		</template>
	</BoPopover>
</div>

```vue
<bo-popover :shadow="false" title="No Shadow" content="Popover without shadow">
	<template #trigger>
		<bo-button label="No Shadow" />
	</template>
</bo-popover>
```

### Without Border

<div class="flex gap-4 items-center my-4">
	<BoPopover :border="false" title="No Border" content="Popover without border">
		<template #trigger>
			<BoButton label="No Border" />
		</template>
	</BoPopover>
</div>

```vue
<bo-popover :border="false" title="No Border" content="Popover without border">
	<template #trigger>
		<bo-button label="No Border" />
	</template>
</bo-popover>
```

## Custom Content

<div class="flex gap-4 items-center my-4">
	<BoPopover>
		<template #trigger>
			<BoButton label="Custom Content" />
		</template>
		<div class="p-4">
			<h3 class="font-bold text-lg mb-2">Custom Popover</h3>
			<p class="text-sm text-gray-600 mb-3">This popover contains custom HTML content.</p>
			<BoButton label="Action Button" size="small" />
		</div>
	</BoPopover>
</div>

```vue
<bo-popover>
	<template #trigger>
		<bo-button label="Custom Content" />
	</template>
	<div class="p-4">
		<h3 class="font-bold text-lg mb-2">Custom Popover</h3>
		<p class="text-sm text-gray-600 mb-3">This popover contains custom HTML content.</p>
		<bo-button label="Action Button" size="small" />
	</div>
</bo-popover>
```

## Event Handling

```vue
<template>
	<bo-popover
		title="Event Popover"
		content="This popover emits events"
		@opened="handleOpened"
		@closed="handleClosed"
	>
		<template #trigger>
			<bo-button label="Event Demo" />
		</template>
	</bo-popover>
</template>

<script setup>
const handleOpened = () => {
	console.log('Popover opened');
};

const handleClosed = () => {
	console.log('Popover closed');
};
</script>
```

## Advanced Usage

### With Custom Offset

<div class="flex gap-4 items-center my-4">
	<BoPopover :offset="20" title="Custom Offset" content="20px offset from trigger">
		<template #trigger>
			<BoButton label="Custom Offset" />
		</template>
	</BoPopover>
</div>

```vue
<bo-popover :offset="20" title="Custom Offset" content="20px offset from trigger">
	<template #trigger>
		<bo-button label="Custom Offset" />
	</template>
</bo-popover>
```

### Non-interactive Popover

<div class="flex gap-4 items-center my-4">
	<BoPopover :interactive="false" title="Non-interactive" content="This popover is not interactive">
		<template #trigger>
			<BoButton label="Non-interactive" />
		</template>
	</BoPopover>
</div>

```vue
<bo-popover :interactive="false" title="Non-interactive" content="This popover is not interactive">
	<template #trigger>
		<bo-button label="Non-interactive" />
	</template>
</bo-popover>
```

### Custom Classes

<div class="flex gap-4 items-center my-4">
	<BoPopover
		popover-class="bg-blue-100 border-blue-300"
		title="Custom Style"
		content="Custom styled popover"
	>
		<template #trigger>
			<BoButton label="Custom Style" />
		</template>
	</BoPopover>
</div>

```vue
<bo-popover
	popover-class="bg-blue-100 border-blue-300"
	title="Custom Style"
	content="Custom styled popover"
>
	<template #trigger>
		<bo-button label="Custom Style" />
	</template>
</bo-popover>
```
