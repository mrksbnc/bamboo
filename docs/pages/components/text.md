<script setup>
import BoText from '@/components/text/bo-text.vue';
import { BoFontSize, BoFontWeight, BoTextColor, BoTextAlign, BoFontFamily, BoTextWhiteSpace } from '@/components/text/bo-text';
</script>

# Text

A flexible text component for displaying and styling text with various properties.

```js
import { BoText } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-text value="Hello World" />
</template>

<script setup>
import { BoText } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
  <bo-text value="Hello World" />
</div>

## Props

| Name          | Type               | Default     | Description                    |
| ------------- | ------------------ | ----------- | ------------------------------ |
| `value`       | `string`           | Required    | Text content to display        |
| `id`          | `string`           | `auto`      | Unique ID for the text element |
| `size`        | `BoFontSize`       | `base`      | Font size                      |
| `weight`      | `BoFontWeight`     | `regular`   | Font weight                    |
| `fontFamily`  | `BoFontFamily`     | `sans`      | Font family                    |
| `whiteSpace`  | `BoTextWhiteSpace` | `normal`    | White space handling           |
| `color`       | `BoTextColor`      | `current`   | Text color                     |
| `customColor` | `string`           | `undefined` | Custom color (HEX, RGB)        |
| `cssClass`    | `string`           | `undefined` | Additional CSS classes         |
| `clickable`   | `boolean`          | `false`     | Whether text is clickable      |
| `textAlign`   | `BoTextAlign`      | `justify`   | Text alignment                 |
| `selectable`  | `boolean`          | `false`     | Whether text is selectable     |

## Types

```ts
export enum BoFontWeight {
	light = 'light',
	regular = 'regular',
	medium = 'medium',
	semibold = 'semibold',
	bold = 'bold',
}

export enum BoFontSize {
	xs = 'xs',
	sm = 'sm',
	base = 'base',
	lg = 'lg',
	xl = 'xl',
	'2xl' = '2xl',
	'3xl' = '3xl',
	'4xl' = '4xl',
	'5xl' = '5xl',
	'6xl' = '6xl',
	'7xl' = '7xl',
	'8xl' = '8xl',
	'9xl' = '9xl',
}

export enum BoFontFamily {
	sans = 'sans',
	mono = 'mono',
	serif = 'serif',
}

export enum BoTextWhiteSpace {
	normal = 'normal',
	nowrap = 'nowrap',
	pre = 'pre',
	pre_line = 'pre-line',
	pre_wrap = 'pre-wrap',
	break_spaces = 'break-spaces',
}

export enum BoTextColor {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	inherit = 'inherit',
	current = 'currentColor',
	success = 'success',
	warning = 'warning',
	danger = 'danger',
}

export enum BoTextAlign {
	left = 'left',
	center = 'center',
	right = 'right',
	justify = 'justify',
}

