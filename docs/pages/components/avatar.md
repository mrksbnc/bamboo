<script setup>
import { BoAvatar, BoAvatarShape, BoAvatarType, BoAvatarVariant, BoAvatarIndicatorStatus, BoAvatarIndicatorPosition } from '@/components/bo-avatar';
import { BoSize } from '@/shared';
import { BoIcon, Icon } from '@/components/bo-icon';
</script>

# Avatar

A versatile avatar component used to represent users or entities with images or initials.

```js
import { BoAvatar } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-avatar :data="{ label: 'JD' }" />
</template>

<script setup>
import { BoAvatar } from '@mrksbnc/bamboo';
</script>
```

<hr />

<div class="my-4 flex items-center gap-4">
	<div class="my-4 flex items-center gap-4">
		<bo-avatar :data="{ label: 'JD' }" />
		<bo-avatar
			:data="{ label: 'JD' }"
			:shape="BoAvatarShape.circle"
		/>
		<bo-avatar
			:shape="BoAvatarShape.flat"
			:data="{ label: 'JD' }"
		/>
	</div>
	<div class="my-4 flex items-center gap-4">
		<bo-avatar
			:type="BoAvatarType.image"
			:data="{
				src: 'https://i.pravatar.cc/300',
				alt: 'Avatar image',
			}"
		/>
		<bo-avatar
			:type="BoAvatarType.image"
			:shape="BoAvatarShape.circle"
			:data="{
				src: 'https://i.pravatar.cc/300',
				alt: 'Avatar image',
			}"
		/>
		<bo-avatar
			:type="BoAvatarType.image"
			:shape="BoAvatarShape.flat"
			:data="{
				src: 'https://i.pravatar.cc/300',
				alt: 'Avatar image',
			}"
		/>
	</div>
</div>

## Props

| Name               | Type                | Default     | Description                            |
| ------------------ | ------------------- | ----------- | -------------------------------------- |
| `data`             | `BoAvatarData`      | `{}`        | Avatar data (image source or label)    |
| `type`             | `BoAvatarType`      | `initials`  | Type of avatar (image or initials)     |
| `shape`            | `BoAvatarShape`     | `rounded`   | Shape of the avatar                    |
| `size`             | `BoSize`            | `default`   | Size of the avatar                     |
| `clickable`        | `boolean`           | `false`     | Whether the avatar is clickable        |
| `withDefaultImage` | `boolean`           | `false`     | Show default image if no data provided |
| `variant`          | `BoAvatarVariant`   | `primary`   | Color variant of the avatar            |
| `color`            | `BoAvatarColor`     | `undefined` | Custom colors for the avatar           |
| `indicator`        | `BoAvatarIndicator` | `undefined` | Status indicator for the avatar        |

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

export enum BoAvatarIndicatorPosition {
	topLeft = 'top-left',
	topRight = 'top-right',
	bottomLeft = 'bottom-left',
	bottomRight = 'bottom-right',
}

export enum BoAvatarIndicatorStatus {
	online = 'online',
	offline = 'offline',
	busy = 'busy',
	away = 'away',
	none = 'none',
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

export interface BoAvatarIndicator {
	status?: BoAvatarIndicatorStatus;
	position?: BoAvatarIndicatorPosition;
}

export interface BoAvatarProps {
	data: BoAvatarData;
	type?: BoAvatarType;
	shape?: BoAvatarShape;
	size?: BoSize;
	clickable?: boolean;
	withDefaultImage?: boolean;
	variant?: BoAvatarVariant;
	color?: BoAvatarColor;
	indicator?: BoAvatarIndicator;
}
```

### Initials Avatar

<div class="flex gap-4 items-center my-4">
  <bo-avatar :type="BoAvatarType.initials" :data="{ label: 'JD' }" />
</div>

```vue
<bo-avatar :type="BoAvatarType.initials" :data="{ label: 'JD' }" />
```

### Image Avatar

<div class="flex gap-4 items-center my-4">
  <bo-avatar 
    :type="BoAvatarType.image" 
    :data="{ 
      src: 'https://i.pravatar.cc/300', 
      alt: 'Avatar image' 
    }" 
  />
</div>

```vue
<bo-avatar
	:type="BoAvatarType.image"
	:data="{
		src: 'https://i.pravatar.cc/300',
		alt: 'Avatar image',
	}"
