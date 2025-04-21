# Tailwind Service

The Tailwind Service provides utilities for working with Tailwind CSS classes and configurations.

## Methods

### `getColorClasses(color: string)`

Returns Tailwind color classes for a given color.

```typescript
getColorClasses(color: string): string[]
```

### `getSpacingClasses(size: string)`

Returns Tailwind spacing classes for a given size.

```typescript
getSpacingClasses(size: string): string[]
```

### `getTypographyClasses(variant: string)`

Returns Tailwind typography classes for a given variant.

```typescript
getTypographyClasses(variant: string): string[]
```

### `mergeClasses(...classes: string[])`

Merges multiple Tailwind classes, handling conflicts.

```typescript
mergeClasses(...classes: string[]): string
```

### `getResponsiveClasses(classes: Record<string, string>)`

Returns responsive Tailwind classes.

```typescript
getResponsiveClasses(classes: Record<string, string>): string
```

## Usage Examples

```typescript
import { tailwindService } from '@/services';

// Get color classes
const colorClasses = tailwindService.getColorClasses('primary');
console.log(colorClasses); // ['text-primary-500', 'bg-primary-100']

// Get spacing classes
const spacingClasses = tailwindService.getSpacingClasses('md');
console.log(spacingClasses); // ['p-4', 'm-4']

// Get typography classes
const typographyClasses = tailwindService.getTypographyClasses('heading');
console.log(typographyClasses); // ['text-2xl', 'font-bold']

// Merge classes
const merged = tailwindService.mergeClasses('text-red-500', 'text-blue-500');
console.log(merged); // 'text-blue-500'

// Get responsive classes
const responsive = tailwindService.getResponsiveClasses({
	sm: 'text-sm',
	md: 'text-md',
	lg: 'text-lg',
});
console.log(responsive); // 'sm:text-sm md:text-md lg:text-lg'
```
