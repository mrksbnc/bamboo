---
title: Text
description: Typography component for rendering text with various styles and formatting options
category: display
tags:
  - text
  - typography
  - paragraph
  - heading
  - label
outline: deep
---

<script setup lang="ts">
import { BoText } from '@mrksbnc/bamboo-vue';

const basicExample = `<bo-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</bo-text>`;
const slotExample = `<div class="flex p-4 border rounded-md">
  <bo-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</bo-text>
</div>`;
const variantsExample = `<div class="flex gap-4 items-center">
  <div class="flex gap-4">
    <bo-text variant="default">Default</bo-text>
    <bo-text variant="primary">Primary</bo-text>
    <bo-text variant="secondary">Secondary</bo-text>
    <bo-text variant="disabled">Disabled</bo-text>
  </div>
  <div class="flex gap-4">
    <bo-text variant="success">Success</bo-text>
    <bo-text variant="warning">Warning</bo-text>
    <bo-text variant="destructive">Destructive</bo-text>
    <div class="bg-neutral-500 rounded-md p-1 px-2">
      <bo-text variant="white">White</bo-text>
    </div>
    <div class="bg-neutral-300 rounded-md py-1 px-2">
      <bo-text variant="black">Black</bo-text>
    </div>
  </div>
</div>`;
const sizesExample = `<div class="flex flex-col gap-4">
  <bo-text font-size="xs">XS</bo-text>
  <bo-text font-size="sm">SM</bo-text>
  <bo-text font-size="default">Default</bo-text>
  <bo-text font-size="lg">LG</bo-text>
  <bo-text font-size="xl">XL</bo-text>
  <bo-text font-size="2xl">2XL</bo-text>
  <bo-text font-size="3xl">3XL</bo-text>
  <bo-text font-size="4xl">4XL</bo-text>
  <bo-text font-size="5xl">5XL</bo-text>
  <bo-text font-size="6xl">6XL</bo-text>
  <bo-text font-size="7xl">7XL</bo-text>
  <bo-text font-size="8xl">8XL</bo-text>
  <bo-text font-size="9xl">9XL</bo-text>
</div>`;
const weightsExample = `<div class="flex gap-4 items-center pt-2 border-t border-neutral-200 dark:border-neutral-700">
  <bo-text font-weight="thin">Thin</bo-text>
  <bo-text font-weight="extra-light">Extra Light</bo-text>
  <bo-text font-weight="light">Light</bo-text>
  <bo-text font-weight="regular">Regular</bo-text>
  <bo-text font-weight="medium">Medium</bo-text>
  <bo-text font-weight="semibold">Semibold</bo-text>
  <bo-text font-weight="bold">Bold</bo-text>
  <bo-text font-weight="extra-bold">Extra Bold</bo-text>
  <bo-text font-weight="black">Black</bo-text>
</div>`;
const transformsExample = `<div class="flex gap-4 items-center">
  <bo-text text-transform="none">None</bo-text>
  <bo-text text-transform="capitalize">Capitalize</bo-text>
  <bo-text text-transform="uppercase">Uppercase</bo-text>
  <bo-text text-transform="lowercase">Lowercase</bo-text>
</div>`;
const cursorExample = `<div class="flex gap-4">
  <bo-text cursor="cursor-auto">cursor-auto</bo-text>
  <bo-text cursor="cursor-pointer">cursor-pointer</bo-text>
  <bo-text cursor="cursor-not-allowed">cursor-not-allowed</bo-text>
</div>`;
</script>

# Text

The `bo-text` component is used to render text with various styles and formatting options. It can be used to render headings, labels, paragraphs, and more.

## Basic Usage

The component is called `bo-text` and can be used as follows:

<ExampleFrame :code="basicExample">
  <bo-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</bo-text>
</ExampleFrame>

or with a slot:

<ExampleFrame :code="slotExample">
  <div class="flex p-4 border rounded-md">
    <bo-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</bo-text>
  </div>
