---
title: Input
description: A text input field component with support for icons, validation states, pills, and various input types. Perfect for forms and user data collection.
category: form
tags:
  - input
  - form
  - field
  - validation
  - pills
outline: deep
---

<script setup lang="ts">
import { BoInput } from '@mrksbnc/bamboo-vue';

const basicExample = `<bo-input placeholder="Enter text..." />`;
const labelExample = `<bo-input label="Email Address" placeholder="Enter your email..." />`;
const sizesExample = `<bo-input size="sm" placeholder="Small input" />
<bo-input size="default" placeholder="Default input" />
<bo-input size="lg" placeholder="Large input" />`;
const statesExample = `<bo-input state="default" placeholder="Default state" />
<bo-input state="valid" placeholder="Valid input" />
<bo-input state="invalid" placeholder="Invalid input" error="This field is required" />`;
const variantsExample = `<bo-input variant="default" placeholder="Default variant" />
<bo-input variant="filled" placeholder="Filled variant" />`;
const iconsExample = `<bo-input prefix-icon="mail" placeholder="Email address" />
<bo-input suffix-icon="search" placeholder="Search..." />
<bo-input prefix-icon="user" suffix-icon="eye" placeholder="Username" />`;
const typesExample = `<bo-input type="text" placeholder="Text input" />
<bo-input type="email" placeholder="Email input" />
<bo-input type="password" placeholder="Password input" />
<bo-input type="number" placeholder="Number input" />
<bo-input type="tel" placeholder="Phone input" />
<bo-input type="url" placeholder="URL input" />`;
const descriptionsExample = `<bo-input
  label="Username"
  description="Choose a unique username"
  hint="Must be at least 3 characters long"
  placeholder="Enter username"
 />
<bo-input
  label="Password"
  state="invalid"
  error="Password must contain at least 8 characters"
  placeholder="Enter password"
  type="password"
 />`;
const requiredExample = `<bo-input label="Email" placeholder="Enter email" required />`;
const disabledExample = `<bo-input placeholder="Disabled input" disabled />`;
const fullWidthExample = `<bo-input placeholder="Full width input" full-width />`;
</script>

# Input

A text input field component with support for icons, validation states, pills, and various input types. Perfect for forms and user data collection.

## Basic Usage

The component is called `bo-input` and can be used as follows:

<ExampleFrame :code="basicExample">
  <div class="flex gap-4">
    <bo-input placeholder="Enter text..." />
  </div>
</ExampleFrame>

## With Label

Inputs can have labels for better accessibility and user experience:

<ExampleFrame :code="labelExample">
  <div class="flex gap-4">
    <bo-input label="Email Address" placeholder="Enter your email..." />
  </div>
</ExampleFrame>

## Sizes

The `size` prop allows you to customize the size of the input. The default size is `default`.

<ExampleFrame :code="sizesExample">
  <div class="flex flex-col gap-4">
    <bo-input size="sm" placeholder="Small input" />
    <bo-input size="default" placeholder="Default input" />
    <bo-input size="lg" placeholder="Large input" />
  </div>
</ExampleFrame>

## States

The `state` prop allows you to show validation states. The default state is `default`.

<ExampleFrame :code="statesExample">
  <div class="flex flex-col gap-4">
    <bo-input state="default" placeholder="Default state" />
    <bo-input state="valid" placeholder="Valid input" />
    <bo-input state="invalid" placeholder="Invalid input" error="This field is required" />
  </div>
</ExampleFrame>

## Variants

The `variant` prop allows you to customize the appearance. The default variant is `default`.

<ExampleFrame :code="variantsExample">
  <div class="flex flex-col gap-4">
    <bo-input variant="default" placeholder="Default variant" />
    <bo-input variant="filled" placeholder="Filled variant" />
  </div>
</ExampleFrame>

## With Icons

Inputs support prefix and suffix icons:

