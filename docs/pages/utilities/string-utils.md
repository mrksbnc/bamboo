# StringUtils

The `StringUtils` class provides utilities for common string manipulation operations.

## API Reference

### Methods

| Method                 | Parameters     | Return Type | Description                                                                              |
| ---------------------- | -------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `capitalize`           | `str: string`  | `string`    | Capitalizes the first letter of a string                                                 |
| `camelCaseToTitleCase` | `str: string`  | `string`    | Converts a camel case string to title case                                               |
| `isEmptyStr`           | `str: unknown` | `boolean`   | Checks if a string is empty, null, or undefined                                          |
| `safeString`           | `str: unknown` | `string`    | Returns an empty string if the input is undefined or null, otherwise the original string |

## Usage Examples

### capitalize

Capitalizes the first letter of a string.

```typescript
import { StringUtils } from '@/utils'

const capitalized = StringUtils.capitalize('hello world')
// Result: "Hello world"
```

#### Parameters

- `str`: `string` - The string to capitalize
- **Returns**: `string` - The capitalized string

### camelCaseToTitleCase

Converts a camel case string to title case.

```typescript
import { StringUtils } from '@/utils'

const titleCase = StringUtils.camelCaseToTitleCase('helloWorld')
// Result: "Hello World"

const titleCase2 = StringUtils.camelCaseToTitleCase('getUserProfile')
// Result: "Get User Profile"
```

#### Parameters

- `str`: `string` - The camel case string to convert
- **Returns**: `string` - The converted title case string

### isEmptyStr

Checks if a string is empty, null, or undefined.

```typescript
import { StringUtils } from '@/utils'

// Check for empty string
if (StringUtils.isEmptyStr('')) {
  console.log('String is empty')
}

// Check for null or undefined
const maybeString = getUserInput() // Could be null or undefined
if (StringUtils.isEmptyStr(maybeString)) {
  console.log('String is empty, null, or undefined')
}
```

#### Parameters

- `str`: `unknown` - The value to check
- **Returns**: `boolean` - True if the string is empty, null, or undefined

### safeString

Returns an empty string if the input is undefined or null, otherwise it returns the original string.

```typescript
import { StringUtils } from '@/utils'

const userInput = getUserInput() // Could be null or undefined
const safeInput = StringUtils.safeString(userInput)
// Result: "" if userInput is null/undefined, otherwise the original string

// Useful for form inputs
const name = StringUtils.safeString(formData.name)
const email = StringUtils.safeString(formData.email)
```

#### Parameters

- `str`: `unknown` - The value to make safe
- **Returns**: `string` - An empty string if input is null/undefined, otherwise the string value
