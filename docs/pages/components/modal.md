<script setup>
import { BoModal } from '@/components/bo-modal';
import { BoButton } from '@/components/bo-button';

const openModal = ref(false);
const openCustomModal = ref(false);
const openFooterModal = ref(false);
const openWidthModal = ref(false);
</script>

# Modal

The Modal component is a dialog box that appears on top of the main content to display important information or prompt user interaction. It includes features like a title, description, close button, and customizable width. The component is designed with accessibility in mind, supporting keyboard navigation and screen reader announcements.

## Basic Example

```html
<bo-modal
	title="Modal Title"
	description="This is a modal description"
	@close="closeModal"
>
	<template #default>
		<p>Modal content goes here</p>
	</template>
</bo-modal>
```

<hr class="border-gray-200 dark:border-gray-700" />

<div class="flex flex-col gap-4">
<bo-button label="Open Modal" @click="openModal = true" />

<bo-modal v-if="openModal" title="Modal Title" description="This is a modal description" @close="openModal = false">
<template #default>

<p>Modal content goes here</p>
</template>
</bo-modal>
</div>

### Props

| Prop name     | Type                  | Default | Description                                     |
| ------------- | --------------------- | ------- | ----------------------------------------------- |
| `id`          | `string`              | Auto    | Unique identifier for the modal                 |
| `title`       | `string`              | -       | Title of the modal displayed in the header      |
| `description` | `string`              | -       | Description text for the modal below the title  |
| `showClose`   | `boolean`             | `true`  | Whether to show the close button in the header  |
| `width`       | `BoModalWidthOptions` | -       | Custom width configuration for the modal dialog |

### Slots

| Slot name | Description                                               |
| --------- | --------------------------------------------------------- |
| `header`  | Custom header content (overrides title and description)   |
| `default` | Main content of the modal (required)                      |
| `footer`  | Footer content for the modal (typically contains actions) |

### Events

| Event name | Description                                               |
| ---------- | --------------------------------------------------------- |
| `close`    | Emitted when the modal is closed via button or escape key |

### Types

```ts
export interface BoModalWidthOptions {
	px?: number; // Width in pixels (e.g., 500)
	percent?: number; // Width as percentage of viewport (e.g., 80)
	tailwind?: string; // Tailwind class for width (e.g., "w-1/2")
}

export interface BoModalProps {
	id?: string; // Unique identifier
	title?: string; // Modal title
	description?: string; // Modal description
	showClose?: boolean; // Show close button
	width?: BoModalWidthOptions; // Width configuration
}
```

## Custom Header

You can replace the default header with your own custom content:

<div class="flex flex-col gap-4">
<bo-button label="Open Custom Header Modal" @click="openCustomModal = true" />

<bo-modal v-if="openCustomModal" @close="openCustomModal = false">
<template #header>

<div class="flex items-center gap-2">
<bo-icon icon="info-circle" size="lg" />
<h3 class="text-xl font-bold">Custom Header</h3>
</div>
</template>
<template #default>
<p>This modal has a custom header with an icon.</p>
</template>
</bo-modal>

</div>

```html
<bo-modal @close="closeModal">
	<template #header>
		<div class="flex items-center gap-2">
			<bo-icon
				icon="info-circle"
				size="lg"
			/>
			<h3 class="text-xl font-bold">Custom Header</h3>
		</div>
	</template>
	<template #default>
		<p>This modal has a custom header with an icon.</p>
	</template>
</bo-modal>
```

## With Footer

Add a footer to include action buttons:

<div class="flex flex-col gap-4">
<bo-button label="Open Modal with Footer" @click="openFooterModal = true" />

<bo-modal v-if="openFooterModal" title="Confirm Action" description="Are you sure you want to proceed with this action?" @close="openFooterModal = false">
<template #default>

<p>This action cannot be undone.</p>
</template>
<template #footer>
<div class="flex justify-end gap-2 border-t border-gray-200 p-4 dark:border-gray-700">
<bo-button label="Cancel" variant="secondary" @click="openFooterModal = false" />
<bo-button label="Confirm" variant="primary" @click="openFooterModal = false" />
</div>
</template>
</bo-modal>

</div>

