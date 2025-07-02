<script setup>
import { BoAvatar, BoAvatarShape, BoAvatarType, BoAvatarVariant } from '@/components/avatar';
import { BoSize } from '@/shared/bo-size';
</script>

# BoAvatar

A versatile avatar component that displays user profile images, initials, or fallback images with support for different shapes, sizes, and interactive behaviors.

```js
import { BoAvatar } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-avatar
		:data="{ label: 'John Doe' }"
		:type="BoAvatarType.initials"
	/>
</template>

<script setup>
import { BoAvatar, BoAvatarType } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
	<bo-avatar :data="{ label: 'John Doe' }" :type="BoAvatarType.initials" />
	<bo-avatar :data="{ src: 'https://via.placeholder.com/150', alt: 'User Avatar' }" :type="BoAvatarType.image" />
</div>

## Props

| Name              | Type              | Default                   | Description                                      |
| ----------------- | ----------------- | ------------------------- | ------------------------------------------------ |
| `id`              | `string`          | Generated UUID            | Unique identifier for the avatar                 |
| `size`            | `BoSize`          | `BoSize.default`          | Size of the avatar                               |
| `data`            | `BoAvatarData`    | `undefined`               | Avatar data (image source or label for initials) |
| `type`            | `BoAvatarType`    | `BoAvatarType.initials`   | Type of avatar (image or initials)               |
| `clickable`       | `boolean`         | `false`                   | Whether the avatar is clickable and interactive  |
| `shape`           | `BoAvatarShape`   | `BoAvatarShape.rounded`   | Shape of the avatar                              |
| `color`           | `BoAvatarColor`   | `undefined`               | Custom colors for background and text            |
| `variant`         | `BoAvatarVariant` | `BoAvatarVariant.primary` | Color variant of the avatar                      |
| `ariaLabel`       | `string`          | `undefined`               | Custom ARIA label for accessibility              |
| `ariaDescribedBy` | `string`          | `undefined`               | ID of element that describes this avatar         |
| `ariaPressed`     | `boolean`         | `undefined`               | Whether the avatar represents a pressed state    |

## Events

| Name          | Payload                        | Description                              |
| ------------- | ------------------------------ | ---------------------------------------- |
| `click`       | `{ id: string }`               | Emitted when clickable avatar is clicked |
| `image-load`  | `{ id: string, src: string }`  | Emitted when image loads successfully    |
| `image-error` | `{ id: string, error: Event }` | Emitted when image fails to load         |

## Types

```ts
export enum BoAvatarShape {
	circle = 'circle',
	flat = 'flat',
	rounded = 'rounded',
	outline_flat = 'outline_flat',
	outline_rounded = 'outline_rounded',
	outline_circle = 'outline_circle',
}

export enum BoAvatarVariant {
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	warning = 'warning',
	success = 'success',
	dark = 'dark',
}

export enum BoAvatarType {
	image = 'image',
	initials = 'initials',
}

export interface BoAvatarData {
	alt?: string;
	src?: string;
	label?: string;
}

export interface BoAvatarColor {
	bgColorHex?: string;
	colorHex?: string;
}

export interface BoAvatarProps {
	id?: string;
	size?: BoSize;
	data?: BoAvatarData;
	type?: BoAvatarType;
	clickable?: boolean;
	shape?: BoAvatarShape;
	color?: BoAvatarColor;
	variant?: BoAvatarVariant;
	ariaLabel?: string;
	ariaDescribedBy?: string;
	ariaPressed?: boolean;
}
```

## Avatar Types

### Image Avatar

<div class="flex gap-4 items-center my-4">
	<bo-avatar 
		:data="{ src: 'https://via.placeholder.com/150', alt: 'User Profile' }" 
		:type="BoAvatarType.image" 
	/>
	<bo-avatar 
		:data="{ src: 'invalid-url', alt: 'Fallback Example' }" 
		:type="BoAvatarType.image" 
	/>
</div>

```vue
<bo-avatar
	:data="{ src: 'https://via.placeholder.com/150', alt: 'User Profile' }"
	:type="BoAvatarType.image"
