# IdentityUtils

The `IdentityUtils` class provides utilities for generating unique identifiers for DOM elements and other application components.

## API Reference

### Methods

| Method                       | Parameters       | Return Type | Description                                          |
| ---------------------------- | ---------------- | ----------- | ---------------------------------------------------- |
| `generateRandomId`           | None             | `string`    | Generates a random string ID                         |
| `generateRandomIdWithPrefix` | `prefix: string` | `string`    | Generates a random string ID with a specified prefix |

## Usage Examples

### generateRandomId

Generates a random string ID.

```typescript
import { IdentityUtils } from '@/utils'

const id = IdentityUtils.generateRandomId()
// Result: "a1b2c3d4" (example output)
```

#### Returns

- `string` - A unique random string ID (up to 10 alphanumeric characters)

### generateRandomIdWithPrefix

Generates a random string ID with a specified prefix.

```typescript
import { IdentityUtils } from '@/utils'

const id = IdentityUtils.generateRandomIdWithPrefix('button')
// Result: "button-a1b2c3d4" (example output)
```

#### Parameters

- `prefix`: `string` - The prefix to add to the random ID
- **Returns**: `string` - A unique ID with the specified prefix