<ExampleFrame :code="iconsExample">
  <div class="flex flex-col gap-4">
    <bo-input prefix-icon="mail" placeholder="Email address" />
    <bo-input suffix-icon="search" placeholder="Search..." />
    <bo-input prefix-icon="user" suffix-icon="eye" placeholder="Username" />
  </div>
</ExampleFrame>

## Input Types

The input supports various HTML input types:

<ExampleFrame :code="typesExample">
  <div class="flex flex-col gap-4">
    <bo-input type="text" placeholder="Text input" />
    <bo-input type="email" placeholder="Email input" />
    <bo-input type="password" placeholder="Password input" />
    <bo-input type="number" placeholder="Number input" />
    <bo-input type="tel" placeholder="Phone input" />
    <bo-input type="url" placeholder="URL input" />
  </div>
</ExampleFrame>

## With Description and Hints

Inputs can have descriptions and hint messages:

<ExampleFrame :code="descriptionsExample">
  <div class="flex flex-col gap-4">
    <bo-input
      label="Username"
      description="Choose a unique username"
      hint="Must be at least 3 characters long"
      placeholder="Enter username"
    />
    <bo-input
      label="Password"
      state="invalid"
      error="Password must contain at least 8 characters"
      placeholder="Enter password"
      type="password"
    />
  </div>
</ExampleFrame>

## Required Fields

Mark inputs as required:

<ExampleFrame :code="requiredExample">
  <div class="flex gap-4">
    <bo-input label="Email" placeholder="Enter email" required />
  </div>
</ExampleFrame>

## Disabled State

Inputs can be disabled:

<ExampleFrame :code="disabledExample">
  <div class="flex gap-4">
    <bo-input placeholder="Disabled input" disabled />
  </div>
</ExampleFrame>

## Full Width

Inputs can take the full width of their container:

<ExampleFrame :code="fullWidthExample">
  <div class="w-full">
    <bo-input placeholder="Full width input" full-width />
  </div>
</ExampleFrame>

## API Reference

### Props

| Prop             | Type                           | Default         | Description                                             |
| ---------------- | ------------------------------ | --------------- | ------------------------------------------------------- |
| `id`             | `string`                       | `Autogenerated` | The id of the element.                                  |
| `dataTestId`     | `string`                       | `Autogenerated` | The data test id of the element.                        |
| `size`           | `BoInputSize`                  | `'default'`     | The size of the input.                                  |
| `state`          | `BoInputState`                 | `'default'`     | The state of the input.                                 |
| `variant`        | `BoInputVariant`               | `'default'`     | The variant of the input.                               |
| `type`           | `BoInputType`                  | `'text'`        | The type of the input.                                  |
| `placeholder`    | `string`                       | -               | The placeholder of the input.                           |
| `label`          | `string`                       | -               | The label of the input.                                 |
| `description`    | `string`                       | -               | Description for the input.                              |
| `error`          | `string`                       | -               | Error message to display when in invalid state.         |
| `hint`           | `string`                       | -               | Hint message to display below the input.                |
| `required`       | `boolean`                      | `false`         | Whether the input is required.                          |
| `name`           | `string`                       | -               | The name of the input.                                  |
| `disabled`       | `boolean`                      | `false`         | Whether the input is disabled.                          |
| `readOnly`       | `boolean`                      | `false`         | Whether the input is read-only.                         |
| `fullWidth`      | `boolean`                      | `false`         | Whether the input is full width or not.                 |
| `prefixIcon`     | `Icon`                         | -               | The prefix icon to render.                              |
| `suffixIcon`     | `Icon`                         | -               | The suffix icon to render.                              |
| `autofocus`      | `boolean`                      | `false`         | Whether the input should autofocus.                     |
| `revealPassword` | `boolean`                      | `false`         | Whether to show toggle button for password input.       |
| `role`           | `HTMLAttributes['role']`       | -               | The role of the element.                                |
| `ariaLabel`      | `HTMLAttributes['aria-label']` | -               | Defines a string value that labels the current element. |