</ExampleFrame>

## Variants

The `variant` prop allows you to customize the color of the text. The default variant is `primary`.

The available variants are:

- `default`: Default text color
- `primary`: Primary blue text
- `secondary`: Secondary gray text
- `disabled`: Disabled gray text
- `inherit`: Inherits color from parent
- `currentColor`: Uses current color
- `success`: Green text
- `warning`: Yellow/orange text
- `destructive`: Red text
- `white`: White text
- `black`: Black text

<ExampleFrame :code="variantsExample">
  <div class="flex gap-4 items-center">
    <div class="flex gap-4">
      <bo-text variant="default">Default</bo-text>
      <bo-text variant="primary">Primary</bo-text>
      <bo-text variant="secondary">Secondary</bo-text>
      <bo-text variant="disabled">Disabled</bo-text>
    </div>
    <div class="flex gap-4">
      <bo-text variant="success">Success</bo-text>
      <bo-text variant="warning">Warning</bo-text>
      <bo-text variant="destructive">Destructive</bo-text>
      <div class="bg-neutral-500 rounded-md p-1 px-2">
        <bo-text variant="white">White</bo-text>
      </div>
      <div class="bg-neutral-300 rounded-md py-1 px-2">
        <bo-text variant="black">Black</bo-text>
      </div>
    </div>
  </div>
</ExampleFrame>

## Sizes

The `font-size` prop allows you to customize the size of the text. The default size is `default`.

The available font sizes are `xs`, `sm`, `default`, `lg`, and `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`, and `9xl`.

<ExampleFrame :code="sizesExample">
  <div class="flex flex-col gap-4">
    <bo-text font-size="xs">XS</bo-text>
    <bo-text font-size="sm">SM</bo-text>
    <bo-text font-size="default">Default</bo-text>
    <bo-text font-size="lg">LG</bo-text>
    <bo-text font-size="xl">XL</bo-text>
    <bo-text font-size="2xl">2XL</bo-text>
    <bo-text font-size="3xl">3XL</bo-text>
    <bo-text font-size="4xl">4XL</bo-text>
    <bo-text font-size="5xl">5XL</bo-text>
    <bo-text font-size="6xl">6XL</bo-text>
    <bo-text font-size="7xl">7XL</bo-text>
    <bo-text font-size="8xl">8XL</bo-text>
    <bo-text font-size="9xl">9XL</bo-text>
  </div>
</ExampleFrame>

## Weights

The `font-weight` prop allows you to customize the weight of the text. The default weight is `normal`.

The available font weights are `thin`, `extra-light`, `light`, `regular`, `medium`, `semibold`, `bold`, `extra-bold`, and `black`.

<ExampleFrame :code="weightsExample">
  <div class="flex gap-4 items-center pt-2 border-t border-neutral-200 dark:border-neutral-700">
    <bo-text font-weight="thin">Thin</bo-text>
    <bo-text font-weight="extra-light">Extra Light</bo-text>
    <bo-text font-weight="light">Light</bo-text>
    <bo-text font-weight="regular">Regular</bo-text>
    <bo-text font-weight="medium">Medium</bo-text>
    <bo-text font-weight="semibold">Semibold</bo-text>
    <bo-text font-weight="bold">Bold</bo-text>
    <bo-text font-weight="extra-bold">Extra Bold</bo-text>
    <bo-text font-weight="black">Black</bo-text>
  </div>
</ExampleFrame>

## Alignments

The `textAlign` prop allows you to customize the alignment of the text. The default alignment is `left`.

The available alignments are:

- `left`: Aligns the text to the left.
- `center`: Aligns the text to the center.
- `right`: Aligns the text to the right.
- `justify`: Justifies the text.

## Transforms

The `textTransform` prop allows you to customize the transformation of the text. The default transformation is `none`.

The available transformations are:

