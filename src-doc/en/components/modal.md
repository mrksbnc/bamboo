---
title: Modal
description: A flexible and accessible modal dialog component with customizable sizes, slots, and behavior options.
outline: deep
---

<script setup lang="ts">
import { ref } from 'vue';
import BoModal from '@/components/bo-modal/bo-modal.vue';
import BoButton from '@/components/bo-button/bo-button.vue';
import { BoModalSize } from '@/components/bo-modal/bo-modal';

const isBasicModalOpen = ref(false);
const isSmallModalOpen = ref(false);
const isLargeModalOpen = ref(false);
const isFullModalOpen = ref(false);
const isCustomModalOpen = ref(false);
const isNoCloseModalOpen = ref(false);
const isFormModalOpen = ref(false);

const formData = ref({ name: '', email: '' });

function handleFormSubmit() {
  console.log('Form submitted:', formData.value);
  isFormModalOpen.value = false;
}
</script>

# Modal

A flexible and accessible modal dialog component for displaying content in an overlay. Features include multiple sizes, customizable slots, keyboard navigation, focus trapping, and body scroll prevention.

## Basic Usage

The modal component uses v-model for controlling visibility and automatically handles focus management and accessibility.

```vue
<script setup>
	import { ref } from 'vue';
	import BoModal from '@/components/bo-modal/bo-modal.vue';
	import BoButton from '@/components/bo-button/bo-button.vue';

	const isModalOpen = ref(false);
</script>

<template>
	<bo-button @click="isModalOpen = true">Open Modal</bo-button>

	<bo-modal v-model="isModalOpen" title="Basic Modal">
		<p>This is a basic modal with default settings.</p>
	</bo-modal>
</template>
```

<div style="margin-top: 1rem;">
  <bo-button @click="isBasicModalOpen = true">Open Modal</bo-button>
  <bo-modal v-model="isBasicModalOpen" title="Basic Modal">
    <p>This is a basic modal with default settings. It includes a title, close button, and body content.</p>
    <p>Click the backdrop, press Escape, or click the close button to dismiss.</p>
  </bo-modal>
</div>

## Sizes

The modal supports five different sizes: `sm`, `md` (default), `lg`, `xl`, and `full`.

```vue
<bo-modal v-model="isModalOpen" title="Small Modal" :size="BoModalSize.sm">
	<p>This is a small modal.</p>
</bo-modal>

<bo-modal v-model="isModalOpen" title="Large Modal" :size="BoModalSize.lg">
	<p>This is a large modal.</p>
</bo-modal>

<bo-modal v-model="isModalOpen" title="Full Modal" :size="BoModalSize.full">
	<p>This modal takes up almost the entire viewport.</p>
</bo-modal>
```

<div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <bo-button @click="isSmallModalOpen = true">Small Modal</bo-button>
  <bo-button @click="isBasicModalOpen = true">Medium Modal</bo-button>
  <bo-button @click="isLargeModalOpen = true">Large Modal</bo-button>
  <bo-button @click="isFullModalOpen = true">Full Modal</bo-button>

  <bo-modal v-model="isSmallModalOpen" title="Small Modal" :size="BoModalSize.sm">
    <p>This is a small modal (max-width: 400px).</p>
  </bo-modal>

  <bo-modal v-model="isLargeModalOpen" title="Large Modal" :size="BoModalSize.lg">
    <p>This is a large modal (max-width: 800px).</p>
    <p>Perfect for displaying more content or complex forms.</p>
  </bo-modal>

  <bo-modal v-model="isFullModalOpen" title="Full Modal" :size="BoModalSize.full">
    <p>This modal takes up almost the entire viewport.</p>
    <p>Useful for immersive experiences or detailed content.</p>
  </bo-modal>
</div>

## Custom Header and Footer

Use slots to customize the header and footer sections.

```vue
<bo-modal v-model="isModalOpen">
	<template #header>
		<div style="display: flex; align-items: center; gap: 0.5rem;">
			<bo-icon :icon="Icon.alert_circle" :size="24" />
			<h2>Custom Header</h2>
		</div>
	</template>

	<p>Modal content goes here.</p>

	<template #footer>
		<bo-button variant="secondary" @click="isModalOpen = false">Cancel</bo-button>
		<bo-button variant="primary" @click="handleSave">Save Changes</bo-button>
	</template>
</bo-modal>
```

<div style="margin-top: 1rem;">
  <bo-button @click="isCustomModalOpen = true">Open Custom Modal</bo-button>
  <bo-modal v-model="isCustomModalOpen">
    <template #header>
      <h2 style="margin: 0; font-size: 1.25rem; font-weight: 600;">Custom Header</h2>
    </template>

    <p>This modal has a custom header and footer using slots.</p>
    <p>The footer contains action buttons for user interaction.</p>

    <template #footer>
      <bo-button @click="isCustomModalOpen = false">Cancel</bo-button>
      <bo-button @click="isCustomModalOpen = false">Save Changes</bo-button>
    </template>
  </bo-modal>
