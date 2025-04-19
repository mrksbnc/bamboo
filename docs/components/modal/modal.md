<script setup>
import { BoSlotModal, BoAlertModal } from '@/components/bo_modal';
import { BoButton, BoButtonVariant } from '@/components/bo_button';
import { BoAlertModalVariant, BoAlertModalAlignment } from '@/components/bo_modal/constants';
import { ref } from 'vue';
import { HtmlButtonType } from '@/shared/html_button';
</script>

# Tailwind CSS Modal - Bamboo UI

Modals are dialog overlays that require user interaction. Use modals to capture user attention for important information, confirmations, or actions.

## Basic Example

<div class="flex gap-4">
  <bo-button 
    label="Open Alert Modal" 
    @click="() => showDefaultModal = true" 
  />
</div>

<div v-if="showDefaultModal">
  <bo-alert-modal
    title="Information"
    content="This is a simple information modal with default settings."
    :confirm-button-props="{
      props: { label: 'Confirm', variant: BoButtonVariant.primary },
      onCLick: () => showDefaultModal = false
    }"
    :cancel-button-props="{
      props: { label: 'Cancel', variant: BoButtonVariant.secondary },
      onCLick: () => showDefaultModal = false
    }"
  />
</div>

```html
<bo-button
	label="Open Alert Modal"
	@click="() => showModal = true"
/>

<bo-alert-modal
	v-if="showModal"
	title="Information"
	content="This is a simple information modal with default settings."
	:confirm-button-props="{
    props: { label: 'Confirm', variant: BoButtonVariant.primary },
    onCLick: () => showModal = false
  }"
	:cancel-button-props="{
    props: { label: 'Cancel', variant: BoButtonVariant.secondary },
    onCLick: () => showModal = false
  }"
/>
```

## Component API

### BoAlertModal Props

| Prop name            | Type                    | Default                         | Description                        |
| -------------------- | ----------------------- | ------------------------------- | ---------------------------------- |
| `title`              | `string`                | `''`                            | Title of the modal                 |
| `content`            | `string`                | `''`                            | Content text to display            |
| `withIcon`           | `boolean`               | `true`                          | Whether to show the variant icon   |
| `showCloseButton`    | `boolean`               | `true`                          | Show close button in the top right |
| `showCancelButton`   | `boolean`               | `true`                          | Show the cancel button             |
| `confirmButtonProps` | `object`                | See below                       | Properties for confirm button      |
| `cancelButtonProps`  | `object`                | See below                       | Properties for cancel button       |
| `variant`            | `BoAlertModalVariant`   | `BoAlertModalVariant.info`      | Visual style of the modal          |
| `alignment`          | `BoAlertModalAlignment` | `BoAlertModalAlignment.default` | Layout alignment of modal content  |

Default `confirmButtonProps`:

```ts
{
  props: {
    label: '',
    variant: BoButtonVariant.primary,
    type: HtmlButtonType.submit,
  },
  onCLick: () => {},
}
```

Default `cancelButtonProps`:

```ts
{
  props: {
    label: '',
    variant: BoButtonVariant.secondary,
    type: HtmlButtonType.reset,
  },
  onCLick: () => {},
}
```

### BoSlotModal Props

| Prop name              | Type      | Default | Description                             |
| ---------------------- | --------- | ------- | --------------------------------------- |
| `showCloseButton`      | `boolean` | `true`  | Show close button in the top right      |
| `borderedHeader`       | `boolean` | `false` | Show border between header and body     |
| `borderedFooter`       | `boolean` | `false` | Show border between body and footer     |
| `widthInPx`            | `number`  | -       | Set modal width in pixels               |
| `widthInPercent`       | `number`  | -       | Set modal width as percentage of screen |
| `widthAsTailwindClass` | `string`  | -       | Set modal width using Tailwind classes  |

### Slots (BoSlotModal)

| Slot name | Description                          |
| --------- | ------------------------------------ |
| `header`  | Content for the modal header section |
| `body`    | Content for the modal body section   |
| `footer`  | Content for the modal footer section |

### Events (BoSlotModal)

| Event name    | Description                           |
| ------------- | ------------------------------------- |
| `update:show` | Emitted when modal close is requested |

### Types

```ts
export enum BoAlertModalVariant {
	info = 'info',
	success = 'success',
	warning = 'warning',
	error = 'error',
}

export enum BoAlertModalAlignment {
	default = 'default',
	centered = 'centered',
}
```

## Alert Modal Variants

Alert modals come in different variants: info, success, warning, and error.

<div class="flex gap-4">
  <bo-button 
    label="Success" 
    :variant="BoButtonVariant.success"
    @click="() => showSuccessModal = true" 
  />
  <bo-button 
    label="Warning" 
    :variant="BoButtonVariant.warning"
    @click="() => showWarningModal = true" 
  />
  <bo-button 
    label="Error" 
    :variant="BoButtonVariant.danger"
    @click="() => showErrorModal = true" 
  />
