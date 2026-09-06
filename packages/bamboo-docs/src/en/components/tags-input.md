---
title: Tags Input
description: A multiple-token entry control with delimiters and removal.
category: form
tags:
  - tags-input
  - input
  - form
  - a11y
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoTagsInput } from '@mrksbnc/bamboo-vue';

const tags = ref(['Vue']);
const basicExample = `<bo-tags-input v-model="tags" label="Technologies" placeholder="Add a tag" hint="Press Enter or type a comma." />`;
const constrainedExample = `<bo-tags-input v-model="tags" label="Keywords" :max-tags="3" :delimiters="[';']" :allow-duplicates="false" />`;
</script>

# Tags Input

`bo-tags-input` keeps a `string[]` model and commits draft text when Enter is pressed or a configured delimiter is typed. Backspace removes the last tag when the draft is empty.

## Basic Usage

<ExampleFrame :code="basicExample">
  <div><bo-tags-input v-model="tags" label="Technologies" placeholder="Add a tag" hint="Press Enter or type a comma." /><p class="mt-2 text-sm text-neutral-500">{{ tags.join(', ') || 'No tags' }}</p></div>
</ExampleFrame>

## Limits and Delimiters

`delimiters` defaults to `[',']`. Set `maxTags` to limit entries and `allowDuplicates` to permit repeated tag text.

<ExampleFrame :code="constrainedExample">
  <bo-tags-input v-model="tags" label="Keywords" :max-tags="3" :delimiters="[';']" :allow-duplicates="false" />
</ExampleFrame>

## API Reference

| Prop                                               | Type                               | Default    | Description                        |
| -------------------------------------------------- | ---------------------------------- | ---------- | ---------------------------------- |
| `modelValue`                                       | `string[]`                         | `[]`       | Tags used by `v-model`.            |
| `placeholder`                                      | `string`                           | -          | Draft input placeholder.           |
| `delimiters`                                       | `string[]`                         | `[',']`    | Characters that commit tags.       |
| `maxTags`                                          | `number`                           | -          | Maximum tag count.                 |
| `allowDuplicates`                                  | `boolean`                          | `false`    | Allows duplicate tag text.         |
| `inputMode`                                        | `InputHTMLAttributes['inputmode']` | `text`     | Keyboard hint.                     |
| `name`                                             | `string`                           | -          | Native form name.                  |
| `label` / `description` / `error` / `hint`         | `string`                           | -          | Label and helper text; error wins. |
| `required` / `disabled` / `readOnly` / `autofocus` | `boolean`                          | `false`    | Common form states.                |
| `role`                                             | `HTMLAttributes['role']`           | `combobox` | Input role.                        |
| `ariaLabel` / `ariaLabelledBy` / `ariaDescribedBy` | `string`                           | -          | Accessible naming and description. |

The component emits `update:modelValue`, `focus`, and `blur`, and exposes `focus()`, `addTag()`, and `removeTag()`.
