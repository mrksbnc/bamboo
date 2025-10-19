---
title: useCss
---

# useCss

`useCss` provides a `merge` helper that turns strings, arrays, or keyed objects into a single space-delimited class string. It mirrors the ergonomics of popular utilities like `clsx` while keeping Bamboo components dependency-free.

## Basic usage

```ts
import { useCss } from '@mrksbnc/bamboo'

const { merge } = useCss()

merge('button primary')
// -> 'button primary'

merge(['button', null, 'is-loading'])
// -> 'button is-loading'

merge({
	'button': true,
	'button--disabled': false,
	'button--ghost': 'true',
})
// -> 'button button--ghost'
```

The helper accepts:

| Input | Behavior |
| ----- | --------- |
| `string` | Returned as-is. |
| `string[]` | Filters falsy values, then joins with a single space. |
| `Record<string, boolean | 'true' | 'false'>` | Keeps keys with truthy values, ignoring falsy entries. |

## Composition example

```vue
<script lang="ts" setup>
import { computed } from 'vue'
import { useCss } from '@mrksbnc/bamboo'

const props = defineProps<{ loading?: boolean }>()
const { merge } = useCss()

const classes = computed(() => {
	return merge({
		'bo-button': true,
		'bo-button--loading': props.loading,
	})
})
</script>

<template>
	<button :class="classes">
		<span><slot /> </span>
	</button>
</template>
```

Because `merge` is a pure function you can call it inline or inside computed properties without worrying about side effects.

::: warning TypeScript return type
`UseCss.merge` is currently typed as returning `void` even though it returns a string at runtime. Cast the result to `string` when you need the exact type until the typings are updated.
:::

