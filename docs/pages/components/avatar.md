<script setup>
import { BoAvatar, BoAvatarShape, BoAvatarVariant } from '@/components/avatar';
import { BoSize } from '@/shared';
</script>

# Avatar

The Avatar component is used to represent a user or entity with an image, initials, or icon.

```js
import { BoAvatar } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-avatar
		src="/path/to/image.jpg"
		alt="User Avatar"
	/>
</template>

<script setup>
import { BoAvatar } from '@mrksbnc/bamboo';
</script>
```

<div class="flex gap-4 items-center my-4">
	<bo-avatar src="/path/to/image.jpg" alt="User Avatar" />
</div>

## Props

| Name        | Type              | Default                   | Description                       |
| ----------- | ----------------- | ------------------------- | --------------------------------- |
| `id`        | `string`          | `Generated UUID`          | Unique identifier for the avatar  |
| `src`       | `string`          | `undefined`               | URL of the avatar image           |
| `alt`       | `string`          | `undefined`               | Alt text for the image            |
| `initials`  | `string`          | `undefined`               | Initials to display when no image |
| `variant`   | `BoAvatarVariant` | `BoAvatarVariant.primary` | Color variant of the avatar       |
| `shape`     | `BoAvatarShape`   | `BoAvatarShape.circle`    | Shape of the avatar               |
| `size`      | `BoSize`          | `BoSize.default`          | Size of the avatar                |
| `clickable` | `boolean`         | `false`                   | Whether the avatar is clickable   |
| `ariaLabel` | `string`          | `undefined`               | Custom accessible label           |

## Events

| Name    | Payload      | Description                              |
| ------- | ------------ | ---------------------------------------- |
| `click` | `MouseEvent` | Emitted when clickable avatar is clicked |
| `error` | `Event`      | Emitted when image fails to load         |

## Types

```ts
export enum BoAvatarVariant {
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	warning = 'warning',
	success = 'success',
	light = 'light',
	dark = 'dark',
}

export enum BoAvatarShape {
	circle = 'circle',
	square = 'square',
}

export interface BoAvatarProps {
	id?: string;
	src?: string;
	alt?: string;
	initials?: string;
	variant?: BoAvatarVariant;
	shape?: BoAvatarShape;
	size?: BoSize;
	clickable?: boolean;
	ariaLabel?: string;
}
```

## Variants

<div class="flex gap-4 items-center my-4">
	<bo-avatar initials="JD" :variant="BoAvatarVariant.primary" />
	<bo-avatar initials="JD" :variant="BoAvatarVariant.secondary" />
	<bo-avatar initials="JD" :variant="BoAvatarVariant.danger" />
	<bo-avatar initials="JD" :variant="BoAvatarVariant.warning" />
	<bo-avatar initials="JD" :variant="BoAvatarVariant.success" />
	<bo-avatar initials="JD" :variant="BoAvatarVariant.light" />
	<bo-avatar initials="JD" :variant="BoAvatarVariant.dark" />
</div>

```vue
<bo-avatar initials="JD" :variant="BoAvatarVariant.primary" />
<bo-avatar initials="JD" :variant="BoAvatarVariant.secondary" />
<bo-avatar initials="JD" :variant="BoAvatarVariant.danger" />
<bo-avatar initials="JD" :variant="BoAvatarVariant.warning" />
<bo-avatar initials="JD" :variant="BoAvatarVariant.success" />
<bo-avatar initials="JD" :variant="BoAvatarVariant.light" />
<bo-avatar initials="JD" :variant="BoAvatarVariant.dark" />
```

## Shapes

<div class="flex gap-4 items-center my-4">
	<bo-avatar initials="JD" :shape="BoAvatarShape.circle" />
	<bo-avatar initials="JD" :shape="BoAvatarShape.square" />
</div>

```vue
<bo-avatar initials="JD" :shape="BoAvatarShape.circle" />
<bo-avatar initials="JD" :shape="BoAvatarShape.square" />
```

## Sizes

<div class="flex items-center gap-4 my-4">
	<bo-avatar initials="JD" :size="BoSize.extra_small" />
	<bo-avatar initials="JD" :size="BoSize.small" />
	<bo-avatar initials="JD" :size="BoSize.default" />
	<bo-avatar initials="JD" :size="BoSize.large" />
	<bo-avatar initials="JD" :size="BoSize.extra_large" />
</div>

```vue
<bo-avatar initials="JD" :size="BoSize.extra_small" />
<bo-avatar initials="JD" :size="BoSize.small" />
<bo-avatar initials="JD" :size="BoSize.default" />
<bo-avatar initials="JD" :size="BoSize.large" />
<bo-avatar initials="JD" :size="BoSize.extra_large" />
```

## States

### Clickable

<div class="flex gap-4 items-center my-4">
	<bo-avatar initials="JD" clickable />
</div>

```vue
<bo-avatar initials="JD" clickable />
```

## Content Variations

### With Image

<div class="flex gap-4 items-center my-4">
	<bo-avatar 
		src="/path/to/image.jpg" 
		alt="User Avatar" 
	/>
</div>

```vue
<bo-avatar src="/path/to/image.jpg" alt="User Avatar" />
```

### With Initials

<div class="flex gap-4 items-center my-4">
	<bo-avatar initials="JD" />
</div>

```vue
<bo-avatar initials="JD" />
```

## Event Handling

```vue
<template>
	<bo-avatar
		initials="JD"
		clickable
		@click="handleClick"
		@error="handleError"
	/>
</template>

<script setup>
const handleClick = (event) => {
	console.log('Avatar clicked:', event);
};

const handleError = (event) => {
	console.log('Image failed to load:', event);
};
</script>
```

## Accessibility

### Features

- Uses semantic HTML structure with proper ARIA roles
- Provides descriptive alt text for images
- Keyboard navigation support for clickable avatars
- Screen reader compatibility with descriptive labels
- Clear visual indicators for interactive states

### Keyboard Navigation

| Key         | Action                          |
| ----------- | ------------------------------- |
| Tab         | Move focus to clickable avatar  |
| Enter/Space | Trigger click on focused avatar |

### ARIA Attributes

| Attribute    | Purpose           | Values        |
| ------------ | ----------------- | ------------- |
| `role`       | Semantic role     | `img`         |
| `aria-label` | Accessible name   | Custom string |
| `alt`        | Image description | Custom string |

### Accessibility Props

| Name        | Type     | Default     | Description                               |
| ----------- | -------- | ----------- | ----------------------------------------- |
| `ariaLabel` | `string` | `undefined` | Custom accessible name for screen readers |
| `alt`       | `string` | `undefined` | Description of the avatar image           |
| `id`        | `string` | Generated   | Unique identifier for ARIA relationships  |
