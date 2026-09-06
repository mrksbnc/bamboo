---
title: Form
description: Form and field primitives with consistent labels, descriptions, and errors.
category: forms
tags: [form, validation, accessibility]
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import { BoForm, BoFormField, BoInput, BoButton } from '@mrksbnc/bamboo-vue';
const email = ref(''); const submitted = ref(false);
const password = ref('');
const example = `<bo-form @submit="submitted = true">\n  <bo-form-field label="Email" description="Use your work address." required>\n    <bo-input v-model="email" type="email" />\n  </bo-form-field>\n</bo-form>`;
const errorExample = `<bo-form-field label="Password" error="Use at least 8 characters." required>\n  <bo-input v-model="password" type="password" />\n</bo-form-field>`;
</script>

# Form

Use `bo-form` as the native form wrapper and `bo-form-field` to associate labels, descriptions, controls, and validation messages. Compose it with Bamboo inputs rather than rebuilding `aria-describedby` wiring in every screen.

## Validated form

<ExampleFrame :code="example"><div class="w-full max-w-lg"><bo-form @submit="submitted = true"><bo-form-field label="Email" description="Use your work address." error="" required><bo-input v-model="email" type="email" /></bo-form-field><bo-button type="submit" class="mt-4">Save preferences</bo-button></bo-form><p class="mt-3 text-sm text-neutral-500">{{ submitted ? 'Saved.' : 'Not submitted' }}</p></div></ExampleFrame>

<ExampleFrame :code="errorExample">
  <div class="w-full max-w-lg">
    <bo-form-field label="Password" error="Use at least 8 characters." required>
      <bo-input v-model="password" type="password" />
    </bo-form-field>
  </div>
</ExampleFrame>

## States

Set `required`, `disabled`, and `error` on `bo-form-field`. Show errors after the user leaves a field or submits, keep the invalid value intact, and summarize multiple errors near the form heading. Use a pending state on the submit action to prevent duplicate submissions.

## Accessibility and responsive guidance

Every control needs a visible label or an explicit accessible name. The field connects description and error text through `aria-describedby` and marks required/invalid state. Use a single-column layout on small screens, generous touch targets, and preserve the browser's focus after validation.

## API reference

### `bo-form`

| Prop/event   | Type          | Description                                                |
| ------------ | ------------- | ---------------------------------------------------------- |
| `novalidate` | `boolean`     | Opt out of native constraint UI while retaining semantics. |
| `submit`     | `SubmitEvent` | Emitted on submit.                                         |
| `reset`      | `Event`       | Emitted when the form resets.                              |

### `bo-form-field`

| Prop          | Type      | Description                 |
| ------------- | --------- | --------------------------- |
| `label`       | `string`  | Visible label.              |
| `description` | `string`  | Supporting text.            |
| `error`       | `string`  | Validation message.         |
| `required`    | `boolean` | Marks the control required. |
| `disabled`    | `boolean` | Disables the field.         |
