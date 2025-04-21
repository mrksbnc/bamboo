<script setup>
import { BoAvatar, BoAvatarShape, BoAvatarType, BoAvatarVariant, BoAvatarIndicatorPosition, BoAvatarIndicatorStatus } from '@/components/bo-avatar';
import { BoSize } from '@/shared';
</script>

# Avatar

Avatars represent users or entities with images, initials, or icons. They provide visual identification in user interfaces.

```js
import { BoAvatar } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-avatar :data="{ src: '/path/to/image.jpg', alt: 'User Avatar' }" />
</template>

<script setup>
import { BoAvatar } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
	<bo-avatar :data="{ src: 'https://i.pravatar.cc/300', alt: 'User Avatar' }" />
</div>

## Props

| Name               | Type                | Default     | Description                                               |
| ------------------ | ------------------- | ----------- | --------------------------------------------------------- |
| `data`             | `BoAvatarData`      | Required    | Avatar data (image source, alt text, or initials)         |
| `type`             | `BoAvatarType`      | `image`     | Type of avatar (image or initials)                        |
| `shape`            | `BoAvatarShape`     | `circle`    | Controls the avatar's shape                               |
| `size`             | `BoSize`            | `default`   | Controls the avatar's size                                |
| `clickable`        | `boolean`           | `false`     | Makes the avatar clickable with hover effects             |
| `withDefaultImage` | `boolean`           | `false`     | Shows a default image if the provided image fails to load |
| `variant`          | `BoAvatarVariant`   | `primary`   | Color variant for backgrounds and outlines                |
| `color`            | `BoAvatarColor`     | `undefined` | Custom background and text colors                         |
| `indicator`        | `BoAvatarIndicator` | `undefined` | Status indicator settings                                 |

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

## Avatar Types

### Image Avatar

<div class="flex gap-4 items-center my-4">
	<bo-avatar 
		:type="BoAvatarType.image" 
		:data="{ src: 'https://i.pravatar.cc/300', alt: 'User Avatar' }" 
	/>
</div>

```vue
<bo-avatar
	:type="BoAvatarType.image"
	:data="{ src: 'https://i.pravatar.cc/300', alt: 'User Avatar' }"
/>
```

### Initials Avatar

<div class="flex gap-4 items-center my-4">
	<bo-avatar 
		:type="BoAvatarType.initials" 
		:data="{ label: 'JD' }" 
	/>
</div>

```vue
<bo-avatar :type="BoAvatarType.initials" :data="{ label: 'JD' }" />
```

## Shapes

<div class="flex gap-4 items-center my-4">
	<bo-avatar 
		:shape="BoAvatarShape.circle" 
		:data="{ src: 'https://i.pravatar.cc/300', alt: 'Circle' }" 
	/>
	<bo-avatar 
		:shape="BoAvatarShape.flat" 
		:data="{ src: 'https://i.pravatar.cc/300', alt: 'Flat' }" 
	/>
	<bo-avatar 
		:shape="BoAvatarShape.rounded" 
		:data="{ src: 'https://i.pravatar.cc/300', alt: 'Rounded' }" 
	/>
	<bo-avatar 
		:shape="BoAvatarShape.outline_circle" 
		:data="{ src: 'https://i.pravatar.cc/300', alt: 'Outline Circle' }" 
	/>
	<bo-avatar 
		:shape="BoAvatarShape.outline_flat" 
		:data="{ src: 'https://i.pravatar.cc/300', alt: 'Outline Flat' }" 
	/>
	<bo-avatar 
		:shape="BoAvatarShape.outline_rounded" 
		:data="{ src: 'https://i.pravatar.cc/300', alt: 'Outline Rounded' }" 
	/>
</div>

```vue
<bo-avatar
	:shape="BoAvatarShape.circle"
	:data="{ src: 'https://i.pravatar.cc/300', alt: 'Circle' }"
/>
<bo-avatar :shape="BoAvatarShape.flat" :data="{ src: 'https://i.pravatar.cc/300', alt: 'Flat' }" />
<bo-avatar
	:shape="BoAvatarShape.rounded"
	:data="{ src: 'https://i.pravatar.cc/300', alt: 'Rounded' }"
/>
<bo-avatar
	:shape="BoAvatarShape.outline_circle"
	:data="{ src: 'https://i.pravatar.cc/300', alt: 'Outline Circle' }"
/>
<bo-avatar
	:shape="BoAvatarShape.outline_flat"
	:data="{ src: 'https://i.pravatar.cc/300', alt: 'Outline Flat' }"
/>
<bo-avatar
	:shape="BoAvatarShape.outline_rounded"
	:data="{ src: 'https://i.pravatar.cc/300', alt: 'Outline Rounded' }"
/>
```

## Sizes

<div class="flex items-center gap-4 my-4">
	<bo-avatar 
		:size="BoSize.small" 
		:data="{ src: 'https://i.pravatar.cc/300', alt: 'Small Avatar' }" 
	/>
	<bo-avatar 
		:size="BoSize.default" 
		:data="{ src: 'https://i.pravatar.cc/300', alt: 'Default Avatar' }" 
	/>
	<bo-avatar 
		:size="BoSize.large" 
		:data="{ src: 'https://i.pravatar.cc/300', alt: 'Large Avatar' }" 
	/>
</div>

```vue
<bo-avatar :size="BoSize.small" :data="{ src: 'https://i.pravatar.cc/300', alt: 'Small Avatar' }" />
<bo-avatar
	:size="BoSize.default"
	:data="{ src: 'https://i.pravatar.cc/300', alt: 'Default Avatar' }"
