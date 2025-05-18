<script setup>
import BoModal from '@/components/modal/bo-modal.vue';
import { BoModalSize } from '@/components/modal/bo-modal';
import { ref } from 'vue';
import BoButton from '@/components/button/bo-button.vue';
import { BoButtonVariant } from '@/components/button/bo-button';
import { BoSize } from '@/shared/bo-size';

const isModalOpen = ref(false);
const isSlotModalOpen = ref(false);
const isFooterButtonsModalOpen = ref(false);
const isExtraSmallModalOpen = ref(false);
const isSmallModalOpen = ref(false);
const isDefaultModalOpen = ref(false);
const isLargeModalOpen = ref(false);
const isExtraLargeModalOpen = ref(false);

const footerButtons = [
	{
		id: 'footer-button-1',
		label: 'Cancel',
		variant: BoButtonVariant.secondary,
		size: BoSize.default,
		fullWidth: true,
		onClick: () => {
			console.log('Cancel button clicked');
			isModalOpen.value = false;
		},
	},
	{
		id: 'footer-button-2',
		label: 'Save',
		variant: BoButtonVariant.primary,
		size: BoSize.default,
		fullWidth: true,
		onClick: () => {
			console.log('Save button clicked');
			isModalOpen.value = false;
		},
	},
];

function openModal() {
	isModalOpen.value = true;
}

function openExtraSmallModal() {
	isExtraSmallModalOpen.value = true;
}

function openSmallModal() {
	isSmallModalOpen.value = true;
}

function openDefaultModal() {
	isDefaultModalOpen.value = true;
}

function openLargeModal() {
	isLargeModalOpen.value = true;
}

function openExtraLargeModal() {
	isExtraLargeModalOpen.value = true;
}

function closeSlotModal() {
	isSlotModalOpen.value = false;
}

function openSlotModal() {
	isSlotModalOpen.value = true;
}
</script>

# Modal

A customizable modal dialog component for displaying content that requires user interaction.

```js
import { BoModal } from '@mrksbnc/bamboo';
```

## Basic Usage

<div class="flex gap-4">
	<bo-button label="Open Modal" @click="openModal" />
	<bo-modal 
		:isOpen="isModalOpen"
		title="Example Modal"
		description="This is the description of the modal."
		content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat."
		:footer-buttons="footerButtons"
		@close="isModalOpen = false"
	/>
</div>

```vue
<template>
	<div class="flex gap-4">
		<bo-button
			label="Open Modal"
			@click="openModal"
		/>
		<bo-modal
			:isOpen="isModalOpen"
			title="Example Modal"
			description="This is the description of the modal."
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat."
			:footer-buttons="footerButtons"
			@close="isModalOpen = false"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { BoModal, BoButton, BoModalSize } from '@mrksbnc/bamboo';

const isModalOpen = ref(false);

const footerButtons = [
	{
		id: 'footer-button-1',
		label: 'Cancel',
		variant: BoButtonVariant.secondary,
		size: BoSize.default,
		fullWidth: true,
		onClick: () => {
			console.log('Cancel button clicked');
			isModalOpen.value = false;
		},
	},
	{
		id: 'footer-button-2',
		label: 'Save',
		variant: BoButtonVariant.primary,
		size: BoSize.default,
		fullWidth: true,
		onClick: () => {
			console.log('Save button clicked');
			isModalOpen.value = false;
		},
	},
];

function openModal() {
	isModalOpen.value = true;
}
</script>
```

## Props

| Name                      | Type                      | Default      | Description                                     |
| ------------------------- | ------------------------- | ------------ | ----------------------------------------------- |
| `id`                      | `string`                  | `auto`       | Unique ID for the modal                         |
| `isOpen`                  | `boolean`                 | `false`      | Controls whether the modal is visible           |
| `title`                   | `string`                  | `''`         | The title of the modal                          |
| `description`             | `string`                  | `''`         | The description of the modal                    |
| `content`                 | `string`                  | `''`         | The content of the modal                        |
| `showCloseButton`         | `boolean`                 | `true`       | Whether to show the close button                |
| `size`                    | `BoModalSize`             | `md`         | The size of the modal                           |
| `closeOnBackdropClick`    | `boolean`                 | `true`       | Close modal when clicking backdrop              |
| `footerButtons`           | `BoModalFooter[]`         | `[]`         | Array of footer buttons to display in the modal |
| `footerButtonOrientation` | `FooterButtonOrientation` | `horizontal` | The orientation of the buttons                  |

