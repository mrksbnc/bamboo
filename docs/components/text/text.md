<script setup>
import { BoText, BoFontSize, BoFontWeight, BoTextColor } from '@/components/bo-text'
</script>

# Text Component

The `bo-text` component provides a consistent way to display text with rich styling options including size, weight, color, and alignment. It's designed to work seamlessly with the design system and supports both light and dark modes.

## Import

```typescript
import {
	BoText,
	BoFontSize,
	BoFontWeight,
	BoTextAlign,
	BoTextColor,
	BoFontFamily,
	BoTextWhiteSpace,
} from '@/components/bo-text';
```

## Basic Usage

```vue
<template>
	<bo-text text="Hello World" />
</template>
```

<div class="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
  <bo-text text="Hello World" />
</div>

## Features

### Text Sizes

The available text sizes are:

The component supports many text sizes, These are members of the `BoFontSize` enum:

| Size        | Value  |
| ----------- | ------ |
| Extra Small | `xs`   |
| Small       | `sm`   |
| Base        | `base` |
| Large       | `lg`   |
| Extra Large | `xl`   |
| 2xl         | `2xl`  |
| 3xl         | `3xl`  |
| 4xl         | `4xl`  |
| 5xl         | `5xl`  |
| 6xl         | `6xl`  |
| 7xl         | `7xl`  |
| 8xl         | `8xl`  |
| 9xl         | `9xl`  |

You can use the `size` prop to set the text size:

<div class="flex flex-col gap-2 bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
  <bo-text text="Extra Small Text" :size="BoFontSize.xs" />
  <bo-text text="Small Text" :size="BoFontSize.sm" />
  <bo-text text="Base Text (Default)" :size="BoFontSize.base" />
  <bo-text text="Large Text" :size="BoFontSize.lg" />
  <bo-text text="Extra Large Text" :size="BoFontSize.xl" />
  <bo-text text="2xl Text" :size="BoFontSize['2xl']" />
  <bo-text text="3xl Text" :size="BoFontSize['3xl']" />
  <bo-text text="4xl Text" :size="BoFontSize['4xl']" />
  <bo-text text="5xl Text" :size="BoFontSize['5xl']" />
  <bo-text text="6xl Text" :size="BoFontSize['6xl']" />
  <bo-text text="7xl Text" :size="BoFontSize['7xl']" />
  <bo-text text="8xl Text" :size="BoFontSize['8xl']" />
  <bo-text text="9xl Text" :size="BoFontSize['9xl']" />
</div>

```vue
<template>
	<div class="flex flex-col space-y-2">
		<bo-text
			text="Extra Small Text"
			:size="BoFontSize.xs"
		/>
		<bo-text
			text="Small Text"
			:size="BoFontSize.sm"
		/>
		<bo-text
			text="Base Text (Default)"
			:size="BoFontSize.base"
		/>
		<bo-text
			text="Large Text"
			:size="BoFontSize.lg"
		/>
		<bo-text
			text="Extra Large Text"
			:size="BoFontSize.xl"
		/>
		<bo-text
			text="2xl Text"
			:size="BoFontSize['2xl']"
		/>
	</div>
</template>
```

### Font Weights

Control the weight of your text to create visual hierarchy:

The available font weights are:

| Weight   | Value      |
| -------- | ---------- |
| Light    | `light`    |
| Regular  | `regular`  |
| Medium   | `medium`   |
| Semibold | `semibold` |
| Bold     | `bold`     |

You can use the `weight` prop to set the text weight:

<div class="flex flex-col gap-2 bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
  <bo-text text="Light Weight" :weight="BoFontWeight.light" />
  <bo-text text="Regular Weight (Default)" :weight="BoFontWeight.regular" />
  <bo-text text="Medium Weight" :weight="BoFontWeight.medium" />
  <bo-text text="Semibold Weight" :weight="BoFontWeight.semibold" />
  <bo-text text="Bold Weight" :weight="BoFontWeight.bold" />
</div>

