# AccessibilityUtils

The `AccessibilityUtils` class provides utilities for enhancing the accessibility of your application, compliant with WCAG 2.1 AA standards.

## API Reference

### Methods

| Method                      | Parameters                                            | Return Type | Description                                                          |
| --------------------------- | ----------------------------------------------------- | ----------- | -------------------------------------------------------------------- |
| `announceToScreenReader`    | `message: string, priority?: 'polite' \| 'assertive'` | `void`      | Announces messages to screen readers using an ARIA live region       |
| `isHiddenFromScreenReaders` | `element: HTMLElement`                                | `boolean`   | Checks if an element is hidden from screen readers                   |
| `addSkipLink`               | `targetId: string, text?: string`                     | `void`      | Adds a skip link to the page for keyboard users to bypass navigation |
| `generateAccessibleId`      | `prefix: string`                                      | `string`    | Generates a unique ID for labeling elements with ARIA attributes     |

## Usage Examples

### announceToScreenReader

Announces messages to screen readers using an ARIA live region.

```typescript
import { AccessibilityUtils } from '@/utils'

// With default politeness level (polite)
AccessibilityUtils.announceToScreenReader('Item added to cart')

// With higher priority (assertive)
AccessibilityUtils.announceToScreenReader('Form submission error', 'assertive')
```

#### Parameters

- `message`: `string` - The message to announce to screen readers
- `priority`: `'polite' | 'assertive'` - The priority level of the announcement (default: 'polite')

### isHiddenFromScreenReaders

Checks if an element is hidden from screen readers.

```typescript
import { AccessibilityUtils } from '@/utils'

const element = document.getElementById('my-element')
const isHidden = AccessibilityUtils.isHiddenFromScreenReaders(element)

if (isHidden) {
  console.log('Element is hidden from screen readers')
} else {
  console.log('Element is visible to screen readers')
}
```

#### Parameters

- `element`: `HTMLElement` - The element to check
- **Returns**: `boolean` - `true` if the element is hidden from screen readers, `false` otherwise

### addSkipLink

Adds a skip link to the page for keyboard users to bypass navigation.

```typescript
import { AccessibilityUtils } from '@/utils'

// Add a skip link to the main content
AccessibilityUtils.addSkipLink('main-content')

// Add a skip link with custom text
AccessibilityUtils.addSkipLink('main-content', 'Skip to main content')
```

#### Parameters

- `targetId`: `string` - The ID of the element to skip to
- `text`: `string` - The text to display for the skip link (default: 'Skip to main content')

### generateAccessibleId

Generates a unique ID for labeling elements with ARIA attributes.

```typescript
import { AccessibilityUtils } from '@/utils'

// Generate a unique ID with a prefix
const headingId = AccessibilityUtils.generateAccessibleId('section-heading')
// Result: "section-heading-a7b3c9d"

// Use the generated ID for ARIA attributes
<h2 id={headingId}>Section Title</h2>
<p aria-labelledby={headingId}>This is a section of content.</p>
```

#### Parameters

- `prefix`: `string` - The prefix for the ID
- **Returns**: `string` - A unique ID with the specified prefix
