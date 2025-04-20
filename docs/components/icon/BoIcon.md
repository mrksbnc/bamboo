# BoIcon

The BoIcon component provides a consistent way to display vector icons throughout your application.

## Component API

### Props

```ts
interface BoIconProps {
	icon: Icon;
	size?: BoSize;
	color?: string;
	decorative?: boolean;
	title?: string;
}
```

### Enums

```ts
enum Icon {
	activity = 'activity',
	airplay = 'airplay',
	alert_circle = 'alert-circle',
	alert_octagon = 'alert-octagon',
	alert_triangle = 'alert-triangle',
	// ... many more icons
	none = 'none',
}

enum BoSize {
	extra_small = 'extra_small',
	small = 'small',
	default = 'default',
	large = 'large',
	extra_large = 'extra_large',
}
```

### SVG Rendering

The BoIcon component dynamically loads SVG content based on the specified icon name. The SVG is rendered with appropriate accessibility attributes:

- If `decorative` is `true` (default), the icon is treated as presentational with `role="presentation"` and `aria-hidden="true"`
- If `decorative` is `false` and a `title` is provided, the icon is treated as meaningful with `role="img"` and the title is inserted as a `<title>` element in the SVG

## Basic Usage

```vue
<template>
	<bo-icon :icon="Icon.heart" />
</template>

<script setup>
import { BoIcon, Icon } from '@/components/bo-icon';
</script>
```

## Examples

<script setup>
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoSize } from '@/shared';
</script>

### Default Icons

<div class="flex flex-wrap gap-4">
  <bo-icon :icon="Icon.heart" />
  <bo-icon :icon="Icon.bell" />
  <bo-icon :icon="Icon.user" />
  <bo-icon :icon="Icon.settings" />
  <bo-icon :icon="Icon.check" />
  <bo-icon :icon="Icon.alert_circle" />
</div>

### Sizes

Icons are available in multiple sizes:

<div class="flex items-center gap-4 my-4">
  <bo-icon :icon="Icon.star" :size="BoSize.extra_small" />
  <bo-icon :icon="Icon.star" :size="BoSize.small" />
  <bo-icon :icon="Icon.star" :size="BoSize.default" />
  <bo-icon :icon="Icon.star" :size="BoSize.large" />
  <bo-icon :icon="Icon.star" :size="BoSize.extra_large" />
</div>

```vue
<bo-icon :icon="Icon.star" :size="BoSize.extra_small" />
<bo-icon :icon="Icon.star" :size="BoSize.small" />
<bo-icon :icon="Icon.star" :size="BoSize.default" />
<bo-icon :icon="Icon.star" :size="BoSize.large" />
<bo-icon :icon="Icon.star" :size="BoSize.extra_large" />
```

### Colors

You can customize the icon color:

<div class="flex gap-4 my-4">
  <bo-icon :icon="Icon.heart" color="red" />
  <bo-icon :icon="Icon.heart" color="blue" />
  <bo-icon :icon="Icon.heart" color="green" />
  <bo-icon :icon="Icon.heart" color="#9933FF" />
</div>

```vue
<bo-icon :icon="Icon.heart" color="red" />
<bo-icon :icon="Icon.heart" color="blue" />
<bo-icon :icon="Icon.heart" color="green" />
<bo-icon :icon="Icon.heart" color="#9933FF" />
```

### Accessibility

By default, icons are treated as decorative elements. For icons that convey meaning, set the `decorative` prop to `false` and provide a `title`:

```vue
<bo-icon
	:icon="Icon.alert_circle"
	:decorative="false"
	title="Warning: This action cannot be undone"
/>
```

### Available Icons

The `Icon` enum provides a comprehensive list of available icons. Here's a selection of commonly used icons:

<div class="grid grid-cols-4 gap-4 my-4">
  <div class="flex items-center gap-2">
    <bo-icon :icon="Icon.user" />
    <span>user</span>
  </div>
  <div class="flex items-center gap-2">
    <bo-icon :icon="Icon.settings" />
    <span>settings</span>
  </div>
  <div class="flex items-center gap-2">
    <bo-icon :icon="Icon.home" />
    <span>home</span>
  </div>
  <div class="flex items-center gap-2">
    <bo-icon :icon="Icon.mail" />
    <span>mail</span>
  </div>
  <div class="flex items-center gap-2">
    <bo-icon :icon="Icon.bell" />
    <span>bell</span>
  </div>
  <div class="flex items-center gap-2">
    <bo-icon :icon="Icon.check" />
    <span>check</span>
  </div>
  <div class="flex items-center gap-2">
    <bo-icon :icon="Icon.x" />
    <span>x</span>
  </div>
  <div class="flex items-center gap-2">
    <bo-icon :icon="Icon.alert_circle" />
    <span>alert_circle</span>
  </div>
</div>

Refer to the `Icon` enum in the source code for a complete list of available icons.

## Advanced Usage

Example of defining props in your component:

```vue
<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoSize } from '@/shared/bo-size';

const iconProps = {
	icon: Icon.alert_circle,
	size: BoSize.large,
	color: '#ff0000', // Red color
	decorative: false, // This icon conveys meaning
	title: 'Warning: Critical error', // Accessible title for screen readers
};
</script>

<template>
	<bo-icon v-bind="iconProps" />
</template>
```
