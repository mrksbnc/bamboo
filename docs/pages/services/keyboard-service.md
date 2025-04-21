# Keyboard Service

The Keyboard Service provides utilities for handling keyboard events and shortcuts.

## Methods

### `registerShortcut(shortcut: string, callback: () => void)`

Registers a keyboard shortcut.

```typescript
registerShortcut(shortcut: string, callback: () => void): void
```

### `unregisterShortcut(shortcut: string)`

Unregisters a keyboard shortcut.

```typescript
unregisterShortcut(shortcut: string): void
```

### `handleKeyDown(event: KeyboardEvent)`

Handles keydown events.

```typescript
handleKeyDown(event: KeyboardEvent): void
```

### `isModifierKey(key: string)`

Checks if a key is a modifier key.

```typescript
isModifierKey(key: string): boolean
```

### `getKeyCombination(event: KeyboardEvent)`

Returns the string representation of a key combination.

```typescript
getKeyCombination(event: KeyboardEvent): string
```

## Usage Examples

```typescript
import { keyboardService } from '@/services';

// Register a shortcut
keyboardService.registerShortcut('ctrl+s', () => {
	console.log('Save triggered');
});

// Handle keydown events
document.addEventListener('keydown', (event) => {
	keyboardService.handleKeyDown(event);
});

// Check modifier key
if (keyboardService.isModifierKey('Shift')) {
	// Handle shift key
}

// Get key combination
document.addEventListener('keydown', (event) => {
	const combination = keyboardService.getKeyCombination(event);
	console.log(`Pressed: ${combination}`);
});

// Unregister shortcut
keyboardService.unregisterShortcut('ctrl+s');
```
