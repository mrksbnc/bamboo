<script setup>
import BoPopover from '@/components/popover/bo-popover.vue';
import BoButton from '@/components/button/bo-button.vue';
import { BoPopoverPlacement, BoPopoverTrigger } from '@/components/popover/bo-popover';
import { BoSize } from '@/shared/bo-size';
import { ref } from 'vue';

const isOpen = ref(false);
</script>

# Popover

A customizable popover component that displays floating content when triggered by a user interaction.

```js
import { BoPopover } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<BoPopover
		title="Popover Title"
		content="This is the popover content."
	>
		<template #trigger>
			<BoButton label="Click me" />
		</template>
	</BoPopover>
</template>

<script setup>
import { BoPopover, BoButton } from '@mrksbnc/bamboo';
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

| Name                  | Type                 | Default     | Description                                |
| --------------------- | -------------------- | ----------- | ------------------------------------------ |
| `id`                  | `string`             | `auto`      | Unique ID for the popover                  |
| `placement`           | `BoPopoverPlacement` | `bottom`    | Position of the popover relative to target |
| `offset`              | `number`             | `8`         | Distance from the target element (px)      |
| `trigger`             | `BoPopoverTrigger`   | `click`     | Event that triggers the popover            |
| `interactive`         | `boolean`            | `true`      | Allow interaction with popover content     |
| `title`               | `string`             | `undefined` | Title text for the popover                 |
| `content`             | `string`             | `undefined` | Content text for the popover               |
| `size`                | `BoSize`             | `default`   | Size of the popover                        |
| `popoverClass`        | `string`             | `''`        | Additional CSS classes for the popover     |
| `arrow`               | `boolean`            | `true`      | Show arrow pointing to the target          |
| `shadow`              | `boolean`            | `true`      | Add shadow to the popover                  |
| `border`              | `boolean`            | `true`      | Add border to the popover                  |
| `closeOnOutsideClick` | `boolean`            | `true`      | Close popover when clicking outside        |

The component uses `defineModel` to manage the popover state. This means that you can use the `v-model` directive to bind the popover to a variable.

## Events

| Name                | Payload   | Description                             |
| ------------------- | --------- | --------------------------------------- |
| `update:modelValue` | `boolean` | Emitted when popover visibility changes |
| `opened`            | -         | Emitted when popover opens              |
| `closed`            | -         | Emitted when popover closes             |

## Slots

| Name      | Description                       |
| --------- | --------------------------------- |
| `trigger` | Element that triggers the popover |
| `default` | Custom popover content            |

## Types

```ts
export enum BoPopoverPlacement {
	top = 'top',
	topStart = 'top-start',
	topEnd = 'top-end',
	right = 'right',
	rightStart = 'right-start',
	rightEnd = 'right-end',
	bottom = 'bottom',
	bottomStart = 'bottom-start',
	bottomEnd = 'bottom-end',
	left = 'left',
	leftStart = 'left-start',
	leftEnd = 'left-end',
}

export enum BoPopoverTrigger {
	click = 'click',
	hover = 'hover',
	focus = 'focus',
}

export interface BoPopoverProps {
	id?: string;
	modelValue?: boolean;
	placement?: BoPopoverPlacement;
	offset?: number;
	trigger?: BoPopoverTrigger;
	interactive?: boolean;
	title?: string;
	content?: string;
	size?: BoSize;
	popoverClass?: string;
	arrow?: boolean;
	animationDuration?: number;
	animation?: 'fade' | 'scale' | 'shift';
	shadow?: boolean;
	border?: boolean;
	closeOnOutsideClick?: boolean;
}
```

## Placements

<div class="flex flex-wrap gap-4 my-4">
  <BoPopover 
    :placement="BoPopoverPlacement.top" 
    title="Top" 
    content="Placement: top"
  >
    <template #trigger>
      <BoButton label="Top" />
    </template>
  </BoPopover>
  
  <BoPopover 
    :placement="BoPopoverPlacement.bottom" 
    title="Bottom" 
    content="Placement: bottom"
  >
    <template #trigger>
      <BoButton label="Bottom" />
    </template>
  </BoPopover>
  
  <BoPopover 
    :placement="BoPopoverPlacement.left" 
    title="Left" 
    content="Placement: left"
  >
    <template #trigger>
      <BoButton label="Left" />
    </template>
  </BoPopover>
  
  <BoPopover 
    :placement="BoPopoverPlacement.right" 
    title="Right" 
    content="Placement: right"
  >
    <template #trigger>
      <BoButton label="Right" />
    </template>
  </BoPopover>
</div>

```vue
<BoPopover :placement="BoPopoverPlacement.top" title="Top" content="Placement: top">
  <template #trigger>
    <BoButton label="Top" />
  </template>
</BoPopover>

<BoPopover :placement="BoPopoverPlacement.bottom" title="Bottom" content="Placement: bottom">
  <template #trigger>
    <BoButton label="Bottom" />
  </template>
