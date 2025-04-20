<script setup>
import { BoAvatar, BoAvatarShape, BoAvatarVariant, BoAvatarType, BoAvatarIndicatorPosition, BoAvatarIndicatorStatus } from '@/components/bo-avatar';
import { BoSize } from '@/shared';
</script>

# Avatar

The Avatar component is used to represent a user or entity. It supports displaying user images, initials, or a default image.

## Basic Example

```html
<bo-avatar :data="{ label: 'JD' }" />
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-1 items-center">
  <bo-avatar :data="{ label: 'JD' }" />
</div>

### Props

| Prop name          | Type                | Default    | Description                                |
| ------------------ | ------------------- | ---------- | ------------------------------------------ |
| `data`             | `BoAvatarData`      | -          | Avatar data (label, src, alt)              |
| `type`             | `BoAvatarType`      | `initials` | Type of avatar (image or initials)         |
| `shape`            | `BoAvatarShape`     | `rounded`  | Shape of the avatar                        |
| `size`             | `BoSize`            | `default`  | Size of the avatar                         |
| `clickable`        | `boolean`           | `false`    | Whether the avatar is clickable            |
| `withDefaultImage` | `boolean`           | `false`    | Show default image when data is incomplete |
| `variant`          | `BoAvatarVariant`   | `primary`  | Color variant of the avatar                |
| `color`            | `BoAvatarColor`     | -          | Custom colors for the avatar               |
| `indicator`        | `BoAvatarIndicator` | -          | Status indicator configuration             |

### Types

```ts
export interface BoAvatarData {
	alt?: string; // Alternative text for the image
	src?: string; // Image source URL
	label?: string; // Text to display as initials
}

export interface BoAvatarColor {
	bgColorHex?: string; // Custom background color as hex
	colorHex?: string; // Custom text color as hex
}

export interface BoAvatarIndicator {
	status?: BoAvatarIndicatorStatus; // Status indicator type
	position?: BoAvatarIndicatorPosition; // Position of the status indicator
}

export enum BoAvatarShape {
	circle = 'circle', // Circular shape
	flat = 'flat', // No border radius
	rounded = 'rounded', // Rounded corners
	outline_flat = 'outline_flat', // Flat with outline
	outline_rounded = 'outline_rounded', // Rounded with outline
	outline_circle = 'outline_circle', // Circle with outline
}

export enum BoAvatarVariant {
	primary = 'primary', // Blue theme
	secondary = 'secondary', // Gray theme
	danger = 'danger', // Red theme
	warning = 'warning', // Yellow theme
	success = 'success', // Green theme
	dark = 'dark', // Dark theme
}

export enum BoAvatarType {
	image = 'image', // Display image
	initials = 'initials', // Display text initials
}

export enum BoAvatarIndicatorPosition {
	topLeft = 'top-left', // Top left position
	topRight = 'top-right', // Top right position
	bottomLeft = 'bottom-left', // Bottom left position
	bottomRight = 'bottom-right', // Bottom right position
}

export enum BoAvatarIndicatorStatus {
	online = 'online', // Green indicator
	offline = 'offline', // Gray indicator
	busy = 'busy', // Red indicator
	away = 'away', // Yellow indicator
	none = 'none', // No indicator
}
```

## Types

### Image vs Initials

You can display an avatar with an image or with initials.

<div class="grid grid-cols-2 gap-1 items-center">
  <div>
    <bo-avatar 
      :type="BoAvatarType.image" 
      :data="{ src: 'https://i.pravatar.cc/300', alt: 'User avatar' }" 
    />
    <p class="text-sm mt-2">Image Avatar</p>
  </div>
  <div>
    <bo-avatar 
      :type="BoAvatarType.initials" 
      :data="{ label: 'JD' }" 
    />
    <p class="text-sm mt-2">Initials Avatar</p>
  </div>
</div>

```html
<bo-avatar
	:type="BoAvatarType.image"
	:data="{ src: 'https://i.pravatar.cc/300', alt: 'User avatar' }"
/>

