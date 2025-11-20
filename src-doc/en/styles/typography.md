---
title: Typography
description: Complete guide to Bamboo's typography system including font sizes, weights, families, and dark mode support.
outline: deep
---

# Typography

Bamboo ships with a comprehensive typographic system including font sizes, weights, and families. All typography automatically adapts to dark mode with optimized contrast ratios.

## Overview

To access these predefined styles, use the `bo-text` component. All typographic values can be overridden by supplying a custom CSS class or inline style to the component.

Typography in Bamboo is designed to maintain readability and accessibility across both light and dark themes.

## Font sizes

| Size  | Value      |
| ----- | ---------- |
| `xs`  | `0.625rem` |
| `sm`  | `0.75rem`  |
| `lg`  | `1rem`     |
| `xl`  | `1.125rem` |
| `2xl` | `1.25rem`  |
| `3xl` | `1.5rem`   |
| `4xl` | `1.875rem` |
| `5xl` | `2.25rem`  |
| `6xl` | `3rem`     |
| `7xl` | `3.75rem`  |

```vue
<bo-text value="Hello, World!" size="3xl" />
```

## Font weights

| Weight        | Value |
| ------------- | ----- |
| `thin`        | `100` |
| `extra-light` | `200` |
| `light`       | `300` |
| `medium`      | `500` |
| `semibold`    | `600` |
| `bold`        | `700` |
| `extra-bold`  | `800` |
| `black`       | `900` |

```vue
<bo-text value="Hello, World!" weight="semibold" />
```

## Font families

The following font families are available:

- `sans`
- `mono`
- `serif`

```vue
<bo-text value="Hello, World!" font-family="sans" />
```

## Dark Mode Support

All typography automatically adapts to dark mode. Text colors are adjusted to maintain proper contrast ratios:

```css
:root {
	--bo-text-color-default: var(--neutral-800);
	--bo-text-color-secondary: var(--neutral-600);
}

:root[data-theme='dark'] {
	--bo-text-color-default: var(--neutral-50);
	--bo-text-color-secondary: var(--neutral-400);
}
```

## Reference

For the complete API and additional examples, see the [bo-text component documentation](../components/text.md).

## Related Documentation

- [useTheme Composable](/en/composables/use-theme) - Theme management API
- [Dark Mode](/en/styles/dark-mode) - Complete dark mode guide
- [Design Tokens](/en/styles/design-tokens) - Token system overview
- [Colors](/en/styles/colors) - Color palette and usage
