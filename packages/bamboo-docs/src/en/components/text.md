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

<script setup>
import { BoText } from '@mrksbnc/bamboo-vue';
</script>

# Text

Typography component for rendering text with various styles and formatting options

## Basic Usage

<div class="flex flex-col gap-4">
  <bo-text value="apple" />
</div>

```vue
<!-- with value prop -->
<bo-text value="apple" font-size="lg" variant="destructive" />

<!-- or with slot -->
<bo-text>apple</bo-text>
```

## Variants

The `variant` prop is used to change the appearance of the component. The `variant` prop accepts a string value that corresponds to the desired appearance from the following set of values: `default`, `inherit`, `currentColor`, `primary`, `secondary`, `disabled`, `success`, `warning`, `destructive`, `white`, `black`.

<div class="flex gap-4">
  <bo-text value="primary" variant="primary" />
  <bo-text value="secondary" variant="secondary" />
  <bo-text value="disabled" variant="disabled" />
  <bo-text value="success" variant="success" />
  <bo-text value="warning" variant="warning" />
  <bo-text value="destructive" variant="destructive" />
  <div class="bg-neutral-600 rounded-md" style="padding: 0 0.5rem;">
    <bo-text value="white" variant="white" />
  </div>
  <div class="bg-neutral-300 rounded-md" style="padding: 0 0.5rem;">
    <bo-text value="black" variant="black" />
  </div>
</div>

### Usage

```html
<bo-text value="value" variant="primary" />
```

## Text Alignment

The `text-align` prop accepts a string value from the following list: `left`, `center`, `right`, `justify`. It is used to align the text within the component.



## Font Size

The `font-size` prop accepts a string value from the following list: `xs`, `sm`, `default`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`, `9xl`.

- `xs` - 0.75rem (12px)
- `sm` - 0.875rem (14px)
- `default` - 1rem (16px)
- `lg` - 1.125rem (18px)
- `xl` - 1.25rem (20px)
- `2xl` - 1.5rem (24px)
- `3xl` - 1.875rem (30px)
- `4xl` - 2.25rem (36px)
- `5xl` - 3rem (48px)
- `6xl` - 3.75rem (60px)
- `7xl` - 4.5rem (72px)
- `8xl` - 6rem (96px)
- `9xl` - 8rem (128px)

## 

### Usage

<div class="flex flex-col gap-4" style="margin-top: 1rem;">
  <bo-text value="xs - 0.75rem (12px)" font-size="xs" />
  <bo-text value="sm - 0.875rem (14px)" font-size="sm" />
  <bo-text value="default - 1rem (16px)" font-size="default" />
</div>

```html
<bo-text value="xs - 0.75rem (12px)" font-size="xs" />
<bo-text value="sm - 0.875rem (14px)" font-size="sm" />
<bo-text value="default - 1rem (16px)" font-size="default" />
<!-- ... -->
```

## Text Transform

The `text-transform` prop is used to transform the text within the component. The `text-transform` prop accepts a string value from the following list: `none`, `capitalize`, `uppercase`, `lowercase`.

### Usage

<div class="flex gap-4" style="margin-top: 1rem;">
  <bo-text value="none" text-transform="none" />
  <bo-text value="capitalize" text-transform="capitalize" />
  <bo-text value="uppercase" text-transform="uppercase" />
  <bo-text value="lowercase" text-transform="lowercase" />
</div>

```html
<bo-text value="none" text-transform="none" />
<bo-text value="capitalize" text-transform="capitalize" />
<bo-text value="uppercase" text-transform="uppercase" />
<bo-text value="lowercase" text-transform="lowercase" />
```

## White Space

The `white-space` prop is used to control the whitespace within the component. The `white-space` prop accepts a string value from the following list: `normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`.

### Usage

```html
<bo-text value="normal" white-space="normal" />
<bo-text value="nowrap" white-space="nowrap" />
<bo-text value="pre" white-space="pre" />
<bo-text value="pre-line" white-space="pre-line" />
<bo-text value="pre-wrap" white-space="pre-wrap" />
<bo-text value="break-spaces" white-space="break-spaces" />
```

## Cursor

The `cursor` prop is used to control the cursor within the component. The `cursor` prop accepts a string value from the following list: `default`, `clickable`.

### Usage

<div class="flex flex-col gap-4" style="margin-top: 1rem;">
  <bo-text value="cursor-default" cursor="default" />
  <bo-text value="cursor-pointer" cursor="clickable" />
</div>

## API

### Props

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | - | `-` | The text content to display |
| `variant` | `'default' \| 'inherit' \| 'currentColor' \| 'primary' \| 'secondary' \| 'disabled' \| 'success' \| 'warning' \| 'destructive' \| 'white' \| 'black'` | - | `default` | The color variant of the text |
| `fontSize` | `'xs' \| 'sm' \| 'default' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl' \| '5xl' \| '6xl' \| '7xl' \| '8xl' \| '9xl'` | - | `default` | The font size of the text |
| `textAlign` | `'left' \| 'center' \| 'right' \| 'justify'` | - | `-` | The text alignment |
| `textTransform` | `'none' \| 'capitalize' \| 'uppercase' \| 'lowercase'` | - | `-` | The text transformation |
| `whiteSpace` | `'normal' \| 'nowrap' \| 'pre' \| 'pre-line' \| 'pre-wrap' \| 'break-spaces'` | - | `-` | The whitespace handling |
| `cursor` | `'default' \| 'clickable'` | - | `default` | The cursor style |

