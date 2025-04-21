<script setup>
import { BoCheckbox, BoCheckboxVariant } from '@/components/bo-checkbox';
import { BoSize } from '@/shared';
</script>

# Checkbox

A customizable checkbox component for selecting options or toggling states.

```js
import { BoCheckbox } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-checkbox
		v-model="isChecked"
		label="Accept terms"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoCheckbox } from '@mrksbnc/bamboo';

const isChecked = ref(false);
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
  <bo-checkbox label="Checkbox" />
</div>

## Props

| Name          | Type                | Default     | Description                          |
| ------------- | ------------------- | ----------- | ------------------------------------ |
| `id`          | `string`            | `auto`      | Unique ID for the checkbox           |
| `name`        | `string`            | `undefined` | Name attribute for the checkbox      |
| `value`       | `string`            | `undefined` | Value attribute for the checkbox     |
| `modelValue`  | `boolean`           | `false`     | Whether the checkbox is checked      |
| `disabled`    | `boolean`           | `false`     | Whether the checkbox is disabled     |
| `label`       | `string`            | `undefined` | Text label for the checkbox          |
| `description` | `string`            | `undefined` | Description text below the label     |
| `size`        | `BoSize`            | `default`   | Size of the checkbox                 |
| `variant`     | `BoCheckboxVariant` | `primary`   | Color variant of the checkbox        |
| `customColor` | `string`            | `undefined` | Custom color (HEX, RGB) for checkbox |

## Events

| Name                | Payload   | Description                         |
| ------------------- | --------- | ----------------------------------- |
| `update:modelValue` | `boolean` | Emitted when checkbox state changes |
| `change`            | `boolean` | Emitted when checkbox value changes |

## Slots

| Name      | Description             |
| --------- | ----------------------- |
| `default` | Custom checkbox content |

## Types

```ts
export enum BoCheckboxVariant {
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	danger = 'danger',
	warning = 'warning',
	dark = 'dark',
}

export interface BoCheckboxProps {
	id?: string;
	name?: string;
	value?: string;
	modelValue?: boolean;
	disabled?: boolean;
	label?: string;
	description?: string;
	size?: BoSize;
	variant?: BoCheckboxVariant;
	customColor?: string;
}
```

## Variants

<div class="flex flex-col gap-4 my-4">
  <bo-checkbox :variant="BoCheckboxVariant.primary" label="Primary" :model-value="true" />
  <bo-checkbox :variant="BoCheckboxVariant.secondary" label="Secondary" :model-value="true" />
  <bo-checkbox :variant="BoCheckboxVariant.success" label="Success" :model-value="true" />
  <bo-checkbox :variant="BoCheckboxVariant.danger" label="Danger" :model-value="true" />
  <bo-checkbox :variant="BoCheckboxVariant.warning" label="Warning" :model-value="true" />
  <bo-checkbox :variant="BoCheckboxVariant.dark" label="Dark" :model-value="true" />
</div>

```vue
<bo-checkbox :variant="BoCheckboxVariant.primary" label="Primary" :model-value="true" />
<bo-checkbox :variant="BoCheckboxVariant.secondary" label="Secondary" :model-value="true" />
<bo-checkbox :variant="BoCheckboxVariant.success" label="Success" :model-value="true" />
<bo-checkbox :variant="BoCheckboxVariant.danger" label="Danger" :model-value="true" />
<bo-checkbox :variant="BoCheckboxVariant.warning" label="Warning" :model-value="true" />
<bo-checkbox :variant="BoCheckboxVariant.dark" label="Dark" :model-value="true" />
```

## Sizes

<div class="flex flex-col gap-4 my-4">
  <bo-checkbox :size="BoSize.extra_small" label="Extra Small" :model-value="true" />
  <bo-checkbox :size="BoSize.small" label="Small" :model-value="true" />
  <bo-checkbox :size="BoSize.default" label="Default" :model-value="true" />
  <bo-checkbox :size="BoSize.large" label="Large" :model-value="true" />
  <bo-checkbox :size="BoSize.extra_large" label="Extra Large" :model-value="true" />
</div>

```vue
<bo-checkbox :size="BoSize.extra_small" label="Extra Small" :model-value="true" />
<bo-checkbox :size="BoSize.small" label="Small" :model-value="true" />
<bo-checkbox :size="BoSize.default" label="Default" :model-value="true" />
<bo-checkbox :size="BoSize.large" label="Large" :model-value="true" />
<bo-checkbox :size="BoSize.extra_large" label="Extra Large" :model-value="true" />
```

## States

### Checked

<div class="flex gap-4 my-4">
  <bo-checkbox label="Checked Checkbox" :model-value="true" />
</div>

```vue
<bo-checkbox label="Checked Checkbox" :model-value="true" />
```

### Unchecked

<div class="flex gap-4 my-4">
  <bo-checkbox label="Unchecked Checkbox" :model-value="false" />
</div>

```vue
<bo-checkbox label="Unchecked Checkbox" :model-value="false" />
```

### Disabled

<div class="flex gap-4 my-4">
  <bo-checkbox disabled label="Disabled Checkbox" />
  <bo-checkbox disabled :model-value="true" label="Disabled Checked Checkbox" />
</div>

```vue
<bo-checkbox disabled label="Disabled Checkbox" />
<bo-checkbox disabled :model-value="true" label="Disabled Checked Checkbox" />
```

## With Description

<div class="flex flex-col gap-4 my-4">
  <bo-checkbox 
    label="Terms and Conditions" 
    description="I agree to the terms of service and privacy policy"
  />
</div>

```vue
<bo-checkbox
	label="Terms and Conditions"
	description="I agree to the terms of service and privacy policy"