</div>

<div v-if="showSuccessModal">
  <bo-alert-modal
    title="Success!"
    content="Your changes have been saved successfully."
    :variant="BoAlertModalVariant.success"
    :confirm-button-props="{
      props: { label: 'OK', variant: BoButtonVariant.success },
      onCLick: () => showSuccessModal = false
    }"
    :show-cancel-button="false"
  />
</div>

<div v-if="showWarningModal">
  <bo-alert-modal
    title="Warning!"
    content="This action may have unintended consequences."
    :variant="BoAlertModalVariant.warning"
    :confirm-button-props="{
      props: { label: 'Proceed', variant: BoButtonVariant.warning },
      onCLick: () => showWarningModal = false
    }"
    :cancel-button-props="{
      props: { label: 'Cancel', variant: BoButtonVariant.secondary },
      onCLick: () => showWarningModal = false
    }"
  />
</div>

<div v-if="showErrorModal">
  <bo-alert-modal
    title="Error!"
    content="An error occurred while processing your request."
    :variant="BoAlertModalVariant.error"
    :confirm-button-props="{
      props: { label: 'Retry', variant: BoButtonVariant.danger },
      onCLick: () => showErrorModal = false
    }"
    :cancel-button-props="{
      props: { label: 'Cancel', variant: BoButtonVariant.secondary },
      onCLick: () => showErrorModal = false
    }"
  />
</div>

```html
<!-- Success Modal -->
<bo-alert-modal
	title="Success!"
	content="Your changes have been saved successfully."
	:variant="BoAlertModalVariant.success"
	:confirm-button-props="{
    props: { label: 'OK', variant: BoButtonVariant.success },
    onCLick: () => showSuccessModal = false
  }"
	:show-cancel-button="false"
/>

<!-- Warning Modal -->
<bo-alert-modal
	title="Warning!"
	content="This action may have unintended consequences."
	:variant="BoAlertModalVariant.warning"
	:confirm-button-props="{
    props: { label: 'Proceed', variant: BoButtonVariant.warning },
    onCLick: () => showWarningModal = false
  }"
	:cancel-button-props="{
    props: { label: 'Cancel', variant: BoButtonVariant.secondary },
    onCLick: () => showWarningModal = false
  }"
/>

<!-- Error Modal -->
<bo-alert-modal
	title="Error!"
	content="An error occurred while processing your request."
	:variant="BoAlertModalVariant.error"
	:confirm-button-props="{
    props: { label: 'Retry', variant: BoButtonVariant.danger },
    onCLick: () => showErrorModal = false
  }"
	:cancel-button-props="{
    props: { label: 'Cancel', variant: BoButtonVariant.secondary },
    onCLick: () => showErrorModal = false
  }"
/>
```

## Centered Alignment

You can center the modal content using the alignment prop.

<div class="flex gap-4">
  <bo-button 
    label="Centered Modal" 
    @click="() => showCenteredModal = true" 
  />
</div>

<div v-if="showCenteredModal">
  <bo-alert-modal
    title="Centered Modal"
    content="This modal content is centered for better focus."
    :alignment="BoAlertModalAlignment.centered"
    :confirm-button-props="{
      props: { label: 'Got it', variant: BoButtonVariant.primary },
      onCLick: () => showCenteredModal = false
    }"
    :show-cancel-button="false"
  />
</div>

```html
<bo-alert-modal
	title="Centered Modal"
	content="This modal content is centered for better focus."
	:alignment="BoAlertModalAlignment.centered"
	:confirm-button-props="{
    props: { label: 'Got it', variant: BoButtonVariant.primary },
    onCLick: () => showCenteredModal = false
  }"
	:show-cancel-button="false"
/>
```

## Without Icon

You can hide the icon by setting the `with-icon` prop to false.

<div class="flex gap-4">
  <bo-button 
    label="No Icon Modal" 
    @click="() => showNoIconModal = true" 
  />
</div>

<div v-if="showNoIconModal">
  <bo-alert-modal
    title="No Icon"
    content="This modal does not display an icon."
    :with-icon="false"
    :confirm-button-props="{
      props: { label: 'OK', variant: BoButtonVariant.primary },
      onCLick: () => showNoIconModal = false
    }"
    :show-cancel-button="false"
  />
</div>

```html
<bo-alert-modal
	title="No Icon"
	content="This modal does not display an icon."
	:with-icon="false"
	:confirm-button-props="{
    props: { label: 'OK', variant: BoButtonVariant.primary },
    onCLick: () => showNoIconModal = false
  }"
	:show-cancel-button="false"
/>
```

## Slot Modal

The slot modal provides a more flexible interface with customizable header, body, and footer sections.

<div class="flex gap-4">
  <bo-button 
    label="Open Slot Modal" 
    @click="() => showSlotModal = true" 
  />
</div>