/>
<bo-avatar :data="{ src: 'invalid-url', alt: 'Fallback Example' }" :type="BoAvatarType.image" />
```

### Initials Avatar

<div class="flex gap-4 items-center my-4">
	<bo-avatar :data="{ label: 'John Doe' }" :type="BoAvatarType.initials" />
	<bo-avatar :data="{ label: 'Jane Smith' }" :type="BoAvatarType.initials" />
	<bo-avatar :data="{ label: 'A' }" :type="BoAvatarType.initials" />
</div>

```vue
<bo-avatar :data="{ label: 'John Doe' }" :type="BoAvatarType.initials" />
<bo-avatar :data="{ label: 'Jane Smith' }" :type="BoAvatarType.initials" />
<bo-avatar :data="{ label: 'A' }" :type="BoAvatarType.initials" />
```

## Shapes

<div class="flex gap-4 items-center my-4">
	<bo-avatar :shape="BoAvatarShape.circle" :data="{ label: 'CI' }" />
	<bo-avatar :shape="BoAvatarShape.rounded" :data="{ label: 'RO' }" />
	<bo-avatar :shape="BoAvatarShape.flat" :data="{ label: 'FL' }" />
</div>

```vue
<bo-avatar :shape="BoAvatarShape.circle" :data="{ label: 'CI' }" />
<bo-avatar :shape="BoAvatarShape.rounded" :data="{ label: 'RO' }" />
<bo-avatar :shape="BoAvatarShape.flat" :data="{ label: 'FL' }" />
```

### Outline Shapes

<div class="flex gap-4 items-center my-4">
	<bo-avatar :shape="BoAvatarShape.outline_circle" :data="{ label: 'OC' }" />
	<bo-avatar :shape="BoAvatarShape.outline_rounded" :data="{ label: 'OR' }" />
	<bo-avatar :shape="BoAvatarShape.outline_flat" :data="{ label: 'OF' }" />
</div>

```vue
<bo-avatar :shape="BoAvatarShape.outline_circle" :data="{ label: 'OC' }" />
<bo-avatar :shape="BoAvatarShape.outline_rounded" :data="{ label: 'OR' }" />
<bo-avatar :shape="BoAvatarShape.outline_flat" :data="{ label: 'OF' }" />
```

## Sizes

<div class="flex items-center gap-4 my-4">
	<bo-avatar :size="BoSize.extra_small" :data="{ label: 'XS' }" />
	<bo-avatar :size="BoSize.small" :data="{ label: 'S' }" />
	<bo-avatar :size="BoSize.default" :data="{ label: 'M' }" />
	<bo-avatar :size="BoSize.large" :data="{ label: 'L' }" />
	<bo-avatar :size="BoSize.extra_large" :data="{ label: 'XL' }" />
</div>

```vue
<bo-avatar :size="BoSize.extra_small" :data="{ label: 'XS' }" />
<bo-avatar :size="BoSize.small" :data="{ label: 'S' }" />
<bo-avatar :size="BoSize.default" :data="{ label: 'M' }" />
<bo-avatar :size="BoSize.large" :data="{ label: 'L' }" />
<bo-avatar :size="BoSize.extra_large" :data="{ label: 'XL' }" />
```

## Variants

<div class="flex gap-4 items-center my-4">
	<bo-avatar :variant="BoAvatarVariant.primary" :data="{ label: 'PR' }" />
	<bo-avatar :variant="BoAvatarVariant.secondary" :data="{ label: 'SE' }" />
	<bo-avatar :variant="BoAvatarVariant.danger" :data="{ label: 'DA' }" />
	<bo-avatar :variant="BoAvatarVariant.warning" :data="{ label: 'WA' }" />
	<bo-avatar :variant="BoAvatarVariant.success" :data="{ label: 'SU' }" />
	<bo-avatar :variant="BoAvatarVariant.dark" :data="{ label: 'DK' }" />
</div>

```vue
<bo-avatar :variant="BoAvatarVariant.primary" :data="{ label: 'PR' }" />
<bo-avatar :variant="BoAvatarVariant.secondary" :data="{ label: 'SE' }" />
<bo-avatar :variant="BoAvatarVariant.danger" :data="{ label: 'DA' }" />
<bo-avatar :variant="BoAvatarVariant.warning" :data="{ label: 'WA' }" />
<bo-avatar :variant="BoAvatarVariant.success" :data="{ label: 'SU' }" />
<bo-avatar :variant="BoAvatarVariant.dark" :data="{ label: 'DK' }" />
```

## States

### Clickable

<div class="flex gap-4 items-center my-4">
	<bo-avatar :data="{ label: 'Click Me' }" clickable />
	<bo-avatar :data="{ label: 'Static' }" />
</div>

```vue
<bo-avatar :data="{ label: 'Click Me' }" clickable />
<bo-avatar :data="{ label: 'Static' }" />
```

## Custom Colors

<div class="flex gap-4 items-center my-4">
	<bo-avatar 
		:data="{ label: 'C1' }" 
		:color="{ bgColorHex: '#ff6b6b', colorHex: '#ffffff' }"
	/>
	<bo-avatar 
		:data="{ label: 'C2' }" 
		:color="{ bgColorHex: '#4ecdc4', colorHex: '#ffffff' }"
	/>
	<bo-avatar 
		:data="{ label: 'C3' }" 
		:color="{ bgColorHex: '#ffe66d', colorHex: '#333333' }"
	/>
</div>

```vue
<bo-avatar :data="{ label: 'C1' }" :color="{ bgColorHex: '#ff6b6b', colorHex: '#ffffff' }" />
<bo-avatar :data="{ label: 'C2' }" :color="{ bgColorHex: '#4ecdc4', colorHex: '#ffffff' }" />
<bo-avatar :data="{ label: 'C3' }" :color="{ bgColorHex: '#ffe66d', colorHex: '#333333' }" />
```

## Event Handling

```vue
<template>
	<bo-avatar
		:data="{ label: 'Interactive' }"
		clickable
		@click="handleClick"
		@image-load="handleImageLoad"
		@image-error="handleImageError"
	/>
