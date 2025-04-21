<script setup>
import { BoButtonGroup, BoButtonGroupOrientation, BoButtonGroupStyle } from '@/components/bo-button-group';
import { BoButton, BoButtonVariant, BoButtonShape } from '@/components/bo-button';
import { BoSize } from '@/shared';
import { Icon } from '@/components/bo-icon';
</script>

# Button Group

A component for grouping related buttons with consistent styling and layout.

```js
import { BoButtonGroup } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-button-group>
		<bo-button label="Left" />
		<bo-button label="Middle" />
		<bo-button label="Right" />
	</bo-button-group>
</template>

<script setup>
import { BoButtonGroup, BoButton } from '@mrksbnc/bamboo';
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
  <bo-button-group
    :content-component="BoButton"
    :content-component-props="[
      { label: 'Left' },
      { label: 'Middle' },
      { label: 'Right' }
    ]"
  />
</div>

## Props

| Name                    | Type                       | Default      | Description                         |
| ----------------------- | -------------------------- | ------------ | ----------------------------------- |
| `variant`               | `BoButtonVariant`          | `primary`    | Color variant of the button group   |
| `style`                 | `BoButtonGroupStyle`       | `default`    | Style of the button group           |
| `orientation`           | `BoButtonGroupOrientation` | `horizontal` | Layout orientation                  |
| `size`                  | `BoSize`                   | `default`    | Size of the buttons in the group    |
| `fullWidth`             | `boolean`                  | `false`      | Whether to take full width          |
| `cssClass`              | `string`                   | `undefined`  | Additional CSS classes              |
| `id`                    | `string`                   | `auto`       | Unique ID for the button group      |
| `disabled`              | `boolean`                  | `false`      | Whether all buttons are disabled    |
| `contentComponent`      | `Component`                | `undefined`  | Component to render for each button |
| `contentComponentProps` | `Record<string, any>[]`    | `undefined`  | Props for each button component     |

## Types

```ts
export enum BoButtonGroupOrientation {
	horizontal = 'horizontal',
	vertical = 'vertical',
}

export enum BoButtonGroupStyle {
	default = 'default',
	outlined = 'outlined',
	filled = 'filled',
	pill = 'pill',
}

export interface BoButtonGroupProps {
	variant?: BoButtonVariant;
	style?: BoButtonGroupStyle;
	orientation?: BoButtonGroupOrientation;
	size?: BoSize;
	fullWidth?: boolean;
	cssClass?: string;
	id?: string;
	disabled?: boolean;
	contentComponent?: Component;
	contentComponentProps?: Record<string, any>[];
}
```

## Orientations

### Horizontal (Default)

<div class="flex flex-col gap-4 my-4">
  <bo-button-group
    :orientation="BoButtonGroupOrientation.horizontal"
    :content-component="BoButton"
    :content-component-props="[
      { label: 'Left' },
      { label: 'Middle' },
      { label: 'Right' }
    ]"
  />
</div>

```vue
<bo-button-group :orientation="BoButtonGroupOrientation.horizontal">
  <bo-button label="Left" />
  <bo-button label="Middle" />
  <bo-button label="Right" />
</bo-button-group>
```

### Vertical

<div class="flex flex-col gap-4 my-4">
  <bo-button-group
    :orientation="BoButtonGroupOrientation.vertical"
    :content-component="BoButton"
    :content-component-props="[
      { label: 'Top' },
      { label: 'Middle' },
      { label: 'Bottom' }
    ]"
  />
</div>

```vue
<bo-button-group :orientation="BoButtonGroupOrientation.vertical">
  <bo-button label="Top" />
  <bo-button label="Middle" />
  <bo-button label="Bottom" />
</bo-button-group>
```

## Styles

### Default

<div class="flex flex-col gap-4 my-4">
  <bo-button-group
    :style="BoButtonGroupStyle.default"
    :content-component="BoButton"
    :content-component-props="[
      { label: 'Left' },
      { label: 'Middle' },
      { label: 'Right' }
    ]"
  />
</div>

```vue
<bo-button-group :style="BoButtonGroupStyle.default">
  <bo-button label="Left" />
  <bo-button label="Middle" />
  <bo-button label="Right" />
</bo-button-group>
```

### Outlined

<div class="flex flex-col gap-4 my-4">
  <bo-button-group
    :style="BoButtonGroupStyle.outlined"
    :content-component="BoButton"
    :content-component-props="[
      { label: 'Left' },
      { label: 'Middle' },
      { label: 'Right' }
    ]"
  />
</div>

```vue
<bo-button-group :style="BoButtonGroupStyle.outlined">
  <bo-button label="Left" />
  <bo-button label="Middle" />
  <bo-button label="Right" />
