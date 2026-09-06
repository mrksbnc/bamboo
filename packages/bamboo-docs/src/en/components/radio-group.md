---
title: Radio Group
description: A single-choice group of accessible radio controls.
category: form
tags:
  - radio-group
  - radio
  - form
  - a11y
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoRadioGroup, BoRadioGroupItem } from '@mrksbnc/bamboo-vue';

const plan = ref('standard');
const basicExample = `<bo-radio-group v-model="plan" aria-label="Plan">
  <bo-radio-group-item value="standard" label="Standard" description="For personal projects." />
  <bo-radio-group-item value="team" label="Team" description="For small teams." />
</bo-radio-group>`;
const horizontalExample = `<bo-radio-group v-model="plan" orientation="horizontal" aria-label="Theme">
  <bo-radio-group-item value="light" label="Light" />
  <bo-radio-group-item value="dark" label="Dark" />
</bo-radio-group>`;
</script>

# Radio Group

`bo-radio-group` provides one selected value to its `bo-radio-group-item` children. The group handles arrow-key movement and forwards its name to each native radio input.

## Basic Usage

<ExampleFrame :code="basicExample">
  <div><bo-radio-group v-model="plan" aria-label="Plan"><bo-radio-group-item value="standard" label="Standard" description="For personal projects." /><bo-radio-group-item value="team" label="Team" description="For small teams." /></bo-radio-group><p class="mt-2 text-sm text-neutral-500">Plan: {{ plan }}</p></div>
</ExampleFrame>

## Orientation and States

Use `orientation="horizontal"` for inline choices. `disabled` on the group disables every item; an individual item can also be disabled.

<ExampleFrame :code="horizontalExample">
  <bo-radio-group v-model="plan" orientation="horizontal" aria-label="Theme"><bo-radio-group-item value="light" label="Light" /><bo-radio-group-item value="dark" label="Dark" /></bo-radio-group>
</ExampleFrame>

## API Reference

| Component / prop                         | Type                             | Default    | Description                          |
| ---------------------------------------- | -------------------------------- | ---------- | ------------------------------------ |
| `BoRadioGroup`                           | component                        | -          | Group context and selected model.    |
| `modelValue`                             | `string \| number`               | -          | Selected value used by `v-model`.    |
| `orientation`                            | `'horizontal' \| 'vertical'`     | `vertical` | Item layout and arrow-key direction. |
| `disabled`                               | `boolean`                        | `false`    | Disables all items.                  |
| `required`                               | `boolean`                        | `false`    | Marks the group as required.         |
| `name`                                   | `string`                         | Group id   | Shared native radio name.            |
| `role` / `ariaLabel` / `ariaLabelledBy`  | `HTMLAttributes[...]` / `string` | -          | Group accessibility attributes.      |
| `BoRadioGroupItem`                       | component                        | -          | Native radio item.                   |
| `value`                                  | `string \| number`               | Required   | Value represented by the item.       |
| `label` / `description`                  | `string`                         | -          | Visible item text.                   |
| `disabled`                               | `boolean`                        | `false`    | Disables this item.                  |
| `role` / `ariaLabel` / `ariaDescribedBy` | `HTMLAttributes[...]` / `string` | -          | Item accessibility attributes.       |

The group emits `update:modelValue`. The item also accepts default slot content beside its label and description.
