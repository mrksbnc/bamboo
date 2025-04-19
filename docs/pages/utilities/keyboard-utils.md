# KeyboardUtils

The `KeyboardUtils` class provides utilities for handling keyboard interactions, enhancing accessibility and ensuring a consistent keyboard experience.

## API Reference

### Methods

| Method                     | Parameters                                   | Return Type | Description                                                            |
| -------------------------- | -------------------------------------------- | ----------- | ---------------------------------------------------------------------- |
| `registerEnterKeyHandler`  | `event: KeyboardEvent, callback: () => void` | `void`      | Registers a handler for the Enter key                                  |
| `registerEscapeKeyHandler` | `event: KeyboardEvent, callback: () => void` | `void`      | Registers a handler for the Escape key                                 |
| `trapTabKey`               | `event: KeyboardEvent, element: HTMLElement` | `void`      | Ensures keyboard navigation (Tab key) stays within a specified element |

## Usage Examples

### registerEnterKeyHandler

Registers a handler for the Enter key, making interactive elements more accessible.

```typescript
import { KeyboardUtils } from '@/utils'

element.addEventListener('keydown', (e) => {
  KeyboardUtils.registerEnterKeyHandler(e, () => {
    console.log('Enter key pressed')
    // Execute action here
    element.click()
  })
})
```

#### Parameters

- `event`: `KeyboardEvent` - The keyboard event to handle
- `callback`: `() => void` - The function to call when the Enter key is pressed

### registerEscapeKeyHandler

Registers a handler for the Escape key, typically used for closing modals, menus, or cancelling actions.

```typescript
import { KeyboardUtils } from '@/utils'

element.addEventListener('keydown', (e) => {
  KeyboardUtils.registerEscapeKeyHandler(e, () => {
    console.log('Escape key pressed')
    // Execute action here
    closeModal()
  })
})
```

#### Parameters

- `event`: `KeyboardEvent` - The keyboard event to handle
- `callback`: `() => void` - The function to call when the Escape key is pressed

### trapTabKey

Ensures that keyboard navigation (Tab key) stays within a specified element, useful for modal dialogs and other focused UI elements.

```typescript
import { KeyboardUtils } from '@/utils'

// Used in a modal or dialog to keep focus inside
modalElement.addEventListener('keydown', (e) => {
  KeyboardUtils.trapTabKey(e, modalElement)
})
```

#### Parameters

- `event`: `KeyboardEvent` - The keyboard event to handle
- `element`: `HTMLElement` - The element to trap focus within
- `returnFocus`: `boolean` (optional) - If true, focus will return to the first element after tabbing from the last element
