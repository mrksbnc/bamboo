# Text Component

The Text component provides a consistent way to display text with various styling options including size, weight, color, and alignment. It's designed to be flexible and adapt to different use cases.

## Installation

Import the component in your Vue file:

```vue
import { BoText, BoFontSize, BoFontWeight, BoTextAlign, BoTextColor, BoFontFamily, BoTextWhiteSpace
} from '@mrksbnc/bamboo'
```

## Basic Usage

A simple text component:

```vue
<template>
  <BoText text="Hello World" />
</template>
```

## Text Sizes

The text component supports different sizes:

```vue
<template>
  <div class="space-y-4">
    <BoText
      text="Extra Small Text"
      :size="BoFontSize.xs"
    />
    <BoText
      text="Small Text"
      :size="BoFontSize.sm"
    />
    <BoText
      text="Base Text"
      :size="BoFontSize.base"
    />
    <BoText
      text="Large Text"
      :size="BoFontSize.lg"
    />
    <BoText
      text="Extra Large Text"
      :size="BoFontSize.xl"
    />
    <BoText
      text="2XL Text"
      :size="BoFontSize['2xl']"
    />
    <BoText
      text="3XL Text"
      :size="BoFontSize['3xl']"
    />
    <!-- Additional sizes up to 9XL are available -->
  </div>
</template>

<script setup>
import { BoText, BoFontSize } from '@mrksbnc/bamboo'
</script>
```

## Font Weights

Different font weights are available:

```vue
<template>
  <div class="space-y-4">
    <BoText
      text="Light Weight"
      :weight="BoFontWeight.light"
    />
    <BoText
      text="Regular Weight"
      :weight="BoFontWeight.regular"
    />
    <BoText
      text="Medium Weight"
      :weight="BoFontWeight.medium"
    />
    <BoText
      text="Semibold Weight"
      :weight="BoFontWeight.semibold"
    />
    <BoText
      text="Bold Weight"
      :weight="BoFontWeight.bold"
    />
  </div>
</template>

<script setup>
import { BoText, BoFontWeight } from '@mrksbnc/bamboo'
</script>
```

## Font Families

Different font families are supported:

```vue
<template>
  <div class="space-y-4">
    <BoText
      text="Sans-serif font"
      :fontFamily="BoFontFamily.sans"
    />
    <BoText
      text="Monospace font"
      :fontFamily="BoFontFamily.mono"
    />
    <BoText
      text="Serif font"
      :fontFamily="BoFontFamily.serif"
    />
  </div>
</template>

<script setup>
import { BoText, BoFontFamily } from '@mrksbnc/bamboo'
</script>
```

## Text Colors

The text component provides various color options:

```vue
<template>
  <div class="space-y-4">
    <BoText
      text="Default Text"
      :color="BoTextColor.default"
    />
    <BoText
      text="Primary Text"
      :color="BoTextColor.primary"
    />
    <BoText
      text="Secondary Text"
      :color="BoTextColor.secondary"
    />
    <BoText
      text="Success Text"
      :color="BoTextColor.success"
    />
    <BoText
      text="Warning Text"
      :color="BoTextColor.warning"
    />
    <BoText
      text="Danger Text"
      :color="BoTextColor.danger"
    />
    <BoText
      text="Inherited Color"
      :color="BoTextColor.inherit"
    />
    <BoText
      text="Current Color"
      :color="BoTextColor.current"
    />
    <BoText
      text="Custom Color"
      customColor="#8A2BE2"
    />
  </div>
</template>

<script setup>
import { BoText, BoTextColor } from '@mrksbnc/bamboo'
</script>
```

## Text Alignment

Control text alignment:

```vue
<template>
  <div class="space-y-4">
    <BoText
      text="Left aligned text"
      :textAlign="BoTextAlign.left"
    />
    <BoText
      text="Center aligned text"
      :textAlign="BoTextAlign.center"
    />
    <BoText
      text="Right aligned text"
      :textAlign="BoTextAlign.right"
    />
    <BoText
      text="Justified text that spans multiple lines to demonstrate the justification effect"
      :textAlign="BoTextAlign.justify"
    />
  </div>
</template>

<script setup>
import { BoText, BoTextAlign } from '@mrksbnc/bamboo'
</script>
```

## White Space Handling

Control how white space is handled:

