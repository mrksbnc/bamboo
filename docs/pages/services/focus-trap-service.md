# Focus Trap Service

The Focus Trap Service provides a robust solution for managing keyboard focus within modal dialogs and other UI components that require focus containment. It follows accessibility best practices to ensure that keyboard users can navigate effectively within contained areas.

## Features

- Creates a focus trap that prevents keyboard focus from leaving a specified container
- Manages focus restoration when the trap is deactivated
- Handles the Escape key to close the container
- Provides options for controlling initial focus placement
- Supports click outside behavior for closing the container
- Makes content outside the modal inaccessible using ARIA and inert attributes
- Fully compliant with WCAG accessibility standards

## Basic Usage

```js
import { FocusTrapService } from '@mrksbnc/bamboo';

// Get a reference to the modal container
const modal = document.getElementById('my-modal');

// Create a focus trap
const trap = FocusTrapService.instance.useFocusTrap(modal);

// Activate the trap when the modal opens
openModalButton.addEventListener('click', () => {
	modal.style.display = 'block';
	trap.activate();
});

// Deactivate the trap when the modal closes
closeModalButton.addEventListener('click', () => {
	modal.style.display = 'none';
	trap.deactivate();
});
```

## Vue Composable

For Vue components, you can use the included `useFocusTrap` composable:

```vue
<template>
	<button @click="openModal">Open Modal</button>

	<div
		v-if="isModalOpen"
		ref="modalRef"
		class="modal"
	>
		<div class="modal-content">
			<h2>Modal Title</h2>
			<p>Modal content goes here...</p>
			<button @click="closeModal">Close</button>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useFocusTrap } from '@mrksbnc/bamboo';

const isModalOpen = ref(false);
const modalRef = ref(null);

const { activate, deactivate } = useFocusTrap(() => modalRef.value, {
	handleEscapeKey: true,
	onEscape: () => closeModal(),
	closeOnOutsideClick: true,
});

const openModal = () => {
	isModalOpen.value = true;
};

const closeModal = () => {
	isModalOpen.value = false;
};

// Activate trap when modal opens
watch(isModalOpen, (isOpen) => {
	if (isOpen) {
		setTimeout(() => {
			activate();
		}, 0);
	} else {
		deactivate();
	}
});
</script>
```

## API Reference

### FocusTrapService

#### Methods

- `useFocusTrap(container: string | HTMLElement, options?: FocusTrapOptions): { activate: () => void; deactivate: () => void }`
  Creates a focus trap within the specified container.

#### Options

The `FocusTrapOptions` interface provides the following configuration options:

| Option                | Type                                              | Default             | Description                                                                                                                                                                          |
| --------------------- | ------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `returnFocusTo`       | `HTMLElement`                                     | `undefined`         | Element to return focus to when trap is deactivated. If not provided, focus returns to the element that had focus before activation.                                                 |
| `handleEscapeKey`     | `boolean`                                         | `true`              | If true, handles Escape key to deactivate the trap.                                                                                                                                  |
| `onEscape`            | `(e: KeyboardEvent) => void`                      | `undefined`         | Custom handler for Escape key press.                                                                                                                                                 |
| `closeOnOutsideClick` | `boolean`                                         | `false`             | If true, allows user to close the trap by clicking outside the container.                                                                                                            |
| `onOutsideClick`      | `(e: MouseEvent) => void`                         | `undefined`         | Custom handler for outside click.                                                                                                                                                    |
| `initialFocus`        | `HTMLElement \| 'container' \| 'first-focusable'` | `'first-focusable'` | Element to focus when trap is activated. If 'container', the container itself receives focus. If 'first-focusable', the first focusable element within the container receives focus. |

### useFocusTrap Composable

A Vue composable function that creates and manages a focus trap within a Vue component.

```ts
function useFocusTrap(
	container: string | HTMLElement,
	options?: FocusTrapOptions,
): {
	activate: () => void;
	deactivate: () => void;
};
```

## Accessibility Considerations

The Focus Trap Service implements several best practices for modal accessibility:

1. **Focus Management**: Ensures focus is properly trapped within the modal and restored when closed
2. **Keyboard Navigation**: Provides complete keyboard access within the trapped container
3. **Screen Reader Support**: Adds appropriate ARIA attributes for screen reader users
4. **Background Content**: Makes content outside the modal inaccessible to keyboard and screen reader users
5. **Escape Key Support**: Allows users to dismiss the modal with the Escape key
6. **Focus Restoration**: Returns focus to the triggering element when the modal is closed

## Browser Compatibility

The Focus Trap Service works in all modern browsers. For older browsers that don't support the `inert` attribute natively, consider adding the [inert polyfill](https://github.com/WICG/inert).

## Best Practices

- Always provide a visible close button in your modal dialog
- Make sure modals have descriptive titles using `aria-labelledby`
- For complex modals, consider adding descriptions with `aria-describedby`
- When a modal contains a form, focus should typically go to the first form control
- For confirmation dialogs, focus should typically go to the least destructive option (Cancel)
- For content-heavy modals, focus may be better placed on the heading or the modal container itself

## Example: Complex Form Modal

```vue
<template>
	<button @click="openModal">Open Form Modal</button>

	<div
		v-if="isModalOpen"
		ref="modalRef"
		class="modal"
		role="dialog"
		aria-labelledby="modal-title"
		aria-describedby="modal-description"
	>
		<div class="modal-content">
			<h2 id="modal-title">Registration Form</h2>
			<p id="modal-description">Please fill out the following information to register.</p>

			<form @submit.prevent="submitForm">
				<div class="form-group">
					<label for="name">Name:</label>
					<input
						id="name"
						v-model="form.name"
						type="text"
						required
					/>
				</div>

				<div class="form-group">
					<label for="email">Email:</label>
					<input
						id="email"
						v-model="form.email"
						type="email"
						required
					/>
				</div>

				<div class="form-actions">
					<button
						type="button"
						@click="closeModal"
					>
						Cancel
					</button>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useFocusTrap } from '@mrksbnc/bamboo';

const isModalOpen = ref(false);
const modalRef = ref(null);
const form = ref({ name: '', email: '' });

const { activate, deactivate } = useFocusTrap(() => modalRef.value, {
	initialFocus: 'first-focusable',
	handleEscapeKey: true,
	onEscape: () => closeModal(),
	closeOnOutsideClick: true,
});

const openModal = () => {
	isModalOpen.value = true;
};

const closeModal = () => {
	isModalOpen.value = false;
};

const submitForm = () => {
	// Handle form submission
	console.log(form.value);
	closeModal();
};

watch(isModalOpen, (isOpen) => {
	if (isOpen) {
		setTimeout(() => activate(), 0);
	}
});
</script>
```
