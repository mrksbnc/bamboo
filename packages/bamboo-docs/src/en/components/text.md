---
title: Text
description: Apply consistent typography to inline content.
category: display
tags: [text, typography]
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoText } from '@mrksbnc/bamboo-vue';

const selected = ref('Click the text');
const fontSizes = ['xs', 'sm', 'default', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'] as const;
const variants = ['default', 'primary', 'secondary', 'success', 'warning', 'destructive', 'disabled'] as const;
const fontFamilies = ['sans', 'serif', 'mono'] as const;

const basicExample = `<bo-text>Project overview</bo-text>`;

const sizesExample = `<div class="grid w-full gap-3">
  <div v-for="size in fontSizes" :key="size" class="flex items-baseline gap-4 border-b border-neutral-200 pb-2 last:border-0">
    <bo-text class="w-16 shrink-0 text-xs text-neutral-500" font-family="mono">{{ size }}</bo-text>
    <bo-text :font-size="size">The quick brown fox</bo-text>
  </div>
</div>`;

const variantsExample = `<div class="grid w-full grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
  <bo-text v-for="variant in variants" :key="variant" :variant="variant">{{ variant }}</bo-text>
</div>`;

const familiesExample = `<div class="grid w-full gap-3">
  <div v-for="family in fontFamilies" :key="family" class="flex flex-wrap items-baseline gap-4">
    <bo-text class="w-16 shrink-0 text-xs text-neutral-500" font-family="mono">{{ family }}</bo-text>
    <bo-text :font-family="family" font-size="lg">A considered type choice</bo-text>
  </div>
</div>`;

const stylesExample = `<div class="grid w-full gap-4 sm:grid-cols-2">
  <bo-text font-weight="light" font-size="lg">Light weight</bo-text>
  <bo-text font-weight="bold" font-size="lg">Bold weight</bo-text>
  <bo-text text-align="center" class="rounded bg-neutral-100 p-2">Centered text</bo-text>
  <bo-text text-transform="uppercase" font-size="xs" font-weight="semibold">Uppercase label</bo-text>
</div>`;

const colorExample = `<div class="flex flex-wrap items-center gap-3">
  <bo-text custom-color="#0f766e">Teal</bo-text>
  <bo-text custom-color="rgb(124, 58, 237)">Violet</bo-text>
  <bo-text custom-color="var(--color-orange-600)">Orange token</bo-text>
</div>`;

const hoverExample = `<div class="flex flex-wrap items-center gap-3">
  <bo-text clickable class="transition-colors hover:text-blue-600">Hover to emphasize</bo-text>
  <bo-text clickable variant="secondary" class="transition-colors hover:text-neutral-900">Hover secondary text</bo-text>
</div>`;

const behaviorExample = `<div class="grid w-full gap-4 sm:grid-cols-2">
  <div class="grid gap-1">
    <bo-text font-weight="semibold">Clickable</bo-text>
    <bo-text clickable cursor="cursor-pointer" @click="selected = 'Text selected'">{{ selected }}</bo-text>
  </div>
  <bo-text line-clamp="2" class="max-w-sm">Long content can be limited to two lines without changing the source text.</bo-text>
  <bo-text white-space="nowrap" class="max-w-full overflow-hidden text-ellipsis">This single line stays truncated when its container is narrow.</bo-text>
</div>`;
</script>

# Text

Use `bo-text` for text whose size, weight, color, or casing should come from the design system. It renders an accessible `span` by default and keeps typography choices explicit at the point of use.

## Basic Usage

<ExampleFrame :code="basicExample">
  <bo-text>Project overview</bo-text>
</ExampleFrame>

## Sizes

`font-size` ranges from `xs` through `9xl`. The default is `sm`; use the larger sizes for hierarchy rather than styling arbitrary headings with utility classes.

<ExampleFrame :code="sizesExample" align="start">
  <div class="grid w-full gap-3">
    <div v-for="size in fontSizes" :key="size" class="flex items-baseline gap-4 border-b border-neutral-200 pb-2 last:border-0">
      <bo-text class="w-16 shrink-0 text-xs text-neutral-500" font-family="mono">{{ size }}</bo-text>
      <bo-text :font-size="size">The quick brown fox</bo-text>
    </div>
  </div>
</ExampleFrame>

## Variants

Variants provide the standard semantic text colors. Disabled text is intentionally muted and should not be used as a substitute for disabling an interactive control.

<ExampleFrame :code="variantsExample">
  <div class="grid w-full grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
    <bo-text v-for="variant in variants" :key="variant" :variant="variant">{{ variant }}</bo-text>
  </div>
</ExampleFrame>

## Font Families

Use `sans` for interface text, `serif` for editorial emphasis, and `mono` for code, identifiers, or tabular values. `inherit` preserves the family from the parent.

<ExampleFrame :code="familiesExample" align="start">
  <div class="grid w-full gap-3">
    <div v-for="family in fontFamilies" :key="family" class="flex flex-wrap items-baseline gap-4">
      <bo-text class="w-16 shrink-0 text-xs text-neutral-500" font-family="mono">{{ family }}</bo-text>
      <bo-text :font-family="family" font-size="lg">A considered type choice</bo-text>
    </div>
  </div>
</ExampleFrame>

## Weight, Alignment, and Transform

`font-weight`, `text-align`, and `text-transform` can be combined with any size or variant. Prefer a semantic weight and transform that keeps the content readable when the theme changes.

<ExampleFrame :code="stylesExample" align="start">
  <div class="grid w-full gap-4 sm:grid-cols-2">
    <bo-text font-weight="light" font-size="lg">Light weight</bo-text>
    <bo-text font-weight="bold" font-size="lg">Bold weight</bo-text>
    <bo-text text-align="center" class="rounded bg-neutral-100 p-2">Centered text</bo-text>
    <bo-text text-transform="uppercase" font-size="xs" font-weight="semibold">Uppercase label</bo-text>
  </div>
</ExampleFrame>

## Custom Color

Use `custom-color` when a design token or product color is not represented by a semantic variant. It accepts CSS variables, named colors, hex, RGB/RGBA, and other valid CSS color values.

<ExampleFrame :code="colorExample">
  <div class="flex flex-wrap items-center gap-3">
    <bo-text custom-color="#0f766e">Teal</bo-text>
    <bo-text custom-color="rgb(124, 58, 237)">Violet</bo-text>
    <bo-text custom-color="var(--color-orange-600)">Orange token</bo-text>
  </div>
</ExampleFrame>

## Hover States

`bo-text` does not force a hover color. Combine `clickable` with a `hover:` utility when text itself is interactive, and include a transition when the color should change smoothly.

<ExampleFrame :code="hoverExample">
  <div class="flex flex-wrap items-center gap-3">
    <bo-text clickable class="transition-colors hover:text-blue-600">Hover to emphasize</bo-text>
    <bo-text clickable variant="secondary" class="transition-colors hover:text-neutral-900">Hover secondary text</bo-text>
  </div>
</ExampleFrame>

## Interaction and Overflow

Set `clickable` to communicate pointer interaction, or provide an explicit `cursor`. `line-clamp` limits visible lines while `white-space` controls wrapping behavior.

<ExampleFrame :code="behaviorExample" align="start">
  <div class="grid w-full gap-4 sm:grid-cols-2">
    <div class="grid gap-1">
      <bo-text font-weight="semibold">Clickable</bo-text>
      <bo-text clickable cursor="cursor-pointer" @click="selected = 'Text selected'">{{ selected }}</bo-text>
    </div>
    <bo-text line-clamp="2" class="max-w-sm">Long content can be limited to two lines without changing the source text.</bo-text>
    <bo-text white-space="nowrap" class="max-w-full overflow-hidden text-ellipsis">This single line stays truncated when its container is narrow.</bo-text>
  </div>
</ExampleFrame>

## API

| Prop / slot                                                 | Type                                                                                                                            | Default         | Description                          |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------ |
| `id` / `dataTestId`                                         | `string`                                                                                                                        | autogenerated   | Element attributes.                  |
| `fontSize`                                                  | `xs` through `9xl`                                                                                                              | `sm`            | Text size.                           |
| `fontWeight`                                                | `thin` through `black`                                                                                                          | `regular`       | Text weight.                         |
| `fontFamily`                                                | `sans \| mono \| serif \| inherit`                                                                                              | `sans`          | Font family.                         |
| `whiteSpace`                                                | `normal \| nowrap \| pre \| pre-line \| pre-wrap \| break-spaces`                                                               | `normal`        | White-space behavior.                |
| `variant`                                                   | `default \| primary \| secondary \| disabled \| inherit \| currentColor \| success \| warning \| destructive \| white \| black` | `default`       | Text color token.                    |
| `customColor`                                               | `string`                                                                                                                        | -               | CSS color override.                  |
| `clickable`                                                 | `boolean`                                                                                                                       | `false`         | Applies pointer cursor styling.      |
| `textAlign` / `textTransform`                               | `left \| center \| right \| justify` / `none \| capitalize \| uppercase \| lowercase`                                           | `left` / `none` | Alignment and casing.                |
| `cursor`                                                    | `BoCursor`                                                                                                                      | `cursor-auto`   | Cursor utility.                      |
| `lineClamp`                                                 | `number \| string \| none`                                                                                                      | `none`          | Limits displayed lines.              |
| `role` / `ariaLabel` / `ariaLabelledBy` / `ariaDescribedBy` | native accessibility types                                                                                                      | `paragraph` / - | Element semantics.                   |
| `ariaLive` / `lang`                                         | native live-region type / `string`                                                                                              | -               | Live-region and language attributes. |
| `default`                                                   | slot                                                                                                                            | -               | Text content.                        |
