---
title: Visually Hidden
description: Content available to assistive technology without visual presentation.
category: accessibility
tags: [visually-hidden, accessibility, screen-reader]
outline: deep
---

<script setup lang="ts">
const basicExample = `<bo-visually-hidden>Additional context for screen readers.</bo-visually-hidden>`;
const labelExample = `<button aria-label="Close"><bo-visually-hidden>Close dialog</bo-visually-hidden><bo-icon icon="x" /></button>`;
</script>

# Visually Hidden

Use `bo-visually-hidden` for text that should remain available to assistive technology while not taking visual space.

## Additional context

<ExampleFrame :code="basicExample"><bo-visually-hidden>Additional context for screen readers.</bo-visually-hidden><span aria-hidden="true">The text is visually hidden.</span></ExampleFrame>

## Icon-only controls

<ExampleFrame :code="labelExample"><button aria-label="Close" class="rounded-md border p-2"><bo-visually-hidden>Close dialog</bo-visually-hidden><bo-icon icon="x" aria-hidden="true" /></button></ExampleFrame>

Do not use visually hidden text as a substitute for visible instructions when all users need the information.
