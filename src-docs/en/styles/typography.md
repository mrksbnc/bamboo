---
title: typography
---

# Typography

Bamboo ships with a set of typographic styles like font-size, font-weight, and font-family.
To access these predefined styles, use the `bo-text` component.

These values can be overridden with supplying a custom CSS class or inline style
to the component.

Below is a table of the available custom properties used to influence the typography.

## Font sizes

| Size  | Value      |
| ----- | ---------- |
| `xs`  | `0.625rem` |
| `sm`  | `0.75rem`  |
| `lg`  | `1rem`     |
| `xl`  | `1.125rem` |
| `2xl` | `1.25rem`  |
| `3xl` | `1.5rem`   |
| `4xl` | `1.875rem` |
| `5xl` | `2.25rem`  |
| `6xl` | `3rem`     |
| `7xl` | `3.75rem`  |

```vue
<bo-text value="Hello, World!" size="3xl" />
```

## Font weights

| Weight        | Value |
| ------------- | ----- |
| `thin`        | `100` |
| `extra-light` | `200` |
| `light`       | `300` |
| `medium`      | `500` |
| `semibold`    | `600` |
| `bold`        | `700` |
| `extra-bold`  | `800` |
| `black`       | `900` |

```vue
<bo-text value="Hello, World!" weight="semibold" />
```

## Font families

The following font families are available:

- `sans`
- `mono`
- `serif`

```vue
<bo-text value="Hello, World!" font-family="sans" />
```

## Reference

To see the full list of available custom properties view the `bo-text` documentation.