/>
<bo-avatar :size="BoSize.large" :data="{ src: 'https://i.pravatar.cc/300', alt: 'Large Avatar' }" />
```

## Variants

<div class="flex gap-4 items-center my-4">
	<bo-avatar 
		:type="BoAvatarType.initials" 
		:variant="BoAvatarVariant.primary" 
		:data="{ label: 'P' }" 
	/>
	<bo-avatar 
		:type="BoAvatarType.initials" 
		:variant="BoAvatarVariant.secondary" 
		:data="{ label: 'S' }" 
	/>
	<bo-avatar 
		:type="BoAvatarType.initials" 
		:variant="BoAvatarVariant.danger" 
		:data="{ label: 'D' }" 
	/>
	<bo-avatar 
		:type="BoAvatarType.initials" 
		:variant="BoAvatarVariant.warning" 
		:data="{ label: 'W' }" 
	/>
	<bo-avatar 
		:type="BoAvatarType.initials" 
		:variant="BoAvatarVariant.success" 
		:data="{ label: 'S' }" 
	/>
	<bo-avatar 
		:type="BoAvatarType.initials" 
		:variant="BoAvatarVariant.dark" 
		:data="{ label: 'D' }" 
	/>
</div>

```vue
<bo-avatar
	:type="BoAvatarType.initials"
	:variant="BoAvatarVariant.primary"
	:data="{ label: 'P' }"
/>
<bo-avatar
	:type="BoAvatarType.initials"
	:variant="BoAvatarVariant.secondary"
	:data="{ label: 'S' }"
/>
<bo-avatar :type="BoAvatarType.initials" :variant="BoAvatarVariant.danger" :data="{ label: 'D' }" />
<bo-avatar
	:type="BoAvatarType.initials"
	:variant="BoAvatarVariant.warning"
	:data="{ label: 'W' }"
/>
<bo-avatar
	:type="BoAvatarType.initials"
	:variant="BoAvatarVariant.success"
	:data="{ label: 'S' }"
/>
<bo-avatar :type="BoAvatarType.initials" :variant="BoAvatarVariant.dark" :data="{ label: 'D' }" />
```

## Custom Colors

<div class="flex gap-4 items-center my-4">
	<bo-avatar 
		:type="BoAvatarType.initials" 
		:data="{ label: 'C' }" 
		:color="{ bgColorHex: '#8B5CF6', colorHex: '#FFFFFF' }" 
	/>
</div>

```vue
<bo-avatar
	:type="BoAvatarType.initials"
	:data="{ label: 'C' }"
	:color="{ bgColorHex: '#8B5CF6', colorHex: '#FFFFFF' }"
/>
```

## With Status Indicator

<div class="flex gap-4 items-center my-4">
	<bo-avatar 
		:data="{ src: 'https://i.pravatar.cc/300', alt: 'Online User' }" 
		:indicator="{ status: BoAvatarIndicatorStatus.online, position: BoAvatarIndicatorPosition.bottomRight }" 
	/>
	<bo-avatar 
		:data="{ src: 'https://i.pravatar.cc/300', alt: 'Busy User' }" 
		:indicator="{ status: BoAvatarIndicatorStatus.busy, position: BoAvatarIndicatorPosition.topRight }" 
	/>
	<bo-avatar 
		:data="{ src: 'https://i.pravatar.cc/300', alt: 'Away User' }" 
		:indicator="{ status: BoAvatarIndicatorStatus.away, position: BoAvatarIndicatorPosition.topLeft }" 
	/>
	<bo-avatar 
		:data="{ src: 'https://i.pravatar.cc/300', alt: 'Offline User' }" 
		:indicator="{ status: BoAvatarIndicatorStatus.offline, position: BoAvatarIndicatorPosition.bottomLeft }" 
	/>
</div>

```vue
<bo-avatar
	:data="{ src: 'https://i.pravatar.cc/300', alt: 'Online User' }"
	:indicator="{
		status: BoAvatarIndicatorStatus.online,
		position: BoAvatarIndicatorPosition.bottomRight,
	}"
/>
<bo-avatar
	:data="{ src: 'https://i.pravatar.cc/300', alt: 'Busy User' }"
	:indicator="{
		status: BoAvatarIndicatorStatus.busy,
		position: BoAvatarIndicatorPosition.topRight,
	}"
/>
<bo-avatar
	:data="{ src: 'https://i.pravatar.cc/300', alt: 'Away User' }"
	:indicator="{ status: BoAvatarIndicatorStatus.away, position: BoAvatarIndicatorPosition.topLeft }"
/>
<bo-avatar
	:data="{ src: 'https://i.pravatar.cc/300', alt: 'Offline User' }"
	:indicator="{
		status: BoAvatarIndicatorStatus.offline,
		position: BoAvatarIndicatorPosition.bottomLeft,
	}"
/>
```

## Clickable Avatar

<div class="flex gap-4 items-center my-4">
	<bo-avatar 
		:data="{ src: 'https://i.pravatar.cc/300', alt: 'Clickable Avatar' }" 
		:clickable="true" 
	/>
</div>

```vue
<bo-avatar
	:data="{ src: 'https://i.pravatar.cc/300', alt: 'Clickable Avatar' }"
	:clickable="true"
/>
```