export interface BoTextProps {
	id?: string;
	value: string;
	size?: BoFontSize;
	weight?: BoFontWeight;
	fontFamily?: BoFontFamily;
	whiteSpace?: BoTextWhiteSpace;
	color?: BoTextColor;
	customColor?: string;
	cssClass?: string;
	clickable?: boolean;
	textAlign?: BoTextAlign;
	selectable?: boolean;
}
```

## Font Sizes

<div class="flex flex-col gap-4 my-4">
  <bo-text :size="BoFontSize.xs" value="Extra Small Text (xs)" />
  <bo-text :size="BoFontSize.sm" value="Small Text (sm)" />
  <bo-text :size="BoFontSize.base" value="Base Text (base)" />
  <bo-text :size="BoFontSize.lg" value="Large Text (lg)" />
  <bo-text :size="BoFontSize.xl" value="Extra Large Text (xl)" />
  <bo-text :size="BoFontSize['2xl']" value="2XL Text (2xl)" />
  <bo-text :size="BoFontSize['3xl']" value="3XL Text (3xl)" />
</div>

```vue
<bo-text :size="BoFontSize.xs" value="Extra Small Text (xs)" />
<bo-text :size="BoFontSize.sm" value="Small Text (sm)" />
<bo-text :size="BoFontSize.base" value="Base Text (base)" />
<bo-text :size="BoFontSize.lg" value="Large Text (lg)" />
<bo-text :size="BoFontSize.xl" value="Extra Large Text (xl)" />
<bo-text :size="BoFontSize['2xl']" value="2XL Text (2xl)" />
<bo-text :size="BoFontSize['3xl']" value="3XL Text (3xl)" />
```

## Font Weights

<div class="flex flex-col gap-4 my-4">
  <bo-text :weight="BoFontWeight.light" value="Light Weight" />
  <bo-text :weight="BoFontWeight.regular" value="Regular Weight" />
  <bo-text :weight="BoFontWeight.medium" value="Medium Weight" />
  <bo-text :weight="BoFontWeight.semibold" value="Semibold Weight" />
  <bo-text :weight="BoFontWeight.bold" value="Bold Weight" />
</div>

```vue
<bo-text :weight="BoFontWeight.light" value="Light Weight" />
<bo-text :weight="BoFontWeight.regular" value="Regular Weight" />
<bo-text :weight="BoFontWeight.medium" value="Medium Weight" />
<bo-text :weight="BoFontWeight.semibold" value="Semibold Weight" />
<bo-text :weight="BoFontWeight.bold" value="Bold Weight" />
```

## Colors

<div class="flex flex-col gap-4 my-4">
  <bo-text :color="BoTextColor.default" value="Default Color" />
  <bo-text :color="BoTextColor.primary" value="Primary Color" />
  <bo-text :color="BoTextColor.secondary" value="Secondary Color" />
  <bo-text :color="BoTextColor.success" value="Success Color" />
  <bo-text :color="BoTextColor.warning" value="Warning Color" />
  <bo-text :color="BoTextColor.danger" value="Danger Color" />
  <bo-text custom-color="#8B5CF6" value="Custom Color (#8B5CF6)" />
</div>

```vue
<bo-text :color="BoTextColor.default" value="Default Color" />
<bo-text :color="BoTextColor.primary" value="Primary Color" />
<bo-text :color="BoTextColor.secondary" value="Secondary Color" />
<bo-text :color="BoTextColor.success" value="Success Color" />
<bo-text :color="BoTextColor.warning" value="Warning Color" />
<bo-text :color="BoTextColor.danger" value="Danger Color" />
<bo-text custom-color="#8B5CF6" value="Custom Color (#8B5CF6)" />
```

## Font Families

<div class="flex flex-col gap-4 my-4">
  <bo-text :font-family="BoFontFamily.sans" value="Sans-serif Font" />
  <bo-text :font-family="BoFontFamily.serif" value="Serif Font" />
  <bo-text :font-family="BoFontFamily.mono" value="Monospace Font" />
</div>

```vue
<bo-text :font-family="BoFontFamily.sans" value="Sans-serif Font" />
<bo-text :font-family="BoFontFamily.serif" value="Serif Font" />
<bo-text :font-family="BoFontFamily.mono" value="Monospace Font" />
```

## Text Alignment

<div class="flex flex-col gap-4 my-4 border border-gray-200 p-4">
  <bo-text :text-align="BoTextAlign.left" value="Left Aligned Text" />
  <bo-text :text-align="BoTextAlign.center" value="Center Aligned Text" />
  <bo-text :text-align="BoTextAlign.right" value="Right Aligned Text" />
  <bo-text :text-align="BoTextAlign.justify" value="Justified Text. This is a longer text to demonstrate how justified alignment works across multiple lines." />
</div>

```vue
<bo-text :text-align="BoTextAlign.left" value="Left Aligned Text" />
<bo-text :text-align="BoTextAlign.center" value="Center Aligned Text" />
<bo-text :text-align="BoTextAlign.right" value="Right Aligned Text" />
<bo-text
	:text-align="BoTextAlign.justify"
	value="Justified Text. This is a longer text to demonstrate how justified alignment works across multiple lines."
/>
```

## White Space Handling

<div class="flex flex-col gap-4 my-4 border border-gray-200 p-4">
  <bo-text :white-space="BoTextWhiteSpace.normal" value="Normal white space. Text will wrap normally." />
  <bo-text :white-space="BoTextWhiteSpace.nowrap" value="No wrap text. This will not wrap and will be truncated if it exceeds the container width." />
  <bo-text :white-space="BoTextWhiteSpace.pre" value="Pre-formatted text.
  Line breaks and     spaces     are preserved." />
  <bo-text :white-space="BoTextWhiteSpace.pre_line" value="Pre-line text.
  Line breaks are preserved but spaces    are    collapsed." />
  <bo-text :white-space="BoTextWhiteSpace.pre_wrap" value="Pre-wrap text.
  Line breaks and     spaces     are preserved, but text wraps if needed." />
</div>

```vue
<bo-text
	:white-space="BoTextWhiteSpace.normal"
	value="Normal white space. Text will wrap normally."
/>
<bo-text
	:white-space="BoTextWhiteSpace.nowrap"
	value="No wrap text. This will not wrap and will be truncated if it exceeds the container width."
/>
<bo-text
	:white-space="BoTextWhiteSpace.pre"
	value="Pre-formatted text.
Line breaks and     spaces     are preserved."
/>
<bo-text
	:white-space="BoTextWhiteSpace.pre_line"
	value="Pre-line text.
Line breaks are preserved but spaces    are    collapsed."
/>
<bo-text
	:white-space="BoTextWhiteSpace.pre_wrap"
	value="Pre-wrap text.
Line breaks and     spaces     are preserved, but text wraps if needed."
/>
```

## Interactive Text

<div class="flex flex-col gap-4 my-4">
  <bo-text :clickable="true" value="Clickable Text (cursor pointer)" />
  <bo-text :selectable="true" value="Selectable Text (can be selected)" />
</div>

```vue
<bo-text :clickable="true" value="Clickable Text (cursor pointer)" />
<bo-text :selectable="true" value="Selectable Text (can be selected)" />
```
