# TailwindUtils

The `TailwindUtils` class provides a simple but powerful utility for working with Tailwind CSS classes in your components.

## API Reference

### `merge`

```typescript
static merge(...classes: (string | null | undefined)[]): string
```

Merges multiple class strings into a single string, with these key features:

- **Deduplication**: Removes duplicate class names using JavaScript's Set
- **Handles null/undefined**: Safely ignores null and undefined values
- **Space handling**: Properly splits space-separated class strings

## How It Works

The `merge` function works through a series of steps:

1. **Early return for empty inputs**: Returns an empty string immediately if no classes are provided.
2. **Filter out falsy values**: Removes `null` and `undefined` values from the input.
3. **Split and flatten**: Splits each string by spaces and flattens the result.
4. **Deduplication**: Uses a Set to ensure each class appears only once.
5. **Joining**: Combines all unique classes into a space-separated string.

## Usage Examples

### Basic Merging

```typescript
import { TailwindUtils } from '@/utils'

// Merge multiple class strings
const classes = TailwindUtils.merge('p-4 m-2', 'text-blue-500', 'rounded-lg')
// => "p-4 m-2 text-blue-500 rounded-lg"
```

### Conditional Classes

You can use ternary expressions to conditionally apply classes:

```typescript
const isActive = true
const isDisabled = false

const buttonClasses = TailwindUtils.merge(
  'px-4 py-2 rounded', // Base classes
  isActive ? 'bg-blue-500 text-white' : null, // Applied when isActive is true
  isDisabled ? 'opacity-50 cursor-not-allowed' : null, // Applied when isDisabled is true
)
// => "px-4 py-2 rounded bg-blue-500 text-white"
```

### Handling Duplicates

The utility automatically handles duplicate classes:

```typescript
// Duplicate classes are automatically removed
const classes = TailwindUtils.merge('bg-blue-500', 'p-4', 'bg-blue-500')
// => "bg-blue-500 p-4"
```

### With Null/Undefined Values

The utility safely handles null and undefined values:

```typescript
// Safely handles null/undefined values
const dynamicClass = condition ? 'bg-green-500' : null
const classes = TailwindUtils.merge('p-4', dynamicClass, undefined)
// => "p-4 bg-green-500" (if condition is true)
// => "p-4" (if condition is false)
```

## Real-World Examples

### Component with Conditional Classes

```vue
<template>
  <button :class="buttonClasses">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TailwindUtils } from '@/utils'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
)

const buttonClasses = computed(() => {
  const baseClasses = 'rounded-md font-medium transition-colors'

  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  }[props.variant]

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  }[props.size]

  const disabledClasses = props.disabled ? 'opacity-50 cursor-not-allowed' : null

  return TailwindUtils.merge(baseClasses, variantClasses, sizeClasses, disabledClasses)
})
</script>
```

## Performance Tips

For optimal performance:

- In Vue, use computed properties to store the results of `TailwindUtils.merge`.
- For static class combinations that don't depend on state, define them outside component functions.

```typescript
// Vue example with computed property
const buttonClasses = computed(() => {
  return TailwindUtils.merge('px-4 py-2 rounded', props.isActive ? 'bg-blue-500 text-white' : null)
})
```
