---
title: bo-text
---

<script setup lang="ts">
import { BoText, BoTextVariant, BoFontWeight, BoFontSize, BoFontFamily, BoTextAlign, BoTextTransform, BoTextWhiteSpace } from '@/components/bo-text';
</script>

# bo-text

The bo-text component is a wrapper around the HTML `<p>` element to provide a consistent styling for text elements. It offers comprehensive typography controls including font size, weight, family, alignment, and color variants.

```vue
<bo-text value="Hello World" />
```

## Props

### Required

| Name    | Type     | Description             |
| ------- | -------- | ----------------------- |
| `value` | `string` | The text of the element |

### Optional

| Name              | Type               | Description                                  |
| ----------------- | ------------------ | -------------------------------------------- |
| `id`              | `string`           | Unique identifier for the text element       |
| `data-testid`     | `string`           | Unique data-test-id of the text              |
| `fontSize`        | `BoFontSize`       | The size of the text                         |
| `fontWeight`      | `BoFontWeight`     | The weight of the text                       |
| `fontFamily`      | `BoFontFamily`     | The font family of the text                  |
| `whiteSpace`      | `BoTextWhiteSpace` | The white space handling of the text         |
| `variant`         | `BoTextVariant`    | The color variant of the text                |
| `customColor`     | `string`           | Custom color of the text                     |
| `customCssClass`  | `string`           | Custom css class passed to the root element  |
| `clickable`       | `boolean`          | Whether the text is clickable                |
| `textAlign`       | `BoTextAlign`      | The text alignment                           |
| `textTransform`   | `BoTextTransform`  | The text transformation                      |
| `cursor`          | `string`           | Cursor type of the element                   |
| `maxLines`        | `number\|string`   | The max lines to render before truncating    |
| `role`            | `string`           | The accessibility role of the element        |
| `ariaLabel`       | `string`           | The accessible label of the text             |
| `ariaLabelledBy`  | `string`           | Reference to an element that labels the text |
| `ariaDescribedBy` | `string`           | Identifies elements that describe the text   |
| `ariaLive`        | `AriaLive`         | Live region behavior for dynamic content     |
| `lang`            | `string`           | The language of the text                     |

## Font Sizes

The text component supports different font sizes with the `fontSize` prop. The default size is `14px`.

<div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 2rem;">
  <bo-text value="Extra Small Text" :font-size="BoFontSize.xs" />
  <bo-text value="Small Text" :font-size="BoFontSize.sm" />
  <bo-text value="Default Text" :font-size="BoFontSize.default" />
  <bo-text value="Large Text" :font-size="BoFontSize.lg" />
  <bo-text value="Extra Large Text" :font-size="BoFontSize.xl" />
  <bo-text value="2X Large Text" :font-size="BoFontSize['2xl']" />
  <bo-text value="3X Large Text" :font-size="BoFontSize['3xl']" />
  <bo-text value="4X Large Text" :font-size="BoFontSize['4xl']" />
  <bo-text value="5X Large Text" :font-size="BoFontSize['5xl']" />
  <bo-text value="6X Large Text" :font-size="BoFontSize['6xl']" />
  <bo-text value="7X Large Text" :font-size="BoFontSize['7xl']" />
</div>

```vue
<bo-text value="Extra Small Text" :font-size="BoFontSize.xs" />
<bo-text value="Small Text" :font-size="BoFontSize.sm" />
<bo-text value="Default Text" :font-size="BoFontSize.default" />
<bo-text value="Large Text" :font-size="BoFontSize.lg" />
<bo-text value="Extra Large Text" :font-size="BoFontSize.xl" />
<bo-text value="2X Large Text" :font-size="BoFontSize['2xl']" />
<bo-text value="3X Large Text" :font-size="BoFontSize['3xl']" />
<bo-text value="4X Large Text" :font-size="BoFontSize['4xl']" />
<bo-text value="5X Large Text" :font-size="BoFontSize['5xl']" />
<bo-text value="6X Large Text" :font-size="BoFontSize['6xl']" />
<bo-text value="7X Large Text" :font-size="BoFontSize['7xl']" />
```

## Font Weights The text component supports different font weights with the `fontWeight` prop.