</bo-button-group>
```

### Filled

<div class="flex flex-col gap-4 my-4">
  <bo-button-group
    :style="BoButtonGroupStyle.filled"
    :content-component="BoButton"
    :content-component-props="[
      { label: 'Left' },
      { label: 'Middle' },
      { label: 'Right' }
    ]"
  />
</div>

```vue
<bo-button-group :style="BoButtonGroupStyle.filled">
  <bo-button label="Left" />
  <bo-button label="Middle" />
  <bo-button label="Right" />
</bo-button-group>
```

### Pill

<div class="flex flex-col gap-4 my-4">
  <bo-button-group
    :style="BoButtonGroupStyle.pill"
    :content-component="BoButton"
    :content-component-props="[
      { label: 'Left' },
      { label: 'Middle' },
      { label: 'Right' }
    ]"
  />
</div>

```vue
<bo-button-group :style="BoButtonGroupStyle.pill">
  <bo-button label="Left" />
  <bo-button label="Middle" />
  <bo-button label="Right" />
</bo-button-group>
```

## Variants

<div class="flex flex-col gap-4 my-4">
  <bo-button-group
    :variant="BoButtonVariant.primary"
    :content-component="BoButton"
    :content-component-props="[
      { label: 'Left' },
      { label: 'Middle' },
      { label: 'Right' }
    ]"
  />
  <bo-button-group
    :variant="BoButtonVariant.secondary"
    :content-component="BoButton"
    :content-component-props="[
      { label: 'Left' },
      { label: 'Middle' },
      { label: 'Right' }
    ]"
  />
  <bo-button-group
    :variant="BoButtonVariant.success"
    :content-component="BoButton"
    :content-component-props="[
      { label: 'Left' },
      { label: 'Middle' },
      { label: 'Right' }
    ]"
  />
  <bo-button-group
    :variant="BoButtonVariant.danger"
    :content-component="BoButton"
    :content-component-props="[
      { label: 'Left' },
      { label: 'Middle' },
      { label: 'Right' }
    ]"
  />
</div>

```vue
<bo-button-group :variant="BoButtonVariant.primary">
  <bo-button label="Left" />
  <bo-button label="Middle" />
  <bo-button label="Right" />
</bo-button-group>

<bo-button-group :variant="BoButtonVariant.secondary">
  <bo-button label="Left" />
  <bo-button label="Middle" />
  <bo-button label="Right" />
</bo-button-group>

<bo-button-group :variant="BoButtonVariant.success">
  <bo-button label="Left" />
  <bo-button label="Middle" />
  <bo-button label="Right" />
</bo-button-group>

<bo-button-group :variant="BoButtonVariant.danger">
  <bo-button label="Left" />
  <bo-button label="Middle" />
  <bo-button label="Right" />
</bo-button-group>
```

## Sizes

<div class="flex flex-col gap-4 my-4">
  <bo-button-group
    :size="BoSize.small"
    :content-component="BoButton"
    :content-component-props="[
      { label: 'Left' },
      { label: 'Middle' },
      { label: 'Right' }
    ]"
  />
  <bo-button-group
    :size="BoSize.default"
    :content-component="BoButton"
    :content-component-props="[
      { label: 'Left' },
      { label: 'Middle' },
      { label: 'Right' }
    ]"
  />
  <bo-button-group
    :size="BoSize.large"
    :content-component="BoButton"
    :content-component-props="[
      { label: 'Left' },
      { label: 'Middle' },
      { label: 'Right' }
    ]"
  />
</div>

```vue
<bo-button-group :size="BoSize.small">
  <bo-button label="Left" />
  <bo-button label="Middle" />
  <bo-button label="Right" />
</bo-button-group>

<bo-button-group :size="BoSize.default">
  <bo-button label="Left" />
  <bo-button label="Middle" />
  <bo-button label="Right" />
</bo-button-group>

<bo-button-group :size="BoSize.large">
  <bo-button label="Left" />
  <bo-button label="Middle" />
  <bo-button label="Right" />
</bo-button-group>
```

## Full Width

<div class="flex flex-col gap-4 my-4">
  <bo-button-group
    :full-width="true"
    :content-component="BoButton"
    :content-component-props="[
      { label: 'Left' },
      { label: 'Middle' },
      { label: 'Right' }
    ]"
  />
</div>

```vue
<bo-button-group :full-width="true">
  <bo-button label="Left" />
  <bo-button label="Middle" />
  <bo-button label="Right" />