### Slots

| Name | Props | Description |
| --- | --- | --- |
| `default` | `-` | The default slot for text content |

### Type Definitions

```typescript
export type BoFontWeight =
	| 'thin'
	| 'extra-light'
	| 'light'
	| 'regular'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extra-bold'
	| 'black';
```

```typescript
export type BoFontSize =
	| 'xs'
	| 'sm'
	| 'default'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| '8xl'
	| '9xl';
```

```typescript
export type BoFontFamily = 'sans' | 'mono' | 'serif' | 'inherit';
```

```typescript
export type BoTextWhiteSpace =
	| 'normal'
	| 'nowrap'
	| 'pre'
	| 'pre-line'
	| 'pre-wrap'
	| 'break-spaces';
```

```typescript
export type BoTextVariant =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'disabled'
	| 'inherit'
	| 'currentColor'
	| 'success'
	| 'warning'
	| 'destructive'
	| 'white'
	| 'black';
```

```typescript
export type BoTextAlign = 'left' | 'center' | 'right' | 'justify';
```

```typescript
export type BoTextTransform =
	/** No transformation. */
	| 'none'
	/** Capitalizes the first letter of each word. */
	| 'capitalize'
	/** Converts all characters to uppercase. */
	| 'uppercase'
	/** Converts all characters to lowercase. */
	| 'lowercase';
```

```typescript
/**
 * The max lines of the element.  This will be
 * translated to CSS line-clamp property.
 *
 * @see https://tailwindcss.com/docs/line-clamp
 *
 * @default 'none'
 */
export type BoTextLineClamp = number | string | 'none';
```

### Props Interface

```typescript
export interface BoTextProps {
	/** The id of the element. */
	id?: HTMLAttributes['id'];
	/** The data test id of the element. */
	dataTestId?: string;
	/** The text of the element. */
	value: string;
	/**
	 * The size of the element.
	 * @default 'default'
	 */
	fontSize?: BoFontSize;
	/**
	 * The weight of the element.
	 * @default 'regular'
	 */
	fontWeight?: BoFontWeight;
	/**
	 * The font family of the element.
	 * @default 'inherit'
	 */
	fontFamily?: BoFontFamily;
	/**
	 * The white space of the element.
	 * @default 'normal'
	 */
	whiteSpace?: BoTextWhiteSpace;
	/**
	 * The variant of the element based on fixed enum values.
	 * @default 'default'
	 */
	variant?: BoTextVariant;
	/** Any custom color for the element. This prop supports the following formats:
	 *
	 * - a variable name (e.g. --my-color)
	 * - a hex color (e.g. #ff0000)
	 * - an rgb color (e.g. rgb(255, 0, 0))
	 * - an rgba color (e.g. rgba(255, 0, 0, 0.5))
	 * - an oklch color (e.g. oklch(0.985 0.001 106.423))
	 */
	customColor?: string;
	/**
	 * Whether the element is clickable. In case a custom
	 * cursor is provided, that will take precedence and this
	 * value will be ignored.
	 */
	clickable?: boolean;
	/**
	 * The text align of the element.
	 * @default 'left'
	 */
	textAlign?: BoTextAlign;
	/**
	 * The text transform of the element.
	 * @default 'none'
	 */
	textTransform?: BoTextTransform;
	/**
	 * Cursor type of the element in Tailwind CSS format.
	 * @default 'cursor-auto'
	 */
	cursor?: BoCursor;
	/**
	 * The max lines of the element.
	 * @default 'none'
	 */
	lineClamp?: BoTextLineClamp;
	/** The role of the element. */
	role?: HTMLAttributes['role'];
	/** Defines a string value that labels the current element. */
	ariaLabel?: HTMLAttributes['aria-label'];
	/** Reference to an element that labels the current element. */
	ariaLabelledBy?: HTMLAttributes['aria-labelledby'];
	/** Identifies the element (or elements) that describes the object. */
	ariaDescribedBy?: HTMLAttributes['aria-describedby'];
	/** Indicates that an element will be updated, and describes the types of updates the user agents,
	 * assistive technologies, and user can expect from the live region.
	 *
	 * - off: The element is not exposed to an assistive technology.
	 * - polite: The element is exposed to an assistive technology that "actively" indicates that user input will occur.
	 * - assertive: The element is exposed to an assistive technology that "passively" indicates that user input will occur.
	 *
	 * @default 'polite'
	 */
	ariaLive?: HTMLAttributes['aria-live'];
	/** The language of the element. */
	lang?: string;
}
```