```vue
<template>
  <div class="space-y-4">
    <BoText
      text="Normal white space handling with default wrapping"
      :whiteSpace="BoTextWhiteSpace.normal"
    />
    <BoText
      text="This text will not wrap to the next line, even if it's very long"
      :whiteSpace="BoTextWhiteSpace.nowrap"
    />
    <BoText
      text="Preserves white spaces and line breaks
      like this example"
      :whiteSpace="BoTextWhiteSpace.pre"
    />
    <BoText
      text="Pre-line preserves 
      line breaks but collapses whitespace"
      :whiteSpace="BoTextWhiteSpace.pre_line"
    />
    <BoText
      text="Pre-wrap preserves white spaces and wraps           to the next line as needed"
      :whiteSpace="BoTextWhiteSpace.pre_wrap"
    />
    <BoText
      text="Break-spaces preserves spaces and adds line breaks where needed"
      :whiteSpace="BoTextWhiteSpace.break_spaces"
    />
  </div>
</template>

<script setup>
import { BoText, BoTextWhiteSpace } from '@mrksbnc/bamboo'
</script>
```

## Text Selection

Control whether text can be selected:

```vue
<template>
  <div class="space-y-4">
    <BoText text="This text cannot be selected (default)" />
    <BoText
      text="This text can be selected"
      :selectable="true"
    />
  </div>
</template>

<script setup>
import { BoText } from '@mrksbnc/bamboo'
</script>
```

## Clickable Text

Make text appear clickable:

```vue
<template>
  <BoText
    text="This text appears clickable"
    :clickable="true"
    @click="handleClick"
  />
</template>

<script setup>
import { BoText } from '@mrksbnc/bamboo'

function handleClick() {
  console.log('Text was clicked')
}
</script>
```

## Custom CSS Class

Add custom CSS classes:

```vue
<template>
  <BoText
    text="Text with custom styling"
    cssClass="italic underline"
  />
</template>

<script setup>
import { BoText } from '@mrksbnc/bamboo'
</script>
```

## Props

| Prop          | Type               | Default                   | Description                                              |
| ------------- | ------------------ | ------------------------- | -------------------------------------------------------- |
| `id`          | `string`           | Auto-generated            | Unique identifier for the text element                   |
| `text`        | `string`           | Required                  | The text content to display                              |
| `size`        | `BoFontSize`       | `BoFontSize.base`         | Font size of the text                                    |
| `weight`      | `BoFontWeight`     | `BoFontWeight.regular`    | Font weight of the text                                  |
| `fontFamily`  | `BoFontFamily`     | `BoFontFamily.sans`       | Font family for the text                                 |
| `whiteSpace`  | `BoTextWhiteSpace` | `BoTextWhiteSpace.normal` | How white space is handled                               |
| `color`       | `BoTextColor`      | `BoTextColor.current`     | Predefined color of the text                             |
| `customColor` | `string`           | `undefined`               | Custom CSS color value (overrides `color` prop)          |
| `cssClass`    | `string`           | `undefined`               | Additional CSS classes to apply                          |
| `clickable`   | `boolean`          | `false`                   | Whether the text appears clickable (adds pointer cursor) |
| `textAlign`   | `BoTextAlign`      | `BoTextAlign.justify`     | Text alignment                                           |
| `selectable`  | `boolean`          | `false`                   | Whether the text can be selected                         |

## Enums

### BoFontSize

- `xs`: Extra small
- `sm`: Small
- `base`: Base size
- `lg`: Large
- `xl`: Extra large
- `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`, `9xl`: Progressively larger sizes

### BoFontWeight

- `light`: Light weight
- `regular`: Regular weight
- `medium`: Medium weight
- `semibold`: Semi-bold weight
- `bold`: Bold weight

### BoFontFamily

- `sans`: Sans-serif font
- `mono`: Monospace font
- `serif`: Serif font

### BoTextColor

- `default`: Default text color (dark in light mode, light in dark mode)
- `primary`: Primary brand color
- `secondary`: Secondary text color
- `success`: Success/positive color
- `warning`: Warning color
- `danger`: Error/danger color
- `inherit`: Inherit color from parent
- `current`: Current color

### BoTextAlign

- `left`: Left-aligned
- `center`: Center-aligned
- `right`: Right-aligned
- `justify`: Justified text

### BoTextWhiteSpace

- `normal`: Normal whitespace handling
- `nowrap`: Prevents text from wrapping
- `pre`: Preserves whitespace and line breaks
- `pre_line`: Preserves line breaks but collapses whitespace
- `pre_wrap`: Preserves whitespace and adds line breaks when needed
- `break_spaces`: Adds line breaks at whitespace when needed
