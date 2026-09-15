---
title: Layout and Spacing
description: Build predictable responsive layouts with padding, gaps, widths, and overflow rules.
order: 2
---

# Layout and Spacing

Bamboo components provide their internal spacing, but application layout belongs outside the component. Use a small number of page-level primitives consistently: a centered container, a readable content width, a spacing rhythm, and explicit responsive breakpoints.

## The spacing rhythm

Tailwind's default spacing scale is based on `0.25rem` increments:

| Utility step |       Rem | Pixels at 16px | Typical use                              |
| ------------ | --------: | -------------: | ---------------------------------------- |
| `1`          | `0.25rem` |          `4px` | Icon-to-label gap, compact badge padding |
| `2`          |  `0.5rem` |          `8px` | Inline controls, field helper spacing    |
| `3`          | `0.75rem` |         `12px` | Button groups, compact cards             |
| `4`          |    `1rem` |         `16px` | Default field/card padding               |
| `6`          |  `1.5rem` |         `24px` | Section separation, modal padding        |
| `8`          |    `2rem` |         `32px` | Page section separation                  |
| `12`         |    `3rem` |         `48px` | Hero and major layout breaks             |

Prefer `gap` for sibling relationships and `p-*` for a container's internal breathing room. Avoid compensating margins on every child; they make responsive changes and slot content harder to reason about.

## A page container

```vue
<template>
	<main class="min-h-screen bg-neutral-50 px-4 py-8 sm:px-6 lg:px-8">
		<div class="mx-auto grid w-full max-w-7xl gap-8">
			<header class="grid max-w-3xl gap-2">
				<bo-text font-size="3xl" font-weight="semibold">Account settings</bo-text>
				<bo-text variant="secondary">Manage identity, notifications, and security.</bo-text>
			</header>
			<section class="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)]">
				<bo-card>Primary settings</bo-card>
				<aside class="grid content-start gap-4">Helpful information</aside>
			</section>
		</div>
	</main>
</template>
```

The `minmax(0, ...)` tracks prevent long content from forcing a grid wider than its container. `w-full max-w-*` keeps the layout fluid while limiting reading and interaction width.

## Padding and touch targets

Padding should create a target that is comfortable to use, not merely space text away from a border. Keep interactive controls at least `44px` tall or wide when practical, and do not reduce a button's hit area just to fit a dense row.

```html
<div class="grid gap-4 rounded-lg border border-neutral-200 p-4 sm:p-6">
	<div class="flex flex-wrap items-center justify-between gap-3">
		<bo-text font-weight="semibold">Notifications</bo-text>
		<bo-button size="sm">Manage</bo-button>
	</div>
	<div class="grid gap-3 sm:grid-cols-2">
		<bo-input label="Email" />
		<bo-input label="Phone" />
	</div>
</div>
```

Use `p-4 sm:p-6` when a card needs more room on larger screens. Use `px-*` and `py-*` independently when horizontal and vertical rhythm have different jobs.

## Form layouts

Forms are usually more readable as one column. Move independent fields into columns only when labels and error messages still have room to wrap.

```html
<form class="grid w-full max-w-2xl gap-4">
	<bo-input label="Project name" />
	<div class="grid gap-4 sm:grid-cols-2">
		<bo-input label="Start date" />
		<bo-input label="End date" />
	</div>
	<bo-textarea label="Description" class="min-h-32" />
	<div class="flex flex-wrap justify-end gap-2 pt-2">
		<bo-button kind="ghost">Cancel</bo-button>
		<bo-button type="submit">Create project</bo-button>
	</div>
</form>
```

Avoid placing two fields in a row when one field's error state can make the row taller than the other. The layout should remain understandable when errors, translations, and zoom change its height.

## Responsive rules

- Start with one column and add columns at `sm`, `md`, or `lg` only when the content supports them.
- Prefer `flex-wrap` for action rows that may grow or translate.
- Use `min-w-0` on grid and flex children that contain long text.
- Put horizontal scrolling on the smallest meaningful region, such as a data table, not on the whole page.
- Keep fixed overlays within the viewport with `w-[calc(100%-2rem)]`-style constraints and safe edge padding.

## Overflow and truncation

Truncation is appropriate for secondary labels, never for required instructions or destructive action names.

```html
<div class="flex min-w-0 items-center gap-2">
	<bo-icon icon="file" aria-hidden="true" />
	<bo-text class="min-w-0 truncate" aria-label="Quarterly report final version.pdf">
		Quarterly report final version.pdf
	</bo-text>
</div>
```

If the full value matters, provide it through a tooltip, an accessible label, a details view, or a copy action. Do not rely on hover alone for essential information.

## Layout audit checklist

- Does the layout remain usable at `320px` wide?
- Can text grow by 200% without clipping controls or hiding actions?
- Do labels, errors, and helper text wrap without changing the meaning of adjacent fields?
- Are scroll regions labelled and keyboard reachable?
- Are fixed overlays inside the safe viewport edges?
- Are interactive targets large enough without relying on a tiny icon?
