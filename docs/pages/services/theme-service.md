# Theme Service

The Theme Service manages application theming and dark mode functionality.

## Methods

### `initializeTheme()`

Initializes the theme system.

```typescript
initializeTheme(): void
```

### `setTheme(theme: 'light' | 'dark')`

Sets the application theme.

```typescript
setTheme(theme: 'light' | 'dark'): void
```

### `toggleTheme()`

Toggles between light and dark themes.

```typescript
toggleTheme(): void
```

### `getCurrentTheme()`

Returns the current theme.

```typescript
getCurrentTheme(): 'light' | 'dark'
```

### `isDarkMode()`

Checks if dark mode is enabled.

```typescript
isDarkMode(): boolean
```

### `addThemeChangeListener(callback: (theme: 'light' | 'dark') => void)`

Adds a listener for theme changes.

```typescript
addThemeChangeListener(callback: (theme: 'light' | 'dark') => void): void
```

### `removeThemeChangeListener(callback: (theme: 'light' | 'dark') => void)`

Removes a theme change listener.

```typescript
removeThemeChangeListener(callback: (theme: 'light' | 'dark') => void): void
```

## Usage Examples

```typescript
import { themeService } from '@/services';

// Initialize theme
themeService.initializeTheme();

// Set theme
themeService.setTheme('dark');

// Toggle theme
themeService.toggleTheme();

// Get current theme
const currentTheme = themeService.getCurrentTheme();
console.log(`Current theme: ${currentTheme}`);

// Check dark mode
if (themeService.isDarkMode()) {
	// Apply dark mode styles
}

// Listen for theme changes
const themeChangeCallback = (theme) => {
	console.log(`Theme changed to: ${theme}`);
};
themeService.addThemeChangeListener(themeChangeCallback);

// Remove listener
themeService.removeThemeChangeListener(themeChangeCallback);
```
