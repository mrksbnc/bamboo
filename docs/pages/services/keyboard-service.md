# Keyboard Service

The Keyboard Service provides utilities for handling keyboard events, focus management, and keyboard accessibility.

## Methods

### `useTrapTabKey(container: string | HTMLElement, returnFocusTo?: HTMLElement)`

Creates a focus trap within the specified container, preventing focus from leaving when tabbing through elements. Based on Google's accessibility guidelines and best practices. Returns an object with `activate` and `deactivate` methods to control the trap.

```typescript
useTrapTabKey(container: string | HTMLElement, returnFocusTo?: HTMLElement): {
  activate: () => void;
  deactivate: () => void;
}
```

**Parameters:**

- `container`: Element ID (string) or HTML element to trap focus within
- `returnFocusTo` (optional): Element to return focus to when trap is deactivated

**Returns:**

- An object with:
  - `activate()`: Activates the focus trap
  - `deactivate()`: Deactivates the focus trap and restores focus

### `useEnterKey(handler: KeyHandler)`

Register a handler for Enter key press.

```typescript
useEnterKey(handler: (e: KeyboardEvent) => void): void
```

### `useEscapeKey(handler: KeyHandler)`

Register a handler for Escape key press.

```typescript
useEscapeKey(handler: (e: KeyboardEvent) => void): void
```

### `useArrowKeys(handler: KeyHandler)`

Register a handler for Arrow key navigation.

```typescript
useArrowKeys(handler: (e: KeyboardEvent) => void): void
```

## Usage Examples

### Focus Trap for Modal Dialogs

```typescript
import { KeyboardService } from '@/services';

// Get the modal element
const modal = document.getElementById('my-modal');
const openButton = document.getElementById('open-modal');

// Create a focus trap for the modal
const focusTrap = KeyboardService.instance.useTrapTabKey(modal, openButton);

// When opening the modal
function openModal() {
	modal.setAttribute('aria-hidden', 'false');
	modal.style.display = 'block';
	focusTrap.activate(); // Activate the focus trap
}

// When closing the modal
function closeModal() {
	modal.setAttribute('aria-hidden', 'true');
	modal.style.display = 'none';
	focusTrap.deactivate(); // Deactivate the focus trap and return focus
}

// Handle escape key to close modal
KeyboardService.instance.useEscapeKey(() => {
	closeModal();
});
```

### Handle Enter Key

```typescript
import { KeyboardService } from '@/services';

// Register Enter key handler
KeyboardService.instance.useEnterKey((e) => {
	// Do something when Enter is pressed
	console.log('Enter pressed on:', e.target);
});
```

### Arrow Key Navigation

```typescript
import { KeyboardService } from '@/services';

// Register handler for arrow keys
KeyboardService.instance.useArrowKeys((e) => {
	const target = e.target as HTMLElement;

	switch (e.key) {
		case 'ArrowUp':
			// Navigate up
			break;
		case 'ArrowDown':
			// Navigate down
			break;
		case 'ArrowLeft':
			// Navigate left
			break;
		case 'ArrowRight':
			// Navigate right
			break;
	}
});
```
