<script setup>
import { BoSize } from '@/shared/bo-size.js';
import { BoButton } from '@/components/bo-button';
import { BoBadge } from '@/components/bo-badge';
</script>

# Size System

The size system provides standardized sizing options for components throughout the application. These predefined sizes ensure consistent scaling and visual harmony across the UI.

## Basic Usage

Sizes are defined in the `BoSize` enum and can be imported and used in your components:

```typescript
import { BoSize } from '@/shared/bo-size.js';

// Using a specific size
const buttonSize = BoSize.md;
const iconSize = BoSize.sm;
```

## Available Sizes

The `BoSize` enum provides five standard size options:

```typescript
export enum BoSize {
	/** Extra small size - for compact UI elements */
	xs = 'xs',
	/** Small size - for secondary or less prominent UI elements */
	sm = 'sm',
	/** Default/medium size - for most standard UI elements */
	md = 'md',
	/** Large size - for emphasized or important UI elements */
	lg = 'lg',
	/** Extra large size - for highly prominent or focal UI elements */
	xl = 'xl',
}
```

**Alias constants** are also available for more intuitive usage:

```typescript
// These constants provide aliases to the BoSize enum
export const BoSize = {
	xs: BoSize.xs,
	sm: BoSize.sm,
	md: BoSize.md,
	lg: BoSize.lg,
	xl: BoSize.xl,
};
```

## Visual Comparison

Here's how different sizes look when applied to components:

### Buttons with Different Sizes

<div class="flex flex-wrap items-center gap-4">
  <bo-button label="Extra Small" :size="BoSize.xs" />
  <bo-button label="Small" :size="BoSize.sm" />
  <bo-button label="Default" :size="BoSize.md" />
  <bo-button label="Large" :size="BoSize.lg" />
  <bo-button label="Extra Large" :size="BoSize.xl" />
</div>

```html
<bo-button
	label="Extra Small"
	:size="BoSize.xs"
/>
<bo-button
	label="Small"
	:size="BoSize.sm"
/>
<bo-button
	label="Default"
	:size="BoSize.md"
/>
<bo-button
	label="Large"
	:size="BoSize.lg"
/>
<bo-button
	label="Extra Large"
	:size="BoSize.xl"
/>
```

### Badges with Different Sizes

<div class="flex flex-wrap items-center gap-4">
  <bo-badge label="XS" :size="BoSize.xs" />
  <bo-badge label="SM" :size="BoSize.sm" />
  <bo-badge label="MD" :size="BoSize.md" />
  <bo-badge label="LG" :size="BoSize.lg" />
  <bo-badge label="XL" :size="BoSize.xl" />
</div>

```html
<bo-badge
	label="XS"
	:size="BoSize.xs"
/>
<bo-badge
	label="SM"
	:size="BoSize.sm"
/>
<bo-badge
	label="MD"
	:size="BoSize.md"
/>
<bo-badge
	label="LG"
	:size="BoSize.lg"
/>
<bo-badge
	label="XL"
	:size="BoSize.xl"
/>
```

## When to Use Each Size

Different sizes serve different purposes in the UI:

- **Extra Small (`xs`)**: Use for very compact interfaces, auxiliary elements, or when space is extremely limited. Good for dense information displays or badges.

- **Small (`sm`)**: Use for secondary actions, less important information, or when space is limited. Appropriate for form labels, secondary buttons, or supporting elements.

- **Default (`md`)**: The standard size for most UI elements. This is the go-to size for general purpose usage and should be the most common size in your interface.

- **Large (`lg`)**: Use for emphasized elements, important calls to action, or when you want to draw more attention to a component. Good for primary actions or highlighted information.

- **Extra Large (`xl`)**: Use for the most prominent elements, key focal points, or hero sections of your interface. Reserve this size for truly important elements to maintain visual hierarchy.

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

## Best Practices

- **Consistency**: Use the same size for similar types of components or actions
- **Hierarchy**: Use size to establish visual hierarchy (larger = more important)
- **Restraint**: Limit the number of different sizes on a single screen
- **Context**: Consider the surrounding elements and available space when choosing sizes
- **Purpose**: Let the component's purpose guide your size choice
