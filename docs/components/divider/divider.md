<script setup>
import { BoDivider, BoDividerVariant } from '@/components/bo_divider';
</script>

# bo-divider

A divider is a thin line that groups content in a list or separates sections.

<bo-divider />

## Basic usage

The component to use is called `bo-divider`.

```vue
<bo-divider />
```

## Props

| Prop name        | Type               | Default value              |
| ---------------- | ------------------ | -------------------------- |
| `id`             | `string`           | `undefined`                |
| `variant`        | `BoDividerVariant` | `BoDividerVariant.primary` |
| `color-hex`      | `string`           | `undefined`                |
| `tailwind-color` | `string`           | `undefined`                |

## Variants

To change the style of the divider, you can use the `variant` prop.

The available values for the `variant` prop are:

- `default`
- `dotted`
- `dashed`

<div class="flex flex-col gap-2">
    <bo-divider :variant="BoDividerVariant.default" />
    <bo-divider :variant="BoDividerVariant.dotted" />
    <bo-divider :variant="BoDividerVariant.dashed" />
</div>

```vue
<bo-divider variant="default" />
```

## Colors

There are two ways to change the color of the divider.

- By using the `color-hex` prop
- By using the `tailwind-color` prop

### Color by hex

To change the color of the divider, you can use the `color-hex` prop.

<div class="flex flex-col gap-2">
    <bo-divider :color-hex="'#41b883'" />
    <bo-divider :color-hex="'#ff0000'" />
    <bo-divider :color-hex="'#000000'" />
</div>

```vue
<bo-divider :color-hex="'#41b883'" />
<bo-divider :color-hex="'#ff0000'" />
<bo-divider :color-hex="'#000000'" />
```

### Color by tailwind

To change the color of the divider, you can also use the `tailwind-color` prop. This accepts any valid border color from the [Tailwind CSS documentation](https://tailwindcss.com/docs/border-color).

<div class="flex flex-col gap-2">
    <bo-divider :tailwind-color="'border-blue-600'" />
    <bo-divider :tailwind-color="'border-red-600'" />
    <bo-divider :tailwind-color="'border-black'" />
</div>

```vue
<bo-divider :tailwind-color="'border-blue-600'" />
<bo-divider :tailwind-color="'border-red-600'" />
<bo-divider :tailwind-color="'border-black'" />
```