```vue
<template>
	<div class="flex flex-col space-y-2">
		<bo-text
			text="Light Weight"
			:weight="BoFontWeight.light"
		/>
		<bo-text
			text="Regular Weight (Default)"
			:weight="BoFontWeight.regular"
		/>
		<bo-text
			text="Medium Weight"
			:weight="BoFontWeight.medium"
		/>
		<bo-text
			text="Semibold Weight"
			:weight="BoFontWeight.semibold"
		/>
		<bo-text
			text="Bold Weight"
			:weight="BoFontWeight.bold"
		/>
	</div>
</template>
```

### Text Colors

The text component provides semantic color options that automatically adjust for dark mode:

The available text colors are:

| Color     | Value       |
| --------- | ----------- |
| Default   | `default`   |
| Primary   | `primary`   |
| Secondary | `secondary` |
| Success   | `success`   |
| Warning   | `warning`   |
| Danger    | `danger`    |
| Inherit   | `inherit`   |
| Current   | `current`   |

You can use the `color` prop to set the text color:

<div class="flex flex-col gap-2 bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
  <bo-text text="Default Text" :color="BoTextColor.default" />
  <bo-text text="Primary Text" :color="BoTextColor.primary" />
  <bo-text text="Secondary Text" :color="BoTextColor.secondary" />
  <bo-text text="Success Text" :color="BoTextColor.success" />
  <bo-text text="Warning Text" :color="BoTextColor.warning" />
  <bo-text text="Danger Text" :color="BoTextColor.danger" />
  <bo-text text="Inherit Color" :color="BoTextColor.inherit" />
  <bo-text text="Current Color" :color="BoTextColor.current" />
</div>

```vue
<template>
	<div class="flex flex-col space-y-2 p-4">
		<!-- Light mode section -->
		<div class="rounded-md bg-white p-3 shadow-sm">
			<h3 class="mb-2 font-bold">Light Mode</h3>
			<bo-text
				text="Default Text"
				:color="BoTextColor.default"
			/>
			<bo-text
				text="Primary Text"
				:color="BoTextColor.primary"
			/>
			<bo-text
				text="Secondary Text"
				:color="BoTextColor.secondary"
			/>
			<bo-text
				text="Success Text"
				:color="BoTextColor.success"
			/>
			<bo-text
				text="Warning Text"
				:color="BoTextColor.warning"
			/>
			<bo-text
				text="Danger Text"
				:color="BoTextColor.danger"
			/>
		</div>

		<!-- Dark mode section -->
		<div class="rounded-md bg-gray-800 p-3 shadow-sm">
			<h3 class="mb-2 font-bold text-white">Dark Mode</h3>
			<bo-text
				text="Default Text"
				:color="BoTextColor.default"
			/>
			<bo-text
				text="Primary Text"
				:color="BoTextColor.primary"
			/>
			<bo-text
				text="Secondary Text"
				:color="BoTextColor.secondary"
			/>
			<bo-text
				text="Success Text"
				:color="BoTextColor.success"
			/>
			<bo-text
				text="Warning Text"
				:color="BoTextColor.warning"
			/>
			<bo-text
				text="Danger Text"
				:color="BoTextColor.danger"
			/>
		</div>

		<!-- Custom color -->
		<bo-text
			text="Custom Purple Color"
			customColor="#8A2BE2"
		/>
	</div>
</template>
```

![Text Colors Example](../../../public/examples/text-colors.png)

### Text Alignment

Control text alignment with the `textAlign` prop:

```vue
<template>
	<div class="flex max-w-lg flex-col space-y-4">
		<div class="rounded border p-3">
			<bo-text
				text="Left aligned text (good for most western languages)"
				:textAlign="BoTextAlign.left"
			/>
		</div>

		<div class="rounded border p-3">
			<bo-text
				text="Center aligned text (good for titles and headings)"
				:textAlign="BoTextAlign.center"
			/>
		</div>

		<div class="rounded border p-3">
			<bo-text
				text="Right aligned text (good for numbers in tables)"
				:textAlign="BoTextAlign.right"
			/>
		</div>

		<div class="rounded border p-3">
			<bo-text
				text="Justified text that spans multiple lines to demonstrate the justification effect. This text will be stretched to fill the width of the container."
				:textAlign="BoTextAlign.justify"
			/>
		</div>
	</div>
</template>
```

