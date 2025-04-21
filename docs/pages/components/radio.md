<script setup>
import { BoRadio, BoRadioVariant } from '@/components/bo-radio';
import { BoSize } from '@/shared';
</script>

# Radio

A customizable radio button component for selecting a single option from a group of choices.

```js
import { BoRadio } from '@mrksbnc/bamboo';
```

## Basic Usage

```vue
<template>
	<bo-radio
		v-model="selectedOption"
		name="example"
		value="option1"
		label="Option 1"
	/>
	<bo-radio
		v-model="selectedOption"
		name="example"
		value="option2"
		label="Option 2"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoRadio } from '@mrksbnc/bamboo';

const selectedOption = ref('option1');
</script>
```

<hr />
<div class="flex gap-4 items-center my-4">
  <bo-radio name="demo" value="option1" model-value="option1" label="Option 1" />
  <bo-radio name="demo" value="option2" model-value="option1" label="Option 2" />
</div>

## Props

| Name          | Type             | Default     | Description                          |
| ------------- | ---------------- | ----------- | ------------------------------------ |
| `id`          | `string`         | `auto`      | Unique ID for the radio button       |
| `name`        | `string`         | Required    | Name attribute for the radio group   |
| `value`       | `string`         | Required    | Value attribute for the radio button |
| `modelValue`  | `string`         | `undefined` | Current selected value in the group  |
| `disabled`    | `boolean`        | `false`     | Whether the radio button is disabled |
| `label`       | `string`         | `undefined` | Text label for the radio button      |
| `size`        | `BoSize`         | `default`   | Size of the radio button             |
| `variant`     | `BoRadioVariant` | `primary`   | Color variant of the radio button    |
| `customColor` | `string`         | `undefined` | Custom color (HEX, RGB) for radio    |

## Events

| Name                | Payload  | Description                      |
| ------------------- | -------- | -------------------------------- |
| `update:modelValue` | `string` | Emitted when selection changes   |
| `change`            | `string` | Emitted when radio value changes |

## Slots

| Name      | Description                 |
| --------- | --------------------------- |
| `default` | Custom radio button content |

## Types

```ts
export enum BoRadioVariant {
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	danger = 'danger',
	warning = 'warning',
	dark = 'dark',
}

export interface BoRadioProps {
	id?: string;
	name: string;
	value: string;
	modelValue?: string;
	disabled?: boolean;
	label?: string;
	size?: BoSize;
	variant?: BoRadioVariant;
	customColor?: string;
}
```

## Variants

<div class="flex flex-col gap-4 my-4">
  <div class="flex gap-4">
    <bo-radio :variant="BoRadioVariant.primary" name="variant-demo1" value="primary" model-value="primary" label="Primary" />
    <bo-radio :variant="BoRadioVariant.secondary" name="variant-demo2" value="secondary" model-value="secondary" label="Secondary" />
  </div>
  <div class="flex gap-4">
    <bo-radio :variant="BoRadioVariant.success" name="variant-demo3" value="success" model-value="success" label="Success" />
    <bo-radio :variant="BoRadioVariant.danger" name="variant-demo4" value="danger" model-value="danger" label="Danger" />
  </div>
  <div class="flex gap-4">
    <bo-radio :variant="BoRadioVariant.warning" name="variant-demo5" value="warning" model-value="warning" label="Warning" />
    <bo-radio :variant="BoRadioVariant.dark" name="variant-demo6" value="dark" model-value="dark" label="Dark" />
  </div>
</div>

```vue
<bo-radio :variant="BoRadioVariant.primary" name="variant-group" value="primary" label="Primary" />
<bo-radio
	:variant="BoRadioVariant.secondary"
	name="variant-group"
	value="secondary"
	label="Secondary"
/>
<bo-radio :variant="BoRadioVariant.success" name="variant-group" value="success" label="Success" />
<bo-radio :variant="BoRadioVariant.danger" name="variant-group" value="danger" label="Danger" />
<bo-radio :variant="BoRadioVariant.warning" name="variant-group" value="warning" label="Warning" />
<bo-radio :variant="BoRadioVariant.dark" name="variant-group" value="dark" label="Dark" />
```