<bo-avatar
	:type="BoAvatarType.initials"
	:data="{ label: 'JD' }"
/>
```

## Variants

Different color variants for the avatar.

<div class="grid grid-cols-3 gap-1 items-center">
  <div>
    <bo-avatar :variant="BoAvatarVariant.primary" :data="{ label: 'PR' }" />
    <p class="text-sm mt-2">Primary</p>
  </div>
  <div>
    <bo-avatar :variant="BoAvatarVariant.secondary" :data="{ label: 'SE' }" />
    <p class="text-sm mt-2">Secondary</p>
  </div>
  <div>
    <bo-avatar :variant="BoAvatarVariant.danger" :data="{ label: 'DA' }" />
    <p class="text-sm mt-2">Danger</p>
  </div>
  <div>
    <bo-avatar :variant="BoAvatarVariant.warning" :data="{ label: 'WA' }" />
    <p class="text-sm mt-2">Warning</p>
  </div>
  <div>
    <bo-avatar :variant="BoAvatarVariant.success" :data="{ label: 'SU' }" />
    <p class="text-sm mt-2">Success</p>
  </div>
  <div>
    <bo-avatar :variant="BoAvatarVariant.dark" :data="{ label: 'DK' }" />
    <p class="text-sm mt-2">Dark</p>
  </div>
</div>

```html
<bo-avatar
	:variant="BoAvatarVariant.primary"
	:data="{ label: 'PR' }"
/>
<bo-avatar
	:variant="BoAvatarVariant.secondary"
	:data="{ label: 'SE' }"
/>
<bo-avatar
	:variant="BoAvatarVariant.danger"
	:data="{ label: 'DA' }"
/>
<bo-avatar
	:variant="BoAvatarVariant.warning"
	:data="{ label: 'WA' }"
/>
<bo-avatar
	:variant="BoAvatarVariant.success"
	:data="{ label: 'SU' }"
/>
<bo-avatar
	:variant="BoAvatarVariant.dark"
	:data="{ label: 'DK' }"
/>
```

## Sizes

Available sizes for the avatar.

<div class="grid grid-cols-5 gap-1 items-end">
  <div>
    <bo-avatar :size="BoSize.extra_small" :data="{ label: 'XS' }" />
    <p class="text-sm mt-2">Extra Small</p>
  </div>
  <div>
    <bo-avatar :size="BoSize.small" :data="{ label: 'SM' }" />
    <p class="text-sm mt-2">Small</p>
  </div>
  <div>
    <bo-avatar :size="BoSize.default" :data="{ label: 'DF' }" />
    <p class="text-sm mt-2">Default</p>
  </div>
  <div>
    <bo-avatar :size="BoSize.large" :data="{ label: 'LG' }" />
    <p class="text-sm mt-2">Large</p>
  </div>
  <div>
    <bo-avatar :size="BoSize.extra_large" :data="{ label: 'XL' }" />
    <p class="text-sm mt-2">Extra Large</p>
  </div>
</div>

```html
<bo-avatar
	:size="BoSize.extra_small"
	:data="{ label: 'XS' }"
/>
<bo-avatar
	:size="BoSize.small"
	:data="{ label: 'SM' }"
/>
<bo-avatar
	:size="BoSize.default"
	:data="{ label: 'DF' }"
/>
<bo-avatar
	:size="BoSize.large"
	:data="{ label: 'LG' }"
/>
<bo-avatar
	:size="BoSize.extra_large"
	:data="{ label: 'XL' }"
