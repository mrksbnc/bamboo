<script setup>
import { BoAvatar, BoAvatarType, BoAvatarShape } from '@/components/bo_avatar';
import BoAvatarCustomImage from './examples/BoAvatarCustomImage.vue'
import {BoSize} from '@/shared'
</script>

# Tailwind CSS Avatar - Bamboo UI

An avatar is a visual representation of a user or entity. Use avatars to help users quickly identify people or brands.

## Basic Example

```html
<bo-avatar :data="{ label: 'B' }" />
```

<hr class="border-gray-200 dark:border-gray-700" />
<div class="flex gap-4 items-center">
  <bo-avatar :data="{ label: 'B' }" />
</div>

### Props

| Prop name          | Type            | Default                 | Description                               |
| ------------------ | --------------- | ----------------------- | ----------------------------------------- |
| `data`             | `BoAvatarData`  | `{}`                    | The data for the avatar (required)        |
| `type`             | `BoAvatarType`  | `BoAvatarType.initials` | The type of avatar (image or initials)    |
| `shape`            | `BoAvatarShape` | `BoAvatarShape.rounded` | The shape of the avatar                   |
| `size`             | `BoSize`        | `BoSize.default`        | The size of the avatar                    |
| `colorHex`         | `string`        | `undefined`             | Custom background color (hex code)        |
| `fontColorHex`     | `string`        | `undefined`             | Custom text color (hex code)              |
| `clickable`        | `boolean`       | `false`                 | Whether the avatar is clickable           |
| `withDefaultImage` | `boolean`       | `false`                 | Force the avatar to use the default image |

### Types

```ts
export type BoAvatarData = {
  alt?: string // Alt text for the avatar image
  src?: string // URL of the avatar image
  label?: string // Text to display as initials
}

export enum BoAvatarType {
  image = 'image', // Shows an image
  initials = 'initials', // Shows text initials
}

export enum BoAvatarShape {
  circle = 'circle', // Circular shape
  flat = 'flat', // Square shape
  rounded = 'rounded', // Rounded corners
  outline_flat = 'outline_flat', // Square with border
  outline_rounded = 'outline_rounded', // Rounded corners with border
  outline_circle = 'outline_circle', // Circle with border
}
```

## Avatar Shapes

Use different avatar shapes with initials or images.

<div class="flex gap-4 items-center">
  <bo-avatar :shape="BoAvatarShape.circle" :data="{ label: 'B' }" />
  <bo-avatar :shape="BoAvatarShape.rounded" :data="{ label: 'JD' }" />
  <bo-avatar :type="BoAvatarType.image" :data="{ src: 'https://avatar.iran.liara.run/public', alt: 'User profile' }" />
</div>

```html
<bo-avatar
  :shape="BoAvatarShape.circle"
  :data="{ label: 'B' }"
/>
<bo-avatar
  :shape="BoAvatarShape.rounded"
  :data="{ label: 'JD' }"
/>
<bo-avatar
  :type="BoAvatarType.image"
  :data="{ src: 'path/to/image.jpg', alt: 'User profile' }"
/>
```

## Bordered Avatars

Use the outline shape variants to create avatars with borders.

<div class="flex gap-4 items-center">
  <bo-avatar :shape="BoAvatarShape.outline_circle" :data="{ label: 'B' }" />
  <bo-avatar :shape="BoAvatarShape.outline_rounded" :data="{ label: 'JD' }" />
  <bo-avatar :shape="BoAvatarShape.outline_flat" :data="{ label: 'ML' }" />
</div>

```html
<bo-avatar
  :shape="BoAvatarShape.outline_circle"
  :data="{ label: 'B' }"
/>
<bo-avatar
  :shape="BoAvatarShape.outline_rounded"
  :data="{ label: 'JD' }"
/>
<bo-avatar
  :shape="BoAvatarShape.outline_flat"
  :data="{ label: 'ML' }"
/>
```

## Placeholder Avatar

When no image or initials are provided, a default placeholder image is used.