## Events

| Name    | Payload | Description                             |
| ------- | ------- | --------------------------------------- |
| `close` | -       | Emitted when the modal should be closed |

## Slots

| Name      | Props | Description                        |
| --------- | ----- | ---------------------------------- |
| `header`  | none  | Custom header content              |
| `default` | none  | Custom modal content               |
| `footer`  | none  | Custom footer content with actions |

## Types & Enums

```ts
enum BoModalSize {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
	xxl = 'xxl',
}

enum FooterButtonOrientation {
	horizontal = 'horizontal',
	vertical = 'vertical',
}

interface BoModalFooter {
	/** Unique id for the button */
	id?: string;
	/** The label of the button */
	label: string;
	/** The variant of the button */
	variant?: BoButtonVariant;
	/** The size of the button */
	size?: BoSize;
	/** The icon of the button */
	icon?: Icon;
	/** Whether the button is disabled */
	disabled?: boolean;
	/** Whether the button is loading */
	isLoading?: boolean;
	/** Whether the button is full width */
	fullWidth?: boolean;
	/** The action to perform when the button is clicked */
	onClick?: () => void;
}

type BoModalProps = {
	/** Unique id for the modal */
	id?: string;
	/** Whether the modal is open */
	isOpen?: boolean;
	/** The title of the modal */
	title?: string;
	/** The description of the modal */
	description?: string;
	/** The text content of the modal */
	content?: string;
	/** Whether to show the close button */
	showCloseButton?: boolean;
	/** The size of the modal dialog */
	size?: BoModalSize;
	/** Whether to close the modal when clicking outside of its bounds */
	closeOnBackdropClick?: boolean;
	/** Footer buttons to display in the modal */
	footerButtons?: BoModalFooter[];
	/** The orientation of the buttons */
	footerButtonOrientation?: FooterButtonOrientation;
};
```

## Sizes

<div class="flex flex-wrap items-center gap-4">
  <bo-button label="Open Extra Small Modal" @click="openExtraSmallModal" />
  <bo-button label="Open Small Modal" @click="openSmallModal" />
  <bo-button label="Open Default Modal" @click="openDefaultModal" />
  <bo-button label="Open Large Modal" @click="openLargeModal" />
  <bo-button label="Open Extra Large Modal" @click="openExtraLargeModal" />
  <bo-modal
    :isOpen="isExtraSmallModalOpen"
	:size="BoModalSize.xs"
    title="Extra Small Modal"
	@close="isExtraSmallModalOpen = false"
  >
    <p>This is an extra small modal dialog.</p>
  </bo-modal>
  <bo-modal
    :isOpen="isSmallModalOpen"
    :size="BoModalSize.sm"
    title="Small Modal"
	@close="isSmallModalOpen = false"
  >
    <p>This is a small modal dialog.</p>
  </bo-modal>
  <bo-modal
    :isOpen="isDefaultModalOpen"
    :size="BoModalSize.md"
    title="Default Modal"
	@close="isDefaultModalOpen = false"
  >
    <p>This is a default size modal dialog.</p>
  </bo-modal>
  <bo-modal
    :isOpen="isLargeModalOpen"
    :size="BoModalSize.lg"
    title="Large Modal"
	@close="isLargeModalOpen = false"
  >
    <p>This is a large modal dialog.</p>
  </bo-modal>
  <bo-modal
    :isOpen="isExtraLargeModalOpen"
    :size="BoModalSize.xl"
    title="Extra Large Modal"
	@close="isExtraLargeModalOpen = false"
  >
    <p>This is an extra large modal dialog.</p>
  </bo-modal>
</div>

