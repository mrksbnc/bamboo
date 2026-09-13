---
title: Loading Ring
description: Show a stable intersecting-ring loading indicator.
category: feedback
tags: [loading, ring, progress]
---

<script setup lang="ts">
import { BoLoadingRing } from '@mrksbnc/bamboo-vue';

const basicExample = `<bo-loading-ring />`;
const textExample = `<bo-loading-ring size="lg" variant="primary" loader-text="Loading..." text-position="after" />`;
</script>

# Loading Ring

Use `bo-loading-ring` when a loading indicator should feel more dimensional than a single rotating stroke. It uses two intersecting SVG rings and remains centered without the wobble caused by pseudo-element box shadows.

## Basic Usage

<ExampleFrame :code="basicExample">
  <bo-loading-ring />
</ExampleFrame>

## Sizes, Colors, and Text

<ExampleFrame :code="textExample">
  <div class="flex flex-wrap items-center gap-6">
    <bo-loading-ring size="sm" />
    <bo-loading-ring size="default" variant="secondary" />
    <bo-loading-ring size="lg" variant="primary" loader-text="Loading..." />
  </div>
</ExampleFrame>

## API

`bo-loading-ring` accepts the same loader props as `bo-loading-spinner`, including `size`, `variant`, `loaderText`, `textPosition`, `customColor`, `ariaLabel`, `ariaLive`, and `ariaBusy`. It also accepts `customContainerCssClass` and `customRingClass`, and exposes a default slot for replacement text content.