## Sizes

<div class="flex flex-col gap-4 my-4">
  <div class="flex items-center gap-4">
    <bo-radio :size="BoSize.extra_small" name="size-demo1" value="xs" model-value="xs" label="Extra Small" />
    <bo-radio :size="BoSize.small" name="size-demo2" value="sm" model-value="sm" label="Small" />
  </div>
  <div class="flex items-center gap-4">
    <bo-radio :size="BoSize.default" name="size-demo3" value="default" model-value="default" label="Default" />
    <bo-radio :size="BoSize.large" name="size-demo4" value="lg" model-value="lg" label="Large" />
  </div>
  <div class="flex items-center gap-4">
    <bo-radio :size="BoSize.extra_large" name="size-demo5" value="xl" model-value="xl" label="Extra Large" />
  </div>
</div>

```vue
<bo-radio :size="BoSize.extra_small" name="size-group" value="xs" label="Extra Small" />
<bo-radio :size="BoSize.small" name="size-group" value="sm" label="Small" />
<bo-radio :size="BoSize.default" name="size-group" value="default" label="Default" />
<bo-radio :size="BoSize.large" name="size-group" value="lg" label="Large" />
<bo-radio :size="BoSize.extra_large" name="size-group" value="xl" label="Extra Large" />
```

## States

### Selected

<div class="flex gap-4 my-4">
  <bo-radio name="state-demo1" value="selected" model-value="selected" label="Selected Radio" />
</div>

```vue
<bo-radio name="state" value="selected" model-value="selected" label="Selected Radio" />
```

### Unselected

<div class="flex gap-4 my-4">
  <bo-radio name="state-demo2" value="unselected" model-value="other" label="Unselected Radio" />
</div>

```vue
<bo-radio name="state" value="unselected" model-value="other" label="Unselected Radio" />
```

### Disabled

<div class="flex gap-4 my-4">
  <bo-radio disabled name="state-demo3" value="disabled" label="Disabled Radio" />
  <bo-radio disabled name="state-demo4" value="disabled-selected" model-value="disabled-selected" label="Disabled Selected Radio" />
</div>

```vue
<bo-radio disabled name="state" value="disabled" label="Disabled Radio" />
<bo-radio
	disabled
	name="state"
	value="disabled-selected"
	model-value="disabled-selected"
	label="Disabled Selected Radio"
/>
```

## Custom Content

<div class="flex flex-col gap-4 my-4">
  <bo-radio name="custom-demo" value="custom" model-value="custom">
    <div>
      <span class="font-medium">Custom Content</span>
      <p class="text-sm text-gray-500">You can use any custom content here</p>
    </div>
  </bo-radio>
</div>

```vue
<bo-radio name="custom" value="custom">
  <div>
    <span class="font-medium">Custom Content</span>
    <p class="text-sm text-gray-500">You can use any custom content here</p>
  </div>
</bo-radio>
```

## Event Handling

```vue
<template>
	<bo-radio
		v-model="selectedOption"
		name="event-example"
		value="option1"
		label="Option 1"
		@change="handleChange"
	/>
	<bo-radio
		v-model="selectedOption"
		name="event-example"
		value="option2"
		label="Option 2"
		@change="handleChange"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoRadio } from '@mrksbnc/bamboo';

const selectedOption = ref('option1');

const handleChange = (value) => {
	console.log('Selected option:', value);
};
</script>
```

## Usage Examples

### Selection List

