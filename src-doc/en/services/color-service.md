---
title: color service
---

# ColorService

`ColorService` centralizes helper functions related to `css` colors

## API

| Member                  | Description                                                                                                                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ColorService.instance` | Returns the singleton instance.                                                                                                                                                             |
| `getValidCssColor()`    | Returns a valid `css style` object with the `color` property. In case the color could be matched to one of the accepted formats it passes the argument otherwise defaults to `currentColor` |

## In components

```vue
<script lang="ts" setup>
	import { ColorService } from '@mrksbnc/bamboo';

	const props = defineProps<{ customCssColor: string }>();

	const validatedColor = computed<StyleValue>(() => {
		return ColorService.instance.getValidCssColor(props.customCssColor);
	});
</script>
```
