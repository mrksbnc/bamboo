---
title: Loading Spinner
description: An animated spinner component for indicating loading states. Provides visual feedback to users during asynchronous operations with customizable sizes, colors, and text positioning.
category: feedback
tags:
  - loading
  - spinner
  - feedback
  - async
  - indicator
outline: deep
---

<script setup lang="ts">
import { BoLoadingSpinner } from '@mrksbnc/bamboo-vue';

const basicExample = `<bo-loading-spinner />`;
const textExample = `<bo-loading-spinner loader-text="Loading..." />`;
const sizesExample = `<bo-loading-spinner size="xs" />
<bo-loading-spinner size="sm" />
<bo-loading-spinner size="default" />
<bo-loading-spinner size="lg" />
<bo-loading-spinner size="xl" />`;
const variantsExample = `<div class="flex gap-4 items-center">
  <bo-loading-spinner variant="primary" />
  <bo-loading-spinner variant="secondary" />
  <bo-loading-spinner variant="success" />
  <bo-loading-spinner variant="warning" />
  <bo-loading-spinner variant="destructive" />
  <div class="bg-neutral-800 p-2 rounded">
    <bo-loading-spinner variant="white" />
  </div>
  <bo-loading-spinner variant="black" />
</div>`;
const textPositionExample = `<bo-loading-spinner loader-text="Loading..." text-position="top" />
<bo-loading-spinner loader-text="Loading..." text-position="bottom" />
<bo-loading-spinner loader-text="Loading..." text-position="before" />
<bo-loading-spinner loader-text="Loading..." text-position="after" />`;
const customColorsExample = `<bo-loading-spinner custom-color="#ff6b6b" />
<bo-loading-spinner custom-color="rgb(34, 197, 94)" />
<bo-loading-spinner custom-color="oklch(84.5% 0.143 164.978)" />`;
const combinedExample = `<bo-loading-spinner size="sm" loader-text="Small loader" />
<bo-loading-spinner size="default" loader-text="Default loader" />
<bo-loading-spinner size="lg" loader-text="Large loader" />`;
</script>

# Loading Spinner

An animated spinner component for indicating loading states. Provides visual feedback to users during asynchronous operations with customizable sizes, colors, and text positioning.

## Basic Usage

The component is called `bo-loading-spinner` and can be used as follows:

<ExampleFrame :code="basicExample">
  <div class="flex gap-4 items-center">
    <bo-loading-spinner />
  </div>
</ExampleFrame>

## With Text

Spinners can display loading text:

<ExampleFrame :code="textExample">
  <div class="flex gap-4 items-center">
    <bo-loading-spinner loader-text="Loading..." />
  </div>
</ExampleFrame>

## Sizes

The `size` prop allows you to customize the size of the spinner. The default size is `default`.

<ExampleFrame :code="sizesExample">
  <div class="flex gap-4 items-center">
  <bo-loading-spinner size="xs" />
  <bo-loading-spinner size="sm" />
  <bo-loading-spinner size="default" />
  <bo-loading-spinner size="lg" />
  <bo-loading-spinner size="xl" />
</div>
</ExampleFrame>

## Variants

The `variant` prop allows you to customize the color of the spinner. The default variant is `primary`.

<ExampleFrame :code="variantsExample">
  <div class="flex gap-4 items-center">
  <bo-loading-spinner variant="primary" />
  <bo-loading-spinner variant="secondary" />
  <bo-loading-spinner variant="success" />
  <bo-loading-spinner variant="warning" />
  <bo-loading-spinner variant="destructive" />
  <div class="bg-neutral-800 p-2 rounded">
    <bo-loading-spinner variant="white" />
  </div>
  <bo-loading-spinner variant="black" />
</div>
</ExampleFrame>

## Text Positioning

The `text-position` prop controls where the loading text appears relative to the spinner:

<ExampleFrame :code="textPositionExample">
  <div class="flex flex-col gap-4">
  <bo-loading-spinner loader-text="Loading..." text-position="top" />
  <bo-loading-spinner loader-text="Loading..." text-position="bottom" />
  <bo-loading-spinner loader-text="Loading..." text-position="before" />
  <bo-loading-spinner loader-text="Loading..." text-position="after" />
</div>
</ExampleFrame>

## Custom Colors

Use custom colors with the `custom-color` prop:

<ExampleFrame :code="customColorsExample">
  <div class="flex gap-4 items-center">
  <bo-loading-spinner custom-color="#ff6b6b" />
  <bo-loading-spinner custom-color="rgb(34, 197, 94)" />
  <bo-loading-spinner custom-color="oklch(84.5% 0.143 164.978)" />
</div>
</ExampleFrame>

## Different Sizes with Text

Combine different sizes with loading text:

<ExampleFrame :code="combinedExample">
  <div class="flex flex-col gap-4">
  <bo-loading-spinner size="sm" loader-text="Small loader" />
  <bo-loading-spinner size="default" loader-text="Default loader" />
  <bo-loading-spinner size="lg" loader-text="Large loader" />
</div>
</ExampleFrame>

## API Reference

### Props

| Prop           | Type                           | Default         | Description                                                   |
| -------------- | ------------------------------ | --------------- | ------------------------------------------------------------- |
| `id`           | `string`                       | `Autogenerated` | Unique id for the loading spinner.                            |
| `dataTestId`   | `string`                       | `Autogenerated` | Unique data-test-id for the spinner container.                |
| `size`         | `BoLoaderSize`                 | `'default'`     | The size of the loading spinner.                              |
| `variant`      | `BoLoaderVariant`              | `'primary'`     | Predefined color variant of the spinner.                      |
| `loaderText`   | `string`                       | -               | Optional loader text to display.                              |
| `textPosition` | `BoLoaderTextPosition`         | `'after'`       | Position of the text relative to the spinner.                 |
| `customColor`  | `string`                       | -               | Custom color of the loading spinner in CSS compatible format. |
| `role`         | `HTMLAttributes['role']`       | `'status'`      | Accessibility role of the spinner.                            |
| `ariaLive`     | `HTMLAttributes['aria-live']`  | `'polite'`      | Indicates that an element will be updated.                    |
| `ariaLabel`    | `HTMLAttributes['aria-label']` | -               | Accessible label describing the spinner state.                |
| `ariaBusy`     | `HTMLAttributes['aria-busy']`  | -               | Mark the region as busy while the spinner is visible.         |
