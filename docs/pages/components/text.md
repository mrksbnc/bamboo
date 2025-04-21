<script setup>
import { BoText, BoFontSize, BoFontWeight, BoFontFamily, BoTextWhiteSpace, BoTextColor, BoTextAlign } from '@/components/bo-text';
</script>

# Text

The Text component is a versatile typography component that provides consistent text styling across your application. It supports various font sizes, weights, families, colors, and text alignment options. The component is designed to be accessible and follows a consistent style pattern with the rest of the component library.

## Basic Example

```html
<bo-text value="Hello World" />
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
  <bo-text value="Hello World" />
</div>

### Props

| Prop name      | Type               | Default                   | Description                            |
| -------------- | ------------------ | ------------------------- | -------------------------------------- |
| `id`           | `string`           | Randomg generated id      | Unique identifier for the text element |
| `value`        | `string`           | -                         | Required. The text content to display  |
| `size`         | `BoFontSize`       | `BoFontSize.base`         | Font size of the text                  |
| `weight`       | `BoFontWeight`     | `BoFontWeight.regular`    | Font weight of the text                |
| `font-family`  | `BoFontFamily`     | `BoFontFamily.sans`       | Font family of the text                |
| `white-space`  | `BoTextWhiteSpace` | `BoTextWhiteSpace.normal` | White space handling for the text      |
| `color`        | `BoTextColor`      | `BoTextColor.default`     | Color of the text                      |
| `custom-color` | `string`           | -                         | Custom color value (hex, rgb, etc.)    |
| `css-class`    | `string`           | -                         | Additional CSS classes to apply        |
| `clickable`    | `boolean`          | `false`                   | Whether the text should be clickable   |
| `text-align`   | `BoTextAlign`      | `BoTextAlign.left`        | Text alignment                         |
| `selectable`   | `boolean`          | `true`                    | Whether the text can be selected       |

### Types

```ts
export enum BoFontSize {
	xs = 'xs', // Extra small text
	sm = 'sm', // Small text
	base = 'base', // Base/default text size
	lg = 'lg', // Large text
	xl = 'xl', // Extra large text
	'2xl' = '2xl', // 2x large text
	'3xl' = '3xl', // 3x large text
	'4xl' = '4xl', // 4x large text
	'5xl' = '5xl', // 5x large text
	'6xl' = '6xl', // 6x large text
	'7xl' = '7xl', // 7x large text
	'8xl' = '8xl', // 8x large text
	'9xl' = '9xl', // 9x large text
}

export enum BoFontWeight {
	light = 'light', // Light font weight
	regular = 'regular', // Regular/normal font weight
	medium = 'medium', // Medium font weight
	semibold = 'semibold', // Semi-bold font weight
	bold = 'bold', // Bold font weight
}

export enum BoFontFamily {
	sans = 'sans', // Sans-serif font family
	mono = 'mono', // Monospace font family
	serif = 'serif', // Serif font family
}

export enum BoTextWhiteSpace {
	normal = 'normal', // Normal white space handling
	nowrap = 'nowrap', // No line breaks
	pre = 'pre', // Preserve formatting
	pre_line = 'pre-line', // Preserve line breaks
	pre_wrap = 'pre-wrap', // Preserve line breaks and wrap
	break_spaces = 'break-spaces', // Break on spaces
}

export enum BoTextColor {
	default = 'default', // Default text color
	primary = 'primary', // Primary brand color
	secondary = 'secondary', // Secondary brand color
	inherit = 'inherit', // Inherit color from parent
	current = 'currentColor', // Current color
	success = 'success', // Success state color
	warning = 'warning', // Warning state color
	danger = 'danger', // Danger state color
}

export enum BoTextAlign {
	left = 'left', // Left-aligned text
	center = 'center', // Center-aligned text
	right = 'right', // Right-aligned text
	justify = 'justify', // Justified text
}
```

## Font Sizes

The Text component supports a wide range of font sizes:

<div class="flex flex-col gap-4">
  <bo-text value="Extra Small Text" :size="BoFontSize.xs" />
  <bo-text value="Small Text" :size="BoFontSize.sm" />
  <bo-text value="Base Text" :size="BoFontSize.base" />
  <bo-text value="Large Text" :size="BoFontSize.lg" />
  <bo-text value="Extra Large Text" :size="BoFontSize.xl" />
  <bo-text value="2X Large Text" :size="BoFontSize['2xl']" />
  <bo-text value="3X Large Text" :size="BoFontSize['3xl']" />
  <bo-text value="4X Large Text" :size="BoFontSize['4xl']" />
  <bo-text value="5X Large Text" :size="BoFontSize['5xl']" />
  <bo-text value="6X Large Text" :size="BoFontSize['6xl']" />
  <bo-text value="7X Large Text" :size="BoFontSize['7xl']" />
  <bo-text value="8X Large Text" :size="BoFontSize['8xl']" />
  <bo-text value="9X Large Text" :size="BoFontSize['9xl']" />
</div>

```html
<bo-text
	value="Extra Small Text"
	:size="BoFontSize.xs"
/>
<bo-text
	value="Small Text"
	:size="BoFontSize.sm"
/>
<bo-text
	value="Base Text"
	:size="BoFontSize.base"
/>
<bo-text
	value="Large Text"
	:size="BoFontSize.lg"
/>
<bo-text
	value="Extra Large Text"
	:size="BoFontSize.xl"
/>
<bo-text
	value="2X Large Text"
	:size="BoFontSize['2xl']"