```vue
<template>
	<bo-modal
		:isOpen="isExtraSmallModalOpen"
		:size="BoModalSize.xs"
		title="Extra Small Modal"
		@close="isExtraSmallModalOpen = false"
	>
		<p>This is an extra small modal dialog.</p>
	</bo-modal>
	<bo-modal
		:isOpen="isSmallModalOpen"
		:size="BoModalSize.sm"
		title="Small Modal"
		@close="isSmallModalOpen = false"
	>
		<p>This is a small modal dialog.</p>
	</bo-modal>
	<bo-modal
		:isOpen="isDefaultModalOpen"
		:size="BoModalSize.md"
		title="Default Modal"
		@close="isDefaultModalOpen = false"
	>
		<p>This is a default size modal dialog.</p>
	</bo-modal>
	<bo-modal
		:isOpen="isLargeModalOpen"
		:size="BoModalSize.lg"
		title="Large Modal"
		@close="isLargeModalOpen = false"
	>
		<p>This is a large modal dialog.</p>
	</bo-modal>
	<bo-modal
		:isOpen="isExtraLargeModalOpen"
		:size="BoModalSize.xl"
		title="Extra Large Modal"
		@close="isExtraLargeModalOpen = false"
	>
		<p>This is an extra large modal dialog.</p>
	</bo-modal>
</template>
```

## With footer buttons

In case you don't want to use the `slot` for the footer, you can use the `footer-buttons` prop to display them in the footer. It accepts most of the same props as the `BoButton` component.

<div class="flex gap-4">
	<bo-button label="Open Modal" @click="isFooterButtonsModalOpen = true" />
	<bo-modal
		:isOpen="isFooterButtonsModalOpen"
		title="Modal with Footer Buttons"
		description="This is the description of the modal."
		content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		Sed non risus"
		:footer-buttons="footerButtons"
		@close="isFooterButtonsModalOpen = false"
	/>
</div>

```vue
<template>
	<bo-button
		label="Open Modal"
		@click="openModal"
	/>
	<bo-modal
		:isOpen="isModalOpen"
		title="Modal with Footer Buttons"
		description="This is the description of the modal."
		content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		Sed non risus"
		:footer-buttons="footerButtons"
		@close="isModalOpen = false"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { BoModal, BoButton, BoModalSize } from '@mrksbnc/bamboo';

const isModalOpen = ref(false);

const footerButtons = [
	{
		id: 'footer-button-1',
		label: 'Cancel',
		variant: BoButtonVariant.secondary,
		size: BoSize.default,
		fullWidth: true,
		onClick: () => {
			console.log('Cancel button clicked');
			isModalOpen.value = false;
		},
	},
	{
		id: 'footer-button-2',
		label: 'Save',
		variant: BoButtonVariant.primary,
		size: BoSize.default,
		fullWidth: true,
		onClick: () => {
			console.log('Save button clicked');
			isModalOpen.value = false;
		},
	},
];

function openModal() {
	isModalOpen.value = true;
}
</script>
```

## Slots

The modal supports custom content for the header, default content, and footer. The default slot is used for the main content of the modal. The header slot replaces the existing header with custom content. The footer slot replaces the existing footer with custom content this means that the footer buttons will be removed.

<div>
	<bo-button label="Open Slot Modal" @click="openSlotModal" />
	<bo-modal
		:isOpen="isSlotModalOpen"
		title="Custom Slot Modal"
		@close="closeSlotModal"
		:size="BoModalSize.md"
	>
		<template #header>
			<div class="flex flex-col gap-1">
				<span class="text-xl font-bold text-blue-600">Custom Header</span>
			</div>
		</template>
		<template #default>
			<p>This modal has a custom header and footer.</p>
		</template>
		<template #footer>
			<div class="flex justify-end gap-2">
				<bo-button label="Custom Button" @click="closeSlotModal" />
				<bo-button label="Save" variant="primary" @click="closeSlotModal" />
			</div>
		</template>
	</bo-modal>
</div>

```vue
<template>
	<bo-modal
		:isOpen="isSlotModalOpen"
		title="Custom Slot Modal"
		@close="closeSlotModal"
		:size="BoModalSize.md"
	>
		<template #header>
			<div class="flex flex-col gap-1">
				<span class="text-xl font-bold text-blue-600">Custom Header</span>
			</div>
		</template>
		<template #default>
			<p>This modal has a custom header and footer.</p>
		</template>
		<template #footer>
			<div class="flex justify-end gap-2">
				<bo-button label="Custom Button" />
				<bo-button
					label="Save"
					variant="primary"
				/>
			</div>
		</template>
	</bo-modal>
</template>
```