</template>

<script setup>
const handleClick = ({ id }) => {
	console.log('Avatar clicked:', id);
};

const handleImageLoad = ({ id, src }) => {
	console.log('Image loaded:', { id, src });
};

const handleImageError = ({ id, error }) => {
	console.log('Image failed to load:', { id, error });
};
</script>
```

## Accessibility

### ARIA Attributes

| Attribute          | Purpose                 | Values                     |
| ------------------ | ----------------------- | -------------------------- |
| `role`             | Semantic role           | `img`, `button`            |
| `aria-label`       | Accessible name         | Custom or generated string |
| `aria-describedby` | Description reference   | Element ID                 |
| `aria-pressed`     | Pressed state (buttons) | `true`, `false`            |

### Accessibility Props

| Name              | Type      | Default     | Description                               |
| ----------------- | --------- | ----------- | ----------------------------------------- |
| `ariaLabel`       | `string`  | `undefined` | Custom accessible name for screen readers |
| `ariaDescribedBy` | `string`  | `undefined` | ID of element describing this avatar      |
| `ariaPressed`     | `boolean` | `undefined` | Whether avatar represents pressed state   |

### BEM Classes

The component follows BEM methodology for consistent styling:

| Class                         | Purpose                    |
| ----------------------------- | -------------------------- |
| `.bo-avatar`                  | Base component container   |
| `.bo-avatar--extra-small`     | Extra small size modifier  |
| `.bo-avatar--small`           | Small size modifier        |
| `.bo-avatar--default`         | Default size modifier      |
| `.bo-avatar--large`           | Large size modifier        |
| `.bo-avatar--extra-large`     | Extra large size modifier  |
| `.bo-avatar--circle`          | Circle shape modifier      |
| `.bo-avatar--rounded`         | Rounded shape modifier     |
| `.bo-avatar--flat`            | Flat shape modifier        |
| `.bo-avatar--outline-circle`  | Outline circle modifier    |
| `.bo-avatar--outline-rounded` | Outline rounded modifier   |
| `.bo-avatar--outline-flat`    | Outline flat modifier      |
| `.bo-avatar--primary`         | Primary variant modifier   |
| `.bo-avatar--secondary`       | Secondary variant modifier |
| `.bo-avatar--danger`          | Danger variant modifier    |
| `.bo-avatar--warning`         | Warning variant modifier   |
| `.bo-avatar--success`         | Success variant modifier   |
| `.bo-avatar--dark`            | Dark variant modifier      |
| `.bo-avatar--clickable`       | Clickable state modifier   |
| `.bo-avatar__fallback`        | Fallback image container   |
| `.bo-avatar__image`           | Image content              |
| `.bo-avatar__initials`        | Initials container         |

### Test IDs

All elements include data-testid attributes for reliable testing:

| Test ID Pattern               | Element                  |
| ----------------------------- | ------------------------ |
| `{id}-avatar`                 | Main container           |
| `{id}-avatar-fallback`        | Fallback image container |
| `{id}-avatar-fallback-image`  | Fallback image element   |
| `{id}-avatar-image-container` | Image container          |
| `{id}-avatar-image`           | Image element            |
| `{id}-avatar-initials`        | Initials container       |
| `{id}-avatar-label`           | Label text element       |

## Dark Mode Support

The avatar automatically adapts to dark mode using Tailwind CSS classes:

- Variants use `dark:bg-*` background colors
- Outline variants use `dark:border-*` and `dark:text-*` colors
- Text colors use `dark:text-*` classes for proper contrast
- Hover and interactive states adapt to dark theme
