---
title: Utilities
---

# Utility Classes

Bamboo provides several utility classes to help with common tasks in your application. Each utility is documented in its own dedicated page.

## Available Utilities

| Utility                | Description                                                   | Documentation                                              |
| ---------------------- | ------------------------------------------------------------- | ---------------------------------------------------------- |
| **AccessibilityUtils** | Utilities for enhancing the accessibility of your application | [View Documentation](/pages/utilities/accessibility-utils) |
| **IdentityUtils**      | Utilities for generating unique identifiers                   | [View Documentation](/pages/utilities/identity-utils)      |
| **KeyboardUtils**      | Utilities for handling keyboard interactions                  | [View Documentation](/pages/utilities/keyboard-utils)      |
| **LocalStorageUtils**  | Utilities for interacting with the browser's localStorage API | [View Documentation](/pages/utilities/local-storage-utils) |
| **StringUtils**        | Utilities for common string manipulation operations           | [View Documentation](/pages/utilities/string-utils)        |
| **TailwindUtils**      | Utilities for working with Tailwind CSS classes               | [View Documentation](/pages/utilities/tailwind-utils)      |
| **ThemeUtils**         | Utilities for managing theme appearance                       | [View Documentation](/pages/utilities/theme-utils)         |

## Usage Example

Most utilities are accessed as static methods on their respective utility classes:

```typescript
import { AccessibilityUtils, StringUtils, ThemeUtils, Theme } from '@mrksbnc/bamboo'

// Using AccessibilityUtils
AccessibilityUtils.announceToScreenReader('Form submitted successfully')

// Using StringUtils
const truncated = StringUtils.truncate('This is a long message', 10)

// Using ThemeUtils
ThemeUtils.setTheme(Theme.dark)
```

For detailed examples and API references, please refer to the individual utility documentation pages.
