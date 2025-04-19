---
title: Utilities
---

# Utility Classes

Bamboo provides several utility classes to help with common tasks in your application. This page documents the available utilities and how to use them.

## Table of Contents

- [AccessibilityUtils](#accessibilityutils)
- [IdentityUtils](#identityutils)
- [KeyboardUtils](#keyboardutils)
- [LocalStorageUtils](#localstorageutils)
- [StringUtils](#stringutils)
- [TailwindUtils](#tailwindutils)
- [ThemeUtils](#themeutils)

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

## LocalStorageUtils

The `LocalStorageUtils` class provides utilities for interacting with the browser's localStorage API safely and with error handling.

### getItem

Gets an item from localStorage.

```typescript
import { LocalStorageUtils } from '@mrksbnc/bamboo'

const value = LocalStorageUtils.getItem('my-key')
```

#### Parameters

- `key`: `string` - The key to retrieve from localStorage
- **Returns**: `string | null` - The value for the given key, or null if it doesn't exist

### setItem

Sets an item in localStorage.

```typescript
import { LocalStorageUtils } from '@mrksbnc/bamboo'

const success = LocalStorageUtils.setItem('my-key', 'my-value')
if (success) {
  console.log('Item was stored successfully')
}
```

#### Parameters

- `key`: `string` - The key to set in localStorage
- `value`: `string` - The value to set
- **Returns**: `boolean` - True if successful, false otherwise

### removeItem

Removes an item from localStorage.

```typescript
import { LocalStorageUtils } from '@mrksbnc/bamboo'

const success = LocalStorageUtils.removeItem('my-key')
```

#### Parameters

- `key`: `string` - The key to remove from localStorage
- **Returns**: `boolean` - True if successful, false otherwise

### clear

Clears all items from localStorage.

```typescript
import { LocalStorageUtils } from '@mrksbnc/bamboo'

const success = LocalStorageUtils.clear()
```

#### Returns

- `boolean` - True if successful, false otherwise

### isAvailable

Checks if localStorage is available in the current environment.

```typescript
import { LocalStorageUtils } from '@mrksbnc/bamboo'

if (LocalStorageUtils.isAvailable()) {
  // Safe to use localStorage
} else {
  // Fallback to alternative storage method
}
```

#### Returns

- `boolean` - True if localStorage is available, false otherwise

### getJSON

Gets an item from localStorage and parses it as JSON.

```typescript
import { LocalStorageUtils } from '@mrksbnc/bamboo'

interface User {
  name: string
  age: number
}

const user = LocalStorageUtils.getJSON<User>('user')
if (user) {
  console.log(user.name, user.age)
}
```

#### Parameters

- `key`: `string` - The key to retrieve from localStorage
- **Returns**: `T | null` - The parsed JSON value, or null if it doesn't exist or can't be parsed

### setJSON

Sets an item in localStorage after stringifying it as JSON.

```typescript
import { LocalStorageUtils } from '@mrksbnc/bamboo'

const user = {
  name: 'John',
  age: 30,
}

const success = LocalStorageUtils.setJSON('user', user)
```

#### Parameters

- `key`: `string` - The key to set in localStorage
- `value`: `T` - The value to stringify and set
- **Returns**: `boolean` - True if successful, false otherwise

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

## ThemeUtils

The `ThemeUtils` class provides utilities for handling theme management, including light, dark, and system themes.

### Theme Enum

```typescript
enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}
```

### getCurrentTheme

Gets the current theme from local storage or defaults to system.

```typescript
import { ThemeUtils, Theme } from '@mrksbnc/bamboo'

const currentTheme = ThemeUtils.getCurrentTheme()
if (currentTheme === Theme.DARK) {
  console.log('Dark theme is active')
}
```

#### Returns

- `Theme` - The current theme (LIGHT, DARK, or SYSTEM)

### setTheme

Sets a theme to local storage and applies it.

```typescript
import { ThemeUtils, Theme } from '@mrksbnc/bamboo'

// Set to dark theme
ThemeUtils.setTheme(Theme.DARK)

// Set to light theme
ThemeUtils.setTheme(Theme.LIGHT)

// Use system preference
ThemeUtils.setTheme(Theme.SYSTEM)
```

#### Parameters

- `theme`: `Theme` - The theme to set (LIGHT, DARK, or SYSTEM)

### applyTheme

Applies the theme to the document.

```typescript
import { ThemeUtils, Theme } from '@mrksbnc/bamboo'

// Apply dark theme
ThemeUtils.applyTheme(Theme.DARK)
```

#### Parameters

- `theme`: `Theme` - The theme to apply (LIGHT, DARK, or SYSTEM)

### isSystemDarkMode

Checks if the system prefers dark mode.

```typescript
import { ThemeUtils } from '@mrksbnc/bamboo'

if (ThemeUtils.isSystemDarkMode()) {
  console.log('System prefers dark mode')
}
```

#### Returns

- `boolean` - True if the system prefers dark mode, false otherwise

### initTheme

Initializes theme based on stored preference or system preference.

```typescript
import { ThemeUtils } from '@mrksbnc/bamboo'

// Call during app initialization
ThemeUtils.initTheme()
```

### toggleTheme

Toggles between light and dark themes.

```typescript
import { ThemeUtils } from '@mrksbnc/bamboo'

// Toggle between light and dark
const toggleButton = document.getElementById('theme-toggle')
toggleButton.addEventListener('click', () => {
  ThemeUtils.toggleTheme()
})
```
