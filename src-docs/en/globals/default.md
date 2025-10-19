---
title: Global Helpers
---

# Global helpers

The Bamboo package ships composable helpers that start with `use*`. These functions encapsulate cross-component logic so you can reuse the same patterns in your own Vue applications.

| Helper                            | Description                                                                      |
| --------------------------------- | -------------------------------------------------------------------------------- |
| [useColor](/en/globals/use-color) | Normalizes custom color values (hex, rgb, oklch, CSS variables).                 |
| [useCss](/en/globals/use-css)     | Turns conditional objects into class strings, mirroring utility-first workflows. |

You can import them on demand to keep bundles lean:

```ts
import { useColor, useCss } from '@mrksbnc/bamboo'
```

The helpers are safe to call in both client and SSR contexts.
