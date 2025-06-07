<script setup>
import  BoAvatar  from '@/components/avatar/bo-avatar.vue';
import { BoAvatarShape, BoAvatarVariant, BoAvatarType } from '@/components/avatar/bo-avatar';
import { BoSize } from '@/shared/bo-size';
import { Icon } from '@/components/icon/bo-icon';
import BoIcon from '@/components/icon/bo-icon.vue';
</script>

# Avatar

A versatile avatar component that supports both image and initials-based avatars with various shapes, sizes, and color variants.

```js
import { BoAvatar } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-avatar
		type="image"
		:data="{ src: 'https://example.com/avatar.jpg', alt: 'User avatar' }"
	/>
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

| Name              | Type              | Default   | Description                                   |
| ----------------- | ----------------- | --------- | --------------------------------------------- |
| `id`              | `string`          | -         | Unique ID for the avatar                      |
| `size`            | `BoSize`          | `default` | Size of the avatar                            |
| `data`            | `BoAvatarData`    | -         | Avatar data (image source or label)           |
| `type`            | `BoAvatarType`    | `image`   | Type of avatar (image or initials)            |
| `clickable`       | `boolean`         | `false`   | Whether the avatar is clickable               |
| `shape`           | `BoAvatarShape`   | `circle`  | Shape of the avatar                           |
| `color`           | `BoAvatarColor`   | -         | Custom colors for the avatar                  |
| `variant`         | `BoAvatarVariant` | `primary` | Color variant of the avatar                   |
| `ariaLabel`       | `string`          | -         | Custom ARIA label for accessibility           |
| `ariaDescribedBy` | `string`          | -         | ID of element that describes this avatar      |
| `ariaPressed`     | `boolean`         | -         | Whether the avatar represents a pressed state |

## Events

| Name    | Payload      | Description          |
| ------- | ------------ | -------------------- |
| `click` | `MouseEvent` | Emitted when clicked |

## Types

### Image Avatar

<div class="flex gap-4 items-center my-4">
	<bo-avatar
		type="image"
		:data="{ 
			src: 'https://i.pravatar.cc/300?img=1', 
			alt: 'User avatar' 
		}"
	/>
	<bo-avatar
		type="image"
		:data="{ 
			src: 'https://i.pravatar.cc/300?img=2', 
			alt: 'User avatar' 
		}"
	/>
	<bo-avatar
		type="image"
		:data="{ 
			src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgM2MyLjY3IDAgNC44NCAyLjE3IDQuODQgNC44NCAwIDIuNjctMi4xNyA0Ljg0LTQuODQgNC44NC0yLjY3IDAtNC44NC0yLjE3LTQuODQtNC44NCAwLTIuNjcgMi4xNy00Ljg0IDQuODQtNC44NHptMCAxMmM0LjQyIDAgOC4xNy0yLjI4IDkuNTQtNS41N0gxMi4xM2MtMS4yOSAwLTIuNDctLjQ5LTMuMzYtMS4zLS44OS0uODEtMS4zOC0xLjkzLTEuMzgtMy4xM3YtLjA2YzAtMS4yLjQ5LTIuMzIgMS4zOC0zLjEzLjg5LS44MSAyLjA3LTEuMyAzLjM2LTEuM2g5LjQxYy0xLjM3LTMuMjktNS4xMi01LjU3LTkuNTQtNS41N0MyMi4yNCAyIDI0IDMuNzYgMjQgNnYxMmMwIDIuMjQtMS43NiA0LTQgNEg0Yy0yLjI0IDAtNC0xLjc2LTQtNFY2YzAtMi4yNCAxLjc2LTQgNC00eiIvPjwvc3ZnPg==',
			alt: 'Base64 SVG avatar' 
		}"
	/>
</div>

```vue
<!-- Using external image URL -->
<bo-avatar
	type="image"
	:data="{
		src: 'https://i.pravatar.cc/300?img=1',
		alt: 'User avatar',
	}"
/>

<!-- Using base64 encoded image -->
<bo-avatar
	type="image"
	:data="{
		src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgM2MyLjY3IDAgNC44NCAyLjE3IDQuODQgNC44NCAwIDIuNjctMi4xNyA0Ljg0LTQuODQgNC44NC0yLjY3IDAtNC44NC0yLjE3LTQuODQtNC44NCAwLTIuNjcgMi4xNy00Ljg0IDQuODQtNC44NHptMCAxMmM0LjQyIDAgOC4xNy0yLjI4IDkuNTQtNS41N0gxMi4xM2MtMS4yOSAwLTIuNDctLjQ5LTMuMzYtMS4zLS44OS0uODEtMS4zOC0xLjkzLTEuMzgtMy4xM3YtLjA2YzAtMS4yLjQ5LTIuMzIgMS4zOC0zLjEzLjg5LS44MSAyLjA3LTEuMyAzLjM2LTEuM2g5LjQxYy0xLjM3LTMuMjktNS4xMi01LjU3LTkuNTQtNS41N0MyMi4yNCAyIDI0IDMuNzYgMjQgNnYxMmMwIDIuMjQtMS43NiA0LTQgNEg0Yy0yLjI0IDAtNC0xLjc2LTQtNFY2YzAtMi4yNCAxLjc2LTQgNC00eiIvPjwvc3ZnPg==',
		alt: 'Base64 SVG avatar',
	}"
