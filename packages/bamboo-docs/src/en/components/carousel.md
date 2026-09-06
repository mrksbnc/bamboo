---
title: Carousel
description: A keyboard-friendly carousel for presenting related content.
category: display
tags:
  - carousel
  - responsive
  - interaction
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoCarousel } from '@mrksbnc/bamboo-vue';

const slide = ref(0);
const compactSlide = ref(0);
const basicExample = `<bo-carousel v-model="slide">\n  <template #item-0>First slide</template>\n  <template #item-1>Second slide</template>\n  <template #item-2>Third slide</template>\n</bo-carousel>`;
const loopExample = `<bo-carousel v-model="compactSlide" loop aria-label="Release highlights">\n  <template #item-0>Faster builds</template>\n  <template #item-1>New integrations</template>\n</bo-carousel>`;
</script>

# Carousel

`bo-carousel` presents a sequence of named `item-N` slots with previous/next controls and a controlled active index. Use it for related content, not for critical navigation or content that users must compare at once.

## Basic usage

<ExampleFrame :code="basicExample">
  <div class="w-full max-w-2xl">
    <bo-carousel v-model="slide">
      <template #item-0><div class="rounded-xl bg-blue-100 p-12 text-center dark:bg-blue-950">Project overview</div></template>
      <template #item-1><div class="rounded-xl bg-emerald-100 p-12 text-center dark:bg-emerald-950">Team activity</div></template>
      <template #item-2><div class="rounded-xl bg-amber-100 p-12 text-center dark:bg-amber-950">Release notes</div></template>
    </bo-carousel>
    <p class="mt-3 text-center text-sm text-neutral-500">Slide {{ slide + 1 }} of 3</p>
  </div>
</ExampleFrame>

<ExampleFrame :code="loopExample">
  <div class="w-full max-w-xl">
    <bo-carousel v-model="compactSlide" loop aria-label="Release highlights">
      <template #item-0><div class="rounded-md border p-8 text-center">Faster builds</div></template>
      <template #item-1><div class="rounded-md border p-8 text-center">New integrations</div></template>
    </bo-carousel>
  </div>
</ExampleFrame>

## Rich slide content

Slides can contain cards, images, and actions. Keep each slide's heading unique and include a visible description. If controls are supplied through slots, use real buttons with accessible names.

```vue
<bo-carousel v-model="slide" aria-label="Release highlights">
  <template #item-0><article><h3>Faster builds</h3><p>...</p><bo-button>Read more</bo-button></article></template>
  <template #item-1><article><h3>New integrations</h3><p>...</p></article></template>
</bo-carousel>
```

## States and behavior

- `v-model` identifies the active zero-based slide and can be updated by external controls.
- Disable or hide navigation when there is no previous/next item.
- Avoid autoplay for essential content. If autoplay is added, pause on hover/focus and provide a pause control.
- Keep slide height stable to prevent layout shift.

## Accessibility and responsive guidance

Provide `aria-label` when the carousel context is not obvious. Ensure previous/next controls have text or an `aria-label`, preserve visible focus, and support arrow-key navigation. Use one slide on narrow screens; let slide content use `w-full` and cap the container rather than forcing a fixed width.

## API reference

| Prop          | Type                         | Default        | Description                             |
| ------------- | ---------------------------- | -------------- | --------------------------------------- |
| `modelValue`  | `number`                     | `0`            | Active slide index (`v-model`).         |
| `id`          | `string`                     | Generated      | Root element id.                        |
| `ariaLabel`   | `string`                     | `Carousel`     | Accessible name.                        |
| `loop`        | `boolean`                    | `false`        | Wrap from the final slide to the first. |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Navigation axis.                        |

### Slots and methods

| Slot/API      | Description                 |
| ------------- | --------------------------- |
| `item-N`      | Content for slide `N`.      |
| `previous()`  | Move to the previous slide. |
| `next()`      | Move to the next slide.     |
| `goTo(index)` | Move to a specific slide.   |
