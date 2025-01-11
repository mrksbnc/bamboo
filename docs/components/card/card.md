<script setup>
import { BoCard } from '@/components/bo_card';
import { BoBadge } from '@/components/bo_badge';
import { BoText } from '@/components/bo_text';
</script>

# bo-card

A card is a container that holds related content and actions with a predifined style.

<bo-card title="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam." />

## Basic usage

The component to use is called `bo-card`.

```vue
<bo-card title="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
```

## Props

| Prop name                 | Type      | Default value |
| ------------------------- | --------- | ------------- |
| `title`                   | `string`  | `undefined`   |
| `description`             | `string`  | `undefined`   |
| `clickable`               | `boolean` | `false`       |
| `width-in-px`             | `number`  | `undefined`   |
| `width-in-percent`        | `number`  | `undefined`   |
| `width-as-tailwind-class` | `string`  | `undefined`   |

## Title and description

In case you just want to display a title and description, you can use the `title` and `description` props.

<bo-card title="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

## Slots

In case you just need a container but you want to display fully customized content, you can use the `content` slot.

<bo-card>
    <template #content>
        <div class="flex flex-col gap-2">
            <bo-text text="Title" size="lg" font-family="sans" weight="bold" />
            <div class="flex gap-4">
              <bo-badge label="Badge 1" variant="danger" />
              <bo-badge label="Badge 2" variant="warning" />
              <bo-badge label="Badge 3" variant="success" />
            </div>
            <bo-text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi." color="secondary" size="sm" font-family="sans" />
        </div>
    </template>
</bo-card>

```vue
<bo-card>
    <template #content>
        <div class="flex flex-col gap-2">
            <bo-text text="Title" size="lg" font-family="sans" weight="bold" />
            <div class="flex gap-4">
              <bo-badge label="Badge 1" variant="danger" />
              <bo-badge label="Badge 2" variant="warning" />
              <bo-badge label="Badge 3" variant="success" />
            </div>
            <bo-text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi." color="secondary" size="sm" font-family="sans" />
        </div>
    </template>
</bo-card>
```

## Clickable

To add cursor pointer and hover effect to the card, you can use the `clickable` prop.

<bo-card title="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." clickable />

## Custom width

There are three ways to customize the width of the card.

### Width in px

In case you want to use fixed width, you can use the `width-in-px` prop.

<bo-card title="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." :width-in-px="500" />

```vue
<bo-card
	title="Title"
	description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	:width-in-px="500"
/>
```

### Width in percent

In case you want to use a percentage width, you can use the `width-in-percent` prop.

<div class="flex w-full gap-2">
    <bo-card title="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." :width-in-percent="100" />
</div>

```vue
<bo-card
	title="Title"
	description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	:width-in-percent="100"
/>
```

### Width as tailwind class

As the library uses Tailwind CSS, you can use the `width-as-tailwind-class` prop to set the width of the card as a tailwind utility class.

<bo-card title="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." width-as-tailwind-class="w-full" />

```vue
<bo-card
	title="Title"
	description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
	width-as-tailwind-class="w-full"
/>
```
