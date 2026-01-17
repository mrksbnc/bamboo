# Text

The Text component provides flexible text rendering with various typography options, colors, and accessibility features.

## Basic Usage

```vue
<template>
	<div class="space-y-4">
		<bo-text value="Hello, World!" />
		<bo-text value="This is a paragraph of text." />
	</div>
</template>
```

## Font Sizes

Available sizes: `xs`, `sm`, `default`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`, `9xl`

```vue
<template>
	<div class="space-y-2">
		<bo-text value="Extra Small Text" font-size="xs" />
		<bo-text value="Small Text" font-size="sm" />
		<bo-text value="Default Text" font-size="default" />
		<bo-text value="Large Text" font-size="lg" />
		<bo-text value="Extra Large Text" font-size="xl" />
		<bo-text value="2XL Text" font-size="2xl" />
		<bo-text value="3XL Text" font-size="3xl" />
	</div>
</template>
```

## Font Weights

Available weights: `thin`, `extra-light`, `light`, `regular`, `medium`, `semibold`, `bold`, `extra-bold`, `black`

```vue
<template>
	<div class="space-y-2">
		<bo-text value="Thin Text" font-weight="thin" />
		<bo-text value="Light Text" font-weight="light" />
		<bo-text value="Regular Text" font-weight="regular" />
		<bo-text value="Medium Text" font-weight="medium" />
		<bo-text value="Semibold Text" font-weight="semibold" />
		<bo-text value="Bold Text" font-weight="bold" />
		<bo-text value="Black Text" font-weight="black" />
	</div>
</template>
```

## Font Families

Available families: `sans`, `mono`, `serif`, `inherit`

```vue
<template>
	<div class="space-y-2">
		<bo-text value="Sans-serif font" font-family="sans" />
		<bo-text value="Monospace font" font-family="mono" />
		<bo-text value="Serif font" font-family="serif" />
		<bo-text value="Inherited font" font-family="inherit" />
	</div>
</template>
```

## Variants

Available variants: `default`, `primary`, `secondary`, `disabled`, `inherit`, `currentColor`, `success`, `warning`, `destructive`, `white`, `black`

```vue
<template>
	<div class="space-y-2">
		<bo-text value="Default text" variant="default" />
		<bo-text value="Primary text" variant="primary" />
		<bo-text value="Secondary text" variant="secondary" />
		<bo-text value="Success text" variant="success" />
		<bo-text value="Warning text" variant="warning" />
		<bo-text value="Destructive text" variant="destructive" />
		<bo-text value="Disabled text" variant="disabled" />
	</div>
</template>
```

## Text Alignment

Available alignments: `left`, `center`, `right`, `justify`

```vue
<template>
	<div class="space-y-4 w-full max-w-md">
		<bo-text value="Left aligned text" text-align="left" />
		<bo-text value="Center aligned text" text-align="center" />
		<bo-text value="Right aligned text" text-align="right" />
		<bo-text
			value="Justified text that spans multiple lines to demonstrate the justify alignment option."
			text-align="justify"
		/>
	</div>
</template>
```

## Text Transform

Available transforms: `none`, `capitalize`, `uppercase`, `lowercase`

```vue
<template>
	<div class="space-y-2">
		<bo-text value="normal text" text-transform="none" />
		<bo-text value="capitalized text" text-transform="capitalize" />
		<bo-text value="uppercase text" text-transform="uppercase" />
		<bo-text value="LOWERCASE TEXT" text-transform="lowercase" />
	</div>
</template>
```

## White Space

Available options: `normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`

```vue
<template>
	<div class="space-y-4 w-full max-w-md">
		<bo-text
			value="This text will wrap normally when it reaches the container edge."
			white-space="normal"
		/>
		<bo-text value="This text will not wrap and may overflow the container." white-space="nowrap" />
		<bo-text
			value="This text    preserves    spaces and
line breaks exactly as written."
			white-space="pre"
		/>
	</div>
</template>
```

## Line Clamping

Limit text to a specific number of lines:

```vue
<template>
	<div class="space-y-4 w-full max-w-md">
		<bo-text
			value="This is a very long text that will be clamped to 2 lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			:line-clamp="2"
		/>
		<bo-text
			value="This text is clamped to 3 lines. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
			:line-clamp="3"
		/>
	</div>
</template>
```

## Custom Colors

Use custom colors with CSS variables, hex, RGB, or other color formats:

```vue
<template>
	<div class="space-y-2">
		<bo-text value="Custom red text" custom-color="#ff6b6b" />
		<bo-text value="Custom blue text" custom-color="rgb(59, 130, 246)" />
		<bo-text value="Custom variable color" custom-color="var(--my-custom-color)" />
	</div>