/>
```

## Shapes

<div class="flex gap-4 items-center my-4">
  <bo-avatar :shape="BoAvatarShape.rounded" :data="{ label: 'JD' }" />
  <bo-avatar :shape="BoAvatarShape.circle" :data="{ label: 'JD' }" />
  <bo-avatar :shape="BoAvatarShape.flat" :data="{ label: 'JD' }" />
  <bo-avatar :shape="BoAvatarShape.outline_rounded" :data="{ label: 'JD' }" />
  <bo-avatar :shape="BoAvatarShape.outline_circle" :data="{ label: 'JD' }" />
  <bo-avatar :shape="BoAvatarShape.outline_flat" :data="{ label: 'JD' }" />
</div>

```vue
<bo-avatar :shape="BoAvatarShape.rounded" :data="{ label: 'JD' }" />
<bo-avatar :shape="BoAvatarShape.circle" :data="{ label: 'JD' }" />
<bo-avatar :shape="BoAvatarShape.flat" :data="{ label: 'JD' }" />
<bo-avatar :shape="BoAvatarShape.outline_rounded" :data="{ label: 'JD' }" />
<bo-avatar :shape="BoAvatarShape.outline_circle" :data="{ label: 'JD' }" />
<bo-avatar :shape="BoAvatarShape.outline_flat" :data="{ label: 'JD' }" />
```

## Sizes

<div class="flex items-center gap-4 my-4">
  <bo-avatar :size="BoSize.extra_small" :data="{ label: 'JD' }" />
  <bo-avatar :size="BoSize.small" :data="{ label: 'JD' }" />
  <bo-avatar :size="BoSize.default" :data="{ label: 'JD' }" />
  <bo-avatar :size="BoSize.large" :data="{ label: 'JD' }" />
  <bo-avatar :size="BoSize.extra_large" :data="{ label: 'JD' }" />
</div>

```vue
<bo-avatar :size="BoSize.extra_small" :data="{ label: 'JD' }" />
<bo-avatar :size="BoSize.small" :data="{ label: 'JD' }" />
<bo-avatar :size="BoSize.default" :data="{ label: 'JD' }" />
<bo-avatar :size="BoSize.large" :data="{ label: 'JD' }" />
<bo-avatar :size="BoSize.extra_large" :data="{ label: 'JD' }" />
```

## Variants

<div class="flex gap-4 items-center my-4">
  <bo-avatar :variant="BoAvatarVariant.primary" :data="{ label: 'JD' }" />
  <bo-avatar :variant="BoAvatarVariant.secondary" :data="{ label: 'JD' }" />
  <bo-avatar :variant="BoAvatarVariant.danger" :data="{ label: 'JD' }" />
  <bo-avatar :variant="BoAvatarVariant.warning" :data="{ label: 'JD' }" />
  <bo-avatar :variant="BoAvatarVariant.success" :data="{ label: 'JD' }" />
  <bo-avatar :variant="BoAvatarVariant.dark" :data="{ label: 'JD' }" />
</div>

```vue
<bo-avatar :variant="BoAvatarVariant.primary" :data="{ label: 'JD' }" />
<bo-avatar :variant="BoAvatarVariant.secondary" :data="{ label: 'JD' }" />
<bo-avatar :variant="BoAvatarVariant.danger" :data="{ label: 'JD' }" />
<bo-avatar :variant="BoAvatarVariant.warning" :data="{ label: 'JD' }" />
<bo-avatar :variant="BoAvatarVariant.success" :data="{ label: 'JD' }" />
<bo-avatar :variant="BoAvatarVariant.dark" :data="{ label: 'JD' }" />
```
