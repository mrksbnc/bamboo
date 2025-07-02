<script setup>
import { BoSize } from '@/shared/bo-size';
import { BoBadge } from '@/components/badge';
</script>

# Size System

The size system provides standardized sizing options for components throughout the application. These predefined sizes ensure consistent scaling and visual harmony across the UI.

## Basic Usage

Sizes are defined in the `BoSize` enum and can be imported and used in your components:

```typescript
import { BoSize } from '@/shared/bo-size.js';

// Using a specific size
const buttonSize = BoSize.large;
const iconSize = BoSize.small;
```

## Available Sizes

The `BoSize` enum provides five standard size options:

```typescript
export enum BoSize {
	/** Extra small size - for compact UI elements */
	extra_small = 'extra-small',
	/** Small size - for secondary or less prominent UI elements */
	small = 'small',
	/** Default/medium size - for most standard UI elements */
	default = 'default',
	/** Large size - for emphasized or important UI elements */
	large = 'large',
	/** Extra large size - for highly prominent or focal UI elements */
	extra_large = 'extra-large',
}
```

## Visual Comparison

Here's how different sizes look when applied to components:

### Badges with Different Sizes

<div class="flex flex-wrap items-center gap-4">
	<bo-badge label="XS" :size="BoSize.extra_small" />
	<bo-badge label="Small" :size="BoSize.small" />
	<bo-badge label="Default" :size="BoSize.default" />
	<bo-badge label="Large" :size="BoSize.large" />
	<bo-badge label="XL" :size="BoSize.extra_large" />
</div>

```vue
<bo-badge label="XS" :size="BoSize.extra_small" />
<bo-badge label="Small" :size="BoSize.small" />
<bo-badge label="Default" :size="BoSize.default" />
<bo-badge label="Large" :size="BoSize.large" />
<bo-badge label="XL" :size="BoSize.extra_large" />
```

## When to Use Each Size

Different sizes serve different purposes in the UI:

- **Extra Small (`extra_small`)**: Use for very compact interfaces, auxiliary elements, or when space is extremely limited. Good for dense information displays or small badges.

- **Small (`small`)**: Use for secondary actions, less important information, or when space is limited. Appropriate for form labels, secondary buttons, or supporting elements.

- **Default (`default`)**: The standard size for most UI elements. This is the go-to size for general purpose usage and should be the most common size in your interface.

- **Large (`large`)**: Use for emphasized elements, important calls to action, or when you want to draw more attention to a component. Good for primary actions or highlighted information.

- **Extra Large (`extra_large`)**: Use for the most prominent elements, key focal points, or hero sections of your interface. Reserve this size for truly important elements to maintain visual hierarchy.

## Consistent Scaling

The size system ensures that components scale consistently across the application. When implementing a new component that supports different sizes, follow these guidelines:

- Maintain consistent proportions between different sizes
- Use appropriate spacing, padding, and font sizes for each size
- Ensure that icons and other visual elements scale proportionally
- Test all sizes to ensure they remain usable and accessible

## Responsive Considerations

When building responsive interfaces:

- Consider using smaller sizes on mobile devices
- Use larger sizes for touch targets on touch devices
- Adjust sizes based on viewport dimensions
- Maintain a clear visual hierarchy regardless of size

## Accessibility Implications

When using different sizes, remember:

- Ensure touch targets are large enough (at least 44×44 pixels) for interactive elements
- Maintain sufficient contrast at all sizes
- Don't make text too small to read (minimum 16px for body text)
- Test with users who have motor or visual impairments