<div class="flex gap-4 items-center">
  <bo-avatar :data="{}" />
  <bo-avatar :with-default-image="true" :data="{ label: undefined }" />
</div>

```html
<bo-avatar :data="{}" />
<bo-avatar
  :with-default-image="true"
  :data="{ label: undefined }"
/>
```

## Initials Avatar

Use initials as a placeholder when no image is available.

<div class="flex gap-4 items-center">
  <bo-avatar :type="BoAvatarType.initials" :data="{ label: 'JL' }" />
  <bo-avatar :type="BoAvatarType.initials" :data="{ label: 'AB' }" :shape="BoAvatarShape.rounded" />
  <bo-avatar :type="BoAvatarType.initials" :data="{ label: 'RK' }" :shape="BoAvatarShape.flat" />
</div>

```html
<bo-avatar
  :type="BoAvatarType.initials"
  :data="{ label: 'JL' }"
/>
<bo-avatar
  :type="BoAvatarType.initials"
  :data="{ label: 'AB' }"
  :shape="BoAvatarShape.rounded"
/>
<bo-avatar
  :type="BoAvatarType.initials"
  :data="{ label: 'RK' }"
  :shape="BoAvatarShape.flat"
/>
```

## Custom Colors

Customize both the background and text colors of avatars using the `color-hex` and `font-color-hex` props.

<div class="flex gap-4 items-center">

  <bo-avatar :color-hex="'#41b883'" :font-color-hex="'#ffffff'" :data="{ label: 'VJ' }" />
  <bo-avatar :color-hex="'#000000'" :font-color-hex="'#ffffff'" :data="{ label: 'UI' }" />
  <bo-avatar :color-hex="'#3b82f6'" :font-color-hex="'#ffffff'" :data="{ label: 'BO' }" />
</div>

```html
<bo-avatar
  :color-hex="'#41b883'"
  :font-color-hex="'#ffffff'"
  :data="{ label: 'VJ' }"
/>
<bo-avatar
  :color-hex="'#000000'"
  :font-color-hex="'#ffffff'"
  :data="{ label: 'UI' }"
/>
<bo-avatar
  :color-hex="'#3b82f6'"
  :font-color-hex="'#ffffff'"
  :data="{ label: 'BO' }"
/>
```

## Clickable Avatar

Make avatars interactive by using the `clickable` prop which adds a hover effect and changes the cursor.

<div class="flex gap-4 items-center">
  <bo-avatar :clickable="true" :data="{ label: 'JD' }" />
  <bo-avatar :clickable="true" :type="BoAvatarType.image" :data="{ src: 'https://avatar.iran.liara.run/public/boy', alt: 'User profile' }" />
</div>

```html
<bo-avatar
  :clickable="true"
  :data="{ label: 'JD' }"
/>
<bo-avatar
  :clickable="true"
  :type="BoAvatarType.image"
  :data="{ src: 'path/to/image.jpg', alt: 'User profile' }"
/>
```

## Avatar Sizes

Choose from multiple sizes using the `size` prop.

<div class="flex items-center gap-4">
  <bo-avatar :size="BoSize.extra_small" :data="{ label: 'XS' }" />
  <bo-avatar :size="BoSize.small" :data="{ label: 'S' }" />
  <bo-avatar :size="BoSize.default" :data="{ label: 'M' }" />
  <bo-avatar :size="BoSize.large" :data="{ label: 'L' }" />
  <bo-avatar :size="BoSize.extra_large" :data="{ label: 'XL' }" />
</div>

```html
<bo-avatar
  :size="BoSize.extra_small"
  :data="{ label: 'XS' }"
/>
<bo-avatar
  :size="BoSize.small"
  :data="{ label: 'S' }"
/>
<bo-avatar
  :size="BoSize.default"
  :data="{ label: 'M' }"
/>
<bo-avatar
  :size="BoSize.large"
  :data="{ label: 'L' }"
/>
<bo-avatar
  :size="BoSize.extra_large"
  :data="{ label: 'XL' }"
/>
```
