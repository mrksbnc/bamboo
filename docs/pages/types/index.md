# Types

This document describes the common types used throughout the application.

## Core Type Systems

- [Color System](./colors.md) - Complete color palette and usage guidelines
- [Size System](./sizes.md) - Standard sizing options for components

## Style Types

### `StyleValue`

Type for Vue style values.

```typescript
type StyleValue = string | Record<string, string> | StyleValue[];
```

### `StyleConstruct`

Interface for style and class properties.

```typescript
interface StyleConstruct {
	style?: StyleValue;
	class?: string | string[];
}
```

## Utility Types

### `Nullable<T>`

Type that allows a value to be either T or null.

```typescript
type Nullable<T> = T | null;
```

### `Optional<T>`

Type that makes all properties of T optional.

```typescript
type Optional<T> = {
	[P in keyof T]?: T[P];
};
```

### `Required<T>`

Type that makes all properties of T required.

```typescript
type Required<T> = {
	[P in keyof T]-?: T[P];
};
```

### `Readonly<T>`

Type that makes all properties of T readonly.

```typescript
type Readonly<T> = {
	readonly [P in keyof T]: T[P];
};
```

## Component Props Types

### `BaseProps`

Base interface for component props.

```typescript
interface BaseProps {
	id?: string;
	class?: string | string[];
	style?: StyleValue;
}
```

### `ClickableProps`

Interface for clickable components.

```typescript
interface ClickableProps extends BaseProps {
	disabled?: boolean;
	onClick?: (event: MouseEvent) => void;
}
```

### `FocusableProps`

Interface for focusable components.

```typescript
interface FocusableProps extends BaseProps {
	autofocus?: boolean;
	tabindex?: number;
}
```
