<script setup>
import { BoLoadingSpinner } from '@/components/bo-loading-spinner';
import { BoSize, BoLoaderVariant, BoLoaderTextPosition } from '@/shared';
</script>

# Loading Spinner

The Loading Spinner component provides a visual indicator that content is being loaded or processed. It supports various sizes, colors, and text positions to match your application's design system. The component is designed to be accessible and provides clear visual feedback to users.

## Basic Example

```html
<bo-loading-spinner />
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
  <bo-loading-spinner />
</div>

### Props

| Prop name      | Type                   | Default   | Description                                  |
| -------------- | ---------------------- | --------- | -------------------------------------------- |
| `size`         | `BoSize`               | `md`      | Size of the loading spinner                  |
| `variant`      | `BoLoaderVariant`      | `primary` | Color variant of the spinner                 |
| `customColor`  | `string`               | -         | Custom color for the spinner                 |
| `loaderText`   | `string`               | -         | Text to display with the spinner             |
| `textPosition` | `BoLoaderTextPosition` | `side`    | Position of the text relative to the spinner |

## Basic Usage

A simple loading spinner:

<div class="flex flex-wrap gap-4 items-center">
  <bo-loading-spinner />
</div>

```html
<bo-loading-spinner />
```

## Sizes

The Loading Spinner component supports different sizes:

<div class="flex flex-wrap gap-4 items-center">
  <bo-loading-spinner :size="BoSize.xs" />
  <bo-loading-spinner :size="BoSize.sm" />
  <bo-loading-spinner :size="BoSize.md" />
  <bo-loading-spinner :size="BoSize.lg" />
  <bo-loading-spinner :size="BoSize.xl" />
</div>

```html
<bo-loading-spinner :size="BoSize.xs" />
<bo-loading-spinner :size="BoSize.sm" />
<bo-loading-spinner :size="BoSize.md" />
<bo-loading-spinner :size="BoSize.lg" />
<bo-loading-spinner :size="BoSize.xl" />
```

## Variants

Different color variants are available:

<div class="flex flex-wrap gap-4 items-center">
  <bo-loading-spinner :variant="BoLoaderVariant.primary" />
  <bo-loading-spinner :variant="BoLoaderVariant.secondary" />
  <bo-loading-spinner :variant="BoLoaderVariant.danger" />
  <bo-loading-spinner :variant="BoLoaderVariant.warning" />
  <bo-loading-spinner :variant="BoLoaderVariant.success" />
  <bo-loading-spinner :variant="BoLoaderVariant.dark" />
  <bo-loading-spinner :variant="BoLoaderVariant.white" />
</div>

```html
<bo-loading-spinner :variant="BoLoaderVariant.primary" />
<bo-loading-spinner :variant="BoLoaderVariant.secondary" />
<bo-loading-spinner :variant="BoLoaderVariant.danger" />
<bo-loading-spinner :variant="BoLoaderVariant.warning" />
<bo-loading-spinner :variant="BoLoaderVariant.success" />
<bo-loading-spinner :variant="BoLoaderVariant.dark" />
<bo-loading-spinner :variant="BoLoaderVariant.white" />
```

## Custom Colors

You can use custom colors for the spinner:

<div class="flex flex-wrap gap-4 items-center">
  <bo-loading-spinner customColor="#FF0000" />
  <bo-loading-spinner customColor="#00FF00" />
  <bo-loading-spinner customColor="#0000FF" />
</div>

```html
<bo-loading-spinner customColor="#FF0000" />
<bo-loading-spinner customColor="#00FF00" />
<bo-loading-spinner customColor="#0000FF" />
```

## With Text

The spinner can include text in different positions:

<div class="flex flex-col gap-4">
  <bo-loading-spinner 
    loaderText="Loading..." 
    :textPosition="BoLoaderTextPosition.side" 
  />
  <bo-loading-spinner 
    loaderText="Loading..." 
    :textPosition="BoLoaderTextPosition.bottom" 
  />
</div>

```html
<bo-loading-spinner
	loaderText="Loading..."
	:textPosition="BoLoaderTextPosition.side"
/>
<bo-loading-spinner
	loaderText="Loading..."
	:textPosition="BoLoaderTextPosition.bottom"
/>
```

## Accessibility Features

The Loading Spinner component includes several accessibility features:

- ARIA attributes for screen readers
- Proper role and state announcements
- Support for custom accessible names
- Clear visual feedback
- Consistent animation patterns

## Best Practices

When using the Loading Spinner component:

1. Use appropriate sizes based on context
2. Choose variants that match your design system
3. Consider using text to provide additional context
4. Test with screen readers to ensure proper accessibility
5. Use consistent loading indicators throughout your application
6. Consider the duration of loading states
7. Provide fallback content when loading fails
