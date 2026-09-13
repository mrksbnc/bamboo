---
title: Slider
description: An accessible single-value range control.
category: forms
tags: [slider, input, accessibility]
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoSlider } from '@mrksbnc/bamboo-vue';
const value = ref(50);
const disabledValue = ref(35);
const example = `<bo-slider v-model="value" :min="0" :max="100" :step="5" aria-label="Volume" />`;
const disabledExample = `<bo-slider v-model="disabledValue" :min="0" :max="100" disabled aria-label="Reserved capacity" />`;
</script>

# Slider

`bo-slider` provides a native range control with keyboard and screen-reader support. Pair it with a visible label and value when precision matters.

## Interactive value

<ExampleFrame :code="example"><div class="w-full max-w-lg"><label for="volume" class="mb-3 block text-sm font-medium">Volume <span class="text-neutral-500">{{ value }}%</span></label><bo-slider id="volume" v-model="value" :min="0" :max="100" :step="5" aria-label="Volume" /></div></ExampleFrame>

<ExampleFrame :code="disabledExample">
  <div class="w-full max-w-lg opacity-80">
    <label for="reserved-capacity" class="mb-3 block text-sm font-medium">Reserved capacity <span class="text-neutral-500">{{ disabledValue }}%</span></label>
    <bo-slider id="reserved-capacity" v-model="disabledValue" disabled aria-label="Reserved capacity" />
  </div>
</ExampleFrame>

## States and guidance

Use `min`, `max`, and `step` to communicate the domain. Disabled sliders remain visible with their value. For a value that must be exact, include a number input or a text readout; do not make users drag to reach a value.

Keyboard users can focus the slider and use Arrow keys for one step, Page Up/Page Down for larger changes, and Home/End for bounds. Preserve visible focus and provide a label; the value should not be communicated by color alone. On small screens, make the track full width and provide a generous thumb target.

## API reference

| Prop         | Type      | Default | Description                                   |
| ------------ | --------- | ------- | --------------------------------------------- |
| `modelValue` | `number`  | `0`     | Current value (`v-model`).                    |
| `min`        | `number`  | `0`     | Lower bound.                                  |
| `max`        | `number`  | `100`   | Upper bound.                                  |
| `step`       | `number`  | `1`     | Increment.                                    |
| `disabled`   | `boolean` | `false` | Disable interaction.                          |
| `ariaLabel`  | `string`  | -       | Accessible name when no visible label exists. |

`update:modelValue` emits the new number on each change.