</template>
```

## Clickable Text

Make text interactive:

```vue
<template>
	<div class="space-y-2">
		<bo-text value="Click me!" clickable @click="handleClick" />
		<bo-text value="Custom cursor" clickable cursor="cursor-help" @click="showHelp" />
	</div>
</template>

<script setup>
	const handleClick = () => {
		console.log('Text clicked!');
	};

	const showHelp = () => {
		alert('This is help text');
	};
</script>
```

## Headings

Create semantic headings with appropriate styling:

```vue
<template>
	<div class="space-y-4">
		<bo-text
			value="Main Heading"
			font-size="4xl"
			font-weight="bold"
			role="heading"
			aria-level="1"
		/>
		<bo-text
			value="Section Heading"
			font-size="2xl"
			font-weight="semibold"
			role="heading"
			aria-level="2"
		/>
		<bo-text
			value="Subsection Heading"
			font-size="xl"
			font-weight="medium"
			role="heading"
			aria-level="3"
		/>
	</div>
</template>
```

## Labels and Captions

```vue
<template>
	<div class="space-y-4">
		<div>
			<bo-text value="Form Label" font-size="sm" font-weight="medium" variant="default" />
			<input type="text" class="mt-1 block w-full border rounded px-3 py-2" />
		</div>

		<div>
			<img src="/image.jpg" alt="Example" class="w-full h-48 object-cover rounded" />
			<bo-text
				value="Image caption describing the content above"
				font-size="sm"
				variant="secondary"
				text-align="center"
			/>
		</div>
	</div>
</template>
```

## Status Messages

```vue
<template>
	<div class="space-y-2">
		<bo-text
			value="✓ Success: Operation completed successfully"
			variant="success"
			font-weight="medium"
		/>
		<bo-text value="⚠ Warning: Please review your input" variant="warning" font-weight="medium" />
		<bo-text value="✗ Error: Something went wrong" variant="destructive" font-weight="medium" />
	</div>
</template>
```

## Props

| Prop            | Type               | Default     | Description                                 |
| --------------- | ------------------ | ----------- | ------------------------------------------- |
| `id`            | `string`           | -           | Element ID                                  |
| `dataTestId`    | `string`           | -           | Data test ID                                |
| `value`         | `string`           | -           | Text content to display                     |
| `fontSize`      | `BoFontSize`       | `'default'` | Size of the text                            |
| `fontWeight`    | `BoFontWeight`     | `'regular'` | Weight of the text                          |
| `fontFamily`    | `BoFontFamily`     | `'inherit'` | Font family                                 |
| `whiteSpace`    | `BoTextWhiteSpace` | `'normal'`  | White space handling                        |
| `variant`       | `BoTextVariant`    | `'default'` | Color variant                               |
| `customColor`   | `string`           | -           | Custom color (CSS variable, hex, rgb, etc.) |
| `clickable`     | `boolean`          | `false`     | Whether text is clickable                   |
| `textAlign`     | `BoTextAlign`      | `'left'`    | Text alignment                              |
| `textTransform` | `BoTextTransform`  | `'none'`    | Text transformation                         |
| `cursor`        | `BoCursor`         | -           | Custom cursor style                         |
| `lineClamp`     | `BoTextLineClamp`  | `'none'`    | Maximum number of lines                     |
| `role`          | `string`           | -           | ARIA role attribute                         |
| `ariaLabel`     | `string`           | -           | ARIA label attribute                        |
| `ariaLevel`     | `number`           | -           | ARIA level for headings                     |
| `lang`          | `string`           | -           | Language attribute                          |

## Events

| Event   | Payload      | Description                          |
| ------- | ------------ | ------------------------------------ |
| `click` | `MouseEvent` | Fired when clickable text is clicked |

## Types

```typescript
type BoFontSize =
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

type BoFontWeight =
	| 'thin'
	| 'extra-light'
	| 'light'
	| 'regular'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extra-bold'
	| 'black';

type BoFontFamily = 'sans' | 'mono' | 'serif' | 'inherit';

type BoTextVariant =
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

type BoTextAlign = 'left' | 'center' | 'right' | 'justify';

type BoTextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

type BoTextLineClamp = number | string | 'none';
```

## Accessibility

- Semantic HTML elements based on content type
- Proper ARIA attributes for interactive text
- Support for screen reader announcements
- Keyboard navigation for clickable text
- Proper heading hierarchy with `aria-level`
- Language support with `lang` attribute
- Color contrast compliance
- Focus management for interactive elements
