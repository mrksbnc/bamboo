<script setup>
import { BoColor } from '@/shared/bo-color';
</script>

# Color System

The color system provides a comprehensive set of predefined colors aligned with the Tailwind CSS color palette. It enables consistent color usage throughout the application and ensures accessibility and visual harmony.

## Basic Usage

Colors are defined in the `BoColor` enum and can be imported and used in your components:

```typescript
import { BoColor } from '@/shared/bo-color';

// Using a specific color
const primaryColor = BoColor.blue_600;
const errorColor = BoColor.red_600;
```

## Color Palette

The color system is based on the Tailwind CSS color palette and includes a wide range of colors at various shades. Each color has a set of shades ranging from 50 (lightest) to 950 (darkest).

### Neutral Colors

<div class="flex flex-wrap gap-2">
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded bg-black"></div>
    <span class="text-xs mt-1">BoColor.black</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded bg-white border border-gray-200"></div>
    <span class="text-xs mt-1">BoColor.white</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded bg-transparent border border-gray-200"></div>
    <span class="text-xs mt-1">BoColor.transparent</span>
  </div>
</div>

### Gray Scale

<div class="flex flex-wrap gap-2">
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #f9fafb;"></div>
    <span class="text-xs mt-1">gray_50</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #f3f4f6;"></div>
    <span class="text-xs mt-1">gray_100</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #e5e7eb;"></div>
    <span class="text-xs mt-1">gray_200</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #d1d5db;"></div>
    <span class="text-xs mt-1">gray_300</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #9ca3af;"></div>
    <span class="text-xs mt-1">gray_400</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #6b7280;"></div>
    <span class="text-xs mt-1">gray_500</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #4b5563; color: white;"></div>
    <span class="text-xs mt-1">gray_600</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #374151; color: white;"></div>
    <span class="text-xs mt-1">gray_700</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #1f2937; color: white;"></div>
    <span class="text-xs mt-1">gray_800</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #111827; color: white;"></div>
    <span class="text-xs mt-1">gray_900</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #030712; color: white;"></div>
    <span class="text-xs mt-1">gray_950</span>
  </div>
</div>

### Primary Colors

<div class="flex flex-wrap gap-2">
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #eff6ff;"></div>
    <span class="text-xs mt-1">blue_50</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #dbeafe;"></div>
    <span class="text-xs mt-1">blue_100</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #bfdbfe;"></div>
    <span class="text-xs mt-1">blue_200</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #93c5fd;"></div>
    <span class="text-xs mt-1">blue_300</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #60a5fa;"></div>
    <span class="text-xs mt-1">blue_400</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #3b82f6; color: white;"></div>
    <span class="text-xs mt-1">blue_500</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #2563eb; color: white;"></div>
    <span class="text-xs mt-1">blue_600</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #1d4ed8; color: white;"></div>
    <span class="text-xs mt-1">blue_700</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #1e40af; color: white;"></div>
    <span class="text-xs mt-1">blue_800</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #1e3a8a; color: white;"></div>
    <span class="text-xs mt-1">blue_900</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="w-16 h-16 rounded" style="background-color: #172554; color: white;"></div>
    <span class="text-xs mt-1">blue_950</span>
  </div>
</div>

### Feedback Colors

<div class="flex flex-wrap gap-4">
  <div class="flex flex-col items-center">
    <div class="flex flex-wrap gap-1">
      <div class="w-8 h-8 rounded" style="background-color: #dc2626; color: white;"></div>
      <div class="w-8 h-8 rounded" style="background-color: #b91c1c; color: white;"></div>
      <div class="w-8 h-8 rounded" style="background-color: #7f1d1d; color: white;"></div>
    </div>
    <span class="text-xs mt-1">red (Error)</span>
  </div>
  
  <div class="flex flex-col items-center">
    <div class="flex flex-wrap gap-1">
      <div class="w-8 h-8 rounded" style="background-color: #ca8a04; color: white;"></div>
      <div class="w-8 h-8 rounded" style="background-color: #a16207; color: white;"></div>
      <div class="w-8 h-8 rounded" style="background-color: #713f12; color: white;"></div>
    </div>
    <span class="text-xs mt-1">yellow (Warning)</span>
  </div>
  
  <div class="flex flex-col items-center">
    <div class="flex flex-wrap gap-1">
      <div class="w-8 h-8 rounded" style="background-color: #16a34a; color: white;"></div>
      <div class="w-8 h-8 rounded" style="background-color: #15803d; color: white;"></div>
      <div class="w-8 h-8 rounded" style="background-color: #14532d; color: white;"></div>
    </div>
    <span class="text-xs mt-1">green (Success)</span>
  </div>
</div>

## Complete Color List

The `BoColor` enum provides the following color options:

```typescript
export enum BoColor {
	// Base colors
	inherit = 'inherit',
	current = 'currentColor',
	transparent = 'transparent',
	black = '#000',
	white = '#fff',

	// Gray shades
	gray_50 = '#f9fafb',
	gray_100 = '#f3f4f6',
	// ... more gray shades

	// Blue shades
	blue_50 = '#eff6ff',
	blue_100 = '#dbeafe',
	// ... more blue shades

	// Red shades
	red_50 = '#fef2f2',
	red_100 = '#fee2e2',
	// ... more red shades

	// Green shades
	green_50 = '#f0fdf4',
	green_100 = '#dcfce7',
	// ... more green shades

	// And many more color options...
}
```

## Color Usage Guidelines

### For Interfaces

- Use `blue_600` as the primary action color
- Use `gray_50` to `gray_200` for backgrounds
- Use `gray_700` to `gray_900` for text
- Use `red_600` for errors
- Use `yellow_600` for warnings
- Use `green_600` for success states

### For Accessibility

When using colors:

1. **Contrast**: Ensure sufficient contrast between text and background colors (minimum 4.5:1 for normal text, 3:1 for large text)
2. **Don't rely on color alone**: Always pair color indicators with text, icons, or patterns
3. **Consistency**: Use colors consistently across the application

### Dark Mode Considerations

When implementing dark mode:

- Replace light backgrounds (`gray_50` to `gray_200`) with dark backgrounds (`gray_800` to `gray_950`)
- Replace dark text colors with light text colors
- Adjust accent colors to have better contrast on dark backgrounds

## Integration with Tailwind

The color system can be easily integrated with Tailwind CSS classes:

```html
<!-- Using Tailwind classes that correspond to our color system -->
<div class="bg-blue-600 text-white">This uses the equivalent of BoColor.blue_600</div>
```

## Using Custom Colors

While the `BoColor` enum provides a comprehensive set of colors, there may be cases where you need to use custom colors:

```typescript
// Custom color not in the enum
const brandColor = '#FF5733';

// Using CSS variables for theme colors
const themePrimary = 'var(--color-primary)';
```

However, it's recommended to use the predefined colors whenever possible to maintain consistency across the application.