</bo-button-group>
```

## Disabled

<div class="flex flex-col gap-4 my-4">
  <bo-button-group
    :disabled="true"
    :content-component="BoButton"
    :content-component-props="[
      { label: 'Left' },
      { label: 'Middle' },
      { label: 'Right' }
    ]"
  />
</div>

```vue
<bo-button-group :disabled="true">
  <bo-button label="Left" />
  <bo-button label="Middle" />
  <bo-button label="Right" />
</bo-button-group>
```

## With Icons

<div class="flex flex-col gap-4 my-4">
  <bo-button-group
    :content-component="BoButton"
    :content-component-props="[
      { prefixIcon: Icon.arrowLeft, label: 'Previous' },
      { prefixIcon: Icon.refresh, label: 'Refresh' },
      { suffixIcon: Icon.arrowRight, label: 'Next' }
    ]"
  />
</div>

```vue
<bo-button-group>
  <bo-button :prefix-icon="Icon.arrowLeft" label="Previous" />
  <bo-button :prefix-icon="Icon.refresh" label="Refresh" />
  <bo-button :suffix-icon="Icon.arrowRight" label="Next" />
</bo-button-group>
```

## Usage Examples

### Pagination Controls

```vue
<template>
	<div class="flex items-center justify-between">
		<bo-text :value="`Page ${currentPage} of ${totalPages}`" />

		<bo-button-group>
			<bo-button
				:prefix-icon="Icon.chevronLeft"
				label="Previous"
				:disabled="currentPage <= 1"
				@click="previousPage"
			/>
			<bo-button
				:suffix-icon="Icon.chevronRight"
				label="Next"
				:disabled="currentPage >= totalPages"
				@click="nextPage"
			/>
		</bo-button-group>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { BoButtonGroup, BoButton, BoText } from '@mrksbnc/bamboo';
import { Icon } from '@mrksbnc/bamboo';

const currentPage = ref(1);
const totalPages = ref(10);

function previousPage() {
	if (currentPage.value > 1) {
		currentPage.value -= 1;
	}
}

function nextPage() {
	if (currentPage.value < totalPages.value) {
		currentPage.value += 1;
	}
}
</script>
```

### Toolbar

```vue
<template>
	<bo-button-group
		:variant="BoButtonVariant.secondary"
		:style="BoButtonGroupStyle.outlined"
	>
		<bo-button
			:prefix-icon="Icon.bold"
			aria-label="Bold"
		/>
		<bo-button
			:prefix-icon="Icon.italic"
			aria-label="Italic"
		/>
		<bo-button
			:prefix-icon="Icon.underline"
			aria-label="Underline"
		/>
		<bo-button
			:prefix-icon="Icon.link"
			aria-label="Insert Link"
		/>
	</bo-button-group>
</template>

<script setup>
import { BoButtonGroup, BoButton } from '@mrksbnc/bamboo';
import { BoButtonVariant, BoButtonGroupStyle } from '@mrksbnc/bamboo';
import { Icon } from '@mrksbnc/bamboo';
</script>
```

### Toggle Button Group

```vue
<template>
	<div class="space-y-2">
		<bo-text value="View Mode:" />
		<bo-button-group>
			<bo-button
				label="List"
				:prefix-icon="Icon.list"
				:variant="viewMode === 'list' ? BoButtonVariant.primary : BoButtonVariant.secondary"
				@click="viewMode = 'list'"
			/>
			<bo-button
				label="Grid"
				:prefix-icon="Icon.grid"
				:variant="viewMode === 'grid' ? BoButtonVariant.primary : BoButtonVariant.secondary"
				@click="viewMode = 'grid'"
			/>
			<bo-button
				label="Kanban"
				:prefix-icon="Icon.columns"
				:variant="viewMode === 'kanban' ? BoButtonVariant.primary : BoButtonVariant.secondary"
				@click="viewMode = 'kanban'"
			/>
		</bo-button-group>

		<div class="mt-4 rounded border p-4">
			<bo-text :value="`Current view mode: ${viewMode}`" />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { BoButtonGroup, BoButton, BoText } from '@mrksbnc/bamboo';
import { BoButtonVariant } from '@mrksbnc/bamboo';
import { Icon } from '@mrksbnc/bamboo';

const viewMode = ref('list');
</script>
```
