<script setup>
import { BoLoadingSpinner } from '@/components/bo-loading-spinner'
import { BoLoaderVariant, BoLoaderTextPosition } from '@/shared/bo-loader'
import { BoSize } from '@/shared/bo-size'
</script>

# Loading Spinner

The Loading Spinner component provides visual feedback to users when content is loading or an operation is in progress. It helps improve user experience by indicating that the application is working even when results are not immediately available.

## Basic Example

```vue
<bo-loading-spinner />
```

## Props

| Prop           | Type                   | Default     | Description                                      |
| -------------- | ---------------------- | ----------- | ------------------------------------------------ |
| `size`         | `BoSize`               | `default`   | Sets the size of the spinner                     |
| `variant`      | `BoLoaderVariant`      | `primary`   | Defines the color variant of the spinner         |
| `customColor`  | `string`               | `undefined` | Allows specifying a custom color for the spinner |
| `loaderText`   | `string`               | `undefined` | Text to display alongside the spinner            |
| `textPosition` | `BoLoaderTextPosition` | `bottom`    | Position of the text relative to the spinner     |

## Types

### BoLoaderVariant

```typescript
enum BoLoaderVariant {
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	warning = 'warning',
	success = 'success',
	dark = 'dark',
	white = 'white',
}
```

### BoLoaderTextPosition

```typescript
enum BoLoaderTextPosition {
	side = 'side',
	bottom = 'bottom',
}
```

### BoSize

```typescript
enum BoSize {
	extra_small = 'extra_small',
	small = 'small',
	default = 'default',
	large = 'large',
	extra_large = 'extra_large',
}
```

## Examples

### Sizes

Loading spinners come in different sizes to match different UI scenarios.

```vue
<div class="flex flex-row items-center gap-1">
  <bo-loading-spinner :size="BoSize.extra_small" />
  <bo-loading-spinner :size="BoSize.small" />
  <bo-loading-spinner :size="BoSize.default" />
  <bo-loading-spinner :size="BoSize.large" />
  <bo-loading-spinner :size="BoSize.extra_large" />
</div>
```

### Color Variants

Choose from predefined color variants to match your application's design.

```vue
<div class="flex flex-row gap-1 items-center">
  <bo-loading-spinner :variant="BoLoaderVariant.primary" />
  <bo-loading-spinner :variant="BoLoaderVariant.secondary" />
  <bo-loading-spinner :variant="BoLoaderVariant.success" />
  <bo-loading-spinner :variant="BoLoaderVariant.danger" />
  <bo-loading-spinner :variant="BoLoaderVariant.warning" />
  <bo-loading-spinner :variant="BoLoaderVariant.dark" />
  <div class="p-2 bg-gray-800 rounded">
    <bo-loading-spinner :variant="BoLoaderVariant.white" />
  </div>
</div>
```

### Custom Colors

Use custom colors when predefined variants don't match your needs.

```vue
<div class="flex flex-row items-center gap-1">
  <bo-loading-spinner custom-color="#6366F1" />
  <bo-loading-spinner custom-color="#EC4899" />
  <bo-loading-spinner custom-color="#8B5CF6" />
  <bo-loading-spinner custom-color="rgb(59, 130, 246)" />
</div>
```

### With Text

Add descriptive text to provide more context about the loading operation.

```vue
<div class="flex flex-col gap-1">
  <bo-loading-spinner loader-text="Loading..." />
  <bo-loading-spinner 
    loader-text="Loading data" 
    :text-position="BoLoaderTextPosition.side" 
  />
</div>
```

### In Components

Use the loading spinner within other components to indicate loading states.

```vue
<div class="flex flex-col gap-1">
  <div class="p-4 border rounded">
    <bo-loading-spinner
      :size="BoSize.small"
      loader-text="Loading content..."
    />
  </div>

  <button class="flex items-center gap-1 px-4 py-2 bg-blue-500 text-white rounded">
    <bo-loading-spinner
      :size="BoSize.small"
      :variant="BoLoaderVariant.white"
    />
    Processing
  </button>
</div>
```