/>
```

### Initials Avatar

<div class="flex gap-4 items-center my-4">
	<bo-avatar
		type="initials"
		:data="{ label: 'JD' }"
	/>
	<bo-avatar
		type="initials"
		:data="{ label: 'JS' }"
	/>
	<bo-avatar
		type="initials"
		:data="{ label: 'AB' }"
	/>
</div>

```vue
<!-- Single initial -->
<bo-avatar type="initials" :data="{ label: 'J' }" />

<!-- Two initials -->
<bo-avatar type="initials" :data="{ label: 'JD' }" />

<!-- Full name (will show first two initials) -->
<bo-avatar type="initials" :data="{ label: 'John Doe' }" />
```

## Variants

All variant values must be documented with visual examples:

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

## Sizes

All size values must be documented with visual examples:

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

## Shapes

All shape values must be documented with visual examples:

<div class="flex gap-4 items-center my-4">
	<bo-avatar :shape="BoAvatarShape.circle" :data="{ label: 'JD' }" />
	<bo-avatar :shape="BoAvatarShape.flat" :data="{ label: 'JD' }" />
	<bo-avatar :shape="BoAvatarShape.rounded" :data="{ label: 'JD' }" />
	<bo-avatar :shape="BoAvatarShape.outline_flat" :data="{ label: 'JD' }" />
	<bo-avatar :shape="BoAvatarShape.outline_rounded" :data="{ label: 'JD' }" />
	<bo-avatar :shape="BoAvatarShape.outline_circle" :data="{ label: 'JD' }" />
</div>

```vue
<bo-avatar :shape="BoAvatarShape.circle" :data="{ label: 'JD' }" />
<bo-avatar :shape="BoAvatarShape.flat" :data="{ label: 'JD' }" />
<bo-avatar :shape="BoAvatarShape.rounded" :data="{ label: 'JD' }" />
<bo-avatar :shape="BoAvatarShape.outline_flat" :data="{ label: 'JD' }" />
<bo-avatar :shape="BoAvatarShape.outline_rounded" :data="{ label: 'JD' }" />
<bo-avatar :shape="BoAvatarShape.outline_circle" :data="{ label: 'JD' }" />
```

## States

### Clickable

<div class="flex gap-4 items-center my-4">
	<bo-avatar
		clickable
		:data="{ label: 'JD' }"
	/>
</div>

```vue
<bo-avatar clickable :data="{ label: 'JD' }" />
```

### Custom Colors

<div class="flex gap-4 items-center my-4">
	<bo-avatar
		:color="{ bgColorHex: '#FF5733', colorHex: '#FFFFFF' }"
		:data="{ label: 'JD' }"
	/>
	<bo-avatar
		:color="{ bgColorHex: '#4ECDC4', colorHex: '#FFFFFF' }"
		:data="{ label: 'JD' }"
	/>
	<bo-avatar
		:color="{ bgColorHex: '#45B7D1', colorHex: '#FFFFFF' }"
		:data="{ label: 'JD' }"
	/>
	<bo-avatar
		:color="{ bgColorHex: '#96CEB4', colorHex: '#FFFFFF' }"
		:data="{ label: 'JD' }"
	/>
	<bo-avatar
		:color="{ bgColorHex: '#FFEEAD', colorHex: '#000000' }"
		:data="{ label: 'JD' }"
	/>
</div>

```vue
<!-- Orange background with white text -->
<bo-avatar :color="{ bgColorHex: '#FF5733', colorHex: '#FFFFFF' }" :data="{ label: 'JD' }" />

<!-- Teal background with white text -->
<bo-avatar :color="{ bgColorHex: '#4ECDC4', colorHex: '#FFFFFF' }" :data="{ label: 'JD' }" />

<!-- Blue background with white text -->
<bo-avatar :color="{ bgColorHex: '#45B7D1', colorHex: '#FFFFFF' }" :data="{ label: 'JD' }" />

<!-- Mint background with white text -->
<bo-avatar :color="{ bgColorHex: '#96CEB4', colorHex: '#FFFFFF' }" :data="{ label: 'JD' }" />

<!-- Yellow background with black text -->
<bo-avatar :color="{ bgColorHex: '#FFEEAD', colorHex: '#000000' }" :data="{ label: 'JD' }" />
```

## Event Handling

```vue
<template>
	<bo-avatar
		clickable
		:data="{ label: 'JD' }"
		@click="handleClick"
	/>
</template>

<script setup>
const handleClick = (event) => {
	console.log('Avatar clicked:', event);
};
</script>
```

## Accessibility

### Features

- Semantic HTML structure with proper roles
- ARIA attributes for state and properties
- Screen reader compatibility
- Focus management

### ARIA Attributes

| Attribute          | Purpose               | Values          |
| ------------------ | --------------------- | --------------- |
| `role`             | Semantic role         | `img`, `button` |
| `aria-label`       | Accessible name       | Custom string   |
| `aria-describedby` | Description reference | Element ID      |
| `aria-pressed`     | Pressed state         | `true`, `false` |

### Accessibility Props

| Name              | Type      | Default     | Description                               |
| ----------------- | --------- | ----------- | ----------------------------------------- |
| `ariaLabel`       | `string`  | `undefined` | Custom accessible name for screen readers |
| `ariaDescribedBy` | `string`  | `undefined` | ID of element describing this component   |
| `ariaPressed`     | `boolean` | `undefined` | Whether the avatar is in pressed state    |
