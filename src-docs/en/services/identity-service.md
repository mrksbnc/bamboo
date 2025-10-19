---
title: Identity Service
---

# IdentityService

`IdentityService` centralizes the generation of unique identifiers. Components use it to avoid collisions for `id` attributes and `data-testid` hooks, but you can reuse the helpers in your own app code.

## Basic usage

```ts
import { IdentityService } from '@mrksbnc/bamboo'

const id = IdentityService.instance.getComponentId()
const testId = IdentityService.instance.getDataTestId('dialog-trigger')

console.log(id) // some-id-generated-byUseId
console.log(testId) // test-dialog-trigger-4c05f5e0-40ac-4d63-89c5-17050c52b796
```

Internally the service calls `crypto.randomUUID()` and prefixes the value with the descriptor you pass. When you omit the descriptor, it returns a bare UUID string.

## API

| Member                               | Description                                                                               |
| ------------------------------------ | ----------------------------------------------------------------------------------------- |
| `IdentityService.instance`           | Returns the singleton instance. The instance is created lazily and reused across the app. |
| `getComponentId()`                   | Returns a UUID suitable for an element id based on vue's `useId` function                 |
| `getDataTestId(descriptor?: string)` | Returns a deterministic `test-{descriptor}-{uuid}` token for end-to-end test hooks.       |

## In components

The Bamboo components call the service during `defineProps` defaults to ensure every usage receives deterministic attributes.

```vue
<script lang="ts" setup>
	import { IdentityService } from '@mrksbnc/bamboo'

	const props = withDefaults(defineProps<{ id?: string; dataTestId?: string }>(), {
		id: IdentityService.instance.getComponentId('bo-component'),
		dataTestId: IdentityService.instance.getDataTestId('bo-component'),
	})
</script>
```

Because the id generation is lazy, you can safely call the service in SSR contexts. If `crypto.randomUUID` is unavailable in your runtime, polyfill it once at app bootstrap.
