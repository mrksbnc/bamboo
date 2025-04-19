# BoCard

A versatile card component for displaying content with headers, descriptions, and optional actions. Cards are useful for organizing information into digestible sections.

## Basic Usage

```vue
<template>
  <bo-card
    title="Card Title"
    description="This is a simple card with a title and description."
  >
    <template #content>
      <!-- Card content here -->
    </template>
  </bo-card>
</template>

<script setup>
import { BoCard } from '@/components/bo_card'
</script>
```

## Live Example

<script setup>
import { BoSize } from '@/shared';
import { BoCard } from '@/components/bo_card';
import { BoButton, BoButtonVariant } from '@/components/bo_button';
import { BoIcon, Icon } from '@/components/bo_icon';
import { bo-text, BoFontSize, BoTextColor, BoFontWeight } from '@/components/bo_text';
</script>

<bo-card>
  <template #header>
    <div class="flex flex-row items-center gap-2 text-neutral-900 dark:text-neutral-100">
      <bo-icon :icon="Icon.globe" :size="BoSize.default" />
      <bo-text text="Card Example" :size="BoFontSize['xl']" :color="BoTextColor.default" :weight="BoFontWeight.semibold" />
    </div>
  </template>
  <template #content>
    <div class="flex flex-col gap-2">
      <bo-text :size="BoFontSize.sm" :color="BoTextColor.secondary" text="This is an example of a card component with header, content, and actions. Cards can be used to group related information and provide a consistent UI pattern." />
    </div>
  </template>
  <template #actions>
    <div class="mt-4 flex gap-2">
      <bo-button label="Read more" :size="BoSize.small" :variant="BoButtonVariant.primary" />
      <bo-button label="Cancel" :size="BoSize.small" :variant="BoButtonVariant.secondary" />
    </div>
  </template>
</bo-card>

## Variants

Cards themselves don't have variants, but they can contain various types of content.

## Clickable Cards

Cards can be made clickable by setting the `clickable` prop to `true`.

```vue
<bo-card title="Clickable Card" clickable @click="handleClick">
  <template #content>
    Click anywhere on this card to trigger an action
  </template>
</bo-card>
```

## Disabled Cards

Cards can be disabled with the `disabled` prop.

```vue
<bo-card title="Disabled Card" disabled>
  <template #content>
    This card is disabled and cannot be interacted with
  </template>
</bo-card>
```

## Sizing Options

Cards can be sized using three properties:

- `widthInPx` - Set width in pixels
- `widthInPercent` - Set width as a percentage
- `widthAsTailwindClass` - Set width using a Tailwind CSS class

```vue
<bo-card title="Specific Width" :widthInPx="300">
  <!-- Card content -->
</bo-card>

<bo-card title="Percentage Width" :widthInPercent="50">
  <!-- Card content -->
</bo-card>

<bo-card title="Tailwind Width" widthAsTailwindClass="w-1/2">
  <!-- Card content -->
</bo-card>
```

## Padding Options

Control padding on each side of the card by setting the `padding` prop:

```vue
<bo-card
  title="Custom Padding"
  :padding="{
    top: true,
    right: false,
    bottom: true,
    left: false,
  }"
>
  <!-- Card content -->
</bo-card>
```

## Component API

### Props

```ts
interface BoCardProps {
  title?: string
  description?: string
  widthInPx?: number
  widthInPercent?: number
  widthAsTailwindClass?: string
  padding?: {
    top: boolean
    right: boolean
    bottom: boolean
    left: boolean
  }
  clickable?: boolean
  disabled?: boolean
}
```

Example of defining props in your component:

```vue
<script setup lang="ts">
import { BoCard } from '@/components/bo_card'

const cardProps = {
  title: 'Card Title',
  description: 'Card description text',
  widthInPx: 400, // Fixed width in pixels
  padding: {
    top: true,
    right: true,
    bottom: true,
    left: true,
  },
  clickable: true,
  disabled: false,
}

const handleClick = (event) => {
  console.log('Card clicked', event)
}
</script>

<template>
  <bo-card
    v-bind="cardProps"
    @click="handleClick"
  >
    <template #content>
      <!-- Card content -->
    </template>
  </bo-card>
</template>
```

### Emits

```ts
// Events emitted by the component
const emit = defineEmits(['click'])
```

### Slots

| Slot      | Description                            |
| --------- | -------------------------------------- |
| `header`  | Custom header content (replaces title) |
| `content` | Main content area                      |
| `actions` | Action buttons or controls             |
