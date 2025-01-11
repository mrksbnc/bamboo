<script setup>
import { BoAvatar, BoAvatarType, BoAvatarShape } from '@/components/bo_avatar';
import BoAvatarCustomImage from './examples/BoAvatarCustomImage.vue'
import {BoSize} from '@/shared'
</script>

# bo-avatar

An avatar is a small image that represents a user or entity.

<bo-avatar :data="{ label: 'B', alt: 'Avatar' }" />

## Basic usage

```vue
<bo-avatar :initials-data="{ initials: 'B' }" />
```

## Props

| Prop              | Type                | Default value          |
| ----------------- | ------------------- | ---------------------- |
| `data (required)` | `BoAvatarData`      | `undefined`            |
| `type`            | `BoAvatarType`      | `BoAvatarType.default` |
| `shape`           | `BoAvatarShape`     | `BoAvatarShape.circle` |
| `size`            | `BoSize`            | `BoAvatarSize.default` |
| `indicator`       | `BoAvatarIndicator` | `undefined`            |
| `color-hex`       | `string`            | `undefined`            |
| `font-color-hex`  | `string`            | `undefined`            |
| `clickable`       | `boolean`           | `false`                |

## Avatar types

The `type` prop can be used to change the type of the avatar. This will decide wether the avatar uses an image or initials.

The available values for the `type` prop are:

- `image`
- `initials`

<div class="flex gap-2">
    <bo-avatar-custom-image />
    <bo-avatar :type="BoAvatarType.initials" :data="{ label: 'B' }" />
</div>

:::info Default avatar image
If the prop `type` is set to image but no `src` is provided, the avatar will use a fallback image.
:::

<bo-avatar :data="{}" :type="BoAvatarType.image" />

## Avatar shapes

The `shape` prop can be used to change the shape of the avatar.

The available values for the `shape` prop are:

- `circle`
- `square`
- `rounded`

<div class="flex gap-2">
    <bo-avatar :shape="BoAvatarShape.circle" :data="{ label: 'B' }" />
    <bo-avatar :shape="BoAvatarShape.square" :data="{ label: 'B' }" />
    <bo-avatar :shape="BoAvatarShape.rounded" :data="{ label: 'B' }" />
</div>

## Avatar sizes

The `size` prop can be used to change the size of the avatar.

The available values for the `size` prop are:

- `extra-small`
- `small`
- `default`
- `large`
- `extra-large`

<div class="flex gap-2">
    <bo-avatar :size="BoSize.extra_small" :data="{ label: 'B' }" />
    <bo-avatar :size="BoSize.small" :data="{ label: 'B' }" />
    <bo-avatar :size="BoSize.default" :data="{ label: 'B' }" />
    <bo-avatar :size="BoSize.large" :data="{ label: 'B' }" />
    <bo-avatar :size="BoSize.extra_large" :data="{ label: 'B' }" />
</div>

## Custom colors

The `color-hex` and `font-color-hex` props enable you to further customize the avatar.
In most cases you will want to use these together as the background color of the avatar will generated
randomly by default.

<div class="flex gap-2">
    <bo-avatar :color-hex="'#41b883'" :font-color-hex="'#ffffff'" :data="{ label: 'B' }" />
    <bo-avatar :color-hex="'#000000'" :font-color-hex="'#ffffff'" :data="{ label: 'B' }" />
    <bo-avatar :color-hex="'#231252'" :font-color-hex="'yellow'" :data="{ label: 'B' }" />
</div>

## Clickable

To visually indicate that the avatar is clickable, you can use the `clickable` prop. This will set the cursor to pointer and in case of an initials avatar, it will add a `bacckground` hover effect.

<div class="flex gap-2">
    <bo-avatar :clickable="true" :data="{ label: 'B' }" />
</div>

## With default image

If you for any reason need a default image avatar, with the help of the `with-default-image` prop you can
force the avatar to use the default image.

<div class="flex gap-2">
    <bo-avatar :with-default-image="true" />
</div>
