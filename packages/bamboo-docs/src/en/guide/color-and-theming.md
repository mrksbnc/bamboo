---
title: Color and Theming
description: Use semantic colors, dark mode, token overrides, and custom color props safely.
order: 3
---

# Color and Theming

Bamboo uses Tailwind color variables and semantic component variants. Choose a semantic variant first; use a token override when the entire product palette changes; use `customColor` only when a value is genuinely specific to the feature.

## Semantic variants

Common semantic roles map to these families:

| Role        | Light emphasis             | Dark emphasis              | Use for                         |
| ----------- | -------------------------- | -------------------------- | ------------------------------- |
| Default     | neutral foreground         | neutral foreground         | Normal content                  |
| Primary     | blue                       | blue                       | Main action or product emphasis |
| Secondary   | neutral muted              | neutral muted              | Supporting content              |
| Success     | green                      | green                      | Completed or healthy state      |
| Warning     | yellow                     | yellow                     | Attention before failure        |
| Destructive | red                        | red                        | Removal, failure, or danger     |
| Disabled    | muted with reduced opacity | muted with reduced opacity | Unavailable controls            |

The exact component surface varies by component. A `primary` button and a `primary` text label should share meaning without necessarily sharing the same background treatment.

## Color reference

The default Tailwind palette exposes neutral and semantic scales such as:

```text
neutral: 50 100 200 300 400 500 600 700 800 900 950
blue:    50 100 200 300 400 500 600 700 800 900 950
green:   50 100 200 300 400 500 600 700 800 900 950
yellow:  50 100 200 300 400 500 600 700 800 900 950
red:     50 100 200 300 400 500 600 700 800 900 950
```

Use a lighter surface and darker text in light mode. In dark mode, swap the surface and foreground values rather than lowering opacity until text becomes unreadable.

## Preview the semantic palette

```vue
<template>
	<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
		<div class="rounded-lg border border-neutral-200 bg-white p-4">
			<bo-text variant="primary" font-weight="semibold">Primary</bo-text>
			<bo-text variant="secondary" font-size="sm">Supports the main task.</bo-text>
		</div>
		<div class="rounded-lg border border-green-200 bg-green-50 p-4">
			<bo-text variant="success" font-weight="semibold">Success</bo-text>
			<bo-text variant="secondary" font-size="sm">The operation completed.</bo-text>
		</div>
		<div class="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
			<bo-text variant="warning" font-weight="semibold">Warning</bo-text>
			<bo-text variant="secondary" font-size="sm">The user should review this.</bo-text>
		</div>
		<div class="rounded-lg border border-red-200 bg-red-50 p-4">
			<bo-text variant="destructive" font-weight="semibold">Destructive</bo-text>
			<bo-text variant="secondary" font-size="sm">The action cannot be undone.</bo-text>
		</div>
	</div>
</template>
```

## Override tokens for a brand

Import Bamboo first, then override the variables in a stylesheet loaded later. Override the semantic scale used by the components rather than changing every component selector.

```css [app.css]
@import '@mrksbnc/bamboo-vue/lib.css';

:root {
	--color-blue-500: oklch(0.62 0.18 255);
	--color-blue-600: oklch(0.54 0.2 255);
	--color-blue-700: oklch(0.45 0.17 255);
}

.dark {
	--color-blue-400: oklch(0.76 0.14 255);
	--color-blue-500: oklch(0.68 0.17 255);
}
```

Use a scope when multiple themes share one application:

```css
[data-theme='violet'] {
	--color-blue-500: oklch(0.62 0.2 300);
	--color-blue-600: oklch(0.54 0.22 300);
}

[data-theme='forest'] {
	--color-blue-500: oklch(0.62 0.16 155);
	--color-blue-600: oklch(0.52 0.18 155);
}
```

Apply the theme attribute above the components:

```html
<div data-theme="violet">
	<bo-button variant="primary">Violet primary action</bo-button>
</div>
```

Check contrast after every override. A token that looks correct on a large heading may fail on small helper text or a disabled control.

## Custom component colors

Components with a `customColor` prop accept CSS colors or variables. This is useful for data visualization, user-defined labels, or a single product-specific accent.

```vue
<bo-text custom-color="var(--color-purple-600)">Custom accent</bo-text>
<bo-icon icon="sparkles" custom-color="#c026d3" aria-hidden="true" />
<bo-loading-spinner custom-color="rgb(14 116 144)" aria-label="Loading" />
```

Do not use custom colors to communicate a semantic state that already has a variant. Semantic variants are easier to audit, theme, and understand.

## Contrast and non-color cues

- Do not use color as the only indication of error, success, or selection.
- Pair semantic colors with text, icons, borders, or state attributes.
- Keep focus indicators visible in both light and dark themes.
- Test disabled text separately; reduced opacity can fail contrast even when the base color passes.
- Test links and controls against every surface they can appear on.

## Dark mode checklist

- Test foreground, surface, border, focus ring, placeholder, and helper text.
- Check images, charts, and custom SVG colors, not just text.
- Avoid hard-coding white or black unless the component is explicitly on a contrasting surface.
- Respect the user's system preference without preventing an explicit product choice.