/>
```

## Shapes

Available shapes for the avatar.

<div class="grid grid-cols-3 gap-1 items-center">
  <div>
    <bo-avatar :shape="BoAvatarShape.circle" :data="{ label: 'CI' }" />
    <p class="text-sm mt-2">Circle</p>
  </div>
  <div>
    <bo-avatar :shape="BoAvatarShape.rounded" :data="{ label: 'RO' }" />
    <p class="text-sm mt-2">Rounded</p>
  </div>
  <div>
    <bo-avatar :shape="BoAvatarShape.flat" :data="{ label: 'FL' }" />
    <p class="text-sm mt-2">Flat</p>
  </div>
  <div>
    <bo-avatar :shape="BoAvatarShape.outline_circle" :data="{ label: 'OC' }" />
    <p class="text-sm mt-2">Outline Circle</p>
  </div>
  <div>
    <bo-avatar :shape="BoAvatarShape.outline_rounded" :data="{ label: 'OR' }" />
    <p class="text-sm mt-2">Outline Rounded</p>
  </div>
  <div>
    <bo-avatar :shape="BoAvatarShape.outline_flat" :data="{ label: 'OF' }" />
    <p class="text-sm mt-2">Outline Flat</p>
  </div>
</div>

```html
<bo-avatar
	:shape="BoAvatarShape.circle"
	:data="{ label: 'CI' }"
/>
<bo-avatar
	:shape="BoAvatarShape.rounded"
	:data="{ label: 'RO' }"
/>
<bo-avatar
	:shape="BoAvatarShape.flat"
	:data="{ label: 'FL' }"
/>
<bo-avatar
	:shape="BoAvatarShape.outline_circle"
	:data="{ label: 'OC' }"
/>
<bo-avatar
	:shape="BoAvatarShape.outline_rounded"
	:data="{ label: 'OR' }"
/>
<bo-avatar
	:shape="BoAvatarShape.outline_flat"
	:data="{ label: 'OF' }"
/>
```

## Status Indicators

Avatars can display status indicators in different positions.

<div class="grid grid-cols-2 gap-1 items-center">
  <div>
    <bo-avatar 
      :data="{ label: 'ON' }" 
      :indicator="{ status: BoAvatarIndicatorStatus.online, position: BoAvatarIndicatorPosition.bottomRight }" 
    />
    <p class="text-sm mt-2">Online (Bottom Right)</p>
  </div>
  <div>
    <bo-avatar 
      :data="{ label: 'BU' }" 
      :indicator="{ status: BoAvatarIndicatorStatus.busy, position: BoAvatarIndicatorPosition.topRight }" 
    />
    <p class="text-sm mt-2">Busy (Top Right)</p>
  </div>
  <div>
    <bo-avatar 
      :data="{ label: 'AW' }" 
      :indicator="{ status: BoAvatarIndicatorStatus.away, position: BoAvatarIndicatorPosition.topLeft }" 
    />
    <p class="text-sm mt-2">Away (Top Left)</p>
  </div>
  <div>
    <bo-avatar 
      :data="{ label: 'OF' }" 
      :indicator="{ status: BoAvatarIndicatorStatus.offline, position: BoAvatarIndicatorPosition.bottomLeft }" 
    />
    <p class="text-sm mt-2">Offline (Bottom Left)</p>
  </div>
</div>

```html
<bo-avatar
	:data="{ label: 'ON' }"
	:indicator="{ status: BoAvatarIndicatorStatus.online, position: BoAvatarIndicatorPosition.bottomRight }"
/>

<bo-avatar
	:data="{ label: 'BU' }"
	:indicator="{ status: BoAvatarIndicatorStatus.busy, position: BoAvatarIndicatorPosition.topRight }"
/>

<bo-avatar
	:data="{ label: 'AW' }"
	:indicator="{ status: BoAvatarIndicatorStatus.away, position: BoAvatarIndicatorPosition.topLeft }"
/>

<bo-avatar
	:data="{ label: 'OF' }"
	:indicator="{ status: BoAvatarIndicatorStatus.offline, position: BoAvatarIndicatorPosition.bottomLeft }"
/>
```

## Custom Colors

You can customize the background and text colors of the avatar.

<div class="flex gap-1 items-center">
  <bo-avatar 
    :data="{ label: 'CC' }" 
    :color="{ bgColorHex: '#6200EA', colorHex: '#FFFFFF' }" 
  />
</div>

```html
<bo-avatar
	:data="{ label: 'CC' }"
	:color="{ bgColorHex: '#6200EA', colorHex: '#FFFFFF' }"
/>
```
