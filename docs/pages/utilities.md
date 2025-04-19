---
title: Utilities
---

# Utility Classes

Bamboo provides several utility classes to help with common tasks in your application. This page documents the available utilities and how to use them.

## Table of Contents

- [AccessibilityUtils](#accessibilityutils)
- [IdentityUtils](#identityutils)
- [KeyboardUtils](#keyboardutils)
- [StringUtils](#stringutils)
- [TailwindUtils](#tailwindutils)

## AccessibilityUtils

The `AccessibilityUtils` class provides utilities for enhancing the accessibility of your application, compliant with WCAG 2.1 AA standards.

### announceToScreenReader

Announces messages to screen readers using an ARIA live region.

```typescript
import { AccessibilityUtils } from '@mrksbnc/bamboo'

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
import { AccessibilityUtils } from '@mrksbnc/bamboo'

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
import { AccessibilityUtils } from '@mrksbnc/bamboo'

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
import { AccessibilityUtils } from '@mrksbnc/bamboo'

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

## IdentityUtils

The `IdentityUtils` class provides utilities for generating unique identifiers.

### generateRandomId

Generates a random string ID.

```typescript
import { IdentityUtils } from '@mrksbnc/bamboo'

const id = IdentityUtils.generateRandomId()
// Result: "a1b2c3d4"
```

### generateRandomIdWithPrefix

Generates a random string ID with a specified prefix.

```typescript
import { IdentityUtils } from '@mrksbnc/bamboo'

const id = IdentityUtils.generateRandomIdWithPrefix('button')
// Result: "button-a1b2c3d4"
```

## KeyboardUtils

The `KeyboardUtils` class provides utilities for handling keyboard interactions.

### registerEnterKeyHandler

Registers a handler for the Enter key.

```typescript
import { KeyboardUtils } from '@mrksbnc/bamboo'

element.addEventListener('keydown', (e) => {
  KeyboardUtils.registerEnterKeyHandler(e, () => {
    console.log('Enter key pressed')
  })
})
```

### registerEscapeKeyHandler

Registers a handler for the Escape key.

```typescript
import { KeyboardUtils } from '@mrksbnc/bamboo'

element.addEventListener('keydown', (e) => {
  KeyboardUtils.registerEscapeKeyHandler(e, () => {
    console.log('Escape key pressed')
  })
})
```

### trapTabKey

Ensures that keyboard navigation (Tab key) stays within a specified element.

```typescript
import { KeyboardUtils } from '@mrksbnc/bamboo'

element.addEventListener('keydown', (e) => {
  KeyboardUtils.trapTabKey(e, element)
})
```

## StringUtils

The `StringUtils` class provides utilities for string manipulation.

### isEmptyStr

Checks if a string is empty or undefined.

```typescript
import { StringUtils } from '@mrksbnc/bamboo'

const isEmpty = StringUtils.isEmptyStr('') // true
const isEmpty = StringUtils.isEmptyStr('Hello') // false
```

## TailwindUtils

The `TailwindUtils` class provides utilities for working with Tailwind CSS classes.

### merge

Merges multiple class strings, removing duplicates.

```typescript
import { TailwindUtils } from '@mrksbnc/bamboo'

const classes = TailwindUtils.merge(
  'bg-blue-500',
  'text-white',
  'p-4',
  'bg-blue-500', // Duplicate
)
// Result: "bg-blue-500 text-white p-4"
```