- `none`: No transformation.
- `capitalize`: Capitalizes the first letter of each word.
- `uppercase`: Converts all characters to uppercase.
- `lowercase`: Converts all characters to lowercase.

<ExampleFrame :code="transformsExample">
  <div class="flex gap-4 items-center">
    <bo-text text-transform="none">None</bo-text>
    <bo-text text-transform="capitalize">Capitalize</bo-text>
    <bo-text text-transform="uppercase">Uppercase</bo-text>
    <bo-text text-transform="lowercase">Lowercase</bo-text>
  </div>
</ExampleFrame>

## Line Clamps

The `lineClamp` prop allows you to customize the number of lines or the maximum number of characters of the text. The default setting is `none`.

## White Space

The `whiteSpace` prop allows you to customize the white space of the text.

The available white spaces are `normal`, `nowrap`, `pre`, `pre-line`, and `pre-wrap`.

## Cursor

The `cursor` prop is used to control the cursor style of the text. The values are defined in the `BoCursor` type.

<ExampleFrame :code="cursorExample">
  <div class="flex gap-4">
    <bo-text cursor="cursor-auto">cursor-auto</bo-text>
    <bo-text cursor="cursor-pointer">cursor-pointer</bo-text>
    <bo-text cursor="cursor-not-allowed">cursor-not-allowed</bo-text>
  </div>
</ExampleFrame>

## API Reference

### Props

| Prop              | Type                                 | Default         | Description                                                                                                                                                      |
| ----------------- | ------------------------------------ | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`              | `string`                             | `Autogenerated` | The id of the element.                                                                                                                                           |
| `dataTestId`      | `string`                             | `Autogenerated` | The data test id of the element.                                                                                                                                 |
| `fontSize`        | `BoFontSize`                         | `default`       | The size of the element.                                                                                                                                         |
| `fontWeight`      | `BoFontWeight`                       | `regular`       | The weight of the element.                                                                                                                                       |
| `fontFamily`      | `BoFontFamily`                       | `inherit`       | The font family of the element.                                                                                                                                  |
| `whiteSpace`      | `BoTextWhiteSpace`                   | `normal`        | The white space of the element.                                                                                                                                  |
| `variant`         | `BoTextVariant`                      | `default`       | The variant of the element based on fixed enum values.                                                                                                           |
| `customColor`     | `string`                             | -               | Any custom color for the element. This props supports named css colors, hex colors, rgb colors, rgba colors, oklch colors, and css variables.                    |
| `clickable`       | `boolean`                            | `false`         | Whether the element is clickable. In case a custom cursor is provided, that will take precedence and this value will be ignored.                                 |
| `textAlign`       | `BoTextAlign`                        | `left`          | The text align of the element.                                                                                                                                   |
| `textTransform`   | `BoTextTransform`                    | `none`          | The text transform of the element.                                                                                                                               |
| `cursor`          | `BoCursor`                           | `cursor-auto`   | Cursor type of the element in Tailwind CSS format.                                                                                                               |
| `lineClamp`       | `BoTextLineClamp`                    | `none`          | The max lines of the element.                                                                                                                                    |
| `role`            | `HTMLAttributes['role']`             | -               | The role of the element.                                                                                                                                         |
| `ariaLabel`       | `HTMLAttributes['aria-label']`       | -               | Defines a string value that labels the current element.                                                                                                          |
| `ariaLabelledBy`  | `HTMLAttributes['aria-labelledby']`  | -               | Identifies the element (or elements) that describes the object.                                                                                                  |
| `ariaDescribedBy` | `HTMLAttributes['aria-describedby']` | -               | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. |
| `ariaLive`        | `HTMLAttributes['aria-live']`        | -               | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. |
| `lang`            | `string`                             | -               | Defines the language used in the element.                                                                                                                        |

### Slots

| Name      | Props | Description                        |
| --------- | ----- | ---------------------------------- |
| `default` | `-`   | The default slot for text content. |
