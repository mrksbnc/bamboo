# Dark Mode Support

The Bamboo component library includes built-in support for dark mode across all components. This ensures a consistent and accessible user experience in both light and dark themes.

## How Dark Mode Works

Dark mode in the Bamboo component library is implemented using Tailwind CSS's dark mode functionality with the `class` strategy. This means:

1. Components automatically adapt to dark mode when the `dark` class is present on the `html` element
2. All color adjustments are handled through predefined Tailwind CSS classes
3. No additional configuration is required for individual components

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

## Early Initialization

To prevent a flash of unstyled content (FOUC), you can initialize dark mode before your application loads by adding a script to your HTML:

```html
<script>
  // Run before the app initializes
  ;(function () {
    try {
      const savedTheme = localStorage.getItem('bamboo-theme')

      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('bamboo-theme', 'dark')
      }
    } catch (e) {
      // Fallback to light mode if localStorage is not available
      document.documentElement.classList.remove('dark')
    }
  })()
</script>
```

## Component Behavior in Dark Mode

All Bamboo components have carefully designed dark mode variants:

- **Colors**: Background and text colors automatically adjust for optimal contrast
- **Borders**: Border colors are adjusted to be visible against dark backgrounds
- **Shadows**: Shadow effects are modified for better visibility in dark mode
- **Icons**: Icon colors adapt to maintain visibility

## Testing Dark Mode

When developing with Bamboo components, you should test both light and dark modes to ensure your application looks correct in both themes.

You can toggle dark mode in your browser's developer tools by adding or removing the `dark` class from the `html` element.
