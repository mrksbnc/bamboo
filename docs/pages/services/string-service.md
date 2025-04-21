# String Service

The String Service provides utilities for string manipulation and formatting.

## Methods

### `capitalize(str: string)`

Capitalizes the first letter of a string.

```typescript
capitalize(str: string): string
```

### `truncate(str: string, length: number)`

Truncates a string to a specified length.

```typescript
truncate(str: string, length: number): string
```

### `slugify(str: string)`

Converts a string to a URL-friendly slug.

```typescript
slugify(str: string): string
```

### `formatNumber(num: number)`

Formats a number with commas and decimal places.

```typescript
formatNumber(num: number): string
```

### `formatDate(date: Date)`

Formats a date to a readable string.

```typescript
formatDate(date: Date): string
```

### `sanitize(str: string)`

Removes HTML tags and special characters from a string.

```typescript
sanitize(str: string): string
```

## Usage Examples

```typescript
import { stringService } from '@/services';

// Capitalize string
const capitalized = stringService.capitalize('hello world');
console.log(capitalized); // "Hello world"

// Truncate string
const truncated = stringService.truncate('This is a long string', 10);
console.log(truncated); // "This is a..."

// Create slug
const slug = stringService.slugify('My Blog Post Title');
console.log(slug); // "my-blog-post-title"

// Format number
const formatted = stringService.formatNumber(1234567.89);
console.log(formatted); // "1,234,567.89"

// Format date
const date = new Date();
const formattedDate = stringService.formatDate(date);
console.log(formattedDate); // "January 1, 2023"

// Sanitize string
const sanitized = stringService.sanitize('<script>alert("xss")</script>');
console.log(sanitized); // "alertxss"
```
