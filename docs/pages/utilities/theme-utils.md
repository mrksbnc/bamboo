# ThemeUtils

The `ThemeUtils` class provides utilities for managing theme appearance in your application, particularly for handling dark mode.

## API Reference

### Types

```typescript
enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}
```

### Methods

| Method                     | Parameters     | Return Type | Description                                            |
| -------------------------- | -------------- | ----------- | ------------------------------------------------------ |
| `getCurrentTheme`          | None           | `Theme`     | Gets the currently saved theme preference              |
| `setTheme`                 | `theme: Theme` | `void`      | Sets the theme preference and applies it               |
| `applyTheme`               | `theme: Theme` | `void`      | Applies the specified theme to the document            |
| `isSystemDarkMode`         | None           | `boolean`   | Checks if the system prefers dark mode                 |
| `initTheme`                | None           | `void`      | Initializes the theme based on saved preference        |
| `setupSystemThemeListener` | None           | `void`      | Sets up a listener for system theme preference changes |
| `toggleTheme`              | None           | `void`      | Toggles between light and dark themes                  |

## Usage Examples

### getCurrentTheme

Gets the currently saved theme preference.

```typescript
import { ThemeUtils, Theme } from '@/utils'

const currentTheme = ThemeUtils.getCurrentTheme()
switch (currentTheme) {
  case Theme.DARK:
    console.log('Dark theme is preferred')
    break
  case Theme.LIGHT:
    console.log('Light theme is preferred')
    break
  case Theme.SYSTEM:
    console.log('System theme preference is active')
    break
}
```

#### Returns

- `Theme` - The currently saved theme preference

### setTheme

Sets the theme preference and applies it.

```typescript
import { ThemeUtils, Theme } from '@/utils'

// Set to dark theme
ThemeUtils.setTheme(Theme.DARK)

// Set to light theme
ThemeUtils.setTheme(Theme.LIGHT)

// Use system preference
ThemeUtils.setTheme(Theme.SYSTEM)
```

#### Parameters

- `theme`: `Theme` - The theme to set

### isSystemDarkMode

Checks if the system prefers dark mode.

```typescript
import { ThemeUtils } from '@/utils'

if (ThemeUtils.isSystemDarkMode()) {
  console.log('System prefers dark mode')
} else {
  console.log('System prefers light mode')
}
```

#### Returns

- `boolean` - True if the system prefers dark mode, false otherwise

### initTheme

Initializes the theme based on the saved preference and sets up listeners if using system preference.

```typescript
import { ThemeUtils } from '@/utils'

// Call on application start
ThemeUtils.initTheme()
```

### toggleTheme

Toggles between light and dark themes. If the current theme is system, it will toggle to the opposite of the system preference.

```typescript
import { ThemeUtils } from '@/utils'

// Toggle between light and dark themes
const toggleButton = document.getElementById('theme-toggle')
toggleButton.addEventListener('click', () => {
  ThemeUtils.toggleTheme()
})
```
