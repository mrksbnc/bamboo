<script setup>
import { BoAvatar, BoAvatarShape, BoAvatarType, BoAvatarVariant, BoAvatarIndicatorStatus, BoAvatarIndicatorPosition } from '@/components/bo-avatar';
import { BoSize } from '@/shared';
</script>

# Avatar

The Avatar component is a versatile UI element that displays user profile information in various formats, including images, initials, or a default avatar. It supports different shapes, sizes, variants, and can include status indicators.

## Basic Example

```html
<bo-avatar :data="{ label: 'John Doe' }" />
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
  <bo-avatar :data="{ label: 'John Doe' }" />
</div>

### Props

| Prop name          | Type                | Default                   | Description                                      |
| ------------------ | ------------------- | ------------------------- | ------------------------------------------------ |
| `data`             | `BoAvatarData`      | -                         | Required. Contains avatar data (alt, src, label) |
| `type`             | `BoAvatarType`      | `BoAvatarType.initials`   | Type of avatar (image or initials)               |
| `shape`            | `BoAvatarShape`     | `BoAvatarShape.rounded`   | Shape of the avatar                              |
| `size`             | `BoSize`            | `BoSize.default`          | Size of the avatar                               |
| `clickable`        | `boolean`           | `false`                   | Whether the avatar is clickable                  |
| `withDefaultImage` | `boolean`           | `false`                   | Whether to show default avatar image             |
| `variant`          | `BoAvatarVariant`   | `BoAvatarVariant.primary` | Color variant of the avatar                      |
| `color`            | `BoAvatarColor`     | -                         | Custom colors for avatar                         |
| `indicator`        | `BoAvatarIndicator` | -                         | Status indicator configuration                   |

### Types

```ts
export interface BoAvatarData {
	alt?: string; // Alternative text for the avatar image
	src?: string; // Source URL for the avatar image
	label?: string; // Text to display for initials type
}

export interface BoAvatarColor {
	bgColorHex?: string; // Custom background color hex code
	colorHex?: string; // Custom text color hex code
}

export interface BoAvatarIndicator {
	status?: BoAvatarIndicatorStatus; // Status of the indicator
	position?: BoAvatarIndicatorPosition; // Position of the indicator
}

export enum BoAvatarType {
	image = 'image', // Display an image
	initials = 'initials', // Display initials
}

export enum BoAvatarShape {
	circle = 'circle', // Circular shape
	flat = 'flat', // Square shape
	rounded = 'rounded', // Rounded corners
	outline_flat = 'outline_flat', // Outlined square
	outline_rounded = 'outline_rounded', // Outlined rounded
	outline_circle = 'outline_circle', // Outlined circle
}

export enum BoAvatarVariant {
	primary = 'primary', // Blue color scheme
	secondary = 'secondary', // Gray color scheme
	danger = 'danger', // Red color scheme
	warning = 'warning', // Yellow color scheme
	success = 'success', // Green color scheme
	dark = 'dark', // Black color scheme
}

export enum BoAvatarIndicatorStatus {
	online = 'online', // Green indicator
	offline = 'offline', // Gray indicator
	busy = 'busy', // Red indicator
	away = 'away', // Yellow indicator
	none = 'none', // No indicator
}

export enum BoAvatarIndicatorPosition {
	topLeft = 'top-left',
	topRight = 'top-right',
	bottomLeft = 'bottom-left',
	bottomRight = 'bottom-right',
}
```

## Types

The Avatar component supports three different types of display:

### Initials

Display user initials when an image is not available.

<div class="flex gap-4 items-center">
  <bo-avatar :data="{ label: 'JD' }" />
  <bo-avatar :data="{ label: 'AB' }" :variant="BoAvatarVariant.secondary" />
  <bo-avatar :data="{ label: 'CD' }" :variant="BoAvatarVariant.success" />
</div>

```html
<bo-avatar :data="{ label: 'JD' }" />
<bo-avatar
	:data="{ label: 'AB' }"
	:variant="BoAvatarVariant.secondary"
/>
<bo-avatar
	:data="{ label: 'CD' }"
	:variant="BoAvatarVariant.success"
/>
```

### Image

Display a user's profile image.

<div class="flex gap-4 items-center">
  <bo-avatar :data="{ src: 'https://avatar.iran.liara.run/public', alt: 'User profile' }" :type="BoAvatarType.image" :shape="BoAvatarShape.circle" />
</div>

```html
<bo-avatar
	:data="{ src: 'https://avatar.iran.liara.run/public', alt: 'User profile' }"
	:type="BoAvatarType.image"
/>
```

### Default Image

Display a default avatar when no image or initials are provided.

<div class="flex gap-4 items-center">
  <bo-avatar :with-default-image="true" />
</div>

```html
<bo-avatar :with-default-image="true" />
```

## Shapes

The Avatar component supports various shapes:

<div class="flex gap-4 items-center">
  <bo-avatar :data="{ label: 'JD' }" :shape="BoAvatarShape.circle" />
  <bo-avatar :data="{ label: 'JD' }" :shape="BoAvatarShape.rounded" />
  <bo-avatar :data="{ label: 'JD' }" :shape="BoAvatarShape.flat" />
  <bo-avatar :data="{ label: 'JD' }" :shape="BoAvatarShape.outline_circle" />
  <bo-avatar :data="{ label: 'JD' }" :shape="BoAvatarShape.outline_rounded" />
  <bo-avatar :data="{ label: 'JD' }" :shape="BoAvatarShape.outline_flat" />
</div>

```html
<bo-avatar
	:data="{ label: 'JD' }"
	:shape="BoAvatarShape.circle"
