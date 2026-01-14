---
title: Avatar
description: A versatile avatar component with support for images, initials, status indicators, and various shapes and sizes.
outline: deep
---

<script setup lang="ts">
import { BoAvatar } from '@mrksbnc/bamboo-vue';
</script>

# Avatar

An avatar component for displaying user profile pictures, initials, or placeholder images.

## Basic Usage

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center;">
  <BoAvatar :data="{ label: 'JD' }" />
  <BoAvatar :data="{ label: 'Jane Doe' }" />
  <BoAvatar :data="{ label: 'AB' }" />
</div>

```vue
<BoAvatar :data="{ label: 'JD' }" />
<BoAvatar :data="{ label: 'Jane Doe' }" />
<BoAvatar :data="{ label: 'AB' }" />
```

## Sizes

The avatar component supports five sizes: `xs`, `sm`, `default`, `lg`, and `xl`.

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center;">
  <BoAvatar size="xs" :data="{ label: 'XS' }" />
  <BoAvatar size="sm" :data="{ label: 'SM' }" />
  <BoAvatar size="default" :data="{ label: 'MD' }" />
  <BoAvatar size="lg" :data="{ label: 'LG' }" />
  <BoAvatar size="xl" :data="{ label: 'XL' }" />
</div>

```vue
<BoAvatar size="xs" :data="{ label: 'XS' }" />
<BoAvatar size="sm" :data="{ label: 'SM' }" />
<BoAvatar size="default" :data="{ label: 'MD' }" />
<BoAvatar size="lg" :data="{ label: 'LG' }" />
<BoAvatar size="xl" :data="{ label: 'XL' }" />
```

## Shapes

The avatar component supports different shapes: `circle`, `rounded`, `flat`, and their outline variants.

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center;">
  <BoAvatar shape="circle" :data="{ label: 'JD' }" />
  <BoAvatar shape="rounded" :data="{ label: 'JD' }" />
  <BoAvatar shape="flat" :data="{ label: 'JD' }" />
</div>

```vue
<BoAvatar shape="circle" :data="{ label: 'JD' }" />
<BoAvatar shape="rounded" :data="{ label: 'JD' }" />
<BoAvatar shape="flat" :data="{ label: 'JD' }" />
```

## Outline Shapes

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center;">
  <BoAvatar shape="outline-circle" :data="{ label: 'JD' }" />
  <BoAvatar shape="outline-rounded" :data="{ label: 'JD' }" />
  <BoAvatar shape="outline-flat" :data="{ label: 'JD' }" />
</div>

```vue
<BoAvatar shape="outline-circle" :data="{ label: 'JD' }" />
<BoAvatar shape="outline-rounded" :data="{ label: 'JD' }" />
<BoAvatar shape="outline-flat" :data="{ label: 'JD' }" />
```

## Variants

The avatar component supports different color variants.

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center; flex-wrap: wrap;">
  <BoAvatar variant="primary" :data="{ label: 'PR' }" />
  <BoAvatar variant="secondary" :data="{ label: 'SE' }" />
  <BoAvatar variant="success" :data="{ label: 'SU' }" />
  <BoAvatar variant="warning" :data="{ label: 'WA' }" />
  <BoAvatar variant="danger" :data="{ label: 'DA' }" />
  <BoAvatar variant="dark" :data="{ label: 'DK' }" />
</div>

```vue
<BoAvatar variant="primary" :data="{ label: 'PR' }" />
<BoAvatar variant="secondary" :data="{ label: 'SE' }" />
<BoAvatar variant="success" :data="{ label: 'SU' }" />
<BoAvatar variant="warning" :data="{ label: 'WA' }" />
<BoAvatar variant="danger" :data="{ label: 'DA' }" />
<BoAvatar variant="dark" :data="{ label: 'DK' }" />
```

## With Image

Display an avatar with an image source.

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center;">
  <BoAvatar 
    type="image" 
    :data="{ 
      src: 'https://i.pravatar.cc/150?img=1',
      alt: 'User avatar'
    }" 
  />
  <BoAvatar 
    type="image" 
    size="lg"
    :data="{ 
      src: 'https://i.pravatar.cc/150?img=2',
      alt: 'User avatar'
    }" 
  />
</div>

```vue
<BoAvatar
	type="image"
	:data="{
		src: 'https://i.pravatar.cc/150?img=1',
		alt: 'User avatar',
	}"
/>
```

## Status Indicators

Add status indicators to show online/offline/busy/away states.

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center;">
  <BoAvatar 
    :data="{ label: 'ON' }" 
    :indicator="{ status: 'online', position: 'bottom-right' }"
  />
  <BoAvatar 
    :data="{ label: 'OF' }" 
    :indicator="{ status: 'offline', position: 'bottom-right' }"
  />
  <BoAvatar 
    :data="{ label: 'BS' }" 
    :indicator="{ status: 'busy', position: 'bottom-right' }"
  />
  <BoAvatar 
    :data="{ label: 'AW' }" 
    :indicator="{ status: 'away', position: 'bottom-right' }"
  />
</div>

