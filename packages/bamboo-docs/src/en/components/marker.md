---
title: Marker
description: A small visual status marker.
category: display
tags: [marker, status, indicator]
outline: deep
---

<script setup lang="ts">
const basicExample = `<bo-marker aria-label="Online" />`;
const variantsExample = `<div class="flex items-center gap-3"><bo-marker variant="default" aria-label="Default" /><bo-marker variant="success" aria-label="Success" /><bo-marker variant="destructive" aria-label="Error" /></div>`;
</script>

# Marker

Use `bo-marker` for a compact status indicator. Provide an accessible label when it conveys information.

## Basic marker

<ExampleFrame :code="basicExample"><bo-marker aria-label="Online" /></ExampleFrame>

## Status variants

<ExampleFrame :code="variantsExample"><div class="flex items-center gap-3"><bo-marker variant="default" aria-label="Default" /><bo-marker variant="success" aria-label="Success" /><bo-marker variant="destructive" aria-label="Error" /></div></ExampleFrame>