<div v-if="showSlotModal">
  <bo-slot-modal @update:show="() => showSlotModal = false">
    <template #header>
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        Custom Modal Header
      </h3>
    </template>
    <template #body>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        This is a fully customizable modal where you can add any content to the header, body, and footer.
      </p>
    </template>
    <template #footer>
      <div class="flex w-full justify-end space-x-2">
        <bo-button 
          label="Cancel" 
          :variant="BoButtonVariant.secondary" 
          @click="() => showSlotModal = false" 
        />
        <bo-button 
          label="Confirm" 
          :variant="BoButtonVariant.primary" 
          @click="() => showSlotModal = false" 
        />
      </div>
    </template>
  </bo-slot-modal>
</div>

```html
<bo-slot-modal @update:show="() => showSlotModal = false">
	<template #header>
		<h3 class="text-xl font-semibold text-gray-900 dark:text-white">Custom Modal Header</h3>
	</template>
	<template #body>
		<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
			This is a fully customizable modal where you can add any content to the header, body, and
			footer.
		</p>
	</template>
	<template #footer>
		<div class="flex w-full justify-end space-x-2">
			<bo-button
				label="Cancel"
				:variant="BoButtonVariant.secondary"
				@click="() => showSlotModal = false"
			/>
			<bo-button
				label="Confirm"
				:variant="BoButtonVariant.primary"
				@click="() => showSlotModal = false"
			/>
		</div>
	</template>
</bo-slot-modal>
```

## Custom Width and Borders

Control the modal width and show borders between sections.

<div class="flex gap-4">
  <bo-button 
    label="Custom Width Modal" 
    @click="() => showCustomWidthModal = true" 
  />
</div>

<div v-if="showCustomWidthModal">
  <bo-slot-modal 
    :width-in-px="500" 
    :bordered-header="true" 
    :bordered-footer="true"
    @update:show="() => showCustomWidthModal = false"
  >
    <template #header>
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        Modal with Custom Width
      </h3>
    </template>
    <template #body>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        This modal has a fixed width of 500px and displays borders between header, body, and footer sections.
      </p>
    </template>
    <template #footer>
      <div class="flex w-full justify-end space-x-2">
        <bo-button 
          label="Close" 
          :variant="BoButtonVariant.primary" 
          @click="() => showCustomWidthModal = false" 
        />
      </div>
    </template>
  </bo-slot-modal>
</div>

```html
<bo-slot-modal
	:width-in-px="500"
	:bordered-header="true"
	:bordered-footer="true"
	@update:show="() => showModal = false"
>
	<template #header>
		<h3 class="text-xl font-semibold text-gray-900 dark:text-white">Modal with Custom Width</h3>
	</template>
	<template #body>
		<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
			This modal has a fixed width of 500px and displays borders between header, body, and footer
			sections.
		</p>
	</template>
	<template #footer>
		<div class="flex w-full justify-end space-x-2">
			<bo-button
				label="Close"
				:variant="BoButtonVariant.primary"
				@click="() => showModal = false"
			/>
		</div>
	</template>
</bo-slot-modal>
```

## Percentage Width

Set the modal width as a percentage of the screen.

<div class="flex gap-4">
  <bo-button 
    label="Percentage Width Modal" 
    @click="() => showPercentWidthModal = true" 
  />
</div>

<div v-if="showPercentWidthModal">
  <bo-slot-modal 
    :width-in-percent="80"
    @update:show="() => showPercentWidthModal = false"
  >
    <template #header>
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        Modal with 80% Width
      </h3>
    </template>
    <template #body>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        This modal takes up 80% of the screen width, making it suitable for displaying larger content.
      </p>
    </template>
    <template #footer>
      <div class="flex w-full justify-end space-x-2">
        <bo-button 
          label="Close" 
          :variant="BoButtonVariant.primary" 
          @click="() => showPercentWidthModal = false" 
        />
      </div>
    </template>
  </bo-slot-modal>
</div>

```html
<bo-slot-modal
	:width-in-percent="80"
	@update:show="() => showModal = false"
>
	<template #header>
		<h3 class="text-xl font-semibold text-gray-900 dark:text-white">Modal with 80% Width</h3>
	</template>
	<template #body>
		<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
			This modal takes up 80% of the screen width, making it suitable for displaying larger content.
		</p>
	</template>
	<template #footer>
		<div class="flex w-full justify-end space-x-2">
			<bo-button
				label="Close"
				:variant="BoButtonVariant.primary"
				@click="() => showModal = false"
			/>
		</div>
	</template>
</bo-slot-modal>
```

<script>
const showDefaultModal = ref(false);
const showSuccessModal = ref(false);
const showWarningModal = ref(false);
const showErrorModal = ref(false);
const showCenteredModal = ref(false);
const showNoIconModal = ref(false);
const showSlotModal = ref(false);
const showCustomWidthModal = ref(false);
const showPercentWidthModal = ref(false);
</script>