```vue
<BoAvatar :data="{ label: 'ON' }" :indicator="{ status: 'online', position: 'bottom-right' }" />
<BoAvatar :data="{ label: 'OF' }" :indicator="{ status: 'offline', position: 'bottom-right' }" />
<BoAvatar :data="{ label: 'BS' }" :indicator="{ status: 'busy', position: 'bottom-right' }" />
<BoAvatar :data="{ label: 'AW' }" :indicator="{ status: 'away', position: 'bottom-right' }" />
```

## Indicator Positions

Control the position of status indicators.

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center;">
  <BoAvatar 
    :data="{ label: 'TL' }" 
    :indicator="{ status: 'online', position: 'top-left' }"
  />
  <BoAvatar 
    :data="{ label: 'TR' }" 
    :indicator="{ status: 'online', position: 'top-right' }"
  />
  <BoAvatar 
    :data="{ label: 'BL' }" 
    :indicator="{ status: 'online', position: 'bottom-left' }"
  />
  <BoAvatar 
    :data="{ label: 'BR' }" 
    :indicator="{ status: 'online', position: 'bottom-right' }"
  />
</div>

```vue
<BoAvatar :data="{ label: 'TL' }" :indicator="{ status: 'online', position: 'top-left' }" />
<BoAvatar :data="{ label: 'TR' }" :indicator="{ status: 'online', position: 'top-right' }" />
<BoAvatar :data="{ label: 'BL' }" :indicator="{ status: 'online', position: 'bottom-left' }" />
<BoAvatar :data="{ label: 'BR' }" :indicator="{ status: 'online', position: 'bottom-right' }" />
```

## Custom Colors

Customize avatar colors with hex values.

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center;">
  <BoAvatar 
    :data="{ label: 'C1' }" 
    :color="{ bgColorHex: '#ff6b6b', colorHex: '#ffffff' }"
  />
  <BoAvatar 
    :data="{ label: 'C2' }" 
    :color="{ bgColorHex: '#4ecdc4', colorHex: '#ffffff' }"
  />
  <BoAvatar 
    :data="{ label: 'C3' }" 
    :color="{ bgColorHex: '#ffe66d', colorHex: '#000000' }"
  />
</div>

```vue
<BoAvatar :data="{ label: 'C1' }" :color="{ bgColorHex: '#ff6b6b', colorHex: '#ffffff' }" />
<BoAvatar :data="{ label: 'C2' }" :color="{ bgColorHex: '#4ecdc4', colorHex: '#ffffff' }" />
<BoAvatar :data="{ label: 'C3' }" :color="{ bgColorHex: '#ffe66d', colorHex: '#000000' }" />
```

## Clickable

Make avatars clickable with hover effects.

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center;">
  <BoAvatar :data="{ label: 'CL' }" clickable />
  <BoAvatar :data="{ label: 'IC' }" clickable />
</div>

```vue
<BoAvatar :data="{ label: 'CL' }" clickable />
```

## Default Image Fallback

Show a default image when no source or label is provided.

<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center;">
  <BoAvatar :data="{}" with-default-image />
  <BoAvatar :data="{}" with-default-image size="lg" />
</div>

```vue
<BoAvatar :data="{}" with-default-image />
```

## Props

| Name               | Type                | Default      | Description                                   |
| ------------------ | ------------------- | ------------ | --------------------------------------------- |
| `id`               | `string`            | auto         | Unique identifier for the avatar              |
| `dataTestId`       | `string`            | auto         | Data test id for testing                      |
| `data`             | `BoAvatarData`      | required     | Avatar data (src, label, alt)                 |
| `type`             | `BoAvatarType`      | `'initials'` | Type of avatar (image, initials)              |
| `shape`            | `BoAvatarShape`     | `'rounded'`  | Shape of the avatar                           |
| `size`             | `BoAvatarSize`      | `'default'`  | Size of the avatar (xs, sm, default, lg, xl)  |
| `clickable`        | `boolean`           | `false`      | Whether the avatar is clickable               |
| `withDefaultImage` | `boolean`           | `false`      | Show default image when no src/label provided |
| `variant`          | `BoAvatarVariant`   | `'primary'`  | Color variant of the avatar                   |
| `color`            | `BoAvatarColor`     | -            | Custom colors (bgColorHex, colorHex)          |
| `indicator`        | `BoAvatarIndicator` | -            | Status indicator configuration                |
| `role`             | `string`            | -            | ARIA role                                     |
| `ariaLabel`        | `string`            | -            | ARIA label                                    |

## Types

```ts
type BoAvatarSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl';
type BoAvatarShape =
	| 'circle'
	| 'flat'
	| 'rounded'
	| 'outline-flat'
	| 'outline-rounded'
	| 'outline-circle';
type BoAvatarVariant = 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'dark';
type BoAvatarType = 'image' | 'initials';
type BoAvatarIndicatorPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type BoAvatarIndicatorStatus = 'online' | 'offline' | 'busy' | 'away' | 'none';

interface BoAvatarData {
	alt?: string;
	src?: string;
	label?: string;
}

interface BoAvatarColor {
	bgColorHex?: string;
	colorHex?: string;
}

interface BoAvatarIndicator {
	status?: BoAvatarIndicatorStatus;
	position?: BoAvatarIndicatorPosition;
}
```
