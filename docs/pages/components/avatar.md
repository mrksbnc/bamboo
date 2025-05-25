<script setup>
import BoAvatar from '@/components/avatar/bo-avatar.vue';
import {  BoAvatarShape, BoAvatarType, BoAvatarVariant } from '@/components/avatar/bo-avatar';
import { BoSize } from '@/shared/bo-size';
import { Icon } from '@/components/icon/bo-icon';
import BoIcon from '@/components/icon/bo-icon.vue';
</script>

# Avatar

Avatar is a component used to represent users or entities with images or initials. It supports accessibility features, keyboard navigation, and click interactions.

```js
import { BoAvatar } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-avatar :data="{ label: 'John Doe' }" />
</template>

<script setup>
import { BoAvatar } from '@mrksbnc/bamboo';
</script>
```

<hr />

<div class="my-4 flex flex-col gap-4">
	<div class="my-4 flex items-center gap-4">
		<bo-avatar />
		<bo-avatar shape="flat" />
		<bo-avatar shape="circle" />
	</div>
	<div class="my-4 flex items-center gap-4">
		<bo-avatar :data="{ label: 'John Doe' }" />
		<bo-avatar
			:data="{ label: 'John Doe' }"
			:shape="BoAvatarShape.circle"
		/>
		<bo-avatar
			:shape="BoAvatarShape.flat"
			:data="{ label: 'John Doe' }"
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

```vue
<template>
	<div class="my-4 flex flex-col gap-4">
		<div class="my-4 flex items-center gap-4">
			<bo-avatar />
			<bo-avatar :shape="BoAvatarShape.flat" />
			<bo-avatar :shape="BoAvatarShape.circle" />
		</div>
		<div class="my-4 flex items-center gap-4">
			<bo-avatar :data="{ label: 'John Doe' }" />
			<bo-avatar
				:data="{ label: 'John Doe' }"
				:shape="BoAvatarShape.circle"
			/>
			<bo-avatar
				:shape="BoAvatarShape.flat"
				:data="{ label: 'John Doe' }"
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
</template>
```

## Props

| Name        | Type              | Default        | Description                                                  |
| ----------- | ----------------- | -------------- | ------------------------------------------------------------ |
| `id`        | `string`          | auto-generated | Unique ID for the avatar, used for accessibility and testing |
| `data`      | `BoAvatarData`    | `undefined`    | Avatar data (image source or label)                          |
| `type`      | `BoAvatarType`    | `initials`     | Type of avatar (image or initials)                           |
| `shape`     | `BoAvatarShape`   | `rounded`      | Shape of the avatar                                          |
| `size`      | `BoSize`          | `default`      | Size of the avatar                                           |
| `clickable` | `boolean`         | `false`        | Whether the avatar is clickable and interactive              |
| `variant`   | `BoAvatarVariant` | `primary`      | Color variant of the avatar                                  |
| `color`     | `BoAvatarColor`   | `undefined`    | Custom colors for the avatar                                 |

## Events

| Name    | Payload          | Description                                       |
| ------- | ---------------- | ------------------------------------------------- |
| `click` | `{ id: string }` | Emitted when the avatar is clicked (if clickable) |

## Types

```ts
enum BoAvatarShape {
	circle = 'circle',
	flat = 'flat',
	rounded = 'rounded',
	outline_flat = 'outline_flat',
	outline_rounded = 'outline_rounded',
	outline_circle = 'outline_circle',
}

enum BoAvatarVariant {
	primary = 'primary',
	secondary = 'secondary',
	danger = 'danger',
	warning = 'warning',
	success = 'success',
	dark = 'dark',
}

enum BoAvatarType {
	image = 'image',
	initials = 'initials',
}

interface BoAvatarData {
	/**
	 * Alternative text for the avatar image
	 */
	alt?: string;
	/**
	 * Source URL for the avatar image
	 */
	src?: string;
	/**
	 * Label text for initials avatar
	 */
	label?: string;
}

interface BoAvatarColor {
	/**
	 * Background color in hex format
	 */
	bgColorHex?: string;
	/**
	 * Text color in hex format
	 */
	colorHex?: string;
}

interface BoAvatarProps {
	/**
	 * Unique ID for the avatar, used for accessibility and testing
	 */
	id?: string;
	/**
	 * Size of the avatar
	 */
	size?: BoSize;
	/**
	 * Avatar data (image source or label)
	 */
	data?: BoAvatarData;
	/**
	 * Type of avatar (image or initials)
	 */
	type?: BoAvatarType;
	/**
	 * Whether the avatar is clickable and interactive
	 */
	clickable?: boolean;
	/**
	 * Shape of the avatar
	 */
	shape?: BoAvatarShape;
	/**
	 * Custom colors for the avatar
	 */
	color?: BoAvatarColor;
	/**
	 * Color variant of the avatar
	 */
	variant?: BoAvatarVariant;
}
```

## Initials Avatar

The avatar automatically generates initials from the provided label. For multiple words, it takes the first letter of each word (up to 2 letters).

<div class="flex gap-4 items-center my-4">
  <bo-avatar :type="BoAvatarType.initials" :data="{ label: 'John Doe' }" />
  <bo-avatar :type="BoAvatarType.initials" :data="{ label: 'Jane Smith' }" />
  <bo-avatar :type="BoAvatarType.initials" :data="{ label: 'Alex' }" />
</div>

```vue
<bo-avatar :type="BoAvatarType.initials" :data="{ label: 'John Doe' }" />
<bo-avatar :type="BoAvatarType.initials" :data="{ label: 'Jane Smith' }" />
<bo-avatar :type="BoAvatarType.initials" :data="{ label: 'Alex' }" />
```

## Image Avatar

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

## Clickable Avatar

When the `clickable` prop is set to `true`, the avatar becomes interactive and emits click events. It supports both mouse clicks and keyboard navigation (Enter and Space keys).

<div class="flex gap-4 items-center my-4">
  <bo-avatar 
    :clickable="true" 
    :data="{ label: 'John Doe' }" 
    @click="(payload) => console.log('Avatar clicked:', payload)"
  />
  <bo-avatar 
    :clickable="true" 
    :shape="BoAvatarShape.circle"
    :data="{ label: 'Jane Smith' }" 
    @click="(payload) => console.log('Avatar clicked:', payload)"
  />
</div>

```vue
<bo-avatar :clickable="true" :data="{ label: 'John Doe' }" @click="handleAvatarClick" />

<script setup>
function handleAvatarClick(payload) {
	console.log('Avatar clicked:', payload.id);
}
</script>
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

## Custom Colors

You can override the default colors by providing custom hex colors.

<div class="flex gap-4 items-center my-4">
  <bo-avatar 
    :data="{ label: 'JD' }" 
    :color="{ bgColorHex: '#ff6b6b', colorHex: '#ffffff' }"
  />
  <bo-avatar 
    :data="{ label: 'JS' }" 
    :color="{ bgColorHex: '#4ecdc4', colorHex: '#ffffff' }"
  />
  <bo-avatar 
    :data="{ label: 'AB' }" 
    :color="{ bgColorHex: '#45b7d1', colorHex: '#ffffff' }"
  />
</div>

```vue
<bo-avatar :data="{ label: 'JD' }" :color="{ bgColorHex: '#ff6b6b', colorHex: '#ffffff' }" />
<bo-avatar :data="{ label: 'JS' }" :color="{ bgColorHex: '#4ecdc4', colorHex: '#ffffff' }" />
<bo-avatar :data="{ label: 'AB' }" :color="{ bgColorHex: '#45b7d1', colorHex: '#ffffff' }" />
```