![Text Alignment Example](../../../public/examples/text-alignment.png)

### White Space Handling

Control how white space and line breaks are handled with the `whiteSpace` prop:

```vue
<template>
	<div class="flex max-w-md flex-col space-y-4 rounded border p-4">
		<div class="border-b p-2">
			<strong>Normal (Default):</strong>
			<bo-text
				text="Normal white space handling with default wrapping behavior. Long text will wrap normally."
				:whiteSpace="BoTextWhiteSpace.normal"
			/>
		</div>

		<div class="border-b p-2">
			<strong>No Wrap:</strong>
			<div class="overflow-x-auto">
				<bo-text
					text="This text will not wrap to the next line, even if it's very long. You'll need to scroll to see it all."
					:whiteSpace="BoTextWhiteSpace.nowrap"
				/>
			</div>
		</div>

		<div class="border-b p-2">
			<strong>Pre:</strong>
			<bo-text
				text="Preserves white spaces and line breaks
        exactly like this example shows.
        Even    multiple    spaces   are preserved."
				:whiteSpace="BoTextWhiteSpace.pre"
			/>
		</div>

		<div class="p-2">
			<strong>Pre Line:</strong>
			<bo-text
				text="Pre-line preserves 
        line breaks but collapses    whitespace    like    this."
				:whiteSpace="BoTextWhiteSpace.pre_line"
			/>
		</div>
	</div>
</template>
```

![White Space Example](../../../public/examples/text-whitespace.png)

### Interactive Text

Make text selectable or clickable:

```vue
<template>
	<div class="space-y-4 rounded border p-4">
		<div>
			<bo-text text="This text cannot be selected (default)" />
			<div class="mt-1 text-xs text-gray-500">Try to select this text - it won't work</div>
		</div>

		<div>
			<bo-text
				text="This text can be selected - try it!"
				:selectable="true"
			/>
			<div class="mt-1 text-xs text-gray-500">You can select this text</div>
		</div>

		<div>
			<bo-text
				text="This text is clickable - notice the cursor"
				:clickable="true"
				:color="BoTextColor.primary"
				@click="alert('Text was clicked!')"
			/>
			<div class="mt-1 text-xs text-gray-500">Hover to see the pointer cursor</div>
		</div>
	</div>
</template>

<script setup>
function alert(message) {
	window.alert(message);
}
</script>
```

![Interactive Text Example](../../../public/examples/text-interactive.png)

### Font Families

Change the font family to match your design needs:

```vue
<template>
	<div class="space-y-4 rounded border p-4">
		<bo-text
			text="Sans-serif font (Default)"
			:fontFamily="BoFontFamily.sans"
		/>

		<bo-text
			text="Monospace font - good for code"
			:fontFamily="BoFontFamily.mono"
		/>

		<bo-text
			text="Serif font - traditional look"
			:fontFamily="BoFontFamily.serif"
		/>
	</div>
</template>
```

![Font Families Example](../../../public/examples/text-families.png)

## Real-World Examples

### Notification Message

```vue
<template>
	<div class="rounded-md border border-blue-200 bg-blue-50 p-4">
		<div class="flex items-start">
			<div class="mr-3 flex-shrink-0">
				<!-- Icon would go here -->
			</div>
			<div>
				<bo-text
					text="Email Verification Required"
					:weight="BoFontWeight.semibold"
					:color="BoTextColor.primary"
				/>
				<bo-text
					text="Please verify your email address to access all features. We've sent a verification link to your inbox."
					:size="BoFontSize.sm"
					:color="BoTextColor.secondary"
					:selectable="true"
					cssClass="mt-1"
				/>
			</div>
		</div>
		<div class="mt-3">
			<bo-text
				text="Resend verification email"
				:size="BoFontSize.sm"
				:color="BoTextColor.primary"
				:clickable="true"
				:weight="BoFontWeight.medium"
			/>
		</div>
	</div>
</template>
```

![Notification Example](../../../public/examples/text-notification.png)

