---
title: Number Field
description: A numeric input with bounded increment and decrement controls.
category: form
tags:
  - number-field
  - input
  - form
  - validation
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoNumberField } from '@mrksbnc/bamboo-vue';

const quantity = ref(2);
const basicExample = `<bo-number-field v-model="quantity" label="Quantity" :min="1" :max="10" hint="Choose between 1 and 10." />`;
const statesExample = `<div class="grid gap-4"><bo-number-field label="Seats" :min="1" :step="2" description="Changes in increments of two." /><bo-number-field label="Read-only value" :model-value="8" read-only /><bo-number-field label="Invalid value" error="Enter a valid quantity." /></div>`;
</script>

# Number Field

`bo-number-field` combines a native number input with increment and decrement buttons. Its model is `number | undefined`; empty input produces `undefined`. Alphabetic characters, including exponent notation, are rejected by default; set `allow-exponent` when scientific notation is required.

## Basic Usage

<ExampleFrame :code="basicExample">
  <div><bo-number-field v-model="quantity" label="Quantity" :min="1" :max="10" hint="Choose between 1 and 10." /><p class="mt-2 text-sm text-neutral-500">Value: {{ quantity }}</p></div>
</ExampleFrame>

## Form States

`min`, `max`, and `step` constrain the stepper buttons. `description`, `error`, and `hint` share one helper-text region, with error taking precedence.

<ExampleFrame :code="statesExample">
  <div class="grid gap-4"><bo-number-field label="Seats" :min="1" :step="2" description="Changes in increments of two." /><bo-number-field label="Read-only value" :model-value="8" read-only /><bo-number-field label="Invalid value" error="Enter a valid quantity." /></div>
</ExampleFrame>

## API Reference

| Prop                                               | Type                               | Default      | Description                                     |
| -------------------------------------------------- | ---------------------------------- | ------------ | ----------------------------------------------- |
| `modelValue`                                       | `number \| undefined`              | `undefined`  | Value used by `v-model`.                        |
| `min` / `max`                                      | `string`                           | -            | Native numeric bounds.                          |
| `step`                                             | `string`                           | -            | Stepper increment; non-positive values use `1`. |
| `allowExponent`                                    | `boolean`                          | `false`      | Allows exponent notation such as `1e3`.         |
| `placeholder`                                      | `string`                           | -            | Input placeholder.                              |
| `inputMode`                                        | `InputHTMLAttributes['inputmode']` | `decimal`    | Keyboard hint.                                  |
| `label`                                            | `string`                           | -            | Visible label.                                  |
| `description` / `error` / `hint`                   | `string`                           | -            | Helper text; error wins.                        |
| `required`                                         | `boolean`                          | `false`      | Native required state.                          |
| `disabled`                                         | `boolean`                          | `false`      | Disables input and buttons.                     |
| `readOnly`                                         | `boolean`                          | `false`      | Prevents editing and stepping.                  |
| `name`                                             | `string`                           | -            | Native form name.                               |
| `autofocus`                                        | `boolean`                          | `false`      | Focuses on mount.                               |
| `role`                                             | `HTMLAttributes['role']`           | `spinbutton` | Input role.                                     |
| `ariaLabel` / `ariaLabelledBy` / `ariaDescribedBy` | `string`                           | -            | Accessible naming and description.              |

The component emits `update:modelValue`, `focus`, `blur`, and `change`. It exposes `focus()`.