<div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 2rem;">
  <bo-text value="Thin Text" :font-weight="BoFontWeight.thin" />
  <bo-text value="Extra Light Text" :font-weight="BoFontWeight.extra_light" />
  <bo-text value="Light Text" :font-weight="BoFontWeight.light" />
  <bo-text value="Regular Text" :font-weight="BoFontWeight.regular" />
  <bo-text value="Medium Text" :font-weight="BoFontWeight.medium" />
  <bo-text value="Semibold Text" :font-weight="BoFontWeight.semibold" />
  <bo-text value="Bold Text" :font-weight="BoFontWeight.bold" />
  <bo-text value="Extra Bold Text" :font-weight="BoFontWeight.extra_bold" />
  <bo-text value="Black Text" :font-weight="BoFontWeight.black" />
</div>

```vue
<bo-text value="Extra Small Text" :font-weight="BoFontWeight.thin" />
<bo-text value="Small Text" :font-weight="BoFontWeight.extra_light" />
<bo-text value="Default Text" :font-weight="BoFontWeight.light" />
<bo-text value="Large Text" :font-weight="BoFontWeight.regular" />
<bo-text value="Extra Large Text" :font-weight="BoFontWeight.medium" />
<bo-text value="2X Large Text" :font-weight="BoFontWeight.semibold" />
<bo-text value="3X Large Text" :font-weight="BoFontWeight.bold" />
<bo-text value="4X Large Text" :font-weight="BoFontWeight.extra_bold" />
<bo-text value="5X Large Text" :font-weight="BoFontWeight.black" />
```

## Font Families The text component supports different font families with the `fontFamily` prop.

<div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 2rem;">
  <bo-text value="Sans Serif Text" :font-family="BoFontFamily.sans" />
  <bo-text value="Monospace Text" :font-family="BoFontFamily.mono" />
  <bo-text value="Serif Text" :font-family="BoFontFamily.serif" />
  <bo-text value="Inherit Text" :font-family="BoFontFamily.inherit" />
</div>

```vue
<bo-text value="Sans Serif Text" :font-family="BoFontFamily.sans" />
<bo-text value="Monospace Text" :font-family="BoFontFamily.mono" />
<bo-text value="Serif Text" :font-family="BoFontFamily.serif" />
<bo-text value="Inherit Text" :font-family="BoFontFamily.inherit" />
```

## Text Alignment The text component supports different text alignments with the `textAlign` prop.

<div
	style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 2rem; border: 1px solid #ccc; padding: 1rem;"
>
  <bo-text value="Left Aligned Text" :text-align="BoTextAlign.left" />
  <bo-text value="Center Aligned Text" :text-align="BoTextAlign.center" />
  <bo-text value="Right Aligned Text" :text-align="BoTextAlign.right" />
  <bo-text
    value="Justified Text - The quick brown fox jumps over the lazy dog. The sky is big and blue"
    :text-align="BoTextAlign.justify"
  />
</div>

```vue
<bo-text value="Left Aligned Text" :text-align="BoTextAlign.left" />
<bo-text value="Center Aligned Text" :text-align="BoTextAlign.center" />
<bo-text value="Right Aligned Text" :text-align="BoTextAlign.right" />

<bo-text
	value="Justified Text - The quick brown fox jumps over the lazy dog. The sky is big and blue"
	:text-align="BoTextAlign.justify"
/>
```

## Text Transform

The text component supports different text transformations with the `textTransform` prop.

<div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 2rem;">
  <bo-text value="Normal Text" :text-transform="BoTextTransform.none" />
  <bo-text value="capitalized text" :text-transform="BoTextTransform.capitalize" />
  <bo-text value="uppercase text" :text-transform="BoTextTransform.uppercase" />
  <bo-text value="LOWERCASE TEXT" :text-transform="BoTextTransform.lowercase" />
</div>

```vue
<bo-text value="Normal Text" :text-transform="BoTextTransform.none" />
<bo-text value="capitalized text" :text-transform="BoTextTransform.capitalize" />
<bo-text value="uppercase text" :text-transform="BoTextTransform.uppercase" />
<bo-text value="LOWERCASE TEXT" :text-transform="BoTextTransform.lowercase" />
```

## Variants The text component supports different color variants with the `variant` prop.