### Article Content

```vue
<template>
	<article class="mx-auto max-w-2xl p-4">
		<bo-text
			text="Getting Started with Vue 3 Composition API"
			:size="BoFontSize['2xl']"
			:weight="BoFontWeight.bold"
			:textAlign="BoTextAlign.left"
		/>

		<bo-text
			text="Published on May 12, 2023"
			:size="BoFontSize.sm"
			:color="BoTextColor.secondary"
			cssClass="mt-2 mb-6"
		/>

		<bo-text
			text="The Vue 3 Composition API provides a set of additive, function-based APIs that allow flexible composition of component logic. In this article, we'll explore the fundamentals and see how it compares to the Options API."
			:weight="BoFontWeight.medium"
			cssClass="mb-4"
		/>

		<bo-text
			text="Vue's Composition API was introduced to address limitations in the Options API, particularly when dealing with complex components. With the Composition API, we can:"
			cssClass="mb-2"
		/>

		<bo-text
			text="• Better organize complex component logic
• Reuse code across components with composables
• Enjoy improved TypeScript integration
• Gain better performance with smaller bundle sizes"
			:whiteSpace="BoTextWhiteSpace.pre_line"
			cssClass="mb-4 pl-4"
		/>

		<bo-text
			text="Ready to learn more? Check out the official documentation."
			:color="BoTextColor.secondary"
		/>
	</article>
</template>
```

![Article Example](../../../public/examples/text-article.png)

## API Reference

### Props

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

### Enums

#### BoFontSize

```typescript
enum BoFontSize {
	xs = 'xs', // Extra small
	sm = 'sm', // Small
	base = 'base', // Base size (default)
	lg = 'lg', // Large
	xl = 'xl', // Extra large
	'2xl' = '2xl', // 2X large
	'3xl' = '3xl', // 3X large
	'4xl' = '4xl', // And so on...
	'5xl' = '5xl',
	'6xl' = '6xl',
	'7xl' = '7xl',
	'8xl' = '8xl',
	'9xl' = '9xl',
}
```

#### BoFontWeight

```typescript
enum BoFontWeight {
	light = 'light', // Light weight
	regular = 'regular', // Regular weight (default)
	medium = 'medium', // Medium weight
	semibold = 'semibold', // Semi-bold weight
	bold = 'bold', // Bold weight
}
```

#### BoFontFamily

```typescript
enum BoFontFamily {
	sans = 'sans', // Sans-serif font (default)
	mono = 'mono', // Monospace font
	serif = 'serif', // Serif font
}
```

#### BoTextColor

```typescript
enum BoTextColor {
	default = 'default', // Default text color (dark in light mode, light in dark mode)
	primary = 'primary', // Primary brand color
	secondary = 'secondary', // Secondary text color
	success = 'success', // Success/positive color
	warning = 'warning', // Warning color
	danger = 'danger', // Error/danger color
	inherit = 'inherit', // Inherit color from parent
	current = 'current', // Current color
}
```

#### BoTextAlign

```typescript
enum BoTextAlign {
	left = 'left', // Left-aligned
	center = 'center', // Center-aligned
	right = 'right', // Right-aligned
	justify = 'justify', // Justified text (default)
}
```

#### BoTextWhiteSpace

```typescript
enum BoTextWhiteSpace {
	normal = 'normal', // Normal whitespace handling (default)
	nowrap = 'nowrap', // Prevents text from wrapping
	pre = 'pre', // Preserves whitespace and line breaks
	pre_line = 'pre-line', // Preserves line breaks but collapses whitespace
	pre_wrap = 'pre-wrap', // Preserves whitespace and wraps when needed
	break_spaces = 'break-spaces', // Adds line breaks at whitespace when needed
}
```

## Best Practices

1. **Use semantic colors** for consistent theming and dark mode support
2. **Choose appropriate text sizes** for hierarchy: larger for headings, smaller for body text
3. **Be consistent with alignment**: left-align is generally best for readability in most western languages
4. **Use selectable text** for content that users might want to copy
5. **Limit custom colors** to maintain design consistency; prefer using the predefined color options