/>
```

## Custom Content

<div class="flex flex-col gap-4 my-4">
  <bo-checkbox>
    <div>
      <span class="font-medium">Custom Content</span>
      <p class="text-sm text-gray-500">You can use any custom content here</p>
    </div>
  </bo-checkbox>
</div>

```vue
<bo-checkbox>
  <div>
    <span class="font-medium">Custom Content</span>
    <p class="text-sm text-gray-500">You can use any custom content here</p>
  </div>
</bo-checkbox>
```

## Event Handling

```vue
<template>
	<bo-checkbox
		v-model="accepted"
		label="Accept terms"
		@change="handleChange"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoCheckbox } from '@mrksbnc/bamboo';

const accepted = ref(false);

const handleChange = (isChecked) => {
	console.log('Checkbox state changed:', isChecked);
};
</script>
```

## Usage Examples

### Form Group

```vue
<div class="space-y-4">
  <bo-text value="Subscription Options" :weight="BoFontWeight.semibold" />

  <div class="space-y-2">
    <bo-checkbox
      v-model="subscription.newsletter"
      label="Subscribe to newsletter"
      description="Receive weekly updates about new features and offers"
    />

    <bo-checkbox
      v-model="subscription.marketing"
      label="Marketing emails"
      description="Receive promotional emails and special offers"
    />

    <bo-checkbox
      v-model="subscription.partners"
      label="Partner offers"
      description="Receive offers from our trusted partners"
    />
  </div>

  <bo-button label="Save Preferences" />
</div>
```

### Checklist

```vue
<template>
	<div class="rounded border p-4">
		<bo-text
			value="Task Checklist"
			:weight="BoFontWeight.semibold"
			class="mb-3"
		/>

		<div class="space-y-2">
			<bo-checkbox
				v-for="(task, index) in tasks"
				:key="index"
				v-model="task.completed"
				:label="task.name"
			/>
		</div>

		<div class="mt-3 text-sm">{{ completedCount }} of {{ tasks.length }} tasks completed</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { BoCheckbox, BoText } from '@mrksbnc/bamboo';
import { BoFontWeight } from '@mrksbnc/bamboo';

const tasks = ref([
	{ name: 'Create project design', completed: false },
	{ name: 'Implement core features', completed: false },
	{ name: 'Write documentation', completed: false },
	{ name: 'Test across browsers', completed: false },
	{ name: 'Deploy to production', completed: false },
]);

const completedCount = computed(() => {
	return tasks.value.filter((task) => task.completed).length;
});
</script>
```

### Toggle Features

```vue
<template>
	<div class="space-y-3">
		<bo-text
			value="App Settings"
			:size="BoFontSize.lg"
			:weight="BoFontWeight.semibold"
		/>

		<div class="space-y-3">
			<bo-checkbox
				v-model="settings.darkMode"
				label="Dark Mode"
				:variant="BoCheckboxVariant.dark"
			/>

			<bo-checkbox
				v-model="settings.notifications"
				label="Enable Notifications"
				:variant="BoCheckboxVariant.primary"
			/>

			<bo-checkbox
				v-model="settings.soundEffects"
				label="Sound Effects"
				:variant="BoCheckboxVariant.secondary"
			/>

			<bo-checkbox
				v-model="settings.autoSave"
				label="Auto Save"
				:variant="BoCheckboxVariant.success"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { BoCheckbox, BoText } from '@mrksbnc/bamboo';
import { BoFontSize, BoFontWeight } from '@mrksbnc/bamboo';
import { BoCheckboxVariant } from '@mrksbnc/bamboo';

const settings = ref({
	darkMode: false,
	notifications: true,
	soundEffects: false,
	autoSave: true,
});
</script>
```