```vue
<template>
	<div class="rounded border p-4">
		<bo-text
			value="Select your plan"
			:weight="BoFontWeight.semibold"
			class="mb-4"
		/>

		<div class="space-y-3">
			<div
				v-for="plan in plans"
				:key="plan.id"
				class="flex items-start rounded border p-3"
				:class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': selectedPlan === plan.id }"
			>
				<bo-radio
					v-model="selectedPlan"
					name="subscription-plan"
					:value="plan.id"
					:variant="BoRadioVariant.primary"
				>
					<div>
						<bo-text
							:value="plan.name"
							:weight="BoFontWeight.medium"
						/>
						<bo-text
							:value="plan.description"
							:color="BoTextColor.secondary"
							:size="BoFontSize.sm"
						/>
						<bo-text
							:value="`$${plan.price}/month`"
							:weight="BoFontWeight.semibold"
							class="mt-1"
						/>
					</div>
				</bo-radio>
			</div>
		</div>

		<bo-button
			label="Continue"
			class="mt-4"
			:disabled="!selectedPlan"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { BoRadio, BoText, BoButton } from '@mrksbnc/bamboo';
import { BoFontWeight, BoFontSize, BoTextColor } from '@mrksbnc/bamboo';
import { BoRadioVariant } from '@mrksbnc/bamboo';

const selectedPlan = ref('');
const plans = [
	{
		id: 'basic',
		name: 'Basic Plan',
		description: 'Essential features for small teams',
		price: 9.99,
	},
	{
		id: 'pro',
		name: 'Pro Plan',
		description: 'Advanced features for growing businesses',
		price: 19.99,
	},
	{
		id: 'enterprise',
		name: 'Enterprise Plan',
		description: 'Complete solution for large organizations',
		price: 49.99,
	},
];
</script>
```

### Question Form

```vue
<template>
	<div class="space-y-6">
		<div
			v-for="(question, index) in questions"
			:key="index"
			class="space-y-3"
		>
			<bo-text
				:value="question.text"
				:weight="BoFontWeight.medium"
			/>

			<div class="ml-2 space-y-2">
				<bo-radio
					v-for="option in question.options"
					:key="option.value"
					v-model="answers[question.id]"
					:name="`question-${question.id}`"
					:value="option.value"
					:label="option.text"
				/>
			</div>
		</div>

		<div class="flex justify-end gap-2">
			<bo-button
				label="Previous"
				variant="outline"
			/>
			<bo-button label="Next" />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { BoRadio, BoText, BoButton } from '@mrksbnc/bamboo';
import { BoFontWeight } from '@mrksbnc/bamboo';

const answers = ref({});
const questions = [
	{
		id: 'q1',
		text: 'How satisfied are you with our product?',
		options: [
			{ value: 'very_satisfied', text: 'Very Satisfied' },
			{ value: 'satisfied', text: 'Satisfied' },
			{ value: 'neutral', text: 'Neutral' },
			{ value: 'dissatisfied', text: 'Dissatisfied' },
			{ value: 'very_dissatisfied', text: 'Very Dissatisfied' },
		],
	},
	{
		id: 'q2',
		text: 'How likely are you to recommend our product to others?',
		options: [
			{ value: 'very_likely', text: 'Very Likely' },
			{ value: 'likely', text: 'Likely' },
			{ value: 'neutral', text: 'Neutral' },
			{ value: 'unlikely', text: 'Unlikely' },
			{ value: 'very_unlikely', text: 'Very Unlikely' },
		],
	},
];
</script>
```

### Settings Selection

```vue
<template>
	<div class="space-y-4">
		<bo-text
			value="Notification Preferences"
			:weight="BoFontWeight.semibold"
		/>

		<div class="space-y-2 border-b pb-3">
			<bo-text
				value="Email Frequency"
				:size="BoFontSize.sm"
				:color="BoTextColor.secondary"
			/>
			<div class="mt-1 flex flex-col gap-2">
				<bo-radio
					v-model="preferences.emailFrequency"
					name="email-frequency"
					value="immediate"
					label="Immediate"
				/>
				<bo-radio
					v-model="preferences.emailFrequency"
					name="email-frequency"
					value="daily"
					label="Daily Digest"
				/>
				<bo-radio
					v-model="preferences.emailFrequency"
					name="email-frequency"
					value="weekly"
					label="Weekly Summary"
				/>
				<bo-radio
					v-model="preferences.emailFrequency"
					name="email-frequency"
					value="none"
					label="No Emails"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { BoRadio, BoText } from '@mrksbnc/bamboo';
import { BoFontWeight, BoFontSize, BoTextColor } from '@mrksbnc/bamboo';

const preferences = ref({
	emailFrequency: 'daily',
});
</script>
```