/>
<bo-avatar
	:data="{ label: 'JD' }"
	:shape="BoAvatarShape.rounded"
/>
<bo-avatar
	:data="{ label: 'JD' }"
	:shape="BoAvatarShape.flat"
/>
<bo-avatar
	:data="{ label: 'JD' }"
	:shape="BoAvatarShape.outline_circle"
/>
<bo-avatar
	:data="{ label: 'JD' }"
	:shape="BoAvatarShape.outline_rounded"
/>
<bo-avatar
	:data="{ label: 'JD' }"
	:shape="BoAvatarShape.outline_flat"
/>
```

## Sizes

The Avatar component comes in different sizes:

<div class="flex items-center gap-4">
  <bo-avatar :data="{ label: 'XS' }" :size="BoSize.extra_small" />
  <bo-avatar :data="{ label: 'SM' }" :size="BoSize.small" />
  <bo-avatar :data="{ label: 'MD' }" :size="BoSize.default" />
  <bo-avatar :data="{ label: 'LG' }" :size="BoSize.large" />
  <bo-avatar :data="{ label: 'XL' }" :size="BoSize.extra_large" />
</div>

```html
<bo-avatar
	:data="{ label: 'XS' }"
	:size="BoSize.extra_small"
/>
<bo-avatar
	:data="{ label: 'SM' }"
	:size="BoSize.small"
/>
<bo-avatar
	:data="{ label: 'MD' }"
	:size="BoSize.default"
/>
<bo-avatar
	:data="{ label: 'LG' }"
	:size="BoSize.large"
/>
<bo-avatar
	:data="{ label: 'XL' }"
	:size="BoSize.extra_large"
/>
```

## Variants

Different color variants are available:

<div class="flex gap-4 items-center">
  <bo-avatar :data="{ label: 'P' }" :variant="BoAvatarVariant.primary" />
  <bo-avatar :data="{ label: 'S' }" :variant="BoAvatarVariant.secondary" />
  <bo-avatar :data="{ label: 'D' }" :variant="BoAvatarVariant.danger" />
  <bo-avatar :data="{ label: 'W' }" :variant="BoAvatarVariant.warning" />
  <bo-avatar :data="{ label: 'S' }" :variant="BoAvatarVariant.success" />
  <bo-avatar :data="{ label: 'D' }" :variant="BoAvatarVariant.dark" />
</div>

```html
<bo-avatar
	:data="{ label: 'P' }"
	:variant="BoAvatarVariant.primary"
/>
<bo-avatar
	:data="{ label: 'S' }"
	:variant="BoAvatarVariant.secondary"
/>
<bo-avatar
	:data="{ label: 'D' }"
	:variant="BoAvatarVariant.danger"
/>
<bo-avatar
	:data="{ label: 'W' }"
	:variant="BoAvatarVariant.warning"
/>
<bo-avatar
	:data="{ label: 'S' }"
	:variant="BoAvatarVariant.success"
/>
<bo-avatar
	:data="{ label: 'D' }"
	:variant="BoAvatarVariant.dark"
/>
```

## Status Indicators

The Avatar component can display status indicators in different positions:

<div class="flex gap-4 items-center">
  <bo-avatar 
    :data="{ label: 'O' }" 
    :indicator="{ status: BoAvatarIndicatorStatus.online, position: BoAvatarIndicatorPosition.bottomRight }" 
  />
  <bo-avatar 
    :data="{ label: 'B' }" 
    :indicator="{ status: BoAvatarIndicatorStatus.busy, position: BoAvatarIndicatorPosition.topRight }" 
  />
  <bo-avatar 
    :data="{ label: 'A' }" 
    :indicator="{ status: BoAvatarIndicatorStatus.away, position: BoAvatarIndicatorPosition.bottomLeft }" 
  />
  <bo-avatar 
    :data="{ label: 'O' }" 
    :indicator="{ status: BoAvatarIndicatorStatus.offline, position: BoAvatarIndicatorPosition.topLeft }" 
  />
</div>

```html
<bo-avatar
	:data="{ label: 'O' }"
	:indicator="{ status: BoAvatarIndicatorStatus.online, position: BoAvatarIndicatorPosition.bottomRight }"
/>
<bo-avatar
	:data="{ label: 'B' }"
	:indicator="{ status: BoAvatarIndicatorStatus.busy, position: BoAvatarIndicatorPosition.topRight }"
/>
<bo-avatar
	:data="{ label: 'A' }"
	:indicator="{ status: BoAvatarIndicatorStatus.away, position: BoAvatarIndicatorPosition.bottomLeft }"
/>
<bo-avatar
	:data="{ label: 'O' }"
	:indicator="{ status: BoAvatarIndicatorStatus.offline, position: BoAvatarIndicatorPosition.topLeft }"
/>
```

## Custom Colors

You can customize the avatar colors using the color prop:

<div class="flex gap-4 items-center">
  <bo-avatar 
    :data="{ label: 'C' }" 
    :color="{ bgColorHex: '#FF5733', colorHex: '#FFFFFF' }" 
  />
  <bo-avatar 
    :data="{ label: 'C' }" 
    :color="{ bgColorHex: '#33FF57', colorHex: '#000000' }" 
  />
</div>

```html
<bo-avatar
	:data="{ label: 'C' }"
	:color="{ bgColorHex: '#FF5733', colorHex: '#FFFFFF' }"
/>
<bo-avatar
	:data="{ label: 'C' }"
	:color="{ bgColorHex: '#33FF57', colorHex: '#000000' }"
/>
```
