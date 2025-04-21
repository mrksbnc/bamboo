# Browser Service

The Browser Service provides utilities for browser-related operations and feature detection.

## Methods

### `isTouchDevice()`

Detects if the current device is touch-enabled.

```typescript
isTouchDevice(): boolean
```

### `getBrowserInfo()`

Returns information about the current browser.

```typescript
getBrowserInfo(): {
  name: string;
  version: string;
  platform: string;
}
```

### `supportsFeature(feature: string)`

Checks if the browser supports a specific feature.

```typescript
supportsFeature(feature: string): boolean
```

## Usage Examples

```typescript
import { browserService } from '@/services';

// Check if device is touch-enabled
if (browserService.isTouchDevice()) {
	// Add touch-specific event listeners
}

// Get browser information
const browserInfo = browserService.getBrowserInfo();
console.log(`Running on ${browserInfo.name} ${browserInfo.version}`);

// Check feature support
if (browserService.supportsFeature('IntersectionObserver')) {
	// Use IntersectionObserver
}
```
