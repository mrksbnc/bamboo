---
title: String Service
---

# StringService

`StringService` exposes small string helpers reused across components. Today it focuses on whitespace checks, but the pattern leaves room for centralizing more string utilities later.

## Basic usage

```ts
import { StringService } from '@mrksbnc/bamboo'

const strings = [null, undefined, '', '   ', 'hello']

const results = strings.map((value) => ({
	value,
	isVisuallyEmpty: StringService.instance.isEmpty(value),
}))

console.table(results)
```

The service treats `null`, `undefined`, and empty strings as _not_ empty, reserving `true` for values that contain only whitespace characters. This mirrors how components distinguish between "no prop passed" and "prop intentionally left blank".

## API

| Member | Description |
| ------ | ----------- |
| `StringService.instance` | Returns the lazily created singleton instance. |
| `isEmpty(value: string \| null \| undefined)` | Returns `true` when the string is defined and trimming it yields an empty string. |

## Component example

When writing a component you can delegate whitespace checks to the service and keep the template focused on rendering:

```vue
<script lang="ts" setup>
import { computed } from 'vue'
import { StringService } from '@mrksbnc/bamboo'

const props = withDefaults(defineProps<{ value?: string }>(), {
	value: undefined,
})

const shouldRenderValue = computed(() => {
	return props.value && !StringService.instance.isEmpty(props.value)
})
</script>
```

By delegating the logic to a shared service you keep component code lean and guarantee that the semantics stay consistent across releases.