<div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 2rem;">
  <bo-text value="Default Text" :variant="BoTextVariant.default" />
  <bo-text value="Primary Text" :variant="BoTextVariant.primary" />
  <bo-text value="Secondary Text" :variant="BoTextVariant.secondary" />
  <bo-text value="Success Text" :variant="BoTextVariant.success" />
  <bo-text value="Warning Text" :variant="BoTextVariant.warning" />
  <bo-text value="Danger Text" :variant="BoTextVariant.danger" />
  <bo-text value="Disabled Text" :variant="BoTextVariant.disabled" />
  <bo-text value="Light Text" :variant="BoTextVariant.light" style="background-color: #000; padding: 0.5rem;" />
  <bo-text value="Dark Text" :variant="BoTextVariant.dark" />
  <bo-text value="Current Color Text" :variant="BoTextVariant.current" />
  <bo-text value="Inherit Text" :variant="BoTextVariant.inherit" />
</div>

```vue
<bo-text value="Default Text" :variant="BoTextVariant.default" />
<bo-text value="Primary Text" :variant="BoTextVariant.primary" />
<bo-text value="Secondary Text" :variant="BoTextVariant.secondary" />
<bo-text value="Success Text" :variant="BoTextVariant.success" />
<bo-text value="Warning Text" :variant="BoTextVariant.warning" />
<bo-text value="Danger Text" :variant="BoTextVariant.danger" />
<bo-text value="Disabled Text" :variant="BoTextVariant.disabled" />
<bo-text
	value="Light Text"
	:variant="BoTextVariant.light"
	style="background-color: #000; padding: 0.5rem;"
/>
<bo-text value="Dark Text" :variant="BoTextVariant.dark" />
<bo-text value="Current Color Text" :variant="BoTextVariant.current" />
<bo-text value="Inherit Text" :variant="BoTextVariant.inherit" />
```

## Custom Colors

You can customize the color of the text by passing a valid CSS color value to the `customColor` prop.

<div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 2rem;">
  <bo-text value="Custom CSS Variable Text" custom-color="--teal-500" />
  <bo-text value="Custom Hex Color Text" custom-color="#ff6b6b" />
  <bo-text value="Custom RGB Color Text" custom-color="rgb(255, 107, 107)" />
  <bo-text value="Custom RGBA Color Text" custom-color="rgba(255, 107, 107, 0.7)" />
  <bo-text value="Custom OKLCH Color Text" custom-color="oklch(0.7 0.15 180)" />
</div>

```vue
<bo-text value="Custom CSS Variable Text" custom-color="--teal-500" />
<bo-text value="Custom Hex Color Text" custom-color="#ff6b6b" />
<bo-text value="Custom RGB Color Text" custom-color="rgb(255, 107, 107)" />
<bo-text value="Custom RGBA Color Text" custom-color="rgba(255, 107, 107, 0.7)" />
<bo-text value="Custom OKLCH Color Text" custom-color="oklch(0.7 0.15 180)" />
```

## Text Truncation

The text component supports text truncation with the `maxLines` prop.

<div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 2rem; max-width: 300px;">
  <bo-text value="This is a very long text that will be truncated after two lines to demonstrate the maxLines functionality." :max-lines="2" />
  <bo-text value="This is another very long text that will be truncated after three lines to show different truncation behavior." :max-lines="3" />
</div>

```vue
<bo-text
	value="This is a very long text that will be truncated after two lines to demonstrate the maxLines functionality."
	:max-lines="2"
/>
<bo-text
	value="This is another very long text that will be truncated after three lines to show different truncation behavior."
	:max-lines="3"
/>
```

## White Space Handling

The text component supports different white space handling with the `whiteSpace` prop.

<div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 2rem; border: 1px solid #ccc; padding: 1rem;">
  <bo-text value="Normal white space. Text will wrap normally." :white-space="BoTextWhiteSpace.normal" />
  <bo-text value="No wrap text. This will not wrap and will be truncated if it exceeds the container width." :white-space="BoTextWhiteSpace.nowrap" />
  <bo-text value="Pre-formatted text.
  Line breaks and     spaces     are preserved." :white-space="BoTextWhiteSpace.pre" />
  <bo-text value="Pre-line text.
  Line breaks are preserved but spaces    are    collapsed." :white-space="BoTextWhiteSpace.pre_line" />
  <bo-text value="Pre-wrap text.
  Line breaks and     spaces     are preserved, but text wraps if needed." :white-space="BoTextWhiteSpace.pre_wrap" />
