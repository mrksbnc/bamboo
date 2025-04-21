<script setup>
import { BoCard, BoCardVariant, BoCardPadding } from '@/components/bo-card';
import { BoText, BoFontSize, BoFontWeight } from '@/components/bo-text';
import { BoButton } from '@/components/bo-button';
import { Icon } from '@/components/bo-icon';
import { BoSize } from '@/shared';
</script>

# Card

A flexible card component for displaying content in a contained format with optional header and footer sections.

```js
import { BoCard } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-card>
		<bo-text value="Card Content" />
	</bo-card>
</template>

<script setup>
import { BoCard } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 my-4">
	<bo-card>
		<bo-text value="Card Content" />
	</bo-card>
</div>

## Props

| Name         | Type            | Default     | Description                        |
| ------------ | --------------- | ----------- | ---------------------------------- |
| `variant`    | `BoCardVariant` | `default`   | Visual style of the card           |
| `size`       | `BoSize`        | `default`   | Size of the card content           |
| `padding`    | `BoCardPadding` | `default`   | Padding inside the card            |
| `hoverable`  | `boolean`       | `false`     | Whether the card has hover effects |
| `clickable`  | `boolean`       | `false`     | Whether the card is clickable      |
| `disabled`   | `boolean`       | `false`     | Whether the card is disabled       |
| `headerIcon` | `Icon`          | `undefined` | Icon to display in the header      |
| `rounded`    | `boolean`       | `true`      | Whether to show border radius      |
| `shadow`     | `boolean`       | `true`      | Whether to show shadow             |
| `cssClass`   | `string`        | `''`        | Custom CSS class to apply          |
| `id`         | `string`        | auto-gen    | Unique ID for the card             |

## Slots

| Name      | Description                          |
| --------- | ------------------------------------ |
| `header`  | Custom header content                |
| `title`   | Title content (used with headerIcon) |
| `default` | Main content of the card             |
| `footer`  | Footer content                       |

## Variants

<div class="flex flex-col gap-4 my-4">
	<bo-card :variant="BoCardVariant.default">
		<bo-text value="Default variant" />
	</bo-card>
	<bo-card :variant="BoCardVariant.bordered">
		<bo-text value="Bordered variant" />
	</bo-card>
	<bo-card :variant="BoCardVariant.flat">
		<bo-text value="Flat variant" />
	</bo-card>
</div>

```vue
<bo-card :variant="BoCardVariant.default">
	<bo-text value="Default variant" />
</bo-card>
<bo-card :variant="BoCardVariant.bordered">
	<bo-text value="Bordered variant" />
</bo-card>
<bo-card :variant="BoCardVariant.flat">
	<bo-text value="Flat variant" />
</bo-card>
```

## Padding

<div class="flex flex-col gap-4 my-4">
	<bo-card :padding="BoCardPadding.none">
		<bo-text value="No padding" />
	</bo-card>
	<bo-card :padding="BoCardPadding.small">
		<bo-text value="Small padding" />
	</bo-card>
	<bo-card :padding="BoCardPadding.default">
		<bo-text value="Default padding" />
	</bo-card>
	<bo-card :padding="BoCardPadding.large">
		<bo-text value="Large padding" />
	</bo-card>
</div>

```vue
<bo-card :padding="BoCardPadding.none">
	<bo-text value="No padding" />
</bo-card>
<bo-card :padding="BoCardPadding.small">
	<bo-text value="Small padding" />
</bo-card>
<bo-card :padding="BoCardPadding.default">
	<bo-text value="Default padding" />
</bo-card>
<bo-card :padding="BoCardPadding.large">
	<bo-text value="Large padding" />
</bo-card>
```

## With Header and Footer

<div class="flex flex-col gap-4 my-4">
	<bo-card header-icon="Icon.user">
		<template #title>
			<bo-text value="User Profile" :size="BoFontSize.xl" :weight="BoFontWeight.semibold" />
		</template>
		<bo-text value="This is the main content of the card." />
		<template #footer>
			<bo-button variant="primary">View Details</bo-button>
		</template>
	</bo-card>
</div>

```vue
<bo-card header-icon="Icon.user">
	<template #title>
		<bo-text value="User Profile" :size="BoFontSize.xl" :weight="BoFontWeight.semibold" />
	</template>
	<bo-text value="This is the main content of the card." />
	<template #footer>
		<bo-button variant="primary">View Details</bo-button>
	</template>
</bo-card>
```

## Interactive States

<div class="flex flex-col gap-4 my-4">
	<bo-card hoverable>
		<bo-text value="Hoverable card" />
	</bo-card>
	<bo-card clickable>
		<bo-text value="Clickable card" />
	</bo-card>
	<bo-card disabled>
		<bo-text value="Disabled card" />
	</bo-card>
</div>

```vue
<bo-card hoverable>
	<bo-text value="Hoverable card" />
</bo-card>
<bo-card clickable>
	<bo-text value="Clickable card" />
</bo-card>
<bo-card disabled>
	<bo-text value="Disabled card" />
</bo-card>
```

## Custom Styling

<div class="flex flex-col gap-4 my-4">
	<bo-card :rounded="false" :shadow="false">
		<bo-text value="No border radius or shadow" />
	</bo-card>
	<bo-card css-class="bg-blue-50 dark:bg-blue-900">
		<bo-text value="Custom background color" />
	</bo-card>
</div>

```vue
<bo-card :rounded="false" :shadow="false">
	<bo-text value="No border radius or shadow" />
</bo-card>
<bo-card css-class="bg-blue-50 dark:bg-blue-900">
	<bo-text value="Custom background color" />
</bo-card>
```
