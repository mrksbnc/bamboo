<script setup>
import { BoLoadingPulse } from '@/components/bo-loading-pulse';
import { BoSize, BoLoaderVariant, BoLoaderTextPosition } from '@/shared';
</script>

# Loading Pulse

The Loading Pulse component provides an animated pulse effect to indicate loading or processing states. It supports various sizes, colors, and text positions to match your application's design system. The component is designed to be accessible and provides clear visual feedback to users.

## Basic Example

```html
<bo-loading-pulse />
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
  <bo-loading-pulse />
</div>

### Props

| Prop name      | Type                   | Default   | Description                                |
| -------------- | ---------------------- | --------- | ------------------------------------------ |
| `size`         | `BoSize`               | `md`      | Size of the loading pulse                  |
| `variant`      | `BoLoaderVariant`      | `primary` | Color variant of the pulse                 |
| `customColor`  | `string`               | -         | Custom color for the pulse                 |
| `loaderText`   | `string`               | -         | Text to display with the pulse             |
| `textPosition` | `BoLoaderTextPosition` | `side`    | Position of the text relative to the pulse |

## Basic Usage

A simple loading pulse:

<div class="flex flex-wrap gap-4 items-center">
  <bo-loading-pulse />
</div>

```html
<bo-loading-pulse />
```

## Sizes

The Loading Pulse component supports different sizes:

<div class="flex flex-wrap gap-4 items-center">
  <bo-loading-pulse :size="BoSize.xs" />
  <bo-loading-pulse :size="BoSize.sm" />
  <bo-loading-pulse :size="BoSize.md" />
  <bo-loading-pulse :size="BoSize.lg" />
  <bo-loading-pulse :size="BoSize.xl" />
</div>

```html
<bo-loading-pulse :size="BoSize.xs" />
<bo-loading-pulse :size="BoSize.sm" />
<bo-loading-pulse :size="BoSize.md" />
<bo-loading-pulse :size="BoSize.lg" />
<bo-loading-pulse :size="BoSize.xl" />
```

## Variants

Different color variants are available:

<div class="flex flex-wrap gap-4 items-center">
  <bo-loading-pulse :variant="BoLoaderVariant.primary" />
  <bo-loading-pulse :variant="BoLoaderVariant.secondary" />
  <bo-loading-pulse :variant="BoLoaderVariant.danger" />
  <bo-loading-pulse :variant="BoLoaderVariant.warning" />
  <bo-loading-pulse :variant="BoLoaderVariant.success" />
  <bo-loading-pulse :variant="BoLoaderVariant.dark" />
  <bo-loading-pulse :variant="BoLoaderVariant.white" />
</div>

```html
<bo-loading-pulse :variant="BoLoaderVariant.primary" />
<bo-loading-pulse :variant="BoLoaderVariant.secondary" />
<bo-loading-pulse :variant="BoLoaderVariant.danger" />
<bo-loading-pulse :variant="BoLoaderVariant.warning" />
<bo-loading-pulse :variant="BoLoaderVariant.success" />
<bo-loading-pulse :variant="BoLoaderVariant.dark" />
<bo-loading-pulse :variant="BoLoaderVariant.white" />
```

## Custom Colors

You can use custom colors for the pulse:

<div class="flex flex-wrap gap-4 items-center">
  <bo-loading-pulse customColor="#FF0000" />
  <bo-loading-pulse customColor="#00FF00" />
  <bo-loading-pulse customColor="#0000FF" />
</div>

```html
<bo-loading-pulse customColor="#FF0000" />
<bo-loading-pulse customColor="#00FF00" />
<bo-loading-pulse customColor="#0000FF" />
```

## With Text

The pulse can include text in different positions:

<div class="flex flex-col gap-4">
  <bo-loading-pulse 
    loaderText="Loading..." 
    :textPosition="BoLoaderTextPosition.side" 
  />
  <bo-loading-pulse 
    loaderText="Loading..." 
    :textPosition="BoLoaderTextPosition.bottom" 
  />
</div>

```html
<bo-loading-pulse
	loaderText="Loading..."
	:textPosition="BoLoaderTextPosition.side"
/>
<bo-loading-pulse
	loaderText="Loading..."
	:textPosition="BoLoaderTextPosition.bottom"
/>
```

## Accessibility Features

The Loading Pulse component includes several accessibility features:

- ARIA attributes for screen readers
- Proper role and state announcements
- Support for custom accessible names
- Clear visual feedback
- Consistent animation patterns

## Best Practices

When using the Loading Pulse component:

1. Use appropriate sizes based on context
2. Choose variants that match your design system
3. Consider using text to provide additional context
4. Test with screen readers to ensure proper accessibility
5. Use consistent loading indicators throughout your application
6. Consider the duration of loading states
7. Provide fallback content when loading fails