</div>

```vue
<bo-text
	value="Normal white space. Text will wrap normally."
	:white-space="BoTextWhiteSpace.normal"
/>
<bo-text
	value="No wrap text. This will not wrap and will be truncated if it exceeds the container width."
	:white-space="BoTextWhiteSpace.nowrap"
/>
<bo-text
	value="Pre-formatted text.
  Line breaks and     spaces     are preserved."
	:white-space="BoTextWhiteSpace.pre"
/>
<bo-text
	value="Pre-line text.
  Line breaks are preserved but spaces    are    collapsed."
	:white-space="BoTextWhiteSpace.pre_line"
/>
<bo-text
	value="Pre-wrap text.
  Line breaks and     spaces     are preserved, but text wraps if needed."
	:white-space="BoTextWhiteSpace.pre_wrap"
/>
```

## Interactive Text

The text component supports interactive features with the `clickable` prop.

<div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 2rem;">
  <bo-text value="Clickable Text (cursor pointer)" :clickable="true" />
</div>

```vue
<bo-text value="Clickable Text (cursor pointer)" :clickable="true" />
```

### Interfaces and constants

::: code-group

```ts [bo-text.ts]
enum BoFontWeight {
	thin = 'thin',
	extra_light = 'extra-light',
	light = 'light',
	regular = 'regular',
	medium = 'medium',
	semibold = 'semibold',
	bold = 'bold',
	extra_bold = 'extra-bold',
	black = 'black',
}

enum BoFontSize {
	xs = 'xs',
	sm = 'sm',
	default = 'default',
	lg = 'lg',
	xl = 'xl',
	'2xl' = '2xl',
	'3xl' = '3xl',
	'4xl' = '4xl',
	'5xl' = '5xl',
	'6xl' = '6xl',
	'7xl' = '7xl',
}

enum BoFontFamily {
	sans = 'sans',
	mono = 'mono',
	serif = 'serif',
	inherit = 'inherit',
}

enum BoTextWhiteSpace {
	normal = 'normal',
	nowrap = 'nowrap',
	pre = 'pre',
	pre_line = 'pre-line',
	pre_wrap = 'pre-wrap',
	break_spaces = 'break-spaces',
}

enum BoTextVariant {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	disabled = 'disabled',
	inherit = 'inherit',
	current = 'currentColor',
	success = 'success',
	warning = 'warning',
	danger = 'danger',
	light = 'light',
	dark = 'dark',
}

enum BoTextAlign {
	left = 'left',
	center = 'center',
	right = 'right',
	justify = 'justify',
}

enum BoTextTransform {
	none = 'none',
	capitalize = 'capitalize',
	uppercase = 'uppercase',
	lowercase = 'lowercase',
}

interface BoTextProps {
	/** The id of the element. */
	id?: string
	/** The data test id of the element. */
	dataTestId?: string
	/** The text of the element. */
	value: string
	/** The size of the element. */
	fontSize?: BoFontSize
	/** The weight of the element. */
	fontWeight?: BoFontWeight
	/** The font family of the element. */
	fontFamily?: BoFontFamily
	/** The white space of the element. */
	whiteSpace?: BoTextWhiteSpace
	/** The variant of the element based on fixed enum values. */
	variant?: BoTextVariant
	/** Any custom color for the element. */
	customColor?: string
	/** One or multiple css classes to be used for overriding the default styles on the element. */
	customCssClass?: string
	/** The clickable of the element. */
	clickable?: boolean
	/** The text align of the element. */
	textAlign?: BoTextAlign
	/** The text transform of the element. */
	textTransform?: BoTextTransform
	/** Cursor type of the element. */
	cursor?: string
	/** The max lines of the element. */
	maxLines?: number | string
	/** The role of the element. */
	role?: string
	/** Defines a string value that labels the current element. */
	ariaLabel?: string
	/** Reference to an element that labels the current element. */
	ariaLabelledBy?: string
	/** Identifies the element (or elements) that describes the object. */
	ariaDescribedBy?: string
	/** Live region behavior for dynamic content. */
	ariaLive?: AriaLive
	/** The language of the element. */
	lang?: string
}
```

:::