</div>

## Form Example

Modals work great for forms and user input.

```vue
<script setup>
	import { ref } from 'vue';

	const isFormModalOpen = ref(false);
	const formData = ref({ name: '', email: '' });

	function handleFormSubmit() {
		console.log('Form submitted:', formData.value);
		isFormModalOpen.value = false;
	}
</script>

<template>
	<bo-modal v-model="isFormModalOpen" title="Contact Form">
		<form @submit.prevent="handleFormSubmit">
			<div style="margin-bottom: 1rem;">
				<label for="name">Name</label>
				<input id="name" v-model="formData.name" type="text" required />
			</div>
			<div style="margin-bottom: 1rem;">
				<label for="email">Email</label>
				<input id="email" v-model="formData.email" type="email" required />
			</div>
		</form>

		<template #footer>
			<bo-button @click="isFormModalOpen = false">Cancel</bo-button>
			<bo-button type="submit" @click="handleFormSubmit">Submit</bo-button>
		</template>
	</bo-modal>
</template>
```

<div style="margin-top: 1rem;">
  <bo-button @click="isFormModalOpen = true">Open Form Modal</bo-button>
  <bo-modal v-model="isFormModalOpen" title="Contact Form">
    <form @submit.prevent="handleFormSubmit">
      <div style="margin-bottom: 1rem;">
        <label for="name" style="display: block; margin-bottom: 0.25rem; font-weight: 500;">Name</label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
          required
          style="width: 100%; padding: 0.5rem; border: 1px solid var(--neutral-300); border-radius: 0.375rem;"
        />
      </div>
      <div style="margin-bottom: 1rem;">
        <label for="email" style="display: block; margin-bottom: 0.25rem; font-weight: 500;">Email</label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          required
          style="width: 100%; padding: 0.5rem; border: 1px solid var(--neutral-300); border-radius: 0.375rem;"
        />
      </div>
    </form>

    <template #footer>
      <bo-button @click="isFormModalOpen = false">Cancel</bo-button>
      <bo-button @click="handleFormSubmit">Submit</bo-button>
    </template>
  </bo-modal>
</div>

## Behavior Options

Control how the modal responds to user interactions.

```vue
<!-- Disable backdrop click to close -->
<bo-modal v-model="isModalOpen" title="No Backdrop Close" :close-on-backdrop="false">
	<p>This modal won't close when clicking the backdrop.</p>
</bo-modal>

<!-- Disable escape key to close -->
<bo-modal v-model="isModalOpen" title="No Escape Close" :close-on-escape="false">
	<p>This modal won't close when pressing Escape.</p>
</bo-modal>

<!-- Hide close button -->
<bo-modal v-model="isModalOpen" title="No Close Button" :show-close="false">
	<p>This modal has no close button.</p>
	<template #footer>
		<bo-button @click="isModalOpen = false">Done</bo-button>
	</template>
</bo-modal>

<!-- Allow body scroll -->
<bo-modal v-model="isModalOpen" title="Allow Scroll" :prevent-body-scroll="false">
	<p>The page can still scroll while this modal is open.</p>
</bo-modal>
```

<div style="margin-top: 1rem;">
  <bo-button @click="isNoCloseModalOpen = true">Open Restricted Modal</bo-button>
  <bo-modal
    v-model="isNoCloseModalOpen"
    title="Restricted Modal"
    :close-on-backdrop="false"
    :close-on-escape="false"
    :show-close="false"
  >
    <p>This modal can only be closed using the button below.</p>
    <p>Backdrop clicks and Escape key are disabled.</p>

    <template #footer>
      <bo-button @click="isNoCloseModalOpen = false">Close Modal</bo-button>
    </template>
  </bo-modal>
</div>

## Events

Listen to modal lifecycle events.

```vue
<bo-modal
	v-model="isModalOpen"
	title="Event Modal"
	@open="handleOpen"
	@close="handleClose"
	@update:modelValue="handleUpdate"
>
	<p>Modal content</p>
</bo-modal>
```

## API Reference

### Props