/>
<bo-text
	value="3X Large Text"
	:size="BoFontSize['3xl']"
/>
...
```

## Font Weights

Different font weights are available to emphasize text:

<div class="flex flex-col gap-4">
  <bo-text value="Light Weight" :weight="BoFontWeight.light" />
  <bo-text value="Regular Weight" :weight="BoFontWeight.regular" />
  <bo-text value="Medium Weight" :weight="BoFontWeight.medium" />
  <bo-text value="Semi-Bold Weight" :weight="BoFontWeight.semibold" />
  <bo-text value="Bold Weight" :weight="BoFontWeight.bold" />
</div>

```html
<bo-text
	value="Light Weight"
	:weight="BoFontWeight.light"
/>
<bo-text
	value="Regular Weight"
	:weight="BoFontWeight.regular"
/>
<bo-text
	value="Medium Weight"
	:weight="BoFontWeight.medium"
/>
<bo-text
	value="Semi-Bold Weight"
	:weight="BoFontWeight.semibold"
/>
<bo-text
	value="Bold Weight"
	:weight="BoFontWeight.bold"
/>
```

## Font Families

Choose from different font families:

<div class="flex flex-col gap-4">
  <bo-text value="Sans Serif Text" :fontFamily="BoFontFamily.sans" />
  <bo-text value="Monospace Text" :fontFamily="BoFontFamily.mono" />
  <bo-text value="Serif Text" :fontFamily="BoFontFamily.serif" />
</div>

```html
<bo-text
	value="Sans Serif Text"
	:fontFamily="BoFontFamily.sans"
/>
<bo-text
	value="Monospace Text"
	:fontFamily="BoFontFamily.mono"
/>
<bo-text
	value="Serif Text"
	:fontFamily="BoFontFamily.serif"
/>
```

## Colors

The Text component supports various color options:

<div class="flex flex-col gap-4">
  <bo-text value="Default Color" :color="BoTextColor.default" />
  <bo-text value="Primary Color" :color="BoTextColor.primary" />
  <bo-text value="Secondary Color" :color="BoTextColor.secondary" />
  <bo-text value="Success Color" :color="BoTextColor.success" />
  <bo-text value="Warning Color" :color="BoTextColor.warning" />
  <bo-text value="Danger Color" :color="BoTextColor.danger" />
</div>

```html
<bo-text
	value="Default Color"
	:color="BoTextColor.default"
/>
<bo-text
	value="Primary Color"
	:color="BoTextColor.primary"
/>
<bo-text
	value="Secondary Color"
	:color="BoTextColor.secondary"
/>
<bo-text
	value="Success Color"
	:color="BoTextColor.success"
/>
<bo-text
	value="Warning Color"
	:color="BoTextColor.warning"
/>
<bo-text
	value="Danger Color"
	:color="BoTextColor.danger"
/>
```

## Text Alignment

Control the alignment of your text:

<div class="flex flex-col gap-4">
  <bo-text value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor." :text-align="BoTextAlign.left" />
  <bo-text value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor." :text-align="BoTextAlign.center" />
  <bo-text value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor." :text-align="BoTextAlign.right" />
  <bo-text value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor." :text-align="BoTextAlign.justify" />
</div>

```html
<bo-text
	value="Left Aligned Text"
	:text-align="BoTextAlign.left"
/>
<bo-text
	value="Center Aligned Text"
	:text-align="BoTextAlign.center"
/>
<bo-text
	value="Right Aligned Text"
	:text-align="BoTextAlign.right"
/>
<bo-text
	value="Justified Text"
	:text-align="BoTextAlign.justify"
/>
```

## White Space Handling

Control how white space is handled in your text:

<div class="flex flex-col gap-4">
  <bo-text value="Normal white space handling" :white-space="BoTextWhiteSpace.normal" />
  <bo-text value="No wrap text" :white-space="BoTextWhiteSpace.nowrap" />
  <bo-text value="Pre-formatted text" :white-space="BoTextWhiteSpace.pre" />
  <bo-text value="Pre-line text" :white-space="BoTextWhiteSpace.pre_line" />
  <bo-text value="Pre-wrap text" :white-space="BoTextWhiteSpace.pre_wrap" />
</div>

```html
<bo-text
	value="Normal white space handling"
	:white-space="BoTextWhiteSpace.normal"
/>
<bo-text
	value="No wrap text"
	:white-space="BoTextWhiteSpace.nowrap"
/>
<bo-text
	value="Pre-formatted text"
	:white-space="BoTextWhiteSpace.pre"
/>
<bo-text
	value="Pre-line text"
	:white-space="BoTextWhiteSpace.pre_line"
/>
<bo-text
	value="Pre-wrap text"
	:white-space="BoTextWhiteSpace.pre_wrap"
/>
```

## Clickable Text

Make text clickable for interactive elements:

<div class="flex flex-col gap-4">
  <bo-text value="Clickable Text" :clickable="true" />
  <bo-text value="Non-clickable Text" :clickable="false" />
</div>

```html
<bo-text
	value="Clickable Text"
	:clickable="true"
/>
<bo-text
	value="Non-clickable Text"
	:clickable="false"
/>
```

## Text Selection

Control whether text can be selected:

<div class="flex flex-col gap-4">
  <bo-text value="Selectable Text" :selectable="true" />
  <bo-text value="Non-selectable Text" :selectable="false" />
</div>

```html
<bo-text
	value="Selectable Text"
	:selectable="true"
/>
<bo-text
	value="Non-selectable Text"
	:selectable="false"
/>
```