```html
<bo-modal
	title="Confirm Action"
	description="Are you sure you want to proceed with this action?"
	@close="closeModal"
>
	<template #default>
		<p>This action cannot be undone.</p>
	</template>
	<template #footer>
		<div class="flex justify-end gap-2 border-t border-gray-200 p-4 dark:border-gray-700">
			<bo-button
				label="Cancel"
				variant="secondary"
				@click="closeModal"
			/>
			<bo-button
				label="Confirm"
				variant="primary"
				@click="confirmAction"
			/>
		</div>
	</template>
</bo-modal>
```

## Custom Width

You can customize the width of the modal using the `width` prop:

<div class="flex flex-col gap-4">
<bo-button label="Open Wide Modal" @click="openWidthModal = true" />

<bo-modal
v-if="openWidthModal"
title="Wide Modal"
description="This modal has a custom width configuration"
:width="{ percent: 80 }"
@close="openWidthModal = false"

> <template #default>

    <p>This modal is 80% of the viewport width.</p>

  </template>
</bo-modal>
</div>

```html
<!-- Using pixel width -->
<bo-modal
	title="Fixed Width"
	:width="{ px: 600 }"
	@close="closeModal"
>
	<!-- Content -->
</bo-modal>

<!-- Using percentage width -->
<bo-modal
	title="Percentage Width"
	:width="{ percent: 80 }"
	@close="closeModal"
>
	<!-- Content -->
</bo-modal>

<!-- Using Tailwind classes -->
<bo-modal
	title="Tailwind Width"
	:width="{ tailwind: 'w-1/2' }"
	@close="closeModal"
>
	<!-- Content -->
</bo-modal>
```

## Accessibility Features

The Modal component implements several accessibility features:

1. **ARIA attributes**: Uses `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and `aria-describedby` to properly identify the dialog to screen readers.
2. **Focus trap**: Traps keyboard focus within the modal when it's open, preventing users from accidentally interacting with content behind the modal.
3. **Focus management**: When opened, the modal automatically focuses on the first focusable element inside it. When closed, focus returns to the element that was focused before the modal opened.
4. **Keyboard navigation**:
   - Press <kbd>Tab</kbd> to navigate through focusable elements within the modal
   - Press <kbd>Shift</kbd> + <kbd>Tab</kbd> to navigate backward
   - Press <kbd>Escape</kbd> to close the modal
5. **Screen reader announcements**: Announces when the dialog is opened and closed.

## Best Practices

When using the Modal component:

1. **Clear titles**: Use concise, descriptive titles that clearly indicate the purpose of the modal.
2. **Keep it focused**: Each modal should focus on a single task or piece of information.
3. **Provide actions**: Include clear action buttons in the footer, typically with a primary action and a way to dismiss the modal.
4. **Limit size**: Avoid modals that are too large or contain too much content. Consider alternative UIs for complex interactions.
5. **Escape hatch**: Always ensure users can close the modal via a close button, cancel button, clicking outside, or pressing Escape.
6. **Responsive design**: Test modals on different screen sizes to ensure content remains accessible.
7. **Avoid nested modals**: Stacking modals creates a confusing user experience.
8. **Use appropriate width**: Choose a width that accommodates your content without requiring excessive scrolling.

## Implementation Example

Here's a complete example of how to implement a modal in your application:

```html
<template>
	<div>
		<bo-button
			label="Open Modal"
			@click="isModalOpen = true"
		/>

		<bo-modal
			v-if="isModalOpen"
			title="User Settings"
			description="Customize your profile settings"
			@close="isModalOpen = false"
		>
			<div class="space-y-4">
				<!-- Modal content here -->
				<p>Your settings form would go here</p>
			</div>

			<template #footer>
				<div class="flex justify-end gap-2 border-t border-gray-200 p-4 dark:border-gray-700">
					<bo-button
						label="Cancel"
						variant="secondary"
						@click="isModalOpen = false"
					/>
					<bo-button
						label="Save Changes"
						variant="primary"
						@click="saveSettings"
					/>
				</div>
			</template>
		</bo-modal>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { BoModal } from '@/components/bo-modal';
	import { BoButton } from '@/components/bo-button';

	const isModalOpen = ref(false);

	function saveSettings() {
		// Handle saving settings
		isModalOpen.value = false;
	}
</script>
```
