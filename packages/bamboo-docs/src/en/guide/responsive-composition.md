---
title: Responsive Composition
description: Compose Bamboo primitives into resilient desktop, tablet, and mobile interfaces.
order: 5
---

# Responsive Composition

Responsive design is a content rule, not a desktop layout scaled down. Compose components so that controls wrap, reading widths stay comfortable, and secondary content can move without changing the task order.

## Shell pattern

```vue
<template>
	<div class="min-h-screen bg-neutral-50">
		<bo-navbar class="border-b border-neutral-200" />
		<div class="mx-auto grid w-full max-w-7xl lg:grid-cols-[16rem_minmax(0,1fr)]">
			<aside class="hidden border-e border-neutral-200 p-4 lg:block">
				<nav aria-label="Workspace navigation">...</nav>
			</aside>
			<main class="min-w-0 px-4 py-6 sm:px-6 lg:px-8">
				<slot />
			</main>
		</div>
	</div>
</template>
```

The `min-w-0` on the main column is important. Without it, long tables, code, or user content can establish a minimum width larger than the viewport.

## Action rows

```html
<div class="flex flex-wrap items-center justify-between gap-3">
	<div class="min-w-0">
		<bo-text class="block truncate" font-size="xl" font-weight="semibold">Project activity</bo-text>
		<bo-text variant="secondary">Recent changes from your team.</bo-text>
	</div>
	<div class="flex flex-wrap gap-2">
		<bo-button kind="outline">Filter</bo-button>
		<bo-button>New activity</bo-button>
	</div>
</div>
```

Do not force action rows to stay on one line. Wrapping is preferable to clipped labels, horizontal page scrolling, or icon-only replacements that lose accessible names.

## Mobile alternatives

When a desktop sidebar or table is not useful on mobile, provide a real alternative:

- Move navigation into a drawer with a labelled trigger.
- Use a card/list representation for dense tabular data when the column relationships are not essential.
- Keep the table in an explicitly labelled horizontal scroll region when relationships are essential.
- Move secondary filters into a disclosure or popover, but keep the active filter summary visible.

## Teleported surfaces

Dialogs, drawers, popovers, and toast viewports may render at the document body. Their visual position is therefore independent of the local stacking context. Mount them near the application shell, label them, and avoid clipping them inside `overflow-hidden` containers.

## Responsive review checklist

- 320px: no required action is clipped or unreachable.
- 768px: two-column layouts have enough room for labels and errors.
- 1024px: navigation and content do not compete for a narrow reading column.
- 200% zoom: content reflows instead of becoming a tiny fixed viewport.
- Long translations: labels, buttons, and menus remain understandable.
- Keyboard: wrapped controls retain a logical tab order.