| Name                | Type          | Default        | Description                                |
| ------------------- | ------------- | -------------- | ------------------------------------------ |
| `id`                | `string`      | auto-generated | Unique identifier for the modal element    |
| `dataTestId`        | `string`      | `'bo-modal'`   | Data test ID for testing                   |
| `modelValue`        | `boolean`     | required       | Whether the modal is open (v-model)        |
| `title`             | `string`      | -              | The title displayed in the header          |
| `size`              | `BoModalSize` | `md`           | Size of the modal                          |
| `showClose`         | `boolean`     | `true`         | Whether to show the close button           |
| `closeOnBackdrop`   | `boolean`     | `true`         | Whether clicking backdrop closes the modal |
| `closeOnEscape`     | `boolean`     | `true`         | Whether pressing Escape closes the modal   |
| `preventBodyScroll` | `boolean`     | `true`         | Whether to prevent body scroll when open   |
| `customCssClass`    | `string`      | -              | Custom CSS class for styling               |
| `role`              | `string`      | `'dialog'`     | ARIA role attribute                        |
| `ariaLabel`         | `string`      | -              | Accessible label for screen readers        |
| `ariaLabelledBy`    | `string`      | -              | ID of element that labels the modal        |
| `ariaDescribedBy`   | `string`      | -              | ID of element that describes the modal     |
| `ariaLive`          | `AriaLive`    | `'polite'`     | Live region behavior                       |

### BoModalSize Enum

```ts
enum BoModalSize {
	sm = 'sm', // 400px
	md = 'md', // 600px (default)
	lg = 'lg', // 800px
	xl = 'xl', // 1200px
	full = 'full', // Almost full viewport
}
```

### Events

| Name                | Payload   | Description                               |
| ------------------- | --------- | ----------------------------------------- |
| `update:modelValue` | `boolean` | Emitted when modal opens/closes (v-model) |
| `open`              | -         | Emitted when modal opens                  |
| `close`             | -         | Emitted when modal closes                 |

### Slots

| Name      | Description                                   |
| --------- | --------------------------------------------- |
| `default` | Main content of the modal body                |
| `header`  | Custom header content (replaces title)        |
| `footer`  | Footer content (typically for action buttons) |

## Features

### Accessibility

The modal component includes comprehensive accessibility features:

- **Focus Management**: Automatically focuses the first focusable element when opened
- **Focus Trapping**: Keeps focus within the modal using Tab key
- **Focus Restoration**: Returns focus to the trigger element when closed
- **Keyboard Navigation**:
  - `Escape` - Close modal (configurable)
  - `Tab` - Navigate between focusable elements
  - `Shift + Tab` - Navigate backwards
- **ARIA Attributes**: `role="dialog"`, `aria-modal="true"`, `aria-label`
- **Screen Reader Support**: Proper labeling and live region updates

### Body Scroll Prevention

By default, the modal prevents scrolling of the page body when open. This can be disabled with `prevent-body-scroll="false"`.

### Backdrop

The modal includes a semi-transparent backdrop with blur effect. Clicking the backdrop closes the modal by default (configurable with `close-on-backdrop`).

### Animations

Smooth fade and scale transitions when opening and closing the modal.

### Dark Mode

The modal automatically adapts to dark mode with appropriate colors:

- Background: `neutral-800`
- Border: `neutral-700`
- Text: `neutral-100`
- Backdrop: Darker with more opacity

## Styling Features

- **Responsive**: Adapts to different screen sizes with padding
- **Scrollable Body**: Long content scrolls within the modal body
- **Custom Scrollbar**: Styled scrollbar for better aesthetics
- **Flexible Layout**: Header, body, and footer sections with proper spacing
- **Shadow**: Elevated appearance with box shadow

## Best Practices

1. **Always provide a title or aria-label** for accessibility
2. **Use appropriate size** based on content amount
3. **Include action buttons** in the footer for user interaction
4. **Keep content focused** - modals should have a single purpose
5. **Provide a clear way to close** - either close button or action buttons
6. **Consider mobile users** - modals adapt to small screens
7. **Test keyboard navigation** - ensure all interactive elements are accessible

## Type Definitions

```ts
enum BoModalSize {
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
	full = 'full',
}

interface BoModalProps {
	/** The id of the element. */
	id?: string;
	/** The data test id of the element. */
	dataTestId?: string;
	/** Whether the modal is open. */
	modelValue: boolean;
	/** The title of the modal. */
	title?: string;
	/** The size of the modal. */
	size?: BoModalSize;
	/** Whether to show the close button. */
	showClose?: boolean;
	/** Whether clicking the backdrop closes the modal. */
	closeOnBackdrop?: boolean;
	/** Whether pressing Escape closes the modal. */
	closeOnEscape?: boolean;
	/** Whether to prevent body scroll when modal is open. */
	preventBodyScroll?: boolean;
	/** One or multiple css classes to be used for overriding the default styles on the element. */
	customCssClass?: string;
	/** The role of the element. */
	role?: string;
	/** Defines a string value that labels the current element. */
	ariaLabel?: string;
	/** Reference to an element that labels the current element. */
	ariaLabelledBy?: string;
	/** Identifies the element (or elements) that describes the object. */
	ariaDescribedBy?: string;
	/** Indicates that an element will be updated. */
	ariaLive?: AriaLive;
}
```

## Related Components

- [Button](/en/components/button) - Action buttons for modal footer
- [Dropdown](/en/components/dropdown) - Dropdown select component
- [Icon](/en/components/icon) - Icons for modal header
