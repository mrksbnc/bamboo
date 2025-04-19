# Dark Mode Support

The Bamboo component library includes built-in support for dark mode across all components. This ensures a consistent and accessible user experience in both light and dark themes.

## Using Dark Mode

To enable dark mode in your application, you have two options:

### Option 1: Manual Toggle

```javascript
// Toggle dark mode on/off
function toggleDarkMode() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('bamboo-theme', 'light')
  } else {
    document.documentElement.classList.add('dark')
    localStorage.setItem('bamboo-theme', 'dark')
  }
}
```

### Option 2: Automatic Detection with Manual Override

```javascript
// Check for saved theme preference or use system preference
function initializeDarkMode() {
  const savedTheme = localStorage.getItem('bamboo-theme')

  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark')
  } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('bamboo-theme', 'dark')
  }
}

// Call on page load
initializeDarkMode()
```

## Using ThemeUtils

The Bamboo library provides utility functions for managing dark mode:

```javascript
import { ThemeUtils } from '@/utils'

// Initialize dark mode (recommended on app startup)
ThemeUtils.initializeDarkMode()

// Toggle dark mode
const newTheme = ThemeUtils.toggleDarkMode() // Returns 'dark' or 'light'

// Get current theme
const currentTheme = ThemeUtils.getCurrentTheme() // Returns 'dark' or 'light'
```

## Testing Dark Mode

When developing with Bamboo components, you should test both light and dark modes to ensure your application looks correct in both themes.

You can toggle dark mode in your browser's developer tools by adding or removing the `dark` class from the `html` element.
