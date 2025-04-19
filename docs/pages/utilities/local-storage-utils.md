# LocalStorageUtils

The `LocalStorageUtils` class provides utilities for interacting with the browser's localStorage API safely and with proper error handling.

## API Reference

### Methods

| Method        | Parameters                   | Return Type      | Description                                                    |
| ------------- | ---------------------------- | ---------------- | -------------------------------------------------------------- |
| `getItem`     | `key: string`                | `string \| null` | Gets an item from localStorage                                 |
| `setItem`     | `key: string, value: string` | `boolean`        | Sets an item in localStorage                                   |
| `removeItem`  | `key: string`                | `boolean`        | Removes an item from localStorage                              |
| `clear`       | None                         | `boolean`        | Clears all items from localStorage                             |
| `isAvailable` | None                         | `boolean`        | Checks if localStorage is available in the current environment |
| `getJSON`     | `key: string`                | `T \| null`      | Gets an item from localStorage and parses it as JSON           |
| `setJSON`     | `key: string, value: T`      | `boolean`        | Stringifies a value to JSON and sets it in localStorage        |

## Usage Examples

### getItem

Gets an item from localStorage with proper error handling.

```typescript
import { LocalStorageUtils } from '@/utils'

const value = LocalStorageUtils.getItem('my-key')
if (value !== null) {
  console.log('Retrieved value:', value)
}
```

#### Parameters

- `key`: `string` - The key to retrieve from localStorage
- **Returns**: `string | null` - The value for the given key, or null if it doesn't exist or an error occurred

### setItem

Sets an item in localStorage with proper error handling.

```typescript
import { LocalStorageUtils } from '@/utils'

const success = LocalStorageUtils.setItem('my-key', 'my-value')
if (success) {
  console.log('Item was stored successfully')
} else {
  console.error('Failed to store item')
}
```

#### Parameters

- `key`: `string` - The key to set in localStorage
- `value`: `string` - The value to set
- **Returns**: `boolean` - True if successful, false otherwise

### removeItem

Removes an item from localStorage with proper error handling.

```typescript
import { LocalStorageUtils } from '@/utils'

const success = LocalStorageUtils.removeItem('my-key')
if (success) {
  console.log('Item was removed successfully')
} else {
  console.error('Failed to remove item')
}
```

#### Parameters

- `key`: `string` - The key to remove from localStorage
- **Returns**: `boolean` - True if successful, false otherwise

### clear

Clears all items from localStorage with proper error handling.

```typescript
import { LocalStorageUtils } from '@/utils'

const success = LocalStorageUtils.clear()
if (success) {
  console.log('All items were cleared successfully')
} else {
  console.error('Failed to clear items')
}
```

#### Returns

- `boolean` - True if successful, false otherwise

### isAvailable

Checks if localStorage is available in the current environment (useful for SSR applications and detecting private browsing modes).

```typescript
import { LocalStorageUtils } from '@/utils'

if (LocalStorageUtils.isAvailable()) {
  // Safe to use localStorage
  LocalStorageUtils.setItem('key', 'value')
} else {
  // Fallback to another storage method
  console.warn('localStorage is not available')
}
```

#### Returns

- `boolean` - True if localStorage is available, false otherwise

### getJSON

Gets an item from localStorage and parses it as JSON with proper error handling.

```typescript
import { LocalStorageUtils } from '@/utils'

// Get a complex object from localStorage
interface User {
  id: number
  name: string
  preferences: {
    darkMode: boolean
    language: string
  }
}

const user = LocalStorageUtils.getJSON<User>('user')
if (user) {
  console.log('User name:', user.name)
  console.log('Dark mode:', user.preferences.darkMode)
}
```

#### Parameters

- `key`: `string` - The key to retrieve from localStorage
- **Type Parameter**: `T` - The expected type of the JSON value
- **Returns**: `T | null` - The parsed JSON value, or null if it doesn't exist or parsing failed

### setJSON

Stringifies a value to JSON and sets it in localStorage with proper error handling.

```typescript
import { LocalStorageUtils } from '@/utils'

// Store a complex object in localStorage
const user = {
  id: 123,
  name: 'John Doe',
  preferences: {
    darkMode: true,
    language: 'en',
  },
}

const success = LocalStorageUtils.setJSON('user', user)
if (success) {
  console.log('User data was stored successfully')
} else {
  console.error('Failed to store user data')
}
```

#### Parameters

- `key`: `string` - The key to set in localStorage
- `value`: `T` - The value to stringify and store
- **Type Parameter**: `T` - The type of the value to store
- **Returns**: `boolean` - True if successful, false otherwise