</BoPopover>

<BoPopover :placement="BoPopoverPlacement.left" title="Left" content="Placement: left">
  <template #trigger>
    <BoButton label="Left" />
  </template>
</BoPopover>

<BoPopover :placement="BoPopoverPlacement.right" title="Right" content="Placement: right">
  <template #trigger>
    <BoButton label="Right" />
  </template>
</BoPopover>
```

## Trigger Types

<div class="flex gap-4 items-center my-4">
  <BoPopover 
    :trigger="BoPopoverTrigger.click" 
    title="Click Trigger" 
    content="Click to open/close"
  >
    <template #trigger>
      <BoButton label="Click" />
    </template>
  </BoPopover>
  
  <BoPopover 
    :trigger="BoPopoverTrigger.hover" 
    title="Hover Trigger" 
    content="Hover to open/close"
  >
    <template #trigger>
      <BoButton label="Hover" />
    </template>
  </BoPopover>
</div>

```vue
<BoPopover :trigger="BoPopoverTrigger.click" title="Click Trigger" content="Click to open/close">
  <template #trigger>
    <BoButton label="Click" />
  </template>
</BoPopover>

<BoPopover :trigger="BoPopoverTrigger.hover" title="Hover Trigger" content="Hover to open/close">
  <template #trigger>
    <BoButton label="Hover" />
  </template>
</BoPopover>

<BoPopover
	:trigger="BoPopoverTrigger.focus"
	title="Focus Trigger"
	content="Focus to open, blur to close"
>
  <template #trigger>
    <BoButton label="Focus" />
  </template>
</BoPopover>
```

## Sizes

<div class="flex gap-4 items-center my-4">
  <BoPopover 
    :size="BoSize.small" 
    title="Small" 
    content="This is a small popover"
  >
    <template #trigger>
      <BoButton label="Small" />
    </template>
  </BoPopover>
  
  <BoPopover 
    :size="BoSize.default" 
    title="Default" 
    content="This is a default size popover"
  >
    <template #trigger>
      <BoButton label="Default" />
    </template>
  </BoPopover>
  
  <BoPopover 
    :size="BoSize.large" 
    title="Large" 
    content="This is a large popover with more content space"
  >
    <template #trigger>
      <BoButton label="Large" />
    </template>
  </BoPopover>
</div>

```vue
<BoPopover :size="BoSize.small" title="Small" content="This is a small popover">
  <template #trigger>
    <BoButton label="Small" />
  </template>
</BoPopover>

<BoPopover :size="BoSize.default" title="Default" content="This is a default size popover">
  <template #trigger>
    <BoButton label="Default" />
  </template>
</BoPopover>

<BoPopover
	:size="BoSize.large"
	title="Large"
	content="This is a large popover with more content space"
>
  <template #trigger>
    <BoButton label="Large" />
  </template>
</BoPopover>
```

## Animation Types

<div class="flex gap-4 items-center my-4">
  <BoPopover 
    animation="fade" 
    title="Fade" 
    content="Fade animation"
  >
    <template #trigger>
      <BoButton label="Fade" />
    </template>
  </BoPopover>
  
  <BoPopover 
    animation="scale" 
    title="Scale" 
    content="Scale animation"
  >
    <template #trigger>
      <BoButton label="Scale" />
    </template>
  </BoPopover>
  
  <BoPopover 
    animation="shift" 
    title="Shift" 
    content="Shift animation"
  >
    <template #trigger>
      <BoButton label="Shift" />
    </template>
  </BoPopover>
</div>

```vue
<BoPopover animation="fade" title="Fade" content="Fade animation">
  <template #trigger>
    <BoButton label="Fade" />
  </template>
</BoPopover>

<BoPopover animation="scale" title="Scale" content="Scale animation">
  <template #trigger>
    <BoButton label="Scale" />
  </template>
</BoPopover>

<BoPopover animation="shift" title="Shift" content="Shift animation">
  <template #trigger>
    <BoButton label="Shift" />
  </template>
</BoPopover>
```

## Custom Content

<div class="flex gap-4 items-center my-4">
  <BoPopover>
    <template #trigger>
      <BoButton label="Custom Content" />
    </template>
    <template #default>
        <div>
      <h3 class="text-lg font-semibold mb-2">Custom Popover</h3>
      <p class="mb-2">This popover has custom content.</p>
      <div class="flex justify-end">
        <BoButton label="Action" size="small" />
      </div>
    </div>
    </template>
  </BoPopover>
</div>

```vue
<BoPopover>
  <template #trigger>
    <BoButton label="Custom Content" />
  </template>
  <template #default>
    <div>
      <h3 class="text-lg font-semibold mb-2">Custom Popover</h3>
      <p class="mb-2">This popover has custom content.</p>
      <div class="flex justify-end">
        <BoButton label="Action" size="small" />
      </div>
    </div>
  </template>
</BoPopover>
```
